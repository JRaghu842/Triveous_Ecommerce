/**
 * @swagger
 * tags:
 *   name: Category
 *   description: API endpoints for managing categories
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get a list of all categories
 *     description: Retrieve a list of all categories.
 *     responses:
 *       200:
 *         description: List of categories successfully retrieved.
 *       500:
 *         description: Internal server error while fetching categories.
 *     tags:
 *       - Category
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     description: Create a new category with the specified name.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the category to create.
 *                 example: New Category
 *     responses:
 *       200:
 *         description: Category created successfully.
 *       400:
 *         description: Bad request, invalid input.
 *       500:
 *         description: Internal server error while creating a category.
 *     tags:
 *       - Category
 */
