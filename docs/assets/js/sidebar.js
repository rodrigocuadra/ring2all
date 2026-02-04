/**
 * Ring2All Documentation Portal
 * Sidebar Navigation JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
    initSidebar();
});

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sections = document.querySelectorAll('.nav-section');
    const groups = document.querySelectorAll('.nav-group');

    // Mobile toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            document.body.classList.toggle('sidebar-open');

            // Create/toggle overlay
            let overlay = document.querySelector('.sidebar-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'sidebar-overlay';
                document.body.appendChild(overlay);

                overlay.addEventListener('click', () => {
                    sidebar.classList.remove('open');
                    overlay.classList.remove('open');
                    document.body.classList.remove('sidebar-open');
                });
            }
            overlay.classList.toggle('open');
        });
    }

    // Section toggles (Level 1)
    sections.forEach(section => {
        const header = section.querySelector('.nav-section-header');

        if (header) {
            header.addEventListener('click', (e) => {
                e.preventDefault();

                // Close other sections at same level
                sections.forEach(s => {
                    if (s !== section && s.classList.contains('active')) {
                        s.classList.remove('active');
                    }
                });

                section.classList.toggle('active');

                // Save state
                saveNavState();
            });
        }
    });

    // Group toggles (Level 2)
    groups.forEach(group => {
        const header = group.querySelector('.nav-group-header');

        if (header) {
            header.addEventListener('click', (e) => {
                e.preventDefault();

                // Close other groups at same level (within same section)
                const parentSection = group.closest('.nav-section-content');
                if (parentSection) {
                    parentSection.querySelectorAll('.nav-group').forEach(g => {
                        if (g !== group && g.classList.contains('active')) {
                            g.classList.remove('active');
                        }
                    });
                }

                group.classList.toggle('active');

                // Save state
                saveNavState();
            });
        }
    });

    // Restore saved state or expand based on current path
    restoreNavState();

    // Re-initialize Lucide icons after DOM manipulation
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

/**
 * Save navigation state to localStorage
 */
function saveNavState() {
    const activeSections = [];
    const activeGroups = [];

    document.querySelectorAll('.nav-section.active').forEach(section => {
        const sectionId = section.querySelector('.nav-section-header')?.dataset.section;
        if (sectionId) activeSections.push(sectionId);
    });

    document.querySelectorAll('.nav-group.active').forEach(group => {
        const groupId = group.querySelector('.nav-group-header')?.dataset.group;
        if (groupId) activeGroups.push(groupId);
    });

    localStorage.setItem('navState', JSON.stringify({ activeSections, activeGroups }));
}

/**
 * Restore navigation state from localStorage
 */
function restoreNavState() {
    try {
        const saved = JSON.parse(localStorage.getItem('navState') || '{}');

        if (saved.activeSections) {
            saved.activeSections.forEach(sectionId => {
                const header = document.querySelector(`.nav-section-header[data-section="${sectionId}"]`);
                header?.closest('.nav-section')?.classList.add('active');
            });
        }

        if (saved.activeGroups) {
            saved.activeGroups.forEach(groupId => {
                const header = document.querySelector(`.nav-group-header[data-group="${groupId}"]`);
                header?.closest('.nav-group')?.classList.add('active');
            });
        }
    } catch (e) {
        // Fallback: expand sections containing active items
        expandToActiveItem();
    }
}

/**
 * Expand navigation to show active item
 */
function expandToActiveItem() {
    const activeItem = document.querySelector('.nav-item.active');

    if (activeItem) {
        // Expand parent group
        const group = activeItem.closest('.nav-group');
        if (group) {
            group.classList.add('active');
        }

        // Expand parent section
        const section = activeItem.closest('.nav-section');
        if (section) {
            section.classList.add('active');
        }
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close sidebar on Escape (mobile)
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.querySelector('.sidebar-overlay');

        if (sidebar?.classList.contains('open')) {
            sidebar.classList.remove('open');
            overlay?.classList.remove('open');
            document.body.classList.remove('sidebar-open');
        }
    }
});
