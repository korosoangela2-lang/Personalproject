import { useState } from "react";
import ProjectForm from "./components/projectForm.jsx";
import DisplayProjects from "./components/DisplayProjects.jsx";
import "./index.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React",
    },
    {
      id: 2,
      title: "Shopping App",
      description: "Online shop with cart functionality",
    },
  ]);

  const AddProjects = (newProject) => {
    setProjects([...projects, newProject]);
  };
  return (
    <div
      className="min-h-screen bg-white-100  font-sans pb-10"
  
    >
      <header className="py-6 border-b border-black mb-8">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg font-bold text-lg">
            KC
          </div>
          <div>
            <h1 className="text-2xl font-bold">K Corp.</h1>
            <p className="text-sm text-gray-500">showcasing Fashion Designs</p>
          </div>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 space-y-8">
        <ProjectForm onAddProject={AddProjects} />
        <DisplayProjects projects={projects} />
      </main>
    </div>
  );
}
export default App;
