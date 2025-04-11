import CatPev from "./CategoryPrev";
import Product from "./ProductList";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <>
      <section className="bg-white py-16">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-center px-6 max-w-7xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Stay Fashion-Forward with Our Latest Collection.
            </h1>
            <p className="text-lg text-gray-600">
              Save more with coupons & up to <span className="font-semibold">20% off</span>
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-red-500 text-white px-8 py-3 rounded-xl shadow-lg hover:from-red-500 hover:via-indigo-500 hover:to-blue-500 transition-all duration-500 ease-in-out"
            >
              Shop Now
            </a>
          </div>

          {/* Image Carousel */}
          <div>
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="rounded-2xl shadow-xl"
            >
              <SwiperSlide>
                <img
                  src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/32e16830-6a41-428b-81e5-064147aa0eb0/the-teenage-creatives-changing-music-and-modeling.jpg"
                  alt="Fashion Slide 1"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1920&q=80"
                  alt="Fashion Slide 2"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1920&q=80"
                  alt="Fashion Slide 3"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <CatPev />
      <Product />
    </>
  );
};

export default Hero;
