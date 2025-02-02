import React from "react";
import img1 from "../assets/travel/1.jpg";
import Card from "./Card";
import vid1 from "../assets/video/vd1.mp4";

function Home() {
  return (
    <>
      <section className="bg-white">
        <div className=" flex flex-col sm:flex-row justify-center sm:px-[50px] px-[12px] py-[80px] sm:py-[100px]">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ">
              Travel around the world <br />
            </h1>
            <p>
              Explore the World, One Adventure at a Time.Your Next Journey
              Starts Here.ravel Beyond the Ordinary, create Memories, Not Just
              Itineraries.
            </p>
          </div>
          <div className="sec-1-img w-[100%] sm:h-[500px]">
            <img
              className="rounded w-[100%] h-full object-cover"
              src={img1}
              alt="hero image"
            />
          </div>
        </div>
      </section>

      <section className="w-[100%]">
        <svg
          style={{ backgroundColor: "#a2d9ff" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L48,117.3C96,139,192,181,288,197.3C384,213,480,203,576,176C672,149,768,107,864,128C960,149,1056,235,1152,240C1248,245,1344,171,1392,133.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a2d9ff"
            fill-opacity="1"
            d="M0,128L21.8,138.7C43.6,149,87,171,131,181.3C174.5,192,218,192,262,208C305.5,224,349,256,393,234.7C436.4,213,480,139,524,133.3C567.3,128,611,192,655,192C698.2,192,742,128,785,133.3C829.1,139,873,213,916,240C960,267,1004,245,1047,245.3C1090.9,245,1135,267,1178,282.7C1221.8,299,1265,309,1309,277.3C1352.7,245,1396,171,1418,133.3L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </section>

      {/* End block */}
      {/* Start block */}
      {/* End block */}
      {/* Start block */}
      <section className="sm:w-full w-full overflow-hidden sm:px-0 px-[40px]  flex sm:flex-row flex-col justify-center items-center ">
        <Card></Card>
        <div className="flex flex-col sm:px-[150px] px-[12px] sm:w-[50%] w-full justify-center sm:items-start items-center gap-[20px]">
          <h2 className="sm:max-w-2xl w-full mb-4 text-4xl sm:text-left text-center font-extrabold leading-none">
            Amazing places to enjoy your travel
          </h2>
          <p className="sm:text-left text-center">
            Etiam facilisis, sapien quis porta dignissim, orci nisi pharetra
            dui, varius vehicula ligula nulla sit amet lorem. Aenean in
            vestibulum quam. Cras commodo varius neque, non gravida diam
            ultrices nec. Cras nulla mauris, fermentum nec libero in.
          </p>
          <button className="bg-sky-400 w-[100px] h-[50px] font-thin text-white">
            Explore
          </button>
        </div>
      </section>
      {/* End block */}
      {/* Start block */}
      <section>
        <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20%] text-center">
          <h1 className="text-[35px]">Featured videos</h1>
          <div className="w-[200px] h-[5px] bg-sky-300"></div>
          <p>
            Aliquam sodales vitae ex tincidunt consectetur. Etiam eleifend
            malesuada magna, at imperdiet justo euismod eu. Aliquam vel imperdet
            mi, et convallis eros. Duis fermentum fringilla nisl at vulputate.
            Nunc nec lorem faucibus, molestie nisi id, elementum sem. Sed
            vulputate tempor augue a efficitur urna, ultrices eu. Duis vel
            turpis et arcu.
          </p>
          <div>
            <video
              className="rounded-xl"
              width="840px"
              loop="true"
              autoplay="autoplay"
              controls
              muted
            >
              <source src={vid1} type="video/webm" />
            </video>
          </div>
        </div>
      </section>
      {/* End block */}
      {/* Start block */}
      <br />
      <br />
      <br />
      <section>
        <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20%] text-center">
          <h1 className="text-[35px]">Travel categories</h1>
          <div className="w-[200px] h-[5px] bg-sky-300"></div>
          <p>
            Maecenas et eros non quam ultricies interdum. Proin ac dolor vel
            neque ullamcorper blandit vitae et felis. Morbi ante urna, imperdiet
            vel neque vitae, porta ullamcorper metus. Quisque bibendum venenatis
            eros sed commodo. Nullam ultrices tortor non diam ullamcorper
            auctor. In urna tellus, auctor sit amet est ut, scelerisque volutpat
            diam.
          </p>
          <div>
            <article className="relative w-[300px] isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section>
        <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20%] text-center">
          <h1 className="text-[35px]">Traveller's Experiences</h1>
          <div className="w-[200px] h-[5px] bg-sky-300"></div>
          <p>
            “Curabitur posuere ullamcorper pulvinar. Donec dignissim bibendum
            leo, at faucibus enim aliquam eu. Nullam quis pulvinar diam, ac
            elementum urna. Integer id vehicula tortor, nec pulvinar libero. Ut
            elit elit, fringilla a nisi ut, dapibus eleifend quam.”
          </p>
          <div>
            <div class="p-5  rounded text-center text-gray-500 max-w-sm">
              <div>
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="https://loremflickr.com/320/320/girl"
                  alt
                />
                <div className="text-sm mt-5">
                  <a
                    href="#"
                    className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
                  >
                    Jane Doe
                  </a>
                  <p>Blogger &amp; Youtuber</p>
                </div>
                <p className="mt-2 text-sm text-gray-900">
                  Lorem ipsum dolor sit amet, consecte adipisicing elit.
                  Voluptatibus quia Maiores et perferendis eaque.
                </p>
                <div className="flex mt-4 justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
