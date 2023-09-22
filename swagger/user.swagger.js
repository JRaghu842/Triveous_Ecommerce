/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with the provided details.
 *     parameters:
 *       - name: username
 *         in: body
 *         required: true
 *         type: string
 *       - name: email
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Registration successful
 *       400:
 *         description: Bad request or user already exists
 *       500:
 *         description: Internal server error
 *     tags:
 *       - User
 */
