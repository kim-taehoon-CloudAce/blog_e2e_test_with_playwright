import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Postlist from "../../components/Postlist";


export default function PostsPage() {
  return (
    <>
      <Header />
      <Postlist hasNavigation={false}/>
      <Footer />
    </>
  )
}
