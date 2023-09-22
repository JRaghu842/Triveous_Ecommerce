/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: API endpoints for managing user carts
 */

/**
 * @swagger
 * /cart/add/{productId}:
 *   post:
 *     summary: Add a product to the user's cart
 *     description: Add a product to the user's cart with the specified quantity.
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to add to the cart.
 *       - in: body
 *         name: quantity
 *         schema:
 *           type: integer
 *         required: true
 *         description: Quantity of the product to add to the cart.
 *     responses:
 *       200:
 *         description: Product added to the cart successfully.
 *       404:
 *         description: Product not found or cart not found.
 *       500:
 *         description: Internal server error while adding a product to the cart.
 *     tags:
 *       - Cart
 */

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get all products in user's cart
 *     description: Retrieve all products in the user's cart.
 *     responses:
 *       200:
 *         description: List of products in the user's cart successfully retrieved.
 *       404:
 *         description: Cart is empty or cart not found.
 *       500:
 *         description: Internal server error while fetching products from the cart.
 *     tags:
 *       - Cart
 */

/**
 * @swagger
 * /cart/update/{cartItemId}:
 *   put:
 *     summary: Update the quantity of a product in the cart
 *     description: Update the quantity of a product in the cart with the specified quantity.
 *     parameters:
 *       - in: path
 *         name: cartItemId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the cart item to update.
 *       - in: body
 *         name: quantity
 *         schema:
 *           type: integer
 *         required: true
 *         description: New quantity of the cart item.
 *     responses:
 *       200:
 *         description: Cart item quantity updated successfully.
 *       404:
 *         description: Cart not found or cart item not found.
 *       500:
 *         description: Internal server error while updating cart item quantity.
 *     tags:
 *       - Cart
 */

/**
 * @swagger
 * /cart/remove/{cartItemId}:
 *   delete:
 *     summary: Remove a product from the cart
 *     description: Remove a product from the user's cart by cart item ID.
 *     parameters:
 *       - in: path
 *         name: cartItemId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the cart item to remove.
 *     responses:
 *       200:
 *         description: Cart item removed successfully.
 *       404:
 *         description: Cart not found or cart item not found.
 *       500:
 *         description: Internal server error while removing cart item.
 *     tags:
 *       - Cart
 */
