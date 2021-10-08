const searchNewText = 'SEARCH_NEW_TEXT',
        toggleFollow = 'ToggleFollow',
        setUsers = 'SET_USERS',
        setPageId = 'SET_PAGE_ID',
        changePage = 'CHANGE_PAGE',
        setTotalCountUsers = 'SET_TOTAL_COUNT',
        clearUserPage = 'CLEAR_USER_PAGE';

const initState = {
    userPage: [],
    pageCount: 25,
    totalUsers: 963,
    textSearch: '',
    selectedPage: 1,
    pagesCount : 5,
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
        default:
            return state;
    }
}



export default userReducer;

export const newTextSearchAC = (text) => ({type:searchNewText, text:text}),
            toggleFollowAC = (id) => ({type: toggleFollow, userId: id}),
            setUsersAC= (users) => ({type: setUsers, users: users}),
            setPageIdAC = (arr) => ({type: setPageId, arr: arr}),
            changePageBtnAC = (int) => ({type: changePage, int: int}),
            setTotalCountAC = (totalCount) => ({type: setTotalCountUsers, totalCount: totalCount}),
            clearUserPageAC = () => ({type: clearUserPage});