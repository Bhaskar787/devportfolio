import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { defaultProjects } from "@/data/projects";
import type { Project } from "@shared/schema";

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: [api.projects.list.path],
    staleTime: 5 * 60 * 1000,
    retry: false,
    queryFn: async () => {
      try {
        const res = await fetch(api.projects.list.path);
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        return api.projects.list.responses[200].parse(data);
      } catch (err) {
        // Fall back to bundled defaults when API/database is unavailable.
        console.warn("Falling back to default projects:", err);
        return defaultProjects;
      }
    },
    initialData: defaultProjects,
  });
}
