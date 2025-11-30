import { Elysia } from "elysia";
import routes from "./routes";
import checkAuthPlugin from "./middlewares/checkAuth";
import { config } from "dotenv";
import cors from "@elysiajs/cors";
config();
const app = new Elysia()
app.use(cors())
routes.forEach((route) => {
  if (route.isProtected) {
    app.use(new Elysia().use(checkAuthPlugin).route(route.method, route.path, route.handler))
  } else {
    app.route(route.method, route.path, route.handler)
  }
})
app.listen(process.env.PORT || 4000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
