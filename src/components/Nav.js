  import React, { useEffect, useState } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
  import menu from "../assets/men.png";
  import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
  import {
    faCartPlus,
    faShoppingBasket,
    faShoppingBag,
    faBook,
  } from "@fortawesome/free-solid-svg-icons";
  import Video from "../assets/video2.mp4";

  function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
      setOverlayVisible(!overlayVisible);
      const element = document.querySelector(".overlay");
      if (element) {
        if (overlayVisible) {
          element.classList.remove("open");
          element.classList.add("close");
        } else {
          element.classList.remove("close");
          element.classList.add("open");
        }
      }
    };
    const toggleMenu = () => {
      setOverlayVisible(!overlayVisible);
      const element = document.querySelector(".menu");
      if (element) {
        if (overlayVisible) {
          element.classList.remove("open");
          element.classList.add("close");
        } else {
          element.classList.remove("close");
          element.classList.add("open");
        }
      }
    };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div
        className="navbar-wrapper"
        style={{
          position: scrolled ? "fixed" : "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <nav
          className={`flex justify-between items-center p-6 transition-all duration-500 ${
            scrolled ? "bg-[#202022] shadow-md" : "bg-transparent"
          }`}
        >
          <div className="flex items-center">
            <ul className="flex items-center">
              <li className="mr-6">
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faBars} onClick={toggleOverlay} />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center flex-grow">
            {/* <img className="rounded-lg" src={logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10" /> */}
            <h1 className="text-white handle">Kandle</h1>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center">
              <li className="mr-6">
                <a href="#" className="text-white">
                  {" "}
                  <FontAwesomeIcon icon={faBook} onClick={toggleMenu} />{" "}
                  <FontAwesomeIcon
                    icon={faShoppingBasket}
                    className="pl-3 hidden"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className=" overlay fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center"
          onClick={toggleOverlay}
        >
          <div className="w-full h-full flex">
            <div className="w-1/2 bg-[#202022] ">
              <h1 className="handle text-white text-center mt-10 text-4xl hover:text-[#CCCCCC] cursor-pointer">
                Kandle
              </h1>
              <ul className="flex flex-col items-center justify-center h-full">
                <li className="mb-6">
                  <a
                    href="#"
                    className="text-white handle text-2xl hover:text-[#CCCCCC]"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="#"
                    className="text-white handle text-2xl hover:text-[#CCCCCC]"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="#"
                    className="text-white handle text-2xl hover:text-[#CCCCCC]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 relative">
              <video
                src={Video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggleOverlay}
              className="text-white text-3xl absolute top-4 right-4 cursor-pointer hover:text-[#CCCCCC]"
            />
          </div>
        </div>
        <div
          className=" menu fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center"
          onClick={toggleMenu}
        >
          <div className="w-full h-full flex">
            <div className="w-full bg-[#202022] overflow-auto ">
              <h1 className="handle text-white text-center mt-10 text-6xl hover:text-[#CCCCCC] cursor-pointer pb-12">
                Our Menu
              </h1>
             <div className="p-2 md:p-12 bg-[#f0ead6] line rounded-lg"> <h3 className="menu-item-title handle text-[#202022] text-4xl py-8 px-8 sm:px-16 md:px-32 cursor-default text-center  text-sm sm:text-4xl">
                  Starters
                </h3></div> 
              <ul className="w-full flex flex-col items-start justify-center pt-12">
          
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail">
                    <img className="rounded-lg"
                      src="https://dinnerthendessert.com/wp-content/uploads/2018/12/Chicken-Noodle-Soup1-scaled.jpg"
                      alt="Classic Chicken Noodle Soup"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4 pb-4
  ">
                      Classic Chicken Noodle Soup
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2 ">
                      $6.99
                    </span>
                  </div>
                </li>
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail">
                    <img className="rounded-lg"
                      src="https://sharedappetite.com/wp-content/uploads/2017/04/8530112959_5515654e3c-2.jpg"
                      alt="Creamy Tomato Basil Soup"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  ">
                      Creamy Tomato Basil Soup
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2">
                      $7.99
                    </span>
                  </div>
                </li>
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail">
                    <img className="rounded-lg"
                      src="https://www.countrysidecravings.com/wp-content/uploads/2015/10/Hearty-Beef-Stew-1.jpg"
                      alt="Hearty Beef Stew"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  ">
                      Hearty Beef Stew
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2">
                      $9.99
                    </span>
                  </div>
                </li>
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail">
                    <img className="rounded-lg"
                      src="https://i0.wp.com/shecooksshegardens.com/wp-content/uploads/2012/08/DSC_7597.jpg?fit=1000%2C1000&ssl=1"
                      alt="Spicy Black Bean Soup"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  ">
                      Spicy Black Bean Soup
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2">
                      $8.99
                    </span>
                  </div>
                </li>
              </ul>
              <div className="p-2 md:p-12 bg-[#f0ead6] line rounded-lg"><h3 className="menu-item-title handle text-[#202022] text-4xl py-8 px-8 sm:px-16 md:px-32 cursor-default text-center  text-sm sm:text-4xl">
                  Burgers
                </h3></div> 
              <ul className="w-full flex flex-col items-start justify-center pt-12">
            
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail mb-4">
                    <img className="rounded-lg"
                      src="https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/520765216/classic-beef-burger.jpg?quality=82&strip=1"
                      alt="Classic Beef Burger"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center flex flex-col justify-center items-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  mb-2">
                      Classic Beef Burger
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2 ">
                      $9.99
                    </span>
                  </div>
                </li>
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail mb-4">
                    <img className="rounded-lg"
                      src="https://www.bellandevans.com/wp-content/uploads/Apricot_Burger_web-750x560.jpg"
                      alt="Grilled Chicken Burger"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center flex flex-col justify-center items-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  mb-2">
                      Grilled Chicken Burger
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2 ">
                      $10.99
                    </span>
                  </div>
                </li>
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail mb-4">
                    <img className="rounded-lg"
                      src="https://www.sargento.com/assets/Uploads/Recipe/Image/bacon-double-cheeseburger__FillWzExNzAsNTgzXQ.jpg"
                      alt="Double Cheeseburger"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center flex flex-col justify-center items-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  mb-2">
                      Double Cheeseburger
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2 ">
                      $12.99
                    </span>
                  </div>
                </li>
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail mb-4">
                    <img className="rounded-lg"
                      src="https://www.tknaturallamb.com/wp-content/uploads/2017/08/lamb-burger.jpg"
                      alt="Grilled Lamb Burger"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center flex flex-col justify-center items-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  mb-2">
                      Grilled Lamb Burger
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2 ">
                      $13.99
                    </span>
                  </div>
                </li>
              </ul>
              <div className="p-2 md:p-12 bg-[#f0ead6] line rounded-lg"><h3 className="menu-item-title handle text-[#202022] text-4xl py-8 px-8 sm:px-16 md:px-32 cursor-default text-center  text-sm sm:text-4xl">
                  Appetizers
                </h3></div> 
              <ul className="w-full flex flex-col items-start justify-center pt-12">
            
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail mb-4">
                    <img className="rounded-lg"
                      src="https://hips.hearstapps.com/vidthumb/images/delish-fried-chicken-wings-seo-1new-1540589238.jpg?crop=0.75xw:1xh;center,top&resize=1200:*"
                      alt="Fried Chicken Wings"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center flex flex-col justify-center items-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  mb-2">
                      Fried Chicken Wings
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2 ">
                      $10.99
                    </span>
                  </div>
                </li>
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail mb-4">
                    <img className="rounded-lg"
                      src="https://www.mygourmetconnection.com/wp-content/uploads/old-bay-shrimp-saute.jpg"
                      alt="Sauteed Shrimp"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center flex flex-col justify-center items-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  mb-2">
                      Sauteed Shrimp
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2 ">
                      $12.99
                    </span>
                  </div>
                </li>
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail mb-4">
                    <img className="rounded-lg"
                      src="https://s23209.pcdn.co/wp-content/uploads/2022/08/220602_DD_Spinach-Artichoke-Dip_140-1.jpg"
                      alt="Spinach Artichoke Dip"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center flex flex-col justify-center items-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  mb-2">
                      Spinach Artichoke Dip
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2 ">
                      $8.99
                    </span>
                  </div>
                </li>
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail mb-4">
                    <img className="rounded-lg"
                      src="https://www.allrecipes.com/thmb/BeV2hKihyqT4sQBI6h2fYp2KzuU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23596-fried-mozzarella-cheese-sticks-DDMFS-4x3-842a0eaebf6b435a8d3a8b04325e13eb.jpg"
                      alt="Mozzarella Sticks"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center flex flex-col justify-center items-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  mb-2">
                      Mozzarella Sticks
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2 ">
                      $7.99
                    </span>
                  </div>
                </li>
                <li className="menu-item w-full flex justify-between items-center py-4 px-8 sm:px-16 md:px-32 md:py-20 sm:py-10 cursor-default">
                  <div className="menu-item-thumbnail mb-4">
                    <img className="rounded-lg"
                      src="https://food-images.files.bbci.co.uk/food/recipes/triple-cooked_chips_66210_16x9.jpg"
                      alt="Chips"
                    />
                  </div>
                  <div className="menu-item-details flex-1 justify-center text-center flex flex-col justify-center items-center">
                    <h3 className="menu-item-title handle text-white text-4xl cursor-pointer hover:text-[#CCCCCC] text-sm sm:text-4xl pb-4
  mb-2">
                    Chips
                    </h3>
                    <span className="menu-item-price  handle text-[#202022] text-2xl text-xs sm:text-2xl bg-[#f0ead6] rounded-lg p-2 ">
                      $7.99
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggleMenu}
              className="text-white text-3xl absolute top-4 right-4 cursor-pointer hover:text-[#CCCCCC]"
            />
          </div>
        </div>
      </div>
    );
  }

  export default Navbar;
