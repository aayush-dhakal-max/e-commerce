import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font px-20">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap w-full mb-2">
            <div className="lg:w-1/2 w-full mb- lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Galaxy Super Mart
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Our team consists of dedicated professionals who bring a wealth of
              expertise to the table. From the Chief Management Officer who
              oversees strategy and culture, to the DevOps Team Lead who
              coordinates software development and operations, to the Chief
              Technical Officer who drives technological innovation, to the
              Chief Financial Officer who oversees financial management and
              planning, our team is well-rounded and well-equipped to take on
              any challenge. Together, we work collaboratively to achieve our
              business objectives and drive growth and profitability.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://i.pravatar.cc/300"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Shashwat Singh Acharya
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Chief Management Officer
                </h2>
                <p className="leading-relaxed text-base">
                  Oversees organizational strategy and ensures alignment with
                  business objectives. Manages teams and fosters company
                  culture.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://i.pravatar.cc/303"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Aayush Dhakal
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  DevOPs Team Lead
                </h2>
                <p className="leading-relaxed text-base">
                  Coordinates software development and operations to enhance
                  efficiency and reliability. Manages and mentors a team of
                  developers and engineers.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://i.pravatar.cc/302"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Sandeep Paudel
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Chief Technical Officer
                </h2>
                <p className="leading-relaxed text-base">
                  Leads technological innovation and product development.
                  Ensures technical excellence and aligns technology with
                  business objectives.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://i.pravatar.cc/301"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Akash Poudel
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Chief Financial Officer
                </h2>
                <p className="leading-relaxed text-base">
                  Oversees financial management and planning. Develops and
                  implements financial strategies to drive growth and
                  profitability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
