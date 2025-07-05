import {
  MotionDiv,
  MotionH2,
  MotionH3,
  MotionP,
} from "./common/motion-wrapper";

export default function Services() {
  return (
    <section className="bg-[#f5f1e9] px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-24 text-[#3e4f43] flex items-start">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between">
        {/* Intro Heading and Paragraph */}
        <div className="text-center mb-16">
          <MotionH2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-serif mb-4"
          >
            Therapy can be a space where you invest in yourself—
            <br />
            <span className="block mt-2">
              one of the highest forms of self-care.
            </span>
          </MotionH2>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm max-w-3xl mx-auto leading-7 text-[#3e4f43]"
          >
            You may be led to therapy by anxiety, depression, relationship
            stress, past or recent trauma, grief and loss, self-esteem issues,
            or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don’t have to face it alone.
            Therapy offers you the time and space to work toward wellness and
            peace.
          </MotionP>

          {/* Border Line */}
          <hr className="mt-16 mb-14 border-t-2 border-[#7E7E6B] w-full max-w-6xl mx-auto" />
        </div>

        {/* Areas of Focus Title */}
        <div className="mb-20 text-center">
          <MotionH3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-serif"
          >
            Areas of Focus
          </MotionH3>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 flex-grow">
          {/* Item 1 */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center px-4"
          >
            <img
              src="/service1.png"
              alt="Healthcare Providers"
              className="w-90 h-90 rounded-full object-cover shadow-md mb-7"
            />
            <h4 className="text-lg font-medium mb-5">
              Anxiety & Stress Management
            </h4>
            <p className="text-sm leading-7">
              Whether you&apos;re facing daily overwhelm or chronic anxiety, we
              help you understand your triggers, build emotional resilience, and
              develop tools to navigate life with greater calm, clarity, and
              confidence.
            </p>
          </MotionDiv>

          {/* Item 2 */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center px-4"
          >
            <img
              src="/service2.jpg"
              alt="Trauma and Grief"
              className="w-90 h-90 rounded-full object-cover shadow-md mb-7"
            />
            <h4 className="text-lg font-medium mb-5">
              Relationship Counseling
            </h4>
            <p className="text-sm leading-7">
              Every relationship faces challenges—be it misunderstandings,
              distance, or unspoken tension. We provide a safe space to explore
              emotions and strengthen the bond between you and your partner.
            </p>
          </MotionDiv>

          {/* Item 3 */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center text-center px-4"
          >
            <img
              src="/service3.jpg"
              alt="Immigrant Families"
              className="w-90 h-90 rounded-full object-cover shadow-md mb-7"
            />
            <h4 className="text-lg font-medium mb-5">Trauma Recovery</h4>
            <p className="text-sm leading-7">
              Healing from trauma takes time, compassion, and support. We create
              a safe, non-judgmental space to help you process painful
              experiences, regain a sense of control, and move forward with
              resilience and self-trust.
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
