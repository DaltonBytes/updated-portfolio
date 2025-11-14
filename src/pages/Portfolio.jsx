import PageTitle from "../components/PageTitle";

const projects = [
  { id: 1, title: "Project One", description: "A cool project I worked on" },
  { id: 2, title: "Project Two", description: "Another awesome project" },
  { id: 3, title: "Project Three", description: "Yet another project" },
];

export default function Portfolio() {
  return (
    <section className="bg-[#1E2320] grow pt-28 pb-24 px-8 max-w-6xl mx-auto">
      <PageTitle title="Portfolio" />

      <h1 className="text-4xl font-semibold text-center text-[#E8DCC2] mb-16">
        Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              rounded-xl border border-[#0F1315]
              bg-[#34372E] p-10 shadow-[6px_6px_0_#0F1315]
              hover:bg-[#3F4337] hover:shadow-[0_0_12px_#3F4337]
              transition-all
              min-h-[260px] flex flex-col justify-start
            "
          >
            <h2 className="text-2xl font-semibold text-[#E8DCC2] mb-3">
              {project.title}
            </h2>

            <p className="text-[#C5C6B3] leading-relaxed text-lg">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
