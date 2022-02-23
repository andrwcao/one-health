import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'key', headerName: 'Characteristic', width: 130 },
    { field: 'value', headerName: 'Value', width: 130 },
];

const rows = [
  { id: 1, key: 'Fitbit ID', value: '' },
  { id: 2, key: 'Age', value: '' },
  { id: 3, key: 'DOB', value: '' },
  { id: 4, key: 'Height', value: '' },
  { id: 5, key: 'Weight', value: '' },
  { id: 6, key: 'Join Date', value: '' }
];

export default function UserInformationTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}