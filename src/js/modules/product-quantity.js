function productQuantity() {
  const buttonDecrease = document.getElementById('button-decrease');
  const buttonIncrease = document.getElementById('button-increase');
  const quantityInput = document.getElementById('quantity-input');

  buttonDecrease.onclick = decreaseQuantity;
  buttonIncrease.onclick = increaseQuantity;

  function decreaseQuantity() {
    if (quantityInput.value > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  }
  function increaseQuantity() {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  }
}

export default productQuantity;
