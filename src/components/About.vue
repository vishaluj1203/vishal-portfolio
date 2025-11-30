<template>
    <section id="about" class="card p-6 rounded-xl neon-card">
        <h2 class="text-2xl font-bold neon-text mb-4">About Me</h2>
        <p class="mt-3 text-gray-300">
            Results-driven Full Stack Engineer with 3+ years of experience building scalable, cloud-native applications
            in logistics and reverse logistics sectors. Specialized in Ruby on Rails and FastAPI, with modern JavaScript
            frontends
            using Vue 3. Skilled in cloud infrastructure, microservices, and end-to-end feature delivery.
        </p>

        <ul class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <li class="p-3 card rounded-lg neon-card-hover">Built Cloud Run microservices with Terraform, scaling for 2×
                user traffic</li>
            <li class="p-3 card rounded-lg neon-card-hover">Increased frontend test coverage from 10% to 40% using
                Vitest & Vue Test Utils</li>
            <li class="p-3 card rounded-lg neon-card-hover">Optimized backend batching and parallel processing for 50%
                performance gains</li>
            <li class="p-3 card rounded-lg neon-card-hover">Led cross-functional coordination with PMs and DevOps,
                improving shipment routing by 50%</li>
            <li class="p-3 card rounded-lg neon-card-hover">Mentored junior engineers, accelerating onboarding and
                productivity</li>
            <li class="p-3 card rounded-lg neon-card-hover">Enhanced CI/CD pipelines with GitLab and Cloud Deploy,
                reducing release rollbacks by 50%</li>
            <li class="p-3 card rounded-lg neon-card-hover">Migrated legacy Vue 2 apps to Vue 3 using Composition API,
                reducing codebase size by 25%</li>
            <li class="p-3 card rounded-lg neon-card-hover">Instrumented services with Google Cloud Logging &
                Monitoring, cutting MTTR by 35%</li>
            <li class="p-3 card rounded-lg neon-card-hover">Implemented strict API authorization patterns and code
                quality checks, reducing vulnerabilities by 40%</li>
            <li class="p-3 card rounded-lg neon-card-hover">Drove reverse logistics improvements, increasing resale
                revenue by 30% and processing speed by 60%</li>
        </ul>

    </section>
</template>

<script setup>
</script>

<style scoped>
/* Neon card hover effect */
.neon-card-hover {
    background: rgba(5, 8, 15, 0.6);
    border: 1px solid rgba(0, 230, 255, 0.15);
    box-shadow: 0 0 8px rgba(0, 230, 255, 0.5);
    transition: all 0.3s ease;
}

.neon-card-hover:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px #00e6ff, 0 0 40px #ff00e6;
}

/* Neon heading */
.neon-text {
    color: #00e6ff;
    text-shadow: 0 0 6px #00e6ff, 0 0 18px #ff00e6;
    animation: flicker 2s infinite alternate;
}

/* Flicker animation */
@keyframes flicker {

    0%,
    100% {
        text-shadow: 0 0 6px #00e6ff, 0 0 18px #ff00e6;
    }

    50% {
        text-shadow: 0 0 12px #00e6ff, 0 0 24px #ff00e6;
    }
}
</style>
