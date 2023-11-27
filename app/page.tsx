import BannerSlider from "@/components/Banner";
import News from "@/components/News";
import Testemonial from "@/components/Testemonial";
import HeroTop from "@/components/HeroTop";
import Test from "@/components/Test";
import ToursPosts from "@/components/ToursPosts";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";

export default async function Home() {
  return (
    <>
      <div className="mx-auto ">
        <HeroTop />
        <div className=" text-center mt-11 p-22 w-4/6 mx-auto">
          <h1 className=" text-gray-500 font-bold tracking-widest p-7">
            All You Need To Know
          </h1>
          <Test />
          <div className="divider"></div>
        </div>
        <div>
          <Experience />
          <div className="divider"></div>
        </div>
        <div className="mt-12 shadow-lg drop-shadow-2xl bg-white h-[600px] w-10/12 mx-auto">
          <BannerSlider />
          <div className="divider"></div>
        </div>

        <hr />

        <div className="flex justify-center content-center  mt-9 p-8  h-[300px]">
          <News />
        </div>
        <div className="divider"></div>

        <div>
          <h1 className="text-center text-5xl font-bold tracking-widest  text-orange-500 uppercase   p-9">
            our tours
            <p className=" text-2xl tracking-wider text-black mt-5">
              Beautiful landscapes, unforgettable activities, and luxury
              glamping in Morocco
            </p>
          </h1>

          <ToursPosts />
          <div className="divider"></div>

          <div className=" container bg-gay-300 p-5 mt-9 mb-9">
            <div className=" w-full container h-[400px] bg-slate-100 dark:bg-gray-800">
              <h1 className="text-center font-bold tracking-wider text-2xl text-orange-500  uppercase underline p-9">
                our clients
              </h1>

              <Testemonial />
              <div className="divider"></div>
            </div>
          </div>
        </div>
        <Stats />
        <div className="divider"></div>
      </div>
    </>
  );
}
