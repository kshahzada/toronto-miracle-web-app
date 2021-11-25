import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Header from './Header';
import VolunteerList from './VolunteerList';
import DonorList from './DonorList';
import DriveList from './DriveList';
import { getVolunteers, getDonors, getFoodDrives, getStats } from '../api/apiMethods';
import { UserContext } from '../contexts/UserContext';
import NeighbourhoodsStatsList from './NeighourhoodsStatsList';

function Dashboard() {
  const { user } = useContext(UserContext);

  const [volunteerListRows, setVolunteerListRows] = useState([]);
  const [donorListRows, setDonorListRows] = useState([]);
  const [foodDriveListRows, setFoodDriveListRows] = useState([]);
  const [neighbourhoodStats, setNeighbourhoodStats] = useState([]);

  const [selectedTab, setSelectedTab] = React.useState('1');

  const handleTabSelectionChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    const getData = async () => {
      if ('team' in user) {
        const volunteers = await getVolunteers(user.team);
        setVolunteerListRows(volunteers);

        const donors = await getDonors(user.team);
        setDonorListRows(donors);

        const foodDrives = await getFoodDrives(user.team);
        setFoodDriveListRows(foodDrives);

        const stats = await getStats(user.team);
        setNeighbourhoodStats(stats);
      }
    };
    getData();
  }, [user]);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        top: 0,
        overflow: 'scroll',
        position: 'fixed',
        bgColor: '#0093E9',
        backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
      }}
    >
      <Header />
      <Grid container spacing={2} justifyContent="center" padding={3}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: 'bolder',
            }}
          >
            {`${user.firstName} ${user.lastName}'s Captain Site`}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TabContext value={selectedTab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleTabSelectionChange}
                aria-label="volunteer or donor tab"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Volunteer List" value="1" />
                <Tab label="Donor List" value="2" />
                <Tab label="Food Drive List" value="3" />
                <Tab label="Neigbourhoods" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <VolunteerList volunteerRows={volunteerListRows} />
            </TabPanel>
            <TabPanel value="2">
              <DonorList donorRows={donorListRows} />
            </TabPanel>
            <TabPanel value="3">
              <DriveList driveRows={foodDriveListRows} />
            </TabPanel>
            <TabPanel value="4">
              <NeighbourhoodsStatsList neighbourhoodsStatsRows={neighbourhoodStats} />
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
