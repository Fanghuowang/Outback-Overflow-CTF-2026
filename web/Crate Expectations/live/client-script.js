// Captured from the live PageScope page (abridged; full original is in index.html)
const urlInput = document.getElementById('url');
const fetchBtn = document.getElementById('fetch-btn');
const resultDiv = document.getElementById('result');
urlInput.addEventListener('keydown', e => { if (e.key === 'Enter') fetchPreview(); });
async function fetchPreview() {
    const url = urlInput.value.trim();
    if (!url) return;
    fetchBtn.disabled = true;
    fetchBtn.textContent = 'Fetching...';
    resultDiv.innerHTML = '';
    try {
        const resp = await fetch('/api/preview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });
        const data = await resp.json();
        if (!resp.ok) {
            resultDiv.innerHTML = `<div class="result error"><h3>&#x26a0; Error</h3><p>${escapeHtml(data.error || 'Unknown error')}</p></div>`;
            return;
        }
        let html = `<div class="result">`;
        html += `<h3>${escapeHtml(data.title || 'No title')}</h3>`;
        html += `<div class="meta">`;
        html += `<strong>URL:</strong> ${escapeHtml(data.effective_url || data.url)}<br>`;
        html += `<strong>Status:</strong> ${data.status_code} &bull; <strong>Type:</strong> ${escapeHtml(data.content_type || 'unknown')}</div>`;
        // ... see index.html for the rest of the rendering logic
    } catch (err) { /* see index.html */ }
}
