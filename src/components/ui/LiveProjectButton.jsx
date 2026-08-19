export default function LiveProjectButton({
  label = "Case Study & Pipeline",
  onClick,
  href,
  className = ""
}) {
  const styles = `
    inline-flex items-center justify-center
    rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-kanit font-medium uppercase tracking-widest
    px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5
    text-xs sm:text-sm md:text-base
    transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:border-white hover:text-white
    cursor-pointer
    ${className}
  `;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={styles}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {label}
    </button>
  );
}
