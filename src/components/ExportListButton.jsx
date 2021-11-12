import React, { useEffect } from 'react';
import '../../src/index.css'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { CSVLink } from "react-csv";
import Button from '@mui/material/Button';

function ExportListButton({ data, filename, isDonor }) {
    const [CSVData, setCSVData] = React.useState(data);

  useEffect(() => {
    let CSVRow;
    const CSVDataAcc = [];
    data.forEach((row) => {
        CSVRow = Object.assign({}, row);
        delete CSVRow.id; // remove id from csv
        if (isDonor) {
            // if donor, also delete their email and firstName
            delete CSVRow.email;
            delete CSVRow.firstName;
        }
        CSVDataAcc.push(CSVRow);
    })

    setCSVData(CSVDataAcc)
  }, [data, isDonor]); 

  return (
    <>
      <CSVLink data={CSVData} header={["name"]} filename={filename} className="csv-link">
          <Button variant="outlined" color="secondary" sx={{ textTransform: 'none' }}>
              Download as CSV file 
              <FileDownloadOutlinedIcon /> 
          </Button>
      </CSVLink>
    </>
  );
}

export default ExportListButton;
