import 'App.css';
import Login from 'pages/Login/Login'
import Sidebar from 'components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import FoodManage from 'pages/FoodManage/FoodManage'
import ReportManage from 'pages/ReportManage/ReportManage'
import UserManage from 'pages/UserManage/UserManage'

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <Login /> */}
      <Routes>
        <Route path="/" Component={UserManage}/>
        <Route path="/foodManage" Component={FoodManage}/>
        <Route path="/reportManage" Component={ReportManage}/>
        <Route path="/userManage" Component={UserManage} />
        <Route path="/login" Component={Login} />
      </Routes>
    </div>
  );
}

export default App;
