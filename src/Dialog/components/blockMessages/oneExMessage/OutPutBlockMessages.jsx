import React from "react";
import classes from "../BlockMessages.module.css";

function OutPutBlockMessages(props) {
    return (
        <div>
            { props.showMessages() }
            <div className={classes.blockInput}>
                <input type="text" placeholder='Enter a message...' ref={props.makeRef} value={props.dataBase.dialogsPage.textNewMessage} onChange={ props.onChange } />
                <img ref={props.sendImg} className={classes.sendImg + ' ' + classes.noneDisplay} src="https://cdn3.iconfinder.com/data/icons/mail-2-glyph/512/45-Send-512.png" alt="" onClick={ props.createNewMsg }/>
            </div>
        </div>
    );
}

export default OutPutBlockMessages;