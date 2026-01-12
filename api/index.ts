import type { VercelRequest, VercelResponse } from "@vercel/node";

// Simple API handler for Vercel
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle API routes
  if (req.url?.startsWith("/api/contact")) {
    if (req.method === "POST") {
      // Handle contact form submission
      const { name, email, message } = req.body;
      
      // Validate
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "All fields are required",
          field: "name"
        });
      }

      // Return success (messages are stored locally in the client)
      return res.status(201).json({
        id: Date.now(),
        name,
        email,
        message,
        createdAt: new Date().toISOString()
      });
    }
  }

  if (req.url?.startsWith("/api/projects")) {
    if (req.method === "GET") {
      // Return empty array - projects are loaded from client-side data
      return res.status(200).json([]);
    }
  }

  // Default 404
  return res.status(404).json({ message: "Not found" });
}
