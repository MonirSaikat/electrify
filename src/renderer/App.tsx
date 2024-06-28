import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {
  AppContainer,
  Button,
  NavBar,
  NavBarLink,
  NavBarThemeSwitch,
  NavPageContainer,
} from 'react-windows-ui';

import 'react-windows-ui/config/app-config.css';
import 'react-windows-ui/dist/react-windows-ui.min.css';
import 'react-windows-ui/icons/winui-icons.min.css';
import './App.css';

function Page0() {
  return (
    <NavPageContainer>
      <div className="page-container">
        <h2>Home</h2>
      </div>
    </NavPageContainer>
  );
}

function Page1() {
  return <NavPageContainer style={{ backgroundColor: 'red' }} />;
}

function Page2() {
  return <NavPageContainer style={{ backgroundColor: 'green' }} />;
}

function NavBarRoutes({
  logoutUser
}) {
  const handleLogout = () => {
    logoutUser();
  };
  
  const navigate = useNavigate();
  const [route, setRoute] = useState('/');
  const _navigate = (route) => {
    navigate(route);
    setRoute(route);
  };

  return (
    <AppContainer>
      <NavBar
        title="MHVEN"
        shadowOnScroll
        titleBarMobile={
          <div>
            <span className="app-navbar-name">MHVEN</span>
          </div>
        }
      >
        <NavBarThemeSwitch />

        <h1>Pages</h1>

        <div className="app-hr" />

        <NavBarLink
          text="Home"
          active={route === '/' ?? true}
          onClick={() => _navigate('/')}
          icon={<i className="icons10-home" />}
        />
        <NavBarLink
          text="Page1"
          active={route === 'page1' ?? true}
          onClick={() => _navigate('page1')}
          icon={<i className="icons10-grid-2" />}
        />
        <NavBarLink
          text="Page2"
          active={route === 'page2' ?? true}
          onClick={() => _navigate('page2')}
          icon={<i className="icons10-columns" />}
        />
        <NavBarLink
          text="Logout"
          onClick={handleLogout}
          icon={<i className="icons10-user-remove" />}
        />
      </NavBar>
      <Routes>
        <Route path="/" element={<Page0 />} exact />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </AppContainer>
  );
}

function NoAuth({ handleLogin }) {
  return (
    <div>
      <Button type="primary" value="Login" onClick={handleLogin} />
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  }

  const handleLogin = () => {
    setTimeout(() => {
      setUser({
        username: 'saikat',
      });
    }, 2000);
  };

  return (
    <BrowserRouter basename="/">
      {user ? <NavBarRoutes logoutUser={handleLogout} /> : <NoAuth handleLogin={handleLogin} />}
    </BrowserRouter>
  );
}

export default App;
