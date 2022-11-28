
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

                {/* Outdore */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/free-photo/back-view-hiker-watching-sunset-from-mountain_181624-52983.jpg?t=st=1650142369~exp=1650142969~hmac=9fc3a88cdb80f9e0252ece037b131726b4aac6fd89ca4ab33d07eba2106b1ef9&w=740"})`,
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

                {/* Wedding */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/free-photo/beautiful-bride-groom-having-beach-wedding_23-2149043969.jpg?t=st=1650140120~exp=1650140720~hmac=fb71c890117894096932585b7d6fa59b5728208803f15aadee9a4512c2c3c9c7&w=740"})`,
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

                {/* Modelling */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/free-photo/portrait-pretty-lady-red-warm-jacket-stylish-eyeglasses_197531-15046.jpg?size=626&ext=jpg&ga=GA1.2.552546961.1649698932"})`,
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

                {/* Sports */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/free-photo/young-caucasian-male-football-soccer-player-kicking-ball-goal-mixed-light-dark-wall-concept-healthy-lifestyle-professional-sport-hobby_155003-38568.jpg"})`,
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

                {/* Journalism */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/free-photo/female-journalist-telling-news-outdoors_23-2149032395.jpg?w=740&t=st=1667845198~exp=1667845798~hmac=135d46aa4b44bc8d2c978188a8b9c7627e3474f845a0b58ad30e6f4ddf2a01ef"})`,
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

                {/* Wild */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/free-photo/beautiful-cheetahs-among-plants-middle-desert_181624-6329.jpg?w=740&t=st=1667845264~exp=1667845864~hmac=4884ba36352575092e23df47107306728f312ef7a48c96a06005bae978849121"})`,
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

                {/* Product */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/premium-vector/aqua-skin-collagen-serum-background-concept-skin-care-cosmetic_249011-452.jpg?w=740"})`,
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

                {/* Portrait */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/premium-photo/portrait-masculine-man-wearing-business-suit-posing-with-serious-look-keeping-arms-folded-isolated-gray-wall_171337-32727.jpg?w=740"})`,
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

                {/* Architectural */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/premium-photo/3d-rendering-large-modern-contemporary-house-wood-concrete_190619-1484.jpg?w=900"})`,
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

                {/* Advertising */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/free-psd/food-social-media-banner-post-template_202595-365.jpg?w=740&t=st=1667845688~exp=1667846288~hmac=0a00dc5bf8f932c138433929b623ee2a40a5918ba149b7a233875f7db994cbe2"})`,
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

                {/* Fashion */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?w=826&t=st=1667846025~exp=1667846625~hmac=06cc78e1ca6cac9109966ec1b567f77e3f66a5e5b14d0d9b430e21a6f74aac34"})`,
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

                {/* Lifestyle */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/free-photo/young-millennials-african-friends-walking-city-happy-black-people-having-fun-together-generation-z-friendship-concept_627829-7241.jpg?w=740&t=st=1667846096~exp=1667846696~hmac=bef02e4d686d62accf70fadc323de936ba658f2b929748bf967a8434a326ae49"})`,
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

                {/* Event */}
                <SwiperSlide>
                    <div
                        className="h-96 lg:h-[75vh] bg-cover bg-center bg-no-repeat text-white "
                        style={{
                            backgroundImage: `url(${"https://img.freepik.com/premium-photo/happy-people-dance-nightclub-party-concert_31965-114.jpg?w=826"})`,
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

