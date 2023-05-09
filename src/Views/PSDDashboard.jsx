import React, { useState, useEffect } from 'react';
import axios from 'axios';
//MUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '../Components/Item';
//Custom Components
import PSDChart from '../Components/PSDChart';
import Table from '../Components/Table';
import DataTable from '../Components/DataTable';
//Helper Functions
import { rechartDataFormat, sampleSerials } from '../Helpers/dataFormat';
import { USCDistribution } from '../Helpers/classification';

//MAIN APPLICATION
export default function App() {
  // State management and functions:
  const [rechartData, setRechartData] = useState([]);
  const [serials, setSerials] = useState([]);
  // const [classifications, setClassifications] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    //Get all PSD data from server:
    axios.get('https://soilsserver-production.up.railway.app/psd/').then((res) => {
      console.log('axios.get All psd data', res.data);
      const dbDump = res.data;
      setRechartData(rechartDataFormat(dbDump));
      setSerials(sampleSerials(dbDump));

      let tableArr = [];
      tableArr = dbDump.map((sample) => {
        sample.visible = true;
        const classifyObj = USCDistribution(sample.results);
        sample = { ...sample, ...classifyObj };
        return sample;
      });
      setTableData(tableArr);

      // let classifyArr = [];
      // // classifyArr = dbDump.map((sample) => USCDistribution(sample.results));
      // setClassifications(classifyArr);
    });
  }, []);
  const sampleListCol = [
    { field: 'sample_serial', headerName: 'Sample Serial', width: 150 },
    { field: 'serial', headerName: 'Test Serial', width: 150 },
    { field: 'test_date', headerName: 'Test Date', width: 150, hide: true },
    { field: 'gravel', headerName: 'Gravel (%)', width: 150 },
    { field: 'sand', headerName: 'Sand (%)', width: 150 },
    { field: 'fines', headerName: 'Fines (%)', width: 150 },
  ];

  console.log('tableData', tableData);

  if (!tableData.length) {
    return <h1>Loading</h1>;
  }

  return (
    <Container>
      <Grid>
        <PSDChart chartData={rechartData} serials={serials} />
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Table columns={sampleListCol} rows={tableData} checkbox={true} />
        </Grid>
      </Box>
    </Container>
  );
}
