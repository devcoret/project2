/* ========================================
   Mobile Menu Toggle
   ======================================== */
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
menuOverlay.addEventListener('click', closeMenuFunc);

/* ========================================
   Tab Filtering
   ======================================== */
const tabButtons = document.querySelectorAll('.tab-btn');
const notificationCards = document.querySelectorAll('.notification-card');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active tab
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Get filter type
        const filterType = button.dataset.filter;

        // Filter notifications
        notificationCards.forEach(card => {
            if (filterType === 'all') {
                card.style.display = 'flex';
            } else if (filterType === 'unread') {
                if (card.classList.contains('unread')) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

/* ========================================
   Mark as Read on Click
   ======================================== */
notificationCards.forEach(card => {
    card.addEventListener('click', function (event) {
        // Don't mark as read if clicking dots button
        if (event.target.closest('.dots-btn')) return;

        if (this.classList.contains('unread')) {
            this.classList.remove('unread');
            updateUnreadBadge();
        }
    });
});

/* ========================================
   Update Unread Badge Count
   ======================================== */
function updateUnreadBadge() {
    const unreadCount = document.querySelectorAll('.notification-card.unread').length;
    const badge = document.querySelector('.badge');
    if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'block' : 'none';
    }
}

/* ========================================
   Dots Button - Context Menu
   ======================================== */
const dotsButtons = document.querySelectorAll('.dots-btn');

dotsButtons.forEach(btn => {
    btn.addEventListener('click', function (event) {
        event.stopPropagation();
        const card = this.closest('.notification-card');

        // Simple alert for demo
        const choice = prompt('اختر إجراء:\n1. حذف الإشعار\n2. تحديد كمقروء\n3. تعطيل الإشعارات');

        if (choice === '1') {
            card.style.opacity = '0';
            card.style.transform = 'translateX(100px)';
            card.style.transition = '0.3s';
            setTimeout(() => {
                card.remove();
                updateUnreadBadge();
            }, 300);
        } else if (choice === '2') {
            card.classList.remove('unread');
            updateUnreadBadge();
        }
    });
});

/* ========================================
   Toast Notification
   ======================================== */
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/* ========================================
   Initialize
   ======================================== */
window.addEventListener('load', () => {
    updateUnreadBadge();
    console.log('تم تحميل صفحة الإشعارات بنجاح');
});

/* ========================================
   Keyboard Shortcuts
   ======================================== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenuFunc();
    }
});