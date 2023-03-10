import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/user.png'
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return <div>
        <h1>Users</h1>
        <div className={classes.usersContainer}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : ""}
                    onClick={(e) => { props.onPageChange(p); }}>{p}</span>
            })}
        </div>
        <div className={classes.usersContainer}>
            {
                props.users.map(u => <div key={u.id} className={classes.user}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} alt="User" />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    debugger;
                                    props.unfollow(u.id);

                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    
                                    props.follow(u.id);                                    

                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    </div>
}

export default Users;