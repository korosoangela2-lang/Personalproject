import {useState} from 'react'
const ProjectForm = ({ onAddProject }) => {

const[title,setTitle]=useState("")
const[ desc,setDesc]=useState("")
const [errorMessage,setErrorMessage]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    setErrorMessage("");
    if (!title.trim()) {
      setErrorMessage("Title is required");
      return;
    }
if (!desc.trim()) {
      setErrorMessage("Description is required");
      return;
    }
const newProject = {
      title: title.trim(),
      description: desc.trim(),
    };
    
    onAddProject(newProject);

    setTitle("");
    setDesc("");

}

return(

     <div className="p-6 bg-[#F9F9F9] rounded-xl border border-black text-black">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Add Project</h2>

        {errorMessage && (
          <div className="p-3 text-sm font-medium text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg">
            {errorMessage}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="font-semibold text-black">Title</label>
          <input
           id="title"
            type="text"
            className="w-full p-2 rounded-md border border-black bg-white outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="font-semibold">Description</label>
          <textarea
            id="description"
            className="w-full p-2 rounded-md border border-black bg-white outline-none min-h-25"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-24 py-1.5 border border-black rounded-md bg-white hover:bg-gray-100 transition-colors font-medium text-black"
        >
          Add
        </button>
      </form>
    </div>
  );



};

export default ProjectForm