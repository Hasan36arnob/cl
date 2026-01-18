import React from "react";
import i1 from "../assets/images/i1.png";
import i2 from "../assets/images/i2.png";
import i3 from "../assets/images/i3.png";
import i4 from "../assets/images/i4.png";
import i5 from "../assets/images/i5.png";
import i6 from "../assets/images/i6.png";

function Team() {
  return (
    <div>
      <section id="team" className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

        <div className="container mx-auto px-5 max-w-7xl relative z-10">
          {/* Office & Awards Gallery */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">Work Environment</span>
              </h3>
              <p className="text-xl text-navy-200 max-w-3xl mx-auto">
                Behind the scenes at WeCare for Climate Foundation - our team in action and celebrating achievements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Office Working Photos */}
              <div className="relative overflow-hidden rounded-2xl bg-navy-800/50 border border-navy-600/50 flex items-center justify-center">
                <img
                  src={i1}
                  alt="Team members collaborating in our modern office space"
                  className="w-full h-64 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-navy-800/50 border border-navy-600/50 flex items-center justify-center">
                <img
                  src={i2}
                  alt="Team members in a meeting discussing climate strategies"
                  className="w-full h-64 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-navy-800/50 border border-navy-600/50 flex items-center justify-center">
                <img
                  src={i3}
                  alt="Team members receiving sustainability award"
                  className="w-full h-64 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-navy-800/50 border border-navy-600/50 flex items-center justify-center">
                <img
                  src={i4}
                  alt="Team members at field work for environmental assessment"
                  className="w-full h-64 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-navy-800/50 border border-navy-600/50 flex items-center justify-center">
                <img
                  src={i5}
                  alt="Team members receiving environmental excellence award"
                  className="w-full h-64 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-navy-800/50 border border-navy-600/50 flex items-center justify-center">
                <img
                  src={i6}
                  alt="Team members working on climate data analysis"
                  className="w-full h-64 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
