import React, { useState, useRef, useEffect } from 'react';
import { Swiper, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const images = [
    {
      id: 1,
      src: "https://dinnerthendessert.com/wp-content/uploads/2018/12/Chicken-Noodle-Soup1-scaled.jpg",
      title: "Classic Chicken Noodle Soup",
      price: 6.99
    },
    {
      id: 2,
      src: "https://sharedappetite.com/wp-content/uploads/2017/04/8530112959_5515654e3c-2.jpg",
      title: "Creamy Tomato Basil Soup",
      price: 7.99
    },
    {
      id: 3,
      src: "https://www.countrysidecravings.com/wp-content/uploads/2015/10/Hearty-Beef-Stew-1.jpg",
      title: "Hearty Beef Stew",
      price: 9.99
    },
    {
      id: 4,
      src: "https://i0.wp.com/shecooksshegardens.com/wp-content/uploads/2012/08/DSC_7597.jpg?fit=1000%2C1000&ssl=1",
      title: "Spicy Black Bean Soup",
      price: 8.99
    },
    {
      id: 5,
      src: 'https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/520765216/classic-beef-burger.jpg?quality=82&strip=1',
      title: 'Classic Beef Burger',
      price: '$9.99'
    },
    {
      id: 6,
      src: 'https://www.bellandevans.com/wp-content/uploads/Apricot_Burger_web-750x560.jpg',
      title: 'Grilled Chicken Burger',
      price: '$10.99'
    },
    {
      id: 7,
      src: 'https://www.sargento.com/assets/Uploads/Recipe/Image/bacon-double-cheeseburger__FillWzExNzAsNTgzXQ.jpg',
      title: 'Double Cheeseburger',
      price: '$12.99'
    },
    {
      id: 8,
      src: 'https://www.tknaturallamb.com/wp-content/uploads/2017/08/lamb-burger.jpg',
      title: 'Grilled Lamb Burger',
      price: '$13.99'
    },
    {
      id: 9,
      src: 'https://hips.hearstapps.com/vidthumb/images/delish-fried-chicken-wings-seo-1new-1540589238.jpg?crop=0.75xw:1xh;center,top&resize=1200:*',
      title: 'Fried Chicken Wings',
      price: '$10.99'
    },
    {
      id: 10,
      src: 'https://www.mygourmetconnection.com/wp-content/uploads/old-bay-shrimp-saute.jpg',
      title: 'Sauteed Shrimp',
      price: '$12.99'
    },
    {
      id: 11,
      src: 'https://s23209.pcdn.co/wp-content/uploads/2022/08/220602_DD_Spinach-Artichoke-Dip_140-1.jpg',
      title: 'Spinach Artichoke Dip',
      price: '$8.99'
    },
    {
      id: 12,
      src: 'https://www.allrecipes.com/thmb/BeV2hKihyqT4sQBI6h2fYp2KzuU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23596-fried-mozzarella-cheese-sticks-DDMFS-4x3-842a0eaebf6b435a8d3a8b04325e13eb.jpg',
      title: 'Mozzarella Sticks',
      price: '$7.99'
    },
    {
      id: 13,
      src: 'https://food-images.files.bbci.co.uk/food/recipes/triple-cooked_chips_66210_16x9.jpg',
      title: 'Chips',
      price: '$7.99'
    },
  ];

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < images.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0);
    }
    swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    } else {
      setCurrentIndex(images.length - 1);
    }
    swiperRef.current.slidePrev();
  };

  const slides = images.map((image) => {
    return (
    <div key={image.id} className="swiper-slide flex justify-center ">
  <div className="slide-content flex flex-col justify-end p-1  ">
    <img src={image.src} alt="carousel item" className="object-cover border-2 border-black rounded-full w-[300px] h-[300px] " />
    <h2 className="text-xl font-mono text-[#202022] p-4    text-center rounded-full">{image.title}</h2>
    <h2 className="text-xl font-mono text-[#202022] p-4    text-center rounded-full">{image.price}</h2>
  </div>
</div>

    );
  });
  

  useEffect(() => {
     
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 1,
      speed: 500,
      effect: 'slide',
      centeredSlides: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000, // 3 saniye
        disableOnInteraction: true,
      },
      modules: [Autoplay],
      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
  
    swiperRef.current = mySwiper;
  }, []);
  
  

  return (
    
    <div className="swiper-container bg-white border-b-2 border-[#202022]">
        <h1  className='text-3xl  p-10 handle text-[#202022] text-center '>Food & Snacks</h1>
      <div className="swiper-wrapper flex justify-between  ">{slides}
      
      </div>
      <div className="swiper-pagination "></div>
      <div className="swiper-button-prev" onClick={handlePrev}>
      </div>
      <div className="swiper-button-next" onClick={handleNext}>
        
      </div>
    </div>
  );
};

export default Slider;
