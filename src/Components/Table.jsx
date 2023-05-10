import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Table(props) {
  console.log('rows', props.rows);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection={props.checkbox}
        onRowSelectionModelChange={(selection) => {
          console.log(selection);
          props.setSelectedRows(selection);
        }}
        rowSelectionModel={props.selectedRows}
      />
    </div>
  );
}
