import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { Face as FaceIcon , AlternateEmail as UserNameIcon , CalendarMonth} from "@mui/icons-material";

import moment from "moment"

const Profile = () => {
  return (
    <Stack spacing={"2rem"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"bio"}  text={"Dfdfdfdfd"} />
      <ProfileCard heading={"username"} text={"Dfdfdfdfd"} Icon={<UserNameIcon/>} />
      <ProfileCard heading={"Name"} text={"Dfdfdfdfd"} Icon={<FaceIcon/>}  />
      <ProfileCard heading={"Joined"} text={moment().fromNow()} Icon={<CalendarMonth/>}  />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >

{
  Icon && Icon
}

<Stack>
<Typography variant="body1"  >
  {text}
</Typography>
<Typography variant="caption" color={"gray"}  >
  {heading}
</Typography>

</Stack>


  </Stack>
);

export default Profile;
