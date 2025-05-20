<template>
  <div class="contact-wrapper">
    <div class="contact-container">
      <h1 class="animate-pop">Contact Me</h1>
      <form @submit.prevent="submitForm">
        <div class="field-group animate-slide-delay-1">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="field-group animate-slide-delay-2">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="field-group animate-slide-delay-3">
          <label for="message">Message</label>
          <textarea id="message" rows="5" v-model="form.message" required></textarea>
        </div>
        <div class="animate-slide-delay-4">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      alert(`Thanks, ${this.form.name}! Your message has been sent.`);
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
};
</script>

<style scoped>
.contact-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(-45deg, #1e1e2f, #2a2a3b, #202030, #1a1a26);
  background-size: 300% 300%;
  animation: gradientBG 25s ease infinite;
  color: white;
}

.contact-container {
  background-color: rgba(36, 36, 48, 0.95);
  border: 1px solid #333;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  animation: fadeInUp 1s ease-out;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  color: #ffffff;
}

form {
  display: flex;
  flex-direction: column;
}

.field-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #ccc;
}

input,
textarea {
  background-color: #2a2a3b;
  color: #fff;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #646cff;
  box-shadow: 0 0 10px #646cff66;
}

button {
  background-color: #646cff;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  align-self: flex-end;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px #646cffaa;
}

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-pop {
  animation: popIn 0.8s ease forwards;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.85);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-slide-delay-1 {
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.3s;
}
.animate-slide-delay-2 {
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.5s;
}
.animate-slide-delay-3 {
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.7s;
}
.animate-slide-delay-4 {
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.9s;
}
.animate-slide-delay-1,
.animate-slide-delay-2,
.animate-slide-delay-3,
.animate-slide-delay-4 {
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>