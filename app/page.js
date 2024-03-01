import Image from "next/image";
import styles from "./page.module.css";
import bmofield from "./images/bmofield.svg";

export default function Home() {
  return (
    <div>
      <Image src={bmofield} alt="bmo field" />
    </div>
  );
}
