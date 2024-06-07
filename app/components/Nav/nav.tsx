import { Check, Heart, Menu, ShoppingBag } from "lucide-react";
import style from "./style.module.scss";

export default function NavMenu() {
  return (
    <nav className={style.nav}>
      <figure className={style.logo}>
        <Check />
      </figure>

      <ul className={style.nav__links}>
        <li>New & Featured</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Sale</li>
      </ul>

      <div className={style.nav__search}>
        <div className={style.searchbar}>
          <input type="search" placeholder="Search" />
        </div>
        <Heart className={style.favourite} />
        <ShoppingBag className={style.shopping__bag} />
      </div>
      <Menu className={style.hamburger__menu} />
    </nav>
  );
}
