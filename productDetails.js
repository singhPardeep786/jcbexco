// Unified modal manager to avoid closeForm conflicts

function productDetailsModalHandler() {
    // Open Product Details Modal
    function openProductDetails() {
        const overlay = document.getElementById('formOverlay3');
        overlay.style.display = 'flex';
        document.body.classList.add('no-scroll');
        setTimeout(() => {
            overlay.classList.add('active');
            const detailsSection = overlay.querySelector('.product-details-section');
            if (detailsSection) detailsSection.classList.add('active');
        }, 10);
    }

    // Close Product Details Modal
    function closeProductDetails() {
        const overlay = document.getElementById('formOverlay3');
        overlay.classList.remove('active');
        const detailsSection = overlay.querySelector('.product-details-section');
        if (detailsSection) detailsSection.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 300);
    }

    // Expose closeProductDetails globally only if not already used
    window.closeProductDetails = closeProductDetails;

    // Attach open handler to all .product_details_btn buttons
    document.querySelectorAll('.product_details_btn').forEach(btn => {
        btn.addEventListener('click', openProductDetails);
    });

    document.addEventListener('DOMContentLoaded', function() {
        const overlay = document.getElementById('formOverlay3');
        const closeBtn = overlay ? overlay.querySelector('.close-btn') : null;
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                closeProductDetails();
            });
        }
    });

    // Close modal when clicking outside the product-details-section
    const overlayDet = document.getElementById('formOverlay3');
    if(overlayDet) {
        overlayDet.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProductDetails();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        const overlay = document.getElementById('formOverlay3');
        if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
            closeProductDetails();
        }
    });
}
productDetailsModalHandler();