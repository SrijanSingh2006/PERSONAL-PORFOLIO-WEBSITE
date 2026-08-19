import { ArrowUpRight } from "lucide-react";
import { Github, Linkedin, LeetCode } from "./Icons";
import { PROFILES } from "../data/portfolioData";

export default function Profiles() {
  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Code: LeetCode
  };

  return (
    <section id="profiles" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">08 / CODING & PROFESSIONAL PROFILES</div>
        <h2 className="section-title">Where to find my code and connect.</h2>
      </div>

      <div className="profiles-grid">
        {PROFILES.map((profile) => {
          const IconComp = iconMap[profile.icon] || Github;
          return (
            <a
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="profile-card"
              key={profile.name}
            >
              <div className="profile-card-top">
                <div className="profile-icon-box">
                  <IconComp size={22} />
                </div>
                <div className="profile-badge-tag">{profile.badge}</div>
              </div>

              <h3 className="profile-name">{profile.name}</h3>
              <div className="profile-handle">{profile.handle}</div>
              <p className="profile-desc">{profile.description}</p>

              <div className="profile-link-action">
                <span>{profile.action}</span>
                <ArrowUpRight size={15} />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
