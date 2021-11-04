const newTextPost = 'NEW_TEXT_POST',
    createNewPost = 'CREATE_NEW_POST',
    toggleLike = 'ADD_LIKE',
    deletePost = 'DELETE_POST',
    setOthUserProfile = 'SET_USER_OTH_PROFILE',
    setInfoProfileUser = 'SET_INFO_PROFILE_USER';


let initState = {
        infoUser: [],
        otherUserInfo : [],
        posts: [
            {photo: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg', word: "SOMEONE'S POST", likes: 9, id: 0, liked:false,},
            {photo: 'https://cdnb.artstation.com/p/assets/images/images/000/987/927/large/ricky-martinez-walter-white-by-sparatik-d5ged5r.jpg?1443931882', word: 'MY POST', likes: 4, id: 1, liked:false},
            {photo: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg', word: "SOMEONE'S POST", likes: 5, id: 2, liked:false},
            {photo: 'https://cdnb.artstation.com/p/assets/images/images/000/987/927/large/ricky-martinez-walter-white-by-sparatik-d5ged5r.jpg?1443931882', word: 'MY POST', likes: 2, id: 3, liked:false},
            {photo: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg', word: 'SOMEONE\'S POST', likes: 8, id: 4, liked:false},
        ],
        newPostText: '',
}

const profileReducer = (state = initState, action) => {

    let copyState = {...state};
    copyState.posts = [...state.posts];
    copyState.infoUser = [...state.infoUser];

    switch (action.type) {
        case createNewPost:
            let structureNewPost = {
                photo: action.linkAvatar,
                word: state.newPostText,
                likes: 0,
                id: state.posts.length,
                liked: false,
            };
            copyState.posts.push(structureNewPost);
            copyState.newPostText = '';
            return copyState;
        case newTextPost:
            copyState.newPostText = action.newContent;
            return copyState;
        case toggleLike:
            if (copyState.posts[action.id].liked !== true) {
                copyState.posts[action.id].likes++;
                copyState.posts[action.id].liked = true;
            } else {
                copyState.posts[action.id].likes--;
                copyState.posts[action.id].liked = false;
            }
            return copyState;
        case deletePost:
            let afterDeleted = copyState.posts.slice(action.id + 1);
            afterDeleted.forEach(item => {
                item.id -= 1;
                copyState.posts.splice(action.id + 1, item);
            });
            copyState.posts.splice(action.id, 1);
            return copyState;
        case setOthUserProfile:
            copyState.otherUserInfo.length = 0;
            copyState.otherUserInfo.push(action.profileInfo);
            return copyState;
        case setInfoProfileUser:
            copyState.infoUser.push(action.profileInfo);
            return copyState;
        default:
            return state;
    };
};


export const addPostAC = (avatarUser) => ({type: createNewPost, linkAvatar: avatarUser}),
            newTextPostAC = (text) => ({type: newTextPost, newContent: text}),
            toggleLikeAC = (userId) => ({type: toggleLike, id: userId}),
            deletePostAC = (postId) => ({type: deletePost, id: postId}),
            setOthUserProfileAC = (profileInfo) => ({type: setOthUserProfile, profileInfo: profileInfo}),
            setInfoProfileUserAC = (profileInfo) => ({type: setInfoProfileUser, profileInfo: profileInfo});

export default profileReducer;