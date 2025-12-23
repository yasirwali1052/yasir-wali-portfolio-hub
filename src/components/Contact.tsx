import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yasirwali301302@gmail.com",
      href: "mailto:yasirwali301302S@email.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islambad, PK",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/yasirwali1052", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/waliyasir", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/YasirWali18", label: "Twitter" },
  ];

  return (
    <section id="contact" className="scroll-mt-24 section-block">
      <div className="shell">
        <div className="mx-auto max-w-7xl card-shell p-6 sm:p-10 md:p-14 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Interested in collaborating or have a project in mind? Drop a message!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Contact Info & Socials */}
            <Card className="border border-border/70 shadow-[var(--shadow-lg)] flex flex-col justify-between h-full p-6 rounded-2xl">
              <CardContent className="p-0 flex flex-col gap-8 h-full justify-between">
                <div className="flex flex-col gap-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <info.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{info.value}</span>
                    </a>
                  ))}
                </div>
                <div className="flex gap-3 mt-6 md:mt-auto justify-start">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Contact Form */}
            <Card className="border border-border/70 shadow-[var(--shadow-lg)] flex flex-col justify-center h-full p-6 rounded-2xl">
              <CardContent className="p-0">
                <form 
                  action="https://formspree.io/f/mvgqkvjv" 
                  method="POST" 
                  className="space-y-4"
                >
                  <input type="hidden" name="_subject" value="New message from portfolio contact form" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input id="name" name="name" placeholder="Name" required className="h-12" />
                    <Input id="email" name="email" type="email" placeholder="Email" required className="h-12" />
                  </div>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message..."
                    rows={5}
                    required
                  />
                  <Button type="submit" className="w-full bg-gradient-hero text-primary-foreground hover:shadow-glow rounded-xl h-12 text-base font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;