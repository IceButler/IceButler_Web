import 'App.css';
import Login from 'pages/Login/Login'
import Sidebar from 'components/Sidebar/Sidebar';
import { Routes, Route, Outlet } from 'react-router-dom';
import FoodManage from 'pages/FoodManage/FoodManage'
import ReportManage from 'pages/ReportManage/ReportManage'
import ReportManageDetail from 'pages/ReportManage/ReportDetail/ReportDetail'
import CompleteReportManage from 'pages/ReportManage/CompleteReportManage'
import UserManage from 'pages/UserManage/UserManage'
import WithdrawUserManage from 'pages/UserManage/WithdrawUserManage'
import Email from 'pages/Email/Email';
import WithdrawEmail from 'pages/Email/WithdrawEmail';

function App() {

  const SidebarLayout = () => (
    <>
      <Sidebar />
      <Outlet />
    </>
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<SidebarLayout />}>
          <Route path="/" element={<FoodManage />} />
          <Route path="/foodManage" element={<FoodManage />} />
          <Route path="/reportManage" element={<ReportManage />} />
          <Route path="/completeReportManage" element={<CompleteReportManage />} />
          <Route path="/userManage" element={<UserManage />} />
          <Route path="/withdrawUserManage" element={<WithdrawUserManage />} />
          <Route path="/reportManage/:recipeReportIdx" element={<ReportManageDetail />} />
          <Route path="/completeReportManage/:recipeReportIdx" element={<ReportManageDetail />} />
          <Route path="/email" element={<Email />} />
          <Route path="/withdrawEmail" element={<WithdrawEmail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;