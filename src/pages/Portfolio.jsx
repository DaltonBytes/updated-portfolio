export default function Portfolio() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-semibold mb-4 text-[#3B3A30]">Portfolio</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Here’s a selection of my recent projects — from React front-ends to Rust
        back-end tools.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#EEE6D8] shadow rounded-xl p-6 hover:shadow-md transition">
          <h2 className="font-bold text-[#3B3A30] mb-2">
            Vite + React Portfolio
          </h2>
          <p className="text-gray-700 text-sm">
            A personal portfolio built with React, Vite, and Tailwind CSS.
          </p>
        </div>

        <div className="bg-[#EEE6D8] shadow rounded-xl p-6 hover:shadow-md transition">
          <h2 className="font-bold text-[#3B3A30] mb-2">Rust + Axum API</h2>
          <p className="text-gray-700 text-sm">
            A backend built in Rust with SQLite and Axum for lightning-fast
            APIs.
          </p>
        </div>

        <div className="bg-[#EEE6D8] shadow rounded-xl p-6 hover:shadow-md transition">
          <h2 className="font-bold text-[#3B3A30] mb-2">TUI Task Manager</h2>
          <p className="text-gray-700 text-sm">
            A text-based task manager written in Rust using Crossterm.
          </p>
        </div>
      </div>
    </section>
  );
}
