import clsx from "clsx";
import { AboutMeBento } from "./components/AboutMeBento";
import { AnimatedText } from "./components/AnimatedText";
import { BgGradient } from "./components/BgGradient";
import { BlogPostList } from "./components/BlogPostList";
import { CalendarBento } from "./components/CalendarBento";
import { ChessBento } from "./components/ChessBento";
import { EarlyBeginningsBento } from "./components/EarlyBeginningsBento";
import { FeaturedBlogCard } from "./components/FeaturedBlogCard";
import { GridWrapper } from "./components/GridWrapper";
import { Resume } from "./components/Resume";
import { fetchAndSortBlogPosts } from "./lib/utils";

export default async function Home() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 4);

  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;

  return (
    <section>
      <div className="space-y-10 py-10 md:space-y-16 md:py-16">
        <section className="">
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]"
              >
                Hey, I&apos;m Mohammed!
              </AnimatedText>
              <AnimatedText
                as="p"
                delay={PARAGRAPH_DELAY}
                className="mx-auto mt-3 max-w-2xl text-center text-xl font-normal leading-relaxed text-text-secondary md:mt-4 md:text-2xl"
              >
                Welcome to my corner of the internet!
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="mx-auto max-w-xl text-balance leading-8 text-text-secondary"
                >
                  I’m a software engineer building Arabic voice AI and products
                  that solve real-world problems.
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Passionate about building exceptional web experiences
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
              <div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-6">
                <AboutMeBento />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-8">
                <EarlyBeginningsBento />
              </div>

              <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                <ChessBento />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
                <CalendarBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Experience Section */}
        <section className="relative space-y-10 md:space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                My professional journey and achievements.
              </h2>
            </GridWrapper>
          </div>
          <GridWrapper>
            <Resume />
          </GridWrapper>
        </section>

        {/* Projects Section */}
        <section className="relative space-y-10 md:space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Projects</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                A collection of my notable works.
              </h2>
            </GridWrapper>
          </div>
          <GridWrapper className="space-y-12">
            {[
              {
                title: "Prisma Editor",
                description:
                  "An open-source tool for real-time Prisma schema visualization and editing with AI-powered code generation. The project has grown to over 900 GitHub stars and has been recognized in top developer communities.",
                image: "/projects/prisma-editor.png",
                url: "https://github.com/mohammed-bahumaish/prisma-editor",
              },
            ].map((project) => (
              <div key={project.title} className="space-y-12">
                <GridWrapper className="px-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="drama-shadow rounded-xl"
                  />
                </GridWrapper>
                <GridWrapper className="px-10">
                  <div className="max-w-2xl text-balance">
                    <h2 className="mb-3 text-2xl font-medium leading-6 tracking-tight text-slate-900 md:leading-none">
                      {project.title}
                    </h2>
                    <p className="mb-3 flex-grow text-base leading-6 text-text-secondary">
                      {project.description}
                    </p>
                    <a
                      className="inline-flex items-center text-sm font-medium text-indigo-600"
                      href={project.url}
                    >
                      Visit {project.title}
                      <svg
                        className="relative ml-2.5 mt-px overflow-visible"
                        width="3"
                        height="6"
                        viewBox="0 0 3 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M0 0L3 3L0 6"></path>
                      </svg>
                    </a>
                  </div>
                </GridWrapper>
              </div>
            ))}
          </GridWrapper>
        </section>

        {/* Blog Section */}
        {allPublishedBlogPosts.length > 0 && (
          <section className="relative space-y-10 md:space-y-16">
            <div className="relative space-y-4 text-balance">
              <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
                <BgGradient />
              </span>
              <GridWrapper>
                <div className="text-center text-sm font-medium text-indigo-600">
                  <span>Blog</span>
                </div>
              </GridWrapper>
              <GridWrapper>
                <h2 className="mx-auto max-w-lg text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:text-4xl">
                  Sharing insights on development, tech, and best practices
                </h2>
              </GridWrapper>
            </div>

            <div className="z-10">
              <GridWrapper>
                <ul className="z-50 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                  {featuredArticles.length > 0 ? (
                    <>
                      {featuredArticles.slice(0, 4).map((post, index) => (
                        <FeaturedBlogCard
                          key={post.slug}
                          slug={post.slug}
                          imageName={post.imageName}
                          title={post.title}
                          summary={post.summary}
                          className={clsx(
                            // Hide the fourth article on mobile and desktop
                            index === 3 && "hidden md:block lg:hidden",
                          )}
                        />
                      ))}
                    </>
                  ) : (
                    <p>Nothing to see here yet...</p>
                  )}
                </ul>
              </GridWrapper>

              <div className="mt-16">
                <BlogPostList posts={allPublishedBlogPosts} />
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
