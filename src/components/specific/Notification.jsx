import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";

import React, { memo } from "react";
import { sampleNotify } from "../../constants/sampleData";

const Notification = () => {

const FriendReqhandler =({_id,accept}) => {}

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
      </Stack>

      {sampleNotify?.length > 0 ? (
        sampleNotify?.map((i) => (
          <NotificationItem sender={i.sender} _id={i._id} handler={FriendReqhandler} key={i._id}  />
        ))
      ) : (
        <Typography textAlign={"center"}>No notifications </Typography>
      )}
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
const {name ,avatar} = sender

  return (
    <ListItem>
      <Stack direction={"row"} alignItems={"center"} spacing={"0.5rem"} width={"100%"}>
        <Avatar src={avatar} />
        <Typography variant="body1"  sx={{flexglow :1 , 
        display:"-webkit-box",
        WebkitLineClamp:1,
       WebkitBoxOrient:'vertical',
       textOverflow:"hidden",
       textOverflow:"ellipsis",
       width:"100%",
        }} >   {`${name} sent you a friend request`}</Typography>



       <Stack  direction={{
        xs:'column',
       }}>
        <Button onClick={() =>handler({_id,accept:true})}>Accept</Button>
        <Button color="error" onClick={() =>handler({_id,accept:false})}>Reject</Button>
       </Stack>
      </Stack>
    </ListItem>
  );
})

export default Notification;
