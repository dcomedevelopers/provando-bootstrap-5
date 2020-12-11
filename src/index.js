import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';

import "./index.scss";

window.onload = () => {
  const switchButton = document.getElementById("my-custom-table-switch-button");
  switchButton.addEventListener("click", () => {
    const table = document.getElementById("my-custom-table");
    table.style.setProperty('--bs-table-bg', 'red', 'important');
  });
}

