document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in effect
    const options = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const capabilities = document.querySelectorAll('.capability');
    capabilities.forEach(capability => {
        observer.observe(capability);
    });

    // Hover effect for plans
    const plans = document.querySelectorAll('.plan');
    plans.forEach(plan => {
        plan.addEventListener('mouseover', () => {
            plan.style.transform = 'scale(1.05)';
            plan.style.transition = 'transform 0.3s';
        });
        plan.addEventListener('mouseout', () => {
            plan.style.transform = 'scale(1)';
        });
    });

    // Hover effect for devices
    const devices = document.querySelectorAll('.device');
    devices.forEach(device => {
        device.addEventListener('mouseover', () => {
            device.style.transform = 'scale(1.1)';
            device.style.transition = 'transform 0.3s';
        });
        device.addEventListener('mouseout', () => {
            device.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
