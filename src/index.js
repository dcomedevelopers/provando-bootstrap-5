import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';

import 'bootstrap/dist/css/bootstrap.min.css';
// import "./index.scss";

window.onload = () => {
  const switchButton = document.getElementById("my-custom-table-switch-button");
  const rootStyles = window.getComputedStyle(document.body);
  switchButton.addEventListener("click", () => {
    const table = document.getElementById("my-custom-table");
    let tableStyle = window.getComputedStyle(table);
    console.log('--bs-table-bg was: ' + tableStyle.getPropertyValue("--bs-table-bg"));
    table.style.setProperty('--bs-table-bg', rootStyles.getPropertyValue('--bs-gray'), 'important');
    tableStyle = window.getComputedStyle(table);
    console.log('--bs-table-bg now is: ' + tableStyle.getPropertyValue("--bs-table-bg"));
  });
}

