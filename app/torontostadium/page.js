"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./torontostadium.module.css";

import gluten from "../images/icon-gluten.png";
import veg from "../images/icon-veg.png";
import vegan from "../images/icon-vegan.png";
import halal from "../images/icon-halal.png";

function TorontoStadium() {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <h1 className={styles.headerTitle}>Toronto Stadium Specialty Food Guide 2026</h1>
      </div>
      <h1 className={styles.h1}>
        GLUTEN FRIENDLY, VEGETARIAN, VEGAN &amp; HALAL OFFERINGS
      </h1>
      <div className={styles.icons}>
        <Image src={gluten} alt="gluten free" className={styles.iconsmall} />
        <Image src={veg} alt="vegetarian" className={styles.iconsmall} />
        <Image src={vegan} alt="vegan" className={styles.iconsmall} />
        <Image src={halal} alt="halal" className={styles.iconsmall} />
      </div>
      <h2 className={styles.h2}>Food Allergen Notice</h2>
      <p className={styles.notice}>
        Allergens are carefully monitored in our facility, and while we follow
        strict safety procedures, there is a possibility that cross-contamination
        may occur.
      </p>
      <p className={styles.notice}>
        Please inform our Concession Attendants of any allergy upon placing your
        order.
      </p>
      <p className={styles.notice}>
        If your allergy is severe, request to speak with a member of our
        management team for assistance.
      </p>
      <p className={styles.notice}>
        Availability of specialty offerings is subject to change.
      </p>

      {/* ________GLUTEN FRIENDLY________ */}
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
              <strong className={styles.strong}>Stadium Fan Experience</strong>
            </p>
            <ul>
              <li>Beef Suya</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 115</strong>
            </p>
            <ul>
              <li>Charbroiled Cheeseburger (Request Gluten Free Bun)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 106</strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese Sauce)</li>
              <li>Tostitos Piri Piri Chicken Nacho (Request NO Cheese Sauce)</li>
            </ul>
          </div>
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>200 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>Section 127</strong>
            </p>
            <ul>
              <li>Charbroiled Cheeseburger (Request Gluten Free Bun)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 105</strong>
            </p>
            <ul>
              <li>Charbroiled Cheeseburger (Request Gluten Free Bun)</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Section 109 – Tostitos Nacho Cart
              </strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese)</li>
              <li>Tostitos Piri Piri Chicken Nacho (Request NO Cheese)</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Section 125 – Tostitos Nacho Cart
              </strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese)</li>
              <li>Tostitos Piri Piri Chicken Nacho (Request NO Cheese)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 108</strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese)</li>
              <li>Tostitos Piri Piri Chicken Nacho (Request NO Cheese)</li>
              <li>Italian Meat Panini (Request Gluten Free Bun)</li>
              <li>Smoked Turkey Panini (Request Gluten Free Bun)</li>
              <li>Vegan Deli Panini (Request Gluten Free Bun)</li>
              <li>Pulled Porchetta Sandwich (Request Gluten Free Bun)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 130</strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese)</li>
              <li>Tostitos Piri Piri Chicken Nacho (Request NO Cheese)</li>
              <li>Italian Meat Panini (Request Gluten Free Bun)</li>
              <li>Smoked Turkey Panini (Request Gluten Free Bun)</li>
              <li>Vegan Deli Panini (Request Gluten Free Bun)</li>
              <li>Pulled Porchetta Sandwich (Request Gluten Free Bun)</li>
            </ul>
          </div>
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>500 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>Section 204</strong>
            </p>
            <ul>
              <li>Charbroiled Cheeseburger (Request Gluten Free Bun)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 207</strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese)</li>
              <li>Tostitos Piri Piri Chicken Nacho (Request NO Cheese)</li>
              <li>Italian Meat Panini (Request Gluten Free Bun)</li>
              <li>Smoked Turkey Panini (Request Gluten Free Bun)</li>
              <li>Vegan Deli Panini (Request Gluten Free Bun)</li>
              <li>Pulled Porchetta Sandwich (Request Gluten Free Bun)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 119</strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese)</li>
              <li>Tostitos Piri Piri Chicken Nacho (Request NO Cheese)</li>
              <li>Italian Meat Panini (Request Gluten Free Bun)</li>
              <li>Smoked Turkey Panini (Request Gluten Free Bun)</li>
              <li>Vegan Deli Panini (Request Gluten Free Bun)</li>
              <li>Pulled Porchetta Sandwich (Request Gluten Free Bun)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 115</strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese)</li>
              <li>Tostitos Piri Piri Chicken Nacho (Request NO Cheese)</li>
              <li>Italian Meat Panini (Request Gluten Free Bun)</li>
              <li>Smoked Turkey Panini (Request Gluten Free Bun)</li>
              <li>Vegan Deli Panini (Request Gluten Free Bun)</li>
              <li>Pulled Porchetta Sandwich (Request Gluten Free Bun)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 130</strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese)</li>
              <li>Tostitos Piri Piri Chicken Nacho (Request NO Cheese)</li>
              <li>Italian Meat Panini (Request Gluten Free Bun)</li>
              <li>Smoked Turkey Panini (Request Gluten Free Bun)</li>
              <li>Vegan Deli Panini (Request Gluten Free Bun)</li>
              <li>Pulled Porchetta Sandwich (Request Gluten Free Bun)</li>
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
              <strong className={styles.strong}>Stadium Fan Experience</strong>
            </p>
            <ul>
              <li>Vegetable Empanada</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 115</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>French Fries</li>
              <li>Miss Vickies Fried Pickles</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 108</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>French Fries</li>
              <li>Miss Vickies Fried Pickles</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 106</strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Section 109 – Tostitos Nacho Cart
              </strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Section 125 – Tostitos Nacho Cart
              </strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 121</strong>
            </p>
            <ul>
              <li>Cheese Pizza</li>
              <li>Vegan Hot Dog</li>
              <li>French Fries</li>
            </ul>
          </div>
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>200 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>Section 127</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>French Fries</li>
              <li>Miss Vickies Fried Pickles</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 110</strong>
            </p>
            <ul>
              <li>French Fries</li>
              <li>Vegan Hot Dog</li>
              <li>Cheese Pizza</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 108</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>Tostitos Nachos Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 105</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>French Fries</li>
              <li>Miss Vickies Fried Pickles</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Section 109 – Tostitos Nacho Cart
              </strong>
            </p>
            <ul>
              <li>Tostitos Nachos Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Section 125 – Tostitos Nacho Cart
              </strong>
            </p>
            <ul>
              <li>Tostitos Nachos Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 130</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>Tostitos Nacho Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 119</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>Tostitos Nacho Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 115</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>Tostitos Nacho Supreme</li>
            </ul>
          </div>
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>500 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>Section 204</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>French Fries</li>
              <li>Miss Vickies Fried Pickles</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 207</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>Tostitos Nacho Supreme</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 210</strong>
            </p>
            <ul>
              <li>Cheese Pizza</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ########VEGAN######## */}
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
            <p>
              <strong className={styles.strong}>Section 115</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>Miss Vickies Fried Pickles</li>
              <li>French Fries</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 106</strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese and NO Crema)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 108</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>Miss Vickies Fried Pickles</li>
              <li>French Fries</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 132</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>Tostitos Nacho Supreme (Request NO Cheese and NO Crema)</li>
            </ul>
          </div>
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>200 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>Stand 3 (Section 121)</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>French Fries</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Section 109 – Tostitos Nacho Cart
              </strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese and NO Crema)</li>
            </ul>
            <p>
              <strong className={styles.strong}>
                Section 125 – Tostitos Nacho Cart
              </strong>
            </p>
            <ul>
              <li>Tostitos Nacho Supreme (Request NO Cheese and NO Crema)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 127</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>French Fries</li>
              <li>Miss Vickies Fried Pickles</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 110</strong>
            </p>
            <ul>
              <li>French Fries</li>
              <li>Vegan Hot Dog</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 108</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>Tostitos Nachos Supreme (Request NO Cheese and NO Crema)</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 105</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>French Fries</li>
              <li>Miss Vickies Fried Pickles</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 119</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>
                Tostitos Nacho Supreme (Request NO Cheese Sauce or Crema)
              </li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 115</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>
                Tostitos Nacho Supreme (Request NO Cheese Sauce or Crema)
              </li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 130</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>Tostitos Nacho Supreme (Request NO Cheese and NO Crema)</li>
            </ul>
          </div>
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>500 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>Section 204</strong>
            </p>
            <ul>
              <li>Vegan Hot Dog</li>
              <li>French Fries</li>
              <li>Miss Vickies Fried Pickles</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 207</strong>
            </p>
            <ul>
              <li>Vegan Deli Panini</li>
              <li>
                Tostitos Nacho Supreme (Request NO Cheese Sauce or Crema)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ########HALAL######## */}
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
              <strong className={styles.strong}>Stadium Fan Experience</strong>
            </p>
            <ul>
              <li>BBQ Brisket Sandwich</li>
              <li>Beef Suya</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 115</strong>
            </p>
            <ul>
              <li>Charbroiled Cheeseburger</li>
              <li>Pickle Fried Chicken Sandwich</li>
              <li>French Fries</li>
              <li>Chicken Tenders &amp; Fries</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 121</strong>
            </p>
            <ul>
              <li>Chicken Tenders and Fries</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 108</strong>
            </p>
            <ul>
              <li>Pickle Fried Chicken Sandwich</li>
              <li>Chicken Tenders &amp; Fries</li>
            </ul>
            <p>
              <strong className={styles.strong}>North 132</strong>
            </p>
            <ul>
              <li>BBQ Brisket Sandwich</li>
            </ul>
          </div>
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>200 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>Section 127</strong>
            </p>
            <ul>
              <li>Charbroiled Cheeseburger</li>
              <li>Pickle Fried Chicken Sandwich</li>
              <li>Chicken Tenders &amp; Fries</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 110</strong>
            </p>
            <ul>
              <li>French Fries</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 108</strong>
            </p>
            <ul>
              <li>BBQ Brisket Sandwich</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 105</strong>
            </p>
            <ul>
              <li>Charbroiled Cheeseburger</li>
              <li>Pickle Fried Chicken Sandwich</li>
              <li>French Fries</li>
              <li>Chicken Tenders &amp; Fries</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 119</strong>
            </p>
            <ul>
              <li>BBQ Brisket Sandwich</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 115</strong>
            </p>
            <ul>
              <li>BBQ Brisket Sandwich</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 130</strong>
            </p>
            <ul>
              <li>BBQ Brisket Sandwich</li>
            </ul>
          </div>
        </div>

        <div className={styles.eventGrid}>
          <div className={styles.level}>
            <h4 className={styles.h4}>500 LEVEL</h4>
          </div>
          <div className={styles.content}>
            <p>
              <strong className={styles.strong}>Section 204</strong>
            </p>
            <ul>
              <li>Charbroiled Cheeseburger</li>
              <li>French Fries</li>
              <li>Chicken Tenders &amp; Fries</li>
            </ul>
            <p>
              <strong className={styles.strong}>Section 207</strong>
            </p>
            <ul>
              <li>BBQ Brisket Sandwich</li>
            </ul>
          </div>
        </div>
      </div>

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
        </ul>
      </div>
    </div>
  );
}

export default TorontoStadium;
