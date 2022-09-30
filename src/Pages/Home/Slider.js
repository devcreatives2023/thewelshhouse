import React from "react";
import SideBar from "./SideBar";
import "./Slider.css";
import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";
import house4 from "../images/house4.jpg";
const Slider = () => {
  return (
    <div>
      <div className="hidden lg:flex justify-between gap-8 items-center text-left">
        <div>
          <h4 className="text-2xl mb-2 text-[#8E361E]">
            Blog viral williamsburg twee four
          </h4>
          <p className="mb-4">
            I'm baby sus mukbang affogato activated charcoal tonx woke PBR&B,
            artisan raw denim viral subway tile heirloom tilde organic.
          </p>

          <p className="mb-4">
            Blog viral williamsburg twee four dollar toast kogi. Tbh stumptown
            sartorial PBR&B, master cleanse skateboard VHS man braid vape.
            Chillwave craft beer bodega boys YOLO four dollar toast +1 big mood
            lyft marfa.{" "}
          </p>

          <p>
            Selvage bushwick cold-pressed fit woke disrupt everyday carry
            bicycle rights 8-bit tacos put a bird on it ennui mustache. Fam
            cardigan edison bulb woke irony sriracha mumblecore cray pour-over
            twee.
          </p>
        </div>

        <div>
          <ul id="slider">
            <li class="slide">
              <img src={house1} alt="" width="660px" height="330px" />
              <small>
                Chillwave craft beer bodega boys YOLO four dollar toast +1 big
                mood lyft marfa.
              </small>
            </li>
            <li class="slide">
              <img src={house2} alt="" width="660px" height="330px" />
              <small>
                Fam cardigan edison bulb woke irony sriracha mumblecore cray
                pour-over twee.
              </small>
            </li>
            <li class="slide">
              <img src={house3} alt="" width="660px" height="330px" />
              <small>
                Selvage bushwick cold-pressed fit woke disrupt everyday carry
                bicycle rights 8-bit tacos put a bird on it ennui mustache.
              </small>
            </li>
            <li class="slide">
              <img src={house4} alt="" width="660px" height="330px" />
              <small>
                Tbh stumptown sartorial PBR&B, master cleanse skateboard VHS man
                braid vape.{" "}
              </small>
            </li>
            <li class="slide">
              <img src={house1} alt="" width="660px" height="330px" />
              <small>
                Fam cardigan edison bulb woke irony sriracha mumblecore cray
                pour-over twee.
              </small>
            </li>
          </ul>
        </div>
      </div>

      <SideBar></SideBar>
    </div>
  );
};

export default Slider;
