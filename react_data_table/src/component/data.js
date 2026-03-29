export const tableData = [
  { id: 1, name: "Jade Caden", age: 28, email: "jade@example.com" },
  { id: 2, name: "Jaylan Lamine", age: 34, email: "jaylan@example.com" },
  { id: 3, name: "Rinah Fraide", age: 45, email: "rinah@example.com" },
  { id: 4, name: "Sly Fraide", age: 23, email: "sly@example.com" },
];

export const tableColumns = [
  { name: "Name", selector: (row) => row.name },
  { name: "Age", selector: (row) => row.age },
  { name: "Email", selector: (row) => row.email },
];
