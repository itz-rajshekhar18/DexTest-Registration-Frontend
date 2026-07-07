import Image from "next/image";
import { Cpu, Sparkles } from "lucide-react";
import { AiIqWebglScene } from "@/components/ai-iq-webgl-scene";
import { Button } from "@/components/ui/button";

const measures = [
  {
    title: "AI Awareness",
    description:
      "Checks basic Artificial Intelligence concepts, smart technology, and how AI appears in daily life.",
  },
  {
    title: "Logical Thinking",
    description:
      "Evaluates reasoning ability, pattern understanding, sequencing, and decision-making skills.",
  },
  {
    title: "Problem Solving",
    description:
      "Measures how students approach challenges and choose practical solutions.",
  },
  {
    title: "Creativity",
    description:
      "Looks at imagination, idea generation, and the ability to apply concepts in new ways.",
  },
  {
    title: "Digital Readiness",
    description:
      "Checks comfort with technology, smart tools, digital learning, and online test environments.",
  },
  {
    title: "Learning Potential",
    description:
      "Identifies how well the student can adapt, learn, and grow in an AI-powered education world.",
  },
];

const benefits = [
  "Personalized AI IQ Test report",
  "AI readiness score",
  "Strength and improvement analysis",
  "Learning recommendation",
  "Parent counselling support",
  "Guidance for AI-powered learning programs",
  "Admission counselling for Dabble College programs",
];

const discounts = [
  {
    score: "Below 60%",
    yearly: "10%",
    admission: "20%",
  },
  {
    score: "60% to 70%",
    yearly: "20%",
    admission: "20%",
  },
  {
    score: "70% to 80%",
    yearly: "30%",
    admission: "20%",
  },
  {
    score: "Above 80%",
    yearly: "40%",
    admission: "20%",
  },
];

const programs = [
  {
    title: "School of Academics",
    description:
      "Structured academic support, concept clarity, worksheets, revision, doubt-solving, and performance improvement.",
  },
  {
    title: "School of AI & Robotics",
    description:
      "Artificial Intelligence, robotics, prompt engineering, digital tools, coding logic, and project-based innovation.",
  },
  {
    title: "School of Sports",
    description:
      "Cricket, skating, drone soccer, yoga, aerobics, zumba, MMA, and fitness-based training for discipline and confidence.",
  },
  {
    title: "School of Arts",
    description:
      "Drama, theatre, professional music, storytelling, voice training, communication, and stage confidence.",
  },
];

const faqs = [
  {
    question: "What is the AI IQ Test?",
    answer:
      "It is a student assessment designed to measure AI awareness, logical thinking, creativity, problem-solving, digital readiness, and learning potential.",
  },
  {
    question: "Who can take the test?",
    answer: "Students from Class 4 to Class 12 can register from any school board.",
  },
  {
    question: "Is the test difficult?",
    answer:
      "No. The test is student-friendly and designed according to the student's level.",
  },
  {
    question: "Will students get a report?",
    answer:
      "Yes. Every student receives a personalized report with score, analysis, recommendations, and suggested learning pathway.",
  },
  {
    question: "Is counselling provided after the test?",
    answer:
      "Yes. Parents can get counselling support to understand the result and choose the right Dabble College program.",
  },
  {
    question: "Can the test help with admission?",
    answer:
      "Yes. The result can recommend suitable programs and may provide admission discount eligibility based on the score.",
  },
];

const inputClass =
  "min-h-12 w-full border border-cyan-300/20 bg-white/[0.04] px-4 py-3 text-sm text-slate-50 outline-none transition focus:border-cyan-300 focus:bg-white/[0.07]";
