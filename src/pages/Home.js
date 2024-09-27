import React, { useEffect, useState } from "react";
import { Timeline, Tween } from "react-gsap";
import zara from "../assets/images/logos/zara.svg";
import { Controller, Scene } from "react-scrollmagic";
import Banner from "../components/Banner";
import collection1 from "../assets/images/collections/collection1.svg";
import insta1 from "../assets/images/insta/insta1.svg";
import insta2 from "../assets/images/insta/insta2.svg";
import insta3 from "../assets/images/insta/insta3.svg";
import insta4 from "../assets/images/insta/insta4.svg";
import insta5 from "../assets/images/insta/insta5.svg";
import insta6 from "../assets/images/insta/insta6.svg";
import Item from "../components/cards/Item";
import axiosInstance from "../utils/axiosInstance";
import ItemSkeleton from "../components/skeleton/ItemSkeleton";
import CategorySkeleton from "../components/skeleton/CategorySkeleton";
import BrandSkeleton from "../components/skeleton/BrandSkeleton";

function Home() {
  const [brands, setBrands] = useState();
  const [categories, setCategories] = useState();
  const [featured, setFeatured] = useState();
  const [loading, setLoading] = useState(true);
  const getBrands = axiosInstance.get("brands");
  const getCategories = axiosInstance.get("categories");
  const getFeatured = axiosInstance.get("featured");
  useEffect(() => {
    Promise.all([getBrands, getCategories, getFeatured])
      .then((responses) => {
        const [brands_res, categories_res, featured_res] = responses;
        setBrands(brands_res.data);
        setCategories(categories_res.data);
        setFeatured(featured_res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Banner />
      <Controller globalSceneOptions={{ triggerHook: "onEnter" }}>
        <div className="page-Footnotes">
          <div className="py-14">
            {/* categories */}
            <Scene duration={500}>
              {(progress) => (
                <div>
                  <Timeline totalProgress={progress} paused>
                    <div id="category-section">
                      <Tween
                        from={{ x: "-200", opacity: 0, scale: 0.8 }}
                        to={{ x: 0, opacity: 1, scale: 1 }}
                        ease="power2.out"
                      >
                        <h3 className="mb-4">Categories</h3>
                      </Tween>
                      <Tween
                        from={{ opacity: "0" }}
                        to={{ opacity: "1" }}
                        ease="power2.out"
                      >
                        <div className="min-h-32 flex justify-between custom-scroll space-x-5 overflow-x-auto text-nowrap pb-2">
                          {loading
                            ? Array.from({ length: 6 }, (_, index) => (
                                <CategorySkeleton key={index} />
                              ))
                            : categories?.map((category) => (
                                <div key={category.id} className="text-center">
                                  <img src={category.img} />
                                  <h6 className="capitalize">
                                    {category.slug}
                                  </h6>
                                </div>
                              ))}
                        </div>
                      </Tween>
                    </div>
                  </Timeline>
                </div>
              )}
            </Scene>
            {/* Featured Products */}
            <Scene duration={500}>
              {(progress) => (
                <div>
                  <Timeline totalProgress={progress} paused>
                    <div className="mt-14">
                      <Tween
                        from={{ opacity: 0, scale: 0 }}
                        to={{ opacity: 1, scale: 1 }}
                        ease="power2.out"
                      >
                        <h3 className="mb-4 text-center">Featured Products</h3>
                      </Tween>
                      <Tween
                        from={{ x:-50, opacity: 0, scale: 0 }}
                        to={{ x:0, opacity: 1, scale: 1 }}
                        ease="power2.out"
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                          {loading
                            ? Array.from({ length: 4 }, (_, index) => (
                                <ItemSkeleton />
                              ))
                            : featured?.map((product) => (
                                <Item product={product} />
                              ))}
                        </div>
                      </Tween>
                    </div>
                  </Timeline>
                </div>
              )}
            </Scene>
          </div>

          {/* brands */}
          <Scene duration={800}>
            {(progress) => (
              <div>
                <Timeline totalProgress={progress} paused>
                  <div className="py-14">
                    <Tween
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                      ease="power2.out"
                    >
                      <div className="flex justify-between space-x-5 overflow-x-auto custom-scroll">
                        {loading
                          ? Array.from({ length: 6 }, (_, index) => (
                              <BrandSkeleton key={index} />
                            ))
                          : brands?.map((brand) => (
                              <img
                                key={brand.id}
                                src={
                                  "https://perfume.msalla.com/" +
                                  brand.preview.content
                                }
                                className="logo"
                              />
                            ))}
                      </div>
                    </Tween>
                  </div>
                </Timeline>
              </div>
            )}
          </Scene>
        </div>
        {/* Collection */}
        <Scene duration={800}>
          {(progress) => (
            <div>
              <Timeline totalProgress={progress} paused>
                <div className="relative bg-[#0c0d11] py-14  lg:py-0">
                  <img src={collection1} className="w-full hidden lg:block" />
                  <div className="collection">
                    <Tween
                      from={{ opacity: 0, x: "-80", scale: 0.5 }}
                      to={{ opacity: 1, x: "0", scale: 1 }}
                      ease="power2.out"
                    >
                      <div className="origin-center">
                        <img src={zara} />
                      </div>
                    </Tween>
                    <Tween
                      from={{ opacity: 0, x: "-80" }}
                      to={{ opacity: 1, x: "0" }}
                      ease="power2.out"
                    >
                      <div>
                        <p className="collection-desc">
                          Lustrous yet understated. The new evening wear
                          collection exclusively offered at the reopened Giorgio
                          Armani boutique in Los Angeles.
                        </p>
                        <button className="btn-default">See Collection</button>
                      </div>
                    </Tween>
                  </div>
                </div>
              </Timeline>
            </div>
          )}
        </Scene>
        {/* Contact */}
        <Scene duration={900}>
          {(progress) => (
            <div>
              <Timeline totalProgress={progress} paused>
                <div className="page-Footnotes">
                  <div className="py-14 insta-section">
                    <Tween
                      from={{ y: "-40", opacity: 0 }}
                      to={{ y: "0", opacity: 1 }}
                      ease="power2.out"
                    >
                      <h2 className="mb-8 text-center">
                        Follow products and discounts on Instagram
                      </h2>
                    </Tween>
                    <Tween
                      from={{ scale: 0 }}
                      to={{ scale: 0.9 }}
                      ease="power2.out"
                    >
                      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-y-5 md:gap-5">
                        <img src={insta1} className="m-auto" />
                        <img src={insta2} className="m-auto" />
                        <img src={insta3} className="m-auto" />
                        <img src={insta4} className="m-auto" />
                        <img src={insta5} className="m-auto" />
                        <img src={insta6} className="m-auto" />
                      </div>
                    </Tween>
                    <div className="newsletter w-fit m-auto">
                      <h2 className="mb-8 text-center">
                        Or subscribe to the newsletter
                      </h2>
                      <div className="flex justify-between">
                        <Tween
                          from={{ x: "-100", opacity: 0 }}
                          to={{ x: "0", opacity: 1 }}
                          ease="power2.out"
                        >
                          <input placeholder="Email address..." />
                        </Tween>
                        <Tween
                          from={{ x: "80", opacity: 0 }}
                          to={{ x: "0", opacity: 1 }}
                          ease="power2.out"
                          position={"<"}
                        >
                          <button>Submit</button>
                        </Tween>
                      </div>
                    </div>
                  </div>
                </div>
              </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default Home;
