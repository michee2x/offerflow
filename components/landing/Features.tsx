import { Box, Layers, Zap, Mail, ChevronRight } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Layers,
      title: "Funnel Strategist",
      desc: "AI plans your entire funnel logic based on your specific offer type and audience.",
      detail: "Extracts offer intelligence from URL/Files."
    },
    {
      icon: Zap,
      title: "Copywriter",
      desc: "High-conversion copy generated for every page, email, and ad in your funnel.",
      detail: "Headlines, bullets, and sales arguments."
    },
    {
      icon: Box,
      title: "Designer",
      desc: "Beautiful, responsive page layouts automatically generated to match your brand.",
      detail: "Auto-generates Lead, Sales, and Thank You pages."
    },
    {
      icon: Mail,
      title: "Email Marketer",
      desc: "Automated follow-up sequences to nurture leads and close sales 24/7.",
      detail: "AI-generated follow-up sequences."
    }
  ];

  return (
    <section className="bg-black py-24 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose OfferFlow?</h2>
          <p className="mt-4 text-lg text-zinc-400">Everything you need to monetize your offer, generated in minutes.</p>
        </div>

        <div className="grid gap-px bg-white/10 border border-white/10 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden">
          {features.map((feature, i) => (
            <div key={i} className="group relative bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#00ffb2]/10 text-[#00ffb2]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400 mb-4">{feature.desc}</p>
              
              <div className="flex items-center text-xs font-medium text-[#00ffb2] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  {feature.detail}
                  <ChevronRight className="h-3 w-3 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
