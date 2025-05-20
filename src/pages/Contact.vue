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

        <div class="field-group animate-slide-delay-4" style="margin-top: 1rem;">
          <!-- Google reCAPTCHA widget -->
          <div
            class="g-recaptcha"
            data-sitekey="6Ld8HUIrAAAAAIJPFOeJ3vKcED5qyn5o530_NqKE"
          ></div>
        </div>

        <div class="animate-slide-delay-5" style="margin-top: 1.5rem;">
          <button type="submit" :disabled="loading">
            {{ loading ? "Sending..." : "Send" }}
          </button>
        </div>
      </form>
    </div>

    <div
      v-if="popup.visible"
      class="popup"
      :class="{ success: popup.success, error: !popup.success }"
    >
      {{ popup.message }}
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

const BanWordPatterns = [
  /f[\W_]*[uüv][\W_]*[cçkq][\W_]*k/i,
  /s[\W_]*[h#]+[\W_]*[i1!]+[\W_]*t/i,
  /b[\W_]*[i1!]+[\W_]*[t+]+[\W_]*[cçkq]+[\W_]*h?/i,
  /a[\W_]*[s$5@]+[\W_]*s/i,
  /c[\W_]*[uü]+[\W_]*[n]+[\W_]*[t+]/i,
  /n[\W_]*[i1!l]+[\W_]*[g9q]+[\W_]*[g9q]+[\W_]*[a@]/i,
  /c[\W_]*[r]+[\W_]*[a@]+[\W_]*[cçk]+[\W_]*[k]+[\W_]*[e3]+[\W_]*[r]/i,
  /f[\W_]*[a@]+[\W_]*[g9q]+/i,
  /r[\W_]*[e3]+[\W_]*[t7]+[\W_]*[a@]+[\W_]*[r]+[\W_]*[d]/i,
  /w[\W_]*[h]+[\W_]*[o0]+[\W_]*[r]+[\W_]*[e3]/i,
  /s[\W_]*[l1!]+[\W_]*[uü]+[\W_]*[t+]/i,
  /d[\W_]*[i1!]+[\W_]*[cçkq]+/i,
  /p[\W_]*[uü]+[\W_]*[s$5]+[\W_]*[s$5]+[\W_]*[y]/i,
  /b[\W_]*[a@]+[\W_]*[s$5]+[\W_]*[t7]+[\W_]*[a@]+[\W_]*[r]+[\W_]*d/i,
  /c[\W_]*[o0]+[\W_]*[cçkq]+/i,
  /d[\W_]*[y]+[\W_]*[k]+[\W_]*[e3]/i,
  /k[\W_]*[i1!]+[\W_]*[k]+[\W_]*[e3]/i,
  /c[\W_]*[h]+[\W_]*[i1!]+[\W_]*[n]+[\W_]*[k]+/i,
  /s[\W_]*[p]+[\W_]*[i1!]+[\W_]*[cçkq]+/i,
  /t[\W_]*[w]+[\W_]*[a@]+[\W_]*[t+]/i,
  /m[\W_]*[o0]+[\W_]*[t+]+[\W_]*[h]+[\W_]*[e3]+[\W_]*[r]+[\W_]*[f]+[\W_]*[uü]+[\W_]*[cçkq]+[\W_]*[k]/i,
  /a[\W_]*[s$5]+[\W_]*[s$5]+[\W_]*[h]+[\W_]*[o0]+[\W_]*[l3e]+/i,
];

function containsBannedWord(text) {
  return BanWordPatterns.some((pattern) => pattern.test(text));
}

export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      popup: {
        visible: false,
        message: "",
        success: true,
      },
      loading: false,
      lastSentTimestampKey: "contactFormLastSent",
    };
  },
  mounted() {
    if (!document.getElementById("recaptcha-script")) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  },
  methods: {
    showPopup(message, success = true) {
      this.popup.message = message;
      this.popup.success = success;
      this.popup.visible = true;
      setTimeout(() => {
        this.popup.visible = false;
      }, 4000);
    },
    isRateLimited() {
      const lastSent = localStorage.getItem(this.lastSentTimestampKey);
      if (!lastSent) return false;
      const lastSentTime = parseInt(lastSent, 10);
      const now = Date.now();
      return now - lastSentTime < 60000; // 1 minute
    },
    setRateLimitTimestamp() {
      localStorage.setItem(this.lastSentTimestampKey, Date.now().toString());
    },
    validateRecaptcha() {
      return (
        window.grecaptcha &&
        window.grecaptcha.getResponse &&
        window.grecaptcha.getResponse().length > 0
      );
    },
    resetRecaptcha() {
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    },
    submitForm() {
      if (this.loading) return;

      const { name, email, message } = this.form;

      if (
        containsBannedWord(name) ||
        containsBannedWord(email) ||
        containsBannedWord(message)
      ) {
        this.showPopup("Your message contains inappropriate language.", false);
        return;
      }

      if (this.isRateLimited()) {
        this.showPopup(
          "You can only send one message per minute. Please wait and try again.",
          false
        );
        return;
      }

      if (!this.validateRecaptcha()) {
        this.showPopup("Please complete the reCAPTCHA.", false);
        return;
      }

      this.loading = true;

      emailjs
        .send(
          "service_6r50e8j",
          "template_mfagmof",
          { name, email, message },
          "rFEFGBLo75hVXOIUz"
        )
        .then(() => {
          this.showPopup(`Thanks, ${name}! Your message has been sent.`, true);
          this.form.name = "";
          this.form.email = "";
          this.form.message = "";
          this.setRateLimitTimestamp();
          this.resetRecaptcha();
        })
        .catch((error) => {
          console.error("FAILED...", error);
          this.showPopup("Failed to send message. Please try again.", false);
          this.resetRecaptcha();
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
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
  position: relative;
}

.contact-container {
  background-color: rgba(36, 36, 48, 0.95);
  border: 1px solid #333;
  border-radius: 16px;
  padding: 2.5rem;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 0 20px #0077ff55;
  font-family: "Poppins", sans-serif;
  user-select: none;
}

h1 {
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  user-select: none;
  text-align: center;
}

.field-group {
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  user-select: none;
}

input,
textarea {
  background-color: #222233;
  border: 2px solid #444466;
  border-radius: 14px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: white;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #00aaff;
  outline: none;
}

button {
  background: linear-gradient(90deg, #00aaff, #0055ff);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 14px;
  padding: 0.9rem 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  user-select: none;
  box-shadow: 0 4px 15px rgba(0, 170, 255, 0.4);
  width: 100%;
}

button:disabled {
  background: #555a75;
  cursor: not-allowed;
  box-shadow: none;
}

button:hover:not(:disabled) {
  background: linear-gradient(90deg, #0055ff, #00aaff);
}

.popup {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  user-select: none;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  animation: popupFadeIn 0.5s ease forwards;
}

.popup.success {
  background-color: #009933cc;
  color: #e6ffe6;
}

.popup.error {
  background-color: #cc3300cc;
  color: #ffe6e6;
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

@keyframes popupFadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
</style>
