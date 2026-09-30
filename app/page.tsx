import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Shuo Zhang | Personal Homepage" },
  description:
    "Second-year Ph.D. student in Statistics at the University of Chicago researching large language models and statistics.",
};

const profileData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Shuo Zhang",
    description:
      "Second-year Ph.D. student in Statistics at the University of Chicago researching large language models and statistics.",
    email: "mailto:shuozhang2002@uchciago.edu",
  },
};

export default function Home() {
  return (
    <main id="home" className="page">
      <article>
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <h1 id="page-title">Shuo Zhang</h1>
            <p className="summary">
              I am a second-year Ph.D. student in the Department of Statistics at the
              University of Chicago. My current research focuses on large language
              models (LLMs) and statistics. Before joining the University of Chicago,
              I completed my undergraduate studies in mathematics at the University
              of Science and Technology of China.
            </p>
            <div className="hero-links">
              <a href="mailto:shuozhang2002@uchciago.edu">Email</a>
              <a
                href="https://x.com/ShuoZhang021022"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
              <a
                href="https://github.com/ShuoZhang021022"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="portrait" role="img" aria-label="Profile photo placeholder">
            <img src="/shuo-zhang.jpg" alt="Portrait of Shuo Zhang" />
          </div>
        </section>

        <section id="interests" className="content-section">
          <h2>Interests</h2>
          <div className="section-content">
            <p>
              My earlier work focused primarily on theoretical research in
              mathematics and statistics, but my interests have now shifted
              entirely to LLM research.
              My current interests center on large language models (LLMs),
              particularly post-training. I am especially interested in using
              reinforcement learning to study LLMs and in exploring methods for
              optimizing them in engineering practice and human–computer interaction.
            </p>
          </div>
        </section>

        <section id="news" className="content-section news-section" aria-labelledby="news-title">
          <h2 id="news-title">News</h2>
          <div className="section-content">
            <article className="news-item">
              <a
                className="news-image-link"
                href="/state-branch-diagram.png"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="news-image"
                  src="/state-branch-diagram.png"
                  alt="State branching diagram with near-zero advantages and diverging outcomes"
                />
              </a>
              <div className="news-copy">
                <h3>
                  <a
                    href="https://github.com/ShuoZhang021022/local-reward-refinement-for-long-horizon-trajectories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Local Reward Refinement for Long-Horizon Trajectories
                  </a>
                </h3>
                <p>
                  I am exploring more precise credit assignment from sparse terminal
                  outcomes in long-horizon language-agent trajectories. The idea
                  compares actions at revisited decision states and applies a gated
                  two-step refinement when first-step credit is ambiguous. Current
                  work focuses on controlled sequential tasks; longer tool-use and
                  code-agent trajectories remain future directions.
                </p>
              </div>
            </article>
            <article className="news-item">
              <a
                className="news-image-link"
                href="/agent-tool-flow.png"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="news-image"
                  src="/agent-tool-flow.png"
                  alt="Agent creates and selects tools from a tool pool to solve a problem"
                />
              </a>
              <div className="news-copy">
                <h3>
                  <a href="https://github.com/ShuoZhang021022/harness-grpo-lab" target="_blank" rel="noreferrer">
                    Learning an LLM Agent&apos;s Harness with GRPO
                  </a>
                </h3>
                <p>
                  A research prototype using GRPO and LoRA to train an LLM agent
                  to select and create Python tools for a fixed solver. Real-model
                  experiments are still pending.
                </p>
              </div>
            </article>
            <article className="news-item">
              <a
                className="news-image-link"
                href="/actor-judge-flow.png"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="news-image"
                  src="/actor-judge-flow.png"
                  alt="Actor and Judge provide inputs that combine into a final decision"
                />
              </a>
              <div className="news-copy">
                <h3>
                  <a href="https://github.com/ShuoZhang021022/actor-judge-code-repair-3.0" target="_blank" rel="noreferrer">
                    Passive-Judge Training and Test-Time Actor–Judge Selection for Code Repair
                  </a>
                </h3>
                <p>
                  A framework for multi-step code repair: a private Judge scores
                  Actor actions during training and helps select proposals at test
                  time. GPU experiments are still pending.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="collaboration" className="content-section" aria-labelledby="collaboration-title">
          <h2 id="collaboration-title">Collaboration</h2>
          <div className="section-content">
            <p>Now I am finding computing resources to support my research. If possible, I would be glad to join your research and I am ok to meet every day.</p>
          </div>
        </section>

      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileData) }}
      />
    </main>
  );
}
