import { Elysia } from "elysia";
import routes from "./routes";
import checkAuthPlugin from "./middlewares/checkAuth";

const app = new Elysia()

routes.forEach((route) => {
  if (route.isProtected) {
    app.use(new Elysia().use(checkAuthPlugin).route(route.method, route.path, route.handler))
  } else {
    app.route(route.method, route.path, route.handler)
  }
})
app.listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
