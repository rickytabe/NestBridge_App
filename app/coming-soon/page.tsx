import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DotGrid from "@/components/DotGrid";

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-ink-black flex flex-col items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 z-0 opacity-70 mix-blend-screen pointer-events-none">
        <DotGrid dotSize={2} gap={32} baseColor="#FFFFFF" activeColor="#3FE0A5" proximity={120} />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-[600px] reveal">
        <div className="inline-flex items-center justify-center bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
          <span className="font-accent text-[13px] font-bold uppercase tracking-[0.15em] text-bridge-green">
            Under Construction
          </span>
        </div>
        
        <h1 className="font-heading text-[clamp(40px,6vw,64px)] text-paper-white leading-[1.1] mb-6 font-medium tracking-[-0.02em]">
          Great things are being built.
        </h1>
        
        <p className="font-body text-[18px] text-white/70 mb-10 leading-[1.6]">
          We are currently crafting the authentication and dashboard experience for NestBridge. 
          Join the waitlist on the home page to get early access when we launch!
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2.5 font-accent font-semibold rounded-full bg-paper-white text-ink-black transition-all duration-300 hover:bg-cloud hover:-translate-y-1 hover:shadow-lg text-[16px] px-8 py-4"
        >
          <ArrowLeft size={18} />
          Return Home
        </Link>
      </div>
    </main>
  );
}
