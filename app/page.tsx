import Banner from "@/app/components/Nav/Banner/banner";
import Products from "@/app/components/Nav/Products/products";
import NavMenu from "@/app/components/Nav/nav";

export default function Home() {
  return (
    <>
      <NavMenu />
      <main className="">
        <Banner />
        <Products />
      </main>
    </>
  );
}
