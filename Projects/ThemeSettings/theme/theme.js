const themeToggle = document.getElementById('theme');

function applyTheme(theme) {
    document.body.classList.remove('bg-dark-theme', 'bg-light-theme');
    
    if (theme === 'SystemDefault') {
        // Check system preference
        const systemPrefersDefault = window.matchMedia('(prefers-color-scheme: light)').matches;
        document.body.classList.add(systemPrefersDefault ? 'bg-light-theme' : 'bg-dark-theme');
        document.body.classList.add(systemPrefersDefault? 'title-light' : 'title-dark');
    } else {
        document.body.classList.add(theme === 'Dark' ? 'bg-dark-theme' : 'bg-light-theme');
    }
}

const savedTheme = localStorage.getItem('theme') || 'SystemDefault';
themeToggle.value = savedTheme;
applyTheme(savedTheme);
themeToggle.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;
    localStorage.setItem('theme', selectedTheme);
    applyTheme(selectedTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (themeToggle.value === 'SystemDefault') {
        applyTheme('SystemDefault');
    }
});