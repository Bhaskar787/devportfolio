import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, Code } from "lucide-react";

export default function About() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Express", 
    "MongoDB", "PostgreSQL", "Tailwind CSS", "Next.js", "Git", "Docker", "AWS"
  ];

  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Leading a team of 5 developers building scalable web applications. Implemented CI/CD pipelines and improved app performance by 40%."
    },
    {
      role: "Frontend Developer",
      company: "Creative Agency",
      period: "2019 - 2021",
      description: "Developed responsive websites for high-profile clients. Collaborated with designers to implement pixel-perfect UIs using React."
    },
    {
      role: "Junior Web Developer",
      company: "Startup Hub",
      period: "2018 - 2019",
      description: "Maintained legacy codebases and added new features using jQuery and PHP. Learned modern JS frameworks."
    }
  ];

  const education = [
    {
      degree: "B.S. Computer Science",
      school: "University of Technology",
      period: "2014 - 2018",
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Passionate about clean code and user-centric design. I bridge the gap between technical complexity and intuitive user experiences.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Bio & Skills */}
        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-primary/20 p-2 rounded-lg text-primary"><Code className="w-5 h-5" /></span>
              My Story
            </h2>
            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p className="mb-4">
                I started my journey into web development 6 years ago, tinkering with HTML and CSS in my dorm room. What began as curiosity quickly turned into an obsession with building things for the web.
              </p>
              <p>
                Today, I specialize in the MERN stack (MongoDB, Express, React, Node.js). I love the challenge of solving complex problems and the satisfaction of shipping high-quality code. When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (i * 0.05) }}
                  className="px-4 py-2 bg-secondary/50 border border-white/5 rounded-full text-sm font-medium hover:border-primary/50 hover:bg-secondary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="bg-accent/20 p-2 rounded-lg text-accent"><Briefcase className="w-5 h-5" /></span>
              Experience
            </h2>
            <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
              {experience.map((job, i) => (
                <div key={i} className="relative group">
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground group-hover:bg-primary transition-colors" />
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mt-1 mb-2">
                    <Briefcase className="w-4 h-4" />
                    {job.company}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {job.period}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><GraduationCap className="w-5 h-5" /></span>
              Education
            </h2>
            <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
              {education.map((edu, i) => (
                <div key={i} className="relative group">
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground group-hover:bg-blue-400 transition-colors" />
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mt-1 mb-2">
                    {edu.school}
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
