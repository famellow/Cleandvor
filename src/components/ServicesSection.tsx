import { motion } from "framer-motion";
import { Snowflake, Home, Shovel, Trash2, Trees, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Snowflake,
    title: "Уборка снега",
    description: "Очистка территории от снега и наледи, обработка противогололёдными материалами",
    price: "от 25 ₽/м²",
  },
  {
    icon: Home,
    title: "Очистка крыш",
    description: "Удаление снега, наледи и сосулек с крыш зданий любой сложности",
    price: "от 35 ₽/м²",
  },
  {
    icon: Trees,
    title: "Кошение газонов",
    description: "Регулярный покос травы, уход за газоном и озеленёнными территориями",
    price: "от 15 ₽/м²",
  },
  {
    icon: Trash2,
    title: "Вывоз мусора",
    description: "Вывоз строительного, технического и бытового мусора любого объёма",
    price: "от 2000 ₽",
  },
  {
    icon: Shovel,
    title: "Уборка территории",
    description: "Комплексная уборка придомовых территорий, дворов и парковок",
    price: "от 75 ₽/м²",
  },
  {
    icon: Truck,
    title: "Вывоз строймусора",
    description: "Оперативный вывоз строительного мусора после ремонта или демонтажа",
    price: "от 3000 ₽",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Выберите подходящую услугу
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по благоустройству территории круглый год
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-background hover:shadow-hover transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {service.price}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
