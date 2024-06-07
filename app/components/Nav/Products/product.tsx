import Image from "next/image";
import style from "./style.module.scss";
import { Star, StarHalf } from "lucide-react";
import { ListType } from "@/app/components/Nav/Products/products";

export default function Product({ data }: { data: ListType }) {
  return (
    <div className={style.product}>
      <figure className={style.product__image}>
        <Image src={data.imgUrl} alt="banner" fill />
      </figure>
      <h2>{data.name}</h2>
      <p>{data.info}</p>
      <div className={style.rating}>
        <div>
          {Array.from({ length: Math.floor(data.stars) }).map((_, i) => {
            return <Star fill="#FFC402" stroke="#FFC402" key={i} />;
          })}
          {data.stars % 1 === 0.5 ? (
            <StarHalf fill="#FFC402" stroke="#FFC402" />
          ) : null}
        </div>
        <p>({data.reviewCount})</p>
      </div>
      <p className={style.price}>$48.25</p>
    </div>
  );
}
