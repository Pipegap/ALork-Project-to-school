import React from "react";
import InfoProfile from "./InfoProfile/InfoProfile";
import {connect} from "react-redux";


class InfoProfileCC extends React.Component {



    showContacts = (obj) => {
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
        return finalContactsFormat.map(el => {
            return <span>Мой {el.name} - <a href={el.value} target="_blank"><b>{el.name}</b></a><br/></span>
        })
    }

    render() {
        return (
            <InfoProfile showContacts={this.showContacts} dataBase={this.props.dataBase}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dataBase: state.profilePage.infoUser[0],
    }
}


let infoProfile = connect(mapStateToProps)(InfoProfileCC)

export default infoProfile;