import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ title, description, technologies, codeLink, siteLink, image }) {
  return (
    <div className="bg-primary rounded-lg border border-gray-700">
      {image && (
        <div className="w-full">
          <img 
            src={image} 
            alt={`${title} Image`}
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={codeLink}
            className="flex items-center space-x-2 text-gray-300 hover:text-secondary"
          >
            <FaCode />
            <span>Code</span>
          </a>
          <a
            href={siteLink}
            className="flex items-center space-x-2 text-gray-300 hover:text-secondary"
          >
            <FaExternalLinkAlt />
            <span>Visit Site</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;