
let initState = {
    profile: 'Profile',
    messages: 'Messages',
    news: 'News',
    friends: 'Friends',
    musik: 'Musik',
    users: 'Users',
    settings: 'Settings',
    routes: {
        toProfile: '/profile',
        toDialogs: '/dialogs',
        toNews: '/news',
        toFriends: '/friends',
        toMusik: '/musik',
        toUsers: '/findeUsers',
        toSettings: '/settings',
    },
};

let navBarReducer = (state = initState, action) => {

    return state;
}

export default navBarReducer;