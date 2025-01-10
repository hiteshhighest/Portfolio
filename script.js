// Open - Sidebar
function Showsidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
    const header = document.querySelector('.header')
    header.style.display = 'none';
}

// Close - Sidebar
function Hidesidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
    const header = document.querySelector('.header')
    header.style.display = 'flex';
}
