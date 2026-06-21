import { SectionHeader } from "../components/SectionHeader";
import { BlogCard } from "../components/BlogCard";
import { PageHero, CTABanner } from "../components/Shared";
import { BLOGS } from "../data";

export function Blog() {
  return (
    <>
      <PageHero
        title="Latest Blogs"
        crumb="Blog"
        bg="https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
      />

      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Latest Insights"
            heading={
              <>
                Our Latest <span className="text-[#FF6F00]">Popular Blogs</span>
              </>
            }
            desc="Stay up to date with the latest in IT, cloud computing, digital marketing, and technology news from our expert team."
          />

          {/* Bento — featured + 2 small */}
          <div className="grid md:grid-cols-5 gap-5 mb-5">
            <div className="md:col-span-3">
              <BlogCard
                {...BLOGS[0]}
                variant="featured"
                tagColor="orange"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-5">
              {BLOGS.slice(1, 3).map((b, i) => (
                <BlogCard
                  key={b.slug}
                  {...b}
                  variant="small"
                  tagColor="blue"
                  delay={(i + 1) * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Full grid — remaining blogs */}
          {BLOGS.length > 3 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              {BLOGS.slice(3).map((b, i) => (
                <BlogCard
                  key={b.slug}
                  {...b}
                  variant="medium"
                  tagColor="orange"
                  delay={i * 0.1}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
