import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const AddmemberDialog = ({ addMember, isLoading, chatId }) => {
  const [members, setmembers] = useState(sampleUsers);
  const [selectedMembers, setselectedMembers] = useState([]);

  const selectMemberhandler = (id) => {
    setselectedMembers((prev) =>
      prev.includes(id) ? prev.filter((curr) => curr !== id) : [...prev, id]
    );
  };

  const addMemberHandler = (id) => {
closeHandler()
  };
  const closeHandler = (id) => {
    setselectedMembers([]);
    setmembers([]);
    
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberhandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button
            variant="contained"
            disabled={isLoading}
            onClick={addMemberHandler}
          >
            Submit Changes
          </Button>
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddmemberDialog;
