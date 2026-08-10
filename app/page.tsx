import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "你的名字｜个人主页" },
  description: "个人简介、研究兴趣、精选项目与近期动态。",
};

const navigation = [
  { label: "主页", href: "#home", active: true },
  { label: "关于我", href: "#about" },
  { label: "研究兴趣", href: "#interests" },
  { label: "精选项目", href: "#projects" },
  { label: "近期动态", href: "#news" },
  { label: "联系方式", href: "#contact" },
];

const interests = ["人工智能", "数据科学", "产品设计", "人机交互"];

const projects = [
  {
    year: "2026",
    title: "代表项目名称",
    description:
      "用一两句话说明你解决了什么问题、采用了什么方法，以及最终产生的价值。",
    tags: ["研究", "工程", "开源"],
    href: "#contact",
  },
  {
    year: "2025",
    title: "第二个精选项目",
    description:
      "强调你的具体贡献。尽量写结果，而不是只罗列使用过的工具与技术。",
    tags: ["设计", "协作", "实践"],
    href: "#contact",
  },
  {
    year: "2025",
    title: "论文、文章或作品",
    description:
      "可以放论文、课程项目、获奖作品，或者一篇最能体现你思考方式的文章。",
    tags: ["写作", "洞察"],
    href: "#contact",
  },
];

const updates = [
  { date: "2026.08", text: "个人主页正式上线。" },
  { date: "2026.06", text: "在这里记录一项近期成果、发表或新项目。" },
  { date: "2026.03", text: "在这里记录一次演讲、获奖或重要经历。" },
];

const profileData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "你的名字",
    description: "专注于人工智能、数据科学与产品创新。",
    email: "mailto:hello@example.com",
  },
};

export default function Home() {
  return (
    <main id="home" className="site-shell">
      <aside className="sidebar" aria-label="站点导航">
        <a className="site-name" href="#home" aria-label="返回主页">
          你的名字
          <span>Your Name</span>
        </a>

        <nav className="nav-list">
          {navigation.map((item) => (
            <a
              key={item.href}
              className={item.active ? "nav-link nav-link-active" : "nav-link"}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="sidebar-note">
          <span className="status-dot" aria-hidden="true" />
          目前开放交流与合作
        </p>
      </aside>

      <article className="content-card">
        <header className="page-header">
          <p className="eyebrow">WELCOME TO MY HOMEPAGE</p>
          <h1>你的名字</h1>
          <p className="role">研究者 · 开发者 · 终身学习者</p>
        </header>

        <section id="about" className="profile-grid anchor-section">
          <div className="portrait-column">
            <div className="portrait" role="img" aria-label="个人照片占位区域">
              <span>YN</span>
              <small>在此替换个人照片</small>
            </div>

            <address id="contact" className="contact-card anchor-section">
              <strong>联系我</strong>
              <a href="mailto:hello@example.com">hello@example.com</a>
              <div className="contact-links">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a
                  href="https://scholar.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Scholar
                </a>
              </div>
            </address>
          </div>

          <div className="introduction">
            <p>
              你好，我是<strong>你的名字</strong>。我目前从事与人工智能、数据科学和产品创新相关的工作，也持续关注技术如何帮助人们更清晰地思考与创造。
            </p>
            <p>
              在这里，用一段简洁的文字介绍你现在的身份、所在机构或团队，以及最重要的一段经历。最好让第一次认识你的人在半分钟内明白你是谁、你在做什么。
            </p>
            <p>
              我喜欢把复杂问题转化为清晰、可靠并且真正有用的成果。如果你对相近的话题感兴趣，欢迎与我联系。
            </p>

            <div id="interests" className="interest-block anchor-section">
              <span className="mini-label">当前关注</span>
              <div className="interest-list">
                {interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <h2>正在寻找</h2>
            <span>OPEN TO</span>
          </div>
          <p className="section-lead">
            欢迎围绕研究合作、产品共创、技术交流或内容写作联系我。请在这里替换为你真正期待的机会。
          </p>
        </section>

        <section id="projects" className="section-block anchor-section">
          <div className="section-heading">
            <h2>精选项目</h2>
            <span>SELECTED WORK</span>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <a className="project-row" href={project.href} key={project.title}>
                <span className="project-year">{project.year}</span>
                <span className="project-main">
                  <strong>{project.title}</strong>
                  <span>{project.description}</span>
                  <span className="tag-list">
                    {project.tags.map((tag) => (
                      <em key={tag}>{tag}</em>
                    ))}
                  </span>
                </span>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="news" className="section-block anchor-section">
          <div className="section-heading">
            <h2>近期动态</h2>
            <span>LATEST NEWS</span>
          </div>

          <ul className="news-list">
            {updates.map((update) => (
              <li key={`${update.date}-${update.text}`}>
                <time>{update.date}</time>
                <span>{update.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer>
          <p>最后更新于 2026 年 8 月</p>
          <a href="#home">回到顶部 ↑</a>
        </footer>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileData) }}
      />
    </main>
  );
}
