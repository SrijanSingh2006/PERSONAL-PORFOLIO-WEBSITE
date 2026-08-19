import { Award, Zap, Database, Brain, Sparkles, FolderCode } from "lucide-react";
import { STATS } from "../data/portfolioData";

export default function Highlights() {
  const highlightIcons = [Award, Brain, Database, FolderCode, Zap];

  return (
    <section className="section-container highlights-section">
      <div className="highlights-banner">
        <div className="highlights-intro">
          <div className="section-eyebrow">KEY HIGHLIGHTS</div>
          <h3 className="highlights-title">Quantified Achievements & Project Scope</h3>
        </div>

        <div className="highlights-grid">
          {STATS.map((stat, idx) => {
            const IconComp = highlightIcons[idx % highlightIcons.length];
            return (
              <div className="highlight-stat-box" key={idx}>
                <div className="hl-icon-wrap">
                  <IconComp size={18} />
                </div>
                <div className="hl-value">{stat.value}</div>
                <div className="hl-label">{stat.label}</div>
                <div className="hl-caption">{stat.caption}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
