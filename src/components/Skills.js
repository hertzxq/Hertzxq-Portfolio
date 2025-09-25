import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 90, color: '#00ff88' },
    { name: 'FastAPI / Flask', level: 80, color: '#00ccff' },
    { name: 'SQL (Postgres/SQLite)', level: 75, color: '#4ecdc4' },
    { name: 'JavaScript (Frontend)', level: 70, color: '#f7b731' }
  ];

  const gameSkills = [
    { name: 'Скрипты и автоматизация', level: 85, color: '#00ff88' },
    { name: 'CI/CD (GitHub Actions)', level: 75, color: '#00ccff' },
    { name: 'Docker / Docker Compose', level: 70, color: '#ff6b6b' },
    { name: 'Git / Git Flow', level: 80, color: '#4ecdc4' }
  ];

  const tools = [
    'Python', 'Poetry', 'FastAPI', 'Flask', 'JavaScript',
    'Git', 'GitHub', 'Docker', 'Docker Compose', 'Nginx'
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Навыки и технологии
        </motion.h2>

        <div className="skills-content">
          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Автоматизация и инфраструктура</h3>
            <div className="skills-list">
              {gameSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Технические навыки</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Инструменты и платформы</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="tool-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 