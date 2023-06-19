let show_product = document.querySelector('.products');
let search = document.querySelector('.search');
let cart_product_list = document.querySelector('.list-of-product');
let total_price = document.querySelector('.total-price');
let product;
let add_cart_products = [];

//Sidebar-start
let sidebar = document.querySelector('.sidebar');
let sidebar_toggle = document.querySelector('.sidebar-arrow');
sidebar_toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
  if (sidebar.classList.contains('close')) {
    document
      .querySelector('.cart-product-list')
      .classList.remove('sidebar-open-cart');
    if (window.matchMedia('(max-width:1175px)').matches) {
      sidebar_toggle
        .querySelector('ion-icon')
        .setAttribute('name', 'chevron-forward-outline');
    } else {
      sidebar_toggle
        .querySelector('ion-icon')
        .setAttribute('name', 'chevron-back-outline');
    }
  } else {
    document
      .querySelector('.cart-product-list')
      .classList.add('sidebar-open-cart');
    if (window.matchMedia('(max-width:1175px)').matches) {
      sidebar_toggle
        .querySelector('ion-icon')
        .setAttribute('name', 'chevron-back-outline');
    } else {
      sidebar_toggle
        .querySelector('ion-icon')
        .setAttribute('name', 'chevron-forward-outline');
    }
  }
});