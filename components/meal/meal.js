import Image from "next/image";
import Link from "next/link";
import classes from "./meal.module.css";

function MealSection() {
  return (
    <section className={`${classes["section-meals"]} center-text`}>
      <div className={classes["container"]}>
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omni Food AI chooses from 500+ recipes
        </h2>
      </div>

      <div
        className={`${classes["container"]} grid grid-3-cols margin-bottom-md`}
      >
        <div className={classes["meal"]}>
          <Image
            src="/images/meals/meal-1.jpg"
            alt="Ktm meal"
            height={250}
            width={350}
          />

          <div className={classes["meal-content"]}>
            <div className={classes["meal-tag"]}>
              <span
                className={`${classes["tag"]} ${classes["tag--vegetarian"]} `}
              >
                Vegeratian
              </span>
            </div>
            <p className={classes["meal-title"]}>Japanese Gyozas</p>
            <ul className={classes["meal-attributes"]}>
              <li className={classes["meal-attribute"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes["icon"]}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li className={classes["meal-attribute"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes["icon"]}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  NutriScore<strong> 74</strong>
                </span>
              </li>
              <li className={classes["meal-attribute"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes["icon"]}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span>
                  <strong>4.9</strong>rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes["meal"]}>
          <Image
            src="/images/meals/meal-2.jpg"
            alt="Avocado Salad"
            height={250}
            width={350}
          />

          <div className={classes["meal-content"]}>
            <div className={classes["meal-tag"]}>
              <span className={`${classes["tag"]} ${classes["tag--vegan"]} `}>
                vegan
              </span>
              <span className={`${classes["tag"]} ${classes["tag--paleo"]} `}>
                paleo
              </span>
            </div>
            <p className={classes["meal-title"]}>Avocado Salad</p>
            <ul className={classes["meal-attributes"]}>
              <li className={classes["meal-attribute"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes["icon"]}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>600</strong> calories
                </span>
              </li>
              <li className={classes["meal-attribute"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes["icon"]}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  NutriScore<strong> 92</strong>
                </span>
              </li>
              <li className={classes["meal-attribute"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes["icon"]}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span>
                  <strong>4.6</strong>rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes["diets"]}>
          <h3 className="heading-tertiary">works with any diets</h3>
          <ul className={classes["list"]}>
            <li className={classes["list-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["icon"]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Vegetarian</span>
            </li>
            <li className={classes["list-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["icon"]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Vegan</span>
            </li>
            <li className={classes["list-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["icon"]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Pescatarian</span>
            </li>
            <li className={classes["list-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["icon"]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Gluten-free</span>
            </li>
            <li className={classes["list-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["icon"]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Lactose=free</span>
            </li>
            <li className={classes["list-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["icon"]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Keto</span>
            </li>
            <li className={classes["list-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["icon"]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Paleo</span>
            </li>
            <li className={classes["list-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["icon"]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Low FODMAP</span>
            </li>
            <li className={classes["list-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["icon"]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${classes["container"]} ${classes["all-recipes"]}`}>
        <Link href={`/`}>
          <a className={classes["link"]}>See all recipes</a>
        </Link>
      </div>
    </section>
  );
}

export default MealSection;
