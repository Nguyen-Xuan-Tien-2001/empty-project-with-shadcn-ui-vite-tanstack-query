import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.js";

const invoices = [
  {
    invoice: "NV001",
    fullName: "Nguyen Xuan Tien",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "NV002",
    fullName: "Bui Manh ThanhThanh",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "NV003",
    fullName: "Tran Van Binh",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "NV004",
    fullName: "Nguyen Xuan Tien",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "NV005",
    fullName: "Nguyen Xuan Tien",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "NV006",
    fullName: "Nguyen Xuan Tien",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "NV007",
    fullName: "Nguyen Xuan Tien",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableContent() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {invoices.map((invoice, index) => {
            return (
              index === 0 &&
              Object.keys(invoice).map((key) => {
                return <TableHead key={key}>{key}</TableHead>;
              })
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell className="text-left">{invoice.fullName}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-left">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-left">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
