import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const handleBuyClick = () => {
    const message = `Olá! Tenho interesse no serviço de ${project.title}. Pode me enviar mais informações sobre como funciona?`;
    const whatsappUrl = `https://wa.me/+558187988107?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-price">{project.price}</div>
        <p className="project-description">{project.description}</p>
        <button className="buy-button" onClick={handleBuyClick}>
          <span className="button-text">Solicitar</span>
          <span className="button-icon">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.15"/>
              <path d="M16 7C11.03 7 7 11.03 7 16C7 17.47 7.41 18.87 8.17 20.09L7 25L12.01 23.86C13.18 24.44 14.56 24.8 16 24.8C20.97 24.8 25 20.77 25 15.8C25 10.83 20.97 7 16 7ZM16 22.8C14.77 22.8 13.59 22.5 12.54 21.97L12.19 21.8L9.99 22.29L10.48 20.09L10.31 19.74C9.59 18.59 9.2 17.33 9.2 16C9.2 12.13 12.13 9.2 16 9.2C19.87 9.2 22.8 12.13 22.8 16C22.8 19.87 19.87 22.8 16 22.8ZM19.13 18.13C18.93 18.03 18.13 17.67 17.93 17.6C17.73 17.53 17.6 17.5 17.47 17.7C17.34 17.9 17.07 18.23 16.97 18.33C16.87 18.43 16.77 18.45 16.57 18.35C16.37 18.25 15.67 18.03 14.97 17.37C14.37 16.8 14.13 16.23 14.03 16.03C13.93 15.83 14.01 15.75 14.11 15.65C14.21 15.55 14.33 15.37 14.43 15.23C14.53 15.09 14.5 14.99 14.43 14.87C14.36 14.75 13.97 13.8 13.8 13.4C13.63 13 13.47 13.05 13.33 13.05C13.19 13.05 13.01 13.05 12.83 13.05C12.65 13.05 12.37 13.13 12.17 13.33C11.97 13.53 11.6 13.93 11.6 14.67C11.6 15.41 12.13 16.13 12.23 16.23C12.33 16.33 13.47 18.03 15.37 18.7C15.97 18.9 16.37 19 16.67 19.07C17.27 19.21 17.67 19.17 17.93 19.13C18.19 19.09 18.77 18.73 18.87 18.43C18.97 18.13 18.97 18.23 19.13 18.13Z" fill="white"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard; 