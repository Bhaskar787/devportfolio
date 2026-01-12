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
      const error = err as any;
      if (error.name === 'AggregateError' || error.code === 'ECONNREFUSED' || 
          (error.errors && error.errors.some((e: any) => e.code === 'ECONNREFUSED'))) {
        return res.status(503).json({ 
          message: "Database connection failed. Please ensure PostgreSQL is running.",
          error: "ECONNREFUSED"
        });
      }
      throw err;
    }
  });

  // Get Projects
  app.get(api.projects.list.path, async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (err: any) {
      // Handle AggregateError from pg-pool
      if (err.name === 'AggregateError' || err.code === 'ECONNREFUSED' || 
          (err.errors && err.errors.some((e: any) => e.code === 'ECONNREFUSED'))) {
        return res.status(503).json({ 
          message: "Database connection failed. Please ensure PostgreSQL is running.",
          error: "ECONNREFUSED"
        });
      }
      throw err;
    }
  });

  // Seed Data (if empty) - non-blocking
  seedDatabase().catch((err) => {
    console.error("Failed to seed database:", err.message);
    console.error("Make sure PostgreSQL is running and DATABASE_URL is correct in .env");
  });

  return httpServer;
}

async function seedDatabase() {
  try {
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
  } catch (err: any) {
    // Handle AggregateError from pg-pool
    if (err.name === 'AggregateError' || err.code === 'ECONNREFUSED' || 
        (err.errors && err.errors.some((e: any) => e.code === 'ECONNREFUSED'))) {
      throw new Error("Cannot connect to PostgreSQL. Please ensure PostgreSQL is running and DATABASE_URL in .env is correct.");
    }
    throw err;
  }
}
