import LogoLoop from "./LogoLoop";
import {
  SiApple,
  SiSamsung,
  SiDell,
  SiHp,
  SiLenovo,
  SiAsus,
 // SiMicrosoft,
  SiOneplus,
  SiVivo,
  SiOppo,
//SiRealme,
  //SiMotorola
} from "react-icons/si";

const brandLogos = [
  { node: <SiApple />, title: "Apple" },
  { node: <SiSamsung />, title: "Samsung" },
  { node: <SiDell />, title: "Dell" },
  { node: <SiHp />, title: "HP" },
  { node: <SiLenovo />, title: "Lenovo" },
  { node: <SiAsus />, title: "ASUS" },
  { node: <SiOneplus />, title: "OnePlus" },
  { node: <SiVivo />, title: "Vivo" },
  { node: <SiOppo />, title: "Oppo" },
 // { node: <SiRealme />, title: "Realme" },
];

export default function CompanyBrands() {
  return (
    <div className="mt-28 relative px-4">
      <h3 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-300 mb-10">
        We Repair All Major Brands
      </h3>

      <div className="relative overflow-hidden h-[100px]">
        <LogoLoop
          logos={brandLogos}
          speed={140}
          direction="left"
          logoHeight={42}
          gap={55}
          hoverSpeed={0}
          fadeOut
          scaleOnHover
        />
      </div>
    </div>
  );
}