const labelClass = "text-sm font-medium text-slate-200";
const fieldClass = "flex flex-col gap-2";

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-8 text-slate-300">{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03070d] text-slate-100">
      <section className="relative min-h-screen overflow-hidden border-b border-cyan-300/10 bg-[#03070d]">
        <AiIqWebglScene />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[0.98fr_1.02fr] lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="w-fit border border-cyan-300/25 bg-white px-3 py-2 shadow-[0_0_34px_rgba(34,211,238,0.24)]">
                <Image
                  src="/dextest-logo.jpeg"
                  alt="DexTest logo"
                  width={320}
                  height={180}
                  priority
                  className="h-14 w-auto object-contain sm:h-16"
                />
              </div>
              <div className="inline-flex w-fit items-center gap-2 border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur-md">
                <Cpu className="size-4" aria-hidden="true" />
                DexLabs AI x Dabble College
              </div>
            </div>
            <h1 className="text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
              Discover Your Child&apos;s AI Readiness Score
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The AI IQ Test helps students from Class 4 to Class 12 understand their current awareness, creativity, logical thinking, problem-solving ability, and readiness for the AI-powered future.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#registration"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-cyan-200 bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.38)] transition hover:bg-cyan-200"
              >
                <Sparkles className="size-4" aria-hidden="true" />
                Register Now
              </a>
              <a
                href="#discounts"
                className="inline-flex min-h-12 items-center justify-center border border-cyan-300/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-cyan-100 backdrop-blur-md transition hover:border-cyan-200 hover:bg-white/[0.08]"
              >
                View Discount Slabs
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Classes", "4 to 12"],
                ["Report", "Personalized"],
                ["Counselling", "Parent support"],
              ].map(([label, value]) => (
                <div key={label} className="border border-cyan-300/15 bg-black/35 p-4 backdrop-blur-md">
                  <p className="text-xs uppercase text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[460px] lg:min-h-[620px]">
            <div className="absolute right-0 top-8 w-full max-w-md border border-cyan-300/20 bg-black/25 p-5 backdrop-blur-md shadow-[0_0_70px_rgba(14,165,233,0.12)] sm:p-6">
              <p className="text-xs font-semibold uppercase text-cyan-200">Live AI Readiness Scan</p>
              <div className="mt-5 space-y-4">
                {[
                  ["AI Awareness", "86%"],
                  ["Logic", "78%"],
                  ["Creativity", "92%"],
                  ["Digital Readiness", "81%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-300">{label}</span>
                      <span className="font-semibold text-cyan-200">{value}</span>
                    </div>
                    <div className="h-1.5 bg-white/10">
                      <div className="h-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.7)]" style={{ width: value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-8 left-0 grid w-full max-w-sm grid-cols-2 gap-4">
              <div className="border border-cyan-300/15 bg-cyan-300/10 p-4 backdrop-blur-md">
                <p className="text-3xl font-semibold text-cyan-200">6</p>
                <p className="mt-1 text-sm text-slate-300">core skill areas measured</p>
              </div>
              <div className="border border-cyan-300/15 bg-white/[0.04] p-4 backdrop-blur-md">
                <p className="text-3xl font-semibold text-white">AI+</p>
                <p className="mt-1 text-sm text-slate-300">learning pathway guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">Why Test</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Today&apos;s students need more than textbook knowledge.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Logical thinking",
              "Creativity",
              "Problem-solving skills",
              "Digital awareness",
              "AI tool understanding",
              "Future-ready confidence",
            ].map((item) => (
              <div key={item} className="border border-cyan-300/15 bg-white/[0.04] p-5">
                <div className="mb-4 h-1 w-10 bg-cyan-300" />
                <p className="text-lg font-medium text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="measures" className="border-y border-cyan-300/10 bg-[#06101a] px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What It Measures"
            title="A clear view of student readiness"
            copy="The test evaluates multiple areas of student development, so parents can understand where their child currently stands and what kind of support can help them grow."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {measures.map((measure, index) => (
              <article key={measure.title} className="border border-cyan-300/15 bg-black/35 p-6">
                <p className="text-sm font-semibold text-cyan-300">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{measure.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{measure.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">Benefits</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Every student receives a practical roadmap.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              The report helps parents understand the student&apos;s current position in a simple format, including strengths, improvement areas, recommendations, and suggested program pathway.
            </p>
          </div>
          <div className="grid gap-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-4 border border-cyan-300/15 bg-white/[0.04] p-4">
                <span className="h-3 w-3 shrink-0 bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
                <p className="text-slate-100">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="registration" className="border-y border-cyan-300/10 bg-[#06101a] px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Registration Form"
            title="Register for the AI IQ Test"
            copy="Share student and parent details so the team can coordinate the test, report, counselling, and admission support."
          />
          <form className="mx-auto grid max-w-5xl gap-6 border border-cyan-300/20 bg-black/45 p-5 shadow-[0_0_70px_rgba(14,165,233,0.16)] sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="student-name">Student Name</label>
                <input className={inputClass} id="student-name" name="studentName" required />
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="class">Class</label>
                <select className={inputClass} id="class" name="class" required defaultValue="">
                  <option value="" disabled>Choose class</option>
                  {["4", "5", "6", "7", "8", "9", "10", "11", "12"].map((grade) => (
                    <option key={grade} value={grade}>Class {grade}</option>
                  ))}
                </select>
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="school">School Name</label>
                <input className={inputClass} id="school" name="schoolName" required />
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="age">Age</label>
                <input className={inputClass} id="age" name="age" type="number" min="8" max="19" required />
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="city">City</label>
                <input className={inputClass} id="city" name="city" required />
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="parent-name">Parent Name</label>
                <input className={inputClass} id="parent-name" name="parentName" required />
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="mobile">Mobile Number</label>
                <input className={inputClass} id="mobile" name="mobile" inputMode="tel" required />
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="whatsapp">WhatsApp Number</label>
                <input className={inputClass} id="whatsapp" name="whatsapp" inputMode="tel" required />
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="email">Email ID</label>
                <input className={inputClass} id="email" name="email" type="email" required />
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="interest">Program Interest</label>
                <select className={inputClass} id="interest" name="programInterest" required defaultValue="">
                  <option value="" disabled>Choose interest</option>
                  <option>Academics</option>
                  <option>AI & Robotics</option>
                  <option>Sports</option>
                  <option>Arts</option>
                  <option>Not Sure / Need Counselling</option>
                </select>
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="mode">Preferred Test Mode</label>
                <select className={inputClass} id="mode" name="testMode" required defaultValue="">
                  <option value="" disabled>Choose test mode</option>
                  <option>Online Test</option>
                  <option>Test at Dabble College</option>
                  <option>Test during home counselling visit</option>
                </select>
              </div>
              <div className={fieldClass}>
                <label className={labelClass} htmlFor="slot">Preferred Counselling Slot</label>
                <select className={inputClass} id="slot" name="counsellingSlot" required defaultValue="">
                  <option value="" disabled>Choose slot</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>
            <p className="border border-cyan-300/10 bg-cyan-300/5 p-4 text-sm leading-6 text-slate-300">
              Student data collected during registration will be used only for test coordination, report generation, counselling, and admission support.
            </p>
            <Button
              type="submit"
              className="min-h-12 rounded-none border border-cyan-200 bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.35)] transition hover:bg-cyan-200"
            >
              Submit Registration
            </Button>
          </form>
        </div>
      </section>

      <section id="discounts" className="px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Discount Slabs"
            title="Admission benefits based on AI IQ Score"
            copy="Students may become eligible for special admission benefits at Dabble College based on their AI IQ Test performance. Final discount applies as per admission terms and selected program."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {discounts.map((discount) => (
              <article key={discount.score} className="border border-cyan-300/15 bg-white/[0.04] p-6">
                <p className="text-sm font-semibold text-cyan-300">{discount.score} Score</p>
                <p className="mt-5 text-5xl font-semibold text-white">{discount.yearly}</p>
                <p className="mt-2 text-sm text-slate-300">discount on whole-year fee</p>
                <div className="mt-6 border-t border-cyan-300/15 pt-4">
                  <p className="text-2xl font-semibold text-cyan-200">{discount.admission}</p>
                  <p className="mt-1 text-sm text-slate-300">discount on admission fee</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="border-y border-cyan-300/10 bg-[#06101a] px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Programs"
            title="Explore Dabble College pathways after the test"
            copy={"Based on the student's result and interest, parents can explore academics, AI, sports, arts, and skill development programs under one structured ecosystem."}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {programs.map((program) => (
              <article key={program.title} className="border border-cyan-300/15 bg-black/35 p-6">
                <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
                <p className="mt-4 leading-8 text-slate-300">{program.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            copy="Quick answers for parents and students before registering for the AI IQ Test."
          />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border border-cyan-300/15 bg-white/[0.04] p-5">
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-cyan-300 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(2,6,23,0.96))] p-8 text-center shadow-[0_0_80px_rgba(14,165,233,0.18)] sm:p-12">
          <div className="mx-auto mb-6 w-fit border border-cyan-300/25 bg-white px-3 py-2 shadow-[0_0_34px_rgba(34,211,238,0.2)]">
            <Image
              src="/dextest-logo.jpeg"
              alt="DexTest logo"
              width={320}
              height={180}
              className="h-12 w-auto object-contain sm:h-14"
            />
          </div>
          <p className="text-sm font-semibold uppercase text-cyan-200">Final CTA</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
            Know your child&apos;s AI readiness score and discover the right learning path.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#registration"
              className="inline-flex min-h-12 items-center justify-center border border-cyan-200 bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Register Now
            </a>
            <a
              href="#programs"
              className="inline-flex min-h-12 items-center justify-center border border-cyan-300/30 bg-black/25 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-black/40"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
