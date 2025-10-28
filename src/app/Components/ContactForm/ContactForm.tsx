"use client";
import { useRef, useState } from "react";
import { User, Mail, Loader2 } from "lucide-react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import RoseStella from "../../public/images/RoseStella.png";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  //   this is the animations from react spring
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 500 },
  });

  //   this is for the image
  const imageAnimationProps = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    config: { duration: 600 },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      if (!data.name || !data.email || !data.message) {
        setStatus({ type: "error", message: "All fields are required." });
        return;
      }

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

      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 3000);
    } catch {
      setStatus({ type: "error", message: "Failed to send message." });
    }
  };

  return (
    <section className="min-h-screen px-4 py-16">
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          <div className="order-1 lg:order-1 flex justify-center">
            <animated.div style={imageAnimationProps}>
              <div className="stack w-80 h-auto mx-9 lg:w-[500px] relative">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-100 rounded-md">
                    <Loader2 className="w-12 h-12 text-buttonHovered animate-spin" />
                  </div>
                )}
                <Image
                  src={RoseStella}
                  alt="Florist shop"
                  className="w-full h-auto rounded-md shadow-lg"
                  width={500}
                  height={500}
                  onLoad={() => setImageLoading(false)}
                  priority
                />
                <div className="bg-buttonHovered grid place-content-center rounded-box h-full">
                  2
                </div>
              </div>
            </animated.div>
          </div>

          <div className="order-2 lg:order-2 flex justify-center">
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <animated.div style={animationProps}>
                <form
                  className="card-body p-8"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <label className="label">
                    <span className="label-text text-base">Name</span>
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full pl-12 h-12"
                    />
                    <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  </div>

                  <label className="label">
                    <span className="label-text text-base">Email</span>
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      className="input input-bordered w-full pl-12 h-12"
                    />
                    <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  </div>

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

                  <div className="mt-5 max-w-4xl w-full text-center">
                    <p className="text-sm text-gray-600">
                      Due to the custom nature of our products, refunds or
                      returns are not available. Additionally, we reserve the
                      right to refuse service to anyone.
                    </p>
                  </div>

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      disabled={status.type === "loading"}
                      className="w-full h-12 bg-buttonHovered hover:bg-main disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
