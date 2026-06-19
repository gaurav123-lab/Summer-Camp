import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-r from-orange-500 via-orange-400 to-yellow-400 min-h-screen"
    >
      <div className="absolute top-40 left-[55%] text-white text-5xl font-bold opacity-30">
        AI
      </div>

      <div className="absolute top-80 left-[50%] text-white text-4xl opacity-30">
        {"</>"}
      </div>
      <div className="absolute top-40 right-40 text-white/40 text-5xl">⚙️</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-40">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-block border my-5 border-white text-white px-5 py-2 rounded-full text-sm font-medium">
              ✨ Summer 2026 Campaign — Limited Slots Available
            </div>

            <h1 className="text-white font-extrabold text-5xl md:text-7xl mt-1 leading-tight">
              AI & ROBOTICS
              <br />
              <span className="text-slate-900">SUMMER WORKSHOP</span>
            </h1>

            <p className="text-white text-lg mt-6 max-w-xl">
              Inspire young minds to explore the future with AI, Robotics &
              Coding through fun projects, interactive learning and real-world
              challenges.
            </p>

            <div className="flex items-center gap-4 mt-10">
              <div className="flex">
                <img
                  src="https://i.pravatar.cc/50?img=1"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/50?img=2"
                  className="-ml-3 w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/50?img=3"
                  className="-ml-3 w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/50?img=4"
                  className="-ml-3 w-12 h-12 rounded-full border-2 border-white"
                />
              </div>

              <div>
                <p className="font-bold text-white">⭐ 4.9 (1200+ Reviews)</p>

                <p className="text-white">Loved by Kids & Parents</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/heroChild.png"
              alt="AI Workshop"
              className="w-full max-w-175 object-contain "
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-[80px]"></div>
    </section>
  );
}

export default Hero;
