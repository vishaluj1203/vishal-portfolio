<template>
    <div id="contact" class="card p-6 rounded-xl neon-card text-center">

        <h3 class="text-xl font-semibold neon-text mb-6">Contact</h3>

        <!-- Row 1 Icons -->
        <div class="flex justify-center gap-6 mb-6">
            <a href="mailto:vishaluj1203@gmail.com" class="contact-icon" target="_blank">
                <img src="../icons/gmail.svg" class="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/vishaluj" class="contact-icon" target="_blank">
                <img src="../icons/LinkedIn.svg" class="w-10 h-10" />
            </a>
            <a href="https://github.com/vishaluj" class="contact-icon" target="_blank">
                <img src="../icons/github.gif" class="w-10 h-10" />
            </a>
        </div>

        <!-- Connect Button -->
        <button class="btn-neon w-full py-3 mt-2" @click="showPopup = true">
            Let's Connect →
        </button>

        <!-- Popup Modal -->
        <div v-if="showPopup" class="popup-backdrop" @click.self="showPopup = false">
            <div class="popup-card">
                <h3 class="text-lg font-semibold neon-text mb-4">Connect With Me</h3>

                <a :href="calendarLink" target="_blank" class="popup-btn">
                    Book a Call (Google Calendar)
                </a>

                <div class="text-gray-400 my-2">OR</div>

                <a href="https://www.linkedin.com/in/vishaluj" target="_blank" class="popup-btn">
                    Visit My LinkedIn
                </a>

                <button class="popup-close" @click="showPopup = false">Close</button>
            </div>
        </div>

    </div>
</template>


<script setup>
import { ref } from 'vue'

const showPopup = ref(false)

const calendarLink = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0WkbbUU1FLZKR439k53Pla9lCOA0Ng1Ma-4YXvUcFzpkvtGTknjzRlNwwIUH7mBP63eI7FVgl5"
</script>


<style scoped>
/* Card */
.neon-card {
    background: rgba(5, 8, 15, 0.6);
    border: 1px solid rgba(0, 230, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 230, 255, 0.5);
}

/* Contact Icons */
.contact-icon {
    padding: 0.7rem;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(0, 230, 255, 0.2);
    box-shadow: 0 0 8px rgba(0, 230, 255, 0.4);
    transition: 0.3s;
}

.contact-icon:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 15px #00e6ff, 0 0 25px #ff00e6;
}

/* Button */
.btn-neon {
    background: linear-gradient(90deg, rgba(0, 230, 255, 0.85), rgba(255, 0, 230, 0.6));
    color: #01020a;
    border-radius: 10px;
    font-weight: 600;
    box-shadow: 0 0 10px rgba(0, 230, 255, 0.7);
    transition: 0.3s;
}

.btn-neon:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 18px #00e6ff, 0 0 30px #ff00e6;
}

/* Popup */
.popup-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(6px);
}

.popup-card {
    background: rgba(10, 15, 25, 0.85);
    padding: 2rem;
    border-radius: 16px;
    width: 90%;
    max-width: 360px;
    text-align: center;
    border: 1px solid rgba(0, 230, 255, 0.2);
    box-shadow: 0 0 15px rgba(0, 230, 255, 0.4);
}

.popup-btn {
    display: block;
    padding: 0.75rem;
    background: rgba(0, 230, 255, 0.2);
    border: 1px solid rgba(0, 230, 255, 0.4);
    border-radius: 10px;
    margin-bottom: 0.6rem;
    color: #00e6ff;
    text-shadow: 0 0 6px #00e6ff;
    transition: 0.3s;
}

.popup-btn:hover {
    background: rgba(0, 230, 255, 0.35);
    transform: translateY(-2px);
}

.popup-close {
    margin-top: 1rem;
    color: #ff00e6;
    text-decoration: underline;
    cursor: pointer;
}
</style>
