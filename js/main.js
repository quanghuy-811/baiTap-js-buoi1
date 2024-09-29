/* Bài 1: Tính lương nhân viên
B1: Xác định input: Số ngày làm, lương cơ bản
B2: Lương nhân viên = số ngày + lương cơ bản
B3: Xác địng output: Tên + lương nhận viên
*/

let tenNV = prompt("nhập tên nhân viên");
let soNgayLam = prompt("nhập số ngày làm");
let luongCB = prompt("nhập lương cơ bản");

let luong = parseInt(soNgayLam) * parseInt(luongCB);

console.log("Nhân Viên ", tenNV, " :", luong);

/* Bài 2: Tính điểm trung bình
 B1: Xác định input: so1, so2 , so3, so4, so5
 B2: Số trung bình = (so1+ so2  + so3+  so4+  so5) / 5
 B3: Xác địng output: soTrungBinh = Số trung bình
 */

let so1 = prompt("nhập số 1");
let so2 = prompt("nhập số 2");
let so3 = prompt("nhập số 3");
let so4 = prompt("nhập số 4");
let so5 = prompt("nhập số 5");

let soTrungBinh =
  (parseInt(so1) +
    parseInt(so2) +
    parseInt(so3) +
    parseInt(so4) +
    parseInt(so5)) /
  5;

console.log(" soTrungBinh:", soTrungBinh);

/* Bài 3: quy đổi tiền tệ
 B1: Xác định input: priceUSD , quantity ,
 B2: Số tiền Việt nhận được: priceUSD * quantity
 B3: Xác địng output: số lượng USD , VNĐ
 */

let priceUSD = prompt("nhập giá USD hiện nay");
let quantity = prompt("nhập số lượng USD bạn đang có");

let VNĐ = priceUSD * quantity;
console.log("Với ", quantity + " USD bạn sẽ đổi được", VNĐ + " VNĐ");

/* Bài 4: tính chu vi và diện tích hình chữ nhật
 B1: Xác định input: length, width
 B2: chuVi = (length + width) * 2
    dienTich = length * width

 B3: Xác địng output: chuVi, dienTich
 */

let length = prompt("nhập chiều dài hình chữ nhật");
let width = prompt("nhập chiều rộng hình chữ nhật");

let chuVi = (parseInt(length) + parseInt(width)) * 2;
console.log("Chu vi hình chữ nhật: ", chuVi);
let dienTich = parseInt(length) * parseInt(width);
console.log("Diện tích hình chữ nhật: ", dienTich);
