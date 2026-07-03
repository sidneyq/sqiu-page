import { profile, experience, education, interests } from "@/data/profile";

export default function Home() {
  return (
    <>
      <header>
        <span className="brand">{profile.name}</span>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#interests">Interests</a>
        </nav>
      </header>

      <main>
        <div className="hero">
          <h1>{profile.name}</h1>
          <p className="tagline">
            <strong>{profile.title}</strong> at {profile.company}
          </p>
          <p className="meta">{profile.location}</p>
          <div className="badges">
            {profile.credentials.map((c) => (
              <span key={c} className="badge">
                {c}
              </span>
            ))}
          </div>
          <div className="links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <section id="about" className="about">
          <h2>About</h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </section>

        <section id="experience">
          <h2>Experience</h2>
          {experience.map((job) => (
            <div className="job" key={`${job.company}-${job.period}`}>
              <h3>
                {job.role} · <span className="company">{job.company}</span>
              </h3>
              <p className="period">
                {job.period} · {job.location}
              </p>
              <ul>
                {job.highlights.map((h) => (
                  <li key={h.slice(0, 32)}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="education">
          <h2>Education</h2>
          {education.map((e) => (
            <div className="education-item" key={e.school}>
              <span className="school">{e.school}</span>
              <span className="detail">{e.detail}</span>
            </div>
          ))}
        </section>

        <section id="interests">
          <h2>Beyond Work</h2>
          <div className="interests-grid">
            {interests.map((interest) => (
              <div className="interest-card" key={interest.title}>
                <span className="emoji">{interest.emoji}</span>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </footer>
    </>
  );
}
