import type { Config } from "@react-router/dev/config"

export default {
  ssr: true,

  async prerender({ getStaticPaths }) {
    return ["/", "/about", "/posts"].concat([1, 2].map((id) => `/posts/${id}`))
  },
} satisfies Config
