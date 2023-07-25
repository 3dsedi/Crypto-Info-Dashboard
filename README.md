# Crypto Info Dashboard

## Description

The Crypto Info Dashboard is a web application that allows users to view real-time data for various cryptocurrencies. It fetches cryptocurrency data from the CoinCap API and stores it in a SQLite database. The data is then presented in a user-friendly interface built with React, JavaScript, Bootstrap, and Recharts.

The application features a list of all cryptocurrencies, sortable by their rates or prices in both ascending and descending order. Additionally, users can explore the Market Capitalization of the Top 10 Cryptocurrencies by USD in either bar graph or donut chart format.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)


## Installation

1. Clone the repository:
```bash
git clone https://github.com/3dsedi/new
cd new
```


2. Backend Setup:
Make sure you have PHP and Composer installed.
Install Laravel dependencies:
```bash
cd my-app
composer install
```

4. Set up the SQLite database:
```bash
touch database/database.db
```
in my-app go to .env and change the path to your database file
DB_DATABASE=\path\to\your\database\database.db
```bash
php artisan migrate
```

6. Frontend Setup:
Make sure you have Node.js and npm installed.
Install frontend dependencies: in the root directory
```bash
cd client
npm install
```
## Usage
In the root Directory
Start the backend server:
```bash
cd my-app
php artisan serve
```
Start the frontend development server:
```bash
cd client
npm start
```
Open your web browser and navigate to http://localhost:3000 to access the  Crypto Info Dashboard.

## Technologies
Backend:  

- Laravel (PHP)
- SQLite database
  
Frontend:

- React
- JavaScript
- Bootstrap
- Recharts

  ## Contributing
   Contributions to the Crypto Info Dashboard are welcome! If you find any issues or have suggestions
   for improvements, feel free to open an issue or create a pull request.
  


