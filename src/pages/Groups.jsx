import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  Add,
  Delete,
  Done,
  Edit,
  GroupAdd,
  KeyboardBackspace,
  Menu,
} from "@mui/icons-material";
import React, { Suspense, lazy, memo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { bgGradient, matblack, orange } from "../constants/color";
import AvatarCard from "../components/shared/AvatarCard";

import { Link } from "../components/styles/StyleComponent";
import { sampleChats, sampleUsers } from "../constants/sampleData";
import { useEffect } from "react";
import UserItem from "../components/shared/UserItem";
const ConfirmDelete = lazy(() => import("../components/dialogs/ConfirmDelete"));
const AddmemberDialog = lazy(() =>
  import("../components/dialogs/AddmemberDialog")
);

const Groups = () => {
  const navigate = useNavigate();
  const chatId = useSearchParams()[0].get("group");
  const [isMobile, setisMobile] = useState(false);

  const [isEdit, setisEdit] = useState(false);
  const [groupName, setgroupName] = useState("");
  const [groupNameUpdateValue, setgroupNameUpdateValue] = useState("");
  const isAddmember = false;

  const [confirmDeleteDialog, setconfirmDeleteDialog] = useState(false);

  const navigateBack = () => {
    navigate("/");
  };
  const handleMobile = () => {
    setisMobile(!isMobile);
  };

  const handleMobileClose = () => setisMobile(false);

  const updateGroupName = () => {
    setisEdit(false);
    console.log(groupNameUpdateValue);
  };
  useEffect(() => {
    if (chatId) {
      setgroupName(`group name ${chatId}`);
      setgroupNameUpdateValue(`group name ${chatId}`);
    }

    return () => {
      setgroupName("");
      setgroupNameUpdateValue("");
      setisEdit(false);
    };
  }, [chatId]);

  const OpenconfirmDeleteHandler = () => {
    setconfirmDeleteDialog(true);
    console.log("delte grop");
  };
  const CloseconfirmDeleteHandler = () => {
    setconfirmDeleteDialog(false);
  };
  const OpenAddMemberhandler = () => {
    console.log("Add member");
  };
  const deleteHandler = () => {
    console.log("delete");
  };

  const removeMemberHandler = (id) => {
    console.log("Remove member", id);
  };

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <Tooltip title="menu">
          <IconButton onClick={handleMobile}>
            <Menu />
          </IconButton>
        </Tooltip>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matblack,
            color: "white",
            "&:hover": {
              bgcolor: "white",
              color: "black",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={"1rem"}
        padding={"3rem"}
      >
        {isEdit ? (
          <>
            <TextField
              value={groupNameUpdateValue}
              onChange={(e) => setgroupNameUpdateValue(e.target.value)}
            />
            <IconButton onClick={updateGroupName}>
              <Done />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h4">{groupName}</Typography>
            <IconButton onClick={() => setisEdit(true)}>
              <Edit />
            </IconButton>
          </>
        )}
      </Stack>
    </>
  );

  const ButtonGroup = (
    <>
      <Stack
        direction={{
          sm: "row",
          xs: "column-reverse",
        }}
        spacing={"1rem"}
        p={{
          sm: "1rem",
          xs: "0",
          md: "1rem 4rem",
        }}
      >
        <Button
          size="large"
          color="error"
          startIcon={<Delete />}
          onClick={OpenconfirmDeleteHandler}
        >
          Delete Group{" "}
        </Button>
        <Button
          size="large"
          variant="contained"
          startIcon={<Add />}
          onClick={OpenAddMemberhandler}
        >
          {" "}
          Add Member{" "}
        </Button>
      </Stack>
    </>
  );

  return (
    <>
      <Grid container height={"100vh"}>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          sm={4}
        >
          <GroupList myGroups={sampleChats} chatId={chatId} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            padding: "1rem 3rem",
          }}
        >
          {IconBtns}

          {groupName && (
            <>
              {GroupName}

              <Typography
                margin={"2rem"}
                alignSelf={"flex-start"}
                variant="body1"
              >
                Members
              </Typography>

              <Stack
                maxWidth={"45rem"}
                width={"100%"}
                boxSizing={"border-box"}
                padding={{
                  sm: "1rem",
                  xs: "0",
                  md: "1rem 4rem",
                }}
                spacing={"2rem"}
                height={"50vh"}
                overflow={"auto"}
              >
                {sampleUsers.map((i) => (
                  <UserItem
                    user={i}
                    key={i._id}
                    isAdded
                    styling={{
                      boxShadow: " 0 0 0.5rem rgba(0,0,0,0.2)",
                      padding: "1rem 2rem",
                      borderRadius: "1rem",
                    }}
                    handler={removeMemberHandler}
                  />
                ))}
              </Stack>
              {ButtonGroup}
            </>
          )}
        </Grid>

        {isAddmember && (
          <Suspense fallback={<Backdrop opne />}>
            <AddmemberDialog />
          </Suspense>
        )}

        {confirmDeleteDialog && (
          <Suspense fallback={<Backdrop opne />}>
            <ConfirmDelete
              open={confirmDeleteDialog}
              handleClose={CloseconfirmDeleteHandler}
              deleteHandler={deleteHandler}
            />
          </Suspense>
        )}

        <Drawer
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
          open={isMobile}
          onClose={handleMobileClose}
        >
          <GroupList w={"50vw"} myGroups={sampleChats} chatId={chatId} />
        </Drawer>
      </Grid>
    </>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack
      direction={"column"}
      spacing={"1rem"}
      width={w}
      sx={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem key={group._id} group={group} chatId={chatId} />
        ))
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No Groups
        </Typography>
      )}
    </Stack>
  );
};
const GroupListItem = memo(({ group }) => {
  const { name, avatar, _id, chatId } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack
        direction={"row"}
        spacing={"1rem"}
        alignItems={"center"}
      >
        <AvatarCard  avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
