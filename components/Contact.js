"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Get In Touch</span>
                <h2>
                  Let’s Talk For your <span>Next Projects</span>
                </h2>
                <p>
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis
                </p>
              </div>
              <ul className="list-style-two">
                <li>5+ Years Of Experience</li>
                <li>Professional Web Designer</li>
                <li>Mobile Apps Design</li>
                <li>Custom Design Support</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                className="contactForm"
                name="contactForm"
                action="assets/php/form-process.php"
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Richard D. Hammond"
                        required=""
                        data-error="Please enter your Name"
                      />
                      <label htmlFor="name" className="for-icon">
                        <i className="far fa-user" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        placeholder="support@gmail.com"
                        required=""
                        data-error="Please enter your Email"
                      />
                      <label htmlFor="email" className="for-icon">
                        <i className="far fa-envelope" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        defaultValue=""
                        placeholder="+880 (123) 456 88"
                        required=""
                        data-error="Please enter your Phone Number"
                      />
                      <label htmlFor="phone_number" className="for-icon">
                        <i className="far fa-phone" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        defaultValue=""
                        placeholder="Subject"
                        required=""
                        data-error="Please enter your Subject"
                      />
                      <label htmlFor="subject" className="for-icon">
                        <i className="far fa-text" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="write message"
                        required=""
                        data-error="Please enter your Message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        Send Us Message <i className="far fa-angle-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </div>
              </form>
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
export default Contact;

export const Contact2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cwuvtbb", "template_o95qv78", form.current, {
        publicKey: "NveDa5f7oFeZGEZ0H",
      })
      .then(
        () => {
          toast.success("Thank you for reaching out to me!", {
            position: "bottom-center",
          });
        },
        (error) => {
          toast.error("Opps!,something went wrong", {
            position: "bottom-center",
          });
        }
      );
  };
  return (
    <section id="contact" className="contact-area py-115 rpy-100 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-8">
            <div className="contact-two-content pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> let’s work together
                </span>
                <h2>let’s Work Together</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-8">
                  <h3>i,m avaiable at</h3>
                  <h5>
                    <i className="far fa-envelope" /> bijithpn@gmail.com
                  </h5>
                  <h5>
                    <i className="far fa-phone" /> +91 7994552488
                  </h5>
                </div>
                <div className="col-sm-4">
                  <div className="arrow">
                    <i className="fal fa-arrow-right" />
                  </div>
                </div>
              </div>
              <div className="social-flow">
                <h4>Follow :</h4>
                <div className="social-style-one">
                  <a href="https://github.com/bijith-git">
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://www.linkedin.com/in/bijithpn/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://instagram.com/b_jith__?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-form-two form-style-one wow fadeInUp delay-0-4s">
              <form
                ref={form}
                onSubmit={sendEmail}
                id="contactForm"
                className="contactForm"
                name="contactForm"
                // action="assets/php/form-process.php"
                method="post"
              >
                <div className="form-group">
                  <label className="for-title" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required=""
                    data-error="Please enter your Email"
                  />
                  <label htmlFor="email" className="for-icon">
                    <i className="far fa-envelope" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <label className="for-title" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required=""
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="name" className="for-icon">
                    <i className="far fa-user" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={7}
                    placeholder="Write Messege....."
                    required=""
                    data-error="Please enter your Message"
                    defaultValue={""}
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    <i className="far fa-envelope" /> Messege me
                  </button>
                  <div id="msgSubmit" className="hidden" />
                </div>
              </form>
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
