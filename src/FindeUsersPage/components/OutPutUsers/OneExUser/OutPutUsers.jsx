import React from "react";
import classes from "../OutPutUsers.module.css";

function OutPutUsers(props) {
    return (
        <div className={classes.container}>
            <div className={classes.pageCount}>
                {props.pagesCount()}
                {props.pagesArr.map(el => {return <button key={el} className={`${props.selectedPage === el && classes.selectedItem} ${classes.onePageItem}`} onClick={() => {props.changePage(el)}}>{el}</button>})}
            </div>
            {props.oneUser()}
            <div className={classes.search}>
                <input ref={props.searchArea} type="text" placeholder='Search' onChange={props.onChange} value={props.textSearch}/>
            </div>
        </div>
    );
};

export default OutPutUsers;