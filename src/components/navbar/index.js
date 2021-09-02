
import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

import './navbar.css';

const { SubMenu } = Menu;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  function handleResize() {
    setScreenSize(window.innerWidth);
  }
  window.addEventListener('resize', handleResize);

  useEffect(() => {
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  console.log(activeMenu);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <h2 className="logo">Cryptoverse</h2>
        <div className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><AiOutlineMenu /></div>
      </div>

      {
      activeMenu ? (
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.Item key="1" icon={<AiFillHome />}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<AiFillHome />} title="Home 2">
            <Menu.Item key="3">
              <Link to="/explore">Home</Link>
            </Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>

            </SubMenu>
          </SubMenu>
          <SubMenu key="sub2" icon={<AiFillHome />} title="Home 3">
            <Menu.Item key="7">Option 7</Menu.Item>

          </SubMenu>

        </Menu>
      ) : null
  }
    </div>
  );
};

export default Navbar;
