import { Columns } from 'ngx-easy-table';
import { TableDataInf } from '../app/admin/administration/org-name/tabledata-inf';

export interface TableData {
  sno: number;
  orgName: string;
  orgNameAr: string;
  status: string;
  createdBy: number;
  updatedON: number;
}

export const columns: Columns[] = [
  { key: 'sno', title: 'S.No' },
  { key: 'orgName', title: 'Org Name' },
  { key: 'orgNameAr', title: 'Org Name in Arbic' },
  { key: 'status', title: 'Status' }
];

export const data = [

  {
    sno: '1',
    orgName: 'Project A',
    orgNameAr: 'Construction',
    status: 'Active',
    createdBy: '12032022',
    updatedON: '12032023',
  },
  {
    sno: '2',
    orgName: 'Project B',
    orgNameAr: 'Construction',
    status: 'Inactive',
    createdBy: '12032022',
    updatedON: '12032023',
  },
  {
    sno: '3',
    orgName: 'Project C',
    orgNameAr: 'Construction',
    status: 'Inactive',
    createdBy: '12032022',
    updatedON: '12032023',
  },
  {
    sno: '4',
    orgName: 'Project D',
    orgNameAr: 'Construction',
    status: 'Active',
    createdBy: '12032022',
    updatedON: '12032023',
  }

];