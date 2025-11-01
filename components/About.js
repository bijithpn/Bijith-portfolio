import Counter from "./Counter";

const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className=" py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">
                    <i className="flaticon-asterisk-1" />
                    Introduction of Myself
                  </span>
                  <h2>
                    Elevating <span>ideas</span> into immersive digital
                    experiences.
                  </h2>
                  {/* <h2>
                  I have no special <span>talents</span>.I am only passionately
                  curious
                </h2> */}
                </div>
                <div className="text pb-5">
                  Hi, I'm a full-stack developer with three years of hands-on
                  experience creating innovative web and mobile solutions. My
                  expertise includes Flutter for cross-platform mobile
                  development (Android & iOS), along with modern web frameworks
                  for building responsive, dynamic websites. I work across the
                  entire development stack - from frontend UI/UX to backend
                  architecture and database management - ensuring seamless
                  integration and optimal performance. I've successfully
                  completed diverse projects including e-commerce platforms,
                  business websites, and mobile applications. My focus is on
                  delivering user-friendly, scalable solutions while adapting to
                  evolving project needs and maintaining high code quality.
                </div>
                <div className="row">
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="about-info-item wow fadeInUp delay-0-2s">
                      <small>born In</small>
                      <b>Kerala,India</b>
                    </div>
                  </div>
                  {/* <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>Freelancing</small>
                    <b>Yes</b>
                  </div>
                </div> */}
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="about-info-item wow fadeInUp delay-0-4s">
                      <small>Working at</small>
                      <b>Intersmart</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-counter-wrap">
                <div className="row gap-40 justify-content-center">
                  <div className="col-lg-5 col-6 mx-5">
                    <div className="counter-item counter-text-wrap mb-25 wow fadeInUp delay-0-2s">
                      <Counter end={12} extraClass={""} />
                      <span className="counter-title">Projects</span>
                    </div>
                  </div>
                  <div className="col-lg-5 col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                      <Counter end={3} extraClass={"y"} />
                      <span className="counter-title">Experience</span>
                    </div>
                  </div>
                  <div className="col-lg-5 col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                      <Counter end={7} extraClass={"+"} />
                      <span className="counter-title">Clients</span>
                    </div>
                  </div>
                </div>
                <div className="counter-logo">
                  <img
                    className="wow zoomIn delay-0-2s"
                    src="assets/images/shape/circle-logo.png"
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default About;

export const About2 = () => {
  return (
    <section id="about" className="about-area rel z-1 ">
      <div className=" py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-two rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">
                    <i className="flaticon-asterisk-1" />
                    Introduction of Myself
                  </span>
                  <h2>
                    Designing <span>emotional</span> digital experiences that
                    people love
                  </h2>
                  {/* <h2>
                  I have no special <span>talents</span>.I am only passionately
                  curious
                </h2> */}
                </div>
                <div className="text pb-5">
                  Hi, I'm a full-stack developer with three years of hands-on
                  experience creating innovative web and mobile solutions. My
                  expertise includes Flutter for cross-platform mobile
                  development (Android & iOS), along with modern web frameworks
                  for building responsive, dynamic websites. I work across the
                  entire development stack - from frontend UI/UX to backend
                  architecture and database management - ensuring seamless
                  integration and optimal performance. I've successfully
                  completed diverse projects including e-commerce platforms,
                  business websites, and mobile applications. My focus is on
                  delivering user-friendly, scalable solutions while adapting to
                  evolving project needs and maintaining high code quality.
                </div>
                <div className="row">
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="about-info-item wow fadeInUp delay-0-2s">
                      <small>born In</small>
                      <b>Kerala,India</b>
                    </div>
                  </div>
                  {/* <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>Freelancing</small>
                    <b>Yes</b>
                  </div>
                </div> */}
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="about-info-item wow fadeInUp delay-0-4s">
                      <small>Working at</small>
                      <b>Sigosoft</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-counter-wrap">
                <div className="row gap-40 justify-content-center">
                  <div className="col-lg-5 col-6 mx-5">
                    <div className="counter-item counter-text-wrap mb-25 wow fadeInUp delay-0-2s">
                      <Counter end={12} extraClass={""} />
                      <span className="counter-title">project completed</span>
                    </div>
                  </div>
                  <div className="col-lg-5 col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                      <Counter end={3} extraClass={"y"} />
                      <span className="counter-title">Years Experience</span>
                    </div>
                  </div>
                  <div className="col-lg-5 col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                      <Counter end={7} extraClass={"+"} />
                      <span className="counter-title">Satisfied customers</span>
                    </div>
                  </div>
                </div>
                <div className="counter-logo">
                  <img
                    className="wow zoomIn delay-0-2s"
                    src="assets/images/shape/circle-logo.png"
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
