<template>
  <div class="px-6 py-16 max-w-7xl mx-auto">
    <h1 class="text-4xl font-extrabold tracking-tight mb-12 text-center text-blue-500">
      My Projects
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20 transition duration-300 card flex flex-col justify-between"
      >
        <div>
          <h2 class="text-xl font-semibold mb-2 text-blue-400">{{ project.title }}</h2>
          <p class="mb-4 text-gray-300 leading-relaxed text-sm">
            {{ project.description }}
          </p>
        </div>
        <div class="flex justify-between items-center mt-auto pt-4 border-t border-gray-700 text-sm">
          <a
            :href="project.link"
            class="text-blue-400 hover:text-blue-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View →
          </a>
          <span class="text-gray-400 font-mono text-xs">{{ project.tech }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'My personal portfolio built with Vue and TailwindCSS.',
    link: 'https://snwy.dev/',
    tech: 'Vue, TailwindCSS',
  },
  {
    id: 2,
    title: 'SnowOS',
    description: 'An operating system built from scratch using NanoBytes Tutorial.',
    link: 'https://github.com/snowcloudsx/SnowOS',
    tech: 'ASM, C',
  },
  {
    id: 3,
    title: 'Celeste Client',
    description: 'A JNI Minecraft cheat coded in C++ with a GUI in ImGui.',
    link: 'https://github.com/snowcloudsx/Undyne',
    tech: 'C++, JNI, ImGui',
  },
  {
    id: 4,
    title: 'Auryn',
    description: 'Auryn Search is a program with countless tools to use at school',
    link: 'https://auryn-dev.github.io/Auryn-Search/',
    tech: 'HTML, CSS, JS, ParticleJS, UV Proxy',
  }
]
</script>

<style scoped>
@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }
}
</style>
