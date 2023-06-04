import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import './Sidebar.css'
import axios from "axios";
import FoodManageActiveIcon from 'assets/images/sidebarIcon/foodActive.png'
import ReportManageActiveIcon from 'assets/images/sidebarIcon/reportActive.png'
import UserManageActiveIcon from 'assets/images/sidebarIcon/userActive.png'
import FoodManageInactiveIcon from 'assets/images/sidebarIcon/foodInactive.png'
import ReportManageInactiveIcon from 'assets/images/sidebarIcon/reportInactive.png'
import UserManageInactiveIcon from 'assets/images/sidebarIcon/userInactive.png'
import ToggleActiveIcon from 'assets/images/sidebarIcon/toggleActive.png'
import ToggleInactiveIcon from 'assets/images/sidebarIcon/toggleInactive.png'
import LogoutIcon from 'assets/images/sidebarIcon/logout.png'
import { useNavigate } from "react-router-dom";
import { removeCookie } from 'pages/Login/Login.js';

function Sidebar() {
    const movePage = useNavigate();
    const reportMenus = [
        { index: 3, name: "신고 내역", path: "/reportManage" },
        { index: 4, name: "처리 내역", path: "/completeReportManage" }
    ];
    const userMenus = [
        { index: 6, name: "일반 회원", path: "/userManage" },
        { index: 7, name: "탈퇴 회원", path: "/withdrawUserManage" }
    ];
    const menus = [
        { index: 1, name: "식품 관리", path: "/foodManage", submenu: null, type: "food" },
        { index: 2, name: "신고 관리", path: "/reportManage", submenu: reportMenus, type: "report" },
        { index: 5, name: "회원 관리", path: "/userManage", submenu: userMenus, type: "user" }
    ];
    const menuIcons = [
        { type: "food", activeIcon: FoodManageActiveIcon, inactiveIcon: FoodManageInactiveIcon },
        { type: "report", activeIcon: ReportManageActiveIcon, inactiveIcon: ReportManageInactiveIcon },
        { type: "user", activeIcon: UserManageActiveIcon, inactiveIcon: UserManageInactiveIcon }
    ]

    const handleLogout = () => {
        removeCookie('Authorization');
        movePage('/');
        window.location.reload();
    };

    function getMenuIcon(path, isActive) {
        const ob = menuIcons.filter(function (m) {
            return path.toLowerCase().includes(m.type)
        })
        if (isActive) return ob[0].activeIcon;
        else return ob[0].inactiveIcon;
    }

    function UseToggleIconImg(menu) {
        const img =
            <img
                src={useLocation().pathname.toLowerCase().includes(menu.type) ? ToggleActiveIcon : ToggleInactiveIcon}
                className="toggleIcon"
                alt="toggleIcon"
            />;
        if (menu.submenu !== null)
            return img
    }

    function UseMenuIconImg(menu) {
        return (
            <img
                src={getMenuIcon(menu.path, useLocation().pathname.toLowerCase().includes(menu.type))}
                className="menuIcon"
                alt="menuIcon"
            />
        )
    }

    function UseMainMenuItem(menu) {
        return (
            <div className='mainMenu'>
                <NavLink to={menu.path}
                    className={useLocation().pathname.toLowerCase().includes(menu.type) ? "sidebarListItem active" : "sidebarListItem"}>
                    {UseMenuIconImg(menu)}
                    {menu.name}
                    {UseToggleIconImg(menu)}
                </NavLink>
            </div>
        )
    }

    function UseSubMenuItems(menu) {
        return (
            <div className={useLocation().pathname.toLowerCase().includes(menu.type) ? "show-menu" : "hide-menu"} >
                {
                    menu.submenu.map((submenu) => {
                        return (
                            <div className='subMenu' key={submenu.index}>
                                <NavLink to={submenu.path}
                                    className={({ isActive }) => isActive ? "sidebarListItem active" : "sidebarListItem"}>
                                    {submenu.name}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div >
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <img
                        src={`${process.env.PUBLIC_URL}/logo192.png`}
                        className="logo"
                        alt="logo"
                    />
                    <h2 className="sidebarTitle">냉집사</h2>

                    <div className="sidebarList">
                        {menus.map((menu) => {
                            if (menu.submenu !== null)
                                return (
                                    <div className='menus' key={menu.index}>
                                        {UseMainMenuItem(menu)}
                                        {UseSubMenuItems(menu)}
                                    </div>
                                )
                            else
                                return (
                                    <div className='menu' key={menu.index}>
                                        {UseMainMenuItem(menu)}
                                    </div>
                                )
                        })}
                    </div>
                </div>
            </div>
            <div className='logoutMenu' onClick={handleLogout}>
                <img
                    src={LogoutIcon}
                    className="menuIcon"
                    alt="menuIcon" />
                로그아웃
            </div>
        </div>
    );
}

export default Sidebar;