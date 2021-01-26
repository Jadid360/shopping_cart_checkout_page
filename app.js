const deleteIcon = document.querySelectorAll("i");
deleteIcon.forEach((item) => {
  item.addEventListener("click", (e) => {
    const selectedItem = e.target;
    selectedItem.parentElement.parentElement.remove();
    updateCartPrice();
  });
});

function updateCartPrice() {
  const cartItem = document.querySelectorAll(".items");
  let total = 0;
  cartItem.forEach((item) => {
    const priceElement = item.children[3].children[0];
    let price = parseInt(priceElement.innerText.replace("$", ""));
    total += price;
  });
  const subTotalEl = document.querySelector(".subtotal");
  subTotalEl.innerText = `$${total}`;
  const totalEl = document.querySelector(".total");
  totalEl.innerText = `$${total}`;
}
updateCartPrice();

const incrementBtn = document.querySelectorAll(".increment");
incrementBtn.forEach((singleBtn) => {
  singleBtn.addEventListener("click", (e) => {
    const selectedEl = e.target;
    selectedEl.parentElement.children[1].value++;
    let quantity = selectedEl.parentElement.children[1].value;
    const itemPriceEl =
      selectedEl.parentElement.parentElement.children[1].children[1];

    if (parseInt(quantity) > 0) {
      selectedEl.parentElement.children[0].disabled = false;
    }
    const itemPriceValue = parseInt(
      itemPriceEl.innerText.replace("Price : $", "")
    );
    let cartItemPrice = quantity * itemPriceValue;
    // this variable is for show cart price into how many quantity he selected

    const cartItemPriceTotal =
      selectedEl.parentElement.parentElement.children[3].children[0];
    cartItemPriceTotal.innerText = `$${cartItemPrice}`;
    updateCartPrice();
  });
});
const decrementBtn = document.querySelectorAll(".decrement");
decrementBtn.forEach((singleBtn) => {
  singleBtn.addEventListener("click", (e) => {
    const selectedEl = e.target;
    selectedEl.parentElement.children[1].value--;
    const inputValue = parseInt(selectedEl.parentElement.children[1].value);
    if (inputValue <= 0) {
      selectedEl.disabled = true;
      selectedEl.parentElement.children[1].value = 0;
      selectedEl.parentElement.parentElement.children[3].children[0].innerText = `$${0}`;
      updateCartPrice();
    } else {
      const itemFixedPrice = parseInt(
        selectedEl.parentElement.parentElement.children[1].children[1].innerText.replace(
          "Price : $",
          ""
        )
      );
      const cartPrice = selectedEl.parentElement.parentElement.children[3].children[0].innerText.replace(
        "$",
        ""
      );
      let result = cartPrice - itemFixedPrice;
      selectedEl.parentElement.parentElement.children[3].children[0].innerText = `$${result}`;
      updateCartPrice();
    }
  });
});
const a = document.querySelector("a");
a.addEventListener("click", (e) => {
  alert("Now check your order");
});
