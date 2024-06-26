import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const NewGroups = () => {
  const groupName = useInputValidation("");

  const [members, setmembers] = useState(sampleUsers);
  const [selectedMembers, setselectedMembers] = useState([]);

  const selectMemberhandler = (id) => {
    setselectedMembers((prev) =>
      prev.includes(id) ? prev.filter((curr) => curr !== id) : [...prev, id]
    );
  };
  console.log(selectedMembers);
  const submitHandler = () => {};

  const closeHandler =() =>{

  }

  return (
    <Dialog open onClose={closeHandler} >
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          label="Group Name "
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>

        <Stack>
          {members.map((i) => (
            <UserItem user={i} key={i._id} handler={selectMemberhandler} isAdded={selectedMembers.includes(i._id)} />
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error">
            Cancel
          </Button>
          <Button variant="contained" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroups;
