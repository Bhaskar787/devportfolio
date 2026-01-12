import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Trash2, Calendar, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllMessages, clearMessages } from "@/data/messages";
import type { ContactMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function Messages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = () => {
    const allMessages = getAllMessages();
    setMessages(allMessages);
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all messages?")) {
      clearMessages();
      setMessages([]);
      toast({
        title: "Messages Cleared",
        description: "All messages have been removed.",
      });
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Messages</h1>
          <p className="text-muted-foreground">
            View all messages received through the contact form
          </p>
        </div>
        {messages.length > 0 && (
          <Button variant="destructive" onClick={handleClear}>
            <Trash2 className="mr-2 h-4 w-4" />
            Clear All
          </Button>
        )}
      </div>

      {messages.length === 0 ? (
        <Card className="border-white/5">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Mail className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Messages Yet</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Messages submitted through the contact form will appear here.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="border-white/5 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/20 p-2 rounded-lg">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{message.name}</CardTitle>
                        <Badge variant="secondary" className="ml-auto">
                          #{message.id}
                        </Badge>
                      </div>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Mail className="h-4 w-4" />
                        {message.email}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                        {message.message}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-white/5">
                      <Calendar className="h-4 w-4" />
                      <span>Received on {formatDate(message.createdAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Debug Info */}
      {process.env.NODE_ENV === "development" && messages.length > 0 && (
        <Card className="mt-8 border-white/5 bg-muted/20">
          <CardHeader>
            <CardTitle className="text-sm">Debug: Messages Object</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs overflow-auto bg-background/50 p-4 rounded-lg border border-white/5">
              {JSON.stringify(messages, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
