/**
 * @swagger
 * tags:
 *   name: Order
 *   description: API endpoints for managing user orders
 */

/**
 * @swagger
 * /order/place:
 *   post:
 *     summary: Place an order
 *     description: Place an order using the products in the user's cart.
 *     responses:
 *       200:
 *         description: Order placed successfully.
 *       400:
 *         description: Cart is empty or order placement failed.
 *       500:
 *         description: Internal server error while placing an order.
 *     tags:
 *       - Order
 */

/**
 * @swagger
 * /orders/history:
 *   get:
 *     summary: Get order history
 *     description: Retrieve the order history for the authenticated user.
 *     responses:
 *       200:
 *         description: List of user's order history retrieved successfully.
 *       204:
 *         description: No order history found.
 *       500:
 *         description: Internal server error while fetching order history.
 *     tags:
 *       - Order
 */

/**
 * @swagger
 * /orders/{orderId}:
 *   get:
 *     summary: Get order details by order ID
 *     description: Retrieve detailed information about a specific order by its ID.
 *     parameters:
 *       - in: path
 *         name: orderId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the order to retrieve.
 *     responses:
 *       200:
 *         description: Order details retrieved successfully.
 *       404:
 *         description: Order not found.
 *       500:
 *         description: Internal server error while fetching order details.
 *     tags:
 *       - Order
 */
