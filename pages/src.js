import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Head from "next/head";
const src = () => {
  return (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Layout/>

      About Page
      <Footer />
    </div>
  )
}

export default src
