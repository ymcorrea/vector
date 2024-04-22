import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { SiCrystal, SiEthereum } from "react-icons/si";

const serviceData = [
  {
    Icon: SiEthereum,
    title: "Blockchain",
    description: " Design, develop, and deploy DApps using blockchain platforms. Smart contract development, token creation, integration of blockchain protocols into existing systems.",
  },
  {
    Icon: RxPencil2,
    title: "Smart Contract",
    description: "Specialize in writing the smart contracts that can automate the processes, enforce the agreements, and enable trustless transactions using Solidity, Vyper and Rust.",
  },
  {
    Icon: SiCrystal,
    title: "Cryptocurrency Integration",
    description: "Integrate cryptocurrency payment gateways into the applications, enabling seamless transactions using popular cryptocurrencies like Bitcoin, Ethereum, or others.",
  },
  {
    Icon: RxReader,
    title: "Full Stack",
    description: "Frontend technologies like HTML/CSS, JS, and modern frameworks like React and Vue.js. On the Backend, have experience with Node.js and PHP, as well as database management.",
  },
  {
    Icon: RxRocket,
    title: "API Integration",
    description: " Integrate external APIs, such as payment gateways, identity verification services, or data providers, to enhance the functionality and data exchange capabilities of the application.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[300px] sm:h-[390px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-10 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
