import Image from "next/image";
import classes from "./testimonial.module.css";

function Testimonial() {
  return (
    <section className={`${classes["secttion-testimonials"]}`}>
      <div className={classes["testimonials-container"]}>
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>
        <div className={classes["testimonials"]}>
          <figure className={classes["testimonial"]}>
            <Image
              src={`/images/29.jpg`}
              alt="Phot of customer"
              height={50}
              width={50}
              className={classes["testimonial-img"]}
            />

            <blockquote className={classes["testimonial-text"]}>
              Inexpensive, healthy and great-testing meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className={classes["testimonial-name"]}>&mdash; Dave John</p>
          </figure>

          <figure className={classes["testimonial"]}>
            <Image
              src={`/images/29.jpg`}
              alt="Phot of customer"
              height={50}
              width={50}
              className={classes["testimonial-img"]}
            />
            <blockquote className={classes["testimonial-text"]}>
              Inexpensive, healthy and great-testing meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className={classes["testimonial-name"]}>&mdash; Dave John</p>
          </figure>

          <figure className={classes["testimonial"]}>
            <Image
              src={`/images/29.jpg`}
              alt="Phot of customer"
              height={50}
              width={50}
              className={classes["testimonial-img"]}
            />
            <blockquote className={classes["testimonial-text"]}>
              Inexpensive, healthy and great-testing meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className={classes["testimonial-name"]}>&mdash; Dave John</p>
          </figure>

          <figure className={classes["testimonial"]}>
            <Image
              src={`/images/29.jpg`}
              alt="Phot of customer"
              height={50}
              width={50}
              className={classes["testimonial-img"]}
            />
            <blockquote className={classes["testimonial-text"]}>
              Inexpensive, healthy and great-testing meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className={classes["testimonial-name"]}>&mdash; Dave John</p>
          </figure>
        </div>
      </div>
      <div className={classes["gallery"]}>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/1.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/2.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/3.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/4.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/5.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/6.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/7.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/8.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/9.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/10.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/11.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src={`/images/gallery/12.jpg`}
            alt="Photo of beautifully arranged food"
            height={250}
            width={300}
            className={classes["img"]}
          />
        </figure>
      </div>
    </section>
  );
}

export default Testimonial;
