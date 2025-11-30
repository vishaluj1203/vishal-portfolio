module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                neonBlue: '#00e6ff',
                deepBlue: '#020617',
                accent: '#6b46ff'
            },
            boxShadow: {
                'neon-sm': '0 0 8px rgba(0,230,255,0.55)',
                'neon-lg': '0 0 30px rgba(0,230,255,0.45), inset 0 0 20px rgba(107,70,255,0.08)'
            }
        }
    },
    plugins: []
}
