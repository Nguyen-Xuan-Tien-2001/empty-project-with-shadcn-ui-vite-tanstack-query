import type { DataTableFilterField } from "@/types/index.js";

import { useDataTable } from "@/hooks/use-data-table.js";
import { DataTable } from "@/components/data-table/data-table.js";
import { createColumnHelper } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox.js";
import { getColumns } from "../data-table/table-columns.js";

function generateColumns<T>(data: T[]) {
  if (data.length === 0) {
    return []; // Trả về mảng rỗng nếu không có dữ liệu
  }

  const columnHelper = createColumnHelper<T>();
  const keys = Object.keys(data[0]); // Lấy key từ phần tử đầu tiên

  return keys.map((key: string) =>
    columnHelper.accessor(key as keyof T, {
      header: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize tiêu đề
      cell: (info) => info.getValue(), // Hiển thị giá trị tương ứng
    })
  );
}

export function AccountManagerTable() {
  const filterFields: DataTableFilterField<unknown>[] = [
    {
      id: "title",
      label: "Title",
      placeholder: "Filter titles...",
    },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "priority",
      label: "Priority",
    },
  ];
  const data = [
    {
      id: "1",
      name: "Nguyen Van A",
      email: "nguyenvana@example.com",
      role: "Admin",
      status: "Active",
      createdAt: "2023-11-01",
    },
    {
      id: "3",
      name: "Le Van C",
      email: "levanc@example.com",
      role: "Editor",
      status: "Active",
      createdAt: "2023-09-20",
    },
    {
      id: "2",
      name: "Tran Thi B",
      email: "tranthib@example.com",
      role: "User",
      status: "Inactive",
      createdAt: "2023-10-15",
    },
  ];

  const { table } = useDataTable({
    data,
    columns: getColumns(),
    // columns: [
    //   {
    //     id: "select",
    //     size: 40,
    //     header: ({ table }) => (
    //       <Checkbox
    //         checked={
    //           table.getIsAllPageRowsSelected()
    //             ? true
    //             : table.getIsSomePageRowsSelected()
    //             ? "indeterminate"
    //             : false
    //         }
    //         onCheckedChange={(value) =>
    //           table.toggleAllPageRowsSelected(!!value)
    //         }
    //         aria-label="Select all"
    //         className="translate-y-0.5"
    //       />
    //     ),
    //     cell: ({ row }) => (
    //       <Checkbox
    //         checked={row.getIsSelected()}
    //         onCheckedChange={(value) => row.toggleSelected(!!value)}
    //         aria-label="Select row"
    //         className="translate-y-0.5"
    //       />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    //   },
    //   ...generateColumns(data),
    // ],
    pageCount: 10,
    filterFields,
    initialState: {
      sorting: [{ id: "createdAt", desc: true }],
      columnPinning: { right: ["actions"] },
    },
    getRowId: (originalRow) => originalRow.id,
    shallow: false,
    clearOnDefault: true,
  });

  return <DataTable table={table}></DataTable>;
}
