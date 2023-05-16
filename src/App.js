import 'App.css';
import Login from 'pages/Login/Login'
import Sidebar from 'components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import FoodManage from 'pages/FoodManage/FoodManage'
import ReportManage from 'pages/ReportManage/ReportManage'
import CompleteReportManage from 'pages/ReportManage/CompleteReportManage'
import UserManage from 'pages/UserManage/UserManage'
import WithdrawUserManage from 'pages/UserManage/WithdrawUserManage'

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <Login /> */}
      <Routes>
        <Route path="/" Component={UserManage} />
        <Route path="/foodManage" Component={FoodManage} />
        <Route path="/reportManage" Component={ReportManage} />
        <Route path="/completeReportManage" Component={CompleteReportManage} />
        <Route path="/userManage" Component={UserManage} />
        <Route path="/withdrawUserManage" Component={WithdrawUserManage} />
        <Route path="/login" Component={Login} />
      </Routes>
    </div>
  );
}

export default App;
