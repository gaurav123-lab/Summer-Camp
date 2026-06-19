import React from "react";

function LearningOutcomes() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-3 gap-10 items-center">
        {/* Left Side */}
        <div>
          <p className="text-orange-500 font-semibold uppercase">
            What Kids Will Learn
          </p>

          <h2 className="text-4xl font-bold mt-2 mb-8">Learning Outcomes</h2>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              <p>Understand the basics of Artificial Intelligence</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              <p>Build and program robots with confidence</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              <p>Learn coding through exciting projects</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              <p>Improve problem solving and logical thinking</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✔</span>
              <p>Work on real-world mini projects</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="\public\FAQChild.png"
            alt="robotics"
            className="w-full max-w-112.5 object-contain drop-shadow-xl"
          />
        </div>
        {/* Right Side */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold">Expert Mentors</h3>
              <p className="text-gray-500">Learn from experienced educators.</p>
            </div>

            <div>
              <h3 className="font-bold">Interactive Learning</h3>
              <p className="text-gray-500">
                Hands-on sessions and live projects.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Safe Environment</h3>
              <p className="text-gray-500">
                100% kid-friendly learning experience.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Certificate of Completion</h3>
              <p className="text-gray-500">
                Certificate after successful completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningOutcomes;
