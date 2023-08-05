import Header from "../components/Header"
import Footer from "../components/Footer"
import ContentVariant1 from "../components/UIcomponents/ContentVariant1"
import ContentVariant2 from "../components/UIcomponents/ContentVariant2"
import Excerpt from "../components/Excerpt"



function Home() {

  return (
    <>
      <Header />
      <ContentVariant1 />
      <ContentVariant2 />
      <Excerpt title="The Best Choices"/>
      <Footer />
    </>
  )
}

export default Home
