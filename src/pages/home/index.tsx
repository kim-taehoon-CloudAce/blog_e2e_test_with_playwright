import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Postlist from "../../components/Postlist";
import Carousel from "components/Carousel";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      
      {/* postLIst */}
      <Postlist />
      <Footer />
    </div>
  );
}
