import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    {
      icon: FaCode,
      title: 'Backend',
      description: 'Python, FastAPI / Flask, SQL'
    },
    {
      icon: FaLightbulb,
      title: 'Автоматизация и DevOps',
      description: 'GitHub Actions, Docker / Compose, Nginx'
    },
    {
      icon: FaUsers,
      title: 'Инструменты',
      description: 'Git, Poetry, JavaScript (Frontend)'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Обо мне
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Python backend‑разработчик</h3>
            <p>
              Проектирую и создаю web‑сервисы на Python: аккуратные REST API, сервисы интеграций 
              и внутренние утилиты. Люблю чистый код, понятные контракты и предсказуемые деплои.
            </p>
            <p>
              Мой стек: Python (FastAPI / Flask), SQL, Git, Docker (+ Compose), GitHub Actions, Nginx. 
              На фронте использую JavaScript, когда это нужно продукту.
            </p>
            <p>
              Автоматизирую рутину скриптами, собираю CI/CD‑пайплайны и слежу за стабильностью 
              окружений. Ценю простоту решений и прозрачность инфраструктуры.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">1.5</div>
                <div className="stat-label">Года опыта</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Репозиториев</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Технологий</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Проектов</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="skills-overview"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 