import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Dados de exemplo para todos os serviços acadêmicos
  const allServices = [
    {
      id: 1,
      title: "Portfólios Prontos",
      description: "Atividades completas e organizadas de disciplinas com ensaios laboratoriais para cursos técnicos e de engenharia",
      image: "./src/images/placeholder.png",
      price: "R$ 100",
      category: "portfolios"
    },
    {
      id: 2,
      title: "Elaboração de TCC",
      description: "Auxílio especializado na elaboração e correção de Trabalhos de Conclusão de Curso com orientação personalizada",
      image: "./src/images/placeholder.png",
      price: "R$ 100",
      category: "tcc"
    },
    {
      id: 3,
      title: "Revisão Acadêmica",
      description: "Correção e revisão crítica de trabalhos acadêmicos com foco em qualidade e adequação às normas",
      image: "./src/images/placeholder.png",
      price: "R$ 100",
      category: "revisao"
    },
    {
      id: 4,
      title: "Relatórios de Laboratório",
      description: "Elaboração de relatórios técnicos para disciplinas práticas com metodologia científica",
      image: "./src/images/placeholder.png",
      price: "R$ 100",
      category: "laboratorio"
    },
    {
      id: 5,
      title: "Artigos Científicos",
      description: "Desenvolvimento de artigos acadêmicos com pesquisa bibliográfica e metodologia adequada",
      image: "./src/images/placeholder.png",
      price: "R$ 100",
      category: "artigos"
    },
    {
      id: 6,
      title: "Apresentações Acadêmicas",
      description: "Criação de slides e apresentações para seminários, congressos e defesas de trabalho",
      image: "./src/images/placeholder.png",
      price: "R$ 100",
      category: "apresentacoes"
    },
    {
      id: 7,
      title: "Resumos e Resenhas",
      description: "Elaboração de resumos críticos e resenhas de livros e artigos acadêmicos",
      image: "./src/images/placeholder.png",
      price: "R$ 100",
      category: "resumos"
    },
    {
      id: 8,
      title: "Orientação Personalizada",
      description: "Acompanhamento individual para desenvolvimento de projetos acadêmicos específicos",
      image: "./src/images/placeholder.png",
      price: "R$ 100",
      category: "orientacao"
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'portfolios', name: 'Portfólios' },
    { id: 'tcc', name: 'TCC' },
    { id: 'revisao', name: 'Revisão' },
    { id: 'laboratorio', name: 'Laboratório' },
    { id: 'artigos', name: 'Artigos' },
    { id: 'apresentacoes', name: 'Apresentações' },
    { id: 'resumos', name: 'Resumos' },
    { id: 'orientacao', name: 'Orientação' }
  ];

  const filteredServices = selectedCategory === 'todos' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="container">
          <h1 className="page-title">Nossos Serviços</h1>
          <p className="page-subtitle">
            Confira todos os serviços disponíveis para facilitar sua jornada acadêmica. 
            Cada serviço é desenvolvido com qualidade e atenção às necessidades específicas dos estudantes.
          </p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          {/* Filtros */}
          <div className="filters">
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Serviços */}
          <div className="projects-grid">
            {filteredServices.map(service => (
              <ProjectCard key={service.id} project={service} />
            ))}
          </div>

          {/* Mensagem quando não há serviços */}
          {filteredServices.length === 0 && (
            <div className="no-projects">
              <p>Nenhum serviço encontrado nesta categoria.</p>
            </div>
          )}

          {/* CTA */}
          <div className="projects-cta">
            <p>Precisa de um serviço personalizado?</p>
            <a 
              href="https://wa.me/+558187988107?text=Olá! Gostaria de solicitar um serviço personalizado. Pode me ajudar?" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Serviço Personalizado
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 