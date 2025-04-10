// Info Modal Logic
document.getElementById('about-visualization-btn').addEventListener('click', function () {
    document.getElementById('info-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.getElementById('close-info-modal').addEventListener('click', function () {
    document.getElementById('info-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modals when clicking outside content
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function (e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
