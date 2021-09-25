import React from "react";
import classes from "./OutPutUsers.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import OneExUser from "./OneExUser/OneExUser";

let searchArea = React.createRef(),
    total = 0,
    pagesArr = [];
class OutPutUsers extends React.Component{

    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCount}&page=${this.props.selectedPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setPageId(response.data.items);
        });
    }


    onChange = () => {
        let text = searchArea.current.value;
        this.props.newTextSearch(text);
    };

    oneUser = () => {
        const oneUser = this.props.dataBaseUserPage.userPage.map(el => {
            return <NavLink to={`/findeUsers/${el.id}`}><OneExUser pageId={el.pageId} key={el.id} followed={el.followed} id={el.id} photos={el.photos} name={el.name} toggleFollow={this.props.toggleFollow}/></NavLink>
        });
        return oneUser;
    }

    pagesCountNum = (this.props.totalCountUsers % this.props.pageCount !== 0) ? (this.props.totalCountUsers / this.props.pageCount) + 1 : this.props.totalCountUsers / this.props.pageCount;

    changePage = (int) => {
        this.props.changePage(int);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCount}&page=${int}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setPageId(response.data.items);
        });};

    pagesCount = () => {
        pagesArr.length = 0;
        total = 0;
        for (let i = 1; i <= this.pagesCountNum; i++) {
            total++;
            pagesArr.push(total);
        };
    }
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.pageCount}>
                    {this.pagesCount()}
                    {pagesArr.map(el => {return <button key={el} className={this.props.selectedPage === el && classes.selectedItem} onClick={() => {this.changePage(el)}}>{el}</button>})}
                </div>
                {this.oneUser()}
                <div className={classes.search}>
                    <input ref={searchArea} type="text" placeholder='Search' onChange={this.onChange} value={this.props.dataBaseUserPage.textSearch}/>
                </div>
            </div>
        );
    };
};

export default OutPutUsers;