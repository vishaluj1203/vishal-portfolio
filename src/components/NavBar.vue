<template>
  <nav class="w-full py-6 px-6 bg-gray-900/70 backdrop-blur-xl top-0 z-50 shadow-[0_0_25px_rgba(0,230,255,0.25)]">

    <div class="flex items-center gap-5">

      <!-- Floating Avatar -->
      <div class="w-14 h-14 rounded-full border-2 border-neonBlue neon-glow flex items-center justify-center
               bg-neonBlue text-black font-bold text-xl floating">
        V
      </div>

      <!-- Text Block -->
      <div class="flex flex-col">

        <!-- Name -->
        <h1 class="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-pink-500 
                    bg-clip-text text-transparent animate-glow">
          Vishal U J
        </h1>

        <!-- Designation -->
        <p class="text-sm text-gray-300 font-medium opacity-90 mt-0.5">
          Full Stack Engineer
        </p>

        <!-- Animated Divider -->
        <div class="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-transparent mt-1 animate-expand"></div>

        <!-- Personality / Bio -->
        <div
          class="text-xs text-gray-300 mt-2 font-mono leading-relaxed bg-gray-900/40 p-3 rounded-lg border border-gray-700">
          <span class="text-neonBlue font-semibold">void</span> me() { <br />
          <div class="flex flex-wrap gap-2 mt-1 ml-2">
            <span class="badge wave" style="--i:0">Manufacturing Engineering → Software Engineering</span>
            <span class="badge wave" style="--i:1">🏸 Badminton</span>
            <span class="badge wave" style="--i:2">🏎️ F1</span>
            <span class="badge wave" style="--i:3">🎌 Anime</span>
            <span class="badge wave" style="--i:4">🍣 Food Hunter</span>
            <span class="badge wave" style="--i:5">😂 Chaos</span>
          </div>
          <br />}
        </div>


      </div>

    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* Floating avatar animation */
.floating {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }

  100% {
    transform: translateY(0);
  }
}

/* Glow for avatar */
.neon-glow {
  box-shadow: 0 0 10px #00e6ff, 0 0 25px #ff00e6;
}

/* Name glow animation */
@keyframes glow {

  0%,
  100% {
    filter: drop-shadow(0 0 4px #00e6ff);
  }

  50% {
    filter: drop-shadow(0 0 12px #ff00e6);
  }
}

.animate-glow {
  animation: glow 2.5s ease-in-out infinite;
}

/* Divider animation */
@keyframes expand {
  0% {
    width: 5px;
    opacity: 0.2;
  }

  100% {
    width: 80px;
    opacity: 1;
  }
}

.animate-expand {
  animation: expand 1s ease-out forwards;
}

/* Typing animation (smooth fade/slide) */
.typing {
  animation: fadeSlide 1.2s ease-out both;
}

@keyframes fadeSlide {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Neon color */
.border-neonBlue {
  border-color: #00e6ff;
}

.bg-neonBlue {
  background: #00e6ff;
}

.badge {
  background: rgba(0, 230, 255, 0.1);
  border: 1px solid #00e6ff44;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 0.75rem;
  color: #d1d5db;
  display: inline-block;
  transition: 0.25s ease, transform 0.25s ease;
}

.badge:hover {
  background: rgba(0, 230, 255, 0.2);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 0 8px #00e6ff55;
}

/* Wave-like bounce animation */
@keyframes bounceWave {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-4px);
  }
}

.wave {
  animation: bounceWave 2s infinite ease-in-out;
  animation-delay: calc(var(--i) * 0.2s);
  /* stagger for wave effect */
}

.text-neonBlue {
  color: #00e6ff;
  text-shadow: 0 0 6px #00e6ff, 0 0 18px #ff00e6;
}
</style>
