# E-commerce App Backend

This is the backend API for an E-commerce application. It provides various endpoints for managing products, categories, user authentication, carts, orders, and more.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Functionality](#functionality)
- [API Documentation](#api-documentation)
  - [User Routes](#user-routes)
  - [Category Routes](#category-routes)
  - [Product Routes](#product-routes)
  - [Cart Routes](#cart-routes)
  - [Order Routes](#order-routes)

## Getting Started

### Prerequisites

Before setting up the project, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce-backend.git


2. Navigate to the project directory:

   ```bash
   cd e-commerce-backend


3. Install dependencies:

   ```bash
   npm install


4. Create a .env file in the project root and configure your environment variables:

   ```bash
   PORT = any port number
   MONGODB_URI=your-mongodb-connection-uri
   JWT_ACCESS_TOKEN_KEY=your-secret-key


5. Start the server:

   ```bash
   npm start




## Functionality

This backend API provides the following functionality:

- User registration and login with JWT authentication.
- Category management (create and list categories).
- Product management (create, list by category, and retrieve product details).
- Cart management (add products, view cart, update quantities, and remove items).
- Order placement (place an order with products from the cart).
- Order history (fetch order history for authenticated users).
- Order details (retrieve detailed information about a specific order by ID).


## API Documentation

### User Routes

- **POST /user/register**: Register a new user.
- **POST /user/login**: Authenticate and log in a user.

### Category Routes

- **GET /categories**: Retrieve a list of all categories.
- **POST /categories**: Create a new category.

### Product Routes

- **GET /products/category/:categoryId**: Retrieve products by category.
- **GET /products/:productId**: Retrieve product details by ID.
- **POST /products**: Create a new product.

### Cart Routes

- **POST /cart/add/:productId**: Add a product to the cart.
- **GET /cart**: Retrieve all products in the user's cart.
