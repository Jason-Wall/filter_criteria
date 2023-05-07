import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
//MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//Custom Components
import PSDChart from './Components/PSDChart';
import Nav from './Components/Nav';
import DataTable from './Components/DataTable';
//Helper Functions
import { rechartDataFormat, sampleSerials } from './Helpers/dataFormat';
import { USCDistribution } from './Helpers/classification';


//MAIN APPLICATION
export default function App() {
  // State management and functions:
  const [rechartData, setRechartData] = useState([]);
  const [serials, setSerials] = useState([]);
  const [classifications, setClassifications] = useState([]);

  useEffect(() => {
    //Get all PSD data from server:
    axios.get('https://soilsserver-production.up.railway.app/psd/')
      .then((res) => {
        // console.log('axios.get All psd data', res.data);
        const dbDump = res.data;
        setRechartData(rechartDataFormat(dbDump));
        setSerials(sampleSerials(dbDump));
        let classifyArr = [];
        classifyArr = dbDump.map((sample) => USCDistribution(sample.results));
        setClassifications(classifyArr);
      });

  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Fragment>
      <Nav />
      <PSDChart chartData={rechartData} serials={serials} classifications={classifications} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <DataTable />
          </Grid>
          <Grid item xs={6} md={8}>
            <DataTable />
          </Grid>


        </Grid>
      </Box>


    </Fragment>
  );
}




