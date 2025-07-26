import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full border-t border-primary/10 bg-white py-8 mt-12">
      <p className="flex items-center justify-center gap-1 text-center text-muted-foreground text-xs">
        © {currentYear} Yasir Wali. Made with <span className="text-red-500"><Heart className="inline w-4 h-4" fill="currentColor" /></span> React & TypeScript
      </p>
    </div>
  );
};

export default Footer;