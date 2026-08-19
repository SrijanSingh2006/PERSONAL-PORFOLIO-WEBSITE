import FadeIn from "../ui/FadeIn";
import AnimatedText from "../ui/AnimatedText";
import ContactButton from "../ui/ContactButton";

export default function AboutSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const aboutText =
    "I am a Computer Science undergraduate at SRMIST specializing in Machine Learning, Deep Learning, Generative AI, and Computer Vision. I build end-to-end AI applications from data preprocessing to model training, evaluation, and production REST API deployment. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Decorative 3D Corner Elements */}
      {/* Top-Left: Moon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decor"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain opacity-90 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Shape Decor"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain opacity-90 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Decor"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain opacity-90 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Decor"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain opacity-90 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          />
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            className="hero-heading font-kanit font-black uppercase leading-none tracking-tight"
          >
            About me
          </h2>
        </FadeIn>

        <div className="max-w-[560px] px-4">
          <AnimatedText
            text={aboutText}
            className="font-kanit font-medium text-center leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <div className="pt-4 sm:pt-6">
          <FadeIn delay={0.2} y={20}>
            <ContactButton
              label="Contact Me"
              onClick={() => scrollTo("contact")}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
