import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

export default async function ProjectsPage() {
  const featured = allProjects[0];
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
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative h-full w-full p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <div className="text-xs text-zinc-100">
                    {featured.date && (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    )}
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold  text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
              </article>
            </Link>
          </Card>

          {/* <div className="flex flex-col w-full gap-8  mx-auto border-t border-gray-900/10  lg:mx-0  lg:border-t-0 ">
            {[allProjects[0], allProjects[0]].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={0} />
              </Card>
            ))}
          </div> */}
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        {/* <div className="grid  grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {allProjects
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {allProjects
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {allProjects
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={0} />
                </Card>
              ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
