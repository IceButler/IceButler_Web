import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
    const [currentActive, setCurrentActive] = useState("food");
    const toggleMenu = (path) => {
        setCurrentActive(path)
        console.log(currentActive)
    }

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

    function getMenuIcon(path, isActive) {
        const ob = menuIcons.filter(function (m) {
            return path.toLowerCase().includes(m.type)
        })
        if (isActive) return ob[0].activeIcon;
        else return ob[0].inactiveIcon;
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
                    <h2 className="sidbarTitle">냉집사</h2>
                    <ul key={100} className="sidebarList">
                        {menus.map((menu) => {
                            const toggleIconImg =
                                <img
                                    src={currentActive.toLowerCase().includes(menu.type) ? ToggleActiveIcon : ToggleInactiveIcon}
                                    className="toggleIcon"
                                    alt="toggleIcon"
                                />;
                            const mainLi =
                                <li
                                    key={menu.name}
                                    className={"sidebarListItem" + (currentActive.toLowerCase().includes(menu.type) ? " active" : "")}
                                    currentactive={currentActive}
                                    onClick={() => toggleMenu(menu.path)}
                                >
                                    <img
                                        src={getMenuIcon(menu.path, currentActive.toLowerCase().includes(menu.type))}
                                        className="menuIcon"
                                        alt="menuIcon"
                                    />
                                    {menu.name}
                                    {menu.submenu !== null ? toggleIconImg : null}
                                </li>;
                            
                            if (menu.submenu !== null) {
                                const subMenuLi = menu.submenu.map((sub) => {
                                    return (
                                        <li
                                            key={sub.name}
                                            className={"sidebarListItem" + (currentActive.includes(sub.path) ? " active" : "")}
                                            onClick={() => toggleMenu(sub.path)}>
                                            {sub.name}
                                        </li>
                                    )
                                })
                                const subMenuUl =
                                    <div key={menu.type+"sub"}>
                                        {mainLi}
                                        <ul key={menu.name+"sub"}
                                            className={currentActive.toLowerCase().includes(menu.type) ? "show-menu" : "hide-menu"}>
                                            {subMenuLi}
                                        </ul>
                                    </div>;
                                return (
                                    subMenuUl
                                )
                            }
                            else return(mainLi)
                        })}
                    </ul>
                </div>
                <div className='logoutMenu'>
                    <img
                        src={LogoutIcon}
                        className="menuIcon"
                        alt="menuIcon" />
                    로그아웃
                </div>
            </div>
        </div>
    );
}

export default Sidebar;