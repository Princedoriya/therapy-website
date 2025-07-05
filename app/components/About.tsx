import { containerVariants, itemVariants } from "../utils/motion";
import {
  MotionDiv,
  MotionH2,
  MotionP,
  MotionSection,
} from "./common/motion-wrapper";

export default function About() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative bg-white px-4 sm:px-6 pt-16 sm:pt-30 pb-24 sm:pb-60 text-[#3e4f43] flex items-center"
    >
      <div className="max-w-4xl mx-auto items-center ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">
          {/* Text Content */}
          <div className="flex-1 text-sm leading-relaxed font-sans">
            <MotionH2
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold mb-10 font-serif text-[#7E7E6B]"
            >
              About Dr. Serena Blake
            </MotionH2>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4 text-[#7E7E6B] leading-7"
            >
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma. Whether you meet in her
              Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
              committed to creating a safe, supportive space for you to thrive.
            </MotionP>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=" text-[#7E7E6B] leading-7"
            >
              My therapeutic approach is primarily psychodynamic and humanistic,
              enriched by influences from positive psychology, existentialism,
              family systems theory, acceptance and commitment concepts, and
              mindfulness practices.
            </MotionP>
          </div>

          {/* Image */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 flex justify-center"
          >
            <img
              src="/about.jpg"
              alt="Dr. Serena Blake"
              className="w-full max-w-xs sm:max-w-sm h-auto object-cover rounded-lg shadow-md"
            />
          </MotionDiv>
        </div>

        <div className="absolute bottom-4 sm:bottom-17 border-t-2 border-[#7E7E6B] w-full max-w-4xl mx-auto" />
      </div>
    </MotionSection>
  );
}
