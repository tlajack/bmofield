"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./specialtyfood.module.css";

import bmofield from "../images/bmofield.svg";
import gluten from "../images/icon-gluten.png";
import veg from "../images/icon-veg.png";
import vegan from "../images/icon-vegan.png";
import halal from "../images/icon-halal.png";
import kosher from "../images/icon-kosher.png";

function Specialtyfood() {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <div className={styles.container}>
      <div className={styles.topLogo}>
        <Image src={bmofield} alt="BMO" />
      </div>
      <h1 className={styles.h1}>
        GLUTEN FRIENDLY, VEGETARIAN, VEGAN &amp; HALAL OFFERINGS
      </h1>
      <div className={styles.icons}>
        <Image src={gluten} alt="glutten free" className={styles.iconsmall} />
        <Image src={veg} alt="vegetarian" className={styles.iconsmall} />
        <Image src={vegan} alt="vegan" className={styles.iconsmall} />
        <Image src={halal} alt="halal" className={styles.iconsmall} />
        {/* <Image src={kosher} alt="kosher" className={styles.iconsmall} /> */}
      </div>
      <h2 className={styles.h2}>Food Allergen Notice</h2>
      <p className={styles.notice}>
        Please inform our Concession Attendants of your allergy upon placing
        your order.
      </p>
      <p className={styles.notice}>
        Be advised we cannot guarantee that cross-contamination has not occurred
        during food preparation. If your allergy is severe, request to speak
        with a member of our Management team.
      </p>
      <p className={styles.notice}>
        Availability of specialty offerings is subject to change and during
        special events, full menus may not be offered.
      </p>
      <div className={styles.offerings} id="gluten">
        <div className={styles.title}>
          <h3 className={styles.h3}>Gluten Friendly</h3>
          <Image className={styles.titleIcon} src={gluten} alt="gluten" />
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>100 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 115)
              </strong>
            </p>
            <ul>
              <li>Hot Dog (Ask for Gluten Free Bun)</li>
              <li>The Burger (Ask for Gluten Free Bun)</li>
              <li>Nacho Supreme (Ask for no Cheese Sauce)</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 108)
              </strong>
            </p>
            <ul>
              <li>Hot Dog (Ask for Gluten Free Bun)</li>
              <li>Nacho Supreme (Ask for no Cheese Sauce)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Panini (Section106)</strong>
            </p>
            <ul>
              <li>Porchetta Sandwich (Ask for Gluten Free Bun)</li>
              <li>Nacho Supreme (Ask for no Cheese Sauce)</li>
            </ul>
          </div>
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>200 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 127)
              </strong>
            </p>
            <ul>
              <li>Hot Dog (Ask for Gluten Free Bun)</li>
              <li>The Burger (Ask for Gluten Free Bun)</li>
              <li>Nacho Supreme (Ask for no Cheese Sauce)</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 105)
              </strong>
            </p>
            <ul>
              <li>Hot Dog (Ask for Gluten Free Bun)</li>
              <li>The Burger (Ask for Gluten Free Bun)</li>
              <li>Nacho Supreme (Ask for no Cheese Sauce)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Hogtown (Section 125)</strong>
            </p>
            <ul>
              <li>Hot Dog (Ask for Gluten Free Bun)</li>
            </ul>

            <p>
              <strong className={styles.strong}>Panini (Section 124)</strong>
            </p>
            <ul>
              <li>Porchetta Sandwich (Ask for Gluten Free Bun)</li>
              <li>Assorted Deli Sandwich (Ask for Gluten Free Bun)</li>
              <li>Smoked Meat Sandwich (Ask for Gluten Free Bun)</li>
            </ul>

            <p>
              <strong className={styles.strong}>Frites (Section 110)</strong>
            </p>
            <ul>
              <li>French Fries</li>
            </ul>

            <p>
              <strong className={styles.strong}>Panini (Section 108)</strong>
            </p>
            <ul>
              <li>Porchetta Sandwich (Ask for Gluten Free Bun)</li>
              <li>Glazed Mushroom Focaccia (Ask for Gluten Free Bun)</li>
              <li>Assorted Deli Sandwich (Ask for Gluten Free Bun)</li>
              <li>Smoked Meat Sandwich (Ask for Gluten Free Bun)</li>
            </ul>
          </div>
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>500 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 204)
              </strong>
            </p>
            <ul>
              <li>Hot Dog (Ask for Gluten Free Bun)</li>
              <li>The Burger (Ask for Gluten Free Bun)</li>
              <li>Nacho Supreme (Ask for no Cheese Sauce)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Panini (Section 207)</strong>
            </p>
            <ul>
              <li>Porchetta Sandwich (Ask for Gluten Free Bun)</li>
              <li>Glazed Mushroom Focaccia (Ask for Gluten Free Bun)</li>
              <li>Smoked Turkey Club (Ask for Gluten Free Bun)</li>
              <li>Smoked Meat Sandwich (Ask for Gluten Free Bun)</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ________VEGETARIAN________ */}
      <div className={styles.offerings} id="vegetarian">
        <div className={styles.title}>
          <h3 className={styles.h3}>Vegetarian</h3>
          <Image className={styles.titleIcon} src={veg} alt="vegetarian" />
        </div>
        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>100 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 115)
              </strong>
            </p>
            <ul>
              <li>Vegan Stadium Dog</li>
              <li>French Fries</li>
              <li>Nacho Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 108)
              </strong>
            </p>
            <ul>
              <li>Vegan Stadium Dog</li>
              <li>French Fries</li>
              <li>Nacho Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>Panini (Section106)</strong>
            </p>
            <ul>
              <li>Vegan Chorizo Burrito</li>
              <li>Nacho Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Pizza Pizza (Section 105)
              </strong>
            </p>
            <ul>
              <li>Cheese Pizza</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Pizza Pizza (Section 121)
              </strong>
            </p>
            <ul>
              <li>Cheese Pizza</li>
            </ul>
          </div>
        </div>
        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>200 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 127)
              </strong>
            </p>
            <ul>
              <li>Vegan Stadium dog</li>
              <li>French Fries</li>
              <li>Nacho Supreme</li>
            </ul>

            {/* <p>
              <strong className={styles.strong}>
                Nacho Cart (Section 125)
              </strong>
            </p>
            <ul><li>Vegan Chorizo Nachos</li></ul> */}

            <p>
              <strong className={styles.strong}>Panini (Section 124)</strong>
            </p>
            <ul>
              <li>Vegan Chorizo Burrito </li>
            </ul>

            <p>
              <strong className={styles.strong}>Frites (Section 110)</strong>
            </p>
            <ul>
              <li>French Fries</li>
              <li>Vegan Poutine</li>
            </ul>

            <p>
              <strong className={styles.strong}>Panini (Section 108)</strong>
            </p>
            <ul>
              <li>Vegan Chorizo Burrito</li>
            </ul>

            <p>
              <strong className={styles.strong}>
                Food Junction (Section 105)
              </strong>
            </p>
            <ul>
              <li>Vegan Stadium Dog</li>
              <li>French Fries</li>
              <li>Nacho Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Pizza Pizza (Section 109)
              </strong>
            </p>
            <ul>
              <li>Cheese Pizza</li>
            </ul>
          </div>
        </div>
        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>500 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 204)
              </strong>
            </p>
            <ul>
              <li>Vegan Stadium Dog</li>
              <li>French Fries</li>
              <li>Nacho Supreme</li>
            </ul>

            <p>
              <strong className={styles.strong}>Panini (Section 207)</strong>
            </p>
            <ul>
              <li>Vegan Chorizo Burrito</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Pizza Pizza (Section 209)
              </strong>
            </p>
            <ul>
              <li>Cheese Pizza</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ########### vegan ############*/}
      <div className={styles.offerings} id="vegan">
        <div className={styles.title}>
          <h3 className={styles.h3}>Vegan</h3>
          <Image className={styles.titleIcon} src={vegan} alt="vegan" />
        </div>
        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>100 LEVEL</h4>
          </div>
          <div className={styles.content}>
            {/* <p>
              <strong className={styles.strong}>EDO Sushi</strong> – Vegan
              options available upon request (sporting events only)
            </p> */}

            <p>
              <strong className={styles.strong}>
                Food Junction (Section 115)
              </strong>
            </p>
            <ul>
              <li>Vegan Stadium Dog</li>
              <li>Nachos (Ask for no Cheese Sauce or Crema)</li>
              <li>French Fries</li>
            </ul>

            <p>
              <strong className={styles.strong}>
                Food Junction (Section 108)
              </strong>
            </p>
            <ul>
              <li>Vegan Stadium Dog</li>
              <li>Nachos (Ask for no Cheese Sauce or Crema)</li>
              <li>French Fries</li>
            </ul>

            <p>
              <strong className={styles.strong}>Panini (Section106)</strong>
            </p>
            <ul>
              <li>Vegan Chorizo Burrito</li>
              <li>Nacho Supreme (Ask for no Cheese Sauce or Crema)</li>
            </ul>
          </div>
        </div>
        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>200 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 127)
              </strong>
            </p>
            <ul>
              <li>Vegan Stadium Dog</li>
              <li>Nachos (Ask for no Cheese Sauce or Crema)</li>
              <li>French Fries</li>
            </ul>

            {/* <p>
              <strong className={styles.strong}>
                Nacho Cart (Section 125)
              </strong>
            </p>
            <ul><li>Vegan Chorizo Nachos</li></ul> */}

            <p>
              <strong className={styles.strong}>Panini (Section 124)</strong>
            </p>
            <ul>
              <li>Vegan Chorizo Burrito</li>
              <li>Nachos (Ask for no Cheese Sauce or Crema)</li>
            </ul>

            <p>
              <strong className={styles.strong}>Frites (Section 110)</strong>
            </p>
            <ul>
              <li>French Fries</li>
              <li>Vegan Poutine</li>
            </ul>

            <p>
              <strong className={styles.strong}>Panini (Section 108)</strong>
            </p>
            <ul>
              <li>Vegan Chorizo Burrito</li>
              <li>Nachos (Ask for no Cheese Sauce or Crema)</li>
            </ul>

            <p>
              <strong className={styles.strong}>
                Food Junction (Section 105)
              </strong>
            </p>
            <ul>
              <li>Vegan Stadium Dog</li>
              <li>Nachos (Ask for no Cheese Sauce or Crema)</li>
              <li>French Fries</li>
            </ul>
          </div>
        </div>
        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>500 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 204)
              </strong>
            </p>
            <ul>
              <li>Vegan Stadium Dog</li>
              <li>Nachos (Ask for no Cheese Sauce or Crema)</li>
              <li>French Fries</li>
            </ul>

            <p>
              <strong className={styles.strong}>Panini (Section 207)</strong>
            </p>
            <ul>
              <li>Vegan Chorizo Burrito</li>
              <li>Nacho Supreme (Ask for no Cheese Sauce or Crema)</li>
            </ul>
          </div>
        </div>
        <div className={styles.eventGrid}></div>
      </div>
      {/* ########### Halal ############*/}
      <div className={styles.offerings} id="halal">
        <div className={styles.title}>
          <h3 className={styles.h3}>Halal</h3>
          <Image className={styles.titleIcon} src={halal} alt="halal" />
        </div>
        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>100 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 115)
              </strong>
            </p>
            <ul>
              <li>The Burger (Ask for no bacon)</li>
              <li>Nacho Supreme </li>
              <li>French Fries</li>
            </ul>

            <p>
              <strong className={styles.strong}>
                Food Junction (Section 108)
              </strong>
            </p>
            <ul>
              <li>Fried Chicken Sandwich</li>
              <li>Nacho Supreme</li>
            </ul>

            <p>
              <strong className={styles.strong}>Panini (Section106)</strong>
            </p>
            <ul>
              <li>Nacho Supreme </li>
            </ul>
          </div>
        </div>
        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>200 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 127)
              </strong>
            </p>
            <ul>
              <li>The Burger (Ask for no bacon)</li>
              <li>Fried Chicken Sandwich</li>
              <li>Nacho Supreme </li>
            </ul>

            {/* <p>
              <strong className={styles.strong}>
                Nacho Cart (Section 125)
              </strong>
            </p>
            <ul>
              <li>Beef Nachos</li>
              <li>Vegan Chorizo Nachos</li>
            </ul> */}

            <p>
              <strong className={styles.strong}>Panini (Section 124)</strong>
            </p>
            <ul>
              <li>Braised Beef Grilled Cheese</li>
              <li>Smoked Meat Sandwich</li>
            </ul>

            <p>
              <strong className={styles.strong}>Frites (Section 110)</strong>
            </p>
            <ul>
              <li>French Fries</li>
              <li>BBQ Brisket Poutine</li>
              <li>Jerk Chicken Poutine</li>
              <li>Smoked Meat Poutine</li>
            </ul>

            <p>
              <strong className={styles.strong}>Panini (Section 108)</strong>
            </p>
            <ul>
              <li>Braised Beef Grilled Cheese</li>
              <li>Smoked Meat Sandwich</li>
            </ul>

            <p>
              <strong className={styles.strong}>
                Food Junction (Section 105)
              </strong>
            </p>
            <ul>
              <li>The Burger (Ask for no bacon)</li>
              <li>Fried Chicken Sandwich</li>
              <li>Nacho Supreme </li>
              <li>French Fries</li>
            </ul>
          </div>
        </div>
        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>500 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Food Junction (Section 204)
              </strong>
            </p>
            <ul>
              <li>The Burger (Ask for no bacon)</li>
              <li>Nacho Supreme </li>
              <li>French Fries</li>
            </ul>

            <p>
              <strong className={styles.strong}>Panini (Section 207)</strong>
            </p>
            <ul>
              <li>Braised Beef Grilled Cheese</li>
              <li>Smoked Meat Sandwich </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ########### Kosher ############*/}
      {/* <div className={styles.offerings} id="kosher">
        <div className={styles.title}>
          <h3 className={styles.h3}>Kosher</h3>
          <Image className={styles.titleIcon} src={kosher} alt="kosher" />
        </div>
        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>100 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>
                Bay St. Deli (Section 105)
              </strong>
              – Dedicated Kosher concession stand. Operating hours dependent on
              religious observation.
            </p>
          </div>
        </div>
      </div> */}
      {/* ########### Kosher ############*/}
      <div
        role="button"
        tabIndex={-1}
        onClick={clickHandler}
        onKeyDown={clickHandler}
        className={styles.menuButton}
      >
        Menu
      </div>
      <div
        className={`${styles.flyingMenu} ${
          menuState ? styles.active : styles.inactive
        }`}
      >
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a
              className={styles.a}
              role="button"
              tabIndex={-2}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              href="#gluten"
            >
              Gluten Friendly
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              role="button"
              tabIndex={-3}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              href="#vegetarian"
            >
              Vegetarian
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              role="button"
              tabIndex={-4}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              href="#vegan"
            >
              Vegan
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              role="button"
              tabIndex={-5}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              href="#halal"
            >
              Halal
            </a>
          </li>
          {/* <li className={styles.li}>
            <a
              className={styles.a}
              role="button"
              tabIndex={-5}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              href="#kosher"
            >
              Kosher
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Specialtyfood;
