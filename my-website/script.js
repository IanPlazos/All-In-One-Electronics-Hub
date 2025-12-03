<script>
document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const searchHint = document.getElementById('searchHint');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = searchInput.value.trim();

    if (!q) {
      searchHint.textContent = 'Please enter a search term.';
      searchHint.style.color = '#ffdddd';
      return;
    }

    searchHint.textContent = '';
    window.l
