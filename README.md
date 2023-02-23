# WINGI E-Commerce Proof of Concept

This proof of concept (POC) is a simple e-commerce application built using React and local storage. The application allows users to view a list of products, add new products, edit existing products, and export the list of products to a CSV file.

## Architecture Overview
The architecture of this POC can be broken down into three main components:

### React Components
The front-end of this application is built using React. The components are organized into separate files based on their functionality. The components are responsible for rendering the user interface, handling user input, and communicating with the controllers.

### Local Storage
The application uses local storage to store the product data. When the application loads, it checks if there is any product data stored in local storage. If there is, it loads the data into the application. When the user adds, edits, or deletes a product, the changes are saved to local storage.

### Back-end API
Since this is a proof of concept, there is no back-end API. Instead, the product data is stored in local storage. However, the components are designed in such a way that they could easily be modified to communicate with a back-end API if necessary.

## Features
This POC includes the following features:

### View Products
Users can view a list of products, including their name, category, description, and price.

### Add Product
Users can add a new product by clicking the "Add" button and filling out a form.

### Edit Product
Users can edit an existing product by clicking the "Edit" button and modifying the fields in the form.

### Delete Product
Users can delete an existing product by clicking the "Delete" icon and confirming the deletion.

### Import CSV
Users can import a CSV file containing product data by clicking the "Import" button and selecting a file.

### Export CSV
Users can export the list of products to a CSV file by clicking the "Export" button.

## Design pattern used 

### Strategy Pattern for Filtering
The application uses the strategy pattern to implement various filtering options. The user can select different criteria for filtering products, such as category or price range. Each filter is implemented as a separate strategy class, making it easy to add or remove filters as needed.

#### Model-View-Controller (MVC)
The application is structured according to the Model-View-Controller (MVC) pattern. The data is stored in the LocalStorage repository, and the controllers manage the interactions between the models and views. This separation of concerns allows for greater flexibility and easier maintenance of the codebase.

#### Repository Pattern
The application uses the repository pattern to abstract away the details of how data is stored and retrieved. The LocalStorage repository is responsible for handling all interactions with the LocalStorage API, allowing the rest of the application to remain agnostic to the details of how data is persisted.
## Getting Started

### To run this application, follow these steps:
Clone this repository.
Navigate to the project directory.
### `Run npm install` 

Run npm start to start the development server.
Open http://localhost:3000 in your web browser to view the application.

## Getting Started with Create React App and Redux
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Future Work
Possible future work for this POC includes:

1. Adding a back-end API to store the product data.
2. Adding authentication and authorization to restrict access to certain features.
3. Adding pagination or infinite scrolling to handle large lists of products.
4. Adding filtering and sorting to make it easier to find specific products.
## Demo link
For more information and examples of how to use the app, you can check out the following YouTube link.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


