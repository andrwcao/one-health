import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function UserInformationTable(props) {
  const columns = [
    { field: 'key', headerName: 'Characteristic', width: 200 },
    { field: 'value', headerName: 'Value', width: 130 },
  ];
  const { fitbitId, age, dateOfBirth, height, heightUnit, weight, weightUnit, memberSince } = props.fitbitInfo;
  const heightUnitConverted = (heightUnit === 'METRIC') ? 'cm' : '""""';
  const weightUnitConverted = (weightUnit === 'METRIC') ? 'kg' : 'lb';
  const rows = [
    { id: 1, key: 'Fitbit ID', value: fitbitId },
    { id: 2, key: 'Age', value: age },
    { id: 3, key: 'DOB', value: dateOfBirth },
    { id: 4, key: 'Height', value: height + ' ' + heightUnitConverted },
    { id: 5, key: 'Weight', value: weight + ' ' + weightUnitConverted },
    { id: 6, key: 'Join Date', value: memberSince }
  ];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}