import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const carouselImgs = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Changing the way people shop.",
        "Your new era of shopping.",
        "Simplifying the way you shop.",
        "Creating a better way to shop.",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="">
        <h1 className="hero-heading">
          <span className="sup-hero-heading">we are</span>
          <span ref={element} className="auto-type"></span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          excepturi nisi rerum quibusdam ducimus similique ratione qui facilis
          nobis eos dignissimos distinctio deleniti obcaecati culpa temporibus
          deserunt dolorem, consequuntur eveniet!
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary text-lg uppercase">
            Our Products
          </Link>
        </div>
      </div>

      <div className="carousel-container">
        {carouselImgs.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
