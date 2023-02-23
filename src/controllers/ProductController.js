import { ProductRepository } from "../helpers/ProductRepository";
import { ProductBuilder } from "../helpers/ProductsBuilder";
// import { stringify } from "csv-stringify";
// import { saveAs } from "file-saver";
// import { parse } from "csv-parse";
// import * as buffer from "buffer";
// global.Buffer = buffer.Buffer;
const ProductRepo = new ProductRepository();
export class ProductController {
  constructor() {
    this.products = localStorage.getItem("products");
  }
  getProducts() {
    return ProductRepo.getProducts().filter((product) => product.status === 1);
  }
  filter(name, min, max, lowerPrice, higherPrice, status, store) {
    const filteredProducts = new ProductBuilder(JSON.parse(this.products))
      .filterByName(name)
      .filterByPriceRange(min, max)
      .filterByLowestPrice(lowerPrice)
      .filterByHighestPrice(higherPrice)
      .filterByStatus(status)
      .filterByStore(store).filteredData;
    this.products = filteredProducts;
    return filteredProducts;
  }
  filterByCategory(category) {
    const filteredProducts = new ProductBuilder(
      JSON.parse(this.products)
    ).filterByCategory(category).filteredData;
    this.products = filteredProducts;
    return filteredProducts;
  }
  filterByName(name) {
    const filteredProducts = new ProductBuilder(
      JSON.parse(this.products)
    ).filterByName(name).filteredData;
    this.products = filteredProducts;
    return filteredProducts;
  }
  resetFilter() {
    return this.productFilter.resetFilter().filteredProducts;
  }
  batch(data) {
    data.forEach((product) => {
      ProductRepo.addProduct(product);
    });
  }

  // exportProduct() {
  //   const csvData = [];

  //   // Add headers to the CSV
  //   csvData.push([
  //     "ID",
  //     "Name",
  //     "Price",
  //     "Description",
  //     "Image",
  //     "Category",
  //     "Status",
  //     "Store",
  //   ]);

  //   // Add data rows to the CSV
  //   this.filteredData.forEach((item) => {
  //     csvData.push([
  //       item.id,
  //       item.name,
  //       item.price,
  //       item.description,
  //       item.image,
  //       item.category,
  //       item.status,
  //       item.store,
  //     ]);
  //   });

  //   // Convert the data to a CSV string
  //   stringify(csvData, (err, csvString) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }

  //     // Save the CSV file
  //     const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  //     saveAs(blob, "products.csv");
  //   });
  // }
  // importFromCSV(file, batch) {
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const csvData = event.target.result;

  //     // Parse the CSV data
  //     parse(
  //       csvData,
  //       {
  //         header: true,
  //         skipEmptyLines: true,
  //         transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  //       },
  //       (err, output) => {
  //         if (err) {
  //           console.error(err);
  //           return;
  //         }

  //         // Call the callback function with the parsed data
  //         batch(output);
  //       }
  //     );
  //   };

  //   reader.readAsText(file);
  // }
}
