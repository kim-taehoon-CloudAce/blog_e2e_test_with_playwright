import Footer from "components/Footer";
import Header from "components/Header";
import Postlist from "components/Postlist";
import Profile from "components/Profile";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <Profile />
      <Postlist hasNavigation={false} />
      <Footer />
    </>
  );
}
