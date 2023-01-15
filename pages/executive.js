import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Head from "next/head";
const executive = () => {
  return (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Layout/>
      <diV>
        <p>There are various associations on campus to know more about them and their various executives click on the organization</p>
        <ul>
          <li>ISA</li>
          <li>Enactus</li>
          <li>Chipset</li>
          <li>Phas</li>

          <li>Edsu</li>

        </ul>
      </diV>
      <Footer/>
    </div>
  )
}

export default executive
