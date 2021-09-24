const newTextPost = 'NEW_TEXT_POST',
    createNewPost = 'CREATE_NEW_POST',
    addLike = 'ADD_LIKE',
    deleteLike = 'DELETE_LIKE',
    deletePost = 'DELETE_POST';

let initState = {
        infoUser: [
            {pageProfile: 'https://cdn-images-1.medium.com/fit/t/1600/480/1*tmEky1_UkC1_kzo8fRQdWg.jpeg', name: 'Walter', surname: 'White', age: 50, city: 'Албукерка', info: 'I am a cooker of methamphetamine', photo: 'https://pbs.twimg.com/profile_images/801633757228912640/XJdZjO7T.jpg',}],
        posts: [
            {photo: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg', word: "SOMEONE'S POST", likes: 9, id: 0, liked:false,},
            {photo: 'https://pbs.twimg.com/profile_images/801633757228912640/XJdZjO7T.jpg', word: 'MY POST', likes: 4, id: 1, liked:false},
            {photo: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg', word: "SOMEONE'S POST", likes: 5, id: 2, liked:false},
            {photo: 'https://pbs.twimg.com/profile_images/801633757228912640/XJdZjO7T.jpg', word: 'MY POST', likes: 2, id: 3, liked:false},
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
                id: state.posts.slice(-1)[0].id + 1,
                liked: false,
            };
            copyState.posts.push(structureNewPost);
            copyState.newPostText = '';
            return copyState;
        case newTextPost:
            copyState.newPostText = action.newContent;
            return copyState;
        case addLike:
            copyState.posts[action.id].likes++;
            copyState.posts[action.id].liked = true;
            return copyState;
        case deleteLike:
            copyState.posts[action.id].likes--;
            copyState.posts[action.id].liked = false;
            return copyState;
        case deletePost:
            let afterDeleted = copyState.posts.slice(action.id + 1);
            afterDeleted.forEach(item => {
                item.id -= 1;
                copyState.posts.splice(action.id + 1, item);
            });
            copyState.posts.splice(action.id, 1);
            return copyState;
        default:
            return state;
    };
};


export const addPostActionCreater = (avatarUser) => ({type: createNewPost, linkAvatar: avatarUser}),
            newTextPostActionCreater = (text) => ({type: newTextPost, newContent: text}),
            addLikeActionCreater = (userId) => ({type: addLike, id: userId}),
            deleteLikeActionCreater = (userId) => ({type: deleteLike, id: userId,}),
            deletePostActionCreater = (postId) => ({type: deletePost, id: postId});

export default profileReducer;