<template>
    <footer class="mt-12 py-6 text-center neon-footer">
        <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Vishal U J - Built with
            <span class="text-pink-500">♥</span> using
            <a href="https://vuejs.org/" target="_blank" class="neon-link">Vue 3</a> +
            <a href="https://tailwindcss.com/" target="_blank" class="neon-link">Tailwind CSS</a>
        </p>
    </footer>
</template>

<script setup>
</script>

<style scoped>
.neon-footer {
    background: rgba(5, 8, 15, 0.6);
    border-top: 1px solid rgba(0, 230, 255, 0.2);
    box-shadow: 0 -2px 10px rgba(0, 230, 255, 0.3);
    transition: all 0.3s ease;
}

.neon-footer:hover {
    box-shadow: 0 -2px 20px #00e6ff, 0 -2px 40px #ff00e6;
}

.neon-link {
    color: #00e6ff;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.neon-link:hover {
    text-shadow: 0 0 8px #00e6ff, 0 0 20px #ff00e6;
    color: #ff00e6;
}
</style>
