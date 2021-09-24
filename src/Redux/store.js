import dialogsReducer from "./reducers/dialogsReducer.js";
import profileReducer from "./reducers/profileReducer.js";

//store - OOП

let store = {
    _state : {
        dialogsPage: {
            dialogs: [
                {photo: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg', name: 'Dima', id: 1},
                {photo: 'https://yt3.ggpht.com/ytc/AAUvwniHf0xWsDBIIeMtuFbyVhsEv1X8FZkhNMJuUKkD_Q=s900-c-k-c0x00ffffff-no-rj', name: 'Irina', id: 2},
                {photo: 'https://vraki.net/sites/default/files/inline/images/7_50.jpg', name: 'Ivan', id: 3},
                {photo: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg', name: 'Alexandr', id: 4},
            ],
            messages: [
                {id: 1, content: 'HI', photoDialoger:'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg', time: '18:35',},
                {id: 2, content: "What's up ?", photoDialoger:'https://pbs.twimg.com/profile_images/801633757228912640/XJdZjO7T.jpg', time: '18:38',},
                {id: 3, content: 'I am pretty good', photoDialoger:'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg', time: '18:39',},
                {id: 4, content: 'Are you finishing the dialogers page?', photoDialoger:'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg', time: '18:39',},
                {id: 5, content: 'Yes, I am. Now I am working with messages. I think it is gonna the last part of this page. Maybe It is so just for a while)', photoDialoger:'https://pbs.twimg.com/profile_images/801633757228912640/XJdZjO7T.jpg', time: '18:45',},
                {id: 6, content: "I need your help. Let's make a talk in the evening!", photoDialoger:'https://pbs.twimg.com/profile_images/801633757228912640/XJdZjO7T.jpg', time: '06:00',},
            ],
            textNewMessage: '',
        },
        profilePage: {
            infoUser: [ {
                pageProfile: 'https://cdn-images-1.medium.com/fit/t/1600/480/1*tmEky1_UkC1_kzo8fRQdWg.jpeg',
                name: 'Walter',
                surname: 'White',
                age: 50,
                city: 'Албукерка',
                info: 'I am a cooker of methamphetamine',
                photo: 'https://pbs.twimg.com/profile_images/801633757228912640/XJdZjO7T.jpg',
            } ],
            posts: [
                {photo: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg', word: 'Hello Wrold!', likes: 9, id: 1},
                {photo: 'https://pbs.twimg.com/profile_images/801633757228912640/XJdZjO7T.jpg', word: 'Are you a programmer?', likes: 4, id: 2},
                {photo: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg', word: 'Yes, I am! :)', likes: 5, id: 3},
                {photo: 'https://pbs.twimg.com/profile_images/801633757228912640/XJdZjO7T.jpg', word: 'Oh, it\'s so cool', likes: 2, id: 4},
                {photo: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg', word: 'How did you know?', likes: 8, id: 5},
            ],
            newPostText: '',
        },
        navBar: {
            profile: 'Profile',
            messages: 'Messages',
            news: 'News',
            friends: 'Friends',
            musik: 'Musik',
            settings: 'Settings',
            routes: {
                toProfile: '/profile',
                toDialogs: '/dialogs',
                toNews: '/news',
                toFriends: '/friends',
                toMusik: '/musik',
                toSettings: '/settings',
            }
        },
    },
};



export default store;