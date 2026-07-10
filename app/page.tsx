import PageWrapper from "@/components/PageWrapper";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";

export default async function Home() {
  let projects = null;

  try {
    await connectDB();
    const raw = await Project.find().sort({ order: 1, createdAt: -1 }).lean();
    projects = JSON.parse(JSON.stringify(raw));
  } catch {
    // fall back to static projects in Projects component
  }

  return <PageWrapper projects={projects} />;
}
