import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzIFTFC8c4MoBT2u21aRvu6AeLZKr1bPXCRjKtu7uSHlATGUgArztN5uxNrFXNMCI9r/exec";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните имя и телефон",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append("phone", formData.phone.trim());
      formDataToSend.append("message", formData.message.trim());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      });

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
      value: "info@cleandvor.ru",
      href: "mailto:info@cleandvor.ru",
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
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-background border-border"
                  required
                  disabled={isLoading}
                  maxLength={100}
                />
              </div>
              <div>
                <Input
                  placeholder="Номер телефона"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 bg-background border-border"
                  required
                  disabled={isLoading}
                  maxLength={20}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Опишите, какая услуга вам нужна"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] bg-background border-border resize-none"
                  disabled={isLoading}
                  maxLength={1000}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full gradient-hero text-primary-foreground shadow-soft hover:shadow-hover transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
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
