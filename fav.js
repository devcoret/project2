// ===== Mobile Menu =====
const menuBtn = document.getElementById('menuBtn');
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

menuBtn.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
menuOverlay.addEventListener('click', closeMenuFunc);

// ===== Notifications =====
const notifBtn = document.getElementById('notifBtn');
const notifPanel = document.getElementById('notifPanel');
const overlay = document.getElementById('overlay');

function openNotif() {
    notifPanel.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNotif() {
    notifPanel.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

notifBtn.addEventListener('click', openNotif);
overlay.addEventListener('click', closeNotif);

// ===== Toggle Favorite & Remove Card =====
function toggleFav(btn, cardId) {
    const card = document.getElementById(cardId);
    const isFav = btn.classList.contains('active');

    if (isFav) {
        // Removing from favorites
        btn.classList.remove('active');
        card.classList.add('removing');

        setTimeout(() => {
            card.style.display = 'none';
            showToast('تمت الإزالة من المفضلة ❌');
            updateFavoritesCount();
        }, 500);
    } else {
        // Adding to favorites
        btn.classList.add('active');
        card.classList.remove('removing');
        card.style.display = '';
        showToast('تمت الإضافة للمفضلة ⭐');
        updateFavoritesCount();
    }
}

// ===== Show Toast =====
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== Filter Tabs =====
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;

        cards.forEach((card, i) => {
            const type = card.dataset.type;
            const category = card.dataset.category;

            let show = false;
            if (filter === 'all') show = true;
            else if (filter === 'villa') show = type === 'villa';
            else if (filter === 'apartment') show = type === 'apartment';
            else if (filter === 'rent') show = category === 'rent';

            setTimeout(() => {
                if (show) {
                    card.style.display = '';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }, i * 100);
        });
    });
});

// ===== Mark Notification as Read =====
document.querySelectorAll('.notif-item').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.remove('unread');
        updateBadge();
    });
});

// ===== Update Badge Count =====
function updateBadge() {
    const unread = document.querySelectorAll('.notif-item.unread').length;
    const badge = document.getElementById('notifBadge');
    badge.textContent = unread;
    badge.style.display = unread ? 'block' : 'none';
}

// ===== Update Favorites Count =====
function updateFavoritesCount() {
    const favCount = document.querySelectorAll('.fav-btn.active').length;
    console.log('عدد المفضلة:', favCount);
}

// ===== Close on Escape Key =====
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeNotif();
        closeMenuFunc();
    }
});

// ===== Initialize =====
window.addEventListener('load', () => {
    updateBadge();
    updateFavoritesCount();
});