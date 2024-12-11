import Banner from "./components/banner";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import Info from "./components/Info";
import Location from "./components/location";
import Teaching from "./components/Teaching";
import Testemoniels from "./components/Testemoniels";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Location />
      <Testemoniels />
      <Info />
      <Teaching />
      <FAQ />
      <Footer />
    </div>
  );
}
