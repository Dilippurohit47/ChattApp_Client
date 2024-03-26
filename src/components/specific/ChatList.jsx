import React from "react";
import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";



const ChatList = ({
  w = "100%",
  chats = [],
  onlineusers = [],
  chatId,
  newMessagesAlert = [{ chatId: "", count: 0 }],
  handleDelteChat,
}) => {


  return (
    <Stack width={w} direction={"column"}  overflow={"auto"} height={"100%"}>
      {chats?.map((data, index) => {
        const { avatar, name, _id, members, groupChat } = data;

        const newMessagealert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members?.some((member) => onlineusers.includes(_id));

        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessagealert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChatOpen={handleDelteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
