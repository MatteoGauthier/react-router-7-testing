import type { Route } from "./+types/post"

export async function loader({ params }: Route.LoaderArgs) {
  let post = await Promise.resolve({ id: params.id, title: "Post " + params.id })
  return { post }
}

export default function Post({ loaderData }: Route.ComponentProps) {
  return <h1>WElcome to page of post {loaderData.post.title}</h1>
}
