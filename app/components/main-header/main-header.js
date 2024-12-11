import Link from "next/link";
import Image from "next/image"
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.scss";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader() {
  return (
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="A plat with food on it" priority />
        Next Level Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            {/* <Link href="/meals">Browse the meals</Link> */}
            <NavLink href="/meals">
              Browse the Meals
            </NavLink>
          </li>
          <li>
            {/* <Link href="/community">Foodies community</Link> */}
            <NavLink href="/community">
              Foodies community
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
