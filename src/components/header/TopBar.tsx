import React from 'react';
import './TopBar.css'
import {HamburgerNavigation} from './hamburger/HamburgerNavigation'

const logoSrc = './bwr-icon.jpg';

export const TopBar: React.FC = () => {
    return (
        <div className="top-bar-body">
            <HamburgerNavigation></HamburgerNavigation>
            <span className="title"> Vehicles: O'coffee Brazil</span>
            <img src={logoSrc} alt="bwr icon"/>       
        </div>
    )
};