import Image from "next/image";
import style from "./style.module.scss";

export default function Banner() {
  return (
    <figure className={style.banner}>
      <Image src={"/banner.png"} alt="banner" fill />
    </figure>
  );
}
