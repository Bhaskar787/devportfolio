import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact Form Submission
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Get Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Seed Data (if empty)
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    const seedProjects = [
      {
        title: "E-Commerce Platform",
        description: "A full-featured online store with shopping cart, user authentication, and payment processing integration.",
        techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        githubLink: "https://github.com",
        liveLink: "https://example.com"
      },
      {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team workspaces.",
        techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
        imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
        githubLink: "https://github.com",
        liveLink: "https://example.com"
      },
      {
        title: "Weather Dashboard",
        description: "Responsive weather application providing 7-day forecasts, severe weather alerts, and historical data visualization.",
        techStack: ["React", "OpenWeatherMap API", "Chart.js"],
        imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
        githubLink: "https://github.com",
        liveLink: "https://example.com"
      },
      {
        title: "Social Media Analytics",
        description: "Dashboard for tracking social media engagement, follower growth, and post performance across multiple platforms.",
        techStack: ["Angular", "Express", "PostgreSQL", "D3.js"],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        githubLink: "https://github.com",
        liveLink: "https://example.com"
      }
    ];

    for (const project of seedProjects) {
      await storage.createProject(project);
    }
    console.log("Seeded database with initial projects");
  }
}
