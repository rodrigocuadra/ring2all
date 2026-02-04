/**
 * Ring2All Documentation Portal
 * Main Application JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all modules
    initTheme();
    initTOC();
    initCopyCode();
    initExternalLinks();
});

/**
 * Theme Toggle
 */
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Get saved theme or default
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);

            // Set cookie for PHP
            document.cookie = `theme=${next};path=/;max-age=31536000`;
        });
    }
}

/**
 * Generate Table of Contents
 */
function initTOC() {
    const tocNav = document.getElementById('toc-nav');
    const article = document.querySelector('.markdown-body');

    if (!tocNav || !article) return;

    const headings = article.querySelectorAll('h2, h3');

    if (headings.length === 0) {
        document.querySelector('.toc')?.remove();
        return;
    }

    const tocList = document.createElement('ul');

    headings.forEach((heading, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        // Ensure heading has ID
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }

        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        a.classList.add(heading.tagName.toLowerCase());

        li.appendChild(a);
        tocList.appendChild(li);
    });

    tocNav.appendChild(tocList);

    // Intersection Observer for active state
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const id = entry.target.id;
                const link = tocNav.querySelector(`a[href="#${id}"]`);

                if (entry.isIntersecting) {
                    tocNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                    link?.classList.add('active');
                }
            });
        },
        {
            rootMargin: '-100px 0px -66%',
            threshold: 0
        }
    );

    headings.forEach(heading => observer.observe(heading));
}

/**
 * Copy Code Button
 */
function initCopyCode() {
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach(pre => {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';

        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
        button.title = 'Copy code';

        button.addEventListener('click', async () => {
            const code = pre.querySelector('code');
            const text = code?.textContent || pre.textContent;

            try {
                await navigator.clipboard.writeText(text);
                button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                button.classList.add('copied');

                setTimeout(() => {
                    button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
                    button.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });

        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(button);
    });
}

/**
 * External Links (open in new tab)
 */
function initExternalLinks() {
    const links = document.querySelectorAll('.markdown-body a[href^="http"]');

    links.forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

/**
 * Smooth scroll to anchor
 */
function scrollToAnchor(hash) {
    if (!hash) return;

    const target = document.querySelector(hash);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Handle initial hash
if (window.location.hash) {
    setTimeout(() => scrollToAnchor(window.location.hash), 100);
}
