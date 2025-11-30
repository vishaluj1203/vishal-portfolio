<template>
    <section id="projects">
        <h2 class="text-2xl font-bold neon-text">Projects</h2>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="p in projects" :key="p.title"
                class="card p-4 rounded-lg neon-glow hover:scale-102 transition-transform">
                <div class="flex items-start justify-between">
                    <div>
                        <div class="font-semibold">{{ p.title }}</div>
                        <div class="text-sm text-gray-400">{{ p.tagline }}</div>
                    </div>
                    <div class="text-xs text-gray-300">{{ p.tech }}</div>
                </div>
                <p class="mt-3 text-gray-300 text-sm">{{ p.description }}</p>
                <div class="mt-3 flex gap-2">
                    <a v-if="p.link" :href="p.link" target="_blank"
                        class="text-sm px-3 py-1 rounded bg-white/5">Live</a>
                    <a v-if="p.repo" :href="p.repo" target="_blank" class="text-sm px-3 py-1 rounded border">Repo</a>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
const projects = [
    {
        title: 'Reverse Logistics Platform',
        tagline: 'SaaS for reverse shipment routing & incident management',
        tech: 'Rails, Vue 3, GCP',
        description: 'Improved routing workflows by 50% and enabled 3+ safe releases per week via CI/CD & infra automation.',
        link: '',
        repo: ''
    },
    {
        title: 'Real-time Tracking Service',
        tagline: 'Microservices + Pub/Sub for live status updates',
        tech: 'FastAPI, Cloud Pub/Sub',
        description: 'Enabled real-time status propagation across services with low-latency delivery and retries.',
        link: '',
        repo: ''
    }
]
</script>


<style scoped></style>
