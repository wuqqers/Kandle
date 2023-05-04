import React, { Component } from "react";
import Image from "../assets/5.jpg";
import Image2 from "../assets/6.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="w-full">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-gray-100 order-2 md:order-1">
              <img
                src={Image}
                alt="about"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 bg-[#202022] p-6 md:p-32 order-1 md:order-2">
              <h1 className="text-2xl font-bold text-center text-white handle">
                About Us
              </h1>
              <p className="text-center p-2 md:p-12 font-mono text-white">
                {" "}
                Kandle is a restaurant chain that brings a new breath to the
                fast food world. In addition to classic fast food items such as
                hamburgers, crispy chicken, and french fries, it elevates these
                products to a different level with its special recipes and
                high-quality ingredients. Its hamburgers are prepared with
                delicious patties and fresh vegetables, offering many options
                for those seeking different flavors. With its special sauces and
                unique tastes, Kandle's hamburgers will be the new favorite of
                fast food fans. Crispy chicken is also one of Kandle's
                indispensable flavors. High-quality chicken meat is marinated
                with special spice blends and fried crispy. Chicken slices are
                served hot and fresh, and their flavor is enhanced with the
                accompanying sauces. French fries also have a different taste.
                Thinly sliced potatoes are mixed with special sauces and spices
                prepared with special recipes. The frying process ensures that
                the outside of the potatoes is crispy while the inside remains
                soft. Kandle's meals are prepared with high-quality and
                delicious ingredients, while great care is taken in terms of
                hygiene and cleanliness. With its modern and spacious restaurant
                designs, it has a privileged position among fast food
                restaurants. Kandle aims to offer its customers an enjoyable
                dining experience and becomes the new address for those who love
                hamburgers, crispy chicken, and french fries.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-[#202022] p-6 md:p-32">
            <h1 className="text-2xl font-bold text-center text-white handle">
              From The Mouth Of Our Chef;
            </h1>
            <p className="text-center p-2 md:p-12 font-mono text-white">
              As a chef working at Kandle, we carefully select the highest
              quality ingredients to use in our special recipes. Each flavor is
              prepared with care, including our delicious burgers,
              mouth-watering meatballs, and fresh vegetables. We offer options
              that cater to our customers' tastes with our special sauces and
              unique flavors. We also take great care with hygiene and
              cleanliness, ensuring that we can provide our customers with the
              healthiest and tastiest meals possible. It's a source of pride for
              me to work at Kandle, and I always strive to provide our customers
              with the best food possible.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-gray-100">
            <img
              src={Image2}
              alt="about"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
}
