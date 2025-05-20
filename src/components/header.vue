<template>
  <nav class="topnav">
    <div class="nav-inner">
      <div class="logo">❄️ Snowdev</div>

      <!-- Hamburger icon stays on the nav bar -->
      <div class="burger" @click="toggleMenu">
        ☰
      </div>

      <div class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
        <router-link to="/about" class="nav-link" exact-active-class="active">About</router-link>
        <router-link to="/projects" class="nav-link" exact-active-class="active">Projects</router-link>
        <router-link to="/contact" class="nav-link" exact-active-class="active">Contact Me</router-link>          
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style scoped>
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 64px;
  background: rgba(20, 20, 20, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
}

.nav-inner {
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  user-select: none;
  letter-spacing: 1px;
}

/* Navigation links */
.nav-links {
  display: flex;
  gap: 2rem;
}

/* Hamburger icon (hidden by default) */
.burger {
  display: none;
  font-size: 2rem; /* Make it larger */
  color: #ffffff;
  cursor: pointer;
  user-select: none;
  padding: 0.3rem 0.6rem;
}

/* Link styles */
.nav-link {
  color: #cdd9ff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.4rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background-color: #7a88ff;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #ffffff;
}

/* Mobile styles */
@media (max-width: 600px) {
  .burger {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    gap: 1rem;
    background-color: rgba(20, 20, 20, 0.95);
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    padding: 1rem;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>