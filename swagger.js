const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "E-commerce API",
      description: "API documentation for the E-commerce application",
      contact: {
        name: "JRaghu@842",
      },
      servers: [
        "http://localhost:8080",
        "https://triveous-ecom-4qor.onrender.com/",
      ],
    },
  },

  apis: ["./swagger/*.swagger.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerSpec };
