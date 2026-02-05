import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Artists } from "@/components/Artists";
import { Portfolio } from "@/components/Portfolio";
import { Aftercare } from "@/components/Aftercare";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";
import { StudioInfo } from "@/components/StudioInfo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Artists />
      <Portfolio />
      <Aftercare />
      <Testimonials />
      <BookingForm />
      <StudioInfo />
      <Footer />
    </main>
  );
}
