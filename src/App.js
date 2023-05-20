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
      <Routes>
        <Route path="/login"element={<Login/>} />
        <Route path="/" element={<UserManage/>}/>
        <Route path="/foodManage" element={<FoodManage/>} />
        <Route path="/reportManage" element={<ReportManage/>} />
        <Route path="/completeReportManage" element={<CompleteReportManage/>} />
        <Route path="/userManage" element={<UserManage />}/>
        <Route path="/withdrawUserManage" element={<WithdrawUserManage/>} />
      </Routes>
    </div>
  );
}

export default App;