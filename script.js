// Interactive JavaScript for Bharat Sahayak Landing Page
document.addEventListener('DOMContentLoaded', () => {
  const queryInput = document.getElementById('queryInput');
  const matchBtn = document.getElementById('matchBtn');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const dropZone = document.getElementById('dropZone');

  // Preset buttons click handler
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.innerText.replace('+ ', '');
      queryInput.value = `Show eligible schemes for a ${text}`;
      queryInput.focus();
    });
  });

  // Search button feedback
  matchBtn.addEventListener('click', () => {
    if (queryInput.value.trim() !== '') {
      const originalText = matchBtn.innerHTML;
      matchBtn.innerHTML = 'Matching...';
      matchBtn.classList.add('opacity-80');
      
      setTimeout(() => {
        alert(`Evaluating eligibility criteria for: "${queryInput.value}"`);
        matchBtn.innerHTML = originalText;
        matchBtn.classList.remove('opacity-80');
      }, 800);
    } else {
      queryInput.focus();
    }
  });

  // Drag and drop zone effect
  if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('border-saffron', 'bg-slate-900/60');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('border-saffron', 'bg-slate-900/60');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('border-saffron', 'bg-slate-900/60');
      alert('Document uploaded! Running OCR analysis...');
    });
  }
});
