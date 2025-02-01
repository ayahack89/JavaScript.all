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



//Code Substitution (Another Logic)
// const themeToggle = document.getElementById('theme');

// // Load saved theme from localStorage on page load
// document.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme') || 'SystemDefault';
//     applyTheme(savedTheme);
//     themeToggle.value = savedTheme;
// });

// // Event listener for theme change
// themeToggle.addEventListener('change', () => {
//     const selectedTheme = themeToggle.value;
//     applyTheme(selectedTheme);
//     localStorage.setItem('theme', selectedTheme);
// });

// function applyTheme(theme) {
//     // Remove existing theme classes
//     document.body.classList.remove('bg-dark-theme', 'bg-light-theme');

//     switch (theme) {
//         case 'Light':
//             document.body.classList.add('bg-light-theme');
//             break;
//         case 'Dark':
//             document.body.classList.add('bg-dark-theme');
//             break;
//         case 'SystemDefault':
//         default:
//             // System default logic - adjust based on user’s system preference
//             if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//                 document.body.classList.add('bg-dark-theme');
//             } else {
//                 document.body.classList.add('bg-light-theme');
//             }
//             break;
//     }
// }
