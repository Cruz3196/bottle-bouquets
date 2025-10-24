"use client";
import { useRef, useState } from "react";
import { User, Mail } from "lucide-react";
import { useSpring, animated } from "react-spring";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  //   this is the animations from react spring
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" }, // Start from invisible and 50px below
    to: { opacity: 1, transform: "translateY(0px)" }, // End at visible and original position
    config: { duration: 500 }, // Optional: adjust animation duration
  });

  //   this is for the image
  const imageAnimationProps = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" }, // Start from invisible and 100px to the left
    to: { opacity: 1, transform: "translateX(0px)" }, // End at visible and original position
    config: { duration: 600 }, // Animation duration
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const formData = new FormData(e.currentTarget);
      // preparing the data to be sent
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      if (!data.name || !data.email || !data.message) {
        setStatus({ type: "error", message: "All fields are required." });
        return;
      }

      //   we are fetching the /api/contact endpoint to post the form data
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setStatus({ type: "success", message: "Message sent successfully!" });
      formRef.current?.reset();

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 3000);
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message." });
    }
  };

  return (
    <section className="min-h-screen px-4 py-16 bg-base-200">
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        {/* This is where the contact form will be. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          <div className="order-1 lg:order-1 flex justify-center">
            <div className="stack w-80 h-auto mx-1 sm:mx-5 lg:w-[500px]">
              <animated.div style={imageAnimationProps}>
                {/* this is the image for the contact form */}
                <img
                  src="https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg"
                  alt="Florist shop"
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </animated.div>
            </div>
          </div>

          <div className="order-2 lg:order-2 flex justify-center">
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <animated.div style={animationProps}>
                <form
                  className="card-body p-8"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  {/* name section of the form  */}
                  <label className="label">
                    <span className="label-text text-base">Name</span>
                  </label>
                  <div className="relative">
                    {/* this is name input field */}
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full pl-12 h-12"
                    />
                    <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  </div>

                  {/* email section of the form  */}
                  <label className="label">
                    <span className="label-text text-base">Email</span>
                  </label>
                  <div className="relative">
                    {/* this is email input field */}
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      className="input input-bordered w-full pl-12 h-12"
                    />
                    <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  </div>

                  {/* Message section of the form  */}
                  <label className="label">
                    <span className="label-text text-base">Message</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      className="textarea textarea-bordered w-full pl-12 pt-4 min-h-[150px] resize-none"
                    />
                    <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  </div>

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      disabled={status.type === "loading"}
                      className="w-full h-12 bg-gradient-to-r from-teal-500 via-sky-500 to-blue-500 text-white rounded-lg font-medium hover:from-teal-600 hover:via-sky-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {status.type === "loading"
                        ? "Sending..."
                        : "Send Message"}
                    </button>

                    {status.message && (
                      <div
                        className={`mt-4 p-4 rounded-lg ${
                          status.type === "success"
                            ? "bg-green-100 text-green-800"
                            : status.type === "error"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        <span>{status.message}</span>
                      </div>
                    )}
                  </div>
                </form>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
