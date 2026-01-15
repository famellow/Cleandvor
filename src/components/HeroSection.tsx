import { motion } from "framer-motion";
import { TreeDeciduous, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const benefits = [
    "Работаем круглый год",
    "Гарантия качества",
    "Выезд в день обращения",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <TreeDeciduous className="w-4 h-4" />
              <span className="text-sm font-medium">Благоустройство территории</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Чистая территория{" "}
              <span className="text-gradient">в любое время года</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              CleanDvor — профессиональное благоустройство: уборка снега, 
              очистка крыш, кошение газонов и вывоз мусора. 
              Доверьте заботу о вашей территории нам!
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="gradient-hero text-primary-foreground shadow-soft hover:shadow-hover transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Оставить заявку
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/5"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Наши услуги
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 gradient-hero rounded-full opacity-20 animate-pulse-soft" />
              <div className="absolute inset-4 bg-primary/30 rounded-full animate-float" />
              <div className="absolute inset-8 bg-background rounded-full shadow-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏗️</div>
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-muted-foreground">Довольных клиентов</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 bg-background shadow-card rounded-2xl p-4"
            >
              <p className="text-2xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Объектов в месяц</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-0 bg-background shadow-card rounded-2xl p-4"
            >
              <p className="text-2xl font-bold text-primary">2 года</p>
              <p className="text-sm text-muted-foreground">На рынке</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
