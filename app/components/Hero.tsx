import { MotionDiv, MotionH1, MotionH2, MotionP, MotionSection } from "./common/motion-wrapper";

export default function Hero() {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      className="bg-[#f4f1e9] py-6"
    >
      {/* Container for logo + video content */}
      <div className="mx-4 sm:mx-14 mb-9">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 50, duration: 0.8 }}
          className="flex items-center space-x-4 mb-12 mt-7"
        >
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <div className="text-[#3e4f43] leading-tight">
            <p className="font-medium text-lg">Dr. Serena Blake</p>
            <p className="text-sm"> PsyD (Clinical Psychologist)</p>
          </div>
        </MotionDiv>

        {/* Hero Video Section */}
        <div className="relative w-full h-[60vh] sm:h-[92vh] overflow-hidden flex justify-center items-center">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/vid.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 50, duration: 0.8 }}
            className="absolute inset-0 bg-black/30 z-10"
          />

          {/* Foreground Text */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 50, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium leading-tight mb-5"
            >
              Psychological Care for
            </MotionH1>
            <MotionH2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 50, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-6"
            >
              Change, Insight, and Well-Being
            </MotionH2>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 50, duration: 0.8 }}
              className="text-sm sm:text-md md:text-base max-w-5xl mb-6"
            >
              Offering individual psychotherapy for adults via telehealth in Michigan and most{" "}
              <a href="#" className="underline">
                U.S. states
              </a>{" "}
              through PSYPACT participation
            </MotionP>
            <a
              href="#contact"
              className="bg-[#a3b9b4] text-white text-xs sm:text-sm md:text-base font-semibold px-6 sm:px-9 py-6 sm:py-9 rounded-[50%] tracking-wider shadow-md hover:opacity-60 transition"
            >
              SCHEDULE A CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
