
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";


const Slider = () => {

    return (

        <div >
            <Swiper

                slidesPerView={1}

                loop={true}

                className="mySwiper rounded-xl shadow-2xl"

                spaceBetween={30}

                effect={"fade"}

                navigation={true}

                pagination={{
                    clickable: true,
                }}

                modules={[EffectFade, Navigation, Pagination, Autoplay]}

                centeredSlides={true}

                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}

            >

                {/*  */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://static.techspot.com/images2/news/bigimage/2018/05/2018-05-31-image-9.jpg"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-full  p-5 flex justify-center items-center">

                            <h1 className="lg:text-7xl text-xl text-center">
                                Buy or Sell Mobile by Your Choice,
                                <br />
                                With Best Price.!
                            </h1>

                        </div>
                    </div>
                </SwiperSlide>

                {/*  */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://images.firstpost.com/fpimages/1200x800/fixed/jpg/2018/08/Xiaomi-Mi-Mix-3-1280.jpg"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-full  p-5 flex justify-center items-center">

                            <h1 className="lg:text-7xl text-xl text-center">
                                Buy or Sell Mobile by Your Choice,
                                <br />
                                With Best Price.!
                            </h1>

                        </div>
                    </div>
                </SwiperSlide>

                {/*  */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://napidroid.hu/wp-content/uploads/2019/10/xiaomi-mi-mix-3-5g-header-3.jpg"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-full  p-5 flex justify-center items-center">

                            <h1 className="lg:text-7xl text-xl text-center">
                                Buy or Sell Mobile by Your Choice,
                                <br />
                                With Best Price.!
                            </h1>

                        </div>
                    </div>
                </SwiperSlide>

                {/*  */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://hexus.net/media/uploaded/2019/12/c264a253-495c-4d3e-ba60-4a695a4040ed.jpg"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-full  p-5 flex justify-center items-center">

                            <h1 className="lg:text-7xl text-xl text-center">
                                Buy or Sell Mobile by Your Choice,
                                <br />
                                With Best Price.!
                            </h1>

                        </div>
                    </div>
                </SwiperSlide>

                {/*  */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://www.koreatechtoday.com/wp-content/uploads/2018/12/galaxy-foldable-phone.jpg"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-full  p-5 flex justify-center items-center">

                            <h1 className="lg:text-7xl text-xl text-center">
                                Buy or Sell Mobile by Your Choice,
                                <br />
                                With Best Price.!
                            </h1>

                        </div>
                    </div>
                </SwiperSlide>

                {/*  */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://www.concept-phones.com/wp-content/uploads/2019/08/Samsung-Galaxy-Phoenix-Edge-concept-1-680x450.jpg"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-full  p-5 flex justify-center items-center">

                            <h1 className="lg:text-7xl text-xl text-center">
                                Buy or Sell Mobile by Your Choice,
                                <br />
                                With Best Price.!
                            </h1>

                        </div>
                    </div>
                </SwiperSlide>

                {/*  */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://static.toiimg.com/photo/msid-85366849/85366849.jpg"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-full  p-5 flex justify-center items-center">

                            <h1 className="lg:text-7xl text-xl text-center">
                                Buy or Sell Mobile by Your Choice,
                                <br />
                                With Best Price.!
                            </h1>

                        </div>
                    </div>
                </SwiperSlide>

                {/*  */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-double-infinity-220308_Full-Bleed-Image.jpg.large.jpg"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-full  p-5 flex justify-center items-center">

                            <h1 className="lg:text-7xl text-xl text-center">
                                Buy or Sell Mobile by Your Choice,
                                <br />
                                With Best Price.!
                            </h1>

                        </div>
                    </div>
                </SwiperSlide>

                {/*  */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://i.ytimg.com/vi/RcGz5z0W1MQ/maxresdefault.jpg"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-full  p-5 flex justify-center items-center">

                            <h1 className="lg:text-7xl text-xl text-center">
                                Buy or Sell Mobile by Your Choice,
                                <br />
                                With Best Price.!
                            </h1>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;

