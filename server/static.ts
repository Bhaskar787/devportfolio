import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // For Vercel, static files are served from dist/public
  const distPath = process.env.VERCEL 
    ? path.resolve(process.cwd(), "dist", "public")
    : path.resolve(__dirname, "public");
    
  if (!fs.existsSync(distPath)) {
    console.warn(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
    return;
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Not found");
    }
  });
}
