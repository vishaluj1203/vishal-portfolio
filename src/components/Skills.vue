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
import railsSvg from '@/icons/Ruby on Rails.svg'
import fastApiSvg from '@/icons/FastAPI.svg'
import vueSvg from '@/icons/Vue.js.svg'
import piniaSvg from '@/icons/pinia.svg'
import tailwindSvg from '@/icons/Tailwind CSS.svg'
import postgresqlSvg from '@/icons/PostgresSQL.svg'
import redisSvg from '@/icons/Redis.svg'
import terraformSvg from '@/icons/HashiCorp Terraform.svg'
import gcpSvg from '@/icons/Google Cloud.svg'
import dockerSvg from '@/icons/Docker.svg'
import gitSvg from '@/icons/Git.svg'
import githubActionsSvg from '@/icons/GitHub Actions.svg'
import gitlabSvg from '@/icons/GitLab.svg'
import vitestSvg from '@/icons/vitest.svg'
import storybookSvg from '@/icons/Storybook.svg'
import sassSvg from '@/icons/Sass.svg'
import bootstrapSvg from '@/icons/Bootstrap.svg'
import figmaSvg from '@/icons/Figma.svg'
import linuxSvg from '@/icons/Linux.svg'
import jwtSvg from '@/icons/jwt.svg'
import restapiSvg from '@/icons/restapi.svg'
import javascriptSvg from '@/icons/JavaScript.svg'
import typescriptSvg from '@/icons/TypeScript.svg'
import html5Svg from '@/icons/HTML5.svg'
import css3Svg from '@/icons/CSS3.svg'
import nodeSvg from '@/icons/Node.js.svg'
import npmSvg from '@/icons/NPM.svg'
import viteSvg from '@/icons/Vite.js.svg'
import webpackSvg from '@/icons/Webpack.svg'
import babelSvg from '@/icons/Babel.svg'
import eslintSvg from '@/icons/ESLint.svg'
import jestSvg from '@/icons/Jest.svg'
import cypressSvg from '@/icons/Cypress.svg'
import postmanSvg from '@/icons/Postman.svg'
import grafanaSvg from '@/icons/Grafana.svg'
import prometheusSvg from '@/icons/Prometheus.svg'
import kubernetesSvg from '@/icons/Kubernetes.svg'
import helmSvg from '@/icons/Helm.svg'
import firebaseSvg from '@/icons/Firebase.svg'
import materialUiSvg from '@/icons/Material UI.svg'

const skills = [
  { name: 'Ruby on Rails', link: 'https://rubyonrails.org/', icon: railsSvg },
  { name: 'FastAPI', link: 'https://fastapi.tiangolo.com/', icon: fastApiSvg },
  { name: 'Vue 3', link: 'https://vuejs.org/', icon: vueSvg },
  { name: 'Pinia', link: 'https://pinia.vuejs.org/', icon: piniaSvg },
  { name: 'Tailwind CSS', link: 'https://tailwindcss.com/', icon: tailwindSvg },
  { name: 'PostgreSQL', link: 'https://www.postgresql.org/', icon: postgresqlSvg },
  { name: 'Redis', link: 'https://redis.io/', icon: redisSvg },
  { name: 'Terraform', link: 'https://www.terraform.io/', icon: terraformSvg },
  { name: 'Google Cloud', link: 'https://cloud.google.com/', icon: gcpSvg },
  { name: 'Docker', link: 'https://www.docker.com/', icon: dockerSvg },
  { name: 'Git', link: 'https://git-scm.com/', icon: gitSvg },
  { name: 'GitHub Actions', link: 'https://github.com/features/actions', icon: githubActionsSvg },
  { name: 'GitLab CI/CD', link: 'https://docs.gitlab.com/ee/ci/', icon: gitlabSvg },
  { name: 'Vitest', link: 'https://vitest.dev/', icon: vitestSvg },
  { name: 'Storybook', link: 'https://storybook.js.org/', icon: storybookSvg },
  { name: 'SASS', link: 'https://sass-lang.com/', icon: sassSvg },
  { name: 'Bootstrap', link: 'https://getbootstrap.com/', icon: bootstrapSvg },
  { name: 'Figma', link: 'https://www.figma.com/', icon: figmaSvg },
  { name: 'Linux', link: 'https://www.kernel.org/', icon: linuxSvg },
  { name: 'OAuth2 / JWT', link: 'https://jwt.io/', icon: jwtSvg },
  { name: 'REST API', link: 'https://restfulapi.net/', icon: restapiSvg },
  { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: javascriptSvg },
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/', icon: typescriptSvg },
  { name: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: html5Svg },
  { name: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: css3Svg },
  { name: 'Node.js', link: 'https://nodejs.org/', icon: nodeSvg },
  { name: 'npm', link: 'https://www.npmjs.com/', icon: npmSvg },
  { name: 'Vite', link: 'https://vitejs.dev/', icon: viteSvg },
  { name: 'Webpack', link: 'https://webpack.js.org/', icon: webpackSvg },
  { name: 'Babel', link: 'https://babeljs.io/', icon: babelSvg },
  { name: 'ESLint', link: 'https://eslint.org/', icon: eslintSvg },
  { name: 'Jest', link: 'https://jestjs.io/', icon: jestSvg },
  { name: 'Cypress', link: 'https://www.cypress.io/', icon: cypressSvg },
  { name: 'Postman', link: 'https://www.postman.com/', icon: postmanSvg },
  { name: 'Grafana', link: 'https://grafana.com/', icon: grafanaSvg },
  { name: 'Prometheus', link: 'https://prometheus.io/', icon: prometheusSvg },
  { name: 'Kubernetes', link: 'https://kubernetes.io/', icon: kubernetesSvg },
  { name: 'Helm', link: 'https://helm.sh/', icon: helmSvg },
  { name: 'Firebase', link: 'https://firebase.google.com/', icon: firebaseSvg },
  { name: 'Material UI', link: 'https://mui.com/', icon: materialUiSvg },
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
