    const ProjectCard = ({ project: { title, description } })=>{

        return(
         <div className="flex items-start gap-5">
      <div className="w-16 h-16 border border-black rounded-lg flex items-center justify-center shrink-0">
        <span className="text-2xl text-gray-400 font-light">✕</span>
      </div>

      <div className="flex flex-col pt-1">
        <h3 className="text-xl font-bold leading-tight">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>   

        );


};
export default ProjectCard