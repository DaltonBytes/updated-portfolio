import PageTitle from "../components/PageTitle";

const projects = [
  { id: 1, title: "Project One", description: "A cool project I worked on" },
  { id: 2, title: "Project Two", description: "Another awesome project" },
  { id: 3, title: "Project Three", description: "Yet another project" },
];

export default function Portfolio() {
  return (
    <div className="p-8 max-w-6xl mx-auto h-full">
      <PageTitle title="Portfolio" />
      <h1 className="text-3xl font-bold mb-8 text-center text-[#3B3A30]">
        Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#F7F1E5] hover:bg-[#F3EAD4] rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all p-6"
          >
            <h2 className="text-xl font-bold mb-2 text-[#3B3A30]">
              {project.title}
            </h2>
            <p className="text-[#4A4A3F]">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
