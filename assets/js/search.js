/**
 * Ring2All Documentation Portal
 * Search Functionality
 */

document.addEventListener('DOMContentLoaded', function () {
    initSearch();
});

let searchIndex = null;

function initSearch() {
    const trigger = document.getElementById('search-trigger');
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');

    if (!trigger || !modal) return;

    // Open search modal
    trigger.addEventListener('click', openSearch);

    // Keyboard shortcut (Ctrl+K or Cmd+K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }

        // Close on Escape
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeSearch();
        }
    });

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeSearch();
        }
    });

    // Search input handler
    let debounceTimer;
    input?.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            performSearch(e.target.value);
        }, 200);
    });

    function openSearch() {
        modal.classList.add('open');
        input?.focus();
        document.body.style.overflow = 'hidden';

        // Load search index if not already loaded
        if (!searchIndex) {
            loadSearchIndex();
        }
    }

    function closeSearch() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        if (input) input.value = '';
        if (results) results.innerHTML = '';
    }
}

/**
 * Load search index from server
 */
async function loadSearchIndex() {
    try {
        const response = await fetch('/api/search.php?action=index');
        searchIndex = await response.json();
    } catch (err) {
        console.error('Failed to load search index:', err);
        searchIndex = [];
    }
}

/**
 * Perform search
 */
function performSearch(query) {
    const results = document.getElementById('search-results');
    if (!results) return;

    if (!query.trim()) {
        results.innerHTML = '';
        return;
    }

    // If index not loaded, show loading
    if (!searchIndex) {
        results.innerHTML = '<div class="search-loading">Loading...</div>';
        return;
    }

    const normalizedQuery = query.toLowerCase();
    const matches = [];

    searchIndex.forEach(item => {
        const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
        const contentMatch = item.content.toLowerCase().includes(normalizedQuery);

        if (titleMatch || contentMatch) {
            let score = 0;
            if (titleMatch) score += 10;
            if (contentMatch) score += 1;

            matches.push({ ...item, score });
        }
    });

    // Sort by score
    matches.sort((a, b) => b.score - a.score);

    // Limit results
    const topMatches = matches.slice(0, 10);

    if (topMatches.length === 0) {
        results.innerHTML = `
            <div class="search-no-results">
                <p>No results found for "${escapeHtml(query)}"</p>
            </div>
        `;
        return;
    }

    // Render results
    results.innerHTML = topMatches.map(item => {
        const snippet = getSnippet(item.content, normalizedQuery);
        return `
            <a href="${item.path}" class="search-result">
                <div class="search-result-title">${highlightMatches(item.title, normalizedQuery)}</div>
                <div class="search-result-path">${item.section} / ${item.subsection || ''}</div>
                ${snippet ? `<div class="search-result-snippet">${snippet}</div>` : ''}
            </a>
        `;
    }).join('');

    // Handle result click
    results.querySelectorAll('.search-result').forEach(result => {
        result.addEventListener('click', () => {
            document.getElementById('search-modal')?.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

/**
 * Get content snippet around match
 */
function getSnippet(content, query) {
    const index = content.toLowerCase().indexOf(query);
    if (index === -1) return '';

    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + query.length + 100);

    let snippet = content.substring(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet += '...';

    return highlightMatches(snippet, query);
}

/**
 * Highlight matching text
 */
function highlightMatches(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return escapeHtml(text).replace(regex, '<mark>$1</mark>');
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Escape regex special characters
 */
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
