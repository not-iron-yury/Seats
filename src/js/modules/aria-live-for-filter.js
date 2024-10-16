function ariaLiveForFilter() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const filterResults = document.getElementById('filterResults');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      // Обновляем текст в aria-live элементе
      filterResults.textContent = 'Показаны результаты по выбранным фильтрам.';

      // Удаляем текст через 5 секунд (5000 миллисекунд)
      setTimeout(() => {
        filterResults.textContent = '';
      }, 5000); // Установите необходимое время задержки
    });
  });
}

export default ariaLiveForFilter;
