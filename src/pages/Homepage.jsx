import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  FaCamera,
  FaCheckCircle,
  FaClock,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaTools,
} from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

const highlights = [
  {
    icon: FaCamera,
    title: 'Report with photos',
    text: 'Capture potholes or damaged roads quickly and attach clear image evidence.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Track locations',
    text: 'Pin reports to streets, junctions, and neighborhoods with clear location details.',
  },
  {
    icon: FaCheckCircle,
    title: 'Make payments',
    text: 'Support repair requests with a simple and secure payment flow.',
  },
]

const serviceCards = [
  {
    icon: FaTools,
    title: 'Repair requests',
    text: 'Log potholes, broken drainage edges, loose slabs, and small roadside fixes.',
  },
  {
    icon: FaShieldAlt,
    title: 'Verified handoff',
    text: 'Move each request through review, assignment, and confirmation clearly.',
  },
  {
    icon: FaClock,
    title: 'Status updates',
    text: 'Keep the repair journey visible from submission to completion.',
  },
]

const statusItems = [
  { label: 'Pending review', tone: 'pending' },
  { label: 'In progress', tone: 'progress' },
  { label: 'Completed', tone: 'success' },
]

const featureRows = [
  { label: 'Coverage', value: 'Urban roads and neighborhood streets' },
  { label: 'Visibility', value: 'Simple progress tracking' },
  { label: 'Response', value: 'Fast routing to the right team' },
]

const issueTypes = [
  'Potholes and surface cracks',
  'Broken drainage edges',
  'Loose slabs and shoulder damage',
  'Blocked roadside repairs',
]

const platformBenefits = [
  'Submit a report in a few steps.',
  'Add photos and exact location details.',
  'Follow every update without calling around.',
]

const steps = [
  'Report a pothole or damaged road with photos and exact location.',
  'Review, assign, and schedule the right repair team.',
  'Track the work until completion and inspection.',
]

