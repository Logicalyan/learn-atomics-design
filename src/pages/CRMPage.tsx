// src/components/pages/CRMTablePage.tsx
import React from "react";
import type { Column } from "@/types/table";
import { DataTable } from "@/components/organism/DataTable";

interface CRMRecord {
  id: number;
  clientName: string;
  company: string;
  listingPrice: string;
  address: string;
  status: string;
  date: string;
}

const data: CRMRecord[] = Array.from({ length: 55 }).map((_, i) => ({
  id: i + 1,
  clientName: `Client ${i + 1}`,
  company: ["Hyperlink", "Kritrim", "AroLink"][i % 3],
  listingPrice: `$${(15_900_000).toLocaleString()}`,
  address: "987 Teck way, Seattle WA",
  status: ["In Negotiation", "Rejected", "Accepted"][i % 3],
  date: "12/03/2024",
}));

const columns: Column<CRMRecord>[] = [
  { key: "id", header: "ID" },
  { key: "clientName", header: "Client Name" },
  { key: "company", header: "Company" },
  { key: "listingPrice", header: "Listing Price" },
  { key: "address", header: "Address" },
  { key: "status", header: "Status", className: "text-purple-600 font-medium" },
  { key: "date", header: "Date" },
];

export const CRMPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Business Partner CRM</h1>
      <DataTable
        data={data}
        columns={columns}
        searchableKeys={["clientName", "company", "status"]}
        pageSize={10}
        filters={[
          {
            key: "status",
            label: "Status",
            options: ["In Negotiation", "Rejected", "Accepted"],
          },
        ]}
      />
    </div>
  );
};
