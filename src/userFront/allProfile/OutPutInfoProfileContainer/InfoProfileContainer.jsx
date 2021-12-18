import React from "react";
import InfoProfile from "./InfoProfile/InfoProfile";
import {connect} from "react-redux";
import {changeNewUserDataAC, changeTextNewDataAC} from "../../../Redux/reducers/profileReducer";


class InfoProfileCC extends React.Component {



    showContacts = (obj, value) => {
        let finalContactsFormat = [];
        for (let key in obj) {
            if (obj[key] !== null) {
                let oneContact = {
                    value: obj[key],
                    name: key,
                }
                finalContactsFormat.push(oneContact);
            }
        }
        if (!value) {
            return finalContactsFormat.map(el => {
                return <span>Мой {el.name} - <a href={el.value} target="_blank"><b>{el.name}</b></a><br/></span>
            })
        } else {
            return finalContactsFormat.map(el => {
                return <span>Мой {el.name} - <input type="text" value={el.value}/><br/></span>
            })
        }
    }

    render() {
        return (
            <InfoProfile showContacts={this.showContacts} changeNewUserDataAC={this.props.changeNewUserDataAC} changeTextNewDataAC={changeTextNewDataAC} parentDataBase={this.props.parentDataBase} dataBase={this.props.dataBase}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        parentDataBase: state.profilePage,
        dataBase: state.profilePage.otherUserInfo[0],
    }
}


let infoProfile = connect(mapStateToProps, {changeNewUserDataAC, changeTextNewDataAC})(InfoProfileCC)

export default infoProfile;