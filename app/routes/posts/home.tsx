import { Link } from "react-router"

export default function Home() {
  return (
    <div>
      <h1>Posts</h1>
      <Link to="/posts/1">Post 1</Link>
      <Link to="/posts/2">Post 2</Link>
    </div>
  )
}
