function brochureFormHandler() {
    // Open Brochure Form
    function openBrochureForm() {
        const overlay = document.getElementById('formOverlay2');
        overlay.style.display = 'flex';
        document.body.classList.add('no-scroll');
        setTimeout(() => {
            overlay.classList.add('active');
        }, 10);
    }

    // Close Brochure Form
    function closeBrochureForm() {
        const overlay = document.getElementById('formOverlay2');
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 300);
    }

    // Expose closeBrochureForm globally for callbacks
    window.closeBrochureForm = closeBrochureForm;

    // Attach open handler to all .brochure_btn buttons
    document.querySelectorAll('.brochure_btn').forEach(btn => {
        btn.addEventListener('click', openBrochureForm);
    });

    // Close form when clicking outside the form container
    const overlayBro = document.getElementById('formOverlay2');
    if(overlayBro) {
        overlayBro.addEventListener('click', function(e) {
            if (e.target === this) {
                closeBrochureForm();
            }
        });
    }

    // Sample handler for downloading brochure
    window.downloadBrochure = function() {
        const language = document.querySelector('input[name="language"]:checked')?.value || "default language";
        alert(`Downloading brochure in ${language}`);
        closeBrochureForm();
    };

    // Close form with Escape key
    document.addEventListener('keydown', function(e) {
        const overlay = document.getElementById('formOverlay2');
        if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
            closeBrochureForm();
        }
    });
}
brochureFormHandler();