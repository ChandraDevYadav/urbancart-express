import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import ProductNav from "./Components/Navbar/ProductNav";
import Carousel from "./Components/Carousel/Carousel ";
import HeroSec from "./Components/HeroSec/HeroSec";
import Collection from "./Components/Collection/Collection";
import BannerSec from "./Components/BannerSec/BannerSec";
import TrendingPro from "./Components/TrendingPro/TrendingPro";
import ProductIcon from "./Components/ProductIcon/ProductIcon";
import MoreProduct from "./Components/MoreProduct/MoreProduct";

export default function Home() {
  return (
    <div className="grid grid-cols-1">
      <main className="">
        <Carousel />
        <HeroSec />
        <Collection />
        <BannerSec />
        <TrendingPro />
        <ProductIcon />
        <MoreProduct />
      </main>
      <footer className=""></footer>
    </div>
  );
}
