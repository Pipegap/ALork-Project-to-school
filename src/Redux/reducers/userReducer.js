import {authAPI, subscriberAPI, usersAPI} from "../../API/apiRequsets";

const   searchNewText = 'SEARCH_NEW_TEXT',
        toggleFollow = 'ToggleFollow',
        setUsers = 'SET_USERS',
        setPageId = 'SET_PAGE_ID',
        changePage = 'CHANGE_PAGE',
        setTotalCountUsers = 'SET_TOTAL_COUNT',
        clearUserPage = 'CLEAR_USER_PAGE',
        isLoading = 'IS_LOADING',
        clearSubscribingId = 'CLEAR_SUBSCRIBING_ID';

const initState = {
    userPage: [],
    usersOnOnePage: 25,
    totalUsers: 963,
    textSearch: '',
    selectedPage: 1,
    pagesCount: 5,
    subscribingRequests: [],
};


const userReducer = (state = initState, action) => {

    let copyState = {...state};


    switch (action.type) {
        case searchNewText:
            copyState.textSearch = action.text;
            return copyState;
        case toggleFollow:
            copyState.userPage = [...state.userPage];
            (copyState.userPage[action.userId].followed !== true) ?
                copyState.userPage[action.userId].followed = true :
                copyState.userPage[action.userId].followed = false;
            return copyState;
        case setUsers:
            state.userPage = action.users;
            copyState.userPage = [...state.userPage];
            return copyState;
        case setPageId:
            copyState.userPage = [...state.userPage];
            let total = 0;
            action.arr.forEach(item => {
                item.pageId = total;
                total += 1;
            });
            return copyState;
        case changePage:
            copyState.selectedPage = action.int;
            return copyState;
        case setTotalCountUsers:
            copyState.totalUsers = action.totalCount;
            return copyState;
        case clearUserPage:
            copyState.userPage.length = 0;
            return copyState;
        case isLoading:
            copyState.subscribingRequests.push(action.id);
            return copyState;
        case clearSubscribingId:
            copyState.subscribingRequests.length = 0;
            return copyState;
        default:
            return state;
    }
}



export default userReducer;

//---------------ActionMakers-----------------------
export const newTextSearchAC = (text) => ({type:searchNewText, text}),
            toggleFollowAC = (id) => ({type: toggleFollow, userId: id}),
            setUsersAC= (users) => ({type: setUsers, users}),
            setPageIdAC = (arr) => ({type: setPageId, arr}),
            changePageBtnAC = (int) => ({type: changePage, int}),
            setTotalCountAC = (totalCount) => ({type: setTotalCountUsers, totalCount}),
            clearUserPageAC = () => ({type: clearUserPage}),
            clearSubscribingIdAC = () => ({type: clearSubscribingId});


//---------------ThunkMakers-----------------------
export const getUsersTC = (usersOnOnePage, selectedPage, users) => {
    return (dispatch) => {
        if (users.length !== 0) dispatch(clearUserPageAC());
        dispatch(changePageBtnAC(selectedPage));
        usersAPI.setUsers(usersOnOnePage, selectedPage).then(data => {
            dispatch(setUsersAC(data.items));
            dispatch(setPageIdAC(data.items));
        });
    }
}

export const subscriberTC = (followed, id, pageId) => {
    return (dispatch) => {
        subscriberAPI.toggleSubscriber(id, followed).then(response => {
            dispatch(toggleFollowAC(pageId));
            dispatch(clearSubscribingIdAC());
        }).catch(err => {alert('Действие не выполнено! Код ошибки - ' + err.message.slice(err.message.length - 4, err.message.length))});
    }
}


