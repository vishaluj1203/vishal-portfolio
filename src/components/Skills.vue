<template>
  <div class="card p-6 rounded-xl neon-card overflow-hidden mt-10">
    <h3 class="text-xl font-semibold neon-text mb-6">Skills & Tech Stack</h3>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="skill-logo group"
      >
        <img
          :src="skill.icon"
          :alt="skill.name + ' logo'"
          class="max-w-[70px] max-h-[70px] transition-transform duration-300 group-hover:scale-110"
        />
        <span class="text-xs mt-2 text-gray-300">{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { name: 'Ruby on Rails', link: 'https://rubyonrails.org/', icon: 'src/icons/Ruby on Rails.svg' },
  { name: 'FastAPI', link: 'https://fastapi.tiangolo.com/', icon: 'src/icons/FastAPI.svg' },
  { name: 'Vue 3', link: 'https://vuejs.org/', icon: 'src/icons/Vue.js.svg' },
  { name: 'Pinia', link: 'https://pinia.vuejs.org/', icon: 'src/icons/pinia.svg' },
  { name: 'Tailwind CSS', link: 'https://tailwindcss.com/', icon: 'src/icons/Tailwind CSS.svg' },
  { name: 'PostgreSQL', link: 'https://www.postgresql.org/', icon: 'src/icons/PostgresSQL.svg' },
  { name: 'Redis', link: 'https://redis.io/', icon: 'src/icons/Redis.svg' },
  { name: 'Terraform', link: 'https://www.terraform.io/', icon: 'src/icons/HashiCorp Terraform.svg' },
  { name: 'Google Cloud', link: 'https://cloud.google.com/', icon: 'src/icons/Google Cloud.svg' },
  { name: 'Docker', link: 'https://www.docker.com/', icon: 'src/icons/Docker.svg' },
  { name: 'Git', link: 'https://git-scm.com/', icon: 'src/icons/Git.svg' },
  { name: 'GitHub Actions', link: 'https://github.com/features/actions', icon: 'src/icons/GitHub Actions.svg' },
  { name: 'GitLab CI/CD', link: 'https://docs.gitlab.com/ee/ci/', icon: 'src/icons/GitLab.svg' },
  { name: 'Vitest', link: 'https://vitest.dev/', icon: 'src/icons/vitest.svg' },
  { name: 'Storybook', link: 'https://storybook.js.org/', icon: 'src/icons/Storybook.svg' },
  { name: 'SASS', link: 'https://sass-lang.com/', icon: 'src/icons/Sass.svg' },
  { name: 'Bootstrap', link: 'https://getbootstrap.com/', icon: 'src/icons/Bootstrap.svg' },
  { name: 'Figma', link: 'https://www.figma.com/', icon: 'src/icons/Figma.svg' },
  { name: 'Linux', link: 'https://www.kernel.org/', icon: 'src/icons/Linux.svg' },
  { name: 'OAuth2 / JWT', link: 'https://jwt.io/', icon: 'src/icons/jwt.svg' },
  { name: 'REST API', link: 'https://restfulapi.net/', icon: 'src/icons/restapi.svg' },
  { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'src/icons/JavaScript.svg' },
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/', icon: 'src/icons/TypeScript.svg' },
  { name: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'src/icons/HTML5.svg' },
  { name: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'src/icons/CSS3.svg' },
  { name: 'Node.js', link: 'https://nodejs.org/', icon: 'src/icons/Node.js.svg' },
  { name: 'npm', link: 'https://www.npmjs.com/', icon: 'src/icons/NPM.svg' },
  { name: 'Vite', link: 'https://vitejs.dev/', icon: 'src/icons/Vite.js.svg' },
  { name: 'Webpack', link: 'https://webpack.js.org/', icon: 'src/icons/Webpack.svg' },
  { name: 'Babel', link: 'https://babeljs.io/', icon: 'src/icons/Babel.svg' },
  { name: 'ESLint', link: 'https://eslint.org/', icon: 'src/icons/ESLint.svg' },
  { name: 'Jest', link: 'https://jestjs.io/', icon: 'src/icons/Jest.svg' },
  { name: 'Cypress', link: 'https://www.cypress.io/', icon: 'src/icons/Cypress.svg' },
  { name: 'Postman', link: 'https://www.postman.com/', icon: 'src/icons/Postman.svg' },
  { name: 'Grafana', link: 'https://grafana.com/', icon: 'src/icons/Grafana.svg' },
  { name: 'Prometheus', link: 'https://prometheus.io/', icon: 'src/icons/Prometheus.svg' },
  { name: 'Kubernetes', link: 'https://kubernetes.io/', icon: 'src/icons/Kubernetes.svg' },
  { name: 'Helm', link: 'https://helm.sh/', icon: 'src/icons/Helm.svg' },
  { name: 'Firebase', link: 'https://firebase.google.com/', icon: 'src/icons/Firebase.svg' },
  { name: 'Material UI', link: 'https://mui.com/', icon: 'src/icons/Material UI.svg' },
]
</script>

<style scoped>
.neon-card {
  background: rgba(5, 8, 15, 0.6);
  border: 1px solid rgba(0, 230, 255, 0.15);
  box-shadow: 0 0 8px rgba(0, 230, 255, 0.5);
}

.neon-text {
  color: #00e6ff;
  text-shadow: 0 0 6px #00e6ff, 0 0 18px #ff00e6;
}

.skill-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 230, 255, 0.15);
  box-shadow: 0 0 6px rgba(0, 230, 255, 0.3);
  transition: all 0.3s ease;
}

.skill-logo:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 16px #00e6ff, 0 0 32px #ff00e6;
}
</style>
