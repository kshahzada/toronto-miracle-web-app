import React, { useState, useEffect } from "react";
import axios from 'axios';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import tmLogo from "../assets/torontomiracle_2021_logo_LOGO MAIN.png";
import CardNumber from "./CardNumber";
import CardList from "./CardList";

const { REACT_APP_API_URL } = process.env;

function createVolData(firstName, lastName, email, phoneNumber) {
  return { name: firstName.concat(" ", lastName), email, phoneNumber };
}

function createDonorData(name, email, address, notes) {
  return { name, email, address, notes };
}

function Dashboard() {
  const [volunteerListRows, setVolunteerListRows] = useState([]);
  const [donorListRows, setDonorListRows] = useState([]);

  const [selectedTab, setSelectedTab] = React.useState("1");

  const handleTabSelectionChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const fetchVolunteerList = () => {
    let volunteerListAcc = [];

    // TODO: send actual captain ID 
    axios.get(`${REACT_APP_API_URL}/v1/resources/captains/123/volunteers/`)
      .then(res => {
        console.log(res)
        const volunteers = res.data.message;

        // can switch this data formatting to the back end
        volunteers.forEach(function (record) {
          console.log(record)
          volunteerListAcc = [
            ...volunteerListAcc,
            createVolData(
              record["First Name"],
              record["Last Name"],
              record["Email"],
              record["Phone Number"]
            ),
          ];
        });

        setVolunteerListRows(volunteerListAcc);
      })
  };

  // const fetchDonorList = (base) => {
  //   let donorListAcc = [];

  //   // Get volunteers
  //   base("Contacts")
  //     .select({
  //       filterByFormula: "isDonor",
  //     })
  //     .eachPage(
  //       function (records, fetchNextPage) {
  //         records.forEach(function (record) {
  //           donorListAcc = [
  //             ...donorListAcc,
  //             createDonorData(
  //               record.get("First Name"),
  //               record.get("Email"),
  //               record.get("Address"),
  //               record.get("Notes")
  //             ),
  //           ];
  //         });

  //         fetchNextPage();
  //       },
  //       function done(err) {
  //         if (err) {
  //           console.error(err);
  //           return;
  //         }
  //         setDonorListRows(donorListAcc);
  //       }
  //     );
  // };
  
  useEffect(() => {
    fetchVolunteerList();
    // fetchDonorList();
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        top: 0,
        overflow: 'scroll',
        position: 'fixed',
        bgColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }}
    >
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Avatar
            sx={{ bgcolor: "#199ed9", width: 100, height: 100, margin: 2 }}
            alt="Toronto Miracle logo"
            src={tmLogo}
            variant="square"
          >
            TM
          </Avatar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Toronto Miracle Captain Site
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} justifyContent="center" padding={3}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: "bolder",
            }}
          >
            Bathurst Quay Neighborhood
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TabContext value={selectedTab}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabSelectionChange}
                aria-label="volunteer or donor tab"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Volunteer List" value="1" />
                {/* <Tab label="Donor List" value="2" /> */}
              </TabList>
            </Box>
            <TabPanel value="1">
              <CardList contactListRows={volunteerListRows} />
            </TabPanel>
            <TabPanel value="2">
              <CardList contactListRows={donorListRows} isDonorList />
            </TabPanel>
          </TabContext>
        </Grid>

        {/* <Grid item xs={3}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <CardNumber
                metricNumber={volunteerListRows.length}
                metricDescription="Number of Volunteers"
              />
            </Grid>

            <Grid item xs={3}>
              <CardNumber
                metricNumber={donorListRows.length}
                metricDescription="Number of Donors"
              />
            </Grid>

            <Grid item xs={3}>
              <CardNumber
                metricNumber={3}
                metricDescription="Number of Larger Food Drives"
              />
            </Grid>

            <Grid item xs={3}>
              <CardNumber
                metricNumber={12}
                metricDescription="Number of Volunteer Vehicles"
              />
            </Grid>
          </Grid>
        </Grid>  */}
      </Grid>
    </Box>
  );
}

export default Dashboard;
