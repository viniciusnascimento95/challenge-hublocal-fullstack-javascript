import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthProvider';


ReactDOM.render(
 
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
