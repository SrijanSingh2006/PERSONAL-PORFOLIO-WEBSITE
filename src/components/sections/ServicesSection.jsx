import FadeIn from "../ui/FadeIn";

const services = [
  {
    number: "01",
    name: "Machine Learning & Deep Learning",
    description:
      "Creation of predictive modeling pipelines, neural architectures (CNN, RNN, LSTM, GRU), and hyperparameter-tuned ensemble models tailored for accuracy and generalization.",
  },
  {
    number: "02",
    name: "NLP & Generative AI",
    description:
      "Natural language processing pipelines, sequence modeling, multiclass text emotion classification, prompt engineering with Google Gemini API, and GenAI workflows.",
  },
  {
    number: "03",
    name: "Computer Vision & OCR",
    description:
      "Visual document analysis with OpenCV, automated KYC extraction, feature engineering on visual telemetry, crop quality inspection, and satellite hotspot mapping.",
  },
  {
    number: "04",
    name: "Predictive Analytics & EDA",
    description:
      "Comprehensive exploratory data analysis, correlation diagnostics, ColumnTransformer pipelines, outlier scoring, and regression modeling on multi-thousand record datasets.",
  },
  {
    number: "05",
    name: "REST APIs & Cloud Deployment",
    description:
      "High-throughput asynchronous REST microservices using FastAPI and Flask, containerized with Docker, background Celery/Redis workers, AWS S3 storage, and React interfaces.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 select-none"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            className="font-kanit font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
          >
            Capabilities
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={30}
              className={`flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 py-8 sm:py-10 md:py-12 ${
                index < services.length - 1 ? "border-b border-[#0C0C0C]/15" : ""
              }`}
            >
              {/* Large Number */}
              <div
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                className="font-kanit font-black text-[#0C0C0C] leading-none shrink-0"
              >
                {item.number}
              </div>

              {/* Name & Description */}
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3
                  style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" }}
                  className="font-kanit font-medium uppercase text-[#0C0C0C] tracking-wide"
                >
                  {item.name}
                </h3>
                <p
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  className="font-kanit font-light text-[#0C0C0C] opacity-60 leading-relaxed"
                >
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
