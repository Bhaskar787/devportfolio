import type { ContactMessage } from "@shared/schema";

// In-memory storage for contact messages
let messages: ContactMessage[] = [];

export function saveMessage(message: Omit<ContactMessage, "id" | "createdAt">): ContactMessage {
  const newMessage: ContactMessage = {
    ...message,
    id: messages.length + 1,
    createdAt: new Date(),
  };
  messages.push(newMessage);
  
  // Log to console for convenience
  console.log("📧 New Contact Message:", newMessage);
  console.log("📋 All Messages:", messages);
  
  // Also store in localStorage for persistence
  try {
    localStorage.setItem("contactMessages", JSON.stringify(messages));
  } catch (e) {
    console.warn("Could not save to localStorage:", e);
  }
  
  return newMessage;
}

export function getAllMessages(): ContactMessage[] {
  // Try to load from localStorage first
  try {
    const stored = localStorage.getItem("contactMessages");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert createdAt strings back to Date objects
      messages = parsed.map((msg: any) => ({
        ...msg,
        createdAt: new Date(msg.createdAt),
      }));
    }
  } catch (e) {
    console.warn("Could not load from localStorage:", e);
  }
  
  return messages;
}

export function clearMessages(): void {
  messages = [];
  try {
    localStorage.removeItem("contactMessages");
  } catch (e) {
    console.warn("Could not clear localStorage:", e);
  }
}
