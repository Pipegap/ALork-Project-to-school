import React from "react";
import classesPosts from "../toMakePosts.module.css";


class EnteringPostContent extends React.Component{


    render() {
        return (
            <div className={classesPosts.MakePosts}>
                <textarea ref={this.props.getContentPost} onChange={this.props.onChange} value={this.props.dataBaseProfilePage.newPostText} className={classesPosts.inputPost} name="" cols="50" rows="5" placeholder='Make a post on your page :)'/>
                <div>
                    <input className={classesPosts.btnSend} type="submit" value='Опубликовать' onClick={ this.props.onClick }/>
                </div>
            </div>
        );
    };
};

export default EnteringPostContent;