
// import DatePicker from '@/components/atoms/DatePicker';
import type { ColumnDef } from '@/components/molecules/TableHeaderRow';
import DataTable from '@/components/organism/DataTable/DataTable';
import axios from 'axios';
import { useEffect, useState } from 'react';

type User = { id: number; name: string; email: string; role: 'Admin' | 'User'; createdAt: string };

const columns: ColumnDef<User>[] = [
  { id: 'name', header: 'Name', accessor: r => r.name, sortable: true, cellClassName: 'min-w-[160px]' },
  { id: 'email', header: 'Email', accessor: r => r.email, sortable: true, cellClassName: 'min-w-[200px]' },
  { id: 'role', header: 'Role', accessor: r => r.role, sortable: true, cellClassName: 'min-w-[100px]' },
  { id: 'createdAt', header: 'Created', accessor: r => r.createdAt, sortable: true, cellClassName: 'min-w-[120px]' },
];

export default function UsersPage() {

  const [rows, setRows] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<User[]>('/data/users_200.json').then((res) => {
      setRows(res.data);
      setLoading(false);
    }).catch(err => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  return (
    <div className="p-4">
      <DataTable<User>
        rows={rows}
        columns={columns}
        rowKey={(row, i) => `${row.id}-${i}`}
        initialSortBy="name"
        initialSortDir="asc"
        pageSize={8}
        searchableColumns={['name', 'email', 'role']}
        searchPlaceholder='Search...'
        filters={[
          {
            id: 'role',
            label: 'Role',
            options: [
              { value: '', label: 'All' },
              { value: 'Admin', label: 'Admin' },
              { value: 'User', label: 'User' },
            ],
            match: (row, value) => row.role === value,
          },
        ]}
        dateFilter={{ 
          id: 'createdAt',
          label: 'Created Date',
          accessor: (r) => r.createdAt ,
        }}
      />
    </div>
  );
}
