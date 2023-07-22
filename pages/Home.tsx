import { Layout } from "~/components/Layout"

type HomeProps = {
  message: string
}

export function Home({ message }: HomeProps) {

  return (
    <Layout>
      <h1>{message}</h1>
    </Layout>
  )
}
