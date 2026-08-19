export default function ContactButton({
  label = "Contact Me",
  onClick,
  href,
  className = ""
}) {
  const buttonStyles = `
    inline-flex items-center justify-center
    rounded-full text-white font-kanit font-medium uppercase tracking-widest
    outline outline-2 outline-white -outline-offset-[3px]
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-xs sm:text-sm md:text-base
    transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer
    ${className}
  `;

  const inlineStyle = {
    background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
    boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
  };

  if (href) {
    return (
      <a href={href} style={inlineStyle} className={buttonStyles}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={inlineStyle} className={buttonStyles}>
      {label}
    </button>
  );
}
