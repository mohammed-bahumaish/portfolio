import { allProjects } from "contentlayer/generated";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { Article } from "./article";

export default async function ProjectsPage() {
  const featured = allProjects.find(p => p.title === 'Prisma Editor');
  const restOfProjects = allProjects.filter(p => p.title !== 'Prisma Editor');
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">Selected projects.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {featured && <div className="col-span-1 md:col-span-3">
            <Card>
              <Article project={featured} />
            </Card>
          </div>}
          {restOfProjects
            .map((project) => (
              <div className="col-span-1 h-full" key={project.slug}>
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
