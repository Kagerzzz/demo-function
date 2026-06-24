// data.jsx — sample Vietnamese data used across all screens

const VN_FIRST = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý"];
const VN_LAST = ["An", "Bình", "Chi", "Dũng", "Hà", "Hằng", "Hoa", "Hùng", "Khoa", "Lan", "Linh", "Mai", "Nam", "Phong", "Quân", "Tâm", "Thảo", "Tú", "Vy", "Yến"];

const OUTLET_GROUPS = ["Tạp hóa lớn", "Tạp hóa nhỏ", "Siêu thị mini", "Quán cà phê", "Nhà hàng"];
const STATUS_TONES = {
  "Hoạt động": "green",
  "Tạm dừng": "yellow",
  "Đóng cửa": "gray",
  "Không hoạt động": "gray",
};

const ROUTES = [
  { id: "R001", code: "TBH-CG-01", name: "Tuyến Cầu Giấy 1", desc: "Phường Dịch Vọng, Quan Hoa", outlets: 18, mgr: "Nguyễn Văn An", status: "Hoạt động" },
  { id: "R002", code: "TBH-CG-02", name: "Tuyến Cầu Giấy 2", desc: "Phường Mai Dịch, Trung Hòa", outlets: 22, mgr: "Trần Thị Bình", status: "Hoạt động" },
  { id: "R003", code: "TBH-DD-01", name: "Tuyến Đống Đa 1", desc: "Phường Kim Liên, Phương Liên", outlets: 16, mgr: "Lê Văn Cường", status: "Hoạt động" },
  { id: "R004", code: "TBH-DD-02", name: "Tuyến Đống Đa 2", desc: "Phường Quốc Tử Giám, Văn Miếu", outlets: 14, mgr: "Phạm Thu Hà", status: "Tạm dừng" },
  { id: "R005", code: "TBH-HBT-01", name: "Tuyến Hai Bà Trưng", desc: "Phường Bạch Mai, Trương Định", outlets: 20, mgr: "Hoàng Minh Đức", status: "Hoạt động" },
  { id: "R006", code: "TBH-LB-01", name: "Tuyến Long Biên", desc: "Phường Bồ Đề, Ngọc Lâm", outlets: 19, mgr: "Đặng Quốc Khánh", status: "Hoạt động" },
  { id: "R007", code: "TBH-HD-01", name: "Tuyến Hà Đông", desc: "Phường Quang Trung, Vạn Phúc", outlets: 12, mgr: "Bùi Hương Lan", status: "Không hoạt động" },
  { id: "R008", code: "TBH-TX-01", name: "Tuyến Thanh Xuân", desc: "Phường Hạ Đình, Khương Đình", outlets: 17, mgr: "Đỗ Thanh Mai", status: "Hoạt động" },
];

const OUTLETS = [
  { id: "DB001", code: "DB-CG-1001", name: "Tạp hóa Hương Giang", img: 1, owner: "Phạm Thị Hương", phone: "0912 345 678", group: "Tạp hóa lớn", route: "TBH-CG-01", mgr: "Nguyễn Văn An", mgr2: "Trần Thị Bình", addr: "12 Cầu Giấy, P. Quan Hoa, Q. Cầu Giấy, Hà Nội", province: "Hà Nội", lat: 21.0341, lng: 105.7900, status: "Hoạt động" },
  { id: "DB002", code: "DB-CG-1002", name: "Siêu thị Mini Tâm Phát", img: 2, owner: "Lê Văn Tâm", phone: "0987 654 321", group: "Siêu thị mini", route: "TBH-CG-01", mgr: "Nguyễn Văn An", addr: "45 Trần Thái Tông, P. Dịch Vọng, Q. Cầu Giấy, Hà Nội", province: "Hà Nội", lat: 21.0335, lng: 105.7850, status: "Hoạt động" },
  { id: "DB003", code: "DB-CG-1003", name: "Tạp hóa Bà Lành", img: 3, owner: "Nguyễn Thị Lành", phone: "0901 222 333", group: "Tạp hóa nhỏ", route: "TBH-CG-01", mgr: "Trần Thị Bình", addr: "78 Xuân Thủy, P. Mai Dịch, Q. Cầu Giấy, Hà Nội", province: "Hà Nội", lat: 21.0370, lng: 105.7800, status: "Hoạt động" },
  { id: "DB004", code: "DB-DD-2001", name: "Cà phê Khánh An", img: 4, owner: "Hoàng Minh Khánh", phone: "0918 765 432", group: "Quán cà phê", route: "TBH-DD-01", mgr: "Lê Văn Cường", addr: "101 Tôn Đức Thắng, P. Quốc Tử Giám, Q. Đống Đa, Hà Nội", province: "Hà Nội", lat: 21.0260, lng: 105.8350, status: "Tạm dừng" },
  { id: "DB005", code: "DB-DD-2002", name: "Nhà hàng Hương Sen", img: 5, owner: "Đặng Thị Sen", phone: "0934 111 555", group: "Nhà hàng", route: "TBH-DD-01", mgr: "Lê Văn Cường", addr: "22 Khâm Thiên, P. Khâm Thiên, Q. Đống Đa, Hà Nội", province: "Hà Nội", lat: 21.0210, lng: 105.8390, status: "Hoạt động" },
  { id: "DB006", code: "DB-HBT-3001", name: "Tạp hóa Mai Linh", img: 6, owner: "Bùi Thị Mai", phone: "0976 888 111", group: "Tạp hóa lớn", route: "TBH-HBT-01", mgr: "Hoàng Minh Đức", addr: "55 Bạch Mai, P. Bạch Mai, Q. Hai Bà Trưng, Hà Nội", province: "Hà Nội", lat: 20.9970, lng: 105.8470, status: "Hoạt động" },
  { id: "DB007", code: "DB-LB-4001", name: "Siêu thị Mini Ngọc Lâm", img: 7, owner: "Đỗ Thanh Ngọc", phone: "0945 333 222", group: "Siêu thị mini", route: "TBH-LB-01", mgr: "Đặng Quốc Khánh", addr: "180 Ngọc Lâm, P. Ngọc Lâm, Q. Long Biên, Hà Nội", province: "Hà Nội", lat: 21.0440, lng: 105.8810, status: "Hoạt động" },
  { id: "DB008", code: "DB-LB-4002", name: "Tạp hóa Anh Tú", img: 8, owner: "Lý Anh Tú", phone: "0913 444 999", group: "Tạp hóa nhỏ", route: "TBH-LB-01", mgr: "Đặng Quốc Khánh", addr: "33 Ngô Gia Khảm, P. Bồ Đề, Q. Long Biên, Hà Nội", province: "Hà Nội", lat: 21.0470, lng: 105.8770, status: "Đóng cửa" },
  { id: "DB009", code: "DB-TX-5001", name: "Cà phê Vy Linh", img: 9, owner: "Vũ Thị Vy", phone: "0962 555 777", group: "Quán cà phê", route: "TBH-TX-01", mgr: "Đỗ Thanh Mai", addr: "78 Khương Đình, P. Khương Đình, Q. Thanh Xuân, Hà Nội", province: "Hà Nội", lat: 20.9920, lng: 105.8120, status: "Hoạt động" },
  { id: "DB010", code: "DB-TX-5002", name: "Tạp hóa Hằng Nga", img: 10, owner: "Ngô Thị Hằng", phone: "0938 666 222", group: "Tạp hóa lớn", route: "TBH-TX-01", mgr: "Đỗ Thanh Mai", addr: "162 Nguyễn Trãi, P. Hạ Đình, Q. Thanh Xuân, Hà Nội", province: "Hà Nội", lat: 20.9990, lng: 105.8090, status: "Hoạt động" },
];

