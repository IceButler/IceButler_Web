import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Sidebar.css'
import FoodManageActiveIcon from 'assets/images/sidebarIcon/foodActive.png'
import ReportManageActiveIcon from 'assets/images/sidebarIcon/reportActive.png'
import UserManageActiveIcon from 'assets/images/sidebarIcon/userActive.png'
import FoodManageInactiveIcon from 'assets/images/sidebarIcon/foodInactive.png'
import ReportManageInactiveIcon from 'assets/images/sidebarIcon/reportInactive.png'
import UserManageInactiveIcon from 'assets/images/sidebarIcon/userInactive.png'
import ToggleActiveIcon from 'assets/images/sidebarIcon/toggleActive.png'
import ToggleInactiveIcon from 'assets/images/sidebarIcon/toggleInactive.png'
import LogoutIcon from 'assets/images/sidebarIcon/logout.png'

function Sidebar() {
    const [isFoodOpen, setFoodMenu] = useState(true);
    const [isReportOpen, setReportMenu] = useState(false);
    const [isUserOpen, setUserMenu] = useState(false);
    const toggleFoodMenu = () => {
        if(!isFoodOpen){
            setFoodMenu(isFoodOpen => !isFoodOpen);
            setReportMenu(false);
            setUserMenu(false);
        }
    }
    const toggleReportMenu = () => {
        if (!isReportOpen) {
            setReportMenu(isReportOpen => !isReportOpen);
            setFoodMenu(false);
            setUserMenu(false);
        }
    }
    const toggleUserMenu = () => {
        if (!isUserOpen) {
            setUserMenu(isUserOpen => !isUserOpen);
            setFoodMenu(false);
            setReportMenu(false);
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <img src={`${process.env.PUBLIC_URL}/logo192.png`} className="logo" alt="logo"></img>
                    <h2 className="sidbarTitle">냉집사</h2>
                    <ul className="sidebarList">
                        <li className={"sidebarListItem" + (isFoodOpen ? " active" : "")} onClick={()=>toggleFoodMenu()}>
                            <img src={isFoodOpen ? FoodManageActiveIcon : FoodManageInactiveIcon} className="menuIcon" alt="menuIcon"></img>
                            식품 관리
                        </li>
                        <li className={"sidebarListItem" + (isReportOpen ? " active" : "")} onClick={()=>toggleReportMenu()}>
                            <img src={isReportOpen ? ReportManageActiveIcon : ReportManageInactiveIcon} className="menuIcon" alt="menuIcon"></img>
                            신고 관리
                            <img src={isReportOpen ? ToggleActiveIcon : ToggleInactiveIcon} className="toggleIcon" alt="toggleIcon"></img>
                        </li>
                        <ul className={isReportOpen ? "show-menu" : "hide-menu"}>
                            <li className={"sidebarListItem" + (isReportOpen ? " active" : "")}>신고 내역</li>
                            <li className={"sidebarListItem" + (isReportOpen ? " active" : "")}>처리 내역</li>
                        </ul>
                        <li className={"sidebarListItem" + (isUserOpen ? " active" : "")} onClick={()=>toggleUserMenu()}>
                            <img src={isUserOpen ? UserManageActiveIcon : UserManageInactiveIcon} className="menuIcon" alt="menuIcon"></img>
                            회원 관리
                            <img src={isUserOpen ? ToggleActiveIcon : ToggleInactiveIcon} className="toggleIcon" alt="toggleIcon"></img>
                        </li>
                        <ul className={isUserOpen ? "show-menu" : "hide-menu"}>
                            <li className={"sidebarListItem" + (isUserOpen ? " active" : "")}>일반 회원</li>
                            <li className={"sidebarListItem" + (isUserOpen ? " active" : "")}>탈퇴 회원</li>
                        </ul>
                    </ul>
                </div>
                <div className='logoutMenu'>
                    <img src={LogoutIcon} className="menuIcon" alt="menuIcon"></img>
                            로그아웃
                </div>
            </div>
        </div>
    );
}

export default Sidebar;