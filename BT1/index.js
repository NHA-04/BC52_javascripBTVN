document
  .getElementById("salaryForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    tinhLuong();
  });

function tinhLuong() {
  var soNgayLam = parseInt(document.getElementById("soNgayLam").value);

  var luongMotNgay = 100000;

  var luong = luongMotNgay * soNgayLam;

  document.getElementById("luongResult").innerText =
    "Lương của nhân viên là: " + luong + " đồng";
}
