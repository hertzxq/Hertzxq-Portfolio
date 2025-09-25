import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaItchIo, FaTelegram, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/hertzxq',
      color: '#333'
    },
    {
      name: 'Itch.io',
      icon: FaItchIo,
      url: 'https://hertzxq.itch.io',
      color: '#fa5c5c'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: 'https://t.me/hertzxq',
      color: '#0088cc'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:hertzxq@example.com',
      color: '#ea4335'
    }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Привет, я
              <span className="highlight"> Максим</span>
            </motion.h1>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Проектирую и создаю web‑сервисы на Python, пишу скрипты и автоматизацию, 
              на фронте использую JavaScript. Люблю чистый код, понятные API и предсказуемые деплои.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              >
                Посмотреть проекты
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Связаться со мной
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span>🎮</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <link.icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 