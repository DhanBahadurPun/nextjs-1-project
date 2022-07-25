import Image from "next/image";
import Link from "next/link";

import classes from "./hero.module.css";
import eat from "../../public/images/eat.png";
import img1 from "../../public/images/29.jpg";
import img2 from "../../public/images/32.jpg";
import img3 from "../../public/images/36.jpg";
import img4 from "../../public/images/46.jpg";
import img5 from "../../public/images/97.jpg";

function HeroSection() {
  return (
    <>
      <section className={classes["section-hero"]}>
        <div className={`${classes["hero"]} grid--2--cols`}>
          <div className={classes["hero-text-box"]}>
            <h1 className={`heading-primary`}>
              A healthy meal delivered to your door, every single day
            </h1>
            <p className={classes["hero-description"]}>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <Link href="/">
              <a
                className={`${classes["btn"]} ${classes["btn--full"]} margin-right-sm`}
              >
                Start eating well
              </a>
            </Link>
            <Link href="/">
              <a className={`${classes["btn"]} ${classes["btn--outline"]}`}>
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes["down-icon"]}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
            <div className={classes["delivered-meals"]}>
              <div className={classes["delivered-imgs"]}>
                <div className={classes["hero-img"]}>
                  <Image
                    className="border-radius-50"
                    src={img1}
                    alt="img1"
                    height={50}
                    width={50}
                  />
                </div>
                <div className={classes["hero-img"]}>
                  <Image
                    className="border-radius-50"
                    src={img2}
                    alt="img2"
                    height={50}
                    width={50}
                  />
                </div>
                <div className={classes["hero-img"]}>
                  <Image
                    className="border-radius-50"
                    src={img3}
                    alt="img3"
                    height={50}
                    width={50}
                  />
                </div>
                <div className={classes["hero-img"]}>
                  <Image
                    className="border-radius-50"
                    src={img4}
                    alt="img4"
                    height={50}
                    width={50}
                  />
                </div>
                <div className={classes["hero-img"]}>
                  <Image
                    className="border-radius-50"
                    src={img5}
                    alt="img5"
                    height={50}
                    width={50}
                  />
                </div>
                <div className={classes["hero-img"]}>
                  <Image
                    className="border-radius-50"
                    data-testid="close-icon"
                    src={img5}
                    alt="img5"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
              <p className={classes["delivered-text"]}>
                <span> 250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className={classes["hero-img-box"]}>
            <Image
              src={eat}
              alt="short description about image"
              objectFit="cover"
              height={500}
              width={600}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
