import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!");

    setName('');
    setEmail('');
    setMessage('');

  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Get In <span className="text-purple-500"> Touch</span>{" "}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always ready to discussing new opportunities{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary" />
                </div>
                <div className="">
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:name@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    name@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary" />
                </div>
                <div className="">
                  <h3 className="font-medium">Phone</h3>
                  <a
                    href="tel:+1234 000 330"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1234 000 330
                  </a>
                </div>
              </div>
            </div>

            <div className="justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="text-primary" />
                </div>
                <div className="">
                  <h3 className="font-medium"> Location </h3>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Mombasa, Kenya
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="font-medium mb-4">Contact with me</h3>
              <div className="flex justify-center space-x-4 flex-wrap">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form action="" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  value={name}
                  id="name"
                  name="name"
                  placeholder="Enter your name..."
                  required
                  className="border-input bg-background rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email..."
                  required
                  className="border-input bg-background rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-primary focus:outline-none"
                  value={email}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  placeholder="Enter your message..."
                  required
                  className="border-input bg-background rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  value={message}
                />
              </div>

              <button
                type="submit"
                className="cosmic-button flex items-center justify-center gap-2 w-full "
              >
                Send a Message <Send />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
