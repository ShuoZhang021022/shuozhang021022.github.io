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
            </p>
            <p>
              My current interests center on large language models (LLMs),
              particularly post-training. I am especially interested in using
              reinforcement learning to study LLMs and in exploring methods for
              optimizing them in engineering practice and human–computer interaction.
            </p>
          </div>
        </section>

        <footer>
          <p>© 2026 Shuo Zhang</p>
          <a href="#home">Back to top</a>
        </footer>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileData) }}
      />
    </main>
  );
}
