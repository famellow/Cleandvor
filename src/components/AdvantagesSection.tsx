import { motion } from "framer-motion";
import { Shield, Users, Clock, Award, Wrench, HeadphonesIcon } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Если вас что-то не устроит — переделаем бесплатно",
  },
  {
    icon: Users,
    title: "Опытная команда",
    description: "Все сотрудники прошли обучение и имеют опыт от 2 лет",
  },
  {
    icon: Clock,
    title: "Выезд в день заявки",
    description: "Оперативный выезд в течение 2-3 часов после обращения",
  },
  {
    icon: Award,
    title: "Застрахованы",
    description: "Полная материальная ответственность за ваше имущество",
  },
  {
    icon: Wrench,
    title: "Своя техника",
    description: "Современное оборудование для любых задач благоустройства",
  },
  {
    icon: HeadphonesIcon,
    title: "Поддержка 24/7",
    description: "Отвечаем на вопросы и принимаем заявки круглосуточно",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Почему мы
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Преимущества работы с CleanDvor
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Мы заботимся о каждом клиенте и делаем всё, чтобы ваша территория 
              была ухоженной в любое время года. Наша команда профессионалов 
              готова решить любые задачи по благоустройству!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "5+", label: "Лет опыта" },
                { value: "1000+", label: "Объектов" },
                { value: "98%", label: "Довольных" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advantages Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
