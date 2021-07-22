import Breadcrumbs from "../Components/Breadcrumbs";
import { useState } from "react";
import InformationTab1 from "../Components/AboutUs.js/InformationTab1";
import InformationTab2 from "../Components/AboutUs.js/InformationTab2";
import InformationTab3 from "../Components/AboutUs.js/InformationTab3";
import InformationTab4 from "../Components/AboutUs.js/InformationTab4";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function AboutUs() {
  const [activeTab, setActiveTab] = useState("informationTab1");
  const [articles, setArticle] = useState([
    {
      image: "https://picsum.photos/300/300",
      image2: "https://placekitten.com/300/300",
      image4: "https://placekitten.com/300/300",
      text:
        "Behind the couch sleep everywhere, but not in my bed yet munch on tasty moths or jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water, dead stare with ears cocked so attack feet. Bring your owner a dead bird don't nosh on the birds cough furball into food bowl then scratch owner for a new one. Always hungry attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently. Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again waffles yet stuff and things do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy and meow in empty rooms. Drink from the toilet groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked, but need to chase tail munch on tasty moths eat a plant, kill a hand, or claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Give me attention or face the wrath of my claws mmmmmmmmmeeeeeeeeooooooooowwwwwwww, nya nya nyan need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me mew mew jump five feet...",
      text2:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design and... ",
      text3:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      text4: "Nothing is here...",
    },
  ]);

  const breadcrumbPaths = [{ link: "/", title: "Home" }, { title: "About Us" }];

  let tabContent = "";
  if (activeTab == "informationTab1") {
    tabContent = <InformationTab1 articles={articles} />;
  } else if (activeTab == "informationTab2") {
    tabContent = <InformationTab2 articles={articles} />;
  } else if (activeTab == "informationTab3") {
    tabContent = <InformationTab3 articles={articles} />;
  } else if (activeTab == "informationTab4") {
    tabContent = <InformationTab4 articles={articles} />;
  }
  return (
    <div className="container">
      <div className="row">
        <div ClassName="col">
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3>About us</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <ul className="nav nav-tabs ">
            <li className="nav-item border border-dark rounded-top border-bottom-0">
              <button
                className={
                  "nav-link" + (activeTab == "informationTab1" ? " active" : "")
                }
                onClick={() => setActiveTab("informationTab1")}
              >
                Tab 1
              </button>
            </li>
            <li className="nav-item border border-dark rounded-top border-bottom-0">
              <button
                className={
                  "nav-link" + (activeTab == "informationTab2" ? " active" : "")
                }
                onClick={() => setActiveTab("informationTab2")}
              >
                Tab 2
              </button>
            </li>
            <li className="nav-item border border-dark rounded-top border-bottom-0">
              <button
                className={
                  "nav-link" + (activeTab == "informationTab3" ? " active" : "")
                }
                onClick={() => setActiveTab("informationTab3")}
              >
                Tab 3
              </button>
            </li>
            <li className="nav-item border border-dark rounded-top border-bottom-0">
              <button
                className={
                  "nav-link" + (activeTab == "informationTab4" ? " active" : "")
                }
                onClick={() => setActiveTab("informationTab4")}
              >
                Tab 4
              </button>
            </li>
          </ul>
          {tabContent}
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "30px" }}>
        <div className="col ">
          <h5>Contacts</h5>
          <iframe
            className="map-sizer"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2173.3027860029356!2d24.1220783!3d56.9950002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecf737c5e6a71%3A0xb0f07427a9e96bfd!2z0KDQuNC20YHQutC40Lkg0L_RgdC40YXQuNCw0YLRgNC40YfQtdGB0LrQuNC5INC4INC90LDRgNC60L7Qu9C-0LPQuNGH0LXRgdC60LjQuSDRhtC10L3RgtGA!5e0!3m2!1sru!2slv!4v1618478757010!5m2!1sru!2slv"
            width="600"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="col " style={{ paddingTop: "30px" }}>
          <h5>Address:</h5>

          <p>Tvaika iela 2, Ziemeļu rajons, Rīga, LV-1005</p>
          <pre></pre>
          <h5>Email:</h5>

          <NavLink to="/mail" style={{ textDecoration: "none" }}>
            info@tvaiku.lv
          </NavLink>
          <pre></pre>
          <h5>Phone:</h5>

          <p>+371 666 666</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
