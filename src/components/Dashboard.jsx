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
import { getVolunteers } from '../api/apiMethods';
import { UserContext } from '../contexts/UserContext';

function Dashboard() {
  const user = useContext(UserContext);

  const [volunteerListRows, setVolunteerListRows] = useState([]);
  // const [donorListRows, setDonorListRows] = useState([]);

  const [selectedTab, setSelectedTab] = React.useState('1');

  const handleTabSelectionChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(async () => {
    if (user) {
      const volunteers = await getVolunteers(user.neighbourhoods[0]);
      setVolunteerListRows(volunteers);
    }
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
                {/* <Tab label="Donor List" value="2" /> */}
              </TabList>
            </Box>
            <TabPanel value="1">
              <VolunteerList volunteerRows={volunteerListRows} />
            </TabPanel>
            {/* <TabPanel value="2">
              <CardList contactListRows={donorListRows} isDonorList />
            </TabPanel> */}
            {/* <TabPanel value="3">
              <Stats volunteerListRows={volunteerListRows} donorListRows={donorListRows} />
            </TabPanel> */}
          </TabContext>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
