const items = document.querySelectorAll('.category-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'selected' from all
    items.forEach(i => i.classList.remove('selected'));

    // Add 'selected' to clicked
    item.classList.add('selected');

    console.log('Selected:', item.textContent.trim());
  });
});

const amountItems = document.querySelectorAll('.amount-item');

amountItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'selected' from all
    amountItems.forEach(i => i.classList.remove('amount-selected'));

    // Add 'selected' to clicked
    item.classList.add('amount-selected');

    console.log('Selected:', item.textContent.trim());
  });
});
