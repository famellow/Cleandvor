import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL = "https://forms.gle/uUVkSfJEGoRFUoiKA";

const ContactSection = () => {
  const handleOpenForm = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  const contacts = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (999) 465-30-35",
      href: "tel:+79994653035",
    },
    {
      icon: Mail,
      label: "Email",
      value: "unfogetable16@gmail.com",
      href: "mailto:unfogetable16@gmail.com",
    },
    {
      icon: MapPin,
      label: "Адрес",
      value: "Р-п Кольцово",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Контакты
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку и мы перезвоним вам в течение 30 минут
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <Button 
              onClick={handleOpenForm}
              size="lg" 
              className="w-full gradient-hero text-primary-foreground shadow-soft hover:shadow-hover transition-all h-14 text-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Заполнить форму заявки
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-3xl gradient-hero text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">Работаем для вас</h3>
              <p className="opacity-90 mb-6">
                Ежедневно с 10:00 до 20:00, без выходных
              </p>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
