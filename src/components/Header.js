// import React from 'react';
// import '../css/Header.css';
// import sd601 from '../images/sd601.png';
// import '../css/Header.css'
// import Photo from './Photo';

// export default function Header() {
//     return (
//         <div className="header">
//             <Logo />
//             {/* <img className="Header-logo" src={sd601} alt="sd60"/> */}
//             {/* <Photo className="cc"/> */}
//             {/* <p className="left">left</p> */}
//             {/* <p className="cc">Portfolio</p> */}
//             <p>menu</p>
//         </div>
//     )
// }

import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
// import { ReactComponent as Logo } from "../assets/x.svg";
import "../css/Header.css";
import Logo from './Logo';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="#">
                        <Logo />

                    </a>
                </div>

                <div>
                    <ul className={click ? "nav-options active" : "nav-options"}>
                        <li className="option" onClick={closeMobileMenu}>
                            <a href="#">ABOUT</a>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <a href="#">CONTACT</a>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <a href="#">BLOG</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default Header;