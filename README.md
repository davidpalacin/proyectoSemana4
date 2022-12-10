# API JAVASCRIPT

## Table of Contents

- [Description](#desc)
- [Requisites](#requisites)
- [Usage](#usage)
- [Example code](#example)

## Description <a name = "desc"></a>

An API using only JavaScript, frameworks/libraries: Express and Sequelize, database done in MySQL.

## Requisites <a name = "requisites"></a>

- You need Node.js
- Optional: Postman or similar to test the API calls.

## Usage <a name = "usage"></a>

- Clone or copy this repository: git clone https://enlacerepo
- To install all the dependencies: npm install
- You are ready to use API URLs, example with axios: (This example returns all the clients in database).

        const api = "https://proyectosemana4-production.up.railway.app/clients";

        const result = await axios.get(api);

- Now you have the API results in result variable

## Example code <a name = "example"></a>
![example of API request ](./img/example.png)
- Response:
![example of API response ](./img/exampleResponse.png)
