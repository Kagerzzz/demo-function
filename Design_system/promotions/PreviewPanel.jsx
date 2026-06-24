// PreviewPanel.jsx — live plain-language summary of the promotion
// Pure function of state. No side effects.

const FIELD_LABELS = {
  sku: "Mã SKU",
  category: "Danh mục",
  brand: "Thương hiệu",
  cart_total: "Tổng giỏ hàng",
  cumulative_spend: "Chi tiêu tích lũy",
  order_count: "Số đơn đã mua",
  item_qty: "Số lượng sản phẩm",
  segment: "Nhóm khách hàng",
  channel: "Kênh bán",
};
const OP_LABELS = {
  is: "là",
  is_not: "không phải",
  contains: "chứa",
  gte: "≥",
  lte: "≤",
  in_list: "thuộc danh sách",
};
const SCOPE_LABELS = {
  same_as_trigger: "chính các sản phẩm kích hoạt",
  specific_sku: "danh sách SKU cụ thể",
  specific_category: "danh mục cụ thể",
  entire_cart: "toàn bộ giỏ hàng",
  cheapest: "sản phẩm rẻ nhất",
  most_expensive: "sản phẩm đắt nhất",
  new_item: "sản phẩm tặng kèm (mới)",
};
const REWARD_LABELS = {
  percent: "Giảm %",
  fixed: "Giảm số tiền",
  free_item: "Tặng sản phẩm",
  fixed_price: "Giá cố định",
  free_ship: "Miễn phí vận chuyển",
};

