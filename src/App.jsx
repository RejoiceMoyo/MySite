import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaHeart, FaHtml5, FaCss3Alt, FaJava, FaJs, FaReact, FaNodeJs, FaBars, FaTimes } from 'react-icons/fa';
import { SiSupabase, SiTailwindcss, SiGit } from 'react-icons/si';
import ProjectCard from './components/ProjectCard';
import SkillIcon from './components/SkillIcon';
import { useState } from 'react';

function App() {
  const projects = [
    {
      title: "WiFi Hotspot Interface",
      description: "A user-friendly interface for managing a WiFi hotspot, allowing easy configuration and monitoring of network settings",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
      image: "./images/hotspot.jpg",
      codeLink: "#",
      siteLink: "#"
    },
    {
      title: "MK Granites Website",
      description: "A professional website showcasing MK Granites' products and services, featuring a product catalog and contact system",
      technologies: ["React.js", "Tailwind CSS", "Node.js, JavaScript"],
      image: "./images/mkgranites.jpg",
      codeLink: "#",
      siteLink: "#"
    },
    {
      title: "Recipe Finder",
      description: "An interactive recipe search application that helps users discover and save their favorite recipes with filtering options",
      technologies: ["React", "JavaScript", "CSS", "API Integration"],
      image: "./images/bytecook.jpg",
      codeLink: "#",
      siteLink: "#"
    },
    {
      title: "Logistics Web App",
      description: "A comprehensive logistics management system for tracking truck shipments, managing inventory, and optimizing delivery routes",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "./images/logistics.png",
      codeLink: "#",
      siteLink: "#"
    }
  ];

  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-4xl text-orange-500" />
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-4xl text-blue-500" />
    },
    {
      name: "Java",
      icon: <FaJava className="text-4xl text-red-500" />
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-4xl text-yellow-400" />
    },
    {
      name: "React",
      icon: <FaReact className="text-4xl text-blue-400" />
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-4xl text-green-500" />
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-cyan-400" />
    },
    {
      name: "Git",
      icon: <SiGit className="text-4xl text-orange-600" />
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-4xl text-gray-100" />
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-4xl text-emerald-500" />
    }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Updated Header/Navigation */}
      <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
        <div className="px-4 md:px-16 w-full">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl md:text-3xl font-bold">ByteChic<span className="text-pink-600">X</span></span>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              type="button"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-14 font-semibold">
              <a href="#home" className="text-gray-300 hover:text-white text-lg">Home</a>
              <a href="#projects" className="text-gray-300 hover:text-white text-lg">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-white text-lg">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-white text-lg">Contact</a>
            </div>
          </div>

          {/* Mobile Menu - Fixed width */}
          <div 
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute top-16 left-0 w-full bg-primary/95 backdrop-blur-sm md:hidden`}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#home" className="text-gray-300 hover:text-white text-lg w-full text-center py-2" onClick={toggleMenu}>Home</a>
              <a href="#projects" className="text-gray-300 hover:text-white text-lg w-full text-center py-2" onClick={toggleMenu}>Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-white text-lg w-full text-center py-2" onClick={toggleMenu}>Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-white text-lg w-full text-center py-2" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-10 px-8 w-full">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-3">
            <FaHeart className="text-pink-500 text-4xl" />
            <h2 className="text-4xl text-pink-500 font" style={{ fontFamily: 'Impact' }}>
              Software Dev | AI enthusiast
            </h2>
            <FaHeart className="text-pink-500 text-4xl" />
          </div>
          <h1 className="text-6xl font-bold mb-6">Hello, I'm Rejo Moyo.</h1>
          <p className="text-xl text-gray-300 mb-8">
            I'm a front-end developer currently expanding my skills into backend development. 
            As a Computer Science student, I'm passionate about exploring and working with emerging technologies. 
            My journey involves turning ideas into interactive and user-friendly web experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-1 px-16 bg-black w-full">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-16 w-full">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-12">Tools & Technologies I'm currently working with:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <SkillIcon key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-16 bg-black w-full">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-8">Talk to Me!</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Lets make the digital world cuter!
          </p>
          <form className="max-w-2xl">
            <div className="mb-6">
              <label htmlFor="name" className="block font-medium text-md text-gray-300 mb-2">Name:</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-primary border border-gray-600 rounded-lg text-md focus:ring-2 focus:ring-secondary"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-md font-medium text-gray-300 mb-2">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-primary border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary"
                placeholder="Enter your Email address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-md font-medium text-gray-300 mb-2">Message:</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 bg-primary border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary"
                placeholder="Type the message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-400 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8 px-8">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-6 mb-4">
              <a href="https://www.linkedin.com/in/rejoicemoyo/" className="text-2xl hover:text-pink-200 text-pink-500">
                <FaLinkedin />
              </a>
              <a href="https://github.com/RejoiceMoyo" className="text-2xl hover:text-pink-200 text-pink-500">
                <FaGithub />
              </a>
              <a href="https://x.com/bytechicX" className="text-2xl hover:text-pink-200 text-pink-500">
                <FaTwitter />
              </a>
              <a href="https://wa.me/+263788736513" className="text-2xl hover:text-pink-200 text-pink-500">
                <FaWhatsapp />
              </a>
            </div>
            <p className="text-gray-300 text-sm">© 2024 Rejo Moyo. All rights reserved.</p>
            <p className="text-gray-300 text-sm">With ❤️ by Rejo Moyo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;