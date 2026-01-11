import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-white/5 shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50"
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        {/* Placeholder for project image if none provided */}
        <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-muted-foreground">
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          ) : (
            <span className="text-4xl font-display opacity-20">{project.title[0]}</span>
          )}
        </div>
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.githubLink && (
            <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 hover:bg-white hover:text-black" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          )}
          {project.liveLink && (
            <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 hover:bg-primary hover:text-white" asChild>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary/50 text-xs font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-2xl bg-card border border-white/5 overflow-hidden h-[400px] animate-pulse">
      <div className="h-48 bg-muted/50" />
      <div className="p-6 space-y-4">
        <div className="h-6 w-2/3 bg-muted/50 rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted/50 rounded" />
          <div className="h-4 w-5/6 bg-muted/50 rounded" />
        </div>
        <div className="pt-4 flex gap-2">
          <div className="h-6 w-16 bg-muted/50 rounded-full" />
          <div className="h-6 w-16 bg-muted/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
