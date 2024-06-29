import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Application from './parts/Application';
import AuthRelated from './parts/AuthRelated';

import 'react-windows-ui/config/app-config.css';
import 'react-windows-ui/dist/react-windows-ui.min.css';
import 'react-windows-ui/icons/winui-icons.min.css';
import './App.css';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/auth/*" element={<AuthRelated />} />
        <Route
          path="/*"
          element={user ? <Application /> : <Navigate to="/auth/index" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
