import type { Config } from "@react-router/dev/config"

export default {
  ssr: true,

  prerender: ["/", "/about", "/posts", "/posts/1", "/posts/2"],
} satisfies Config
