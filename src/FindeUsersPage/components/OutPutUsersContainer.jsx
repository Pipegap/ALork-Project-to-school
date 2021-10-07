import React from "react";
import {
    changePageBtnActionCreater, clearUserPageActionCreater,
    newTextSearchActionCreater, setPageIdActionCreater, setTotalCountActionCreater,
    setUsersActionCreater, togleFollowActionCreater,
} from "../../Redux/reducers/userReducer";
import {connect} from "react-redux";
import axios from "axios";
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCount}&page=${this.props.selectedPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setPageId(response.data.items);
            // this.props.setTotalCount(response.data.totalCount)
        });
    }


    onChange = () => {
        let text = this.searchArea.current.value;
         this.props.newTextSearch(text);
    };

    oneUser = () => {
        const oneUser = this.props.dataBaseUserPage.userPage.map(el => {
            return <NavLink to={`/findeUsers/${el.id}`}><OneExUser pageId={el.pageId} key={el.id} followed={el.followed} id={el.id} photos={el.photos} name={el.name} toggleFollow={this.props.toggleFollow}/></NavLink>
        });
        return oneUser;
    }


    changePage = (int) => {
        this.props.clearUserPage();
        this.props.changePage(int);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCount}&page=${int}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setPageId(response.data.items);

        })};

    pagesCountNum = (this.props.totalCountUsers % this.props.pageCount !== 0) ? (this.props.totalCountUsers / this.props.pageCount) + 1 : this.props.totalCountUsers / this.props.pageCount;
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
                {this.props.dataBaseUserPage.userPage.length !== 0 ? <OutPutUsers pagesCount={this.pagesCount} changePage={this.changePage} oneUser={this.oneUser} onChange={this.onChange} pagesArr={this.pagesArr} searchArea={this.searchArea} selectedPage={this.props.selectedPage} textSearch={this.props.dataBaseUserPage.textSearch}/> : <img className={classes.downloading} src={preloader}/>}
            </div>
        );
    };
};


let mapStateToProps = (state) => {
    return {
        dataBaseUserPage: state.usersPage,
        pageCount: state.usersPage.pageCount,
        totalCountUsers: state.usersPage.totalUsers,
        selectedPage: state.usersPage.selectedPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        newTextSearch: (text) => {
            dispatch(newTextSearchActionCreater(text))
        },
        toggleFollow: (id) => {
            dispatch(togleFollowActionCreater(id))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreater(users));
        },
        setPageId: (arr) => {
            dispatch(setPageIdActionCreater(arr))
        },
        changePage: (int) => {
            dispatch(changePageBtnActionCreater(int))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountActionCreater(totalCount))
        },
        clearUserPage: () => {
            dispatch(clearUserPageActionCreater())
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutPutUsersAPIContainer);