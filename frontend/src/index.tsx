import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthProvider';
import { ListUsers } from './pages/users/ListUsers';
import { ListCompanies } from './pages/companies/ListCompanies';
import { ListTicket } from './pages/tickets/ListTicket';
import reportWebVitals from "./reportWebVitals";
import { CreateCompany } from './pages/companies/CreateCompany';
import { EditUsers } from './pages/companies/EditcCompany';


ReactDOM.render( 
  <AuthProvider>
    <BrowserRouter>
      <Routes>        
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="users" element={<ListUsers />} />
        <Route path="companies" element={<ListCompanies />} />
        <Route path="companies/create" element={<CreateCompany />} />
        <Route path="companies/edit/:id" element={<EditUsers />} />        
        <Route path="tickets" element={<ListTicket />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
