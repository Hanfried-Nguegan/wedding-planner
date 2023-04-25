import React, { useState } from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, Controller } from "swiper";
import { gsap, Power2 } from "gsap";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Loader from "@/components/Loader";

export default function Home() {
  const [textSwiper, setTextSwiper] = useState(null);
  const [imgSwiper, setImgSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState("01");

  return (
    <div>
      <Loader />

      <header className="home-header">
        <div className="top-line">
          <Link href="/" target="_blank" legacyBehavior>
            <a className="logo">
              <span className="logo__img-wrapper">
                <Image
                  width={50}
                  height={50}
                  src="/assets/imgs/logo.svg"
                  alt="logo"
                />
              </span>
              <span className="logo__text">WP</span>
            </a>
          </Link>
          <div className="top-line__decoration"></div>
          <div className="top-line__contacts">
            Tel:<span className="top-line__numbers">699745270</span>
            <span className="top-line__separator"></span>
            <span className="top-line__address">
              Location:<span className="top-line__text">Douala, CMR</span>
            </span>
          </div>
          <div className="top-line__decoration"></div>
          <div className="menu-button-container">
            <div className="nav-button">
              <span className="nos"></span>
              <span className="ncs"></span>
              <span className="nbs"></span>
            </div>
          </div>
        </div>

        <div className="home-header__content">
          <aside className="home-aside">
            <div className="home-aside__decoration"></div>
            <div className="home-aside__text">Contact</div>
            <div className="home-aside__soc">
              <div className="home-aside__soc-items">
                <Link href="/" target="_blank" legacyBehavior>
                  <a className="soc-item">
                    <Image
                      width={17}
                      height={17}
                      src="/assets/imgs/icons/instagram-brands.svg"
                      alt="instagram"
                    />
                  </a>
                </Link>
                <Link href="/" target="_blank" legacyBehavior>
                  <a className="soc-item">
                    <Image
                      width={17}
                      height={17}
                      src="/assets/imgs/icons/facebook-brands.svg"
                      alt="facebook"
                    />
                  </a>
                </Link>
                <Link href="/" target="_blank" legacyBehavior>
                  <a className="soc-item">
                    <Image
                      width={17}
                      height={17}
                      src="/assets/imgs/icons/twitter-brands.svg"
                      alt="twitter"
                    />
                  </a>
                </Link>
                <Link href="/" target="_blank" legacyBehavior>
                  <a className="soc-item">
                    <Image
                      width={17}
                      height={17}
                      src="/assets/imgs/icons/whatsapp-brands.svg"
                      alt="whatsapp"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-aside__share-icon"></div>
          </aside>
          <div className="slider-container">
            <div className="slider-text">
              <Swiper
                loop={false}
                speed={2400}
                mousewheel={{ invert: false }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true, el: ".swiper-pagination" }}
                scrollbar={{ draggable: true, el: ".swiper-scrollbar" }}
                onSlideChange={(swiper) => {
                  let newIndex = swiper.realIndex + 1;
                  let newState =
                    newIndex >= 10 ? newIndex.toString() : "0" + newIndex;
                  gsap.to(".slider-pagination-count .current", 0.2, {
                    force3D: true,
                    y: -10,
                    opacity: 0,
                    ease: Power2.easeOut,
                    onComplete: () => {
                      gsap.to(".slider-pagination-count .current", 0.1, {
                        force3D: true,
                        y: 10,
                      });
                      setCurrentSlide(newState);
                    },
                  });
                  gsap.to(".slider-pagination-count .current", 0.2, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0.3,
                    ease: Power2.easeOut,
                  });

                  (".slider-pagination-current");
                }}
                modules={[Controller, Navigation, Pagination, Scrollbar]}
                onSwiper={(swiper) => setTextSwiper(swiper)}
                controller={{ control: imgSwiper }}
                onSlideNextTransitionStart={() => {
                  gsap.to(".slider-circle", 2.8, {
                    rotation: "+=30",
                    ease: Power2.easeOut,
                  });
                }}
                onSlidePrevTransitionStart={() => {
                  gsap.to(".slider-circle", 2.8, {
                    rotation: "-=30",
                    ease: Power2.easeOut,
                  });
                }}
              >
                <SwiperSlide className="slider-text__slide">
                  <div className="slider-text__content">
                    <h2 className="slider-text__heading">
                      Over 20,000 couples made <span>their weddings</span> with
                      us
                    </h2>
                    <p className="slider-text__desc">
                      We guide you through every step of the process to save you
                      time. Explore vendors, websites, matching invites,
                      registry, and more, in one place
                    </p>
                    <button className="button slider-text__button">
                      <span>Get started</span>
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-text__slide">
                  <div className="slider-text__content">
                    <h2 className="slider-text__heading">
                      Planning on the go is <span>so much</span> more fun
                    </h2>
                    <p className="slider-text__desc">
                      Swipe to add registry items with Gift Shuffle, get happy
                      alerts when guests buy gifts, share their mailing
                      addresses, and RSVP
                    </p>
                    <button className="button slider-text__button">
                      <span>Try Now</span>
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-text__slide">
                  <div className="slider-text__content">
                    <h2 className="slider-text__heading">
                      we will help you have &nbsp;<span>the best</span> day ever
                    </h2>
                    <p className="slider-text__desc">
                      Chat with an actual human advisor, read oodles of helpful
                      Expert Advice, get free to change the dates with your
                      paper purchase, and much more
                    </p>
                    <button className="button slider-text__button">
                      <span>Contact Us</span>
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="slider-img">
              <Swiper
                loop={false}
                speed={2400}
                parallax={true}
                onSwiper={(swiper) => setImgSwiper(swiper)}
                modules={[Controller, Pagination]}
                controller={{ control: textSwiper }}
                pagination={{
                  el: ".slider-pagination-count .total",
                  type: "custom",
                  renderCustom: (swiper, current, total) => {
                    return total >= 10 ? total : `0${total}`;
                  },
                }}
              >
                <SwiperSlide
                  data-swiper-parallax={10000}
                  className="slider-img__slide"
                >
                  <div className="slider-img__bg"></div>
                </SwiperSlide>
                <SwiperSlide
                  data-swiper-parallax={40}
                  className="slider-img__slide"
                >
                  <div className="slider-img__bg"></div>
                </SwiperSlide>
                <SwiperSlide
                  data-swiper-parallax={40}
                  className="slider-img__slide"
                >
                  <div className="slider-img__bg"></div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="slider-bottom">
              <div className="slider-share">
                <div className="slider-share__items">
                  <Link href="/" target="_blank" legacyBehavior>
                    <a className="soc-item slider-share__item">
                      <Image
                        width={17}
                        height={17}
                        src="/assets/imgs/icons/facebook-brands.svg"
                        alt="facebook"
                      />
                    </a>
                  </Link>
                  <Link href="/" target="_blank" legacyBehavior>
                    <a className="soc-item slider-share__item">
                      <Image
                        width={17}
                        height={17}
                        src="/assets/imgs/icons/twitter-brands.svg"
                        alt="twitter"
                      />
                    </a>
                  </Link>
                  <Link href="/" target="_blank" legacyBehavior>
                    <a className="soc-item slider-share__item">
                      <Image
                        width={17}
                        height={17}
                        src="/assets/imgs/icons/whatsapp-brands.svg"
                        alt="whatsapp"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="slider-pagination">
                <div className="swiper-pagination"></div>
              </div>
              <div className="slider-scrollbar">
                <div className="swiper-scrollbar"></div>
              </div>
              <div className="slider-navigation">
                <div className="slider-navigation__container">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>

            <div className="slider-pagination-count">
              <span className="current">{currentSlide}</span> /{" "}
              <span className="total"></span>
            </div>
            <div className="slider-pagination-current">
              {currentSlide}
              <span className="slider-pagination-current__dot">.</span>
            </div>

            <div className="slider-circle"></div>
          </div>
        </div>
      </header>
    </div>
  );
}
