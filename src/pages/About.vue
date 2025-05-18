<template>
  <div class="flex justify-center items-center min-h-screen px-4 py-16 bg-gray-900">
    <section 
      class="bg-gray-800 p-10 max-w-3xl rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.7)] text-indigo-200 font-sans animate-fadeIn"
      style="animation-duration: 0.8s; animation-timing-function: ease-out;"
    >
      <h1 class="text-4xl mb-6 font-extrabold text-indigo-400 drop-shadow-[0_2px_6px_rgba(100,108,255,0.6)]">
        👋 About Me
      </h1>
      <p class="mb-5 text-lg leading-relaxed text-indigo-200">
        Hi, I'm <strong class="text-white font-semibold">Snowdev</strong> — a passionate 13-year-old developer from the United States. I started coding when I was just 10 and
        have since explored a variety of languages and technologies like <code class="bg-gray-700 px-2 py-1 rounded-lg font-mono text-indigo-300 text-base">C++</code>, <code class="bg-gray-700 px-2 py-1 rounded-lg font-mono text-indigo-300 text-base">Python</code>, <code class="bg-gray-700 px-2 py-1 rounded-lg font-mono text-indigo-300 text-base">HTML</code>, 
        <code class="bg-gray-700 px-2 py-1 rounded-lg font-mono text-indigo-300 text-base">CSS</code>, <code class="bg-gray-700 px-2 py-1 rounded-lg font-mono text-indigo-300 text-base">JavaScript</code>, and frameworks such as <code class="bg-gray-700 px-2 py-1 rounded-lg font-mono text-indigo-300 text-base">Vue</code>, <code class="bg-gray-700 px-2 py-1 rounded-lg font-mono text-indigo-300 text-base">ImGui</code>, and <code class="bg-gray-700 px-2 py-1 rounded-lg font-mono text-indigo-300 text-base">JNI</code>.
      </p>
      <p class="text-lg leading-relaxed mb-0 text-indigo-200">
        I'm constantly learning and experimenting — at one point, I even began building my own operating system called 
        <code class="bg-gray-700 px-2 py-1 rounded-lg font-mono text-indigo-300 text-base">SnowOS</code> (still a work in progress 🚧).
      </p>
    </section>
  </div>
</template>

<style>
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

/* Tailwind doesn't provide this animation by default, so keep this here */
.animate-fadeIn {
  animation-name: fadeIn;
}
</style>
