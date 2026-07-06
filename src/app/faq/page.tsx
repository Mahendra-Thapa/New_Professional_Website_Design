import Link from "next/link";
import { SectionHeader } from "../components/SectionHeader";
import { FaqAccordion } from "../components/FaqAccordion";
import { PageHero, CTABanner } from "../components/Shared";
import { FAQS } from "../data";

export default function FAQ() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" crumb="FAQ" bg="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="FAQ" heading={<>Common <span className="text-[#0D47A1]">Frequently Asked</span> Questions</>} desc="Everything you need to know about working with MSP Solution. Can't find the answer? Reach out to our team." />
          {/* ── FaqAccordion ── */}
          <FaqAccordion items={FAQS} defaultOpen={0} />
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFF]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white border border-[#E2EAF4] rounded-2xl p-10 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-[#0D47A1]/10 flex items-center justify-center mx-auto mb-5">
              <span className="text-[#0D47A1] text-2xl font-bold">?</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0A1628] mb-3">Still have questions?</h3>
            <p className="text-[#5A7098] mb-7">Our friendly team is always happy to help.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6F00] hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