const Homepage = () => {
  return (
    <div id="top" className="min-h-screen bg-bg-main text-text-main">
      <Navbar />

      <main className="page-reveal">
        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div className="space-y-4 sm:space-y-5">
             

              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-text-main sm:text-5xl lg:text-6xl">
                Report road damage with clarity.
              </h1>

              <p className="max-w-xl text-sm leading-7 text-text-muted sm:text-lg sm:leading-8">
                Life grid construction helps people report potholes, attach photos, and follow repairs in one simple place.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-cta px-6 py-3 text-sm font-semibold text-brand-white transition-colors hover:bg-accent-hover"
                >
                  Start report
                  <FiArrowRight />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/20 px-6 py-3 text-sm font-semibold text-text-main transition-colors hover:border-primary hover:text-primary"
                >
                  How it works
                </a>
              </div>

              <div className="hidden gap-3 pt-2 sm:grid sm:grid-cols-3 sm:gap-4">
                {['Upload photos', 'Make payment', 'Track progress'].map((item) => (
                  <div key={item} className="rounded-md border border-primary/15 bg-bg-surface px-4 py-4 text-sm font-medium text-text-main">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[24rem] border border-primary/15 bg-bg-surface p-2">
<img class="w-full h-full object-cover" data-alt="A professional close-up of a high-quality asphalt road being repaired by modern construction equipment in a bright Nigerian daylight setting. The scene is crisp and industrial, featuring a palette of safety orange, steel blue, and dark asphalt grey. The lighting is harsh and direct, emphasizing the texture of the materials and the clean, flat aesthetic of the infrastructure project. No shadows or gradients are visible, maintaining a high-contrast functional look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0dEIEUMVzw5x0vMMTDJ2j55exg75mKZ3gCpZXbayfH7vCPfW2IjlCMNbOCTQjgAajfe5yyCUCBGtZKcRQ7SxxLUWRtAL9eCeKqGu-Tqa-NnN9Hk-cTkVMaYkYDOgqoPzLJGzJX47DYOHXdoVcXLy_8L11Itas_wJ_f1JHj62JY2Zp7ilzGI8lLOoGfbxlzNBJUrAvdWqNEqqBaeECUwDXggxNhvOc6bwlRgwEO9F-M7kuKe_P0e9Yh8IALfCwGH3JdSRYSWZVa70"/>



              {/* <img
                src={heroImage}
                alt="Road repair team working on damaged road surface"
                className="block w-full rounded-md border border-primary/15 object-cover"
              /> */}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
          <div className="mb-5 sm:mb-6">
            <h2 className="text-2xl font-black tracking-tight text-text-main sm:text-3xl">
              What the platform helps with
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
              Keep road repair reporting and follow-up simple for residents and teams.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-md border border-primary/15 bg-bg-surface p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <item.icon className="text-xl" />
                </div>
                <h2 className="mt-5 text-lg font-bold text-text-main">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-6 border border-primary/15 bg-bg-surface p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-accent-cta/10 px-4 py-2 text-sm font-medium text-accent-cta">
                Simple workflow
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-text-main sm:text-4xl">
                Clear steps for every repair request.
              </h2>
              <p className="mt-4 text-base leading-8 text-text-muted">
                From submission to completion, the flow stays simple for everyone involved.
              </p>
            </div>

            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-md bg-primary/5 px-4 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-bg-surface text-sm font-bold text-primary">
                    0{index + 1}
                  </div>
                  <div className="text-sm leading-7 text-text-main">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border border-primary/15 bg-bg-surface p-6">
              <h2 className="text-2xl font-black tracking-tight text-text-main sm:text-3xl">
                Common issue types
              </h2>
              <p className="mt-2 text-sm leading-7 text-text-muted sm:text-base">
                The platform can start with the most common road problems people report every day.
              </p>
              <div className="mt-5 grid gap-3">
                {issueTypes.map((item) => (
                  <div key={item} className="rounded-md bg-primary/5 px-4 py-3 text-sm font-medium text-text-main">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-primary/15 bg-bg-surface p-6">
              <h2 className="text-2xl font-black tracking-tight text-text-main sm:text-3xl">
                Why it stays simple
              </h2>
              <div className="mt-5 grid gap-3">
                {platformBenefits.map((item) => (
                  <div key={item} className="rounded-md border border-primary/15 px-4 py-3 text-sm text-text-main">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
          <div className="grid gap-6 md:grid-cols-3">
            {serviceCards.map((item) => (
              <article key={item.title} className="rounded-md border border-primary/15 bg-bg-surface p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-cta/10 text-accent-cta">
                  <item.icon className="text-xl" />
                </div>
                <h2 className="mt-5 text-lg font-bold text-text-main">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-6 border border-primary/15 bg-bg-surface p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Live status
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-text-main sm:text-4xl">
                Real project status, shown clearly.
              </h2>
              <p className="mt-4 text-base leading-8 text-text-muted">
                Use simple status colors so people can tell what is pending, what is progressing, and what is done.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {statusItems.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-md px-4 py-3 text-sm font-semibold ${
                      item.tone === 'pending'
                        ? 'bg-status-pending/10 text-status-pending'
                        : item.tone === 'progress'
                          ? 'bg-status-progress/10 text-status-progress'
                          : 'bg-status-success/10 text-status-success'
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {featureRows.map((item) => (
                  <div key={item.label} className="rounded-md border border-primary/15 bg-bg-main px-4 py-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">{item.label}</div>
                    <div className="mt-2 text-sm font-medium text-text-main">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg-sidebar p-6 text-brand-white">
              <div className="flex items-center gap-3 border-b border-primary/20 pb-4">
                <FaShieldAlt className="text-xl text-accent-cta" />
                <div>
                  <div className="text-sm font-medium text-brand-white/70">Service focus</div>
                  <div className="text-lg font-bold">Reporting, repair, payment, follow-up</div>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  'Upload road images',
                  'Assign field team',
                  'Confirm completion',
                ].map((item) => (
                  <div key={item} className="rounded-md border border-primary/20 px-4 py-3 text-sm text-brand-white">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="border border-primary/15 bg-bg-sidebar px-6 py-10 text-brand-white sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-white/70">Contact</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Built for a clear first step and easy follow-up.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-white/75 sm:text-base">
                  A clean report flow helps customers share issues fast and helps teams act without confusion.
                </p>
              </div>

              <div className="bg-bg-surface p-6 text-text-main">
                <div className="space-y-3 text-sm font-medium text-text-muted">
                  <div className="rounded-md bg-primary/10 px-4 py-3 text-primary">Report a road issue</div>
                  <div className="rounded-md bg-accent-cta/10 px-4 py-3 text-accent-cta">Upload photos</div>
                  <div className="rounded-md bg-status-success/10 px-4 py-3 text-status-success">Track repair status</div>
                </div>
                <a
                  href="#top"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-brand-white transition-colors hover:bg-primary-hover"
                >
                  Back to top
                  <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Homepage