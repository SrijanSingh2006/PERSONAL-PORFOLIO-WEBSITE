import { useState } from "react";
import { Code2, Brain, Cpu, Layers, Cloud, Search, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const iconMap = {
    Code2: Code2,
    Brain: Brain,
    Cpu: Cpu,
    Layers: Layers,
    Cloud: Cloud
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory !== "all" && cat.id !== selectedCategory) {
      return false;
    }
    return true;
  }).map((cat) => {
    if (!searchQuery.trim()) return cat;
    const matchingSkills = cat.skills.filter((s) =>
      s.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">02 / TECHNICAL SKILLS</div>
        <h2 className="section-title">Tools & technologies I use across the AI/ML lifecycle.</h2>
      </div>

      <div className="skills-toolbar">
        <div className="skills-filter-tabs">
          <button
            className={`filter-pill ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="skills-search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search skill (e.g. PyTorch, LSTM, AWS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Filter skills"
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery("")}>
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="skills-grid">
        {filteredCategories.map((cat) => {
          const IconComponent = iconMap[cat.icon] || Code2;
          return (
            <div className="skill-category-card" key={cat.id}>
              <div className="category-header">
                <div className="cat-icon-wrap">
                  <IconComponent size={20} />
                </div>
                <div>
                  <h3 className="cat-title">{cat.title}</h3>
                  <span className="cat-count">{cat.skills.length} competencies</span>
                </div>
              </div>

              <div className="skills-pills-wrap">
                {cat.skills.map((skill) => (
                  <div className="skill-pill-item" key={skill}>
                    <CheckCircle2 size={13} className="pill-check-icon" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredCategories.length === 0 && (
        <div className="no-skills-found">
          <p>No skills found matching "{searchQuery}".</p>
          <button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
