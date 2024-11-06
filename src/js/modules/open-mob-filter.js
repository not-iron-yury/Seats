function openMobFilter() {
  const filterButtons = document.querySelectorAll('.catalog__filter-btn');

  if (filterButtons.length > 0) {
    const fields = document.querySelectorAll('.filter');

    filterButtons.forEach(el => (el.onclick = e => togglerMobFilter(e)));

    function togglerMobFilter(e) {
      const currentType = e.target.dataset.filter;
      const field = document.getElementById(`catalog-${currentType}`);

      field.classList.toggle('filter_active');
      e.target.classList.toggle('btn_functional_filter_active');

      for (let i = 0, len = filterButtons.length; i < len; i++) {
        if (field.id !== fields[i].id) {
          fields[i].classList.remove('filter_active');
          filterButtons[i].classList.remove('btn_functional_filter_active');
        }
      }
    }
  }
}

export default openMobFilter;

/*

  при первом клике:
    открывает соответствующее поле
    закрывает все остальные

    при повторном клике:
    закрывает текущее поле
*/
