import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ai Resume Analyzer" },
    { name: "description", content: "Our Small Step to Land on Your Dream Job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    
    <section className="main-section">
      <div className="page-heading">
        <h1>Welcome to Ai Resume Analyzer</h1>
        <h2>Review your submissions and check AI-Powered Feedback.</h2>
      </div>
    </section>
  </main>
}
