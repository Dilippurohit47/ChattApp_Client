import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import React, { Suspense, lazy, useState } from "react";
import { orange } from "../../constants/color";
import {
  Add,
  Group,
  Logout,
  Menu,
  Notifications,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notification"));
const NewGroupDialog = lazy(() => import("../specific/NewGroups"));

const Header = () => {
  const [Mobile, setmobile] = useState(false);
  const [search, setsearch] = useState(false);
  const [newGroup, setnewGroup] = useState(false);
  const [notification, setnotification] = useState(false);

  const handleMobile = () => {
    setmobile(!Mobile);
  };

  const openSearch = () => {
    setsearch(!search);
  };
  const openNewGroup = () => {
    setnewGroup(!newGroup);
  };
  const logOutHandler = () => {
    console.log("logout");
  };

  const navigate = useNavigate();

  const openNotification = () => {
    setnotification(!notification);
  };

  const navigateToGroup = () => {
    navigate("/groups");
  };
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
                cursor: "pointer",
              }}
              onClick={navigateHome}
            >
              ChatApp
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <Menu />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: "1",
              }}
            />
            <Box>
              <IconBtn
                title={"search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<Add />}
                onClick={openNewGroup}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<Group />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title={"Notifications"}
                icon={<Notifications />}
                onClick={openNotification}
              />

              <IconBtn
                title={"Log Out"}
                icon={<Logout />}
                onClick={logOutHandler}
              />
            </Box>



            {search && (
              <Suspense fallback={<Backdrop open />}>
                <SearchDialog />{" "}
              </Suspense>
            )}
            {notification && (
              <Suspense fallback={<Backdrop open />}>
                <NotificationDialog />{" "}
              </Suspense>
            )}
            {newGroup && (
              <Suspense fallback={<Backdrop open />}>
                <NewGroupDialog />{" "}
              </Suspense>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
