import Image from "next/image";

import iPhone from "../../public/images/iPhone.jpg";
import classes from "./how-section.module.css";

function SectionHow() {
  return (
    <section className={classes["section-how"]}>
      <div className={classes["container"]}>
        <span className={`subheading`}>How it Works</span>
        <h2 className={`heading-secondary`}>
          Your daily dose of health in 3 simgple steps
        </h2>
      </div>

      <div className={`${classes["container"]} grid grid-2-cols grid-center-v`}>
        {/* Step 01 */}
        <div className={classes["step-text-box"]}>
          <p className={classes["step-number"]}>01</p>
          <h3 className={`heading-tertiary`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <p className={classes["step-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            molestie mi a massa scelerisque placerat. Duis tincidunt nibh et
            lorem pharetra, eu efficitur turpis blandit. Integer dapibus, sapien
            faucibus consectetur commodo, mauris tellus maximus nulla, nec
            pharetra nulla mauris nec lorem.
          </p>
        </div>
        <div className={classes["step-img-box"]}>
          <Image
            src={iPhone}
            alt="iPhone app preferences screen"
            height={300}
            width={150}
          />
        </div>
        {/* Step 02 */}
        <div className={classes["step-img-box"]}>
          <Image
            src={iPhone}
            alt="iPhone app preferences screen"
            height={300}
            width={150}
          />
        </div>
        <div className={classes["step-text-box"]}>
          <p className={classes["step-number"]}>02</p>
          <h3 className={classes["heading-tertiary"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <p className={classes["step-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            molestie mi a massa scelerisque placerat. Duis tincidunt nibh et
            lorem pharetra, eu efficitur turpis blandit. Integer dapibus, sapien
            faucibus consectetur commodo, mauris tellus maximus nulla, nec
            pharetra nulla mauris nec lorem.
          </p>
        </div>
        {/* Step 03 */}
        <div className={classes["step-text-box"]}>
          <p className={classes["step-number"]}>03</p>
          <h3 className={classes["heading-tertiary"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <p className={classes["step-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            molestie mi a massa scelerisque placerat. Duis tincidunt nibh et
            lorem pharetra, eu efficitur turpis blandit. Integer dapibus, sapien
            faucibus consectetur commodo, mauris tellus maximus nulla, nec
            pharetra nulla mauris nec lorem.
          </p>
        </div>
        <div className={classes["step-img-box"]}>
          <Image
            src={iPhone}
            alt="iPhone app preferences screen"
            height={300}
            width={150}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionHow;
