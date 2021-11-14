import React, { useEffect } from 'react';
import '../../src/index.css'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { CSVLink } from "react-csv";
import Button from '@mui/material/Button';

function ExportListButton({ data, filename, headers }) {
  return (
      <CSVLink data={data} headers={headers} filename={filename} className="csv-link">
          <Button variant="outlined" color="secondary" sx={{ textTransform: 'none' }}>
              Download as CSV file 
              <FileDownloadOutlinedIcon /> 
          </Button>
      </CSVLink>
  );
}

export default ExportListButton;
