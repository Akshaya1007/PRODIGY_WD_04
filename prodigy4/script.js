document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const target = link.getAttribute('data-tab');

            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            link.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});
