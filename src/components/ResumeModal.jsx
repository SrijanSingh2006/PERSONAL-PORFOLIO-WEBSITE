import { Download, FileText, X } from "lucide-react";
import { PROFILE } from "../data/portfolioData";
import PortfolioDialog from "./PortfolioDialog";

export default function ResumeModal({ onClose }) {
  return (
    <PortfolioDialog className="resume-viewer" labelledBy="resume-viewer-title" onClose={onClose}>
      <header className="resume-viewer-bar">
        <div>
          <span className="brand-mark" aria-hidden="true">SS</span>
          <h2 id="resume-viewer-title">Résumé preview</h2>
        </div>
        <div className="resume-viewer-actions">
          <a className="button button-outline" href={PROFILE.resumePdfUrl} target="_blank" rel="noreferrer" aria-label="Open résumé PDF" title="Open résumé PDF"><FileText size={17} /><span>Open PDF</span></a>
          <a className="button button-primary" href={PROFILE.resumePdfUrl} download aria-label="Download résumé PDF" title="Download résumé PDF"><Download size={17} /><span>Download</span></a>
          <button type="button" data-dialog-close className="icon-button" onClick={onClose} aria-label="Close résumé preview"><X size={20} /></button>
        </div>
      </header>
      <div className="resume-page-stack" aria-label="Résumé pages">
        {[1, 2, 3].map((page) => <img key={page} src={`${import.meta.env.BASE_URL}resume-deccan/page-${page}.png`} alt={`Srijan Singh résumé, page ${page} of 3`} loading={page === 1 ? "eager" : "lazy"} />)}
      </div>
    </PortfolioDialog>
  );
}
