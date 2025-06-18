
function setupHeaderEvents() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}
  document.addEventListener('DOMContentLoaded', () => {
    const userButton = document.getElementById('user-menu-button');
    const dropdown = document.getElementById('user-dropdown');

    userButton.addEventListener('click', () => {
      dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!userButton.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });
  });

renderHeader();
setupHeaderEvents();
