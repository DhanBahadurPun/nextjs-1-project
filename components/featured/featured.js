import Image from "next/image";
import classes from "./featured.module.css";

function FeaturedSection() {
  return (
    <section className={classes["section-featured"]}>
      <div className={classes["container"]}>
        <h2 className={classes["heading-featured-in"]}>A featured in</h2>
        <div className={classes["logos"]}>
          <Image
            src={`/images/logos/business-insider.png`}
            alt="business insider logo"
            height={32}
            width={100}
          />
          <Image
            src={`/images/logos/forbes.png`}
            alt="forbes logo"
            height={50}
            width={100}
          />
          <Image
            src={`/images/logos/techcrunch.png`}
            alt="tech crunch logo"
            height={32}
            width={250}
          />
          <Image
            src={`/images/logos/the-new-york-times.png`}
            alt="the new york times logo"
            height={32}
            width={250}
          />
          <Image
            src={`/images/logos/usa-today.png`}
            alt="usa today logo"
            height={32}
            width={250}
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
