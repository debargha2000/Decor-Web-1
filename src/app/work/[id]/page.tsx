import { notFound } from "next/navigation";
import projectsData from "../../../../content/projects.json";
import Footer from "@/components/Footer";
import ClientProjectDetails from "./ClientProjectDetails";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = projectsData.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <ClientProjectDetails project={project} />
      <Footer />
    </main>
  );
}
