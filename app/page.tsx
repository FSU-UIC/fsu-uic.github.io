import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  Cpu,
  GraduationCap,
  Handshake,
  HeartPulse,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

const applications = [
  { name: "Health", icon: HeartPulse },
  { name: "Robotics", icon: Bot },
  { name: "Learning", icon: GraduationCap },
  { name: "Smart communities", icon: Building2 },
];

const stages = [
  {
    step: "01",
    action: "Sense & act",
    name: "Hardware",
    description: "Interfaces with the physical world.",
    topics: "Sensors / Devices / Embedded systems / Robotics",
    icon: Cpu,
  },
  {
    step: "02",
    action: "Connect",
    name: "Systems & Networks",
    description: "Moves data reliably from edge to cloud.",
    topics: "IoT / Edge-cloud / Distributed systems / Connectivity",
    icon: Network,
  },
  {
    step: "03",
    action: "Learn & reason",
    name: "Intelligence",
    description: "Turns data into adaptive decisions.",
    topics: "Machine learning / Agents / Perception / Reasoning",
    icon: BrainCircuit,
  },
  {
    step: "04",
    action: "Guide impact",
    name: "Humans",
    description: "Centers people, communities, and public value.",
    topics: "Privacy / HCI / Trust / Accessibility / Safety",
    icon: Users,
  },
];

const collaborations = [
  {
    title: "Edge intelligence for health",
    layers: "All four strengths",
    detail: "Wearable and ambient sensing, reliable edge systems, adaptive models, and human-centered evaluation.",
    icon: HeartPulse,
  },
  {
    title: "Privacy-aware sensing",
    layers: "Hardware + Networks + Humans",
    detail: "Useful connected services designed around security, data minimization, and human control.",
    icon: ShieldCheck,
  },
  {
    title: "Responsible robotics",
    layers: "Hardware + Intelligence + Humans",
    detail: "Embodied intelligence grounded in safety, trust, accessibility, and real-world deployment.",
    icon: Bot,
  },
];

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main-content">Skip to main content</a>

      <div className="fsuBar">
        <div>
          <a href="https://www.fsu.edu/">Florida State University</a>
          <span>Department of Computer Science</span>
        </div>
      </div>

      <header className="siteHeader" id="top">
        <a className="siteName" href="#top" aria-label="Ubiquitous and Intelligence Computing Group home">
          <span>FSU / Computer Science</span>
          <strong>Ubiquitous &amp; Intelligence Computing Group</strong>
        </a>
        <nav aria-label="Group navigation">
          <a href="#research">Research</a>
          <a href="#collaboration">Collaboration</a>
          <a href="#opportunities">Join &amp; partner</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="research" aria-labelledby="hero-title">
          <div className="heroCopy">
            <p className="eyebrow">A collaborative research group at Florida State University</p>
            <h1 id="hero-title">Ubiquitous &amp; Intelligence Computing Group</h1>
            <p>
              We connect hardware, systems and networks, intelligence, and human-centered computing
              to build applications with real-world impact.
            </p>
          </div>

          <div className="continuum" aria-label="Research continuum from hardware to human impact">
            <div className="applicationStrip">
              <div className="applicationLabel">
                <span>Built together</span>
                <strong>Applications</strong>
              </div>
              <div className="applicationList">
                {applications.map(({ name, icon: Icon }) => (
                  <div key={name}>
                    <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="continuumFlow">
              {stages.map(({ step, action, name, description, topics, icon: Icon }, index) => (
                <div className="flowItem" key={name}>
                  <article className="stageCard">
                    <div className="stageTopline">
                      <span>{step}</span>
                      <strong>{action}</strong>
                    </div>
                    <Icon className="stageIcon" aria-hidden="true" size={32} strokeWidth={1.7} />
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div>{topics}</div>
                  </article>
                  {index < stages.length - 1 && (
                    <ArrowRight className="flowArrow" aria-hidden="true" size={24} strokeWidth={1.6} />
                  )}
                </div>
              ))}
            </div>

            <div className="collaborationRibbon">
              <Handshake aria-hidden="true" size={25} strokeWidth={1.7} />
              <div>
                <strong>Cross-layer collaboration</strong>
                <span>Labs contribute distinct expertise to shared research questions.</span>
              </div>
              <div className="ribbonExamples">
                <span>Health intelligence</span>
                <span>Privacy-aware sensing</span>
                <span>Responsible robotics</span>
              </div>
            </div>
          </div>
        </section>

        <section className="collaborationSection" id="collaboration" aria-labelledby="collaboration-title">
          <div className="sectionHeading">
            <p className="eyebrow">Potential collaboration</p>
            <h2 id="collaboration-title">Ideas that become possible together.</h2>
            <p>These examples show how lab strengths can combine into visible, fundable research programs.</p>
          </div>

          <div className="collaborationList">
            {collaborations.map(({ title, layers, detail, icon: Icon }) => (
              <article key={title}>
                <Icon aria-hidden="true" size={25} strokeWidth={1.7} />
                <div>
                  <span>{layers}</span>
                  <h3>{title}</h3>
                </div>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="opportunities" id="opportunities" aria-labelledby="opportunities-title">
          <div className="opportunityIntro">
            <p className="eyebrow">Work with us</p>
            <h2 id="opportunities-title">Build the next project with UICG.</h2>
            <p>We welcome students, research collaborators, and sponsors who want to work across computing disciplines.</p>
          </div>

          <article>
            <span>For students</span>
            <h3>Find a research path across labs</h3>
            <ul>
              <li>Research assistantships and independent study</li>
              <li>Cross-lab mentoring and project teams</li>
              <li>Reading groups and research showcases</li>
            </ul>
          </article>

          <article>
            <span>For sponsors &amp; partners</span>
            <h3>Support research with broad impact</h3>
            <ul>
              <li>Sponsored research and pilot projects</li>
              <li>Student fellowships and internships</li>
              <li>Shared infrastructure, equipment, and events</li>
            </ul>
          </article>
        </section>
      </main>

      <footer>
        <div>
          <strong>Ubiquitous &amp; Intelligence Computing Group</strong>
          <span>Department of Computer Science · Florida State University</span>
        </div>
        <div>
          <a href="https://www.cs.fsu.edu/">Computer Science</a>
          <a href="https://www.fsu.edu/">Florida State University</a>
        </div>
      </footer>
    </>
  );
}
