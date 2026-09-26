"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { services } from "@/data/services";

const WHATSAPP_NUMBER = "2349057778626";

type FormData = {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const buildWhatsAppMessage = (data: FormData) => {
  return `Hello TopZero,

I would like to discuss a project.

Name: ${data.name}
Business: ${data.business || "-"}
Email: ${data.email}
Phone: ${data.phone || "-"}
Service: ${data.service}
Budget: ${data.budget || "-"}
Timeline: ${data.timeline || "-"}
Project description: ${data.message}

Sent from topzero.tech`;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [redirecting, setRedirecting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.service) {
      nextErrors.service = "Please choose a service.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Please tell us a little about your project.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setRedirecting(true);
    const message = buildWhatsAppMessage(formData);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setFormData(initialFormData);
    setTimeout(() => setRedirecting(false), 4000);
  };

  const inputClass =
    "w-full text-base px-4 rounded-lg py-2.5 border-border border-solid dark:border-darkborder dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0";
  const errorClass = "text-sm text-red-500 mt-1";

  return (
    <section className="dark:bg-darkmode pb-24 !pt-0">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          <div className="md:col-span-6 col-span-12 md:pt-12 pt-0 relative">
            <h2 className="max-w-96 text-[40px] leading-[3rem] font-bold mb-4">
              Tell Us About Your Project
            </h2>
            <p className="text-black/50 dark:text-white/50 text-lg mb-6">
              Fill this in and we&apos;ll open WhatsApp with your details
              ready to send — no account or sign-up needed.
            </p>
            <form onSubmit={handleSubmit} noValidate className="flex flex-wrap w-full m-auto justify-between">
              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="name" className="pb-3 inline-block text-base">
                    Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    className={inputClass}
                  />
                  {errors.name && <p className={errorClass}>{errors.name}</p>}
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="business" className="pb-3 inline-block text-base">
                    Business Name
                  </label>
                  <input
                    id="business"
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="email" className="pb-3 inline-block text-base">
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    className={inputClass}
                  />
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="phone" className="pb-3 inline-block text-base">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="service" className="pb-3 inline-block text-base">
                    Service*
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-invalid={!!errors.service}
                    className={inputClass}
                  >
                    <option value="">Choose a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  {errors.service && <p className={errorClass}>{errors.service}</p>}
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="timeline" className="pb-3 inline-block text-base">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a timeline</option>
                    <option value="As soon as possible">As soon as possible</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="Flexible / not sure">Flexible / not sure</option>
                  </select>
                </div>
              </div>
              <div className="mx-0 my-2.5 w-full">
                <label htmlFor="budget" className="pb-3 inline-block text-base">
                  Budget
                </label>
                <input
                  id="budget"
                  type="text"
                  name="budget"
                  placeholder="e.g. flexible, or a range you have in mind"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="w-full mt-2.5">
                <label htmlFor="message" className="text-base inline-block pb-3">
                  Project Description*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  className="w-full border border-border px-4 py-2.5 focus:outline-hidden bg-white dark:bg-darkmode dark:border-border_color rounded-lg dark:focus:border-primary focus:border-primary"
                  placeholder="What are you looking to build?"
                ></textarea>
                {errors.message && <p className={errorClass}>{errors.message}</p>}
              </div>
              <div className="mx-0 my-2.5 w-full">
                <button
                  type="submit"
                  className="border leading-none px-6 text-lg font-medium py-4 rounded-lg bg-primary border-primary text-white hover:bg-secondary duration-500 cursor-pointer inline-flex items-center gap-2"
                >
                  <Icon icon="ic:baseline-whatsapp" width="22" height="22" />
                  Send via WhatsApp
                </button>
              </div>
            </form>
            {redirecting && (
              <div className="text-white bg-success rounded-lg px-4 py-2 text-base mt-2 flex items-center gap-2 w-fit">
                Opening WhatsApp with your details...
              </div>
            )}
          </div>
          <div className="md:col-span-6 col-span-12 flex items-center">
            {/* Decorative chat illustration — not a real office photo */}
            <div className="w-full rounded-2xl bg-gradient-to-br from-primary to-secondary p-10 flex flex-col items-center justify-center text-center gap-4 min-h-80">
              <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center">
                <Icon icon="ic:baseline-whatsapp" width="44" height="44" className="text-white" />
              </div>
              <p className="text-white text-2xl font-semibold max-w-xs">
                We reply fastest on WhatsApp
              </p>
              <p className="text-white/70 max-w-xs">
                Submitting this form opens a pre-filled WhatsApp message —
                just hit send.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;