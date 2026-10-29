import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, X } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event) => { if (event.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = "auto"; window.removeEventListener("keydown", closeOnEscape); };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="resume-viewer-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Résumé preview">
          <motion.div initial={{ opacity: 0, y: 16, scale: .99 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: .22 }} onClick={(event) => event.stopPropagation()} className="resume-viewer">
            <div className="resume-viewer-bar">
              <div><span className="resume-viewer-mark">SS</span><span><strong>{PROFILE.name}</strong><small>Résumé · 2026</small></span></div>
              <div className="resume-viewer-actions">
                <a href={PROFILE.resumePdfUrl} target="_blank" rel="noreferrer"><ExternalLink size={15} /><span>Open separately</span></a>
                <a href={PROFILE.resumePdfUrl} download="Srijan_Singh_Resume.pdf"><Download size={15} /><span>Download PDF</span></a>
                <button onClick={onClose} aria-label="Close résumé preview"><X size={19} /></button>
              </div>
            </div>
            <div className="resume-page-stack" aria-label="Résumé pages">
              {[1, 2, 3].map((page) => <img key={page} src={`${import.meta.env.BASE_URL}resume-pages/resume-page-${page}.png`} alt={`Srijan Singh résumé, page ${page} of 3`} loading={page === 1 ? "eager" : "lazy"} />)}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
