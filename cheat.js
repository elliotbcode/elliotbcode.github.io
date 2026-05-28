// cheat.js – global cheat code
// When Shift is held and the user types the sequence "openseasame",
// the script will bypass the current level by navigating to index.html.
(function() {
  const CHEAT_SEQUENCE = 'openseasame';
  let buffer = '';
  // Reset buffer if Shift is released
  document.addEventListener('keyup', function(e) {
    if (!e.shiftKey) {
      buffer = '';
    }
  });
  document.addEventListener('keydown', function(e) {
    if (!e.shiftKey) return; // Only when Shift is held
    const key = e.key.toLowerCase();
    // Only consider character keys (ignore control keys)
    if (key.length === 1 && key >= 'a' && key <= 'z') {
      buffer += key;
      // Keep buffer length within the cheat sequence length
      if (buffer.length > CHEAT_SEQUENCE.length) {
        buffer = buffer.slice(-CHEAT_SEQUENCE.length);
      }
      if (buffer === CHEAT_SEQUENCE) {
        // Bypass the level – redirect to the main page (adjust as needed)
        window.location.href = './index.html';
      }
    }
  });
})();
