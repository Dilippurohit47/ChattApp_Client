import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group,
  MessageSharp,
  Notifications,
  Person,
} from "@mui/icons-material";
import moment from "moment";
import {
  CurveButton,
  SearchField,
} from "../../components/styles/StyleComponent";
import { DoughnutChart, LineChart } from "../../components/specific/Chart";
const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "1rem",
        margin: "1rem 0",
        borderRadius: "1rem",
        
      }}
      
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AdminPanelSettingsIcon
          sx={{
            fontSize: "3rem",
          }}
        />

        <SearchField placeholder="Search....." />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={"1"} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          textAlign={"center"}
          color={"rgba(0,0,0,0.7)"}
        >
          {moment().format("MMM Do YYYY")}
        </Typography>

        <Notifications />
      </Stack>
    </Paper>
  );

  const widgets  = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={"2rem"}
      justifyContent="space-between"
      alignItems="center"
      margin="2rem 0"
    >
      <Widget title={"Users"} value={34} icon={<Person />} />
      <Widget title={"Chats"} value={44} icon={<Group />} />
      <Widget title={"Messages"} value={554} icon={<MessageSharp />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container component={"main"}>{Appbar}</Container>

      <Stack
        direction={{
          xs:"column",
          lg:"row",
        }}
        spacing={"2rem"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={{
          xs:"center",
          lg:"stretch",
        }}
      
   
      >
        <Paper
          elevation={3}
          sx={{
            padding: "2rem 3.5rem",
            borderRadius: "1rem",
            width: "100%",
            maxWidth: "40rem",
            marginLeft: "15rem",
          }}
        >
          <Typography margin={"2rem 0"} variant="h4">
            Last Messages
          </Typography>
          <LineChart value={[1, 2, 3, 4, 5]} />
        </Paper>
        {/* line chart end */}
        <Paper
          elevation={3}
          sx={{
            padding: "1rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", sm: "50%" },
            position: "relative",
            width: "100%",
            maxWidth: "25rem",
          }}
        >
          <DoughnutChart
            labels={["Single chats", "Group Chats"]}
            values={[25, 101]}
          />
          <Stack
            position={"absolute"}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={"0.5rem"}
            width={"100%"}
            height={"100%"}
          >
            <Group />
            <Typography>VS</Typography>
            <Person />
          </Stack>
        </Paper>
      </Stack>
      {widgets}
    </AdminLayout>
  );
};

const Widget = ({ title, value, icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "2rem",
      borderRadius: "1.5rem",
      width: "20rem",
    
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "5rem",
          height: "5rem",
          borderRadius: "50%",
          border: "5px solid rgba(0,0,0,0.8)",
        }}
      >
        {value}
      </Typography>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        {icon}
     <Typography>{title}</Typography>   
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
