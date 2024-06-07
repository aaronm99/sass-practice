import Image from "next/image";
import style from "./style.module.scss";
import Product from "@/app/components/Nav/Products/product";
import Container from "@/app/components/container";

export type ListType = {
  name: string;
  imgUrl: string;
  info: string;
  stars: number;
  reviewCount: number;
  price: number;
};

export default function Products() {
  return (
    <Container>
      <section className={style.products__section}>
        <h1 className={style.products__heading}>Trending Products</h1>
        <div className={style.products}>
          {ProductsList.map((x, i) => {
            return <Product key={i} data={x} />;
          })}
        </div>
      </section>
    </Container>
  );
}

const ProductsList: ListType[] = [
  {
    name: "Short Sleeve Black Shirt",
    imgUrl: "/t-shirt.jpg",
    info: "From United States",
    stars: 4.5,
    reviewCount: 129,
    price: 48.25,
  },
  {
    name: "Short Sleeve White Shirt",
    imgUrl: "/t-shirt-2.jpg",
    info: "From United States",
    stars: 5,
    reviewCount: 129,
    price: 48.25,
  },
  {
    name: "Short Sleeve Burgandy Shirt",
    imgUrl: "/t-shirt-3.jpg",
    info: "From United States",
    stars: 3.5,
    reviewCount: 129,
    price: 48.25,
  },
  {
    name: "Short Sleeve Black Shirt",
    imgUrl: "/t-shirt-4.jpg",
    info: "From United States",
    stars: 5,
    reviewCount: 129,
    price: 48.25,
  },
];
