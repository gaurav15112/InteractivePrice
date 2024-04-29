import Head from "next/head";
import Image from "next/image";
import { Inter, Urbanist, DM_Sans } from "next/font/google";
import styles from "@/styles/_Pricing.module.scss";
import Pricing from "@/Components/Pricing";
const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"], display: "swap" });
const Dmsans = DM_Sans({ subsets: ["latin"], display: "swap" });
export default function Home() {
  return (
    <div className={`${urbanist.className} ${Dmsans.className}`}>
      <div className="container-outer">
        <div className="container-inner">
          <Pricing />
        </div>
      </div>
    </div>
  );
}
