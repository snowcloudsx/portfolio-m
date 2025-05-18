<template>
  <div class="home-container">
    <div class="hero-image-container">
      <img 
        src="https://i.postimg.cc/pL1G6G6Y/pexels-eberhardgross-976917.jpg" 
        alt="hero" 
        class="hero-image"
      >
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="title-wrapper">
          <h1 id="pageTitle">Hi, I'm Snow</h1>
          <div class="title-underline"></div>
        </div>
        <p class="subtext">Backend Engineer | mini haker</p>
        
        <div class="tech-stack">
          <div class="tech-icon" v-for="tech in technologies" :key="tech.name">
            <img :src="tech.icon" :alt="tech.name">
            <span>{{ tech.name }}</span>
          </div>
        </div>
        
        <div class="button-group">
          <a href="https://github.com/yourprofile" target="_blank" class="cta-button primary">
            <span>View GitHub</span>
            <svg class="arrow-icon" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        
        <div class="social-links">
          <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" class="social-icon">
            <img :src="social.icon" :alt="social.name">
          </a>
        </div>
        
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <span class="terminal-btn red"></span>
              <span class="terminal-btn yellow"></span>
              <span class="terminal-btn green"></span>
            </div>
            <span class="terminal-title">snow@terminal: ~/portfolio</span>
          </div>
          <div class="terminal-body">
            <p><span class="terminal-prompt">$</span> whoami</p>
            <p>a 13 year old who has way to much free time</p>
            <p><span class="terminal-prompt">$</span> current_project</p>
            <p>Working on this website </p>
            <p><span class="terminal-prompt">$</span> <span class="terminal-cursor">|</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
       // { name: 'ASM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
      ],
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com/snowcloudsx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'YouTube', url: 'https://www.youtube.com/@SnowClouds' , icon:"https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"},
        { name: 'Discord', url: 'https://discord.com/users/_snow_x', icon: 'https://www.svgrepo.com/show/353655/discord-icon.svg' }
      ]
    }
  }
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  font-family: 'Fira Code', monospace, sans-serif;
}

.hero-image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.5) contrast(1.2);
  transition: transform 8s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(10,25,47,0.8) 0%, rgba(32,60,95,0.6) 100%);
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 90%;
  max-width: 900px;
  z-index: 2;
  padding: 2rem;
}

.title-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

#pageTitle {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  letter-spacing: 1px;
  color: #64ffda;
  font-family: 'Fira Code', monospace;
}

.title-underline {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #64ffda;
  transform: scaleX(0);
  transform-origin: center;
  animation: underlineExpand 1.2s 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
}

.subtext {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  color: #ccd6f6;
  animation: fadeIn 1.5s ease-in-out both;
  animation-delay: 0.4s;
  font-weight: 300;
  letter-spacing: 1px;
  opacity: 0.9;
  font-family: 'Fira Code', monospace;
}

.tech-stack {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.tech-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

.tech-icon:hover {
  transform: translateY(-5px);
}

.tech-icon img {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
}

.tech-icon span {
  font-size: 0.9rem;
  color: #8892b0;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.cta-button {
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000);
  position: relative;
  overflow: hidden;
  border: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  font-family: 'Fira Code', monospace;
}

.cta-button.primary {
  background-color: #0a192f;
  color: #64ffda;
  border: 1px solid #64ffda;
}

.cta-button.primary:hover {
  background-color: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px);
}

.arrow-icon {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: #64ffda;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow-icon {
  transform: translateX(5px);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: rgba(100, 255, 218, 0.2);
  transform: translateY(-3px) scale(1.1);
}

.social-icon img {
  width: 20px;
  height: 20px;
}

.terminal-window {
  background: rgba(10, 25, 47, 0.7);
  border-radius: 6px;
  border: 1px solid #1e2a3a;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}

.terminal-header {
  background: #1e2a3a;
  padding: 8px 15px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  align-items: center;
}

.terminal-buttons {
  display: flex;
  gap: 8px;
  margin-right: 15px;
}

.terminal-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.terminal-btn.red {
  background: #ff5f56;
}

.terminal-btn.yellow {
  background: #ffbd2e;
}

.terminal-btn.green {
  background: #27c93f;
}

.terminal-title {
  color: #8892b0;
  font-size: 0.8rem;
}

.terminal-body {
  padding: 15px;
  font-family: 'Fira Code', monospace;
  line-height: 1.6;
}

.terminal-prompt {
  color: #64ffda;
  margin-right: 10px;
}

.terminal-cursor {
  animation: blink 1s infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes underlineExpand {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@media (max-width: 768px) {
  #pageTitle {
    font-size: 2.5rem;
  }
  
  .subtext {
    font-size: 1.2rem;
  }
  
  .tech-stack {
    gap: 1rem;
  }
  
  .tech-icon img {
    width: 30px;
    height: 30px;
  }
  
  .terminal-window {
    font-size: 0.9rem;
  }
}
</style>