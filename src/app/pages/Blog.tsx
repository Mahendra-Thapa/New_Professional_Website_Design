import { SectionHeader } from "../components/SectionHeader";
import { BlogCard } from "../components/BlogCard";
import { PageHero, CTABanner } from "../components/Shared";
import { BLOGS } from "../data";

const EXTRA_BLOGS = [
  { title: "Networking Infrastructure for Small Businesses in Nepal", date: "March 5, 2024", tag: "Networking", img: "https://images.unsplash.com/photo-1571677246347-5040036b95cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
  { title: "Email Security Best Practices Every Business Should Follow", date: "February 18, 2024", tag: "Security", img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
  { title: "Digital Marketing Strategies That Deliver ROI in 2024", date: "January 22, 2024", tag: "Marketing", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
];

const ALL_BLOGS = [...BLOGS, ...EXTRA_BLOGS];

export function Blog() {
  return (
    <>
      <PageHero title="Latest Blogs" crumb="Blog" bg="https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" />

      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Latest Insights" heading={<>Our Latest <span className="text-[#FF6F00]">Popular Blogs</span></>} desc="Stay up to date with the latest in IT, cloud computing, digital marketing, and technology news from our expert team." />

          {/* Bento — uses BlogCard */}
          <div className="grid md:grid-cols-5 gap-5 mb-5">
            <div className="md:col-span-3">
              <BlogCard {...ALL_BLOGS[0]} variant="featured" tagColor="orange" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-5">
              {ALL_BLOGS.slice(1, 3).map((b, i) => (
                <BlogCard key={b.title} {...b} variant="small" tagColor="blue" delay={(i + 1) * 0.1} />
              ))}
            </div>
          </div>

          {/* Full grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {ALL_BLOGS.slice(3).map((b, i) => (
              <BlogCard key={b.title} {...b} variant="medium" tagColor="orange" delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
