<template>
    <div class="min-h-screen flex flex-col items-center justify-start text-white px-6 py-12">
        <div class="w-full max-w-5xl">
            <NavBar />
            <About />
            <Skills />
            <Contact />
            <Footer class="mt-12" />
        </div>
    </div>
</template>


<script setup>
import NavBar from './components/NavBar.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>
