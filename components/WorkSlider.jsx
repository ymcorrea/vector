import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Blockchain game1",
          path: "/bkchn_gm1.jpg",
          link: "https://cryptoserval.io/",
        },
        {
          title: "Blockchain game2",
          path: "/bkchn_gm2.jpg",
          link: "https://www.penguinfinance.org/",
        },
        {
          title: "Blockchain game3",
          path: "/bkchn_gm3.jpg",
          link: "https://catnip.world/",
        },
        {
          title: "Blockchain game4",
          path: "/bkchn_gm4.jpg",
          link: "https://onchain-ventures-trial-task-app.vercel.app",
        },
      ],
    },
    {
      images: [
        {
          title: "Blockchain app1",
          path: "/bkchn_app1.jpg",
          link: "https://dinoverse.co/",
        },
        {
          title: "Blockchain app2",
          path: "/bkchn_app2.jpg",
          link: "https://horizon-ui.com/horizon-tailwind-react/admin/default",
        },
        {
          title: "Blockchain app3",
          path: "/bkchn_app3.jpg",
          link: "https://docs-promptable.vercel.app/docs/introduction",
        },
        {
          title: "Blockchain app4",
          path: "/bkchn_app4.jpg",
          link: "https://portfolio-next.smakosh.com/",
        },
      ],
    },
    {
      images: [
        {
          title: "fullstack1",
          path: "/fullstack1.jpg",
          link: "https://rainyroof.vercel.app/",
        },
        {
          title: "fullstack2",
          path: "/fullstack2.jpg",
          link: "https://www.swipesingles.net/",
        },
        {
          title: "fullstack4",
          path: "/fullstack4.jpg",
          link: "http://example.com",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[340px] sm:h-[640px] md:h-[460px] lg:h-[580px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group rounded-lg">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
