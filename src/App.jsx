import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FoodSelector from './components/FoodSelector';
import MenuEditor from './components/MenuEditor';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-container" style={{flexDirection: 'row-reverse'}}>
          <h1 className="navbar-brand">野猪饲养攻略</h1>
          <div className="navbar-menu">
            <Link to="/" className="navbar-link">今天食咩野？</Link>
            <Link to="/menu-editor" className="navbar-link">菜单编辑</Link>
          </div>
        </div>
      </nav>
      <div className="app">
        <Routes>
          <Route path="/" element={<FoodSelector />} />
          <Route path="/menu-editor" element={<MenuEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
