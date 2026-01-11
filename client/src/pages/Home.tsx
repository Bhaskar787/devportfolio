import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center min-h-[calc(100vh-4rem)] py-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/10 text-sm text-primary mb-6 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for Freelance
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Hi, I'm <br />
                <span className="text-gradient">Alex Dev</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                A Full-Stack Developer specializing in building exceptional digital experiences. 
                I transform ideas into robust, scalable, and beautiful applications.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/10 hover:bg-secondary">
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 text-muted-foreground"
            >
              <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 duration-200">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <div className="h-8 w-[1px] bg-white/10 mx-2" />
              <div className="flex -space-x-3">
                {/* Random User Avatars for social proof */}
                <div className="w-10 h-10 rounded-full border-2 border-background bg-gray-700 flex items-center justify-center text-xs">A</div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-gray-600 flex items-center justify-center text-xs">B</div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-gray-500 flex items-center justify-center text-xs">C</div>
              </div>
              <span className="text-sm">Trusted by clients</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl -z-10" />
            
            {/* Unsplash abstract tech image */}
            {/* technology code computer screen dark */}
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card">
              <div className="absolute top-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="p-1 pt-9">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60" 
                  alt="Coding setup"
                  className="rounded-xl w-full"
                />
              </div>
              
              {/* Floating cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                  <div className="h-6 w-6 flex items-center justify-center font-bold text-xs">JS</div>
                </div>
                <div>
                  <div className="text-sm font-bold">JavaScript</div>
                  <div className="text-xs text-muted-foreground">Expert</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-card/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                  <div className="h-6 w-6 flex items-center justify-center font-bold text-xs">TS</div>
                </div>
                <div>
                  <div className="text-sm font-bold">TypeScript</div>
                  <div className="text-xs text-muted-foreground">Mastery</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
