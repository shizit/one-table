'use client';
import { memo } from 'react';
import type { FC } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import resets from '../../_resets.module.css';
import classes from './Table.module.css';

interface Props {
  className?: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'column1', headerName: 'COLUMN1', width: 120 },
  { field: 'column2', headerName: 'COLUMN2', width: 120 },
  { field: 'column3', headerName: 'COLUMN3', width: 120 },
  { field: 'column4', headerName: 'COLUMN4', width: 120 },
  { field: 'column5', headerName: 'COLUMN5', width: 120 },

];

const rows = [
  { id: '1', column1: 'value1', column2: 'value2', column3: 'value3', column4: 'value4', column5: 'value5' },
  { id: '2', column1: 'value1', column2: 'value2', column3: 'value3', column4: 'value4', column5: 'value5' },
  { id: '3', column1: 'value1', column2: 'value2', column3: 'value3', column4: 'value4', column5: 'value5' },
];

/* @figmaId 59:4054 */
export const Table: FC<Props> = memo(function Table(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
});
