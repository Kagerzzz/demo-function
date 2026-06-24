// ProductCatalog.jsx — mock product master data
// Used by ProductPicker for search/select demos.

const PRODUCT_CATALOG = [
  // ─── Áo thun ─────────────────────────────────────────────
  { id: "p1",  sku: "AT-CT-01", name: "Áo thun Cotton Trắng",          category: "Áo thun",   brand: "Coolmate",  price: 260000, stock: 142, color: "#e8d5d1" },
  { id: "p2",  sku: "AT-LN-02", name: "Áo thun Linen Basic",           category: "Áo thun",   brand: "Coolmate",  price: 380000, stock: 86,  color: "#d5e0e8" },
  { id: "p3",  sku: "AT-OS-03", name: "Áo thun Oversized Đen",         category: "Áo thun",   brand: "Coolmate",  price: 320000, stock: 54,  color: "#3a3a4c" },
  { id: "p4",  sku: "AT-PL-04", name: "Áo polo nam phối túi",          category: "Áo thun",   brand: "Routine",   price: 420000, stock: 68,  color: "#7f9682" },
  { id: "p5",  sku: "AT-CR-05", name: "Áo croptop nữ in hoa",          category: "Áo thun",   brand: "Hnoss",     price: 245000, stock: 110, color: "#f4c2c2" },

  // ─── Quần ────────────────────────────────────────────────
  { id: "p6",  sku: "QS-KK-01", name: "Quần short Khaki",              category: "Quần",      brand: "Coolmate",  price: 420000, stock: 32,  color: "#c8a875" },
  { id: "p7",  sku: "QJ-SS-02", name: "Quần jean slim straight",       category: "Quần",      brand: "Levi's",    price: 890000, stock: 26,  color: "#5a6a82" },
  { id: "p8",  sku: "QT-VS-03", name: "Quần tây vải sớ",               category: "Quần",      brand: "Owen",      price: 560000, stock: 41,  color: "#2a2a3a" },
  { id: "p9",  sku: "QK-JG-04", name: "Quần kaki jogger",              category: "Quần",      brand: "Routine",   price: 480000, stock: 58,  color: "#a08a6a" },

  // ─── Phụ kiện ────────────────────────────────────────────
  { id: "p10", sku: "PK-TT-01", name: "Túi tote canvas in chữ",        category: "Phụ kiện",  brand: "Sandbox",   price: 180000, stock: 220, color: "#e8e0c8" },
  { id: "p11", sku: "PK-MN-02", name: "Mũ nón snapback đen",           category: "Phụ kiện",  brand: "Sandbox",   price: 220000, stock: 145, color: "#1a1a2a" },
  { id: "p12", sku: "PK-VL-03", name: "Ví da nam mini",                category: "Phụ kiện",  brand: "Routine",   price: 350000, stock: 78,  color: "#6a4a2a" },
  { id: "p13", sku: "PK-VT-04", name: "Vớ tất cotton 3 đôi",           category: "Phụ kiện",  brand: "Coolmate",  price: 99000,  stock: 320, color: "#d8d2c8" },
  { id: "p14", sku: "PK-DT-05", name: "Dây thắt lưng nam da bò",       category: "Phụ kiện",  brand: "Owen",      price: 290000, stock: 64,  color: "#4a3020" },

  // ─── Giày dép ────────────────────────────────────────────
  { id: "p15", sku: "GD-SN-01", name: "Giày sneaker trắng cổ thấp",    category: "Giày dép",  brand: "Ananas",    price: 650000, stock: 38,  color: "#f4f0e8" },
  { id: "p16", sku: "GD-SD-02", name: "Sandal nữ quai chéo",           category: "Giày dép",  brand: "Vascara",   price: 410000, stock: 52,  color: "#c8a890" },
  { id: "p17", sku: "GD-DR-03", name: "Giày da nam công sở",           category: "Giày dép",  brand: "Owen",      price: 980000, stock: 22,  color: "#2a1a10" },

  // ─── Đồ uống / F&B (vì SandboxVN có cả ERP nhà hàng) ─────
  { id: "p18", sku: "FB-CF-01", name: "Cà phê sữa đá Sài Gòn",         category: "Đồ uống",   brand: "House",     price: 35000,  stock: 999, color: "#8a5a3a" },
  { id: "p19", sku: "FB-CF-02", name: "Cappuccino nóng",               category: "Đồ uống",   brand: "House",     price: 55000,  stock: 999, color: "#a8825a" },
  { id: "p20", sku: "FB-TR-03", name: "Trà đào cam sả",                category: "Đồ uống",   brand: "House",     price: 49000,  stock: 999, color: "#e8a25a" },

  // ─── Quà tặng ────────────────────────────────────────────
  { id: "p21", sku: "GF-BT-01", name: "Bộ ấm trà gốm sứ Bát Tràng",    category: "Quà tặng",  brand: "Sandbox",   price: 290000, stock: 48,  color: "#a8b8c8" },
  { id: "p22", sku: "GF-NV-02", name: "Nến thơm hương quế",            category: "Quà tặng",  brand: "Sandbox",   price: 150000, stock: 96,  color: "#d8a878" },
  { id: "p23", sku: "GF-VC-03", name: "Voucher quà tặng 100k",         category: "Quà tặng",  brand: "Sandbox",   price: 100000, stock: 999, color: "#f8d8a8" },

  // ─── Đồ điện ─────────────────────────────────────────────
  { id: "p24", sku: "DE-TN-01", name: "Tai nghe Bluetooth không dây",  category: "Đồ điện",   brand: "JBL",       price: 1290000, stock: 18, color: "#1a1a1a" },
  { id: "p25", sku: "DE-SC-02", name: "Sạc dự phòng 10000mAh",         category: "Đồ điện",   brand: "Anker",     price: 590000, stock: 42,  color: "#3a3a4a" },
];

// All known categories (for filter chips)
const PRODUCT_CATEGORIES = [...new Set(PRODUCT_CATALOG.map((p) => p.category))];

// Strip Vietnamese diacritics so search is forgiving
function _stripDiacritics(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function searchProducts(query, { category, excludeIds } = {}) {
  const q = _stripDiacritics((query || "").trim());
  const exclude = new Set(excludeIds || []);
  return PRODUCT_CATALOG.filter((p) => {
    if (exclude.has(p.id)) return false;
    if (category && category !== "Tất cả" && p.category !== category) return false;
    if (!q) return true;
    const hay = _stripDiacritics(`${p.name} ${p.sku} ${p.brand} ${p.category}`);
    return hay.includes(q);
  });
}

// initials/letter for thumbnail fallback
function productInitials(p) {
  const words = p.name.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

Object.assign(window, {
  PRODUCT_CATALOG,
  PRODUCT_CATEGORIES,
  searchProducts,
  productInitials,
});
