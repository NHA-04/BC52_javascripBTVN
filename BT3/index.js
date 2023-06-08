document
  .getElementById("currencyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    quyDoiTien();
  });

function quyDoiTien() {
  var soUSD = parseFloat(document.getElementById("soUSD").value);
  var tiGiaUSD = 23500;
  var ketQua = soUSD * tiGiaUSD;

  var formatter = new Intl.NumberFormat("vi-VN");
  var ketQuaFormatted = formatter.format(ketQua);

  document.getElementById("ketQua").textContent =
    "Số tiền quy đổi: " + ketQuaFormatted + " VND";
}
