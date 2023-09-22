/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API endpoints for managing products
 */

/**
 * @swagger
 * /products/{categoryId}:
 *   get:
 *     summary: Get products by category ID
 *     description: Retrieve a list of products by the specified category ID.
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the category to retrieve products for.
 *     responses:
 *       200:
 *         description: List of products successfully retrieved.
 *       404:
 *         description: Category not found.
 *       500:
 *         description: Internal server error.
 *     tags:
 *       - Products
 */

/**
 * @swagger
 * /product/{productId}:
 *   get:
 *     summary: Get product details by product ID
 *     description: Retrieve detailed information about a specific product by its ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to retrieve details for.
 *     responses:
 *       200:
 *         description: Product details successfully retrieved.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 *     tags:
 *       - Products
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     description: Create a new product with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               availability:
 *                 type: boolean
 *               categoryId:
 *                 type: string
 *             required:
 *               - title
 *               - price
 *               - description
 *               - availability
 *               - categoryId
 *     responses:
 *       201:
 *         description: Product created successfully.
 *       400:
 *         description: Bad request, missing fields, or category not found.
 *       500:
 *         description: Internal server error while creating a product.
 *     tags:
 *       - Products
 */
