
import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { FcCurrencyExchange } from 'react-icons/fc';
import { SiMarketo } from 'react-icons/si';
import { GrInfo } from 'react-icons/gr';
import { BiNews } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

import './navbar.css';

const { SubMenu } = Menu;

export const Navbar = () => {
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
          mode="inline"
        >
          <Menu.Item key="1" icon={<AiFillHome />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FcCurrencyExchange />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SiMarketo />}>
            <Link to="/Markets">Markets</Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<GrInfo />} title="Info">
            <Menu.Item key="4" icon={<BiNews />}>
              <Link to="/news">News</Link>
            </Menu.Item>
            <Menu.Item key="10">Option 4</Menu.Item>
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

