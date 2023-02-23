// helpers/importCSV.js

import Papa from "papaparse";

export const importCSV = (file, callback) => {
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: (results) => {
      callback(results.data);
    },
  });
};