function formatNumVN(n) {
  if (n === "" || n == null) return "—";
  const s = String(n).replace(/\D/g, "");
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function formatVND(n) {
  if (n === "" || n == null || isNaN(+n)) return "—";
  return formatNumVN(n) + "đ";
}

// Time window labels — must match PERIOD_OPTIONS in PromotionForm.jsx
const PERIOD_LABELS_PV = {
  lifetime: "toàn bộ thời gian",
  "30d": "30 ngày qua",
  "90d": "90 ngày qua",
  "365d": "365 ngày qua",
  ytd: "từ đầu năm",
  campaign: "trong chiến dịch",
};

// Auto-detect the promotion archetype from state
function detectType(s) {
  if (s.rewardType === "free_ship") {
    return { key: "free_ship", icon: "truck", label: "Miễn phí vận chuyển" };
  }
  if (s.applyMode === "coupon") {
    return { key: "voucher", icon: "ticket", label: "Mã giảm giá (Voucher)" };
  }
  const hasCumulative = s.conditions.some(
    (c) => c.field === "cumulative_spend" || c.field === "order_count"
  );
  if (hasCumulative) {
    return { key: "loyalty_tier", icon: "crown", label: "Tặng theo mức tích lũy" };
  }
  const hasSegment = s.conditions.some((c) => c.field === "segment");
  if (hasSegment) {
    return { key: "loyalty", icon: "crown", label: "Khách hàng thân thiết" };
  }
  if (s.rewardType === "free_item") {
    return { key: "buy_get", icon: "gift", label: "Mua X tặng Y" };
  }
  if (s.scopeType === "cheapest" || s.scopeType === "most_expensive") {
    const qtyCond = s.conditions.some(
      (c) => c.field === "item_qty" && (c.op === "gte" || c.op === "is")
    );
    if (qtyCond) {
      return { key: "combo", icon: "stack", label: "Combo / Mix & Match" };
    }
  }
  if (
    s.rewardType === "percent" &&
    s.conditions.some((c) => c.field === "cart_total" && c.op === "gte")
  ) {
    return { key: "tier", icon: "chart-line-up", label: "Giảm theo bậc" };
  }
  return { key: "custom", icon: "sparkle", label: "Khuyến mãi tùy chỉnh" };
}

// Render one condition fragment, e.g. "Tổng giỏ hàng ≥ 500.000đ"
function conditionSummary(c) {
  if (!c.field) return null;
  const f = FIELD_LABELS[c.field] || c.field;
  const op = OP_LABELS[c.op] || c.op;
  let v = c.value;
  if ((c.field === "cart_total" || c.field === "cumulative_spend") && v) v = formatVND(v);
  else if ((c.field === "item_qty" || c.field === "order_count") && v) {
    v = formatNumVN(v) + (c.field === "order_count" ? " đơn" : " sp");
  }
  if (!v) v = "...";
  let suffix = "";
  if (c.field === "cumulative_spend" || c.field === "order_count") {
    const p = PERIOD_LABELS_PV[c.period || "lifetime"];
    suffix = ` (${p})`;
  }
  return `${f} ${op} ${v}${suffix}`;
}

function rewardSummary(s) {
  switch (s.rewardType) {
    case "percent":
      return s.rewardValue ? `giảm ${s.rewardValue}%` : "giảm ...%";
    case "fixed":
      return s.rewardValue ? `giảm ${formatVND(s.rewardValue)}` : "giảm ... đ";
    case "free_item": {
      const n = s.rewardItems.length;
      const qty = s.rewardQty || 1;
      if (!n) return `được tặng ${qty} sản phẩm (chưa chọn)`;
      if (n === 1) return `được tặng ${qty} × ${s.rewardItems[0].name}`;
      return `được chọn ${qty} trong ${n} sản phẩm tặng`;
    }
    case "fixed_price":
      return s.rewardValue ? `chỉ còn ${formatVND(s.rewardValue)}` : "chỉ còn ... đ";
    case "free_ship":
      return "được miễn phí vận chuyển";
    default:
      return "được ưu đãi";
  }
}

function buildSentence(s) {
  // Trigger
  const conds = s.conditions
    .map(conditionSummary)
    .filter(Boolean);
  let trig;
  if (!conds.length) {
    trig = "Khi đơn hàng đáp ứng điều kiện kích hoạt";
  } else if (conds.length === 1) {
    trig = `Khi ${conds[0].toLowerCase()}`;
  } else {
    const join = s.conditionJoin === "OR" ? " hoặc " : " và ";
    trig = `Khi ${conds.map((c) => c.toLowerCase()).join(join)}`;
  }

  // Scope
  const scope = SCOPE_LABELS[s.scopeType] || "sản phẩm liên quan";

  // Reward
  const rew = rewardSummary(s);

  // Cap
  let cap = "";
  if ((s.rewardType === "percent" || s.rewardType === "fixed") && s.rewardCap) {
    cap = `, tối đa ${formatVND(s.rewardCap)}`;
  }

  // Repeats
  let rep = "";
  if (s.repeatable) {
    rep =
      s.maxRepeats === "unlimited" || !s.maxRepeats
        ? " Lặp lại không giới hạn trong một đơn."
        : ` Lặp lại tối đa ${s.maxRepeats} lần mỗi đơn.`;
  }

  // Apply mode
  const mode =
    s.applyMode === "coupon"
      ? s.couponCode
        ? ` Khách nhập mã ${s.couponCode.toUpperCase()}.`
        : " Khách cần nhập mã giảm giá."
      : " Tự động áp dụng.";

  return { trig, scope, rew, cap, rep, mode };
}

function PreviewPanel({ state }) {
  const t = detectType(state);
  const { trig, scope, rew, cap, rep, mode } = buildSentence(state);
  const isEmpty = !state.conditions.some((c) => c.field) && !state.rewardValue;

  // Mock cart line items for the bottom illustration
  const cart = [
    { name: "Áo thun Linen Basic", qty: 1, price: 380000 },
    { name: "Áo thun Cotton Trắng", qty: 2, price: 260000 },
    { name: "Quần short Khaki", qty: 1, price: 420000 },
  ];
  const subtotal = cart.reduce((s, r) => s + r.qty * r.price, 0);
  let discount = 0;
  if (state.rewardType === "percent" && state.rewardValue) {
    discount = Math.round(subtotal * (+state.rewardValue / 100));
    if (state.rewardCap) discount = Math.min(discount, +state.rewardCap);
  } else if (state.rewardType === "fixed" && state.rewardValue) {
    discount = +state.rewardValue;
  } else if (state.rewardType === "free_item") {
    discount = 260000;
  }

  return (
    <>
      <section className="pf-card pf-preview">
        <div className="pf-preview__h">
          <span className="pf-preview__t">Xem trước</span>
          <span className="pf-preview__live"><span />Đang cập nhật</span>
        </div>

        <div className="pf-preview__type">
          <span className="pf-preview__type-ico"><i className={"ph ph-" + t.icon} /></span>
          <div>
            <div className="pf-preview__type-l">Loại khuyến mãi</div>
            <div className="pf-preview__type-n">{t.label}</div>
          </div>
        </div>

        <div className="pf-preview__sum">
          {isEmpty ? (
            <span className="pf-preview__sum-empty">
              Điền thông tin ở các mục bên trái để xem mô tả khuyến mãi xuất hiện tại đây.
            </span>
          ) : (
            <>
              <em>{trig}</em>, <em>{scope}</em> <em>{rew}{cap}</em>.
              {rep}
              {mode}
            </>
          )}
        </div>

        <ul className="pf-preview__list">
          <li>
            <i className="ph ph-target" />
            <div>
              <div className="pf-preview__list-l">Điều kiện</div>
              <div className="pf-preview__list-v">
                {state.conditions.length} điều kiện · nối bằng <b>{state.conditionJoin}</b>
              </div>
            </div>
          </li>
          <li>
            <i className="ph ph-package" />
            <div>
              <div className="pf-preview__list-l">Phạm vi ưu đãi</div>
              <div className="pf-preview__list-v">{SCOPE_LABELS[state.scopeType]}</div>
            </div>
          </li>
          <li>
            <i className="ph ph-gift" />
            <div>
              <div className="pf-preview__list-l">Ưu đãi</div>
              <div className="pf-preview__list-v">{REWARD_LABELS[state.rewardType]}</div>
            </div>
          </li>
          <li>
            <i className="ph ph-calendar-blank" />
            <div>
              <div className="pf-preview__list-l">Thời gian</div>
              <div className="pf-preview__list-v">
                {state.startAt
                  ? `${state.startAt.replace("T", " ")} → ${state.endAt ? state.endAt.replace("T", " ") : "không kết thúc"}`
                  : "chưa lên lịch"}
              </div>
            </div>
          </li>
          <li>
            <i className="ph ph-layer-plus" />
            <div>
              <div className="pf-preview__list-l">Kết hợp</div>
              <div className="pf-preview__list-v">
                {state.exclusive ? "Độc quyền – không kết hợp" : `Có thể kết hợp · ưu tiên ${state.priority || 0}`}
              </div>
            </div>
          </li>
        </ul>

        <div className="pf-preview__cart">
          <div className="pf-preview__cart-h">
            <span>Mô phỏng giỏ hàng</span>
            <span>3 sp</span>
          </div>
          {cart.map((r, i) => (
            <div key={i} className="pf-preview__cart-row">
              <span className="pf-preview__cart-row__ico"><i className="ph ph-t-shirt" /></span>
              <div>
                <div>{r.name}</div>
                <div className="pf-mute" style={{ fontSize: 11 }}>{r.qty} × {formatVND(r.price)}</div>
              </div>
              <span className="pf-preview__cart-row__p">{formatVND(r.qty * r.price)}</span>
            </div>
          ))}
          {discount > 0 ? (
            <div className="pf-preview__cart-row is-discount">
              <span className="pf-preview__cart-row__ico"><i className="ph ph-tag" /></span>
              <div>{state.name || "Khuyến mãi mới"}</div>
              <span className="pf-preview__cart-row__p">−{formatVND(discount)}</span>
            </div>
          ) : null}
          <div className="pf-preview__cart-tot">
            <span className="pf-mute">Tạm tính</span>
            <b>{formatVND(subtotal - discount)}</b>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, {
  PreviewPanel,
  FIELD_LABELS, OP_LABELS, SCOPE_LABELS, REWARD_LABELS,
  detectType, formatNumVN, formatVND,
});
