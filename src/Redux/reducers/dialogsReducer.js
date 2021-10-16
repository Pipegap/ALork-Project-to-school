const createNewMessage = 'CREATE_NEW_MESSAGE';
const newTextMessage = 'NEW_TEXT_MESSAGE';

let initState = {
        dialogs: [
            {photo: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg', name: 'Dima', id: 1},
            {photo: 'https://yt3.ggpht.com/ytc/AAUvwniHf0xWsDBIIeMtuFbyVhsEv1X8FZkhNMJuUKkD_Q=s900-c-k-c0x00ffffff-no-rj', name: 'Irina', id: 2},
            {photo: 'https://vraki.net/sites/default/files/inline/images/7_50.jpg', name: 'Ivan', id: 3},
            {photo: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg', name: 'Alexandr', id: 4},
        ],
        messages: [
            {id: 1, content: 'HI', photoDialoger:'https://cdnb.artstation.com/p/assets/images/images/000/987/927/large/ricky-martinez-walter-white-by-sparatik-d5ged5r.jpg?1443931882', time: '18:35',},
            {id: 2, content: "What's up ?", photoDialoger:'https://cdnb.artstation.com/p/assets/images/images/000/987/927/large/ricky-martinez-walter-white-by-sparatik-d5ged5r.jpg?1443931882', time: '18:38',},
            {id: 3, content: 'I am pretty good', photoDialoger:'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg', time: '18:39',},
            {id: 4, content: 'Are you finishing the dialogers page?', photoDialoger:'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg', time: '18:39',},
            {id: 5, content: 'Yes, I am. Now I am working with messages. I think it is gonna the last part of this page. Maybe It is so just for a while)', photoDialoger:'https://cdnb.artstation.com/p/assets/images/images/000/987/927/large/ricky-martinez-walter-white-by-sparatik-d5ged5r.jpg?1443931882', time: '18:45',},
            {id: 6, content: "I need your help. Let's make a talk in the evening!", photoDialoger:'https://cdnb.artstation.com/p/assets/images/images/000/987/927/large/ricky-martinez-walter-white-by-sparatik-d5ged5r.jpg?1443931882', time: '06:00',},
        ],
        textNewMessage: '',
};

const dialogsReducer = (state = initState, action) => {

    let copyState = {...state};
    copyState.messages = [...state.messages];
    copyState.dialogs = [...state.dialogs];

    switch (action.type) {
        case createNewMessage:
            let time = new Date().toLocaleTimeString();
            let structureNewMsg = {
                id: state.messages.slice(-1)[0].id + 1,
                content: state.textNewMessage,
                photoDialoger: action.avatarUser,
                time: time.slice(0, -3),
            };
            copyState.messages.push(structureNewMsg);
            copyState.textNewMessage = '';
            return copyState;
        case newTextMessage:
            copyState.textNewMessage = action.newContent;
            return copyState;
        default:
            return state;
    };

};


export const createNewMessageAC = (avatarUser) => ({type: createNewMessage, avatarUser: avatarUser});
export const newTextMessageAC = (text) => ({type: newTextMessage, newContent: text});


export default dialogsReducer;