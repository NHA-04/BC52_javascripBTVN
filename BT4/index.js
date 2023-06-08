document
  .getElementById("rectangleForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    tinhDienTichChuVi();
  });

function tinhDienTichChuVi() {
  var chieuDai = parseFloat(document.getElementById("chieuDai").value);
  var chieuRong = parseFloat(document.getElementById("chieuRong").value);
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;

  document.getElementById("ketQua").innerHTML =
    "Diện tích: " + dienTich + "<br>Chu vi: " + chuVi;
}
