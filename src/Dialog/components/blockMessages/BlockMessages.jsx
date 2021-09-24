import React from "react";
import classes from './BlockMessages.module.css';
import OneExMessage from "./oneExMessage/oneExMessage";


function BlockMessages (props) {

    let makeRef = React.createRef();
    let sendImg = React.createRef();
    const messagesItems = props.dataBase.dialogsPage.messages.map(el => {
        return <OneExMessage photoDialoger={el.photoDialoger} content={el.content} key={el.id} id={el.id} timeMessage={el.time}/>;
    });

    let createNewMsg = () => {

        let avatarUser = props.dataBase.profilePage.infoUser[0].photo;
        props.createNewMsg(avatarUser);
        sendImg.current.classList.add(classes.noneDisplay);
    };


    let onChange = () => {
        let text = makeRef.current.value;
        props.onChange(text);
        (text === "") ? sendImg.current.classList.add(classes.noneDisplay) : sendImg.current.classList.remove(classes.noneDisplay);
     
    };

    return (
        <div>
            { messagesItems }
            <div className={classes.blockInput}>
                <input type="text" placeholder='Enter a message...' ref={makeRef} value={props.dataBase.dialogsPage.textNewMessage} onChange={ onChange } />
                <img ref={sendImg} className={classes.sendImg + ' ' + classes.noneDisplay} src="https://cdn3.iconfinder.com/data/icons/mail-2-glyph/512/45-Send-512.png" alt="" onClick={ createNewMsg }/>
            </div>
        </div>
    );
};

export default BlockMessages;