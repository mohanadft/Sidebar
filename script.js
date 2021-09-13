document.querySelector(".toggle").onclick = function () {
  document.querySelector(".sidebar").classList.toggle("active");
};

document.querySelector('.hide').onclick = function () {
  document.querySelector(".sidebar").classList.remove("active");
}