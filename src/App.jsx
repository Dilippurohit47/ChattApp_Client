import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import { LayoutLoader } from "./components/layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/Admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const ChatManagement = lazy(() => import("./pages/Admin/ChatManagement"));
const Messagemanagement = lazy(() => import("./pages/Admin/Messagemanagement"));
const UserManagement = lazy(() => import("./pages/Admin/UserManagement"));

import Trial from "./components/shared/Trial"

const App = () => {
  let user = true;

  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
<Route path="/trial" element={<Trial/>} />


<Route path="/admin" element={<AdminLogin/>} />
<Route path="/admin/dashboard" element={<AdminDashboard/>} />
<Route path="/admin/users" element={<UserManagement/>} />
<Route path="/admin/chats" element={<ChatManagement/>} />
<Route path="/admin/messages" element={<Messagemanagement/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
