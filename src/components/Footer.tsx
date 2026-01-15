import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">C</span>
            </div>
            <span className="font-bold text-foreground">
              Clean<span className="text-primary">Dvor</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 CleanDvor. Все права защищены.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/cyberiaaaaaa"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Telegram
            </a>
            {["WhatsApp", "VK"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
