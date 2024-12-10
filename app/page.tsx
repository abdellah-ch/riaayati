import Banner from "./components/banner";
import Footer from "./components/footer";
import Info from "./components/Info";
import Location from "./components/location";
import Testemoniels from "./components/Testemoniels";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Info />
      <Testemoniels />

      <Location />
      <Footer />
    </div>
  );
}
