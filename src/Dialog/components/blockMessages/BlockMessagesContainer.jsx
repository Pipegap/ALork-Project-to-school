import React from "react";
import {createNewMessageAC, newTextMessageAC} from "../../../Redux/reducers/dialogsReducer";
import {connect} from "react-redux";
import classes from "./BlockMessages.module.css";
import OneExMessage from "./oneExMessage/oneExMessage";
import OutPutBlockMessages from "./oneExMessage/OutPutBlockMessages";
import {withAuthRedirect} from "../../../HOC/components/MainFunc/authRedirect";


class BlockMessagesClassComponent extends React.Component{
    makeRef = React.createRef();
    sendImg = React.createRef();


    onChange = () => {
        let text = this.makeRef.current.value;
        this.props.newTextMessageAC(text);
        (!text) ? this.sendImg.current.classList.add(classes.noneDisplay) : this.sendImg.current.classList.remove(classes.noneDisplay);

    };

    showMessages = () => {
        const messagesItems = this.props.dataBase.dialogsPage.messages.map(el => {
            return <OneExMessage photoDialoger={el.photoDialoger} content={el.content} key={el.id} id={el.id} timeMessage={el.time}/>;
        });
        return messagesItems;
    }

    createNewMsg = () => {
        let avatarUser = this.props.dataBase.profilePage.infoUser[0].photos.small;
        this.props.createNewMessageAC(avatarUser);
        this.sendImg.current.classList.add(classes.noneDisplay);
    };

    render() {
        return (
            <OutPutBlockMessages
                dataBase={this.props.dataBase}
                showMessages={this.showMessages}
                onChange={this.onChange}
                createNewMsg={this.createNewMsg}
                makeRef={this.makeRef} sendImg={this.sendImg}/>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        dataBase: state,
    };
};



let BlockMessagesContainer = connect(mapStateToProps, {createNewMessageAC, newTextMessageAC})(withAuthRedirect(BlockMessagesClassComponent));

export default BlockMessagesContainer;