import { ServiceCard } from "@/components/ServiceCard";
import { Code2, Globe, Layout, Database, Smartphone, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building fast, responsive, and SEO-friendly websites using modern frameworks like React and Next.js.",
      icon: Globe,
    },
    {
      title: "MERN Stack Apps",
      description: "Full-stack application development using MongoDB, Express, React, and Node.js for scalable solutions.",
      icon: Database,
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning user interfaces that provide exceptional user experiences.",
      icon: Layout,
    },
    {
      title: "API Development",
      description: "Designing and implementing robust RESTful and GraphQL APIs for seamless data communication.",
      icon: Code2,
    },
    {
      title: "Mobile Friendly",
      description: "Ensuring applications look and perform perfectly across all devices, from desktops to smartphones.",
      icon: Smartphone,
    },
    {
      title: "Performance Optimization",
      description: "Auditing and improving application speed, accessibility, and overall performance metrics.",
      icon: Rocket,
    },
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          My Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          I offer a comprehensive range of digital services to help businesses grow and succeed online.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            delay={index * 0.1}
          />
        ))}
      </div>
      
      {/* Call to action */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-primary/20 via-card to-accent/20 border border-white/10 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
        <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Let's discuss how I can help bring your ideas to life. I'm currently available for freelance projects.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:-translate-y-1"
        >
          Start a Conversation
        </a>
      </motion.div>
    </div>
  );
}
