import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Tag, ExternalLink } from "lucide-react";
import { BLOGS } from "../data";
import { BlogCard } from "../components/BlogCard";
import { CTABanner } from "../components/Shared";

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) return <Navigate to="/blog" replace />;

  const related = BLOGS.filter((b) => b.slug !== slug).slice(0, 3);

  const tagColors: Record<string, string> = {
    "E-Commerce": "bg-[#FF6F00]",
    Technology: "bg-[#0D47A1]",
    Innovation: "bg-emerald-600",
    Governance: "bg-purple-600",
  };
  const tagBg = tagColors[blog.tag] ?? "bg-[#0D47A1]";

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src={blog.img}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/50 to-transparent" />

        {/* Back breadcrumb */}
        <div className="absolute top-6 left-0 right-0 max-w-7xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-10"
        >
          <span
            className={`inline-block ${tagBg} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}
          >
            {blog.tag}
          </span>
          <h1 className="text-white text-2xl md:text-4xl font-extrabold leading-tight max-w-3xl mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {blog.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {blog.time} &nbsp;·&nbsp; {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={14} /> {blog.name}
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Article + Sidebar ── */}
      <section className="bg-[#F8FAFF] py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_340px] gap-12">

          {/* Article body */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Excerpt / intro */}
            <p className="text-lg text-[#3A5270] font-medium leading-relaxed mb-10 border-l-4 border-[#FF6F00] pl-5">
              {blog.excerpt}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {blog.description.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {section.heading && (
                    <h2 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-3">
                      {section.heading}
                    </h2>
                  )}
                  <p className="text-[#4A6280] leading-relaxed text-base">
                    {section.body}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Visit project button */}
            <div className="mt-12 pt-8 border-t border-[#E2EAF4]">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0D47A1] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#0B3D91] transition-colors"
              >
                Visit {blog.name} <ExternalLink size={15} />
              </a>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* About card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl border border-[#E2EAF4] p-6 shadow-sm"
            >
              <h3 className="font-bold text-[#0A1628] text-base mb-3">
                About This Project
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[#5A7098] font-medium">Client</dt>
                  <dd className="text-[#0A1628] font-semibold">{blog.name}</dd>
                </div>
                <div>
                  <dt className="text-[#5A7098] font-medium">Category</dt>
                  <dd>
                    <span
                      className={`inline-block ${tagBg} text-white text-xs font-bold px-2.5 py-0.5 rounded-full`}
                    >
                      {blog.tag}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-[#5A7098] font-medium">Published</dt>
                  <dd className="text-[#0A1628]">{blog.date}</dd>
                </div>
                <div>
                  <dt className="text-[#5A7098] font-medium">Author</dt>
                  <dd className="text-[#0A1628]">{blog.author}</dd>
                </div>
              </dl>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full flex items-center justify-center gap-2 bg-[#F8FAFF] border border-[#E2EAF4] text-[#0D47A1] font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-[#E8F0FE] transition-colors"
              >
                View Live Site <ExternalLink size={13} />
              </a>
            </motion.div>

            {/* Related blogs */}
            {related.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl border border-[#E2EAF4] p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#0A1628] text-base mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {related.map((b) => (
                    <Link
                      key={b.slug}
                      to={`/blog/${b.slug}`}
                      className="flex gap-3 group"
                    >
                      <img
                        src={b.img}
                        alt={b.title}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div>
                        <span
                          className={`inline-block text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 ${
                            tagColors[b.tag] ?? "bg-[#0D47A1]"
                          }`}
                        >
                          {b.tag}
                        </span>
                        <p className="text-[#0A1628] text-xs font-semibold leading-snug group-hover:text-[#0D47A1] transition-colors line-clamp-2">
                          {b.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-[#0D47A1] to-[#1565C0] rounded-2xl p-6 text-white"
            >
              <h3 className="font-bold text-lg mb-2">
                Need a similar solution?
              </h3>
              <p className="text-blue-200 text-sm mb-4">
                Our team at MSP Solution can build your next digital product.
              </p>
              <Link
                to="/contact"
                className="block text-center bg-white text-[#0D47A1] font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* ── More Blogs Grid ── */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8">
              More from Our Blog
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((b, i) => (
                <BlogCard
                  key={b.slug}
                  {...b}
                  variant="medium"
                  tagColor={i % 2 === 0 ? "orange" : "blue"}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
