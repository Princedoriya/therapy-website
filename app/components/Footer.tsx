export default function Footer() {
  return (
    <footer className="bg-[#f8f5ec] text-[#3e3e3e] text-center py-12 px-4 font-serif text-[16px]">
      <h2 className="text-3xl font-normal mb-6">
        Dr. Serena Blake, PsyD (Clinical Psychologist)
      </h2>

      <div className="space-y-1 mb-8">
        <p>
          <a href="mailto:serena@blakepsychology.com" className="underline hover:opacity-80">
            serena@blakepsychology.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:2489398150" className="underline hover:opacity-80">
            (323) 555-0192
          </a>{" "}
          Fax: (323) 555-0192
        </p>
        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
      </div>

      <div className="space-x-4 mb-8">
        <a href="#" className="underline hover:opacity-80">
          Home
        </a>
        <a href="#" className="underline hover:opacity-80">
          Privacy Policy
        </a>
        <a href="#" className="underline hover:opacity-80">
          Good Faith Estimate
        </a>
      </div>

      <div className="mb-10">
        <a href="#" className="underline hover:opacity-80">
          Client Portal
        </a>
      </div>

      <p className="text-sm text-[#5e5e5e] font-sans">
        © 2025 Dr. Serena Blake, PsyD (Clinical Psychologist) Services, PLLC. All rights reserved.
      </p>
    </footer>
  );
}
