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
//Helper Functions
import { rechartDataFormat, sampleSerials } from '../Helpers/dataFormat';
import { USCDistribution } from '../Helpers/classification';

//MAIN APPLICATION
export default function App() {
  // State management and functions:
  const [rechartData, setRechartData] = useState([]);
  const [filterModel, setFilterModel] = React.useState(null);
  const [tableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    //Get all PSD data from server:
    axios.get('https://soilsserver-production.up.railway.app/psd/').then((res) => {
      const dbDump = res.data;
      setRechartData(rechartDataFormat(dbDump));

      let tableArr = [];
      tableArr = dbDump.map((sample) => {
        // sample.visible = true;
        const classifyObj = USCDistribution(sample.results);
        sample = { ...sample, ...classifyObj };
        return sample;
      });
      setTableData(tableArr);
    });
  }, []);
  const sampleListCol = [
    { field: 'sample_serial', headerName: 'Sample Serial', width: 150, type: 'string' },
    { field: 'serial', headerName: 'Test Serial', width: 150, type: 'string' },
    { field: 'test_date', headerName: 'Test Date', width: 150 },
    { field: 'gravel', headerName: 'Gravel (%)', width: 150, type: 'number' },
    { field: 'sand', headerName: 'Sand (%)', width: 150, type: 'number' },
    { field: 'fines', headerName: 'Fines (%)', width: 150, type: 'number' },
  ];

  if (!tableData.length) {
    return;
  }

  console.log('filterModel', filterModel);

  return (
    <Container>
      <Grid>
        <PSDChart
          chartData={rechartData}
          tableData={tableData}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          filterModel={filterModel}
        />
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Table
            columns={sampleListCol}
            rows={tableData}
            checkbox={true}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            setFilterModel={setFilterModel}
          />
        </Grid>
      </Box>
    </Container>
  );
}
