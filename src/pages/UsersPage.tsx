
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
  {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 2,
    "name": "John Smith",
    "email": "john@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  },
  {
    "id": 3,
    "name": "Robert Brown",
    "email": "robert.brown3@example.com",
    "role": "User",
    "createdAt": "2025-07-18"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "emily.davis4@example.com",
    "role": "Admin",
    "createdAt": "2025-07-19"
  },
  {
    "id": 5,
    "name": "Michael Wilson",
    "email": "michael.wilson5@example.com",
    "role": "User",
    "createdAt": "2025-07-20"
  },
  {
    "id": 6,
    "name": "John Smith",
    "email": "john.smith6@example.com",
    "role": "User",
    "createdAt": "2025-07-21"
  },
  {
    "id": 7,
    "name": "Alice Johnson",
    "email": "alice.johnson7@example.com",
    "role": "Admin",
    "createdAt": "2025-07-22"
  },
  {
    "id": 8,
    "name": "Robert Brown",
    "email": "robert.brown8@example.com",
    "role": "User",
    "createdAt": "2025-07-23"
  },
  {
    "id": 9,
    "name": "Emily Davis",
    "email": "emily.davis9@example.com",
    "role": "Admin",
    "createdAt": "2025-07-24"
  },
  {
    "id": 10,
    "name": "Michael Wilson",
    "email": "michael.wilson10@example.com",
    "role": "User",
    "createdAt": "2025-07-25"
  },
  {
    "id": 11,
    "name": "John Smith",
    "email": "john.smith11@example.com",
    "role": "User",
    "createdAt": "2025-07-26"
  },
  {
    "id": 12,
    "name": "Alice Johnson",
    "email": "alice.johnson12@example.com",
    "role": "Admin",
    "createdAt": "2025-07-27"
  },
  {
    "id": 13,
    "name": "Robert Brown",
    "email": "robert.brown13@example.com",
    "role": "User",
    "createdAt": "2025-07-28"
  },
  {
    "id": 14,
    "name": "Emily Davis",
    "email": "emily.davis14@example.com",
    "role": "Admin",
    "createdAt": "2025-07-29"
  },
  {
    "id": 15,
    "name": "Michael Wilson",
    "email": "michael.wilson15@example.com",
    "role": "User",
    "createdAt": "2025-07-30"
  },
  {
    "id": 16,
    "name": "John Smith",
    "email": "john.smith16@example.com",
    "role": "User",
    "createdAt": "2025-07-31"
  },
  {
    "id": 17,
    "name": "Alice Johnson",
    "email": "alice.johnson17@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 18,
    "name": "Robert Brown",
    "email": "robert.brown18@example.com",
    "role": "User",
    "createdAt": "2025-08-02"
  },
  {
    "id": 19,
    "name": "Emily Davis",
    "email": "emily.davis19@example.com",
    "role": "Admin",
    "createdAt": "2025-08-03"
  },
  {
    "id": 20,
    "name": "Michael Wilson",
    "email": "michael.wilson20@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  },
  {
    "id": 21,
    "name": "John Smith",
    "email": "john.smith21@example.com",
    "role": "User",
    "createdAt": "2025-07-16"
  },
  {
    "id": 22,
    "name": "Alice Johnson",
    "email": "alice.johnson22@example.com",
    "role": "Admin",
    "createdAt": "2025-07-17"
  },
  {
    "id": 23,
    "name": "Robert Brown",
    "email": "robert.brown23@example.com",
    "role": "User",
    "createdAt": "2025-07-18"
  },
  {
    "id": 24,
    "name": "Emily Davis",
    "email": "emily.davis24@example.com",
    "role": "Admin",
    "createdAt": "2025-07-19"
  },
  {
    "id": 25,
    "name": "Michael Wilson",
    "email": "michael.wilson25@example.com",
    "role": "User",
    "createdAt": "2025-07-20"
  },
  {
    "id": 26,
    "name": "John Smith",
    "email": "john.smith26@example.com",
    "role": "User",
    "createdAt": "2025-07-21"
  },
  {
    "id": 27,
    "name": "Alice Johnson",
    "email": "alice.johnson27@example.com",
    "role": "Admin",
    "createdAt": "2025-07-22"
  },
  {
    "id": 28,
    "name": "Robert Brown",
    "email": "robert.brown28@example.com",
    "role": "User",
    "createdAt": "2025-07-23"
  },
  {
    "id": 29,
    "name": "Emily Davis",
    "email": "emily.davis29@example.com",
    "role": "Admin",
    "createdAt": "2025-07-24"
  },
  {
    "id": 30,
    "name": "Michael Wilson",
    "email": "michael.wilson30@example.com",
    "role": "User",
    "createdAt": "2025-07-25"
  },
  {
    "id": 31,
    "name": "John Smith",
    "email": "john.smith31@example.com",
    "role": "User",
    "createdAt": "2025-07-26"
  },
  {
    "id": 32,
    "name": "Alice Johnson",
    "email": "alice.johnson32@example.com",
    "role": "Admin",
    "createdAt": "2025-07-27"
  },
  {
    "id": 33,
    "name": "Robert Brown",
    "email": "robert.brown33@example.com",
    "role": "User",
    "createdAt": "2025-07-28"
  },
  {
    "id": 34,
    "name": "Emily Davis",
    "email": "emily.davis34@example.com",
    "role": "Admin",
    "createdAt": "2025-07-29"
  },
  {
    "id": 35,
    "name": "Michael Wilson",
    "email": "michael.wilson35@example.com",
    "role": "User",
    "createdAt": "2025-07-30"
  },
  {
    "id": 36,
    "name": "John Smith",
    "email": "john.smith36@example.com",
    "role": "User",
    "createdAt": "2025-07-31"
  },
  {
    "id": 37,
    "name": "Alice Johnson",
    "email": "alice.johnson37@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 38,
    "name": "Robert Brown",
    "email": "robert.brown38@example.com",
    "role": "User",
    "createdAt": "2025-08-02"
  },
  {
    "id": 39,
    "name": "Emily Davis",
    "email": "emily.davis39@example.com",
    "role": "Admin",
    "createdAt": "2025-08-03"
  },
  {
    "id": 40,
    "name": "Michael Wilson",
    "email": "michael.wilson40@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  },
  {
    "id": 41,
    "name": "John Smith",
    "email": "john.smith41@example.com",
    "role": "User",
    "createdAt": "2025-07-16"
  },
  {
    "id": 42,
    "name": "Alice Johnson",
    "email": "alice.johnson42@example.com",
    "role": "Admin",
    "createdAt": "2025-07-17"
  },
  {
    "id": 43,
    "name": "Robert Brown",
    "email": "robert.brown43@example.com",
    "role": "User",
    "createdAt": "2025-07-18"
  },
  {
    "id": 44,
    "name": "Emily Davis",
    "email": "emily.davis44@example.com",
    "role": "Admin",
    "createdAt": "2025-07-19"
  },
  {
    "id": 45,
    "name": "Michael Wilson",
    "email": "michael.wilson45@example.com",
    "role": "User",
    "createdAt": "2025-07-20"
  },
  {
    "id": 46,
    "name": "John Smith",
    "email": "john.smith46@example.com",
    "role": "User",
    "createdAt": "2025-07-21"
  },
  {
    "id": 47,
    "name": "Alice Johnson",
    "email": "alice.johnson47@example.com",
    "role": "Admin",
    "createdAt": "2025-07-22"
  },
  {
    "id": 48,
    "name": "Robert Brown",
    "email": "robert.brown48@example.com",
    "role": "User",
    "createdAt": "2025-07-23"
  },
  {
    "id": 49,
    "name": "Emily Davis",
    "email": "emily.davis49@example.com",
    "role": "Admin",
    "createdAt": "2025-07-24"
  },
  {
    "id": 50,
    "name": "Michael Wilson",
    "email": "michael.wilson50@example.com",
    "role": "User",
    "createdAt": "2025-07-25"
  },
  {
    "id": 51,
    "name": "John Smith",
    "email": "john.smith51@example.com",
    "role": "User",
    "createdAt": "2025-07-26"
  },
  {
    "id": 52,
    "name": "Alice Johnson",
    "email": "alice.johnson52@example.com",
    "role": "Admin",
    "createdAt": "2025-07-27"
  },
  {
    "id": 53,
    "name": "Robert Brown",
    "email": "robert.brown53@example.com",
    "role": "User",
    "createdAt": "2025-07-28"
  },
  {
    "id": 54,
    "name": "Emily Davis",
    "email": "emily.davis54@example.com",
    "role": "Admin",
    "createdAt": "2025-07-29"
  },
  {
    "id": 55,
    "name": "Michael Wilson",
    "email": "michael.wilson55@example.com",
    "role": "User",
    "createdAt": "2025-07-30"
  },
  {
    "id": 56,
    "name": "John Smith",
    "email": "john.smith56@example.com",
    "role": "User",
    "createdAt": "2025-07-31"
  },
  {
    "id": 57,
    "name": "Alice Johnson",
    "email": "alice.johnson57@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 58,
    "name": "Robert Brown",
    "email": "robert.brown58@example.com",
    "role": "User",
    "createdAt": "2025-08-02"
  },
  {
    "id": 59,
    "name": "Emily Davis",
    "email": "emily.davis59@example.com",
    "role": "Admin",
    "createdAt": "2025-08-03"
  },
  {
    "id": 60,
    "name": "Michael Wilson",
    "email": "michael.wilson60@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  },
  {
    "id": 61,
    "name": "John Smith",
    "email": "john.smith61@example.com",
    "role": "User",
    "createdAt": "2025-07-16"
  },
  {
    "id": 62,
    "name": "Alice Johnson",
    "email": "alice.johnson62@example.com",
    "role": "Admin",
    "createdAt": "2025-07-17"
  },
  {
    "id": 63,
    "name": "Robert Brown",
    "email": "robert.brown63@example.com",
    "role": "User",
    "createdAt": "2025-07-18"
  },
  {
    "id": 64,
    "name": "Emily Davis",
    "email": "emily.davis64@example.com",
    "role": "Admin",
    "createdAt": "2025-07-19"
  },
  {
    "id": 65,
    "name": "Michael Wilson",
    "email": "michael.wilson65@example.com",
    "role": "User",
    "createdAt": "2025-07-20"
  },
  {
    "id": 66,
    "name": "John Smith",
    "email": "john.smith66@example.com",
    "role": "User",
    "createdAt": "2025-07-21"
  },
  {
    "id": 67,
    "name": "Alice Johnson",
    "email": "alice.johnson67@example.com",
    "role": "Admin",
    "createdAt": "2025-07-22"
  },
  {
    "id": 68,
    "name": "Robert Brown",
    "email": "robert.brown68@example.com",
    "role": "User",
    "createdAt": "2025-07-23"
  },
  {
    "id": 69,
    "name": "Emily Davis",
    "email": "emily.davis69@example.com",
    "role": "Admin",
    "createdAt": "2025-07-24"
  },
  {
    "id": 70,
    "name": "Michael Wilson",
    "email": "michael.wilson70@example.com",
    "role": "User",
    "createdAt": "2025-07-25"
  },
  {
    "id": 71,
    "name": "John Smith",
    "email": "john.smith71@example.com",
    "role": "User",
    "createdAt": "2025-07-26"
  },
  {
    "id": 72,
    "name": "Alice Johnson",
    "email": "alice.johnson72@example.com",
    "role": "Admin",
    "createdAt": "2025-07-27"
  },
  {
    "id": 73,
    "name": "Robert Brown",
    "email": "robert.brown73@example.com",
    "role": "User",
    "createdAt": "2025-07-28"
  },
  {
    "id": 74,
    "name": "Emily Davis",
    "email": "emily.davis74@example.com",
    "role": "Admin",
    "createdAt": "2025-07-29"
  },
  {
    "id": 75,
    "name": "Michael Wilson",
    "email": "michael.wilson75@example.com",
    "role": "User",
    "createdAt": "2025-07-30"
  },
  {
    "id": 76,
    "name": "John Smith",
    "email": "john.smith76@example.com",
    "role": "User",
    "createdAt": "2025-07-31"
  },
  {
    "id": 77,
    "name": "Alice Johnson",
    "email": "alice.johnson77@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 78,
    "name": "Robert Brown",
    "email": "robert.brown78@example.com",
    "role": "User",
    "createdAt": "2025-08-02"
  },
  {
    "id": 79,
    "name": "Emily Davis",
    "email": "emily.davis79@example.com",
    "role": "Admin",
    "createdAt": "2025-08-03"
  },
  {
    "id": 80,
    "name": "Michael Wilson",
    "email": "michael.wilson80@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  },
  {
    "id": 81,
    "name": "John Smith",
    "email": "john.smith81@example.com",
    "role": "User",
    "createdAt": "2025-07-16"
  },
  {
    "id": 82,
    "name": "Alice Johnson",
    "email": "alice.johnson82@example.com",
    "role": "Admin",
    "createdAt": "2025-07-17"
  },
  {
    "id": 83,
    "name": "Robert Brown",
    "email": "robert.brown83@example.com",
    "role": "User",
    "createdAt": "2025-07-18"
  },
  {
    "id": 84,
    "name": "Emily Davis",
    "email": "emily.davis84@example.com",
    "role": "Admin",
    "createdAt": "2025-07-19"
  },
  {
    "id": 85,
    "name": "Michael Wilson",
    "email": "michael.wilson85@example.com",
    "role": "User",
    "createdAt": "2025-07-20"
  },
  {
    "id": 86,
    "name": "John Smith",
    "email": "john.smith86@example.com",
    "role": "User",
    "createdAt": "2025-07-21"
  },
  {
    "id": 87,
    "name": "Alice Johnson",
    "email": "alice.johnson87@example.com",
    "role": "Admin",
    "createdAt": "2025-07-22"
  },
  {
    "id": 88,
    "name": "Robert Brown",
    "email": "robert.brown88@example.com",
    "role": "User",
    "createdAt": "2025-07-23"
  },
  {
    "id": 89,
    "name": "Emily Davis",
    "email": "emily.davis89@example.com",
    "role": "Admin",
    "createdAt": "2025-07-24"
  },
  {
    "id": 90,
    "name": "Michael Wilson",
    "email": "michael.wilson90@example.com",
    "role": "User",
    "createdAt": "2025-07-25"
  },
  {
    "id": 91,
    "name": "John Smith",
    "email": "john.smith91@example.com",
    "role": "User",
    "createdAt": "2025-07-26"
  },
  {
    "id": 92,
    "name": "Alice Johnson",
    "email": "alice.johnson92@example.com",
    "role": "Admin",
    "createdAt": "2025-07-27"
  },
  {
    "id": 93,
    "name": "Robert Brown",
    "email": "robert.brown93@example.com",
    "role": "User",
    "createdAt": "2025-07-28"
  },
  {
    "id": 94,
    "name": "Emily Davis",
    "email": "emily.davis94@example.com",
    "role": "Admin",
    "createdAt": "2025-07-29"
  },
  {
    "id": 95,
    "name": "Michael Wilson",
    "email": "michael.wilson95@example.com",
    "role": "User",
    "createdAt": "2025-07-30"
  },
  {
    "id": 96,
    "name": "John Smith",
    "email": "john.smith96@example.com",
    "role": "User",
    "createdAt": "2025-07-31"
  },
  {
    "id": 97,
    "name": "Alice Johnson",
    "email": "alice.johnson97@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 98,
    "name": "Robert Brown",
    "email": "robert.brown98@example.com",
    "role": "User",
    "createdAt": "2025-08-02"
  },
  {
    "id": 99,
    "name": "Emily Davis",
    "email": "emily.davis99@example.com",
    "role": "Admin",
    "createdAt": "2025-08-03"
  },
  {
    "id": 100,
    "name": "Michael Wilson",
    "email": "michael.wilson100@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  },
  {
    "id": 101,
    "name": "John Smith",
    "email": "john.smith101@example.com",
    "role": "User",
    "createdAt": "2025-07-16"
  },
  {
    "id": 102,
    "name": "Alice Johnson",
    "email": "alice.johnson102@example.com",
    "role": "Admin",
    "createdAt": "2025-07-17"
  },
  {
    "id": 103,
    "name": "Robert Brown",
    "email": "robert.brown103@example.com",
    "role": "User",
    "createdAt": "2025-07-18"
  },
  {
    "id": 104,
    "name": "Emily Davis",
    "email": "emily.davis104@example.com",
    "role": "Admin",
    "createdAt": "2025-07-19"
  },
  {
    "id": 105,
    "name": "Michael Wilson",
    "email": "michael.wilson105@example.com",
    "role": "User",
    "createdAt": "2025-07-20"
  },
  {
    "id": 106,
    "name": "John Smith",
    "email": "john.smith106@example.com",
    "role": "User",
    "createdAt": "2025-07-21"
  },
  {
    "id": 107,
    "name": "Alice Johnson",
    "email": "alice.johnson107@example.com",
    "role": "Admin",
    "createdAt": "2025-07-22"
  },
  {
    "id": 108,
    "name": "Robert Brown",
    "email": "robert.brown108@example.com",
    "role": "User",
    "createdAt": "2025-07-23"
  },
  {
    "id": 109,
    "name": "Emily Davis",
    "email": "emily.davis109@example.com",
    "role": "Admin",
    "createdAt": "2025-07-24"
  },
  {
    "id": 110,
    "name": "Michael Wilson",
    "email": "michael.wilson110@example.com",
    "role": "User",
    "createdAt": "2025-07-25"
  },
  {
    "id": 111,
    "name": "John Smith",
    "email": "john.smith111@example.com",
    "role": "User",
    "createdAt": "2025-07-26"
  },
  {
    "id": 112,
    "name": "Alice Johnson",
    "email": "alice.johnson112@example.com",
    "role": "Admin",
    "createdAt": "2025-07-27"
  },
  {
    "id": 113,
    "name": "Robert Brown",
    "email": "robert.brown113@example.com",
    "role": "User",
    "createdAt": "2025-07-28"
  },
  {
    "id": 114,
    "name": "Emily Davis",
    "email": "emily.davis114@example.com",
    "role": "Admin",
    "createdAt": "2025-07-29"
  },
  {
    "id": 115,
    "name": "Michael Wilson",
    "email": "michael.wilson115@example.com",
    "role": "User",
    "createdAt": "2025-07-30"
  },
  {
    "id": 116,
    "name": "John Smith",
    "email": "john.smith116@example.com",
    "role": "User",
    "createdAt": "2025-07-31"
  },
  {
    "id": 117,
    "name": "Alice Johnson",
    "email": "alice.johnson117@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 118,
    "name": "Robert Brown",
    "email": "robert.brown118@example.com",
    "role": "User",
    "createdAt": "2025-08-02"
  },
  {
    "id": 119,
    "name": "Emily Davis",
    "email": "emily.davis119@example.com",
    "role": "Admin",
    "createdAt": "2025-08-03"
  },
  {
    "id": 120,
    "name": "Michael Wilson",
    "email": "michael.wilson120@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  },
  {
    "id": 121,
    "name": "John Smith",
    "email": "john.smith121@example.com",
    "role": "User",
    "createdAt": "2025-07-16"
  },
  {
    "id": 122,
    "name": "Alice Johnson",
    "email": "alice.johnson122@example.com",
    "role": "Admin",
    "createdAt": "2025-07-17"
  },
  {
    "id": 123,
    "name": "Robert Brown",
    "email": "robert.brown123@example.com",
    "role": "User",
    "createdAt": "2025-07-18"
  },
  {
    "id": 124,
    "name": "Emily Davis",
    "email": "emily.davis124@example.com",
    "role": "Admin",
    "createdAt": "2025-07-19"
  },
  {
    "id": 125,
    "name": "Michael Wilson",
    "email": "michael.wilson125@example.com",
    "role": "User",
    "createdAt": "2025-07-20"
  },
  {
    "id": 126,
    "name": "John Smith",
    "email": "john.smith126@example.com",
    "role": "User",
    "createdAt": "2025-07-21"
  },
  {
    "id": 127,
    "name": "Alice Johnson",
    "email": "alice.johnson127@example.com",
    "role": "Admin",
    "createdAt": "2025-07-22"
  },
  {
    "id": 128,
    "name": "Robert Brown",
    "email": "robert.brown128@example.com",
    "role": "User",
    "createdAt": "2025-07-23"
  },
  {
    "id": 129,
    "name": "Emily Davis",
    "email": "emily.davis129@example.com",
    "role": "Admin",
    "createdAt": "2025-07-24"
  },
  {
    "id": 130,
    "name": "Michael Wilson",
    "email": "michael.wilson130@example.com",
    "role": "User",
    "createdAt": "2025-07-25"
  },
  {
    "id": 131,
    "name": "John Smith",
    "email": "john.smith131@example.com",
    "role": "User",
    "createdAt": "2025-07-26"
  },
  {
    "id": 132,
    "name": "Alice Johnson",
    "email": "alice.johnson132@example.com",
    "role": "Admin",
    "createdAt": "2025-07-27"
  },
  {
    "id": 133,
    "name": "Robert Brown",
    "email": "robert.brown133@example.com",
    "role": "User",
    "createdAt": "2025-07-28"
  },
  {
    "id": 134,
    "name": "Emily Davis",
    "email": "emily.davis134@example.com",
    "role": "Admin",
    "createdAt": "2025-07-29"
  },
  {
    "id": 135,
    "name": "Michael Wilson",
    "email": "michael.wilson135@example.com",
    "role": "User",
    "createdAt": "2025-07-30"
  },
  {
    "id": 136,
    "name": "John Smith",
    "email": "john.smith136@example.com",
    "role": "User",
    "createdAt": "2025-07-31"
  },
  {
    "id": 137,
    "name": "Alice Johnson",
    "email": "alice.johnson137@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 138,
    "name": "Robert Brown",
    "email": "robert.brown138@example.com",
    "role": "User",
    "createdAt": "2025-08-02"
  },
  {
    "id": 139,
    "name": "Emily Davis",
    "email": "emily.davis139@example.com",
    "role": "Admin",
    "createdAt": "2025-08-03"
  },
  {
    "id": 140,
    "name": "Michael Wilson",
    "email": "michael.wilson140@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  },
  {
    "id": 141,
    "name": "John Smith",
    "email": "john.smith141@example.com",
    "role": "User",
    "createdAt": "2025-07-16"
  },
  {
    "id": 142,
    "name": "Alice Johnson",
    "email": "alice.johnson142@example.com",
    "role": "Admin",
    "createdAt": "2025-07-17"
  },
  {
    "id": 143,
    "name": "Robert Brown",
    "email": "robert.brown143@example.com",
    "role": "User",
    "createdAt": "2025-07-18"
  },
  {
    "id": 144,
    "name": "Emily Davis",
    "email": "emily.davis144@example.com",
    "role": "Admin",
    "createdAt": "2025-07-19"
  },
  {
    "id": 145,
    "name": "Michael Wilson",
    "email": "michael.wilson145@example.com",
    "role": "User",
    "createdAt": "2025-07-20"
  },
  {
    "id": 146,
    "name": "John Smith",
    "email": "john.smith146@example.com",
    "role": "User",
    "createdAt": "2025-07-21"
  },
  {
    "id": 147,
    "name": "Alice Johnson",
    "email": "alice.johnson147@example.com",
    "role": "Admin",
    "createdAt": "2025-07-22"
  },
  {
    "id": 148,
    "name": "Robert Brown",
    "email": "robert.brown148@example.com",
    "role": "User",
    "createdAt": "2025-07-23"
  },
  {
    "id": 149,
    "name": "Emily Davis",
    "email": "emily.davis149@example.com",
    "role": "Admin",
    "createdAt": "2025-07-24"
  },
  {
    "id": 150,
    "name": "Michael Wilson",
    "email": "michael.wilson150@example.com",
    "role": "User",
    "createdAt": "2025-07-25"
  },
  {
    "id": 151,
    "name": "John Smith",
    "email": "john.smith151@example.com",
    "role": "User",
    "createdAt": "2025-07-26"
  },
  {
    "id": 152,
    "name": "Alice Johnson",
    "email": "alice.johnson152@example.com",
    "role": "Admin",
    "createdAt": "2025-07-27"
  },
  {
    "id": 153,
    "name": "Robert Brown",
    "email": "robert.brown153@example.com",
    "role": "User",
    "createdAt": "2025-07-28"
  },
  {
    "id": 154,
    "name": "Emily Davis",
    "email": "emily.davis154@example.com",
    "role": "Admin",
    "createdAt": "2025-07-29"
  },
  {
    "id": 155,
    "name": "Michael Wilson",
    "email": "michael.wilson155@example.com",
    "role": "User",
    "createdAt": "2025-07-30"
  },
  {
    "id": 156,
    "name": "John Smith",
    "email": "john.smith156@example.com",
    "role": "User",
    "createdAt": "2025-07-31"
  },
  {
    "id": 157,
    "name": "Alice Johnson",
    "email": "alice.johnson157@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 158,
    "name": "Robert Brown",
    "email": "robert.brown158@example.com",
    "role": "User",
    "createdAt": "2025-08-02"
  },
  {
    "id": 159,
    "name": "Emily Davis",
    "email": "emily.davis159@example.com",
    "role": "Admin",
    "createdAt": "2025-08-03"
  },
  {
    "id": 160,
    "name": "Michael Wilson",
    "email": "michael.wilson160@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  },
  {
    "id": 161,
    "name": "John Smith",
    "email": "john.smith161@example.com",
    "role": "User",
    "createdAt": "2025-07-16"
  },
  {
    "id": 162,
    "name": "Alice Johnson",
    "email": "alice.johnson162@example.com",
    "role": "Admin",
    "createdAt": "2025-07-17"
  },
  {
    "id": 163,
    "name": "Robert Brown",
    "email": "robert.brown163@example.com",
    "role": "User",
    "createdAt": "2025-07-18"
  },
  {
    "id": 164,
    "name": "Emily Davis",
    "email": "emily.davis164@example.com",
    "role": "Admin",
    "createdAt": "2025-07-19"
  },
  {
    "id": 165,
    "name": "Michael Wilson",
    "email": "michael.wilson165@example.com",
    "role": "User",
    "createdAt": "2025-07-20"
  },
  {
    "id": 166,
    "name": "John Smith",
    "email": "john.smith166@example.com",
    "role": "User",
    "createdAt": "2025-07-21"
  },
  {
    "id": 167,
    "name": "Alice Johnson",
    "email": "alice.johnson167@example.com",
    "role": "Admin",
    "createdAt": "2025-07-22"
  },
  {
    "id": 168,
    "name": "Robert Brown",
    "email": "robert.brown168@example.com",
    "role": "User",
    "createdAt": "2025-07-23"
  },
  {
    "id": 169,
    "name": "Emily Davis",
    "email": "emily.davis169@example.com",
    "role": "Admin",
    "createdAt": "2025-07-24"
  },
  {
    "id": 170,
    "name": "Michael Wilson",
    "email": "michael.wilson170@example.com",
    "role": "User",
    "createdAt": "2025-07-25"
  },
  {
    "id": 171,
    "name": "John Smith",
    "email": "john.smith171@example.com",
    "role": "User",
    "createdAt": "2025-07-26"
  },
  {
    "id": 172,
    "name": "Alice Johnson",
    "email": "alice.johnson172@example.com",
    "role": "Admin",
    "createdAt": "2025-07-27"
  },
  {
    "id": 173,
    "name": "Robert Brown",
    "email": "robert.brown173@example.com",
    "role": "User",
    "createdAt": "2025-07-28"
  },
  {
    "id": 174,
    "name": "Emily Davis",
    "email": "emily.davis174@example.com",
    "role": "Admin",
    "createdAt": "2025-07-29"
  },
  {
    "id": 175,
    "name": "Michael Wilson",
    "email": "michael.wilson175@example.com",
    "role": "User",
    "createdAt": "2025-07-30"
  },
  {
    "id": 176,
    "name": "John Smith",
    "email": "john.smith176@example.com",
    "role": "User",
    "createdAt": "2025-07-31"
  },
  {
    "id": 177,
    "name": "Alice Johnson",
    "email": "alice.johnson177@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 178,
    "name": "Robert Brown",
    "email": "robert.brown178@example.com",
    "role": "User",
    "createdAt": "2025-08-02"
  },
  {
    "id": 179,
    "name": "Emily Davis",
    "email": "emily.davis179@example.com",
    "role": "Admin",
    "createdAt": "2025-08-03"
  },
  {
    "id": 180,
    "name": "Michael Wilson",
    "email": "michael.wilson180@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  },
  {
    "id": 181,
    "name": "John Smith",
    "email": "john.smith181@example.com",
    "role": "User",
    "createdAt": "2025-07-16"
  },
  {
    "id": 182,
    "name": "Alice Johnson",
    "email": "alice.johnson182@example.com",
    "role": "Admin",
    "createdAt": "2025-07-17"
  },
  {
    "id": 183,
    "name": "Robert Brown",
    "email": "robert.brown183@example.com",
    "role": "User",
    "createdAt": "2025-07-18"
  },
  {
    "id": 184,
    "name": "Emily Davis",
    "email": "emily.davis184@example.com",
    "role": "Admin",
    "createdAt": "2025-07-19"
  },
  {
    "id": 185,
    "name": "Michael Wilson",
    "email": "michael.wilson185@example.com",
    "role": "User",
    "createdAt": "2025-07-20"
  },
  {
    "id": 186,
    "name": "John Smith",
    "email": "john.smith186@example.com",
    "role": "User",
    "createdAt": "2025-07-21"
  },
  {
    "id": 187,
    "name": "Alice Johnson",
    "email": "alice.johnson187@example.com",
    "role": "Admin",
    "createdAt": "2025-07-22"
  },
  {
    "id": 188,
    "name": "Robert Brown",
    "email": "robert.brown188@example.com",
    "role": "User",
    "createdAt": "2025-07-23"
  },
  {
    "id": 189,
    "name": "Emily Davis",
    "email": "emily.davis189@example.com",
    "role": "Admin",
    "createdAt": "2025-07-24"
  },
  {
    "id": 190,
    "name": "Michael Wilson",
    "email": "michael.wilson190@example.com",
    "role": "User",
    "createdAt": "2025-07-25"
  },
  {
    "id": 191,
    "name": "John Smith",
    "email": "john.smith191@example.com",
    "role": "User",
    "createdAt": "2025-07-26"
  },
  {
    "id": 192,
    "name": "Alice Johnson",
    "email": "alice.johnson192@example.com",
    "role": "Admin",
    "createdAt": "2025-07-27"
  },
  {
    "id": 193,
    "name": "Robert Brown",
    "email": "robert.brown193@example.com",
    "role": "User",
    "createdAt": "2025-07-28"
  },
  {
    "id": 194,
    "name": "Emily Davis",
    "email": "emily.davis194@example.com",
    "role": "Admin",
    "createdAt": "2025-07-29"
  },
  {
    "id": 195,
    "name": "Michael Wilson",
    "email": "michael.wilson195@example.com",
    "role": "User",
    "createdAt": "2025-07-30"
  },
  {
    "id": 196,
    "name": "John Smith",
    "email": "john.smith196@example.com",
    "role": "User",
    "createdAt": "2025-07-31"
  },
  {
    "id": 197,
    "name": "Alice Johnson",
    "email": "alice.johnson197@example.com",
    "role": "Admin",
    "createdAt": "2025-08-01"
  },
  {
    "id": 198,
    "name": "Robert Brown",
    "email": "robert.brown198@example.com",
    "role": "User",
    "createdAt": "2025-08-02"
  },
  {
    "id": 199,
    "name": "Emily Davis",
    "email": "emily.davis199@example.com",
    "role": "Admin",
    "createdAt": "2025-08-03"
  },
  {
    "id": 200,
    "name": "Michael Wilson",
    "email": "michael.wilson200@example.com",
    "role": "User",
    "createdAt": "2025-07-15"
  }
]

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
