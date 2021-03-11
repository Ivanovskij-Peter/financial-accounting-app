import React, {Component} from 'react';
import './userInfo.scss';

import exit from '../../images/logout.svg';

export default class UserInfo extends Component {
    static defaultProps = {
        userName: 'User Name',
        avatarURL: 'https://www.atmeplay.com/images/users/avtar/avtar_nouser.png'
    };

    render() {
        const {userName, avatarURL} = this.props;
        const mobile = window.innerWidth < 768;

        return (
            <div className='user-info'>
                <img className='avatar' src={avatarURL} alt="avatar"/>
                <div className='menu-box'>
                    {mobile ?
                    <button className='icon-exit-button' type='button'>
                        <img src={exit} className='logout-icon' alt="exit-icon"/>
                    </button> : 
                    <>
                    <span className='user-name'>{userName}</span>
                    <span className='line'></span>
                    <button type='button' className='exit-button'>Выйти</button>
                    </>}
                </div>          
            </div>
        )
    };
};

// window.innerWidth < 768

{/* <span className='user-name'>{userName}</span>
<span></span>
<button className='exit-button'>Выйти</button>  */}