import Link from "next/link";
import LogoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader() {

  return(
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            src={LogoImg}
            alt="A plate with food on it"
            priority
          />
          {/* <img src={LogoImg.src} alt="A plate with food on it" /> */}
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink
                href="/meals"
                text="Browse Meals"
              />
            </li>
          <li>
             <NavLink
                href="/community"
                text="Food Community"
              />
          </li>
          </ul>
        </nav>
      </header>
    </>
  )
}