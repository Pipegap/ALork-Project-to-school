const searchNewText = 'SEARCH_NEW_TEXT',
        toggleFollow = 'ToggleFollow',
        setUsers = 'SET_USERS',
        setPageId = 'SET_PAGE_ID';


const initState = {
    userPage: [],
    textSearch: '',
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
        default:
            return state;
    }
}



export default userReducer;

export const newTextSearchActionCreater = (text) => ({type:searchNewText, text:text}),
            togleFollowActionCreater = (id) => ({type: toggleFollow, userId: id}),
            setUsersActionCreater = (users) => ({type: setUsers, users: users}),
            setPageIdActionCreater = (arr) => ({type: setPageId, arr: arr});