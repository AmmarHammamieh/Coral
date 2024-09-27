import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import banner_flower from "../assets/images/banner_flower.webp";
import banner1 from "../assets/images/banner/banner1.webp";
import banner2 from "../assets/images/banner/banner2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";

function Banner() {
  return (
    <div className="bg-secondary relative py-14">
      <img src={banner_flower} className="absolute right-0 bottom-1/4" />
      <div className="page-Footnotes grid grid-cols-1 xl:grid-cols-2 gap-y-20">
        <div className="h-fit my-auto">
          <Swiper
            effect={"fade"}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            modules={[EffectFade, Autoplay]}
            className="relative"
          >
            <SwiperSlide>
              <div className="bg-secondary">
                <p className="banner-title">Collections 1</p>
                <p className="banner-desc">
                  you can explore ans shop many differnt collection from various
                  barands here.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-secondary">
                <p className="banner-title">Collections 2</p>
                <p className="banner-desc">
                  you can explore ans shop many differnt collection from various
                  barands here.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="btn-primary">
            <FaBagShopping /> shop now
          </button>
        </div>
        <div>
          <div className="w-fit h-fit border-[#b7b7b8] border-2 rounded-br-[10rem] rounded-tl-[10rem]  mx-auto">
            <Swiper
              effect={"fade"}
              loop
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              className="rounded-br-[10rem] rounded-tl-[10rem] relative -top-4 -left-4 w-[20rem] md:w-[26.5rem]"
            >
              <SwiperSlide>
                <img src={banner1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner2} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
