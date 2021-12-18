import React from "react";
import preloader from "../../../../assets/images/Double Ring-2.1s-200px.svg"
import classes from "./InfoProfile.module.css"
import userIMG from './../../../../assets/images/userImg.png';

class InfoProfile extends React.Component{

    name = React.createRef();
    status = React.createRef();

    state = {
        editMode: false,
    }

    changerLocalState () {
        if (!this.state.editMode) {
            this.setState({editMode: true});
            this.props.changeNewUserDataAC();
        } else {
            this.setState({editMode: false});
        }
    }

    onChange () {
        let newName = this.name.current.value;
        let newStatus = this.status.current.value;
        this.props.changeTextNewDataAC(newName, newStatus);
    }

    render() {
        if (!this.props.dataBase) {return <img src={preloader} alt=""/>}

        return (
            <div className="user">
                <div className='photo'>
                    <img src={!this.props.dataBase.photos.small ? userIMG : this.props.dataBase.photos.small} alt="аватарка" className='userPhoto'/>
                </div>
                <div className={classes.contactsEdit}>
                    {!this.state.editMode &&
                        <div className={classes.info}>
                            <div className={classes.blockName}>
                                <span className={classes.fullName}><b>{this.props.dataBase.fullName}</b></span><br/>
                            </div>
                            <div>
                                {this.props.showContacts(this.props.dataBase.contacts, this.state.editMode)}
                            </div>
                            <div className='city itemNotName'>{!this.props.dataBase.lookingForAJob ?
                                <span>В работе не нуждаюсь</span> : <span>Ищу работу</span>}</div>
                            <br/>
                            <span className='itemNotName'><b>О себе:</b></span>
                            <span className='aboutMyself itemNotName'>{this.props.dataBase.aboutMe}</span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div className={classes.info}>
                            <div className={classes.blockName}>
                                <span className={classes.fullName}>
                                    <b><input ref={this.name} type="text" value={this.props.parentDataBase.newData[0].newName} onChange={this.onChange.bind(this)}/></b>
                                </span><br/>
                            </div>
                            <div>
                                {this.props.showContacts(this.props.dataBase.contacts, this.state.editMode)}
                            </div>
                            <div className='city itemNotName'><input type="text" value={!this.props.dataBase.lookingForAJob ?
                                <span>В работе не нуждаюсь</span> : <span>Ищу работу</span>}/></div>
                            <br/>
                            <span className='itemNotName'><b>О себе:</b></span>
                            <span className='aboutMyself itemNotName'>
                                <input ref={this.status} type="text" value={this.props.parentDataBase.newData[0].newStatus} onChange={this.onChange.bind(this)}/>
                            </span>
                        </div>
                    }
                    <div className={classes.editBtnBlock}>
                        <button className={classes.editBtn} onClick={this.changerLocalState.bind(this)}>
                            {!this.state.editMode ? <span>Редактировать</span> : <span>Готово!</span>}
                        </button>
                    </div>
                </div>
            </div>
        );
    }


};

export default InfoProfile;