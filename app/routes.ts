import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes"

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  ...prefix("posts", [
    index("./routes/posts/home.tsx"),
    route(":id", "./routes/posts/post.tsx"),
  ]),
] satisfies RouteConfig
