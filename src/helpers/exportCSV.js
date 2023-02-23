import { saveAs } from "file-saver";
export const exportCSV = (products) => {
  const rows = [["name", "price", "category", "description", "status"]]; // header row
  products.forEach((product) => {
    const { name, price, category, description, status } = product;
    rows.push([name, price, category, description, status]);
  });

  const csvData = rows.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
  saveAs(blob, "products.csv");
};
