import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const Contact = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yasirwali301302@gmail.com",
      href: "mailto:yasirwali301302@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: undefined
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/yasirwali1052", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/waliyasir", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/YasirWali18", label: "Twitter" },
  ];

  return (
    <section id="contact" className="section-block scroll-mt-24">
      <div className="shell" ref={ref}>
        <div className={`text-center mb-12 sm:mb-16 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow mb-4">Contact</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mt-4 mb-4">
            Let's <span className="gradient-text">build something</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Drop a message.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 items-stretch reveal ${visible ? "is-visible" : ""}`}
          style={{ transitionDelay: visible ? "100ms" : "0ms" }}
        >
          {/* Contact Info & Socials */}
          <Card className="md:col-span-2 border border-border/70 shadow-[var(--shadow-md)] bg-gradient-hero text-white flex flex-col justify-between rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
            <CardContent className="p-7 sm:p-8 flex flex-col gap-8 h-full justify-between relative">
              <div>
                <h3 className="text-xl font-bold font-display mb-2">Get in touch</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Open to full-time roles, freelance work, and collaboration on AI/ML projects.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {contactInfo.map((info) => {
                  const content = (
                    <>
                      <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-4 h-4" />
                      </span>
                      <span className="font-medium text-sm">{info.value}</span>
                    </>
                  );
                  return info.href ? (
                    <a key={info.label} href={info.href} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label} className="flex items-center gap-3">{content}</div>
                  );
                })}
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/25 transition-colors duration-300"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="md:col-span-3 border border-border/70 shadow-[var(--shadow-md)] rounded-2xl">
            <CardContent className="p-7 sm:p-8">
              <form
                action="https://formspree.io/f/mvgqkvjv"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="New message from portfolio contact form" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input id="name" name="name" placeholder="Name" required className="h-12 rounded-xl" />
                  <Input id="email" name="email" type="email" placeholder="Email" required className="h-12 rounded-xl" />
                </div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="rounded-xl"
                />
                <Button type="submit" className="w-full bg-gradient-hero text-white hover:shadow-glow rounded-xl h-12 text-base font-semibold transition-shadow duration-300">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
