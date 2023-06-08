document
  .getElementById("averageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn việc submit form
    tinhTrungBinh();
  });

function tinhTrungBinh() {
  var so1 = parseFloat(document.getElementById("so1").value);
  var so2 = parseFloat(document.getElementById("so2").value);
  var so3 = parseFloat(document.getElementById("so3").value);
  var so4 = parseFloat(document.getElementById("so4").value);
  var so5 = parseFloat(document.getElementById("so5").value);

  var trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;

  document.getElementById("trungBinhResult").textContent =
    "Giá trị trung bình: " + trungBinh.toFixed(2);
}
