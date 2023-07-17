const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(
  path.join(__dirname, "data/transaction.json")
);
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});

module.exports = server;