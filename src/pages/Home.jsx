import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  // Dados de exemplo para os serviços em destaque
  const featuredServices = [
    {
      id: 1,
      title: "Portfólios Prontos",
      description: "Atividades completas e organizadas de disciplinas com ensaios laboratoriais para cursos técnicos e de engenharia",
      image: "./src/images/placeholder.png",
      price: "R$ 100"
    },
    {
      id: 2,
      title: "Elaboração de TCC",
      description: "Auxílio especializado na elaboração e correção de Trabalhos de Conclusão de Curso com orientação personalizada",
      image: "./src/images/placeholder.png",
      price: "R$ 200"
    },
    {
      id: 3,
      title: "Revisão Acadêmica",
      description: "Correção e revisão crítica de trabalhos acadêmicos com foco em qualidade e adequação às normas",
      image: "./src/images/placeholder.png",
      price: "R$ 300"
    }
  ];

  return (
    <div className="home">
      {/* Header/Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Bem-vindo ao <span className="highlight">Ajuda-me Estudos</span>
            </h1>
            <p className="hero-subtitle">
              Suporte prático e acessível para estudantes universitários
            </p>
            <p className="hero-description">
              Facilitamos a vida de estudantes universitários oferecendo portfólios prontos, 
              auxílio na elaboração de TCCs e orientação personalizada para suas atividades acadêmicas.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                Ver Serviços
              </Link>
              <a href="https://wa.me/+558187988107" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <img src="./src/images/thamifoto.png" alt="Ajuda-me Estudos"/>
              </div>
              <div className="profile-info">
                <h3>Ajuda-me Estudos</h3>
                <p>Suporte Acadêmico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Sobre Nós</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                O Ajuda-me Estudos é uma plataforma criada para facilitar a vida de estudantes universitários, 
                oferecendo suporte prático e acessível nas atividades acadêmicas mais desafiadoras. 
                Aqui, você encontra portfólios prontos — atividades completas e organizadas de disciplinas 
                que envolvem ensaios laboratoriais, com base nas exigências de cursos de graduação, 
                especialmente nas áreas técnicas e de engenharia.
              </p>
              <p>
                Além dos portfólios, também oferecemos auxílio especializado na elaboração e correção de TCCs 
                (Trabalhos de Conclusão de Curso), ideal para quem precisa de orientação personalizada ou revisão crítica.
              </p>
              <p>
                Quando falamos em avaliação, entendemos que há diferentes ritmos, realidades e formas de aprender — 
                e respeitamos isso profundamente. Sabemos que, muitas vezes, é necessário manter o ambiente virtual 
                em ordem, e por isso nossa assessoria vai além do conteúdo: cuidamos para que tudo esteja organizado, 
                claro e alinhado com o que você precisa.
              </p>
              <div className="mission">
                <h3>Nossa Missão</h3>
                <p className="mission-text">
                  Te ajudar a estudar com mais eficiência, confiança e autonomia.
                </p>
              </div>
              <div className="services">
                <h3>Nossos Serviços</h3>
                <div className="services-grid">
                  <span className="service-tag">Portfólios Prontos</span>
                  <span className="service-tag">Elaboração de TCC</span>
                  <span className="service-tag">Revisão Acadêmica</span>
                  <span className="service-tag">Orientação Personalizada</span>
                  <span className="service-tag">Correção de Trabalhos</span>
                  <span className="service-tag">Suporte Acadêmico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Alguns dos Nossos Serviços</h2>
          <p className="section-subtitle">
            Confira alguns dos serviços que oferecemos para facilitar sua jornada acadêmica
          </p>
          <div className="projects-grid">
            {featuredServices.map(service => (
              <ProjectCard key={service.id} project={service} />
            ))}
          </div>
          <div className="projects-cta">
            <Link to="/projects" className="btn btn-outline">
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 