import { HomeFooter } from "@/components/HomeFooter";
import { HeroVideo } from "@/components/HeroVideo";

export default function Home() {
  return (
    <div className="bg-black">
      {/* En az bir tam ekran: footer ilk karede görünmez, aşağı kaydırınca gelir */}
      <HeroVideo />
      <HomeFooter />
    </div>
  );
}
