

# React Pagination Filter Sort API Fetching

This project is a React and Node.js application with a PostgreSQL database, designed to demonstrate pagination, searching, and sorting functionalities. It includes the following features:

## Features

1. **API Integration**: Built API endpoints for retrieving and posting data using PostgreSQL.

2. **Data Generation**: Generates 50 dummy records in the database with fields including "sno", "customer name", "age", "phone", "location", and "created_at".

3. **Single Page Application**: Provides a single-page application interface to display the data in a table format.

4. **Pagination**: Implements pagination with 20 records per page to efficiently manage large datasets.

5. **Search Functionality**: Allows users to search data by the "name" or "location" column.

6. **Sorting**: Enables users to sort data either by "date" or "time".

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your_username/React-Pagination-Filter-Sort-api-Fetching.git
cd React-Pagination-Filter-Sort-api-Fetching/client
npm install
cd ../server
npm install
```

2. Set up your PostgreSQL database and update the database configuration in the backend code accordingly.

3. Run the backend server:

```bash
cd server
npm start
```

4. Run the frontend server:

```bash
cd ../client
npm start
```

5. Access the application in your browser at `http://localhost:3000`.

## Usage

Once the application is running, you can interact with it through the user interface:

- View the paginated data in the table format.
- Use the search bar to search for records by "name" or "location".
- Click on the column headers to sort the data by "date" or "time".

## Technologies Used

- React
- Node.js
- PostgreSQL
- HTML/CSS

