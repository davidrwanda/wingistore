export class ProductBuilder {
  constructor(products) {
    this.originalData = [...products];
    this.filteredData = [...products];
  }

  filterByName(name) {
    if (name) {
      console.log(name);
      this.filteredData = this.filteredData.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    return this;
  }

  filterByPriceRange(minPrice, maxPrice) {
    if (minPrice || maxPrice) {
      this.filteredData = this.filteredData.filter(
        (product) =>
          (!minPrice || product.price >= minPrice) &&
          (!maxPrice || product.price <= maxPrice)
      );
    }
    return this;
  }

  filterByLowestPrice(numProducts) {
    if (numProducts) {
      this.filteredData = this.filteredData
        .sort((a, b) => a.price - b.price)
        .slice(0, numProducts);
    }
    return this;
  }

  filterByHighestPrice(numProducts) {
    if (numProducts) {
      this.filteredData = this.filteredData
        .sort((a, b) => b.price - a.price)
        .slice(0, numProducts);
    }
    return this;
  }

  filterByStatus(status) {
    if (status) {
      this.filteredData = this.filteredData.filter(
        (product) => product.status === status
      );
    }
    return this;
  }

  filterByStore(storeName) {
    if (storeName) {
      this.filteredData = this.filteredData.filter(
        (product) => product.store === storeName
      );
    }
    return this;
  }
  filterByCategory(category) {
    console.log(category);
    if (category) {
      this.filteredData = this.filteredData.filter(
        (product) => product.category === category
      );
    }
    return this;
  }

  resetFilters() {
    this.filteredData = [...this.originalData];
    return this;
  }
}
