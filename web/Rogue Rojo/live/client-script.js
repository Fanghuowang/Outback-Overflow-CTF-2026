// Captured from the live Rogue Rojo submit page
const form = document.getElementById('form');
const status = document.getElementById('status');
const qinfo = document.getElementById('queue');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.className = 'status';
  status.textContent = 'Submitting...';
  try {
    const res = await fetch('/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: form.url.value }),
    });
    const data = await res.json();
    if (res.ok) {
      status.className = 'status success';
      status.textContent = data.message;
      qinfo.textContent = 'Position in queue: ' + data.position;
    } else {
      status.className = 'status error';
      status.textContent = data.error || 'Submission failed';
      qinfo.textContent = '';
    }
  } catch (err) {
    status.className = 'status error';
    status.textContent = 'Network error';
  }
});
