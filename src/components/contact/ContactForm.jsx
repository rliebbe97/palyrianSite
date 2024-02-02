"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import ContactTextInput from "./fields/ContactTextInput";
import ContactTextArea from "./fields/ContactTextArea";

export default function ContactForm() {
  const url = `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME}`;

  const [formSent, setFormSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let errorMessage = "";

    switch (fieldName) {
      case "name":
        errorMessage = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        // Basic email validation, you may want to use a library like Yup for more advanced validation
        errorMessage = /\S+@\S+\.\S+/.test(value)
          ? ""
          : "Enter a valid email address";
        break;
      case "message":
        errorMessage = value.trim() === "" ? "A message is required" : "";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // console.log('Form data submitted:', formData);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`,
      },
      body: JSON.stringify({
        fields: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      }),
    });

    setFormSent(true);
  };

  return (
    <div
      id="contact-us"
      className="overflow-hidden py-16 px-4 bg-background sm:px-6 lg:px-8 lg:py-24"
    >
      {!formSent && (
        <div className="relative mx-auto max-w-xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight primarytext sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg leading-6 primarysecondary">
              Please use the form below to contact us. Thank you!
            </p>
          </div>
          <div className="mt-12">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <ContactTextInput
                label={"Name"}
                name={"name"}
                value={formData.name}
                onChange={handleChange}
                required={true}
                error={errors.name}
                className={""}
              />
              <ContactTextInput
                label={"Email"}
                name={"email"}
                value={formData.email}
                onChange={handleChange}
                required={true}
                error={errors.email}
                className={""}
              />

              <ContactTextArea
                label={"Message"}
                name={"message"}
                value={formData.message}
                onChange={handleChange}
                required={true}
                error={errors.message}
                className={""}
                rows={4}
              />

              <button
                className="button col-span-2 mx-auto"
                disabled={isLoading}
              >
                {isLoading && <span>Submiting...</span>}
                {!isLoading && <span>Send Message</span>}
              </button>
            </form>
          </div>
        </div>
      )}

      {formSent && (
        <div className="relative mx-auto max-w-xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight primarytext sm:text-4xl">
              {" "}
              Thank You
            </h2>
            <p className="mt-4 text-lg leading-6 primarysecondary">
              We have recieved your inquiry and will get back to you by email
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
