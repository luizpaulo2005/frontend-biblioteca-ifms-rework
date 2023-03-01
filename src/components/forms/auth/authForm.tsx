import { Swiper, SwiperSlide } from "swiper/react";

export function AuthForm() {
  return (
    <Swiper
      // spaceBetween={50}
      slidesPerView={1}
      // pagination={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="rounded-md p-3 min-w-[350px] bg-slate-200 dark:bg-gray-800">
        <div className="text-2xl mb-5">Login</div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            // value={}
            // onChange={}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="senha"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Senha
          </label>
          <input
            type="password"
            id="senha"
            // value={}
            // onChange={}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
    <div className="flex justify-end">
    <button className="p-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-colors dark:bg-gray-700 dark:hover:bg-gray-500">Entrar</button>
    </div>
      </SwiperSlide>
      {/* <SwiperSlide>
                Registrar
            </SwiperSlide> */}
    </Swiper>
  );
}
