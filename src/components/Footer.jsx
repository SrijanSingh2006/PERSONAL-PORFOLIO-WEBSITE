import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-layout">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <a className="text-link" href="#hero">Back to top</a>
      </div>
    </footer>
  );
}
