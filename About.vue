<template>
  <div class="about-wrapper">
    <section class="about-container">
      <h1>👋 About Me</h1>
      <p>
        Hi, I'm <strong>Snowdev</strong> — a passionate 13-year-old developer from the United States. I started coding when I was just 10 and
        have since explored a variety of languages and technologies like <code>C++</code>, <code>Python</code>, <code>HTML</code>, 
        <code>CSS</code>, <code>JavaScript</code>, and frameworks such as <code>Vue</code>, <code>ImGui</code>, and <code>JNI</code>.
      </p>
      <p>
        I'm constantly learning and experimenting — at one point, I even began building my own operating system called 
        <code>SnowOS</code> (still a work in progress 🚧).
      </p>
    </section>
  </div>
</template>

<style scoped>
.about-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  min-height: 100vh;
  background: radial-gradient(circle at top left, #2c2c2c, #1a1a1a);
}

.about-container {
  background: #1e1e1e;
  padding: 3rem;
  max-width: 800px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  color: #fff;
  animation: fadeIn 0.8s ease-out;
}

.about-container h1 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: #7a88ff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.about-container p {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 1.2rem;
}

.about-container strong {
  color: #ffffff;
  font-weight: 600;
}

.about-container code {
  background-color: #2a2a2a;
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  color: #c5c8ff;
  font-size: 0.95rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