const SALES_TEAM = [
  { id: "NV001", code: "S0142", name: "Nguyễn Văn An", avatar: 1, team: "Nhóm Sale 1" },
  { id: "NV002", code: "S0156", name: "Trần Thị Bình", avatar: 2, team: "Nhóm Sale 1" },
  { id: "NV003", code: "S0173", name: "Lê Văn Cường", avatar: 3, team: "Nhóm Sale 2" },
  { id: "NV004", code: "S0188", name: "Phạm Thu Hà", avatar: 4, team: "Nhóm Sale 2" },
  { id: "NV005", code: "S0201", name: "Hoàng Minh Đức", avatar: 5, team: "Nhóm Sale 3" },
  { id: "NV006", code: "S0214", name: "Đặng Quốc Khánh", avatar: 6, team: "Nhóm Sale 3" },
];

const SHIFTS = [
  { id: "CA001", code: "CA-S", name: "Ca sáng", start: "07:00", end: "11:30", note: "Ca sáng tiêu chuẩn", status: "Hoạt động" },
  { id: "CA002", code: "CA-C", name: "Ca chiều", start: "13:30", end: "17:30", note: "Ca chiều tiêu chuẩn", status: "Hoạt động" },
  { id: "CA003", code: "CA-T", name: "Ca tối", start: "18:00", end: "22:00", note: "Phục vụ điểm bán mở khuya", status: "Hoạt động" },
  { id: "CA004", code: "CA-FD", name: "Ca cả ngày", start: "08:00", end: "17:30", note: "Phân công đặc biệt", status: "Hoạt động" },
  { id: "CA005", code: "CA-D", name: "Ca đêm", start: "22:00", end: "06:00", note: "Ca qua ngày", overnight: true, status: "Hoạt động" },
  { id: "CA006", code: "CA-CN", name: "Ca cuối tuần", start: "09:00", end: "16:00", note: "Áp dụng T7/CN", status: "Tạm dừng" },
  { id: "CA007", code: "CA-X", name: "Ca xoay vòng", start: "06:00", end: "14:00", note: "Sale luân phiên", status: "Không hoạt động" },
];

function avSrc(n) { return "../assets/avatars/avatar-" + String(((n - 1) % 12) + 1).padStart(2, "0") + ".jpg"; }
function vnd(n) { return n.toLocaleString("vi-VN") + " đ"; }
function fmtNum(n) { return n.toLocaleString("vi-VN"); }

// Generate next-7-days date headers
function nextDays(n, startOffset = 0) {
  const today = new Date();
  today.setHours(0,0,0,0);
  return Array.from({ length: n }).map((_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i + startOffset);
    return d;
  });
}
function dowVi(d) { return ["CN","T2","T3","T4","T5","T6","T7"][d.getDay()]; }
function fmtDate(d) { return String(d.getDate()).padStart(2,"0") + "/" + String(d.getMonth()+1).padStart(2,"0"); }
function isToday(d) { const t = new Date(); return d.toDateString() === t.toDateString(); }

Object.assign(window, {
  OUTLETS, ROUTES, SHIFTS, SALES_TEAM,
  STATUS_TONES, OUTLET_GROUPS,
  avSrc, vnd, fmtNum, nextDays, dowVi, fmtDate, isToday
});
