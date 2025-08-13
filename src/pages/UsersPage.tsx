
import type { ColumnDef } from '@/components/molecules/TableHeaderRow';
import DataTable from '@/components/organism/DataTable/DataTable';

type User = { id: number; name: string; email: string; role: 'Admin' | 'User'; createdAt: string };

const columns: ColumnDef<User>[] = [
  { id: 'name', header: 'Name', accessor: r => r.name, sortable: true, cellClassName: 'min-w-[160px]' },
  { id: 'email', header: 'Email', accessor: r => r.email, sortable: true, cellClassName: 'min-w-[200px]' },
  { id: 'role', header: 'Role', accessor: r => r.role, sortable: true, cellClassName: 'min-w-[100px]' },
  { id: 'createdAt', header: 'Created', accessor: r => new Date(r.createdAt).toLocaleDateString(), sortable: true, cellClassName: 'min-w-[120px]' },
];

const rows: User[] = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', role: 'Admin', createdAt: '2025-08-01' },
  { id: 2, name: 'John Smith', email: 'john@example.com', role: 'User', createdAt: '2025-07-15' },
  // ...more
];

export default function UsersPage() {
  return (
    <div className="p-4">
      <DataTable<User>
        rows={rows}
        columns={columns}
        rowKey={(r) => r.id}
        initialSortBy="name"
        initialSortDir="asc"
        pageSize={8}
      />
    </div>
  );
}
