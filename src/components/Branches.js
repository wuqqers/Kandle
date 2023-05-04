import React, { Component } from "react";
import Image from "../assets/7.jpg";
import Image2 from "../assets/8.jpg";
import Image3 from "../assets/9.jpg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Branches extends Component {
  state = {
    selectedRestaurant: 0,
    isAccordionOpen: false,
    currentImage: Image3,
  };

  handleRestaurantChange = (id) => {
    const images = [Image3, Image, Image2];
    this.setState({ selectedRestaurant: id, currentImage: images[id - 1] });
  };

  toggleAccordion = (id) => {
    this.setState((prevState) => ({
      isAccordionOpen:
        prevState.selectedRestaurant === id ? !prevState.isAccordionOpen : true,
      selectedRestaurant: prevState.selectedRestaurant === id ? 0 : id,
    }));
  };

  handleImageLoad = () => {
    const images = document.querySelectorAll(".animated-image");
    images.forEach((image) => {
      image.classList.add("fadeIn");
      image.addEventListener("animationend", () => {
        image.classList.remove("fadeOut", "fadeIn");
      });
    });
  };

  render() {
    return (
      <div className="h-400">
       <div className="flex flex-col md:flex-row-reverse">
  <div className="md:w-1/2 md:flex-col bg-[#202022] p-14">
    <h1 className="text-xl p-10 handle text-white text-center ">
      Our Branches
    </h1>

    {/* Accordion */}
    <div className="my-2">
      <button
        className={`text-left w-full p-12 font-mono text-xl  hover:text-[#CCCCCC] ${
          this.state.selectedRestaurant === 1
            ? "bg-white text-[#202022] font-bold"
            : "bg-transparent text-white"
        }`}
        onClick={() => this.toggleAccordion(1)}
      >
        Restaurant 1{" "}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="ml-2"
          style={{
            transition: "transform 0.2s ease",
            transform:
              this.state.selectedRestaurant === 1 ? "rotate(180deg)" : "",
          }}
        />
      </button>
      {this.state.selectedRestaurant === 1 && (
        <div>
          <p className="text-white p-12">Address: Address 1</p>
          <p className="text-white p-12">Opening hours: 9am - 10pm</p>
        </div>
      )}
    </div>
    <div className="my-2">
      <button
        className={`text-left w-full p-12 font-mono text-xl  hover:text-[#CCCCCC] ${
          this.state.selectedRestaurant === 2
            ? "bg-white text-[#202022] font-bold"
            : "bg-transparent text-white"
        }`}
        onClick={() => this.toggleAccordion(2)}
      >
        Restaurant 2{" "}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="ml-2"
          style={{
            transition: "transform 0.2s ease",
            transform:
              this.state.selectedRestaurant === 2 ? "rotate(180deg)" : "",
          }}
        />
      </button>
      {this.state.selectedRestaurant === 2 && (
        <div>
          <p className="text-white p-12">Address: Address 2</p>
          <p className="text-white p-12">Opening hours: 9am - 10pm</p>
        </div>
      )}
    </div>
  </div>

  <div className="md:w-1/2 md:flex-col">
    {this.state.selectedRestaurant === 0 ? (
      <img
        src={Image3}
        alt="image"
        className={`w-full h-full animated-image ${
          this.state.isAccordionOpen ? "animate-fadeOut" : "animate-fadeIn"
        }`}
        onLoad={() => this.handleImageLoad()}
      />
    ) : this.state.selectedRestaurant === 1 ? (
      <img
        src={Image}
        alt="image"
        className={`w-full h-full animated-image ${
          this.state.isAccordionOpen ? "animate-fadeOut" : "animate-fadeIn"
        }`}
        onLoad={() => this.handleImageLoad()}
      />
    ) : (
      <img
        src={Image2}
        alt="image"
        className={`w-full h-full animated-image ${
          this.state.isAccordionOpen ? "animate-fadeOut" : "animate-fadeIn"
        }`}
        onLoad={() => this.handleImageLoad()}
      />
    )}
  </div>
</div>

      </div>
    );
    
  }
}