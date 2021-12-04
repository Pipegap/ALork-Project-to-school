import React from "react";
import {getUsersTC, newTextSearchAC, subscriberTC} from "../../Redux/reducers/userReducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import OneExUser from "./OutPutUsers/OneExUser/OneExUser";
import OutPutUsers from "./OutPutUsers/OneExUser/OutPutUsers";
import preloader from "./../../assets/images/Double Ring-2.1s-200px.svg";
import classes from "./OutPutPage.module.css"

class OutPutUsersAPIContainer extends React.Component{

    searchArea = React.createRef();
    total = 0;
    pagesArr = [];

    componentDidMount () {
        this.props.getUsersTC(this.props.usersOnOnePage, this.props.selectedPage, this.props.users);
    }


    onChange = () => {
        let text = this.searchArea.current.value;
         this.props.newTextSearchAC(text);
    };

    oneUser = () => {
        const oneUser = this.props.dataBaseUserPage.userPage.map(el => {
            return <NavLink to={`/findUsers/${el.id}`} className={classes.nawLink}>
                <OneExUser
                    pageId={el.pageId} key={el.id}
                    followed={el.followed} id={el.id}
                    photos={el.photos} name={el.name}
                    state={this.props.state} subscriber={this.props.subscriberTC}
                /></NavLink>
        });
        return oneUser;
    }


    changePage = (int) => {
        this.props.getUsersTC(this.props.usersOnOnePage, int, this.props.users);
    };

    pagesCountNum = (this.props.totalCountUsers % this.props.usersOnOnePage !== 0) ? (this.props.totalCountUsers / this.props.usersOnOnePage) + 1 :
        this.props.totalCountUsers / this.props.usersOnOnePage;

    pagesCount = () => {
        if (this.pagesArr.length === 0 && this.total === 0) {
            for (let i = 1; i <= this.pagesCountNum; i++) {
                this.total++;
                this.pagesArr.push(this.total);
            };
        } else {
            this.pagesArr.length = 0;
            this.total = 0;
            for (let i = 1; i <= this.pagesCountNum; i++) {
                this.total++;
                this.pagesArr.push(this.total);
            };
        }
    };

    render() {
        return (
            <div>
                {this.props.dataBaseUserPage.userPage.length !== 0 ? <OutPutUsers
                    pagesCount={this.pagesCount} changePage={this.changePage}
                    oneUser={this.oneUser} onChange={this.onChange}
                    pagesArr={this.pagesArr} searchArea={this.searchArea}
                    selectedPage={this.props.selectedPage} textSearch={this.props.dataBaseUserPage.textSearch}/>
                    : <img className={classes.downloading} src={preloader}/>}
            </div>
        );
    };
};


let mapStateToProps = (state) => {
    return {
        dataBaseUserPage: state.usersPage,
        usersOnOnePage: state.usersPage.usersOnOnePage,
        totalCountUsers: state.usersPage.totalUsers,
        selectedPage: state.usersPage.selectedPage,
        users: state.usersPage.userPage,
        state: state,
    };
};



export default connect(mapStateToProps, {getUsersTC ,newTextSearchAC, subscriberTC})(OutPutUsersAPIContainer);