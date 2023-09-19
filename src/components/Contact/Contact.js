import { useFormik } from "formik";
import React, { Component, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const initData = {
    pre_heading: "Contact",
    heading: "Get In Touch",
    content:
      "Contact the Chatafisha NFT Marketplace for an NFT mint (don't forget the account ID and the nft media url), or for any other request.",
  };

  //   sgMail.setApiKey(
  //     "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"
  //   );
  const formikContact = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values, actions) => {
      console.log(values);

      await emailjs
        .sendForm(
          "service_f3uj7rh",
          "template_3x0miij",
          form.current,
          "DUtTwel3hKZrkWvOX"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      actions.resetForm();
    },
  });
  const form = useRef();
  return (
    <section className="author-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            {/* Intro */}
            <div className="intro text-center">
              <span>{initData.pre_heading}</span>
              <h3 className="mt-3 mb-0">{initData.heading}</h3>
              <p>{initData.content}</p>
            </div>
            {/* Item Form */}
            <form
              id="contact-form"
              className="item-form card no-hover"
              type="submit"
              onSubmit={formikContact.handleSubmit}
              ref={form}
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      required="required"
                      onChange={formikContact.handleChange}
                      onBlur={formikContact.handleBlur}
                      value={formikContact.values.name}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mt-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required="required"
                      onChange={formikContact.handleChange}
                      onBlur={formikContact.handleBlur}
                      value={formikContact.values.email}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required="required"
                      onChange={formikContact.handleChange}
                      onBlur={formikContact.handleBlur}
                      value={formikContact.values.subject}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      cols={30}
                      rows={3}
                      defaultValue={""}
                      onChange={formikContact.handleChange}
                      onBlur={formikContact.handleBlur}
                      value={formikContact.values.message}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn w-100 mt-3 mt-sm-4" type="submit">
                    <i className="icon-paper-plane mr-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            <p className="form-message" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
