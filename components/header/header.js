import Image from "next/image";

import classes from "./header.module.css";
import logo from "../../public/images/logo.jpg";
import Link from "next/link";

function Header() {
  return (
    <header className={classes["header"]}>
      <Image src={logo} alt="logo" height={75} width={75} />
      <nav className={classes["main-nav"]}>
        <ul className={classes["main-nav-list"]}>
          <li>
            <Link href={`/`}>
              <a className={classes["main-nav-link"]}>section 1</a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a className={classes["main-nav-link"]}>section 2</a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a className={classes["main-nav-link"]}>section 3</a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a className={classes["main-nav-link"]}>section 4</a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a
                className={`${classes["main-nav-link"]} ${classes["nav-cta"]}`}
              >
                section 5
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
