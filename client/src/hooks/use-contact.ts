import { useMutation } from "@tanstack/react-query";
import { api, type ContactMessageInput } from "@shared/routes";
import { saveMessage } from "@/data/messages";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactMessageInput) => {
      const validated = api.contact.submit.input.parse(data);
      
      try {
        const res = await fetch(api.contact.submit.path, {
          method: api.contact.submit.method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(validated),
        });

        if (!res.ok) {
          if (res.status === 400) {
            const error = api.contact.submit.responses[400].parse(await res.json());
            throw new Error(error.message);
          }
          throw new Error("Failed to submit contact form");
        }
        
        return api.contact.submit.responses[201].parse(await res.json());
      } catch (error: any) {
        // If API fails, save locally instead
        console.warn("API failed, saving message locally:", error.message);
        const savedMessage = saveMessage(validated);
        return savedMessage;
      }
    },
  });
}
