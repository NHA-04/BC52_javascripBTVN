document
  .getElementById("numberForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    tinhTongChuSo();
  });

function tinhTongChuSo() {
  var soNhap = parseInt(document.getElementById("soNhap").value);
  var soHangChuc = Math.floor(soNhap / 10);
  var soHangDV = soNhap % 10;
  var tong = soHangChuc + soHangDV;

  document.getElementById("ketQua").textContent = "Tổng chữ số: " + tong;
}
