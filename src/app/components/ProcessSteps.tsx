import { motion } from "motion/react";

interface Props {
  steps: string[];
}

export function ProcessSteps({ steps }: Props) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex items-start gap-4"
        >
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/15 border-2 border-[#FF6F00] flex items-center justify-center text-white font-bold text-sm shrink-0">
              {i + 1}
            </div>
            {i < steps.length - 1 && <div className="w-0.5 h-8 bg-white/20 my-1" />}
          </div>
          <div className="pt-2.5">
            <span className="text-white font-semibold text-base">{step}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
