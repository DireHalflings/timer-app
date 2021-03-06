import React    from 'react';

import logo     from '../Images/LMP_LOGO.png';

const Header = ({ updateUserStore, userStore }) => {
    /**
     * Helper function that updates parent's userStore according to
     *  the button
     * @param { bool } loading 
     */
    const onLoginButton = (loading) => {
        loading
            ? updateUserStore({...userStore, loading: true})
            : updateUserStore({...userStore, loading: false, isSigningUp: false, isLoggedIn: false, id: null})  
    }

    return (
        <div id='header' className='header'>
            <ul className='header-components'>
                <li><img id='logo' className='logo' src={logo} alt='Logo' /></li>
                { userStore.isLoggedIn
                    ? <li><a id='login-button' className="login-button" onClick={() => onLoginButton(false)}>Log Out</a></li> 
                    : <li><a id='login-button' className="login-button" onClick={() => onLoginButton(true)}>Login</a></li>
                }
            </ul>
        </div>
    );
}

export default Header;