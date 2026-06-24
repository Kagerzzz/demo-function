/* @ds-bundle: {"format":3,"namespace":"SandboxVNDesign_0f72a9","components":[],"sourceHashes":{"promotions/FormPrimitives.jsx":"9f5a8ba4d687","promotions/PreviewPanel.jsx":"9dea7f790339","promotions/ProductCatalog.jsx":"707175d7a0c1","promotions/ProductPicker.jsx":"f015676cc161","promotions/PromotionForm.jsx":"428fecb644e5","promotions/app.jsx":"addc25d3b55d","sale_dms/app.jsx":"bc8741abe6a5","sale_dms/data.jsx":"8e64b69087b2","sale_dms/dms-common.jsx":"f24f8bce43d5","sale_dms/dms-shell.jsx":"5b9f0b8feeff","sale_dms/screens/Assignments.jsx":"f8aea93b127e","sale_dms/screens/Outlets.jsx":"380ec2a1b33f","sale_dms/screens/Reports.jsx":"b9cfea5cbfc9","sale_dms/screens/Routes.jsx":"44b4012ffa2d","sale_dms/screens/Shifts.jsx":"8e18caaa8040","sale_dms/screens/Tracking.jsx":"696c98080b00","ui_kits/admin/Common.jsx":"f24f8bce43d5","ui_kits/admin/Customers.jsx":"e1a4df7fa8ae","ui_kits/admin/Dashboard.jsx":"1a11809d88bc","ui_kits/admin/Marketing.jsx":"37a5d5128650","ui_kits/admin/Shell.jsx":"3a84e273bd5b","ui_kits/admin/app.jsx":"cb113d834517"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SandboxVNDesign_0f72a9 = window.SandboxVNDesign_0f72a9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// promotions/FormPrimitives.jsx
try { (() => {
// FormPrimitives.jsx — reusable bits for the promotion editor
const {
  useState: usePF,
  useRef: useRefPF
} = React;

// ── Section card with numbered title ─────────────────────────
function PFSection({
  num,
  title,
  sub,
  right,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-card"
  }, /*#__PURE__*/React.createElement("header", {
    className: "pf-card__h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-card__t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-card__num"
  }, num), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "pf-card__title"
  }, title), sub ? /*#__PURE__*/React.createElement("div", {
    className: "pf-card__sub"
  }, sub) : null)), right ? /*#__PURE__*/React.createElement("div", {
    className: "pf-card__h-right"
  }, right) : null), /*#__PURE__*/React.createElement("div", {
    className: "pf-card__body"
  }, children));
}

// ── Labelled row (label above input) ────────────────────────
function PFRow({
  label,
  required,
  hint,
  children,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-row " + (className || "")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "pf-row__lbl"
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*") : null) : null, children, hint ? /*#__PURE__*/React.createElement("div", {
    className: "pf-row__hint"
  }, hint) : null);
}

// ── Text input / number / textarea ──────────────────────────
function PFInput({
  value,
  onChange,
  placeholder,
  type = "text",
  suffix,
  prefix,
  width
}) {
  if (suffix || prefix) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pf-input-grp",
      style: width ? {
        width
      } : undefined
    }, prefix ? /*#__PURE__*/React.createElement("span", {
      className: "pf-input-grp__prefix"
    }, prefix) : null, /*#__PURE__*/React.createElement("input", {
      className: "pf-input" + (type === "number" ? " pf-input--num" : ""),
      type: type,
      value: value ?? "",
      onChange: e => onChange && onChange(e.target.value),
      placeholder: placeholder
    }), suffix ? /*#__PURE__*/React.createElement("span", {
      className: "pf-input-grp__suffix"
    }, suffix) : null);
  }
  return /*#__PURE__*/React.createElement("input", {
    className: "pf-input" + (type === "number" ? " pf-input--num" : ""),
    type: type,
    value: value ?? "",
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    style: width ? {
      width
    } : undefined
  });
}
function PFTextarea({
  value,
  onChange,
  placeholder,
  rows = 3
}) {
  return /*#__PURE__*/React.createElement("textarea", {
    className: "pf-textarea",
    rows: rows,
    value: value ?? "",
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder
  });
}
function PFSelect({
  value,
  onChange,
  options,
  width
}) {
  return /*#__PURE__*/React.createElement("select", {
    className: "pf-select",
    value: value ?? "",
    onChange: e => onChange && onChange(e.target.value),
    style: width ? {
      width
    } : undefined
  }, options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}

// ── Segmented toggle (2–4 short options) ────────────────────
function PFSegmented({
  value,
  onChange,
  options,
  brand
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-seg"
  }, options.map(o => {
    const isAct = (o.value ?? o) === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value ?? o,
      type: "button",
      className: "pf-seg__opt" + (isAct ? " is-active" + (brand ? " is-active--brand" : "") : ""),
      onClick: () => onChange && onChange(o.value ?? o)
    }, o.icon ? /*#__PURE__*/React.createElement("i", {
      className: "ph ph-" + o.icon
    }) : null, o.label ?? o);
  }));
}

// ── Switch with label & sublabel ────────────────────────────
function PFSwitch({
  on,
  onChange,
  label,
  sub
}) {
  const handle = () => onChange && onChange(!on);
  return /*#__PURE__*/React.createElement("label", {
    className: "pf-switch" + (on ? " is-on" : ""),
    onClick: handle
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-switch__thumb"
  })), label || sub ? /*#__PURE__*/React.createElement("span", null, label ? /*#__PURE__*/React.createElement("div", {
    className: "pf-switch__lbl"
  }, label) : null, sub ? /*#__PURE__*/React.createElement("div", {
    className: "pf-switch__sub"
  }, sub) : null) : null);
}

// ── Switch-row card (toggle on right, copy on left) ─────────
function PFSwitchRow({
  on,
  onChange,
  title,
  sub,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-switchrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-switchrow__text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-switchrow__t"
  }, title), sub ? /*#__PURE__*/React.createElement("div", {
    className: "pf-switchrow__s"
  }, sub) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, children) : null), /*#__PURE__*/React.createElement(PFSwitch, {
    on: on,
    onChange: onChange
  }));
}

// ── Radio-card grid ─────────────────────────────────────────
function PFRadioCard({
  value,
  onChange,
  options,
  columns = 2
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-radiogrid" + (columns === 3 ? " pf-radiogrid--3" : "")
  }, options.map(o => {
    const isAct = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      className: "pf-radio" + (isAct ? " is-active" : ""),
      onClick: () => onChange && onChange(o.value)
    }, /*#__PURE__*/React.createElement("span", {
      className: "pf-radio__dot"
    }), o.icon ? /*#__PURE__*/React.createElement("i", {
      className: "ph ph-" + o.icon + " pf-radio__ico"
    }) : null, /*#__PURE__*/React.createElement("span", {
      className: "pf-radio__t"
    }, o.label), o.sub ? /*#__PURE__*/React.createElement("span", {
      className: "pf-radio__s"
    }, o.sub) : null);
  }));
}

// ── Checkbox ─────────────────────────────────────────────────
function PFCheckbox({
  on,
  onChange,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "pf-chk" + (on ? " is-on" : ""),
    onClick: () => onChange && onChange(!on)
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-chk__box"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-check"
  })), /*#__PURE__*/React.createElement("span", null, children));
}

// ── Tag chip input ──────────────────────────────────────────
function PFChipsInput({
  chips,
  onAdd,
  onRemove,
  placeholder
}) {
  const [draft, setDraft] = usePF("");
  const handle = e => {
    if ((e.key === "Enter" || e.key === ",") && draft.trim()) {
      e.preventDefault();
      onAdd(draft.trim());
      setDraft("");
    } else if (e.key === "Backspace" && !draft && chips.length) {
      onRemove(chips.length - 1);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-chips"
  }, chips.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "pf-chip"
  }, c, /*#__PURE__*/React.createElement("span", {
    className: "pf-chip__x",
    onClick: () => onRemove(i)
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  })))), /*#__PURE__*/React.createElement("input", {
    className: "pf-chips__input",
    placeholder: chips.length ? "" : placeholder,
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: handle
  }));
}

// ── Numeric stepper ─────────────────────────────────────────
function PFStepper({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1
}) {
  const clamp = n => Math.max(min, Math.min(max, n));
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-stepper"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pf-stepper__btn",
    onClick: () => onChange(clamp((+value || 0) - step))
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-minus"
  })), /*#__PURE__*/React.createElement("input", {
    className: "pf-stepper__inp",
    value: value,
    onChange: e => {
      const n = e.target.value.replace(/[^\d]/g, "");
      onChange(n === "" ? "" : clamp(+n));
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pf-stepper__btn",
    onClick: () => onChange(clamp((+value || 0) + step))
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-plus"
  })));
}

// ── Day-of-week selector ────────────────────────────────────
const DOW_LABELS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
function PFDayOfWeek({
  days,
  onChange
}) {
  const toggle = i => {
    const next = new Set(days);
    next.has(i) ? next.delete(i) : next.add(i);
    onChange([...next].sort());
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-dow"
  }, DOW_LABELS.map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "pf-dow__d" + (days.includes(i) ? " is-on" : ""),
    onClick: () => toggle(i)
  }, l)));
}
Object.assign(window, {
  PFSection,
  PFRow,
  PFInput,
  PFTextarea,
  PFSelect,
  PFSegmented,
  PFSwitch,
  PFSwitchRow,
  PFRadioCard,
  PFCheckbox,
  PFChipsInput,
  PFStepper,
  PFDayOfWeek,
  DOW_LABELS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotions/FormPrimitives.jsx", error: String((e && e.message) || e) }); }

// promotions/PreviewPanel.jsx
try { (() => {
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
  channel: "Kênh bán"
};
const OP_LABELS = {
  is: "là",
  is_not: "không phải",
  contains: "chứa",
  gte: "≥",
  lte: "≤",
  in_list: "thuộc danh sách"
};
const SCOPE_LABELS = {
  same_as_trigger: "chính các sản phẩm kích hoạt",
  specific_sku: "danh sách SKU cụ thể",
  specific_category: "danh mục cụ thể",
  entire_cart: "toàn bộ giỏ hàng",
  cheapest: "sản phẩm rẻ nhất",
  most_expensive: "sản phẩm đắt nhất",
  new_item: "sản phẩm tặng kèm (mới)"
};
const REWARD_LABELS = {
  percent: "Giảm %",
  fixed: "Giảm số tiền",
  free_item: "Tặng sản phẩm",
  fixed_price: "Giá cố định",
  free_ship: "Miễn phí vận chuyển"
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
  campaign: "trong chiến dịch"
};

// Auto-detect the promotion archetype from state
function detectType(s) {
  if (s.rewardType === "free_ship") {
    return {
      key: "free_ship",
      icon: "truck",
      label: "Miễn phí vận chuyển"
    };
  }
  if (s.applyMode === "coupon") {
    return {
      key: "voucher",
      icon: "ticket",
      label: "Mã giảm giá (Voucher)"
    };
  }
  const hasCumulative = s.conditions.some(c => c.field === "cumulative_spend" || c.field === "order_count");
  if (hasCumulative) {
    return {
      key: "loyalty_tier",
      icon: "crown",
      label: "Tặng theo mức tích lũy"
    };
  }
  const hasSegment = s.conditions.some(c => c.field === "segment");
  if (hasSegment) {
    return {
      key: "loyalty",
      icon: "crown",
      label: "Khách hàng thân thiết"
    };
  }
  if (s.rewardType === "free_item") {
    return {
      key: "buy_get",
      icon: "gift",
      label: "Mua X tặng Y"
    };
  }
  if (s.scopeType === "cheapest" || s.scopeType === "most_expensive") {
    const qtyCond = s.conditions.some(c => c.field === "item_qty" && (c.op === "gte" || c.op === "is"));
    if (qtyCond) {
      return {
        key: "combo",
        icon: "stack",
        label: "Combo / Mix & Match"
      };
    }
  }
  if (s.rewardType === "percent" && s.conditions.some(c => c.field === "cart_total" && c.op === "gte")) {
    return {
      key: "tier",
      icon: "chart-line-up",
      label: "Giảm theo bậc"
    };
  }
  return {
    key: "custom",
    icon: "sparkle",
    label: "Khuyến mãi tùy chỉnh"
  };
}

// Render one condition fragment, e.g. "Tổng giỏ hàng ≥ 500.000đ"
function conditionSummary(c) {
  if (!c.field) return null;
  const f = FIELD_LABELS[c.field] || c.field;
  const op = OP_LABELS[c.op] || c.op;
  let v = c.value;
  if ((c.field === "cart_total" || c.field === "cumulative_spend") && v) v = formatVND(v);else if ((c.field === "item_qty" || c.field === "order_count") && v) {
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
    case "free_item":
      {
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
  const conds = s.conditions.map(conditionSummary).filter(Boolean);
  let trig;
  if (!conds.length) {
    trig = "Khi đơn hàng đáp ứng điều kiện kích hoạt";
  } else if (conds.length === 1) {
    trig = `Khi ${conds[0].toLowerCase()}`;
  } else {
    const join = s.conditionJoin === "OR" ? " hoặc " : " và ";
    trig = `Khi ${conds.map(c => c.toLowerCase()).join(join)}`;
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
    rep = s.maxRepeats === "unlimited" || !s.maxRepeats ? " Lặp lại không giới hạn trong một đơn." : ` Lặp lại tối đa ${s.maxRepeats} lần mỗi đơn.`;
  }

  // Apply mode
  const mode = s.applyMode === "coupon" ? s.couponCode ? ` Khách nhập mã ${s.couponCode.toUpperCase()}.` : " Khách cần nhập mã giảm giá." : " Tự động áp dụng.";
  return {
    trig,
    scope,
    rew,
    cap,
    rep,
    mode
  };
}
function PreviewPanel({
  state
}) {
  const t = detectType(state);
  const {
    trig,
    scope,
    rew,
    cap,
    rep,
    mode
  } = buildSentence(state);
  const isEmpty = !state.conditions.some(c => c.field) && !state.rewardValue;

  // Mock cart line items for the bottom illustration
  const cart = [{
    name: "Áo thun Linen Basic",
    qty: 1,
    price: 380000
  }, {
    name: "Áo thun Cotton Trắng",
    qty: 2,
    price: 260000
  }, {
    name: "Quần short Khaki",
    qty: 1,
    price: 420000
  }];
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "pf-card pf-preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-preview__t"
  }, "Xem tr\u01B0\u1EDBc"), /*#__PURE__*/React.createElement("span", {
    className: "pf-preview__live"
  }, /*#__PURE__*/React.createElement("span", null), "\u0110ang c\u1EADp nh\u1EADt")), /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__type"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-preview__type-ico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + t.icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__type-l"
  }, "Lo\u1EA1i khuy\u1EBFn m\xE3i"), /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__type-n"
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__sum"
  }, isEmpty ? /*#__PURE__*/React.createElement("span", {
    className: "pf-preview__sum-empty"
  }, "\u0110i\u1EC1n th\xF4ng tin \u1EDF c\xE1c m\u1EE5c b\xEAn tr\xE1i \u0111\u1EC3 xem m\xF4 t\u1EA3 khuy\u1EBFn m\xE3i xu\u1EA5t hi\u1EC7n t\u1EA1i \u0111\xE2y.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("em", null, trig), ", ", /*#__PURE__*/React.createElement("em", null, scope), " ", /*#__PURE__*/React.createElement("em", null, rew, cap), ".", rep, mode)), /*#__PURE__*/React.createElement("ul", {
    className: "pf-preview__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-target"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__list-l"
  }, "\u0110i\u1EC1u ki\u1EC7n"), /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__list-v"
  }, state.conditions.length, " \u0111i\u1EC1u ki\u1EC7n \xB7 n\u1ED1i b\u1EB1ng ", /*#__PURE__*/React.createElement("b", null, state.conditionJoin)))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-package"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__list-l"
  }, "Ph\u1EA1m vi \u01B0u \u0111\xE3i"), /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__list-v"
  }, SCOPE_LABELS[state.scopeType]))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-gift"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__list-l"
  }, "\u01AFu \u0111\xE3i"), /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__list-v"
  }, REWARD_LABELS[state.rewardType]))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-calendar-blank"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__list-l"
  }, "Th\u1EDDi gian"), /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__list-v"
  }, state.startAt ? `${state.startAt.replace("T", " ")} → ${state.endAt ? state.endAt.replace("T", " ") : "không kết thúc"}` : "chưa lên lịch"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-layer-plus"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__list-l"
  }, "K\u1EBFt h\u1EE3p"), /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__list-v"
  }, state.exclusive ? "Độc quyền – không kết hợp" : `Có thể kết hợp · ưu tiên ${state.priority || 0}`)))), /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__cart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__cart-h"
  }, /*#__PURE__*/React.createElement("span", null, "M\xF4 ph\u1ECFng gi\u1ECF h\xE0ng"), /*#__PURE__*/React.createElement("span", null, "3 sp")), cart.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "pf-preview__cart-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-preview__cart-row__ico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-t-shirt"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, r.name), /*#__PURE__*/React.createElement("div", {
    className: "pf-mute",
    style: {
      fontSize: 11
    }
  }, r.qty, " \xD7 ", formatVND(r.price))), /*#__PURE__*/React.createElement("span", {
    className: "pf-preview__cart-row__p"
  }, formatVND(r.qty * r.price)))), discount > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__cart-row is-discount"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-preview__cart-row__ico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-tag"
  })), /*#__PURE__*/React.createElement("div", null, state.name || "Khuyến mãi mới"), /*#__PURE__*/React.createElement("span", {
    className: "pf-preview__cart-row__p"
  }, "\u2212", formatVND(discount))) : null, /*#__PURE__*/React.createElement("div", {
    className: "pf-preview__cart-tot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-mute"
  }, "T\u1EA1m t\xEDnh"), /*#__PURE__*/React.createElement("b", null, formatVND(subtotal - discount))))));
}
Object.assign(window, {
  PreviewPanel,
  FIELD_LABELS,
  OP_LABELS,
  SCOPE_LABELS,
  REWARD_LABELS,
  detectType,
  formatNumVN,
  formatVND
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotions/PreviewPanel.jsx", error: String((e && e.message) || e) }); }

// promotions/ProductCatalog.jsx
try { (() => {
// ProductCatalog.jsx — mock product master data
// Used by ProductPicker for search/select demos.

const PRODUCT_CATALOG = [
// ─── Áo thun ─────────────────────────────────────────────
{
  id: "p1",
  sku: "AT-CT-01",
  name: "Áo thun Cotton Trắng",
  category: "Áo thun",
  brand: "Coolmate",
  price: 260000,
  stock: 142,
  color: "#e8d5d1"
}, {
  id: "p2",
  sku: "AT-LN-02",
  name: "Áo thun Linen Basic",
  category: "Áo thun",
  brand: "Coolmate",
  price: 380000,
  stock: 86,
  color: "#d5e0e8"
}, {
  id: "p3",
  sku: "AT-OS-03",
  name: "Áo thun Oversized Đen",
  category: "Áo thun",
  brand: "Coolmate",
  price: 320000,
  stock: 54,
  color: "#3a3a4c"
}, {
  id: "p4",
  sku: "AT-PL-04",
  name: "Áo polo nam phối túi",
  category: "Áo thun",
  brand: "Routine",
  price: 420000,
  stock: 68,
  color: "#7f9682"
}, {
  id: "p5",
  sku: "AT-CR-05",
  name: "Áo croptop nữ in hoa",
  category: "Áo thun",
  brand: "Hnoss",
  price: 245000,
  stock: 110,
  color: "#f4c2c2"
},
// ─── Quần ────────────────────────────────────────────────
{
  id: "p6",
  sku: "QS-KK-01",
  name: "Quần short Khaki",
  category: "Quần",
  brand: "Coolmate",
  price: 420000,
  stock: 32,
  color: "#c8a875"
}, {
  id: "p7",
  sku: "QJ-SS-02",
  name: "Quần jean slim straight",
  category: "Quần",
  brand: "Levi's",
  price: 890000,
  stock: 26,
  color: "#5a6a82"
}, {
  id: "p8",
  sku: "QT-VS-03",
  name: "Quần tây vải sớ",
  category: "Quần",
  brand: "Owen",
  price: 560000,
  stock: 41,
  color: "#2a2a3a"
}, {
  id: "p9",
  sku: "QK-JG-04",
  name: "Quần kaki jogger",
  category: "Quần",
  brand: "Routine",
  price: 480000,
  stock: 58,
  color: "#a08a6a"
},
// ─── Phụ kiện ────────────────────────────────────────────
{
  id: "p10",
  sku: "PK-TT-01",
  name: "Túi tote canvas in chữ",
  category: "Phụ kiện",
  brand: "Sandbox",
  price: 180000,
  stock: 220,
  color: "#e8e0c8"
}, {
  id: "p11",
  sku: "PK-MN-02",
  name: "Mũ nón snapback đen",
  category: "Phụ kiện",
  brand: "Sandbox",
  price: 220000,
  stock: 145,
  color: "#1a1a2a"
}, {
  id: "p12",
  sku: "PK-VL-03",
  name: "Ví da nam mini",
  category: "Phụ kiện",
  brand: "Routine",
  price: 350000,
  stock: 78,
  color: "#6a4a2a"
}, {
  id: "p13",
  sku: "PK-VT-04",
  name: "Vớ tất cotton 3 đôi",
  category: "Phụ kiện",
  brand: "Coolmate",
  price: 99000,
  stock: 320,
  color: "#d8d2c8"
}, {
  id: "p14",
  sku: "PK-DT-05",
  name: "Dây thắt lưng nam da bò",
  category: "Phụ kiện",
  brand: "Owen",
  price: 290000,
  stock: 64,
  color: "#4a3020"
},
// ─── Giày dép ────────────────────────────────────────────
{
  id: "p15",
  sku: "GD-SN-01",
  name: "Giày sneaker trắng cổ thấp",
  category: "Giày dép",
  brand: "Ananas",
  price: 650000,
  stock: 38,
  color: "#f4f0e8"
}, {
  id: "p16",
  sku: "GD-SD-02",
  name: "Sandal nữ quai chéo",
  category: "Giày dép",
  brand: "Vascara",
  price: 410000,
  stock: 52,
  color: "#c8a890"
}, {
  id: "p17",
  sku: "GD-DR-03",
  name: "Giày da nam công sở",
  category: "Giày dép",
  brand: "Owen",
  price: 980000,
  stock: 22,
  color: "#2a1a10"
},
// ─── Đồ uống / F&B (vì SandboxVN có cả ERP nhà hàng) ─────
{
  id: "p18",
  sku: "FB-CF-01",
  name: "Cà phê sữa đá Sài Gòn",
  category: "Đồ uống",
  brand: "House",
  price: 35000,
  stock: 999,
  color: "#8a5a3a"
}, {
  id: "p19",
  sku: "FB-CF-02",
  name: "Cappuccino nóng",
  category: "Đồ uống",
  brand: "House",
  price: 55000,
  stock: 999,
  color: "#a8825a"
}, {
  id: "p20",
  sku: "FB-TR-03",
  name: "Trà đào cam sả",
  category: "Đồ uống",
  brand: "House",
  price: 49000,
  stock: 999,
  color: "#e8a25a"
},
// ─── Quà tặng ────────────────────────────────────────────
{
  id: "p21",
  sku: "GF-BT-01",
  name: "Bộ ấm trà gốm sứ Bát Tràng",
  category: "Quà tặng",
  brand: "Sandbox",
  price: 290000,
  stock: 48,
  color: "#a8b8c8"
}, {
  id: "p22",
  sku: "GF-NV-02",
  name: "Nến thơm hương quế",
  category: "Quà tặng",
  brand: "Sandbox",
  price: 150000,
  stock: 96,
  color: "#d8a878"
}, {
  id: "p23",
  sku: "GF-VC-03",
  name: "Voucher quà tặng 100k",
  category: "Quà tặng",
  brand: "Sandbox",
  price: 100000,
  stock: 999,
  color: "#f8d8a8"
},
// ─── Đồ điện ─────────────────────────────────────────────
{
  id: "p24",
  sku: "DE-TN-01",
  name: "Tai nghe Bluetooth không dây",
  category: "Đồ điện",
  brand: "JBL",
  price: 1290000,
  stock: 18,
  color: "#1a1a1a"
}, {
  id: "p25",
  sku: "DE-SC-02",
  name: "Sạc dự phòng 10000mAh",
  category: "Đồ điện",
  brand: "Anker",
  price: 590000,
  stock: 42,
  color: "#3a3a4a"
}];

// All known categories (for filter chips)
const PRODUCT_CATEGORIES = [...new Set(PRODUCT_CATALOG.map(p => p.category))];

// Strip Vietnamese diacritics so search is forgiving
function _stripDiacritics(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
}
function searchProducts(query, {
  category,
  excludeIds
} = {}) {
  const q = _stripDiacritics((query || "").trim());
  const exclude = new Set(excludeIds || []);
  return PRODUCT_CATALOG.filter(p => {
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
  productInitials
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotions/ProductCatalog.jsx", error: String((e && e.message) || e) }); }

// promotions/ProductPicker.jsx
try { (() => {
// ProductPicker.jsx — search-as-you-type product picker
// Used wherever the user must pick SKUs (condition value, scope, free item).
//
// Visual:
//   ┌──────────────────────────────────────────────────────┐
//   │ [thumb] Áo thun Cotton Trắng · SKU-AT-CT-01    [×]   │
//   │ [thumb] Áo thun Linen Basic · SKU-AT-LN-02     [×]   │
//   │ [🔍 Tìm sản phẩm theo tên, mã SKU, thương hiệu...]  │
//   └──────────────────────────────────────────────────────┘
//        ▼ dropdown (when focused)
//   ┌──────────────────────────────────────────────────────┐
//   │ [All] [Áo thun] [Quần] [Phụ kiện] ...                │
//   ├──────────────────────────────────────────────────────┤
//   │ [□] [thumb] Áo thun Cotton Trắng           260.000đ │
//   │           SKU-AT-CT-01 · Coolmate · Còn 142          │
//   ├──────────────────────────────────────────────────────┤
//   │ ...                                                  │
//   └──────────────────────────────────────────────────────┘

const {
  useState: useStatePP,
  useRef: useRefPP,
  useEffect: useEffectPP,
  useMemo: useMemoPP
} = React;
function formatVNDPP(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}

// Highlight query inside text (split on diacritic-folded match)
function HighlightText({
  text,
  query
}) {
  if (!query) return /*#__PURE__*/React.createElement(React.Fragment, null, text);
  const fold = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
  const t = fold(text);
  const q = fold(query);
  if (!q || !t.includes(q)) return /*#__PURE__*/React.createElement(React.Fragment, null, text);

  // walk char-by-char and segment
  const parts = [];
  let i = 0;
  while (i < t.length) {
    const idx = t.indexOf(q, i);
    if (idx === -1) {
      parts.push({
        s: text.slice(i),
        h: false
      });
      break;
    }
    if (idx > i) parts.push({
      s: text.slice(i, idx),
      h: false
    });
    parts.push({
      s: text.slice(idx, idx + q.length),
      h: true
    });
    i = idx + q.length;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, parts.map((p, j) => p.h ? /*#__PURE__*/React.createElement("mark", {
    key: j,
    className: "pf-pp__hl"
  }, p.s) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: j
  }, p.s)));
}

// Selected product chip (chunky row above input)
function SelectedRow({
  product,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__sel"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__thumb",
    style: {
      background: product.color
    }
  }, productInitials(product)), /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__sel-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__sel-n"
  }, product.name), /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__sel-s"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__sku"
  }, product.sku), /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, product.category), /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, product.brand))), /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__sel-price"
  }, formatVNDPP(product.price)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pf-pp__rm",
    onClick: onRemove,
    title: "B\u1ECF ch\u1ECDn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  })));
}

// Dropdown result row
function ResultRow({
  product,
  isOn,
  onToggle,
  query,
  multi
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pf-pp__row" + (isOn ? " is-on" : ""),
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__row-chk" + (multi ? "" : " pf-pp__row-chk--radio")
  }, isOn ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-check"
  }) : null), /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__thumb pf-pp__thumb--sm",
    style: {
      background: product.color
    }
  }, productInitials(product)), /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__row-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__row-n"
  }, /*#__PURE__*/React.createElement(HighlightText, {
    text: product.name,
    query: query
  })), /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__row-s"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__sku"
  }, /*#__PURE__*/React.createElement(HighlightText, {
    text: product.sku,
    query: query
  })), /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, product.brand), /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__stock" + (product.stock < 30 ? " is-low" : "")
  }, "C\xF2n ", product.stock))), /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__row-price"
  }, formatVNDPP(product.price)));
}
function ProductPicker({
  selected,
  // array of product objects
  onChange,
  // (next: product[]) => void
  multi = true,
  placeholder = "Tìm sản phẩm theo tên, mã SKU, thương hiệu…",
  emptyHint = "Chưa có sản phẩm nào được chọn"
}) {
  const [open, setOpen] = useStatePP(false);
  const [query, setQuery] = useStatePP("");
  const [category, setCategory] = useStatePP("Tất cả");
  const [activeIdx, setActiveIdx] = useStatePP(0);
  const wrapRef = useRefPP(null);
  const inputRef = useRefPP(null);

  // Close on outside click
  useEffectPP(() => {
    if (!open) return;
    const handler = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  const selectedIds = useMemoPP(() => new Set(selected.map(p => p.id)), [selected]);
  const results = useMemoPP(() => searchProducts(query, {
    category
  }), [query, category]);

  // Reset active index when results change
  useEffectPP(() => {
    setActiveIdx(0);
  }, [query, category]);
  const toggle = p => {
    if (selectedIds.has(p.id)) {
      onChange(selected.filter(s => s.id !== p.id));
    } else if (multi) {
      onChange([...selected, p]);
    } else {
      onChange([p]);
      setOpen(false);
    }
  };
  const removeAt = i => onChange(selected.filter((_, j) => j !== i));
  const onKeyDown = e => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setOpen(true);
        return;
      }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx(i => Math.min(results.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx(i => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[activeIdx]) toggle(results[activeIdx]);
    } else if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "Backspace" && !query && selected.length) {
      removeAt(selected.length - 1);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-pp",
    ref: wrapRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__field" + (open ? " is-open" : ""),
    onClick: () => {
      setOpen(true);
      inputRef.current?.focus();
    }
  }, selected.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__sels"
  }, selected.map((p, i) => /*#__PURE__*/React.createElement(SelectedRow, {
    key: p.id,
    product: p,
    onRemove: () => removeAt(i)
  }))) : null, /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__inputrow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass pf-pp__lens"
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    className: "pf-pp__input",
    value: query,
    onChange: e => {
      setQuery(e.target.value);
      setOpen(true);
    },
    onFocus: () => setOpen(true),
    onKeyDown: onKeyDown,
    placeholder: selected.length ? "Thêm sản phẩm…" : placeholder
  }), selected.length > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__count"
  }, selected.length, " s\u1EA3n ph\u1EA9m") : null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-" + (open ? "up" : "down") + " pf-pp__caret"
  }))), open ? /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__drop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__cats"
  }, ["Tất cả", ...PRODUCT_CATEGORIES].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    type: "button",
    className: "pf-pp__cat" + (category === c ? " is-on" : ""),
    onClick: e => {
      e.stopPropagation();
      setCategory(c);
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__results"
  }, results.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__empty"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__empty-t"
  }, "Kh\xF4ng t\xECm th\u1EA5y s\u1EA3n ph\u1EA9m"), /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__empty-s"
  }, "Th\u1EED t\u1EEB kho\xE1 kh\xE1c, ho\u1EB7c th\xEAm s\u1EA3n ph\u1EA9m m\u1EDBi v\xE0o danh m\u1EE5c.")) : results.map((p, i) => /*#__PURE__*/React.createElement(ResultRow, {
    key: p.id,
    product: p,
    isOn: selectedIds.has(p.id),
    onToggle: () => toggle(p),
    query: query,
    multi: multi
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pf-pp__foot"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("kbd", null, "\u2191"), " ", /*#__PURE__*/React.createElement("kbd", null, "\u2193"), " di chuy\u1EC3n \xB7 ", /*#__PURE__*/React.createElement("kbd", null, "Enter"), " ch\u1ECDn \xB7 ", /*#__PURE__*/React.createElement("kbd", null, "Esc"), " \u0111\xF3ng"), /*#__PURE__*/React.createElement("span", {
    className: "pf-pp__foot-r"
  }, selected.length, " \u0111\xE3 ch\u1ECDn \xB7 ", results.length, " k\u1EBFt qu\u1EA3"))) : null);
}
Object.assign(window, {
  ProductPicker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotions/ProductPicker.jsx", error: String((e && e.message) || e) }); }

// promotions/PromotionForm.jsx
try { (() => {
// PromotionForm.jsx — the full Add/Edit Promotion page

const {
  useState: useStatePF,
  useMemo: useMemoPF
} = React;

// ─── Field/operator metadata ───────────────────────────────────
const FIELD_OPTIONS = [{
  value: "sku",
  label: "Mã SKU"
}, {
  value: "category",
  label: "Danh mục"
}, {
  value: "brand",
  label: "Thương hiệu"
}, {
  value: "cart_total",
  label: "Tổng giỏ hàng (1 đơn)"
}, {
  value: "cumulative_spend",
  label: "Chi tiêu tích lũy (nhiều đơn)"
}, {
  value: "order_count",
  label: "Số đơn đã mua"
}, {
  value: "item_qty",
  label: "Số lượng sản phẩm"
}, {
  value: "segment",
  label: "Nhóm khách hàng"
}, {
  value: "channel",
  label: "Kênh bán"
}];

// Time-windows for cumulative metrics
const PERIOD_OPTIONS = [{
  value: "lifetime",
  label: "Toàn bộ thời gian"
}, {
  value: "30d",
  label: "30 ngày qua"
}, {
  value: "90d",
  label: "90 ngày qua"
}, {
  value: "365d",
  label: "365 ngày qua"
}, {
  value: "ytd",
  label: "Từ đầu năm đến nay"
}, {
  value: "campaign",
  label: "Trong thời gian chiến dịch"
}];
const PERIOD_LABELS = Object.fromEntries(PERIOD_OPTIONS.map(p => [p.value, p.label]));
const OP_OPTIONS = [{
  value: "is",
  label: "là"
}, {
  value: "is_not",
  label: "không phải"
}, {
  value: "contains",
  label: "chứa"
}, {
  value: "gte",
  label: "≥"
}, {
  value: "lte",
  label: "≤"
}, {
  value: "in_list",
  label: "thuộc danh sách"
}];

// suggested operator set per field
const OPS_BY_FIELD = {
  sku: ["is", "is_not", "in_list"],
  category: ["is", "is_not", "contains", "in_list"],
  brand: ["is", "is_not", "in_list"],
  cart_total: ["gte", "lte", "is"],
  cumulative_spend: ["gte", "lte"],
  order_count: ["gte", "lte", "is"],
  item_qty: ["gte", "lte", "is"],
  segment: ["is", "is_not", "in_list"],
  channel: ["is", "is_not", "in_list"]
};
function opsFor(field) {
  const allowed = OPS_BY_FIELD[field] || OP_OPTIONS.map(o => o.value);
  return OP_OPTIONS.filter(o => allowed.includes(o.value));
}

// placeholder per field
function placeholderFor(field) {
  switch (field) {
    case "sku":
      return "SKU01234";
    case "category":
      return "Áo thun";
    case "brand":
      return "Coolmate";
    case "cart_total":
      return "500.000";
    case "cumulative_spend":
      return "10.000.000";
    case "order_count":
      return "5";
    case "item_qty":
      return "3";
    case "segment":
      return "Khách VIP";
    case "channel":
      return "Cửa hàng / Online";
    default:
      return "Giá trị";
  }
}
function suffixFor(field) {
  if (field === "cart_total" || field === "cumulative_spend") return "đ";
  if (field === "item_qty") return "sp";
  if (field === "order_count") return "đơn";
  return null;
}
// Does this field aggregate across orders (and thus need a time window)?
function isCumulative(field) {
  return field === "cumulative_spend" || field === "order_count";
}

// ─── Initial state (sensible defaults for a buy-X-get-Y) ─────
const INITIAL_STATE = {
  // Basic
  name: "Tích lũy 10 triệu — tặng quà cảm ơn",
  description: "Khi khách hàng đạt tổng chi tiêu 10.000.000đ trong 90 ngày qua, tặng kèm một sản phẩm quà cảm ơn vào đơn kế tiếp.",
  status: "active",
  tags: ["loyalty", "tích lũy", "hè 2026"],
  // Trigger
  conditions: [{
    field: "cumulative_spend",
    op: "gte",
    value: "10000000",
    period: "90d"
  }],
  conditionJoin: "AND",
  // Benefit
  scopeType: "new_item",
  scopeSort: "as_added",
  scopeReuse: false,
  // Reward
  rewardType: "free_item",
  rewardValue: "",
  rewardCap: "",
  rewardItems: [{
    id: "p21",
    sku: "GF-BT-01",
    name: "Bộ ấm trà gốm sứ Bát Tràng",
    category: "Quà tặng",
    brand: "Sandbox",
    price: 290000,
    stock: 48,
    color: "#a8b8c8"
  }],
  rewardLetCustomerChoose: false,
  rewardQty: 1,
  // Scope-specific products (when scopeType = specific_sku)
  scopeProducts: [],
  // Repeat & limit
  repeatable: false,
  maxRepeats: 1,
  maxPerBill: 1,
  maxPerCustomer: 1,
  maxGlobal: 500,
  applyMode: "auto",
  couponCode: "",
  // Schedule
  startAt: "2026-06-01T00:00",
  endAt: "2026-08-31T23:59",
  dows: [0, 1, 2, 3, 4, 5, 6],
  hoursOn: false,
  hourStart: "09:00",
  hourEnd: "22:00",
  // Stacking
  exclusive: false,
  priority: 10
};

// ────────────────────────────────────────────────────────────
//  Section 1 — Basic info
// ────────────────────────────────────────────────────────────
function Sec1Basic({
  s,
  set
}) {
  const t = detectType(s);
  return /*#__PURE__*/React.createElement(PFSection, {
    num: "1",
    title: "Th\xF4ng tin chung",
    sub: "T\xEAn, m\xF4 t\u1EA3 v\xE0 tr\u1EA1ng th\xE1i c\u1EE7a khuy\u1EBFn m\xE3i.",
    right: /*#__PURE__*/React.createElement("span", {
      className: "pf-pill pf-pill--brand"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-sparkle"
    }), "Lo\u1EA1i t\u1EF1 \u0111\u1ED9ng: ", t.label)
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-row--name-type"
  }, /*#__PURE__*/React.createElement(PFRow, {
    label: "T\xEAn khuy\u1EBFn m\xE3i",
    required: true
  }, /*#__PURE__*/React.createElement(PFInput, {
    value: s.name,
    onChange: v => set({
      name: v
    }),
    placeholder: "VD: Mua 3 \xE1o thun \u2013 t\u1EB7ng \xE1o r\u1EBB nh\u1EA5t"
  })), /*#__PURE__*/React.createElement(PFRow, {
    label: "Tr\u1EA1ng th\xE1i"
  }, /*#__PURE__*/React.createElement(PFSegmented, {
    value: s.status,
    onChange: v => set({
      status: v
    }),
    options: [{
      value: "draft",
      label: "Nháp",
      icon: "pencil-simple"
    }, {
      value: "active",
      label: "Đang chạy",
      icon: "broadcast"
    }],
    brand: true
  }))), /*#__PURE__*/React.createElement(PFRow, {
    label: "M\xF4 t\u1EA3",
    hint: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-info"
    }), "M\xF4 t\u1EA3 hi\u1EC3n th\u1ECB cho nh\xE2n vi\xEAn thu ng\xE2n khi \xE1p d\u1EE5ng t\u1EA1i qu\u1EA7y.")
  }, /*#__PURE__*/React.createElement(PFTextarea, {
    value: s.description,
    onChange: v => set({
      description: v
    }),
    placeholder: "M\xF4 t\u1EA3 ng\u1EAFn g\u1ECDn n\u1ED9i dung v\xE0 m\u1EE5c \u0111\xEDch khuy\u1EBFn m\xE3i.",
    rows: 3
  })), /*#__PURE__*/React.createElement(PFRow, {
    label: "Th\u1EBB",
    hint: "Nh\u1EA5n Enter \u0111\u1EC3 th\xEAm th\u1EBB. D\xF9ng \u0111\u1EC3 ph\xE2n lo\u1EA1i v\xE0 l\u1ECDc trong b\xE1o c\xE1o."
  }, /*#__PURE__*/React.createElement(PFChipsInput, {
    chips: s.tags,
    onAdd: c => set({
      tags: [...s.tags, c]
    }),
    onRemove: i => set({
      tags: s.tags.filter((_, j) => j !== i)
    }),
    placeholder: "h\xE8 2026, flash sale, vip..."
  })));
}

// ────────────────────────────────────────────────────────────
//  Section 2 — Trigger conditions
// ────────────────────────────────────────────────────────────
function ConditionRow({
  cond,
  onChange,
  onRemove
}) {
  const ops = opsFor(cond.field);
  const showPeriod = isCumulative(cond.field);
  const isProductField = cond.field === "sku";
  const expanded = showPeriod || isProductField;
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-cond-row" + (expanded ? " pf-cond-row--multi" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-cond-row__main"
  }, /*#__PURE__*/React.createElement(PFSelect, {
    value: cond.field,
    onChange: v => {
      const next = {
        ...cond,
        field: v,
        op: opsFor(v)[0]?.value || cond.op
      };
      if (isCumulative(v) && !next.period) next.period = "90d";
      if (v === "sku" && !next.products) next.products = [];
      onChange(next);
    },
    options: FIELD_OPTIONS
  }), /*#__PURE__*/React.createElement(PFSelect, {
    value: cond.op,
    onChange: v => onChange({
      ...cond,
      op: v
    }),
    options: ops
  }), isProductField ? /*#__PURE__*/React.createElement("div", {
    className: "pf-cond-row__pp"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-cond-row__pp-summary"
  }, cond.products && cond.products.length ? `${cond.products.length} sản phẩm đã chọn` : "Chưa chọn sản phẩm — chọn ở khu vực bên dưới")) : /*#__PURE__*/React.createElement(PFInput, {
    value: cond.value,
    onChange: v => onChange({
      ...cond,
      value: v
    }),
    placeholder: placeholderFor(cond.field),
    suffix: suffixFor(cond.field)
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pf-cond-row__rm",
    onClick: onRemove,
    title: "X\xF3a \u0111i\u1EC1u ki\u1EC7n"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-trash"
  }))), isProductField ? /*#__PURE__*/React.createElement("div", {
    className: "pf-cond-row__extra pf-cond-row__extra--picker"
  }, /*#__PURE__*/React.createElement(ProductPicker, {
    selected: cond.products || [],
    onChange: next => onChange({
      ...cond,
      products: next
    }),
    multi: true,
    placeholder: "T\xECm s\u1EA3n ph\u1EA9m theo t\xEAn (VD: '\xE1o thun tr\u1EAFng'), m\xE3 SKU ho\u1EB7c th\u01B0\u01A1ng hi\u1EC7u\u2026"
  })) : null, showPeriod ? /*#__PURE__*/React.createElement("div", {
    className: "pf-cond-row__extra"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-arrow-elbow-down-right"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pf-cond-row__extra-lbl"
  }, "t\xEDnh trong"), /*#__PURE__*/React.createElement(PFSelect, {
    value: cond.period || "lifetime",
    onChange: v => onChange({
      ...cond,
      period: v
    }),
    options: PERIOD_OPTIONS,
    width: 240
  }), /*#__PURE__*/React.createElement("span", {
    className: "pf-cond-row__extra-hint"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-info"
  }), "C\u1ED9ng d\u1ED3n t\u1ED5ng chi ti\xEAu c\u1EE7a kh\xE1ch h\xE0ng t\u1EEB t\u1EA5t c\u1EA3 \u0111\u01A1n trong kho\u1EA3ng n\xE0y.")) : null);
}
function Sec2Trigger({
  s,
  set
}) {
  const updateCond = (i, next) => {
    const copy = s.conditions.slice();
    copy[i] = next;
    set({
      conditions: copy
    });
  };
  const removeCond = i => {
    set({
      conditions: s.conditions.filter((_, j) => j !== i)
    });
  };
  const addCond = () => {
    set({
      conditions: [...s.conditions, {
        field: "category",
        op: "contains",
        value: ""
      }]
    });
  };
  return /*#__PURE__*/React.createElement(PFSection, {
    num: "2",
    title: "\u0110i\u1EC1u ki\u1EC7n k\xEDch ho\u1EA1t",
    sub: "Kh\xE1ch ph\u1EA3i l\xE0m g\xEC \u0111\u1EC3 khuy\u1EBFn m\xE3i n\xE0y \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t?",
    right: s.conditions.length > 1 ? /*#__PURE__*/React.createElement(PFSegmented, {
      value: s.conditionJoin,
      onChange: v => set({
        conditionJoin: v
      }),
      options: [{
        value: "AND",
        label: "Tất cả (AND)"
      }, {
        value: "OR",
        label: "Một trong (OR)"
      }]
    }) : null
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-cond-list"
  }, s.conditions.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "pf-cond-join"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-cond-join__lbl " + (s.conditionJoin === "AND" ? "is-and" : "is-or")
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-arrow-down"
  }), s.conditionJoin)) : null, /*#__PURE__*/React.createElement(ConditionRow, {
    cond: c,
    onChange: next => updateCond(i, next),
    onRemove: () => removeCond(i)
  }))), s.conditions.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pf-cond-add",
    onClick: addCond
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-plus-circle"
  }), "Th\xEAm \u0111i\u1EC1u ki\u1EC7n")));
}

// ────────────────────────────────────────────────────────────
//  Section 3 — Benefit scope
// ────────────────────────────────────────────────────────────
const SCOPE_OPTS = [{
  value: "same_as_trigger",
  label: "Giống điều kiện kích hoạt",
  sub: "Chính sản phẩm thỏa mãn điều kiện sẽ được giảm.",
  icon: "arrows-clockwise"
}, {
  value: "specific_sku",
  label: "SKU cụ thể",
  sub: "Chọn một danh sách mã SKU áp dụng.",
  icon: "barcode"
}, {
  value: "specific_category",
  label: "Danh mục cụ thể",
  sub: "Áp dụng cho mọi sản phẩm trong danh mục.",
  icon: "folder"
}, {
  value: "entire_cart",
  label: "Toàn bộ giỏ hàng",
  sub: "Giảm trên tổng giá trị cuối cùng.",
  icon: "shopping-cart"
}, {
  value: "cheapest",
  label: "Sản phẩm rẻ nhất",
  sub: "Sản phẩm rẻ nhất trong đơn được giảm.",
  icon: "arrow-down"
}, {
  value: "most_expensive",
  label: "Sản phẩm đắt nhất",
  sub: "Sản phẩm đắt nhất trong đơn được giảm.",
  icon: "arrow-up"
}, {
  value: "new_item",
  label: "Sản phẩm tặng kèm",
  sub: "Một sản phẩm mới thêm vào đơn dưới dạng quà.",
  icon: "gift"
}];
function Sec3Scope({
  s,
  set
}) {
  return /*#__PURE__*/React.createElement(PFSection, {
    num: "3",
    title: "Ph\u1EA1m vi \u01B0u \u0111\xE3i",
    sub: "S\u1EA3n ph\u1EA9m n\xE0o trong \u0111\u01A1n nh\u1EADn \u01B0u \u0111\xE3i?"
  }, /*#__PURE__*/React.createElement(PFRow, {
    label: "Lo\u1EA1i ph\u1EA1m vi"
  }, /*#__PURE__*/React.createElement(PFRadioCard, {
    value: s.scopeType,
    onChange: v => set({
      scopeType: v
    }),
    options: SCOPE_OPTS
  })), s.scopeType === "specific_sku" ? /*#__PURE__*/React.createElement(PFRow, {
    label: "Danh s\xE1ch s\u1EA3n ph\u1EA9m \xE1p d\u1EE5ng",
    required: true,
    hint: "\u01AFu \u0111\xE3i ch\u1EC9 \xE1p l\xEAn nh\u1EEFng s\u1EA3n ph\u1EA9m \u0111\u01B0\u1EE3c ch\u1ECDn b\xEAn d\u01B0\u1EDBi. T\xECm theo t\xEAn, m\xE3 SKU ho\u1EB7c th\u01B0\u01A1ng hi\u1EC7u."
  }, /*#__PURE__*/React.createElement(ProductPicker, {
    selected: s.scopeProducts || [],
    onChange: next => set({
      scopeProducts: next
    }),
    multi: true,
    placeholder: "T\xECm s\u1EA3n ph\u1EA9m \xE1p d\u1EE5ng \u01B0u \u0111\xE3i\u2026"
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "pf-row--2"
  }, /*#__PURE__*/React.createElement(PFRow, {
    label: "Th\u1EE9 t\u1EF1 \xE1p d\u1EE5ng n\u1EBFu nhi\u1EC1u s\u1EA3n ph\u1EA9m th\u1ECFa \u0111i\u1EC1u ki\u1EC7n",
    hint: "Quy\u1EBFt \u0111\u1ECBnh s\u1EA3n ph\u1EA9m n\xE0o \u0111\u01B0\u1EE3c gi\u1EA3m tr\u01B0\u1EDBc khi gi\u1EDBi h\u1EA1n \u0111\u01B0\u1EE3c \xE1p."
  }, /*#__PURE__*/React.createElement(PFSelect, {
    value: s.scopeSort,
    onChange: v => set({
      scopeSort: v
    }),
    options: [{
      value: "cheapest",
      label: "Rẻ nhất trước"
    }, {
      value: "expensive",
      label: "Đắt nhất trước"
    }, {
      value: "random",
      label: "Ngẫu nhiên"
    }, {
      value: "as_added",
      label: "Theo thứ tự thêm vào"
    }]
  })), /*#__PURE__*/React.createElement(PFRow, {
    label: " "
  }, /*#__PURE__*/React.createElement(PFSwitchRow, {
    on: s.scopeReuse,
    onChange: v => set({
      scopeReuse: v
    }),
    title: "S\u1EA3n ph\u1EA9m k\xEDch ho\u1EA1t c\u0169ng \u0111\u01B0\u1EE3c nh\u1EADn \u01B0u \u0111\xE3i",
    sub: "Khi t\u1EAFt, s\u1EA3n ph\u1EA9m d\xF9ng \u0111\u1EC3 m\u1EDF kh\xF3a s\u1EBD kh\xF4ng b\u1ECB t\xEDnh gi\u1EA3m gi\xE1."
  }))));
}

// ────────────────────────────────────────────────────────────
//  Section 4 — Reward
// ────────────────────────────────────────────────────────────
const REWARD_OPTS = [{
  value: "percent",
  label: "Giảm theo %",
  sub: "VD: giảm 20% trên giá sản phẩm.",
  icon: "percent"
}, {
  value: "fixed",
  label: "Giảm số tiền",
  sub: "VD: giảm 50.000đ trực tiếp.",
  icon: "currency-circle-dollar"
}, {
  value: "free_item",
  label: "Tặng sản phẩm",
  sub: "Tặng kèm hàng hóa cụ thể.",
  icon: "gift"
}, {
  value: "fixed_price",
  label: "Giá cố định",
  sub: "Bán sản phẩm ở mức giá định sẵn.",
  icon: "tag"
}, {
  value: "free_ship",
  label: "Miễn phí vận chuyển",
  sub: "Phí ship = 0.",
  icon: "truck"
}];
function RewardValueField({
  s,
  set
}) {
  switch (s.rewardType) {
    case "percent":
      return /*#__PURE__*/React.createElement(PFRow, {
        label: "T\u1EC9 l\u1EC7 gi\u1EA3m",
        required: true,
        hint: "Ph\u1EA7n tr\u0103m \xE1p l\xEAn gi\xE1 s\u1EA3n ph\u1EA9m trong ph\u1EA1m vi \u01B0u \u0111\xE3i."
      }, /*#__PURE__*/React.createElement(PFInput, {
        value: s.rewardValue,
        onChange: v => set({
          rewardValue: v.replace(/[^\d]/g, "")
        }),
        placeholder: "10",
        suffix: "%",
        width: 180
      }));
    case "fixed":
      return /*#__PURE__*/React.createElement(PFRow, {
        label: "S\u1ED1 ti\u1EC1n gi\u1EA3m",
        required: true
      }, /*#__PURE__*/React.createElement(PFInput, {
        value: s.rewardValue,
        onChange: v => set({
          rewardValue: v.replace(/[^\d]/g, "")
        }),
        placeholder: "50.000",
        suffix: "\u0111",
        width: 220
      }));
    case "fixed_price":
      return /*#__PURE__*/React.createElement(PFRow, {
        label: "Gi\xE1 c\u1ED1 \u0111\u1ECBnh",
        required: true
      }, /*#__PURE__*/React.createElement(PFInput, {
        value: s.rewardValue,
        onChange: v => set({
          rewardValue: v.replace(/[^\d]/g, "")
        }),
        placeholder: "99.000",
        suffix: "\u0111",
        width: 220
      }));
    case "free_ship":
      return /*#__PURE__*/React.createElement(PFRow, {
        label: "M\u1EE9c tr\u1EA7n ph\xED ship \u0111\u01B0\u1EE3c mi\u1EC5n",
        hint: "\u0110\u1EC3 tr\u1ED1ng n\u1EBFu mi\u1EC5n to\xE0n b\u1ED9."
      }, /*#__PURE__*/React.createElement(PFInput, {
        value: s.rewardValue,
        onChange: v => set({
          rewardValue: v.replace(/[^\d]/g, "")
        }),
        placeholder: "40.000",
        suffix: "\u0111",
        width: 220
      }));
    case "free_item":
      return /*#__PURE__*/React.createElement(PFRow, {
        label: "S\u1EA3n ph\u1EA9m t\u1EB7ng k\xE8m",
        required: true,
        hint: s.rewardLetCustomerChoose ? "Khách sẽ chọn số lượng đã cấu hình từ danh sách dưới đây." : "Khách sẽ được tặng toàn bộ các sản phẩm trong danh sách này."
      }, /*#__PURE__*/React.createElement(ProductPicker, {
        selected: s.rewardItems,
        onChange: next => set({
          rewardItems: next
        }),
        multi: true,
        placeholder: "T\xECm s\u1EA3n ph\u1EA9m t\u1EB7ng (theo t\xEAn, SKU ho\u1EB7c th\u01B0\u01A1ng hi\u1EC7u)\u2026"
      }));
    default:
      return null;
  }
}
function Sec4Reward({
  s,
  set
}) {
  return /*#__PURE__*/React.createElement(PFSection, {
    num: "4",
    title: "\u01AFu \u0111\xE3i",
    sub: "Kh\xE1ch \u0111\u01B0\u1EE3c g\xEC khi \u0111\u1EA1t \u0111i\u1EC1u ki\u1EC7n?"
  }, /*#__PURE__*/React.createElement(PFRow, {
    label: "Lo\u1EA1i \u01B0u \u0111\xE3i"
  }, /*#__PURE__*/React.createElement(PFRadioCard, {
    value: s.rewardType,
    onChange: v => set({
      rewardType: v
    }),
    options: REWARD_OPTS,
    columns: 3
  })), /*#__PURE__*/React.createElement(RewardValueField, {
    s: s,
    set: set
  }), s.rewardType === "percent" || s.rewardType === "fixed" ? /*#__PURE__*/React.createElement("div", {
    className: "pf-row--2"
  }, /*#__PURE__*/React.createElement(PFRow, {
    label: "Gi\u1EA3m t\u1ED1i \u0111a (t\xF9y ch\u1ECDn)",
    hint: "\xC1p tr\u1EA7n \u0111\u1EC3 b\u1EA3o v\u1EC7 l\u1EE3i nhu\u1EADn khi gi\xE1 tr\u1ECB \u0111\u01A1n l\u1EDBn."
  }, /*#__PURE__*/React.createElement(PFInput, {
    value: s.rewardCap,
    onChange: v => set({
      rewardCap: v.replace(/[^\d]/g, "")
    }),
    placeholder: "500.000",
    suffix: "\u0111"
  })), /*#__PURE__*/React.createElement("div", null)) : null, s.rewardType === "free_item" ? /*#__PURE__*/React.createElement("div", {
    className: "pf-row--2"
  }, /*#__PURE__*/React.createElement(PFRow, {
    label: "S\u1ED1 l\u01B0\u1EE3ng t\u1EB7ng"
  }, /*#__PURE__*/React.createElement(PFStepper, {
    value: s.rewardQty,
    onChange: v => set({
      rewardQty: v
    }),
    min: 1,
    max: 20
  })), /*#__PURE__*/React.createElement(PFRow, {
    label: " "
  }, /*#__PURE__*/React.createElement(PFSwitchRow, {
    on: s.rewardLetCustomerChoose,
    onChange: v => set({
      rewardLetCustomerChoose: v
    }),
    title: "Cho ph\xE9p kh\xE1ch t\u1EF1 ch\u1ECDn s\u1EA3n ph\u1EA9m t\u1EB7ng",
    sub: "Khi t\u1EAFt, kh\xE1ch s\u1EBD nh\u1EADn t\u1EA5t c\u1EA3 s\u1EA3n ph\u1EA9m trong danh s\xE1ch."
  }))) : null);
}

// ────────────────────────────────────────────────────────────
//  Section 5 — Repeat & limit
// ────────────────────────────────────────────────────────────
function Sec5Repeat({
  s,
  set
}) {
  return /*#__PURE__*/React.createElement(PFSection, {
    num: "5",
    title: "L\u1EB7p l\u1EA1i & gi\u1EDBi h\u1EA1n",
    sub: "Khuy\u1EBFn m\xE3i c\xF3 th\u1EC3 \xE1p nhi\u1EC1u l\u1EA7n kh\xF4ng, v\xE0 gi\u1EDBi h\u1EA1n s\u1EED d\u1EE5ng."
  }, /*#__PURE__*/React.createElement(PFSwitchRow, {
    on: s.repeatable,
    onChange: v => set({
      repeatable: v
    }),
    title: "Cho ph\xE9p l\u1EB7p l\u1EA1i trong c\xF9ng m\u1ED9t \u0111\u01A1n",
    sub: "VD: mua 6 \xE1o th\xEC khuy\u1EBFn m\xE3i \u201CMua 3 t\u1EB7ng 1\u201D \xE1p 2 l\u1EA7n."
  }, s.repeatable ? /*#__PURE__*/React.createElement("div", {
    className: "pf-flex-row",
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-mute",
    style: {
      fontSize: 13
    }
  }, "T\u1ED1i \u0111a"), /*#__PURE__*/React.createElement(PFStepper, {
    value: s.maxRepeats === "unlimited" ? "" : s.maxRepeats,
    onChange: v => set({
      maxRepeats: v
    }),
    min: 1,
    max: 99
  }), /*#__PURE__*/React.createElement("span", {
    className: "pf-mute",
    style: {
      fontSize: 13
    }
  }, "l\u1EA7n / \u0111\u01A1n"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement(PFCheckbox, {
    on: s.maxRepeats === "unlimited",
    onChange: on => set({
      maxRepeats: on ? "unlimited" : 1
    })
  }, "Kh\xF4ng gi\u1EDBi h\u1EA1n"))) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-row__lbl",
    style: {
      marginBottom: 8
    }
  }, "Gi\u1EDBi h\u1EA1n s\u1EED d\u1EE5ng"), /*#__PURE__*/React.createElement("div", {
    className: "pf-row--3"
  }, /*#__PURE__*/React.createElement(PFRow, {
    label: "M\u1ED7i \u0111\u01A1n",
    hint: "S\u1ED1 l\u1EA7n \xE1p d\u1EE5ng t\u1ED1i \u0111a tr\xEAn m\u1ED9t \u0111\u01A1n h\xE0ng."
  }, /*#__PURE__*/React.createElement(PFInput, {
    value: s.maxPerBill,
    onChange: v => set({
      maxPerBill: v.replace(/[^\d]/g, "")
    }),
    placeholder: "1",
    suffix: "l\u1EA7n"
  })), /*#__PURE__*/React.createElement(PFRow, {
    label: "M\u1ED7i kh\xE1ch",
    hint: "M\u1ED9t kh\xE1ch h\xE0ng d\xF9ng t\u1ED1i \u0111a bao nhi\xEAu l\u1EA7n."
  }, /*#__PURE__*/React.createElement(PFInput, {
    value: s.maxPerCustomer,
    onChange: v => set({
      maxPerCustomer: v.replace(/[^\d]/g, "")
    }),
    placeholder: "5",
    suffix: "l\u1EA7n"
  })), /*#__PURE__*/React.createElement(PFRow, {
    label: "To\xE0n h\u1EC7 th\u1ED1ng",
    hint: "T\u1ED5ng s\u1ED1 l\u01B0\u1EE3t s\u1EED d\u1EE5ng c\u1EE7a to\xE0n b\u1ED9 chi\u1EBFn d\u1ECBch."
  }, /*#__PURE__*/React.createElement(PFInput, {
    value: s.maxGlobal,
    onChange: v => set({
      maxGlobal: v.replace(/[^\d]/g, "")
    }),
    placeholder: "1000",
    suffix: "l\u1EA7n"
  })))), /*#__PURE__*/React.createElement(PFRow, {
    label: "C\xE1ch \xE1p d\u1EE5ng"
  }, /*#__PURE__*/React.createElement(PFSegmented, {
    value: s.applyMode,
    onChange: v => set({
      applyMode: v
    }),
    options: [{
      value: "auto",
      label: "Tự động áp dụng",
      icon: "lightning"
    }, {
      value: "coupon",
      label: "Cần mã giảm giá",
      icon: "ticket"
    }],
    brand: true
  })), s.applyMode === "coupon" ? /*#__PURE__*/React.createElement(PFRow, {
    label: "M\xE3 gi\u1EA3m gi\xE1",
    required: true,
    hint: "M\xE3 kh\xF4ng ph\xE2n bi\u1EC7t hoa-th\u01B0\u1EDDng. N\xEAn ng\u1EAFn v\xE0 d\u1EC5 g\xF5."
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-flex-row"
  }, /*#__PURE__*/React.createElement(PFInput, {
    value: s.couponCode,
    onChange: v => set({
      couponCode: v.toUpperCase().replace(/\s/g, "")
    }),
    placeholder: "HETHU2026",
    width: 260
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sbtn sbtn--outline",
    onClick: () => set({
      couponCode: "PRM" + Math.random().toString(36).slice(2, 7).toUpperCase()
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magic-wand"
  }), "T\u1EA1o t\u1EF1 \u0111\u1ED9ng"))) : null);
}

// ────────────────────────────────────────────────────────────
//  Section 6 — Schedule
// ────────────────────────────────────────────────────────────
function Sec6Schedule({
  s,
  set
}) {
  return /*#__PURE__*/React.createElement(PFSection, {
    num: "6",
    title: "L\u1ECBch \xE1p d\u1EE5ng",
    sub: "Kho\u1EA3ng th\u1EDDi gian, ng\xE0y trong tu\u1EA7n, khung gi\u1EDD."
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-row--2"
  }, /*#__PURE__*/React.createElement(PFRow, {
    label: "B\u1EAFt \u0111\u1EA7u",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    className: "pf-input",
    type: "datetime-local",
    value: s.startAt,
    onChange: e => set({
      startAt: e.target.value
    })
  })), /*#__PURE__*/React.createElement(PFRow, {
    label: "K\u1EBFt th\xFAc",
    hint: "B\u1ECF tr\u1ED1ng n\u1EBFu ch\u1EA1y li\xEAn t\u1EE5c kh\xF4ng k\u1EBFt th\xFAc."
  }, /*#__PURE__*/React.createElement("input", {
    className: "pf-input",
    type: "datetime-local",
    value: s.endAt,
    onChange: e => set({
      endAt: e.target.value
    })
  }))), /*#__PURE__*/React.createElement(PFRow, {
    label: "Ng\xE0y trong tu\u1EA7n",
    hint: "Khuy\u1EBFn m\xE3i ch\u1EC9 k\xEDch ho\u1EA1t v\xE0o c\xE1c ng\xE0y \u0111\xE3 ch\u1ECDn."
  }, /*#__PURE__*/React.createElement(PFDayOfWeek, {
    days: s.dows,
    onChange: v => set({
      dows: v
    })
  })), /*#__PURE__*/React.createElement(PFSwitchRow, {
    on: s.hoursOn,
    onChange: v => set({
      hoursOn: v
    }),
    title: "Gi\u1EDBi h\u1EA1n khung gi\u1EDD trong ng\xE0y",
    sub: "VD: ch\u1EC9 \xE1p d\u1EE5ng t\u1EEB 17:00 \u2013 22:00 (happy hour)."
  }, s.hoursOn ? /*#__PURE__*/React.createElement("div", {
    className: "pf-flex-row"
  }, /*#__PURE__*/React.createElement("input", {
    className: "pf-input",
    type: "time",
    value: s.hourStart,
    onChange: e => set({
      hourStart: e.target.value
    }),
    style: {
      width: 140
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "pf-mute"
  }, "\u0111\u1EBFn"), /*#__PURE__*/React.createElement("input", {
    className: "pf-input",
    type: "time",
    value: s.hourEnd,
    onChange: e => set({
      hourEnd: e.target.value
    }),
    style: {
      width: 140
    }
  })) : null));
}

// ────────────────────────────────────────────────────────────
//  Section 7 — Stacking
// ────────────────────────────────────────────────────────────
function Sec7Stacking({
  s,
  set
}) {
  return /*#__PURE__*/React.createElement(PFSection, {
    num: "7",
    title: "K\u1EBFt h\u1EE3p khuy\u1EBFn m\xE3i",
    sub: "Quy t\u1EAFc khi nhi\u1EC1u khuy\u1EBFn m\xE3i c\xF9ng \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t."
  }, /*#__PURE__*/React.createElement(PFSwitchRow, {
    on: s.exclusive,
    onChange: v => set({
      exclusive: v
    }),
    title: "Khuy\u1EBFn m\xE3i \u0111\u1ED9c quy\u1EC1n",
    sub: "Khi b\u1EADt, khuy\u1EBFn m\xE3i n\xE0y kh\xF4ng th\u1EC3 k\u1EBFt h\u1EE3p v\u1EDBi khuy\u1EBFn m\xE3i kh\xE1c."
  }), !s.exclusive ? /*#__PURE__*/React.createElement(PFRow, {
    label: "\u01AFu ti\xEAn \xE1p d\u1EE5ng",
    hint: "S\u1ED1 c\xE0ng cao c\xE0ng \u0111\u01B0\u1EE3c \xE1p tr\u01B0\u1EDBc. D\xF9ng khi mu\u1ED1n \xE9p th\u1EE9 t\u1EF1 v\u1EDBi c\xE1c khuy\u1EBFn m\xE3i kh\xE1c."
  }, /*#__PURE__*/React.createElement(PFStepper, {
    value: s.priority,
    onChange: v => set({
      priority: v
    }),
    min: 0,
    max: 999
  })) : null);
}

// ────────────────────────────────────────────────────────────
//  Main composition
// ────────────────────────────────────────────────────────────
function PromotionForm() {
  const [state, setState] = useStatePF(INITIAL_STATE);
  const set = patch => setState(s => ({
    ...s,
    ...patch
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-page"
  }, /*#__PURE__*/React.createElement("header", {
    className: "pf-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-head__crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Marketing"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Khuy\u1EBFn m\xE3i"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right"
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--fg-base)",
      fontWeight: 600
    }
  }, "T\u1EA1o khuy\u1EBFn m\xE3i m\u1EDBi")), /*#__PURE__*/React.createElement("h1", {
    className: "pf-head__title"
  }, "T\u1EA1o khuy\u1EBFn m\xE3i m\u1EDBi")), /*#__PURE__*/React.createElement("div", {
    className: "pf-head__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-pill pf-pill--gray"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-clock"
  }), "T\u1EF1 l\u01B0u nh\xE1p l\xFAc 14:32"), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-eye"
  }), "Xem tr\u01B0\u1EDBc"), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-copy"
  }), "Nh\xE2n b\u1EA3n"))), /*#__PURE__*/React.createElement("div", {
    className: "pf-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-col"
  }, /*#__PURE__*/React.createElement(Sec1Basic, {
    s: state,
    set: set
  }), /*#__PURE__*/React.createElement(Sec2Trigger, {
    s: state,
    set: set
  }), /*#__PURE__*/React.createElement(Sec3Scope, {
    s: state,
    set: set
  }), /*#__PURE__*/React.createElement(Sec4Reward, {
    s: state,
    set: set
  }), /*#__PURE__*/React.createElement(Sec5Repeat, {
    s: state,
    set: set
  }), /*#__PURE__*/React.createElement(Sec6Schedule, {
    s: state,
    set: set
  }), /*#__PURE__*/React.createElement(Sec7Stacking, {
    s: state,
    set: set
  })), /*#__PURE__*/React.createElement("aside", {
    className: "pf-rail"
  }, /*#__PURE__*/React.createElement(PreviewPanel, {
    state: state
  }))), /*#__PURE__*/React.createElement("footer", {
    className: "pf-savebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-savebar__l"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-info"
  }), "M\u1ECDi thay \u0111\u1ED5i s\u1EBD t\u1EF1 \u0111\u1ED9ng l\u01B0u v\xE0o b\u1EA3n nh\xE1p. Khuy\u1EBFn m\xE3i ch\u1EC9 ch\u1EA1y khi tr\u1EA1ng th\xE1i = ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--color-green)",
      marginLeft: 4
    }
  }, "\u0110ang ch\u1EA1y"), "."), /*#__PURE__*/React.createElement("div", {
    className: "pf-savebar__r"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline"
  }, "H\u1EE7y"), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-floppy-disk"
  }), "L\u01B0u nh\xE1p"), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--primary"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-check-circle"
  }), "L\u01B0u khuy\u1EBFn m\xE3i"))));
}
Object.assign(window, {
  PromotionForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotions/PromotionForm.jsx", error: String((e && e.message) || e) }); }

// promotions/app.jsx
try { (() => {
// app.jsx — mounts the PromotionForm inside the SandboxVN admin shell.
//
// Note: Sidebar/TopNav from the shared shell use paths like
// "../../assets/..." that resolve correctly only from /ui_kits/admin/.
// We're one level deeper-out, so we override the MODULES list + define
// a slim wrapper TopNav with corrected avatar/logo paths.

const LOCAL_MODULES = [{
  id: "marketing",
  label: "Marketing",
  icon: "../assets/modules/marketing.png"
}, {
  id: "sales",
  label: "Sales",
  icon: "../assets/modules/sales.png"
}, {
  id: "storage",
  label: "Kho vận",
  icon: "../assets/modules/storage.png"
}, {
  id: "buy",
  label: "Mua hàng",
  icon: "../assets/modules/buy.png"
}, {
  id: "account",
  label: "Kế toán",
  icon: "../assets/modules/account.png"
}, {
  id: "cash",
  label: "Cửa hàng",
  icon: "../assets/modules/cash.png"
}, {
  id: "job",
  label: "Công việc",
  icon: "../assets/modules/job.png"
}, {
  id: "customer",
  label: "Khách hàng",
  icon: "../assets/modules/customer.png"
}, {
  id: "employee",
  label: "Nhân sự",
  icon: "../assets/modules/employee.png"
}, {
  id: "production",
  label: "Sản xuất",
  icon: "../assets/modules/utilities.png"
}, {
  id: "report",
  label: "Báo cáo",
  icon: "../assets/modules/report.png"
}];
function LocalSidebar({
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "ssidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ssidebar__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-primary.png",
    alt: "SandBox"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "ssidebar__nav"
  }, LOCAL_MODULES.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    type: "button",
    className: "smod " + (m.id === active ? "smod--active" : ""),
    onClick: () => onSelect(m.id),
    title: m.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "smod__sticker"
  }), /*#__PURE__*/React.createElement("img", {
    src: m.icon,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "smod__label"
  }, m.label)))));
}
function LocalTopNav() {
  return /*#__PURE__*/React.createElement("header", {
    className: "stopnav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "stopnav__hamb",
    title: "Menu"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-list"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__item stopnav__item--notif"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stopnav__bell"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-bell"
  }), /*#__PURE__*/React.createElement("span", {
    className: "badge-count"
  }, "4")), "Th\xF4ng b\xE1o h\u1EC7 th\u1ED1ng"), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__item"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-globe"
  }), "Website \u0111\u1EB7t ch\u1ED7"), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__item stopnav__item--brand"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-storefront"
  }), "Chi nh\xE1nh C\u1EA7u Gi\u1EA5y", /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__icons"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stopnav__icobtn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-bell"
  }), /*#__PURE__*/React.createElement("span", {
    className: "badge-count"
  }, "4")), /*#__PURE__*/React.createElement("span", {
    className: "stopnav__icobtn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-rocket-launch"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__profile"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../assets/avatars/avatar-04.jpg",
    name: "Nguy\u1EC5n V\u0103n An",
    size: 36
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stopnav__profile-n"
  }, "Nguy\u1EC5n V\u0103n An"), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__profile-r"
  }, "Admin \u0111\u01A1n v\u1ECB"))));
}
function App() {
  const [active, setActive] = React.useState("marketing");
  return /*#__PURE__*/React.createElement("div", {
    className: "sshell"
  }, /*#__PURE__*/React.createElement(LocalSidebar, {
    active: active,
    onSelect: setActive
  }), /*#__PURE__*/React.createElement("div", {
    className: "sshell__main"
  }, /*#__PURE__*/React.createElement(LocalTopNav, null), /*#__PURE__*/React.createElement("main", {
    className: "sshell__work"
  }, /*#__PURE__*/React.createElement(PromotionForm, null))));
}
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "promotions/app.jsx", error: String((e && e.message) || e) }); }

// sale_dms/app.jsx
try { (() => {
// app.jsx — main router

function App() {
  // Top-level route: which Sale DMS menu
  const [nav, setNav] = React.useState("outlets");

  // Per-section sub-state
  const [outletView, setOutletView] = React.useState({
    mode: "list",
    outlet: null
  });
  const [outletModal, setOutletModal] = React.useState(false);
  const [routeView, setRouteView] = React.useState({
    mode: "list",
    route: null
  });
  const [assignModal, setAssignModal] = React.useState(false);
  const [trackDrawer, setTrackDrawer] = React.useState(null);

  // Map nav id → screen
  let screen;
  if (nav === "outlets") {
    if (outletView.mode === "detail" && outletView.outlet) {
      screen = /*#__PURE__*/React.createElement(OutletDetail, {
        outlet: outletView.outlet,
        onBack: () => setOutletView({
          mode: "list",
          outlet: null
        }),
        onEdit: () => setOutletModal(true)
      });
    } else {
      screen = /*#__PURE__*/React.createElement(OutletsList, {
        onView: o => setOutletView({
          mode: "detail",
          outlet: o
        }),
        onAdd: () => setOutletModal(true)
      });
    }
  } else if (nav === "routes") {
    if (routeView.mode === "detail" && routeView.route) {
      screen = /*#__PURE__*/React.createElement(RouteDetail, {
        route: routeView.route,
        onBack: () => setRouteView({
          mode: "list",
          route: null
        })
      });
    } else {
      screen = /*#__PURE__*/React.createElement(RoutesList, {
        onView: r => setRouteView({
          mode: "detail",
          route: r
        }),
        onAdd: () => {}
      });
    }
  } else if (nav === "shifts") {
    screen = /*#__PURE__*/React.createElement(ShiftsList, {
      onAdd: () => {}
    });
  } else if (nav === "assignments") {
    screen = /*#__PURE__*/React.createElement(AssignmentsScreen, {
      onOpenModal: () => setAssignModal(true)
    });
  } else if (nav === "tracking") {
    screen = /*#__PURE__*/React.createElement(TrackingScreen, {
      onOpenShift: d => setTrackDrawer(d)
    });
  } else if (nav === "reports") {
    screen = /*#__PURE__*/React.createElement(ReportsScreen, null);
  }

  // When switching nav, reset sub-states
  const selectNav = id => {
    setNav(id);
    setOutletView({
      mode: "list",
      outlet: null
    });
    setRouteView({
      mode: "list",
      route: null
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-shell"
  }, /*#__PURE__*/React.createElement(DmsSidebar, null), /*#__PURE__*/React.createElement(DmsSubNav, {
    active: nav,
    onSelect: selectNav
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-main"
  }, /*#__PURE__*/React.createElement(DmsTopnav, null), /*#__PURE__*/React.createElement("main", {
    className: "dms-work"
  }, screen)), /*#__PURE__*/React.createElement(OutletFormModal, {
    open: outletModal,
    outlet: outletView.mode === "detail" ? outletView.outlet : null,
    onClose: () => setOutletModal(false)
  }), assignModal ? /*#__PURE__*/React.createElement(AssignmentModal, {
    onClose: () => setAssignModal(false)
  }) : null, trackDrawer ? /*#__PURE__*/React.createElement(TrackingDrawer, {
    data: trackDrawer,
    onClose: () => setTrackDrawer(null)
  }) : null);
}
ReactDOM.createRoot(document.getElementById("app")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "sale_dms/app.jsx", error: String((e && e.message) || e) }); }

// sale_dms/data.jsx
try { (() => {
// data.jsx — sample Vietnamese data used across all screens

const VN_FIRST = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý"];
const VN_LAST = ["An", "Bình", "Chi", "Dũng", "Hà", "Hằng", "Hoa", "Hùng", "Khoa", "Lan", "Linh", "Mai", "Nam", "Phong", "Quân", "Tâm", "Thảo", "Tú", "Vy", "Yến"];
const OUTLET_GROUPS = ["Tạp hóa lớn", "Tạp hóa nhỏ", "Siêu thị mini", "Quán cà phê", "Nhà hàng"];
const STATUS_TONES = {
  "Hoạt động": "green",
  "Tạm dừng": "yellow",
  "Đóng cửa": "gray",
  "Không hoạt động": "gray"
};
const ROUTES = [{
  id: "R001",
  code: "TBH-CG-01",
  name: "Tuyến Cầu Giấy 1",
  desc: "Phường Dịch Vọng, Quan Hoa",
  outlets: 18,
  mgr: "Nguyễn Văn An",
  status: "Hoạt động"
}, {
  id: "R002",
  code: "TBH-CG-02",
  name: "Tuyến Cầu Giấy 2",
  desc: "Phường Mai Dịch, Trung Hòa",
  outlets: 22,
  mgr: "Trần Thị Bình",
  status: "Hoạt động"
}, {
  id: "R003",
  code: "TBH-DD-01",
  name: "Tuyến Đống Đa 1",
  desc: "Phường Kim Liên, Phương Liên",
  outlets: 16,
  mgr: "Lê Văn Cường",
  status: "Hoạt động"
}, {
  id: "R004",
  code: "TBH-DD-02",
  name: "Tuyến Đống Đa 2",
  desc: "Phường Quốc Tử Giám, Văn Miếu",
  outlets: 14,
  mgr: "Phạm Thu Hà",
  status: "Tạm dừng"
}, {
  id: "R005",
  code: "TBH-HBT-01",
  name: "Tuyến Hai Bà Trưng",
  desc: "Phường Bạch Mai, Trương Định",
  outlets: 20,
  mgr: "Hoàng Minh Đức",
  status: "Hoạt động"
}, {
  id: "R006",
  code: "TBH-LB-01",
  name: "Tuyến Long Biên",
  desc: "Phường Bồ Đề, Ngọc Lâm",
  outlets: 19,
  mgr: "Đặng Quốc Khánh",
  status: "Hoạt động"
}, {
  id: "R007",
  code: "TBH-HD-01",
  name: "Tuyến Hà Đông",
  desc: "Phường Quang Trung, Vạn Phúc",
  outlets: 12,
  mgr: "Bùi Hương Lan",
  status: "Không hoạt động"
}, {
  id: "R008",
  code: "TBH-TX-01",
  name: "Tuyến Thanh Xuân",
  desc: "Phường Hạ Đình, Khương Đình",
  outlets: 17,
  mgr: "Đỗ Thanh Mai",
  status: "Hoạt động"
}];
const OUTLETS = [{
  id: "DB001",
  code: "DB-CG-1001",
  name: "Tạp hóa Hương Giang",
  img: 1,
  owner: "Phạm Thị Hương",
  phone: "0912 345 678",
  group: "Tạp hóa lớn",
  route: "TBH-CG-01",
  mgr: "Nguyễn Văn An",
  mgr2: "Trần Thị Bình",
  addr: "12 Cầu Giấy, P. Quan Hoa, Q. Cầu Giấy, Hà Nội",
  province: "Hà Nội",
  lat: 21.0341,
  lng: 105.7900,
  status: "Hoạt động"
}, {
  id: "DB002",
  code: "DB-CG-1002",
  name: "Siêu thị Mini Tâm Phát",
  img: 2,
  owner: "Lê Văn Tâm",
  phone: "0987 654 321",
  group: "Siêu thị mini",
  route: "TBH-CG-01",
  mgr: "Nguyễn Văn An",
  addr: "45 Trần Thái Tông, P. Dịch Vọng, Q. Cầu Giấy, Hà Nội",
  province: "Hà Nội",
  lat: 21.0335,
  lng: 105.7850,
  status: "Hoạt động"
}, {
  id: "DB003",
  code: "DB-CG-1003",
  name: "Tạp hóa Bà Lành",
  img: 3,
  owner: "Nguyễn Thị Lành",
  phone: "0901 222 333",
  group: "Tạp hóa nhỏ",
  route: "TBH-CG-01",
  mgr: "Trần Thị Bình",
  addr: "78 Xuân Thủy, P. Mai Dịch, Q. Cầu Giấy, Hà Nội",
  province: "Hà Nội",
  lat: 21.0370,
  lng: 105.7800,
  status: "Hoạt động"
}, {
  id: "DB004",
  code: "DB-DD-2001",
  name: "Cà phê Khánh An",
  img: 4,
  owner: "Hoàng Minh Khánh",
  phone: "0918 765 432",
  group: "Quán cà phê",
  route: "TBH-DD-01",
  mgr: "Lê Văn Cường",
  addr: "101 Tôn Đức Thắng, P. Quốc Tử Giám, Q. Đống Đa, Hà Nội",
  province: "Hà Nội",
  lat: 21.0260,
  lng: 105.8350,
  status: "Tạm dừng"
}, {
  id: "DB005",
  code: "DB-DD-2002",
  name: "Nhà hàng Hương Sen",
  img: 5,
  owner: "Đặng Thị Sen",
  phone: "0934 111 555",
  group: "Nhà hàng",
  route: "TBH-DD-01",
  mgr: "Lê Văn Cường",
  addr: "22 Khâm Thiên, P. Khâm Thiên, Q. Đống Đa, Hà Nội",
  province: "Hà Nội",
  lat: 21.0210,
  lng: 105.8390,
  status: "Hoạt động"
}, {
  id: "DB006",
  code: "DB-HBT-3001",
  name: "Tạp hóa Mai Linh",
  img: 6,
  owner: "Bùi Thị Mai",
  phone: "0976 888 111",
  group: "Tạp hóa lớn",
  route: "TBH-HBT-01",
  mgr: "Hoàng Minh Đức",
  addr: "55 Bạch Mai, P. Bạch Mai, Q. Hai Bà Trưng, Hà Nội",
  province: "Hà Nội",
  lat: 20.9970,
  lng: 105.8470,
  status: "Hoạt động"
}, {
  id: "DB007",
  code: "DB-LB-4001",
  name: "Siêu thị Mini Ngọc Lâm",
  img: 7,
  owner: "Đỗ Thanh Ngọc",
  phone: "0945 333 222",
  group: "Siêu thị mini",
  route: "TBH-LB-01",
  mgr: "Đặng Quốc Khánh",
  addr: "180 Ngọc Lâm, P. Ngọc Lâm, Q. Long Biên, Hà Nội",
  province: "Hà Nội",
  lat: 21.0440,
  lng: 105.8810,
  status: "Hoạt động"
}, {
  id: "DB008",
  code: "DB-LB-4002",
  name: "Tạp hóa Anh Tú",
  img: 8,
  owner: "Lý Anh Tú",
  phone: "0913 444 999",
  group: "Tạp hóa nhỏ",
  route: "TBH-LB-01",
  mgr: "Đặng Quốc Khánh",
  addr: "33 Ngô Gia Khảm, P. Bồ Đề, Q. Long Biên, Hà Nội",
  province: "Hà Nội",
  lat: 21.0470,
  lng: 105.8770,
  status: "Đóng cửa"
}, {
  id: "DB009",
  code: "DB-TX-5001",
  name: "Cà phê Vy Linh",
  img: 9,
  owner: "Vũ Thị Vy",
  phone: "0962 555 777",
  group: "Quán cà phê",
  route: "TBH-TX-01",
  mgr: "Đỗ Thanh Mai",
  addr: "78 Khương Đình, P. Khương Đình, Q. Thanh Xuân, Hà Nội",
  province: "Hà Nội",
  lat: 20.9920,
  lng: 105.8120,
  status: "Hoạt động"
}, {
  id: "DB010",
  code: "DB-TX-5002",
  name: "Tạp hóa Hằng Nga",
  img: 10,
  owner: "Ngô Thị Hằng",
  phone: "0938 666 222",
  group: "Tạp hóa lớn",
  route: "TBH-TX-01",
  mgr: "Đỗ Thanh Mai",
  addr: "162 Nguyễn Trãi, P. Hạ Đình, Q. Thanh Xuân, Hà Nội",
  province: "Hà Nội",
  lat: 20.9990,
  lng: 105.8090,
  status: "Hoạt động"
}];
const SALES_TEAM = [{
  id: "NV001",
  code: "S0142",
  name: "Nguyễn Văn An",
  avatar: 1,
  team: "Nhóm Sale 1"
}, {
  id: "NV002",
  code: "S0156",
  name: "Trần Thị Bình",
  avatar: 2,
  team: "Nhóm Sale 1"
}, {
  id: "NV003",
  code: "S0173",
  name: "Lê Văn Cường",
  avatar: 3,
  team: "Nhóm Sale 2"
}, {
  id: "NV004",
  code: "S0188",
  name: "Phạm Thu Hà",
  avatar: 4,
  team: "Nhóm Sale 2"
}, {
  id: "NV005",
  code: "S0201",
  name: "Hoàng Minh Đức",
  avatar: 5,
  team: "Nhóm Sale 3"
}, {
  id: "NV006",
  code: "S0214",
  name: "Đặng Quốc Khánh",
  avatar: 6,
  team: "Nhóm Sale 3"
}];
const SHIFTS = [{
  id: "CA001",
  code: "CA-S",
  name: "Ca sáng",
  start: "07:00",
  end: "11:30",
  note: "Ca sáng tiêu chuẩn",
  status: "Hoạt động"
}, {
  id: "CA002",
  code: "CA-C",
  name: "Ca chiều",
  start: "13:30",
  end: "17:30",
  note: "Ca chiều tiêu chuẩn",
  status: "Hoạt động"
}, {
  id: "CA003",
  code: "CA-T",
  name: "Ca tối",
  start: "18:00",
  end: "22:00",
  note: "Phục vụ điểm bán mở khuya",
  status: "Hoạt động"
}, {
  id: "CA004",
  code: "CA-FD",
  name: "Ca cả ngày",
  start: "08:00",
  end: "17:30",
  note: "Phân công đặc biệt",
  status: "Hoạt động"
}, {
  id: "CA005",
  code: "CA-D",
  name: "Ca đêm",
  start: "22:00",
  end: "06:00",
  note: "Ca qua ngày",
  overnight: true,
  status: "Hoạt động"
}, {
  id: "CA006",
  code: "CA-CN",
  name: "Ca cuối tuần",
  start: "09:00",
  end: "16:00",
  note: "Áp dụng T7/CN",
  status: "Tạm dừng"
}, {
  id: "CA007",
  code: "CA-X",
  name: "Ca xoay vòng",
  start: "06:00",
  end: "14:00",
  note: "Sale luân phiên",
  status: "Không hoạt động"
}];
function avSrc(n) {
  return "../assets/avatars/avatar-" + String((n - 1) % 12 + 1).padStart(2, "0") + ".jpg";
}
function vnd(n) {
  return n.toLocaleString("vi-VN") + " đ";
}
function fmtNum(n) {
  return n.toLocaleString("vi-VN");
}

// Generate next-7-days date headers
function nextDays(n, startOffset = 0) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Array.from({
    length: n
  }).map((_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i + startOffset);
    return d;
  });
}
function dowVi(d) {
  return ["CN", "T2", "T3", "T4", "T5", "T6", "T7"][d.getDay()];
}
function fmtDate(d) {
  return String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0");
}
function isToday(d) {
  const t = new Date();
  return d.toDateString() === t.toDateString();
}
Object.assign(window, {
  OUTLETS,
  ROUTES,
  SHIFTS,
  SALES_TEAM,
  STATUS_TONES,
  OUTLET_GROUPS,
  avSrc,
  vnd,
  fmtNum,
  nextDays,
  dowVi,
  fmtDate,
  isToday
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sale_dms/data.jsx", error: String((e && e.message) || e) }); }

// sale_dms/dms-common.jsx
try { (() => {
// Shared primitives used by every screen in the UI kit.
// Mounted globally onto window at the bottom (see "shared scope" note in system prompt).
const {
  useState
} = React;

// ─────────────────────────────────────────────────────────
// Buttons
// ─────────────────────────────────────────────────────────
function Button({
  variant = "primary",
  icon,
  iconRight,
  onClick,
  children,
  style
}) {
  const cls = "sbtn sbtn--" + variant;
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: onClick,
    style: style
  }, icon ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + icon
  }) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + iconRight
  }) : null);
}
function IconButton({
  icon,
  onClick,
  title,
  variant = "outline"
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--" + variant + " sbtn--icon",
    title: title,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + icon
  }));
}

// ─────────────────────────────────────────────────────────
// Field
// ─────────────────────────────────────────────────────────
function Field({
  icon,
  placeholder,
  value,
  onChange,
  width = 220,
  iconRight
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "sfield",
    style: {
      width
    }
  }, icon ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + icon
  }) : null, /*#__PURE__*/React.createElement("input", {
    className: "sfield__input",
    placeholder: placeholder,
    value: value || "",
    onChange: e => onChange && onChange(e.target.value)
  }), iconRight ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + iconRight
  }) : null);
}
function LabeledField({
  label,
  required,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "slbl-field"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slbl-field__lbl"
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "t-required"
  }, " *") : null), children);
}

// ─────────────────────────────────────────────────────────
// Status / chip / pill
// ─────────────────────────────────────────────────────────
function Status({
  tone = "green",
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "status status--" + tone
  }, children);
}

// ─────────────────────────────────────────────────────────
// Avatar
// ─────────────────────────────────────────────────────────
function Avatar({
  src,
  size = 32,
  name
}) {
  const initials = (name || "?").split(" ").map(p => p[0]).slice(-2).join("");
  return src ? /*#__PURE__*/React.createElement("span", {
    className: "savatar",
    style: {
      width: size,
      height: size,
      backgroundImage: `url(${src})`
    },
    title: name
  }) : /*#__PURE__*/React.createElement("span", {
    className: "savatar savatar--initials",
    style: {
      width: size,
      height: size,
      fontSize: size * 0.4
    },
    title: name
  }, initials);
}
function AvatarStack({
  people,
  size = 28,
  max = 3
}) {
  const shown = people.slice(0, max);
  const rest = people.length - max;
  return /*#__PURE__*/React.createElement("span", {
    className: "savatar-stack"
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: i,
    src: p.src,
    name: p.name,
    size: size
  })), rest > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "savatar savatar--more",
    style: {
      width: size,
      height: size
    }
  }, "+", rest) : null);
}

// ─────────────────────────────────────────────────────────
// Badge count
// ─────────────────────────────────────────────────────────
function BadgeCount({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "badge-count"
  }, children);
}

// ─────────────────────────────────────────────────────────
// Modal
// ─────────────────────────────────────────────────────────
function Modal({
  open,
  onClose,
  title,
  footer,
  children,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "smodal-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "smodal",
    style: {
      width
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("header", {
    className: "smodal__head"
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("button", {
    className: "smodal__x",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "smodal__body"
  }, children), /*#__PURE__*/React.createElement("footer", {
    className: "smodal__foot"
  }, footer)));
}

// ─────────────────────────────────────────────────────────
// Empty state
// ─────────────────────────────────────────────────────────
function EmptyState({
  illustration,
  title,
  subtitle,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sempty"
  }, illustration ? /*#__PURE__*/React.createElement("img", {
    src: illustration,
    alt: ""
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "sempty__t"
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    className: "sempty__s"
  }, subtitle) : null, action);
}
Object.assign(window, {
  Button,
  IconButton,
  Field,
  LabeledField,
  Status,
  Avatar,
  AvatarStack,
  BadgeCount,
  Modal,
  EmptyState
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sale_dms/dms-common.jsx", error: String((e && e.message) || e) }); }

// sale_dms/dms-shell.jsx
try { (() => {
// Shell.jsx — full Sale DMS shell: module rail (108) + secondary nav (224) + topnav + workspace

const SALE_DMS_NAV = [{
  id: "outlets",
  label: "Điểm bán",
  icon: "storefront",
  count: "248"
}, {
  id: "routes",
  label: "Tuyến bán hàng",
  icon: "path",
  count: "32"
}, {
  id: "shifts",
  label: "Thiết lập ca làm việc",
  icon: "clock-clockwise",
  count: "8"
}, {
  id: "assignments",
  label: "Phân ca",
  icon: "calendar-plus",
  count: null
}, {
  id: "tracking",
  label: "Theo dõi công việc",
  icon: "monitor-play",
  count: null
}, {
  id: "reports",
  label: "Báo cáo",
  icon: "chart-line-up",
  count: null
}];
function DmsSidebar() {
  const items = [{
    id: "marketing",
    icon: "../assets/modules/marketing.png",
    label: "Marketing"
  }, {
    id: "sales",
    icon: "../assets/modules/sales.png",
    label: "Sale DMS",
    active: true
  }, {
    id: "storage",
    icon: "../assets/modules/storage.png",
    label: "Kho vận"
  }, {
    id: "buy",
    icon: "../assets/modules/buy.png",
    label: "Mua hàng"
  }, {
    id: "account",
    icon: "../assets/modules/account.png",
    label: "Kế toán"
  }, {
    id: "cash",
    icon: "../assets/modules/cash.png",
    label: "Cửa hàng"
  }, {
    id: "job",
    icon: "../assets/modules/job.png",
    label: "Công việc"
  }, {
    id: "customer",
    icon: "../assets/modules/customer.png",
    label: "Khách hàng"
  }, {
    id: "employee",
    icon: "../assets/modules/employee.png",
    label: "Nhân sự"
  }, {
    id: "report",
    icon: "../assets/modules/report.png",
    label: "Báo cáo"
  }, {
    id: "setting",
    icon: "../assets/modules/setting.png",
    label: "Thiết lập"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "ssidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ssidebar__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-primary.png",
    alt: "SandBox"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "ssidebar__nav"
  }, items.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    className: "smod " + (m.active ? "smod--active" : ""),
    title: m.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "smod__sticker"
  }), /*#__PURE__*/React.createElement("img", {
    src: m.icon,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "smod__label"
  }, m.label)))));
}
function DmsTopnav() {
  return /*#__PURE__*/React.createElement("header", {
    className: "stopnav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "stopnav__hamb",
    title: "Menu"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-list"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__item stopnav__item--notif"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stopnav__bell"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-bell"
  }), /*#__PURE__*/React.createElement("span", {
    className: "badge-count"
  }, "4")), "Th\xF4ng b\xE1o h\u1EC7 th\u1ED1ng"), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__item"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-globe"
  }), "Website \u0111\u1EB7t ch\u1ED7"), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__item stopnav__item--brand"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-storefront"
  }), "Chi nh\xE1nh C\u1EA7u Gi\u1EA5y", /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__icons"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stopnav__icobtn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-question"
  })), /*#__PURE__*/React.createElement("span", {
    className: "stopnav__icobtn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-gear"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__profile"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../assets/avatars/avatar-04.jpg",
    name: "Nguy\u1EC5n V\u0103n An",
    size: 36
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stopnav__profile-n"
  }, "Nguy\u1EC5n V\u0103n An"), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__profile-r"
  }, "Qu\u1EA3n l\xFD Sale DMS"))));
}
function DmsSubNav({
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "dms-subnav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-subnav__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-subnav__kicker"
  }, "Module"), /*#__PURE__*/React.createElement("div", {
    className: "dms-subnav__title"
  }, "Sale DMS"), /*#__PURE__*/React.createElement("div", {
    className: "dms-subnav__sub"
  }, "Qu\u1EA3n l\xFD \u0111i\u1EC3m b\xE1n & l\u1ECBch ch\u0103m s\xF3c")), /*#__PURE__*/React.createElement("nav", {
    className: "dms-subnav__list"
  }, SALE_DMS_NAV.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: "dms-navitem " + (active === it.id ? "is-active" : ""),
    onClick: () => onSelect(it.id)
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + it.icon
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.count ? /*#__PURE__*/React.createElement("span", {
    className: "dms-navitem__count"
  }, it.count) : null))), /*#__PURE__*/React.createElement("div", {
    className: "dms-subnav__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-subnav__quote"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-subnav__quote-t"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-lightbulb",
    style: {
      marginRight: 4
    }
  }), "M\u1EB9o nhanh"), /*#__PURE__*/React.createElement("div", {
    className: "dms-subnav__quote-s"
  }, "K\xE9o th\u1EA3 \u0111i\u1EC3m b\xE1n trong tuy\u1EBFn \u0111\u1EC3 s\u1EAFp x\u1EBFp th\u1EE9 t\u1EF1 gh\xE9 th\u0103m."))));
}

// Breadcrumb
function Crumbs({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-crumbs"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-house"
  }), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-caret-right"
    }), last ? /*#__PURE__*/React.createElement("span", {
      className: "dms-crumbs__here"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      onClick: it.onClick
    }, it.label));
  }));
}
function PageHeader({
  title,
  subtitle,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-pgh"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "dms-pgh__t"
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    className: "dms-pgh__s"
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("div", {
    className: "dms-pgh__actions"
  }, actions) : null);
}

// Generic filter bar
function FilterBar({
  search,
  onSearch,
  dropdowns,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-filterbar"
  }, /*#__PURE__*/React.createElement("label", {
    className: "sfield",
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass"
  }), /*#__PURE__*/React.createElement("input", {
    className: "sfield__input",
    placeholder: search || "Tìm kiếm...",
    onChange: e => onSearch && onSearch(e.target.value)
  })), (dropdowns || []).map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, d.label), /*#__PURE__*/React.createElement("b", null, d.value || "Tất cả"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dms-filterbar__r"
  }, right));
}

// Standard pagination footer
function TableFoot({
  total,
  page = 1,
  pages = 5
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-tfoot"
  }, /*#__PURE__*/React.createElement("div", null, "Hi\u1EC3n th\u1ECB 1 - 10 c\u1EE7a ", total, " b\u1EA3n ghi"), /*#__PURE__*/React.createElement("div", {
    className: "dms-tfoot__pp"
  }, /*#__PURE__*/React.createElement("span", null, "S\u1ED1 d\xF2ng / trang:"), /*#__PURE__*/React.createElement("select", {
    defaultValue: "10"
  }, /*#__PURE__*/React.createElement("option", null, "10"), /*#__PURE__*/React.createElement("option", null, "25"), /*#__PURE__*/React.createElement("option", null, "50"))), /*#__PURE__*/React.createElement("div", {
    className: "dms-tfoot__nums"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dms-tfoot__arrow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-left"
  })), Array.from({
    length: pages
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "dms-tfoot__num " + (i + 1 === page ? "is-active" : "")
  }, i + 1)), /*#__PURE__*/React.createElement("span", {
    className: "dms-tfoot__num is-dots"
  }, "\u2026"), /*#__PURE__*/React.createElement("button", {
    className: "dms-tfoot__num"
  }, pages + 8), /*#__PURE__*/React.createElement("button", {
    className: "dms-tfoot__arrow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right"
  }))));
}
function RowActions({
  onView,
  onEdit,
  onDelete
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-rowact"
  }, /*#__PURE__*/React.createElement("button", {
    title: "Xem chi ti\u1EBFt",
    onClick: onView
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-eye"
  })), /*#__PURE__*/React.createElement("button", {
    title: "S\u1EEDa",
    onClick: onEdit
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-pencil-simple"
  })), /*#__PURE__*/React.createElement("button", {
    title: "X\xF3a",
    className: "is-danger",
    onClick: onDelete
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-trash"
  })));
}

// Section header card
function Section({
  title,
  subtitle,
  action,
  children,
  flush
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-section__h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-section__t"
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    className: "dms-section__s"
  }, subtitle) : null), action), /*#__PURE__*/React.createElement("div", {
    className: "dms-section__b " + (flush ? "dms-section__b--flush" : "")
  }, children));
}

// KPI card
function Kpi({
  label,
  value,
  unit,
  icon,
  tone = "pink",
  delta
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kpi__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kpi__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "dms-kpi__icon dms-kpi__icon--" + tone
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + icon
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dms-kpi__value"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dms-text-num"
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, unit) : null), delta ? /*#__PURE__*/React.createElement("div", {
    className: "dms-kpi__foot"
  }, delta.dir === "up" && /*#__PURE__*/React.createElement("span", {
    className: "dms-kpi__delta-up"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-trend-up"
  }), delta.val), delta.dir === "down" && /*#__PURE__*/React.createElement("span", {
    className: "dms-kpi__delta-down"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-trend-down"
  }), delta.val), delta.dir === "flat" && /*#__PURE__*/React.createElement("span", {
    className: "dms-kpi__delta-flat"
  }, delta.val), /*#__PURE__*/React.createElement("span", null, delta.note)) : null);
}

// Tabs row
function Tabs({
  tabs,
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: "dms-tab " + (t.id === active ? "is-active" : ""),
    onClick: () => onSelect(t.id)
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + t.icon
  }), t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
    className: "dms-tab__count"
  }, t.count) : null)));
}

// Map placeholder (decorative)
function MapPlaceholder({
  pins = [],
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-map",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-map__chip"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-map-pin-line"
  }), "B\u1EA3n \u0111\u1ED3 v\u1ECB tr\xED \xB7 Google Maps"), /*#__PURE__*/React.createElement("div", {
    className: "dms-map__ctrls"
  }, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-plus"
  })), /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-minus"
  })), /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-crosshair"
  }))), pins.length > 1 ? /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pins.map(p => `${p.x}%,${p.y}%`).join(" "),
    className: "dms-map__route",
    vectorEffect: "non-scaling-stroke"
  })) : null, pins.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dms-map__pin " + (p.idle ? "dms-map__pin--idle" : ""),
    style: {
      left: p.x + "%",
      top: p.y + "%"
    }
  }, /*#__PURE__*/React.createElement("span", null, p.label))), children);
}
Object.assign(window, {
  SALE_DMS_NAV,
  DmsSidebar,
  DmsTopnav,
  DmsSubNav,
  Crumbs,
  PageHeader,
  FilterBar,
  TableFoot,
  RowActions,
  Section,
  Kpi,
  Tabs,
  MapPlaceholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sale_dms/dms-shell.jsx", error: String((e && e.message) || e) }); }

// sale_dms/screens/Assignments.jsx
try { (() => {
// Assignments.jsx — Phân ca: calendar grid + assignment modal

function AssignmentsScreen({
  onOpenModal
}) {
  const days = nextDays(7);
  const SHIFT_VARIANTS = {
    "Ca sáng": "pink",
    "Ca chiều": "blue",
    "Ca tối": "purple",
    "Ca cả ngày": "green"
  };
  // Mock calendar data per person/day
  function shiftsFor(empIdx, dayIdx) {
    const seed = (empIdx * 7 + dayIdx) % 6;
    if (seed === 0) return [{
      name: "Ca sáng",
      time: "07:00 — 11:30",
      points: 8,
      route: "TBH-CG-01",
      status: "scheduled"
    }];
    if (seed === 1) return [{
      name: "Ca sáng",
      time: "07:00 — 11:30",
      points: 6,
      route: "TBH-CG-01",
      status: "doing"
    }, {
      name: "Ca chiều",
      time: "13:30 — 17:30",
      points: 5,
      route: "TBH-DD-01",
      status: "scheduled"
    }];
    if (seed === 2) return [{
      name: "Ca chiều",
      time: "13:30 — 17:30",
      points: 7,
      route: "TBH-HBT-01",
      status: "done"
    }];
    if (seed === 3) return [{
      name: "Ca cả ngày",
      time: "08:00 — 17:30",
      points: 12,
      route: "TBH-LB-01",
      status: "scheduled"
    }];
    if (seed === 4) return [];
    return [{
      name: "Ca tối",
      time: "18:00 — 22:00",
      points: 4,
      route: "TBH-TX-01",
      status: "scheduled"
    }];
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: "Sale DMS"
    }, {
      label: "Phân ca"
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    title: "Ph\xE2n ca",
    subtitle: "B\u1EA3ng l\u1ECBch ph\xE2n ca cho t\u1EEBng nh\xE2n vi\xEAn sale. B\u1EA5m Ph\xE2n ca \u0111\u1EC3 t\u1EA1o l\u1ECBch l\u1EB7p ho\u1EB7c ph\xE2n th\u1EE7 c\xF4ng.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "export"
    }, "Xu\u1EA5t l\u1ECBch"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "copy"
    }, "Sao ch\xE9p tu\u1EA7n tr\u01B0\u1EDBc"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "calendar-plus",
      onClick: onOpenModal
    }, "Ph\xE2n ca"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-caltool"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-caltool__l"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Kho\u1EA3ng:"), /*#__PURE__*/React.createElement("b", null, fmtDate(days[0]), " \u2014 ", fmtDate(days[6])), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-segctrl"
  }, /*#__PURE__*/React.createElement("button", null, "H\xF4m nay"), /*#__PURE__*/React.createElement("button", {
    className: "is-active"
  }, "Tu\u1EA7n n\xE0y"), /*#__PURE__*/React.createElement("button", null, "Tu\u1EA7n sau"), /*#__PURE__*/React.createElement("button", null, "Th\xE1ng n\xE0y")), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Nh\xE2n vi\xEAn:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Nh\xF3m sale:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Tuy\u1EBFn:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Tr\u1EA1ng th\xE1i:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dms-caltool__l"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--fg-secondary)"
    }
  }, "Hi\u1EC3n th\u1ECB:"), /*#__PURE__*/React.createElement(Legend, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "dms-caltbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 220,
      textAlign: "left"
    }
  }, "Nh\xE2n vi\xEAn sale"), days.map((d, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    className: "dms-cal__dayhead " + (isToday(d) ? "is-today" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-cal__dow"
  }, dowVi(d)), /*#__PURE__*/React.createElement("div", {
    className: "dms-cal__date"
  }, fmtDate(d)))))), /*#__PURE__*/React.createElement("tbody", null, SALES_TEAM.map((emp, ei) => /*#__PURE__*/React.createElement("tr", {
    key: emp.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "dms-cal__empname"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-emp"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(emp.avatar),
    size: 36,
    name: emp.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-emp__t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-emp__n"
  }, emp.name), /*#__PURE__*/React.createElement("div", {
    className: "dms-emp__c"
  }, emp.code, " \xB7 ", emp.team)))), days.map((d, di) => {
    const list = shiftsFor(ei, di);
    return /*#__PURE__*/React.createElement("td", {
      key: di,
      className: "dms-cal__cell " + (isToday(d) ? "is-today" : "")
    }, list.map((s, si) => /*#__PURE__*/React.createElement("div", {
      key: si,
      className: "dms-shiftcard dms-shiftcard--" + SHIFT_VARIANTS[s.name] || "pink"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dms-shiftcard__t"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dms-shiftcard__n"
    }, s.name), s.status === "doing" && /*#__PURE__*/React.createElement("span", {
      className: "status status--blue",
      style: {
        padding: "2px 6px",
        fontSize: 9
      }
    }, "\u0110ang"), s.status === "done" && /*#__PURE__*/React.createElement("span", {
      className: "status status--green",
      style: {
        padding: "2px 6px",
        fontSize: 9
      }
    }, "Xong")), /*#__PURE__*/React.createElement("span", {
      className: "dms-shiftcard__time"
    }, s.time), /*#__PURE__*/React.createElement("div", {
      className: "dms-shiftcard__meta"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-map-pin"
    }), s.points), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-path"
    }), s.route)))), /*#__PURE__*/React.createElement("button", {
      className: "dms-cal__addbtn"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-plus"
    }), "Th\xEAm ca"));
  }))))))));
}
function Legend() {
  const items = [{
    c: "pink",
    l: "Đã phân"
  }, {
    c: "blue",
    l: "Đang thực hiện"
  }, {
    c: "green",
    l: "Hoàn thành"
  }, {
    c: "yellow",
    l: "Quá giờ"
  }, {
    c: "gray",
    l: "Không thực hiện"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it.c,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 11,
      color: "var(--fg-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: {
        pink: "var(--brand-pink)",
        blue: "var(--color-blue)",
        green: "var(--color-green)",
        yellow: "var(--color-yellow)",
        gray: "var(--stroke-medium)"
      }[it.c]
    }
  }), it.l)));
}

// ─── Modal phân ca ─────────────────────────────────────────
function AssignmentModal({
  onClose
}) {
  const [mode, setMode] = React.useState("repeat"); // repeat | manual
  const [openDays, setOpenDays] = React.useState({
    2: true,
    4: true
  });
  const DOW = [{
    id: 2,
    label: "Thứ Hai"
  }, {
    id: 3,
    label: "Thứ Ba"
  }, {
    id: 4,
    label: "Thứ Tư"
  }, {
    id: 5,
    label: "Thứ Năm"
  }, {
    id: 6,
    label: "Thứ Sáu"
  }, {
    id: 7,
    label: "Thứ Bảy"
  }, {
    id: 8,
    label: "Chủ Nhật"
  }];
  const toggle = id => setOpenDays(s => ({
    ...s,
    [id]: !s[id]
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-modal-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-modal dms-modal--lg",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("header", {
    className: "dms-modal__h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__ht"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__t"
  }, "Ph\xE2n ca cho nh\xE2n vi\xEAn sale"), /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__s"
  }, "T\u1EA1o l\u1ECBch l\u1EB7p c\u1ED1 \u0111\u1ECBnh theo tu\u1EA7n ho\u1EB7c ph\xE2n th\u1EE7 c\xF4ng t\u1EEBng ng\xE0y.")), /*#__PURE__*/React.createElement("button", {
    className: "smodal__x",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-stack"
  }, /*#__PURE__*/React.createElement(SectionInModal, {
    title: "1. Th\xF4ng tin chung",
    icon: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-fieldgrid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(LF, {
    label: "Nh\xE2n vi\xEAn sale",
    req: true,
    hint: "C\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u nh\xE2n vi\xEAn c\xF9ng l\xFAc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-multiselect"
  }, SALES_TEAM.slice(0, 3).map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s.id,
    className: "dms-chip"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(s.avatar),
    size: 20
  }), s.name, /*#__PURE__*/React.createElement("span", {
    className: "dms-chip__x"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  })))), /*#__PURE__*/React.createElement("input", {
    placeholder: "T\xECm nh\xE2n vi\xEAn..."
  })))), /*#__PURE__*/React.createElement(LF, {
    label: "T\u1EEB ng\xE0y",
    req: true
  }, /*#__PURE__*/React.createElement("input", {
    className: "dms-input",
    defaultValue: "01/06/2026"
  })), /*#__PURE__*/React.createElement(LF, {
    label: "\u0110\u1EBFn ng\xE0y",
    req: true
  }, /*#__PURE__*/React.createElement("input", {
    className: "dms-input",
    defaultValue: "30/06/2026"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-lf__l",
    style: {
      marginBottom: 8
    }
  }, "Ki\u1EC3u ph\xE2n ca ", /*#__PURE__*/React.createElement("span", {
    className: "t-required"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "dms-radiocard-grp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-radiocard " + (mode === "repeat" ? "is-active" : ""),
    onClick: () => setMode("repeat")
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-radiocard__bullet"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-radiocard__t"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-repeat",
    style: {
      marginRight: 6
    }
  }), "L\u1ECBch l\u1EB7p c\u1ED1 \u0111\u1ECBnh"), /*#__PURE__*/React.createElement("div", {
    className: "dms-radiocard__s"
  }, "Ph\xE2n ca c\u1ED1 \u0111\u1ECBnh theo c\xE1c th\u1EE9 trong tu\u1EA7n. \xC1p d\u1EE5ng l\u1EB7p l\u1EA1i trong kho\u1EA3ng th\u1EDDi gian \u0111\xE3 ch\u1ECDn."))), /*#__PURE__*/React.createElement("div", {
    className: "dms-radiocard " + (mode === "manual" ? "is-active" : ""),
    onClick: () => setMode("manual")
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-radiocard__bullet"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-radiocard__t"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-calendar-blank",
    style: {
      marginRight: 6
    }
  }), "Ph\xE2n th\u1EE7 c\xF4ng"), /*#__PURE__*/React.createElement("div", {
    className: "dms-radiocard__s"
  }, "Ph\xE2n ca t\u1EEBng ng\xE0y c\u1EE5 th\u1EC3. H\u1EC7 th\u1ED1ng sinh danh s\xE1ch ng\xE0y \u0111\u1EC3 c\u1EA5u h\xECnh ca cho m\u1ED7i ng\xE0y."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(LF, {
    label: "Ghi ch\xFA"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "dms-textarea",
    placeholder: "Ghi ch\xFA chung cho l\u1ECBch ph\xE2n ca n\xE0y..."
  })))), /*#__PURE__*/React.createElement(SectionInModal, {
    title: mode === "repeat" ? "2. Cấu hình lịch lặp theo tuần" : "2. Cấu hình từng ngày",
    icon: "calendar"
  }, mode === "repeat" ? /*#__PURE__*/React.createElement("div", {
    className: "dms-accordion"
  }, DOW.map(d => {
    const open = !!openDays[d.id];
    const shiftCount = d.id === 2 ? 2 : d.id === 4 ? 1 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: d.id,
      className: "dms-acc-item " + (open ? "is-open" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "dms-acc-head",
      onClick: () => toggle(d.id)
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-caret-right dms-acc-head__caret"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dms-acc-head__t"
    }, d.label), /*#__PURE__*/React.createElement("div", {
      className: "dms-acc-head__count"
    }, shiftCount > 0 ? /*#__PURE__*/React.createElement("span", {
      className: "status status--green"
    }, shiftCount, " ca") : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--fg-secondary)"
      }
    }, "Ch\u01B0a c\u1EA5u h\xECnh"), /*#__PURE__*/React.createElement("button", {
      className: "sbtn sbtn--ghost",
      style: {
        height: 30,
        padding: "0 8px",
        fontSize: 12
      },
      onClick: e => {
        e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-plus"
    }), "Th\xEAm ca"))), open ? /*#__PURE__*/React.createElement("div", {
      className: "dms-acc-body " + (shiftCount === 0 ? "is-empty" : "")
    }, shiftCount > 0 ? /*#__PURE__*/React.createElement(ShiftDayCards, {
      count: shiftCount
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--fg-secondary)",
        textAlign: "center",
        padding: 8
      }
    }, "Ch\u01B0a c\xF3 ca n\xE0o cho ", d.label.toLowerCase(), ". B\u1EA5m ", /*#__PURE__*/React.createElement("b", null, "+ Th\xEAm ca"), " \u0111\u1EC3 c\u1EA5u h\xECnh.")) : null);
  })) : /*#__PURE__*/React.createElement("div", {
    className: "dms-accordion"
  }, [0, 1, 2].map(i => {
    const d = nextDays(1, i)[0];
    const open = i < 2;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "dms-acc-item " + (open ? "is-open" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "dms-acc-head",
      onClick: () => {}
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-caret-right dms-acc-head__caret"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dms-acc-head__t"
    }, dowVi(d), ", ", fmtDate(d)), /*#__PURE__*/React.createElement("div", {
      className: "dms-acc-head__count"
    }, /*#__PURE__*/React.createElement("span", {
      className: "status status--green"
    }, "1 ca"), /*#__PURE__*/React.createElement("button", {
      className: "sbtn sbtn--ghost",
      style: {
        height: 30,
        padding: "0 8px",
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-plus"
    }), "Th\xEAm ca"))), open ? /*#__PURE__*/React.createElement("div", {
      className: "dms-acc-body"
    }, /*#__PURE__*/React.createElement(ShiftDayCards, {
      count: 1
    })) : null);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dms-warning"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-warning-circle"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "C\u1EA3nh b\xE1o tr\xF9ng ca:"), " H\u1EC7 th\u1ED1ng ph\xE1t hi\u1EC7n ", /*#__PURE__*/React.createElement("b", null, "Tr\u1EA7n Th\u1ECB B\xECnh"), " \u0111\xE3 \u0111\u01B0\u1EE3c ph\xE2n Ca chi\u1EC1u v\xE0o Th\u1EE9 T\u01B0 (13:30 \u2014 17:30) trong kho\u1EA3ng th\u1EDDi gian n\xE0y. B\u1EA5m ", /*#__PURE__*/React.createElement("span", {
    className: "dms-soft-link"
  }, "Xem chi ti\u1EBFt"), " \u0111\u1EC3 x\u1EED l\xFD tr\u01B0\u1EDBc khi l\u01B0u.")), /*#__PURE__*/React.createElement(SectionInModal, {
    title: "3. Xem tr\u01B0\u1EDBc k\u1EBFt qu\u1EA3 ph\xE2n ca",
    icon: "eye",
    hint: "T\u1ED5ng c\u1ED9ng <b>12 ca</b> s\u1EBD \u0111\u01B0\u1EE3c t\u1EA1o cho <b>3 nh\xE2n vi\xEAn</b> trong kho\u1EA3ng <b>30 ng\xE0y</b>"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-muted)",
      borderRadius: 8,
      padding: 12,
      fontSize: 12,
      color: "var(--fg-secondary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "M\u1ED7i tu\u1EA7n l\u1EB7p l\u1EA1i 3 ca \xB7 T\u1ED5ng ", /*#__PURE__*/React.createElement("b", null, "12 ca"), " trong th\xE1ng"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "calendar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Xem to\xE0n b\u1ED9 l\u1ECBch"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: 6
    }
  }, nextDays(14).map((d, i) => {
    const has = [0, 2, 4, 7, 9, 11].includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "#fff",
        border: "1px solid var(--stroke-base)",
        borderRadius: 6,
        padding: 6,
        fontSize: 10,
        textAlign: "center",
        color: "var(--fg-secondary)",
        opacity: has ? 1 : 0.5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: "var(--fg-base)"
      }
    }, dowVi(d), " ", fmtDate(d)), has ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        padding: "2px 4px",
        background: "var(--surface-pink)",
        color: "var(--brand-pink)",
        borderRadius: 3,
        fontWeight: 600
      }
    }, "Ca s\xE1ng") : null);
  })))))), /*#__PURE__*/React.createElement("footer", {
    className: "dms-modal__foot"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--fg-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-info",
    style: {
      marginRight: 4
    }
  }), "H\u1EC7 th\u1ED1ng t\u1EF1 ki\u1EC3m tra tr\xF9ng ca khi l\u01B0u"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onClose
  }, "H\u1EE7y"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "eye"
  }, "Xem tr\u01B0\u1EDBc"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check"
  }, "T\u1EA1o l\u1ECBch ph\xE2n ca")))));
}
function ShiftDayCards({
  count
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dms-mini-shiftcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-mini-shiftcard__h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-mini-shiftcard__t"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-clock-clockwise"
  }), "Ca ", i === 0 ? "sáng" : "chiều", /*#__PURE__*/React.createElement("span", {
    className: "dms-shiftbadge"
  }, i === 0 ? "07:00 — 11:30" : "13:30 — 17:30")), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline sbtn--icon",
    style: {
      height: 28,
      width: 28
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-trash",
    style: {
      color: "var(--color-red)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dms-fieldgrid"
  }, /*#__PURE__*/React.createElement(LF, {
    label: "Ca l\xE0m vi\u1EC7c",
    req: true
  }, /*#__PURE__*/React.createElement("select", {
    className: "dms-select",
    defaultValue: i === 0 ? "Ca sáng" : "Ca chiều"
  }, /*#__PURE__*/React.createElement("option", null, "Ca s\xE1ng"), /*#__PURE__*/React.createElement("option", null, "Ca chi\u1EC1u"), /*#__PURE__*/React.createElement("option", null, "Ca t\u1ED1i"), /*#__PURE__*/React.createElement("option", null, "Ca c\u1EA3 ng\xE0y"))), /*#__PURE__*/React.createElement(LF, {
    label: "Lo\u1EA1i ph\xE2n c\xF4ng",
    req: true
  }, /*#__PURE__*/React.createElement("select", {
    className: "dms-select",
    defaultValue: i === 0 ? "Theo tuyến" : "Theo điểm bán"
  }, /*#__PURE__*/React.createElement("option", null, "Theo tuy\u1EBFn"), /*#__PURE__*/React.createElement("option", null, "Theo \u0111i\u1EC3m b\xE1n"))), i === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(LF, {
    label: "Tuy\u1EBFn b\xE1n h\xE0ng",
    req: true
  }, /*#__PURE__*/React.createElement("select", {
    className: "dms-select"
  }, ROUTES.map(r => /*#__PURE__*/React.createElement("option", {
    key: r.id
  }, r.code, " \u2014 ", r.name))))) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-lf__l",
    style: {
      marginBottom: 6,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Danh s\xE1ch \u0111i\u1EC3m b\xE1n (", i === 0 ? 6 : 4, ")"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--fg-secondary)",
      fontWeight: 400
    }
  }, "K\xE9o \u0111\u1EC3 s\u1EAFp x\u1EBFp")), /*#__PURE__*/React.createElement("div", {
    className: "dms-pointlist"
  }, OUTLETS.slice(0, i === 0 ? 4 : 3).map((p, pi) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "dms-pointlist__item"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-dots-six-vertical",
    style: {
      color: "var(--fg-secondary)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "dms-pointlist__order"
  }, pi + 1), /*#__PURE__*/React.createElement("span", {
    className: "dms-pointlist__name"
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "dms-pointlist__addr"
  }, p.addr.split(",").slice(-2).join(",").trim()), /*#__PURE__*/React.createElement("button", {
    className: "dms-pointlist__x"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  })))), /*#__PURE__*/React.createElement("button", {
    className: "dms-cal__addbtn",
    style: {
      marginTop: 4,
      height: 28
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-plus"
  }), "Th\xEAm \u0111i\u1EC3m b\xE1n"))), /*#__PURE__*/React.createElement(LF, {
    label: "Ghi ch\xFA cho ca"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dms-input",
    placeholder: "Ghi ch\xFA ri\xEAng cho ca n\xE0y..."
  })))));
}
Object.assign(window, {
  AssignmentsScreen,
  AssignmentModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sale_dms/screens/Assignments.jsx", error: String((e && e.message) || e) }); }

// sale_dms/screens/Outlets.jsx
try { (() => {
// Outlets.jsx — Danh sách điểm bán + Chi tiết điểm bán + Modal thêm/sửa

function OutletsList({
  onView,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: "Sale DMS"
    }, {
      label: "Điểm bán"
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    title: "\u0110i\u1EC3m b\xE1n",
    subtitle: "Qu\u1EA3n l\xFD to\xE0n b\u1ED9 \u0111i\u1EC3m b\xE1n trong h\u1EC7 th\u1ED1ng. M\u1ED7i \u0111i\u1EC3m b\xE1n li\xEAn k\u1EBFt v\u1EDBi tuy\u1EBFn, ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch v\xE0 l\u1ECBch ch\u0103m s\xF3c.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "upload-simple"
    }, "Nh\u1EADp danh s\xE1ch"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "download-simple"
    }, "Xu\u1EA5t Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "plus",
      onClick: onAdd
    }, "Th\xEAm \u0111i\u1EC3m b\xE1n"))
  }), /*#__PURE__*/React.createElement(FilterBar, {
    search: "T\xECm theo t\xEAn, m\xE3 ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
    dropdowns: [{
      label: "Nhóm điểm bán:",
      value: "Tất cả"
    }, {
      label: "Tuyến:",
      value: "Tất cả"
    }, {
      label: "Người phụ trách:",
      value: "Tất cả"
    }, {
      label: "Tỉnh/TP:",
      value: "Hà Nội"
    }, {
      label: "Trạng thái:",
      value: "Hoạt động"
    }],
    right: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "funnel"
    }, "B\u1ED9 l\u1ECDc n\xE2ng cao")
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-tablecard"
  }, /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "col-stt"
  }, "STT"), /*#__PURE__*/React.createElement("th", null, "\u0110i\u1EC3m b\xE1n"), /*#__PURE__*/React.createElement("th", null, "Ch\u1EE7 c\u1EEDa h\xE0ng"), /*#__PURE__*/React.createElement("th", null, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"), /*#__PURE__*/React.createElement("th", null, "Nh\xF3m"), /*#__PURE__*/React.createElement("th", null, "Tuy\u1EBFn"), /*#__PURE__*/React.createElement("th", null, "Ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch"), /*#__PURE__*/React.createElement("th", null, "\u0110\u1ECBa ch\u1EC9"), /*#__PURE__*/React.createElement("th", null, "Tr\u1EA1ng th\xE1i"), /*#__PURE__*/React.createElement("th", {
    className: "col-act"
  }, "Thao t\xE1c"))), /*#__PURE__*/React.createElement("tbody", null, OUTLETS.map((o, i) => /*#__PURE__*/React.createElement("tr", {
    key: o.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "col-stt"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-outletcell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-outletcell__thumb"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-storefront"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-outletcell__t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dms-outletcell__name dms-soft-link",
    onClick: () => onView(o)
  }, o.name), /*#__PURE__*/React.createElement("span", {
    className: "dms-outletcell__code"
  }, o.code)))), /*#__PURE__*/React.createElement("td", null, o.owner), /*#__PURE__*/React.createElement("td", {
    className: "num nowrap"
  }, o.phone), /*#__PURE__*/React.createElement("td", null, o.group), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-shiftbadge"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-path"
  }), o.route)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "sperson"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(i + 1),
    size: 24,
    name: o.mgr
  }), o.mgr, o.mgr2 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-secondary)"
    }
  }, " +1") : null)), /*#__PURE__*/React.createElement("td", {
    style: {
      maxWidth: 240,
      color: "var(--fg-secondary)"
    }
  }, o.addr), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Status, {
    tone: STATUS_TONES[o.status]
  }, o.status)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(RowActions, {
    onView: () => onView(o)
  })))))), /*#__PURE__*/React.createElement(TableFoot, {
    total: 248,
    page: 1
  })));
}
function OutletDetail({
  outlet,
  onBack,
  onEdit
}) {
  const [tab, setTab] = React.useState("orders");
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-stack"
  }, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: "Sale DMS"
    }, {
      label: "Điểm bán",
      onClick: onBack
    }, {
      label: outlet.name
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero__img"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-storefront"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero__b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero__t"
  }, outlet.name, /*#__PURE__*/React.createElement("span", {
    className: "dms-detailhero__code"
  }, outlet.code), /*#__PURE__*/React.createElement(Status, {
    tone: STATUS_TONES[outlet.status]
  }, outlet.status)), /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, outlet.owner), " \xB7 Ch\u1EE7 c\u1EEDa h\xE0ng"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-phone"
  }), " ", outlet.phone), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-path"
  }), " ", outlet.route), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-tag"
  }), " ", outlet.group))), /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero__r"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "map-pin"
  }, "M\u1EDF b\u1EA3n \u0111\u1ED3"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "chat-circle-text"
  }, "Li\xEAn h\u1EC7"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "pencil-simple",
    onClick: onEdit
  }, "S\u1EEDa th\xF4ng tin"))), /*#__PURE__*/React.createElement("div", {
    className: "dms-kpis"
  }, /*#__PURE__*/React.createElement(Kpi, {
    label: "Doanh thu",
    value: vnd(48_650_000),
    icon: "trend-up",
    tone: "green",
    delta: {
      dir: "up",
      val: "+12,4%",
      note: "vs tháng trước"
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "C\xF4ng n\u1EE3",
    value: vnd(3_240_000),
    icon: "receipt-x",
    tone: "red",
    delta: {
      dir: "down",
      val: "-8,1%",
      note: "trong 30 ngày"
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "T\u1ED5ng \u0111\u01A1n h\xE0ng",
    value: "186",
    unit: "\u0111\u01A1n",
    icon: "shopping-cart-simple",
    tone: "blue",
    delta: {
      dir: "up",
      val: "+9",
      note: "vs tháng trước"
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Check-in g\u1EA7n nh\u1EA5t",
    value: "2 gi\u1EDD tr\u01B0\u1EDBc",
    icon: "map-pin-line",
    tone: "pink",
    delta: {
      dir: "flat",
      val: "09:42 Hôm nay",
      note: ""
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.6
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Th\xF4ng tin \u0111i\u1EC3m b\xE1n",
    subtitle: "C\u1EADp nh\u1EADt l\u1EA7n cu\u1ED1i 14/05/2026 b\u1EDFi Nguy\u1EC5n V\u0103n An"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kvgrid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Ch\u1EE7 c\u1EEDa h\xE0ng"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, outlet.owner)), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v dms-text-num"
  }, outlet.phone)), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Nh\xF3m \u0111i\u1EC3m b\xE1n"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, outlet.group)), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Tuy\u1EBFn b\xE1n h\xE0ng"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, outlet.route)), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sperson"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(1),
    size: 22
  }), outlet.mgr, outlet.mgr2 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-secondary)"
    }
  }, ", ", outlet.mgr2) : null))), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Tr\u1EA1ng th\xE1i"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, /*#__PURE__*/React.createElement(Status, {
    tone: STATUS_TONES[outlet.status]
  }, outlet.status))), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv",
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "\u0110\u1ECBa ch\u1EC9"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, outlet.addr)), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Kinh \u0111\u1ED9"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v dms-text-num"
  }, outlet.lng)), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "V\u0129 \u0111\u1ED9"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v dms-text-num"
  }, outlet.lat))), /*#__PURE__*/React.createElement("div", {
    className: "dms-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l",
    style: {
      marginBottom: 10
    }
  }, "H\xECnh \u1EA3nh \u0111i\u1EC3m b\xE1n (4)"), /*#__PURE__*/React.createElement("div", {
    className: "dms-gallery",
    style: {
      gridTemplateColumns: "repeat(5, 1fr)"
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dms-gallery__cell"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dms-gallery__cell dms-gallery__cell--add"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-plus"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "V\u1ECB tr\xED tr\xEAn b\u1EA3n \u0111\u1ED3",
    subtitle: `${outlet.lat}, ${outlet.lng}`,
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "arrow-square-out"
    }, "M\u1EDF r\u1ED9ng")
  }, /*#__PURE__*/React.createElement(MapPlaceholder, {
    pins: [{
      x: 52,
      y: 50,
      label: "1"
    }],
    style: {
      height: 340
    }
  })))), /*#__PURE__*/React.createElement(Tabs, {
    active: tab,
    onSelect: setTab,
    tabs: [{
      id: "orders",
      icon: "shopping-bag-open",
      label: "Lịch sử đơn hàng",
      count: 24
    }, {
      id: "visits",
      icon: "map-pin-line",
      label: "Lịch sử chăm sóc",
      count: 18
    }, {
      id: "stock",
      icon: "package",
      label: "Tồn kho tại điểm bán",
      count: 12
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-tablecard dms-tablecard--solo",
    style: {
      marginTop: -14,
      borderRadius: "0 0 8px 8px"
    }
  }, tab === "orders" && /*#__PURE__*/React.createElement(OutletOrdersTab, null), tab === "visits" && /*#__PURE__*/React.createElement(OutletVisitsTab, null), tab === "stock" && /*#__PURE__*/React.createElement(OutletStockTab, null)));
}
function OutletOrdersTab() {
  const rows = [{
    code: "DH-26052026-0142",
    total: 4_280_000,
    payStatus: "Đã thanh toán",
    payTone: "green",
    by: "Nguyễn Văn An",
    at: "26/05/2026 09:48"
  }, {
    code: "DH-25052026-0091",
    total: 2_640_000,
    payStatus: "Còn nợ",
    payTone: "yellow",
    by: "Nguyễn Văn An",
    at: "25/05/2026 10:12"
  }, {
    code: "DH-23052026-0072",
    total: 6_120_000,
    payStatus: "Đã thanh toán",
    payTone: "green",
    by: "Trần Thị Bình",
    at: "23/05/2026 16:05"
  }, {
    code: "DH-20052026-0035",
    total: 1_980_000,
    payStatus: "Đã thanh toán",
    payTone: "green",
    by: "Nguyễn Văn An",
    at: "20/05/2026 09:22"
  }, {
    code: "DH-18052026-0011",
    total: 3_750_000,
    payStatus: "Hủy đơn",
    payTone: "red",
    by: "Trần Thị Bình",
    at: "18/05/2026 14:40"
  }];
  return /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "col-stt"
  }, "STT"), /*#__PURE__*/React.createElement("th", null, "M\xE3 \u0111\u01A1n"), /*#__PURE__*/React.createElement("th", null, "T\u1ED5ng thanh to\xE1n"), /*#__PURE__*/React.createElement("th", null, "Tr\u1EA1ng th\xE1i"), /*#__PURE__*/React.createElement("th", null, "Ng\u01B0\u1EDDi t\u1EA1o \u0111\u01A1n"), /*#__PURE__*/React.createElement("th", null, "Ng\xE0y t\u1EA1o"), /*#__PURE__*/React.createElement("th", {
    className: "col-act"
  }, "Thao t\xE1c"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.code
  }, /*#__PURE__*/React.createElement("td", {
    className: "col-stt"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-shiftbadge"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-receipt"
  }), r.code)), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement("b", null, vnd(r.total))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Status, {
    tone: r.payTone
  }, r.payStatus)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "sperson"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(i + 1),
    size: 24
  }), r.by)), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, r.at), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-rowact"
  }, /*#__PURE__*/React.createElement("button", {
    title: "Xem"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-eye"
  }))))))));
}
function OutletVisitsTab() {
  const rows = [{
    date: "26/05/2026",
    by: "Nguyễn Văn An",
    ci: "09:42",
    co: "09:58",
    dur: "16 phút",
    rev: 4_280_000,
    ord: 1,
    note: "Bổ sung hàng tuần"
  }, {
    date: "23/05/2026",
    by: "Trần Thị Bình",
    ci: "16:01",
    co: "16:30",
    dur: "29 phút",
    rev: 6_120_000,
    ord: 1,
    note: "Khuyến mãi tháng 5"
  }, {
    date: "20/05/2026",
    by: "Nguyễn Văn An",
    ci: "09:18",
    co: "09:35",
    dur: "17 phút",
    rev: 1_980_000,
    ord: 1,
    note: "—"
  }, {
    date: "18/05/2026",
    by: "Trần Thị Bình",
    ci: "14:36",
    co: "14:55",
    dur: "19 phút",
    rev: 0,
    ord: 0,
    note: "Khách hàng bận, hẹn lại"
  }, {
    date: "15/05/2026",
    by: "Nguyễn Văn An",
    ci: "09:50",
    co: "10:10",
    dur: "20 phút",
    rev: 3_460_000,
    ord: 1,
    note: "—"
  }];
  return /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "col-stt"
  }, "STT"), /*#__PURE__*/React.createElement("th", null, "Ng\xE0y ch\u0103m s\xF3c"), /*#__PURE__*/React.createElement("th", null, "Ng\u01B0\u1EDDi ch\u0103m s\xF3c"), /*#__PURE__*/React.createElement("th", null, "Check-in"), /*#__PURE__*/React.createElement("th", null, "Check-out"), /*#__PURE__*/React.createElement("th", null, "Th\u1EDDi gian"), /*#__PURE__*/React.createElement("th", null, "Doanh thu"), /*#__PURE__*/React.createElement("th", null, "S\u1ED1 \u0111\u01A1n"), /*#__PURE__*/React.createElement("th", null, "Ghi ch\xFA"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "col-stt"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("td", {
    className: "num nowrap"
  }, r.date), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "sperson"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(i + 1),
    size: 24
  }), r.by)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-shiftbadge",
    style: {
      background: "var(--color-green-bg)",
      color: "var(--color-green)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-sign-in"
  }), " ", r.ci), /*#__PURE__*/React.createElement("button", {
    title: "Xem \u1EA3nh",
    className: "sbtn sbtn--outline",
    style: {
      height: 26,
      padding: "0 8px",
      marginLeft: 6,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-image"
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-shiftbadge",
    style: {
      background: "var(--surface-pink)",
      color: "var(--brand-pink)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-sign-out"
  }), " ", r.co), /*#__PURE__*/React.createElement("button", {
    title: "Xem \u1EA3nh",
    className: "sbtn sbtn--outline",
    style: {
      height: 26,
      padding: "0 8px",
      marginLeft: 6,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-image"
  }))), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, r.dur), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement("b", null, r.rev > 0 ? vnd(r.rev) : "—")), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, r.ord), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--fg-secondary)"
    }
  }, r.note)))));
}
function OutletStockTab() {
  const rows = [{
    code: "SP-001",
    name: "Nước ngọt Coca 330ml",
    qty: 84,
    unit: "lon",
    last: "26/05/2026 09:48"
  }, {
    code: "SP-002",
    name: "Nước suối Lavie 500ml",
    qty: 132,
    unit: "chai",
    last: "26/05/2026 09:48"
  }, {
    code: "SP-003",
    name: "Bánh AFC mặn 200g",
    qty: 24,
    unit: "hộp",
    last: "23/05/2026 16:05"
  }, {
    code: "SP-004",
    name: "Sữa TH True Milk 110ml",
    qty: 6,
    unit: "thùng",
    last: "20/05/2026 09:22",
    low: true
  }, {
    code: "SP-005",
    name: "Mì Hảo Hảo tôm chua cay",
    qty: 96,
    unit: "thùng",
    last: "23/05/2026 16:05"
  }];
  return /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "col-stt"
  }, "STT"), /*#__PURE__*/React.createElement("th", null, "M\xE3 SP"), /*#__PURE__*/React.createElement("th", null, "T\xEAn s\u1EA3n ph\u1EA9m"), /*#__PURE__*/React.createElement("th", null, "T\u1ED3n kho"), /*#__PURE__*/React.createElement("th", null, "C\u1EADp nh\u1EADt g\u1EA7n nh\u1EA5t"), /*#__PURE__*/React.createElement("th", {
    className: "col-act"
  }, "Thao t\xE1c"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.code
  }, /*#__PURE__*/React.createElement("td", {
    className: "col-stt"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-text-num",
    style: {
      fontSize: 12,
      color: "var(--fg-secondary)"
    }
  }, r.code)), /*#__PURE__*/React.createElement("td", null, r.name), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement("b", null, fmtNum(r.qty)), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-secondary)"
    }
  }, r.unit), r.low ? /*#__PURE__*/React.createElement(Status, {
    tone: "yellow",
    style: {
      marginLeft: 8
    }
  }, "T\u1ED3n th\u1EA5p") : null), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, r.last), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline",
    style: {
      height: 30,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-arrow-clockwise"
  }), "C\u1EADp nh\u1EADt"))))));
}

// ─── Outlet Modal (Add / Edit) — large form modal ───
function OutletFormModal({
  open,
  onClose,
  outlet
}) {
  if (!open) return null;
  const isEdit = !!outlet;
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-modal-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-modal dms-modal--lg",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("header", {
    className: "dms-modal__h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__ht"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__t"
  }, isEdit ? "Sửa thông tin điểm bán" : "Thêm điểm bán mới"), /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__s"
  }, "\u0110i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin \u0111\u1EC3 t\u1EA1o \u0111i\u1EC3m b\xE1n v\xE0 g\xE1n v\xE0o tuy\u1EBFn ph\u1EE5 tr\xE1ch.")), /*#__PURE__*/React.createElement("button", {
    className: "smodal__x",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-stack"
  }, /*#__PURE__*/React.createElement(SectionInModal, {
    title: "1. Th\xF4ng tin c\u01A1 b\u1EA3n",
    icon: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-fieldgrid"
  }, /*#__PURE__*/React.createElement(LF, {
    label: "T\xEAn \u0111i\u1EC3m b\xE1n",
    req: true
  }, /*#__PURE__*/React.createElement("input", {
    className: "dms-input",
    defaultValue: outlet?.name || "",
    placeholder: "T\u1EA1p h\xF3a H\u01B0\u01A1ng Giang"
  })), /*#__PURE__*/React.createElement(LF, {
    label: "M\xE3 \u0111i\u1EC3m b\xE1n",
    req: true
  }, /*#__PURE__*/React.createElement("input", {
    className: "dms-input",
    defaultValue: outlet?.code || "",
    placeholder: "DB-CG-1001"
  })), /*#__PURE__*/React.createElement(LF, {
    label: "T\xEAn ch\u1EE7 c\u1EEDa h\xE0ng",
    req: true
  }, /*#__PURE__*/React.createElement("input", {
    className: "dms-input",
    defaultValue: outlet?.owner || "",
    placeholder: "Ph\u1EA1m Th\u1ECB H\u01B0\u01A1ng"
  })), /*#__PURE__*/React.createElement(LF, {
    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
    req: true
  }, /*#__PURE__*/React.createElement("input", {
    className: "dms-input",
    defaultValue: outlet?.phone || "",
    placeholder: "0912 345 678"
  })), /*#__PURE__*/React.createElement(LF, {
    label: "Nh\xF3m \u0111i\u1EC3m b\xE1n",
    req: true
  }, /*#__PURE__*/React.createElement("select", {
    className: "dms-select",
    defaultValue: outlet?.group || ""
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 Ch\u1ECDn nh\xF3m \u2014"), OUTLET_GROUPS.map(g => /*#__PURE__*/React.createElement("option", {
    key: g
  }, g)))), /*#__PURE__*/React.createElement(LF, {
    label: "Tuy\u1EBFn b\xE1n h\xE0ng"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dms-select",
    defaultValue: outlet?.route || ""
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 Ch\u1ECDn tuy\u1EBFn \u2014"), ROUTES.map(r => /*#__PURE__*/React.createElement("option", {
    key: r.id,
    value: r.code
  }, r.code, " \u2014 ", r.name)))), /*#__PURE__*/React.createElement(LF, {
    label: "Ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch",
    req: true,
    hint: "C\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u ng\u01B0\u1EDDi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-multiselect"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dms-chip"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(1),
    size: 20
  }), "Nguy\u1EC5n V\u0103n An", /*#__PURE__*/React.createElement("span", {
    className: "dms-chip__x"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "dms-chip"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(2),
    size: 20
  }), "Tr\u1EA7n Th\u1ECB B\xECnh", /*#__PURE__*/React.createElement("span", {
    className: "dms-chip__x"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  }))), /*#__PURE__*/React.createElement("input", {
    placeholder: "Th\xEAm ng\u01B0\u1EDDi..."
  }))), /*#__PURE__*/React.createElement(LF, {
    label: "Tr\u1EA1ng th\xE1i",
    req: true
  }, /*#__PURE__*/React.createElement("select", {
    className: "dms-select",
    defaultValue: outlet?.status || "Hoạt động"
  }, /*#__PURE__*/React.createElement("option", null, "Ho\u1EA1t \u0111\u1ED9ng"), /*#__PURE__*/React.createElement("option", null, "T\u1EA1m d\u1EEBng"), /*#__PURE__*/React.createElement("option", null, "\u0110\xF3ng c\u1EEDa"))))), /*#__PURE__*/React.createElement(SectionInModal, {
    title: "2. H\xECnh \u1EA3nh \u0111i\u1EC3m b\xE1n",
    icon: "image",
    hint: "T\u1ED1i \u0111a 10 \u1EA3nh, dung l\u01B0\u1EE3ng < 5MB/\u1EA3nh"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-gallery",
    style: {
      gridTemplateColumns: "repeat(6, 1fr)"
    }
  }, [1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dms-gallery__cell"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-image"
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      position: "absolute",
      top: 4,
      right: 4,
      width: 22,
      height: 22,
      borderRadius: 999,
      border: 0,
      background: "rgba(58,58,76,0.8)",
      color: "#fff",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x",
    style: {
      fontSize: 12
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dms-gallery__cell dms-gallery__cell--add",
    style: {
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-upload-simple"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, "T\u1EA3i \u1EA3nh")))), /*#__PURE__*/React.createElement(SectionInModal, {
    title: "3. V\u1ECB tr\xED \u0111i\u1EC3m b\xE1n",
    icon: "map-pin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-fieldgrid"
  }, /*#__PURE__*/React.createElement(LF, {
    label: "Qu\u1ED1c gia"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dms-select"
  }, /*#__PURE__*/React.createElement("option", null, "Vi\u1EC7t Nam"))), /*#__PURE__*/React.createElement(LF, {
    label: "T\u1EC9nh / Th\xE0nh ph\u1ED1",
    req: true
  }, /*#__PURE__*/React.createElement("select", {
    className: "dms-select"
  }, /*#__PURE__*/React.createElement("option", null, "H\xE0 N\u1ED9i"), /*#__PURE__*/React.createElement("option", null, "TP. H\u1ED3 Ch\xED Minh"), /*#__PURE__*/React.createElement("option", null, "\u0110\xE0 N\u1EB5ng"))), /*#__PURE__*/React.createElement(LF, {
    label: "Qu\u1EADn / Huy\u1EC7n"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dms-select"
  }, /*#__PURE__*/React.createElement("option", null, "C\u1EA7u Gi\u1EA5y"))), /*#__PURE__*/React.createElement(LF, {
    label: "Ph\u01B0\u1EDDng / X\xE3"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dms-select"
  }, /*#__PURE__*/React.createElement("option", null, "Quan Hoa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(LF, {
    label: "\u0110\u1ECBa ch\u1EC9 chi ti\u1EBFt",
    req: true
  }, /*#__PURE__*/React.createElement("input", {
    className: "dms-input",
    defaultValue: outlet?.addr || "",
    placeholder: "S\u1ED1 nh\xE0, t\xEAn \u0111\u01B0\u1EDDng"
  }))), /*#__PURE__*/React.createElement(LF, {
    label: "Kinh \u0111\u1ED9"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dms-input dms-text-num",
    defaultValue: outlet?.lng || "",
    placeholder: "105.7900"
  })), /*#__PURE__*/React.createElement(LF, {
    label: "V\u0129 \u0111\u1ED9"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dms-input dms-text-num",
    defaultValue: outlet?.lat || "",
    placeholder: "21.0341"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "crosshair"
  }, "L\u1EA5y v\u1ECB tr\xED hi\u1EC7n t\u1EA1i"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "map-trifold"
  }, "Ch\u1ECDn v\u1ECB tr\xED tr\xEAn b\u1EA3n \u0111\u1ED3")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(MapPlaceholder, {
    pins: [{
      x: 50,
      y: 50,
      label: "•"
    }],
    style: {
      height: 220
    }
  }))))), /*#__PURE__*/React.createElement("footer", {
    className: "dms-modal__foot"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--fg-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-info",
    style: {
      marginRight: 4
    }
  }), "C\xE1c tr\u01B0\u1EDDng c\xF3 d\u1EA5u (", /*#__PURE__*/React.createElement("span", {
    className: "t-required"
  }, "*"), ") l\xE0 b\u1EAFt bu\u1ED9c"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onClose
  }, "H\u1EE7y"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "floppy-disk"
  }, "L\u01B0u nh\xE1p"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check"
  }, isEdit ? "Cập nhật điểm bán" : "Tạo điểm bán")))));
}
function SectionInModal({
  title,
  icon,
  hint,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "var(--surface-pink)",
      color: "var(--brand-pink)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + icon,
    style: {
      fontSize: 14
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, title), hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg-secondary)",
      marginTop: 1
    },
    dangerouslySetInnerHTML: {
      __html: hint
    }
  }) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 38
    }
  }, children));
}
function LF({
  label,
  req,
  hint,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-lf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-lf__l"
  }, label, req ? /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*") : null), children, hint ? /*#__PURE__*/React.createElement("div", {
    className: "dms-lf__hint"
  }, hint) : null);
}
Object.assign(window, {
  OutletsList,
  OutletDetail,
  OutletFormModal,
  LF,
  SectionInModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sale_dms/screens/Outlets.jsx", error: String((e && e.message) || e) }); }

// sale_dms/screens/Reports.jsx
try { (() => {
// Reports.jsx — Dashboard báo cáo Sale DMS

function ReportsScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-stack"
  }, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: "Sale DMS"
    }, {
      label: "Báo cáo"
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    title: "B\xE1o c\xE1o Sale DMS",
    subtitle: "T\u1ED5ng quan hi\u1EC7u su\u1EA5t ch\u0103m s\xF3c, doanh thu v\xE0 l\u1ECBch tr\xECnh c\u1EE7a \u0111\u1ED9i ng\u0169 sale.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "funnel"
    }, "B\u1ED9 l\u1ECDc"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "export"
    }, "Xu\u1EA5t Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "printer"
    }, "In b\xE1o c\xE1o"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-filterbar",
    style: {
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Kho\u1EA3ng th\u1EDDi gian:"), /*#__PURE__*/React.createElement("b", null, "01/05 \u2014 26/05/2026"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-segctrl",
    style: {
      marginLeft: 6
    }
  }, /*#__PURE__*/React.createElement("button", null, "H\xF4m nay"), /*#__PURE__*/React.createElement("button", null, "Tu\u1EA7n n\xE0y"), /*#__PURE__*/React.createElement("button", {
    className: "is-active"
  }, "Th\xE1ng n\xE0y"), /*#__PURE__*/React.createElement("button", null, "Th\xE1ng tr\u01B0\u1EDBc"), /*#__PURE__*/React.createElement("button", null, "Qu\xFD n\xE0y")), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Nh\xE2n vi\xEAn:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Nh\xF3m sale:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Tuy\u1EBFn:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Khu v\u1EF1c:"), /*#__PURE__*/React.createElement("b", null, "H\xE0 N\u1ED9i"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dms-kpis dms-kpis--5"
  }, /*#__PURE__*/React.createElement(Kpi, {
    label: "T\u1ED5ng doanh thu",
    value: vnd(842_580_000),
    icon: "trend-up",
    tone: "green",
    delta: {
      dir: "up",
      val: "+18,2%",
      note: "vs tháng trước"
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "T\u1ED5ng \u0111\u01A1n h\xE0ng",
    value: fmtNum(1_284),
    unit: "\u0111\u01A1n",
    icon: "shopping-bag-open",
    tone: "blue",
    delta: {
      dir: "up",
      val: "+9,4%",
      note: "vs tháng trước"
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "\u0110i\u1EC3m b\xE1n \u0111\xE3 ch\u0103m s\xF3c",
    value: "218",
    unit: "/ 248",
    icon: "map-pin-line",
    tone: "cyan",
    delta: {
      dir: "up",
      val: "+12 điểm",
      note: "vs tháng trước"
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "L\u01B0\u1EE3t check-in",
    value: fmtNum(3_142),
    icon: "sign-in",
    tone: "purple",
    delta: {
      dir: "up",
      val: "+14,8%",
      note: ""
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "T\u1EF7 l\u1EC7 ho\xE0n th\xE0nh",
    value: "87,4",
    unit: "%",
    icon: "check-circle",
    tone: "green",
    delta: {
      dir: "up",
      val: "+3,1pp",
      note: ""
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-kpis"
  }, /*#__PURE__*/React.createElement(Kpi, {
    label: "\u0110i\u1EC3m ch\u01B0a gh\xE9",
    value: "30",
    unit: "\u0111i\u1EC3m",
    icon: "map-pin-slash",
    tone: "orange",
    delta: {
      dir: "down",
      val: "-8",
      note: "vs tháng trước"
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "C\xF4ng n\u1EE3 hi\u1EC7n t\u1EA1i",
    value: vnd(48_240_000),
    icon: "receipt-x",
    tone: "red",
    delta: {
      dir: "down",
      val: "-6,8%",
      note: ""
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "DT trung b\xECnh / \u0111i\u1EC3m b\xE1n",
    value: vnd(3_865_000),
    icon: "storefront",
    tone: "pink",
    delta: {
      dir: "up",
      val: "+5,2%",
      note: ""
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "DT trung b\xECnh / sale",
    value: vnd(140_430_000),
    icon: "user-circle",
    tone: "yellow",
    delta: {
      dir: "up",
      val: "+11,4%",
      note: ""
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-charts2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__t"
  }, "Doanh thu theo ng\xE0y"), /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__s"
  }, "26 ng\xE0y \xB7 \u0111\u01A1n v\u1ECB tri\u1EC7u \u0111\u1ED3ng")), /*#__PURE__*/React.createElement("div", {
    className: "dms-segctrl"
  }, /*#__PURE__*/React.createElement("button", {
    className: "is-active"
  }, "Ng\xE0y"), /*#__PURE__*/React.createElement("button", null, "Tu\u1EA7n"), /*#__PURE__*/React.createElement("button", null, "Th\xE1ng"))), /*#__PURE__*/React.createElement(LineChart, null)), /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__t"
  }, "T\u1EF7 l\u1EC7 ho\xE0n th\xE0nh l\u1ECBch tr\xECnh"), /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__s"
  }, "T\u1ED5ng 1.420 ca"))), /*#__PURE__*/React.createElement(DonutChart, null), /*#__PURE__*/React.createElement("div", {
    className: "dms-donut-legend"
  }, [{
    l: "Hoàn thành",
    v: "87,4%",
    c: "var(--color-green)"
  }, {
    l: "Đang thực hiện",
    v: "6,2%",
    c: "var(--color-blue)"
  }, {
    l: "Quá giờ",
    v: "4,1%",
    c: "var(--color-yellow)"
  }, {
    l: "Không thực hiện",
    v: "2,3%",
    c: "var(--color-red)"
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dms-donut-legend__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dms-donut-legend__sw",
    style: {
      background: r.c
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "dms-donut-legend__l"
  }, r.l), /*#__PURE__*/React.createElement("span", {
    className: "dms-donut-legend__v"
  }, r.v)))))), /*#__PURE__*/React.createElement("div", {
    className: "dms-charts2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__t"
  }, "Doanh thu theo sale"), /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__s"
  }, "Top 6 sale theo doanh thu th\xE1ng n\xE0y \xB7 tri\u1EC7u \u0111\u1ED3ng"))), /*#__PURE__*/React.createElement(VBars, {
    labels: ["N.V.An", "T.T.Bình", "L.V.Cường", "P.T.Hà", "H.M.Đức", "Đ.Q.Khánh"],
    values: [182, 164, 148, 132, 118, 96]
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__t"
  }, "S\u1ED1 l\u01B0\u1EE3t ch\u0103m s\xF3c theo tuy\u1EBFn"), /*#__PURE__*/React.createElement("div", {
    className: "dms-chartcard__s"
  }, "Check-in + check-out \xB7 th\xE1ng n\xE0y"))), /*#__PURE__*/React.createElement(HBars, {
    rows: [{
      name: "Tuyến Cầu Giấy 2",
      v: 482,
      pct: 100
    }, {
      name: "Tuyến Cầu Giấy 1",
      v: 418,
      pct: 87
    }, {
      name: "Tuyến Hai Bà Trưng",
      v: 396,
      pct: 82
    }, {
      name: "Tuyến Long Biên",
      v: 368,
      pct: 76
    }, {
      name: "Tuyến Đống Đa 1",
      v: 312,
      pct: 65
    }, {
      name: "Tuyến Thanh Xuân",
      v: 286,
      pct: 59
    }, {
      name: "Tuyến Hà Đông",
      v: 198,
      pct: 41
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Top \u0111i\u1EC3m b\xE1n doanh thu cao",
    subtitle: "10 \u0111i\u1EC3m b\xE1n d\u1EABn \u0111\u1EA7u th\xE1ng n\xE0y",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "arrow-square-out"
    }, "Xem t\u1EA5t c\u1EA3"),
    flush: true
  }, /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "col-stt"
  }, "STT"), /*#__PURE__*/React.createElement("th", null, "\u0110i\u1EC3m b\xE1n"), /*#__PURE__*/React.createElement("th", null, "Tuy\u1EBFn"), /*#__PURE__*/React.createElement("th", null, "Doanh thu"), /*#__PURE__*/React.createElement("th", null, "S\u1ED1 \u0111\u01A1n"), /*#__PURE__*/React.createElement("th", null, "C\xF4ng n\u1EE3"), /*#__PURE__*/React.createElement("th", null, "Ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch"))), /*#__PURE__*/React.createElement("tbody", null, OUTLETS.slice(0, 8).map((o, i) => /*#__PURE__*/React.createElement("tr", {
    key: o.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "col-stt"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-outletcell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-outletcell__thumb",
    style: {
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-storefront",
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-outletcell__t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dms-outletcell__name"
  }, o.name), /*#__PURE__*/React.createElement("span", {
    className: "dms-outletcell__code"
  }, o.code)))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-shiftbadge"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-path"
  }), o.route)), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement("b", null, vnd((25 - i * 2.4) * 1_000_000 | 0))), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, 38 - i * 3), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: i < 3 ? "var(--color-red)" : "var(--fg-base)"
    }
  }, i < 3 ? vnd((4 - i * 0.8) * 1_000_000 | 0) : "—"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "sperson"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(i + 1),
    size: 22
  }), o.mgr))))))), /*#__PURE__*/React.createElement(Section, {
    title: "Hi\u1EC7u su\u1EA5t sale",
    subtitle: "B\xE1o c\xE1o chi ti\u1EBFt theo t\u1EEBng nh\xE2n vi\xEAn \xB7 th\xE1ng n\xE0y",
    flush: true
  }, /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "col-stt"
  }, "STT"), /*#__PURE__*/React.createElement("th", null, "Sale"), /*#__PURE__*/React.createElement("th", null, "Ca ph\xE2n"), /*#__PURE__*/React.createElement("th", null, "Ca ho\xE0n th\xE0nh"), /*#__PURE__*/React.createElement("th", null, "T\u1EF7 l\u1EC7"), /*#__PURE__*/React.createElement("th", null, "\u0110i\u1EC3m b\xE1n \u0111\xE3 gh\xE9"), /*#__PURE__*/React.createElement("th", null, "S\u1ED1 \u0111\u01A1n"), /*#__PURE__*/React.createElement("th", null, "Doanh thu"), /*#__PURE__*/React.createElement("th", null, "DT TB / \u0111i\u1EC3m"), /*#__PURE__*/React.createElement("th", null, "Check-in tr\u1EC5"), /*#__PURE__*/React.createElement("th", null, "\u0110i\u1EC3m b\u1ECF qua"))), /*#__PURE__*/React.createElement("tbody", null, SALES_TEAM.map((s, i) => {
    const assigned = 28 - i * 2;
    const done = assigned - i;
    const pct = Math.round(done / assigned * 100);
    const visited = 184 - i * 14;
    const orders = 76 - i * 6;
    const revenue = (182 - i * 16) * 1_000_000;
    return /*#__PURE__*/React.createElement("tr", {
      key: s.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "col-stt"
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "sperson"
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: avSrc(s.avatar),
      size: 28
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--fg-secondary)",
        fontFamily: "ui-monospace, monospace"
      }
    }, s.code)))), /*#__PURE__*/React.createElement("td", {
      className: "num"
    }, assigned), /*#__PURE__*/React.createElement("td", {
      className: "num"
    }, done), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        minWidth: 120
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 6,
        background: "var(--surface-pink)",
        borderRadius: 3,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + "%",
        height: "100%",
        background: "var(--brand-gradient-h)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "num",
      style: {
        fontSize: 12,
        fontWeight: 600
      }
    }, pct, "%"))), /*#__PURE__*/React.createElement("td", {
      className: "num"
    }, visited), /*#__PURE__*/React.createElement("td", {
      className: "num"
    }, orders), /*#__PURE__*/React.createElement("td", {
      className: "num"
    }, /*#__PURE__*/React.createElement("b", null, vnd(revenue))), /*#__PURE__*/React.createElement("td", {
      className: "num"
    }, vnd(revenue / visited | 0)), /*#__PURE__*/React.createElement("td", {
      className: "num"
    }, i === 0 ? "—" : /*#__PURE__*/React.createElement(Status, {
      tone: "yellow"
    }, i, " l\u1EA7n")), /*#__PURE__*/React.createElement("td", {
      className: "num"
    }, i < 2 ? "—" : /*#__PURE__*/React.createElement(Status, {
      tone: "red"
    }, i - 1, " \u0111i\u1EC3m")));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dms-row"
  }, /*#__PURE__*/React.createElement(Section, {
    title: "B\xE1o c\xE1o t\u1ED3n kho t\u1EA1i \u0111i\u1EC3m b\xE1n",
    subtitle: "C\u1EA3nh b\xE1o t\u1ED3n th\u1EA5p / t\u1ED3n cao",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "arrow-square-out"
    }, "Xem chi ti\u1EBFt"),
    flush: true
  }, /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "col-stt"
  }, "STT"), /*#__PURE__*/React.createElement("th", null, "\u0110i\u1EC3m b\xE1n"), /*#__PURE__*/React.createElement("th", null, "S\u1EA3n ph\u1EA9m"), /*#__PURE__*/React.createElement("th", null, "T\u1ED3n"), /*#__PURE__*/React.createElement("th", null, "C\u1EA3nh b\xE1o"))), /*#__PURE__*/React.createElement("tbody", null, [{
    o: "Tạp hóa Hương Giang",
    sp: "Sữa TH True Milk",
    qty: "6 thùng",
    warn: "low"
  }, {
    o: "Siêu thị Mini Tâm Phát",
    sp: "Mì Hảo Hảo",
    qty: "240 thùng",
    warn: "high"
  }, {
    o: "Tạp hóa Bà Lành",
    sp: "Nước suối Lavie",
    qty: "4 thùng",
    warn: "low"
  }, {
    o: "Cà phê Khánh An",
    sp: "Coca 330ml",
    qty: "8 lon",
    warn: "low"
  }, {
    o: "Nhà hàng Hương Sen",
    sp: "Bia Tiger 330ml",
    qty: "180 thùng",
    warn: "high"
  }].map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "col-stt"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 500
    }
  }, r.o), /*#__PURE__*/React.createElement("td", null, r.sp), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement("b", null, r.qty)), /*#__PURE__*/React.createElement("td", null, r.warn === "low" ? /*#__PURE__*/React.createElement(Status, {
    tone: "yellow"
  }, "T\u1ED3n th\u1EA5p") : /*#__PURE__*/React.createElement(Status, {
    tone: "red"
  }, "T\u1ED3n cao"))))))), /*#__PURE__*/React.createElement(Section, {
    title: "B\xE1o c\xE1o c\xF4ng n\u1EE3 \u0111i\u1EC3m b\xE1n",
    subtitle: "S\u1EAFp x\u1EBFp theo c\xF4ng n\u1EE3 qu\xE1 h\u1EA1n",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "arrow-square-out"
    }, "Xem chi ti\u1EBFt"),
    flush: true
  }, /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "col-stt"
  }, "STT"), /*#__PURE__*/React.createElement("th", null, "\u0110i\u1EC3m b\xE1n"), /*#__PURE__*/React.createElement("th", null, "Tuy\u1EBFn"), /*#__PURE__*/React.createElement("th", null, "T\u1ED5ng n\u1EE3"), /*#__PURE__*/React.createElement("th", null, "Qu\xE1 h\u1EA1n"))), /*#__PURE__*/React.createElement("tbody", null, [{
    o: "Tạp hóa Hương Giang",
    code: "DB-CG-1001",
    route: "TBH-CG-01",
    debt: 8_240_000,
    over: 3_120_000
  }, {
    o: "Cà phê Khánh An",
    code: "DB-DD-2001",
    route: "TBH-DD-01",
    debt: 6_180_000,
    over: 6_180_000
  }, {
    o: "Tạp hóa Anh Tú",
    code: "DB-LB-4002",
    route: "TBH-LB-01",
    debt: 5_640_000,
    over: 2_240_000
  }, {
    o: "Siêu thị Tâm Phát",
    code: "DB-CG-1002",
    route: "TBH-CG-01",
    debt: 4_320_000,
    over: 0
  }, {
    o: "Nhà hàng Hương Sen",
    code: "DB-DD-2002",
    route: "TBH-DD-01",
    debt: 3_180_000,
    over: 1_120_000
  }].map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "col-stt"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, r.o), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "ui-monospace, monospace",
      fontSize: 11,
      color: "var(--fg-secondary)"
    }
  }, r.code)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-shiftbadge"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-path"
  }), r.route)), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement("b", null, vnd(r.debt))), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, r.over > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-red)",
      fontWeight: 600
    }
  }, vnd(r.over)) : "—"))))))));
}

// ─── Charts ─────────────────────────────────────────────────
function LineChart() {
  const data = [38, 42, 36, 48, 55, 62, 58, 65, 72, 68, 75, 82, 78, 85, 92, 88, 94, 102, 96, 108, 115, 122, 118, 124, 132, 128];
  const W = 720,
    H = 200,
    PAD_L = 32,
    PAD_R = 8,
    PAD_T = 10,
    PAD_B = 24;
  const innerW = W - PAD_L - PAD_R;
  const innerH = H - PAD_T - PAD_B;
  const max = 140;
  const pts = data.map((v, i) => {
    const x = PAD_L + i / (data.length - 1) * innerW;
    const y = PAD_T + (1 - v / max) * innerH;
    return [x, y];
  });
  const path = pts.map(([x, y], i) => i === 0 ? `M${x},${y}` : `L${x},${y}`).join(" ");
  const area = `${path} L${pts[pts.length - 1][0]},${PAD_T + innerH} L${PAD_L},${PAD_T + innerH} Z`;
  const yTicks = [0, 35, 70, 105, 140];
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-linechart"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "dmsLineGrad",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#fd65af",
    stopOpacity: "0.30"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#fe8377",
    stopOpacity: "0.02"
  }))), yTicks.map((v, i) => {
    const y = PAD_T + (1 - v / max) * innerH;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      x1: PAD_L,
      y1: y,
      x2: W - PAD_R,
      y2: y,
      className: "dms-linechart__grid"
    }), /*#__PURE__*/React.createElement("text", {
      x: PAD_L - 6,
      y: y + 3,
      textAnchor: "end",
      className: "dms-linechart__axis"
    }, v));
  }), /*#__PURE__*/React.createElement("path", {
    d: area,
    className: "dms-linechart__area"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    className: "dms-linechart__line"
  }), pts.filter((_, i) => i % 3 === 0).map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x,
    cy: y,
    r: "3.5",
    className: "dms-linechart__dot"
  })), [0, 6, 12, 18, 24].map(i => {
    const x = PAD_L + i / (data.length - 1) * innerW;
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: x,
      y: H - 6,
      textAnchor: "middle",
      className: "dms-linechart__axis"
    }, (i + 1).toString().padStart(2, "0"), "/05");
  })));
}
function DonutChart() {
  // 87.4 / 6.2 / 4.1 / 2.3
  const C = 80,
    S = 18; // center radius
  const segs = [{
    v: 87.4,
    c: "#068b00"
  }, {
    v: 6.2,
    c: "#0069e1"
  }, {
    v: 4.1,
    c: "#cc9900"
  }, {
    v: 2.3,
    c: "#ff4b4b"
  }];
  let off = -25; // start at top
  const total = 100;
  const r = 70;
  const cx = 90,
    cy = 90;
  function arc(start, end) {
    const a0 = start / total * 2 * Math.PI;
    const a1 = end / total * 2 * Math.PI;
    const x0 = cx + Math.cos(a0) * r;
    const y0 = cy + Math.sin(a0) * r;
    const x1 = cx + Math.cos(a1) * r;
    const y1 = cy + Math.sin(a1) * r;
    const large = end - start > 50 ? 1 : 0;
    return `M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${large} 1 ${x1},${y1} Z`;
  }
  let cursor = -25; // start position offset
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-donut"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 180 180",
    style: {
      width: "100%",
      height: "100%"
    }
  }, segs.map((s, i) => {
    const start = cursor;
    const end = cursor + s.v;
    cursor = end;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: arc(start, end),
      fill: s.c
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: 42,
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-donut__center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-donut__pct"
  }, "87,4%"), /*#__PURE__*/React.createElement("div", {
    className: "dms-donut__lbl"
  }, "Ho\xE0n th\xE0nh")));
}
function VBars({
  labels,
  values
}) {
  const max = Math.max(...values);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-vbars"
  }, values.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dms-vbars__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-vbars__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-vbars__fill",
    style: {
      height: v / max * 100 + "%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "#fff",
      fontSize: 10,
      fontWeight: 700,
      paddingTop: 4
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    className: "dms-vbars__lbl"
  }, labels[i])))));
}
function HBars({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-hbar"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dms-hbar__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dms-hbar__name"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "dms-hbar__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dms-hbar__fill",
    style: {
      width: r.pct + "%"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "dms-hbar__val"
  }, fmtNum(r.v)))));
}
Object.assign(window, {
  ReportsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sale_dms/screens/Reports.jsx", error: String((e && e.message) || e) }); }

// sale_dms/screens/Routes.jsx
try { (() => {
// Routes.jsx — Danh sách tuyến + Chi tiết tuyến với timeline điểm bán

function RoutesList({
  onView,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: "Sale DMS"
    }, {
      label: "Tuyến bán hàng"
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    title: "Tuy\u1EBFn b\xE1n h\xE0ng",
    subtitle: "\u0110\u1ECBnh ngh\u0129a c\xE1c tuy\u1EBFn \u0111i v\xE0 g\xE1n \u0111i\u1EC3m b\xE1n v\xE0o tuy\u1EBFn. M\u1ED7i tuy\u1EBFn c\xF3 th\u1EE9 t\u1EF1 gh\xE9 th\u0103m r\xF5 r\xE0ng.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "map-trifold"
    }, "Xem tr\xEAn b\u1EA3n \u0111\u1ED3"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "plus",
      onClick: onAdd
    }, "Th\xEAm tuy\u1EBFn m\u1EDBi"))
  }), /*#__PURE__*/React.createElement(FilterBar, {
    search: "T\xECm theo t\xEAn ho\u1EB7c m\xE3 tuy\u1EBFn",
    dropdowns: [{
      label: "Người phụ trách:",
      value: "Tất cả"
    }, {
      label: "Trạng thái:",
      value: "Hoạt động"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-tablecard"
  }, /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "col-stt"
  }, "STT"), /*#__PURE__*/React.createElement("th", null, "M\xE3 tuy\u1EBFn"), /*#__PURE__*/React.createElement("th", null, "T\xEAn tuy\u1EBFn"), /*#__PURE__*/React.createElement("th", null, "M\xF4 t\u1EA3"), /*#__PURE__*/React.createElement("th", null, "S\u1ED1 \u0111i\u1EC3m b\xE1n"), /*#__PURE__*/React.createElement("th", null, "Ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch"), /*#__PURE__*/React.createElement("th", null, "Tr\u1EA1ng th\xE1i"), /*#__PURE__*/React.createElement("th", {
    className: "col-act"
  }, "Thao t\xE1c"))), /*#__PURE__*/React.createElement("tbody", null, ROUTES.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "col-stt"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-shiftbadge"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-path"
  }), r.code)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-soft-link",
    onClick: () => onView(r),
    style: {
      fontWeight: 600
    }
  }, r.name)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--fg-secondary)"
    }
  }, r.desc), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement("b", null, r.outlets), " \u0111i\u1EC3m"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "sperson"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(i + 1),
    size: 24
  }), r.mgr)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Status, {
    tone: STATUS_TONES[r.status]
  }, r.status)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(RowActions, {
    onView: () => onView(r)
  })))))), /*#__PURE__*/React.createElement(TableFoot, {
    total: 32,
    pages: 4
  })));
}
function RouteDetail({
  route,
  onBack
}) {
  const [showAdd, setShowAdd] = React.useState(false);
  // Use a slice of outlets for this route's timeline
  const points = OUTLETS.slice(0, 7);
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-stack"
  }, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: "Sale DMS"
    }, {
      label: "Tuyến bán hàng",
      onClick: onBack
    }, {
      label: route.name
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero__img",
    style: {
      background: "var(--surface-highlight)",
      color: "var(--color-blue)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-path"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero__b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero__t"
  }, route.name, /*#__PURE__*/React.createElement("span", {
    className: "dms-detailhero__code"
  }, route.code), /*#__PURE__*/React.createElement(Status, {
    tone: STATUS_TONES[route.status]
  }, route.status)), /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-map-pin"
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      marginLeft: 4
    }
  }, route.outlets), " \u0111i\u1EC3m b\xE1n"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-users-three"
  }), " Ph\u1EE5 tr\xE1ch: ", /*#__PURE__*/React.createElement("b", null, route.mgr)), /*#__PURE__*/React.createElement("span", {
    style: {
      maxWidth: 360
    }
  }, route.desc))), /*#__PURE__*/React.createElement("div", {
    className: "dms-detailhero__r"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "trash"
  }, "X\xF3a tuy\u1EBFn"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "pencil-simple"
  }, "S\u1EEDa tuy\u1EBFn"))), /*#__PURE__*/React.createElement("div", {
    className: "dms-row",
    style: {
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.2
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: `Điểm bán trong tuyến (${points.length})`,
    subtitle: "K\xE9o th\u1EA3 \u0111\u1EC3 s\u1EAFp x\u1EBFp l\u1EA1i th\u1EE9 t\u1EF1 gh\xE9 th\u0103m trong ng\xE0y",
    action: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "funnel"
    }, "L\u1ECDc"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "plus",
      onClick: () => setShowAdd(true)
    }, "Th\xEAm \u0111i\u1EC3m b\xE1n v\xE0o tuy\u1EBFn"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-timeline"
  }, points.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "dms-tlitem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-tlspine"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-tlnum"
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    className: "dms-tlcard"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dms-tldrag",
    title: "K\xE9o \u0111\u1EC3 s\u1EAFp x\u1EBFp"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-dots-six-vertical"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-outletcell__thumb",
    style: {
      width: 36,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-storefront",
    style: {
      fontSize: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-tlcard__b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-tlcard__name"
  }, p.name, " ", /*#__PURE__*/React.createElement("span", {
    className: "dms-code"
  }, p.code), /*#__PURE__*/React.createElement(Status, {
    tone: STATUS_TONES[p.status]
  }, p.status)), /*#__PURE__*/React.createElement("div", {
    className: "dms-tlcard__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-map-pin"
  }), p.addr), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-user"
  }), p.mgr))), /*#__PURE__*/React.createElement("div", {
    className: "dms-tlcard__r"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(i + 1),
    size: 24
  }), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline sbtn--icon",
    title: "Xem chi ti\u1EBFt"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-arrow-right"
  })), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline sbtn--icon",
    title: "X\xF3a kh\u1ECFi tuy\u1EBFn",
    style: {
      borderColor: "var(--color-red-bg)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x",
    style: {
      color: "var(--color-red)"
    }
  }))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "B\u1EA3n \u0111\u1ED3 tuy\u1EBFn",
    subtitle: "L\u1ED9 tr\xECnh \u0111\u1EC1 xu\u1EA5t theo th\u1EE9 t\u1EF1 \u0111i\u1EC3m b\xE1n",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "arrow-square-out"
    }, "M\u1EDF r\u1ED9ng")
  }, /*#__PURE__*/React.createElement(MapPlaceholder, {
    style: {
      height: 480
    },
    pins: [{
      x: 22,
      y: 24,
      label: "1"
    }, {
      x: 36,
      y: 38,
      label: "2"
    }, {
      x: 30,
      y: 56,
      label: "3"
    }, {
      x: 50,
      y: 62,
      label: "4"
    }, {
      x: 64,
      y: 48,
      label: "5"
    }, {
      x: 76,
      y: 36,
      label: "6"
    }, {
      x: 70,
      y: 70,
      label: "7"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-kvgrid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "T\u1ED5ng qu\xE3ng \u0111\u01B0\u1EDDng"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, "~ 14,2 km")), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Th\u1EDDi gian d\u1EF1 ki\u1EBFn"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, "~ 3h 40 ph\xFAt")), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Kho\u1EA3ng c\xE1ch trung b\xECnh"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, "~ 2,0 km/\u0111i\u1EC3m")), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Ph\u01B0\u01A1ng ti\u1EC7n \u0111\u1EC1 xu\u1EA5t"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, "Xe m\xE1y")))))), showAdd ? /*#__PURE__*/React.createElement(AddOutletsToRouteModal, {
    onClose: () => setShowAdd(false)
  }) : null);
}
function AddOutletsToRouteModal({
  onClose
}) {
  const [picked, setPicked] = React.useState(new Set(["DB001", "DB002"]));
  const toggle = id => {
    const s = new Set(picked);
    s.has(id) ? s.delete(id) : s.add(id);
    setPicked(s);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-modal-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-modal",
    style: {
      width: 760
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("header", {
    className: "dms-modal__h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__ht"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__t"
  }, "Th\xEAm \u0111i\u1EC3m b\xE1n v\xE0o tuy\u1EBFn"), /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__s"
  }, "\u0110\xE3 ch\u1ECDn ", /*#__PURE__*/React.createElement("b", null, picked.size), " \u0111i\u1EC3m b\xE1n. Sau khi th\xEAm c\xF3 th\u1EC3 k\xE9o th\u1EA3 \u0111\u1EC3 s\u1EAFp x\u1EBFp th\u1EE9 t\u1EF1.")), /*#__PURE__*/React.createElement("button", {
    className: "smodal__x",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dms-modal__body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "sfield",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass"
  }), /*#__PURE__*/React.createElement("input", {
    className: "sfield__input",
    placeholder: "T\xECm theo t\xEAn, m\xE3 ho\u1EB7c \u0111\u1ECBa ch\u1EC9"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Nh\xF3m:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Khu v\u1EF1c:"), /*#__PURE__*/React.createElement("b", null, "C\u1EA7u Gi\u1EA5y"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--stroke-base)",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 40
    }
  }), /*#__PURE__*/React.createElement("th", null, "\u0110i\u1EC3m b\xE1n"), /*#__PURE__*/React.createElement("th", null, "Nh\xF3m"), /*#__PURE__*/React.createElement("th", null, "\u0110\u1ECBa ch\u1EC9"), /*#__PURE__*/React.createElement("th", null, "Tr\u1EA1ng th\xE1i"))), /*#__PURE__*/React.createElement("tbody", null, OUTLETS.map(o => /*#__PURE__*/React.createElement("tr", {
    key: o.id,
    onClick: () => toggle(o.id),
    style: {
      cursor: "pointer",
      background: picked.has(o.id) ? "var(--surface-pink)" : undefined
    }
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-checkbox",
    style: {
      width: 18,
      height: 18,
      borderRadius: 4,
      border: "1.5px solid " + (picked.has(o.id) ? "var(--brand-pink)" : "var(--stroke-medium)"),
      background: picked.has(o.id) ? "var(--brand-pink)" : "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, picked.has(o.id) ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-check",
    style: {
      fontSize: 11,
      fontWeight: 700
    }
  }) : null)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "dms-outletcell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-outletcell__thumb",
    style: {
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-storefront",
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-outletcell__t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dms-outletcell__name"
  }, o.name), /*#__PURE__*/React.createElement("span", {
    className: "dms-outletcell__code"
  }, o.code)))), /*#__PURE__*/React.createElement("td", null, o.group), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--fg-secondary)",
      maxWidth: 240
    }
  }, o.addr), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Status, {
    tone: STATUS_TONES[o.status]
  }, o.status)))))))), /*#__PURE__*/React.createElement("footer", {
    className: "dms-modal__foot"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--fg-base)"
    }
  }, /*#__PURE__*/React.createElement("b", null, picked.size), " \u0111i\u1EC3m b\xE1n \u0111\u01B0\u1EE3c ch\u1ECDn"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onClose
  }, "H\u1EE7y"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "Th\xEAm v\xE0o tuy\u1EBFn")))));
}
Object.assign(window, {
  RoutesList,
  RouteDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sale_dms/screens/Routes.jsx", error: String((e && e.message) || e) }); }

// sale_dms/screens/Shifts.jsx
try { (() => {
// Shifts.jsx — Thiết lập ca làm việc (danh sách)

function ShiftsList({
  onAdd
}) {
  function duration(start, end, overnight) {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    let mins = eh * 60 + em - (sh * 60 + sm);
    if (overnight || mins < 0) mins += 24 * 60;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h + "h" + (m ? " " + m + "ph" : "");
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: "Sale DMS"
    }, {
      label: "Thiết lập ca làm việc"
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    title: "Thi\u1EBFt l\u1EADp ca l\xE0m vi\u1EC7c",
    subtitle: "Qu\u1EA3n l\xFD c\xE1c ca l\xE0m vi\u1EC7c ti\xEAu chu\u1EA9n \u0111\u01B0\u1EE3c d\xF9ng khi ph\xE2n ca cho nh\xE2n vi\xEAn sale.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "clock-counter-clockwise"
    }, "L\u1ECBch s\u1EED thay \u0111\u1ED5i"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "plus",
      onClick: onAdd
    }, "Th\xEAm ca l\xE0m vi\u1EC7c"))
  }), /*#__PURE__*/React.createElement(FilterBar, {
    search: "T\xECm theo t\xEAn ho\u1EB7c m\xE3 ca",
    dropdowns: [{
      label: "Trạng thái:",
      value: "Tất cả"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-tablecard"
  }, /*#__PURE__*/React.createElement("table", {
    className: "dms-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "col-stt"
  }, "STT"), /*#__PURE__*/React.createElement("th", null, "M\xE3 ca"), /*#__PURE__*/React.createElement("th", null, "T\xEAn ca"), /*#__PURE__*/React.createElement("th", null, "Gi\u1EDD b\u1EAFt \u0111\u1EA7u"), /*#__PURE__*/React.createElement("th", null, "Gi\u1EDD k\u1EBFt th\xFAc"), /*#__PURE__*/React.createElement("th", null, "Th\u1EDDi l\u01B0\u1EE3ng"), /*#__PURE__*/React.createElement("th", null, "Ghi ch\xFA"), /*#__PURE__*/React.createElement("th", null, "Tr\u1EA1ng th\xE1i"), /*#__PURE__*/React.createElement("th", {
    className: "col-act"
  }, "Thao t\xE1c"))), /*#__PURE__*/React.createElement("tbody", null, SHIFTS.map((s, i) => /*#__PURE__*/React.createElement("tr", {
    key: s.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "col-stt"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dms-shiftbadge"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-clock"
  }), s.code)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, s.name), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, s.start), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, s.end), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement("b", null, duration(s.start, s.end, s.overnight)), s.overnight ? /*#__PURE__*/React.createElement(Status, {
    tone: "purple",
    style: {
      marginLeft: 8
    }
  }, "Ca qua ng\xE0y") : null), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--fg-secondary)"
    }
  }, s.note), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Status, {
    tone: STATUS_TONES[s.status]
  }, s.status)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(RowActions, null)))))), /*#__PURE__*/React.createElement(TableFoot, {
    total: 8,
    pages: 1
  })));
}
Object.assign(window, {
  ShiftsList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sale_dms/screens/Shifts.jsx", error: String((e && e.message) || e) }); }

// sale_dms/screens/Tracking.jsx
try { (() => {
// Tracking.jsx — Theo dõi công việc: calendar grid + drawer chi tiết ca

const TRACK_STATUS = {
  "scheduled": {
    label: "Chưa bắt đầu",
    tone: "gray",
    variant: "gray"
  },
  "checkedin": {
    label: "Đã check-in",
    tone: "blue",
    variant: "blue"
  },
  "checkedout": {
    label: "Đã check-out",
    tone: "cyan",
    variant: "blue"
  },
  "done": {
    label: "Hoàn thành",
    tone: "green",
    variant: "green"
  },
  "late": {
    label: "Quá giờ",
    tone: "yellow",
    variant: "yellow"
  },
  "skipped": {
    label: "Không thực hiện",
    tone: "red",
    variant: "red"
  }
};
function TrackingScreen({
  onOpenShift
}) {
  const days = nextDays(7);
  function shiftsFor(empIdx, dayIdx) {
    const seed = (empIdx * 11 + dayIdx) % 7;
    if (seed === 0) return [{
      name: "Ca sáng",
      time: "07:00 — 11:30",
      visited: 8,
      total: 8,
      rev: 5_280_000,
      ord: 5,
      st: "done"
    }];
    if (seed === 1) return [{
      name: "Ca sáng",
      time: "07:00 — 11:30",
      visited: 6,
      total: 8,
      rev: 3_140_000,
      ord: 3,
      st: "checkedout"
    }, {
      name: "Ca chiều",
      time: "13:30 — 17:30",
      visited: 0,
      total: 5,
      rev: 0,
      ord: 0,
      st: "scheduled"
    }];
    if (seed === 2) return [{
      name: "Ca chiều",
      time: "13:30 — 17:30",
      visited: 4,
      total: 7,
      rev: 0,
      ord: 0,
      st: "checkedin"
    }];
    if (seed === 3) return [{
      name: "Ca cả ngày",
      time: "08:00 — 17:30",
      visited: 11,
      total: 12,
      rev: 12_480_000,
      ord: 8,
      st: "done"
    }];
    if (seed === 4) return [];
    if (seed === 5) return [{
      name: "Ca sáng",
      time: "07:00 — 11:30",
      visited: 2,
      total: 8,
      rev: 0,
      ord: 0,
      st: "late"
    }];
    return [{
      name: "Ca chiều",
      time: "13:30 — 17:30",
      visited: 0,
      total: 5,
      rev: 0,
      ord: 0,
      st: "skipped"
    }];
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: "Sale DMS"
    }, {
      label: "Theo dõi công việc"
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    title: "Theo d\xF5i c\xF4ng vi\u1EC7c",
    subtitle: "Theo d\xF5i th\u1EF1c t\u1EBF qu\xE1 tr\xECnh ch\u0103m s\xF3c c\u1EE7a sale theo t\u1EEBng ca, bao g\u1ED3m check-in/check-out v\xE0 doanh thu ph\xE1t sinh.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "map-trifold"
    }, "Xem tr\xEAn b\u1EA3n \u0111\u1ED3"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "export"
    }, "Xu\u1EA5t b\xE1o c\xE1o"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-kpis",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Kpi, {
    label: "Ca h\xF4m nay",
    value: "18",
    unit: "ca",
    icon: "calendar-check",
    tone: "pink",
    delta: {
      dir: "flat",
      val: "12 hoàn thành",
      note: "/ 6 đang thực hiện"
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Check-in tr\u1EC5",
    value: "3",
    unit: "ca",
    icon: "clock-countdown",
    tone: "yellow",
    delta: {
      dir: "down",
      val: "-2",
      note: "vs hôm qua"
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "\u0110i\u1EC3m b\xE1n \u0111\xE3 gh\xE9",
    value: "86",
    unit: "/ 124",
    icon: "map-pin-line",
    tone: "blue",
    delta: {
      dir: "up",
      val: "+18%",
      note: "vs hôm qua"
    }
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Doanh thu ph\xE1t sinh",
    value: vnd(48_280_000),
    icon: "trend-up",
    tone: "green",
    delta: {
      dir: "up",
      val: "+12,4%",
      note: ""
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-caltool"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-caltool__l"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Kho\u1EA3ng:"), /*#__PURE__*/React.createElement("b", null, fmtDate(days[0]), " \u2014 ", fmtDate(days[6])), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-segctrl"
  }, /*#__PURE__*/React.createElement("button", null, "H\xF4m nay"), /*#__PURE__*/React.createElement("button", {
    className: "is-active"
  }, "7 ng\xE0y"), /*#__PURE__*/React.createElement("button", null, "Th\xE1ng n\xE0y")), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Nh\xE2n vi\xEAn:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Nh\xF3m sale:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "Tuy\u1EBFn:"), /*#__PURE__*/React.createElement("b", null, "T\u1EA5t c\u1EA3"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dms-dropfield"
  }, /*#__PURE__*/React.createElement("span", null, "\u0110\u01A1n h\xE0ng:"), /*#__PURE__*/React.createElement("b", null, "C\xF3 ph\xE1t sinh"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "dms-caltbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 220,
      textAlign: "left"
    }
  }, "Nh\xE2n vi\xEAn sale"), days.map((d, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    className: "dms-cal__dayhead " + (isToday(d) ? "is-today" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-cal__dow"
  }, dowVi(d)), /*#__PURE__*/React.createElement("div", {
    className: "dms-cal__date"
  }, fmtDate(d)))))), /*#__PURE__*/React.createElement("tbody", null, SALES_TEAM.map((emp, ei) => /*#__PURE__*/React.createElement("tr", {
    key: emp.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "dms-cal__empname"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-emp"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avSrc(emp.avatar),
    size: 36,
    name: emp.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "dms-emp__t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-emp__n"
  }, emp.name), /*#__PURE__*/React.createElement("div", {
    className: "dms-emp__c"
  }, emp.code, " \xB7 ", emp.team)))), days.map((d, di) => {
    const list = shiftsFor(ei, di);
    return /*#__PURE__*/React.createElement("td", {
      key: di,
      className: "dms-cal__cell " + (isToday(d) ? "is-today" : "")
    }, list.map((s, si) => {
      const st = TRACK_STATUS[s.st];
      return /*#__PURE__*/React.createElement("div", {
        key: si,
        className: "dms-shiftcard dms-shiftcard--" + st.variant,
        onClick: () => onOpenShift && onOpenShift({
          emp,
          date: d,
          shift: s,
          st
        })
      }, /*#__PURE__*/React.createElement("div", {
        className: "dms-shiftcard__t"
      }, /*#__PURE__*/React.createElement("span", {
        className: "dms-shiftcard__n"
      }, s.name), /*#__PURE__*/React.createElement("span", {
        className: "status status--" + st.tone,
        style: {
          padding: "2px 6px",
          fontSize: 9
        }
      }, st.label)), /*#__PURE__*/React.createElement("span", {
        className: "dms-shiftcard__time"
      }, s.time), /*#__PURE__*/React.createElement("div", {
        className: "dms-shiftcard__meta"
      }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
        className: "ph ph-map-pin"
      }), s.visited, "/", s.total), s.rev > 0 ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
        className: "ph ph-coin-vertical"
      }), (s.rev / 1_000_000).toFixed(1), "tr") : /*#__PURE__*/React.createElement("span", {
        style: {
          opacity: 0.5
        }
      }, "\u2014"), s.ord > 0 ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
        className: "ph ph-shopping-bag-open"
      }), s.ord) : null));
    }));
  }))))))));
}

// ─── Drawer chi tiết ca ────────────────────────────────────
function TrackingDrawer({
  data,
  onClose
}) {
  if (!data) return null;
  const {
    emp,
    shift,
    date,
    st
  } = data;
  // Mock 5 visits
  const visits = [{
    name: "Tạp hóa Hương Giang",
    code: "DB-CG-1001",
    addr: "12 Cầu Giấy, Q. Cầu Giấy",
    ci: "07:18",
    co: "07:35",
    dur: "17ph",
    rev: 1_280_000,
    ord: 1,
    status: "done"
  }, {
    name: "Siêu thị Mini Tâm Phát",
    code: "DB-CG-1002",
    addr: "45 Trần Thái Tông",
    ci: "07:48",
    co: "08:05",
    dur: "17ph",
    rev: 2_640_000,
    ord: 1,
    status: "done"
  }, {
    name: "Tạp hóa Bà Lành",
    code: "DB-CG-1003",
    addr: "78 Xuân Thủy",
    ci: "08:22",
    co: "08:40",
    dur: "18ph",
    rev: 1_360_000,
    ord: 1,
    status: "done"
  }, {
    name: "Cà phê Khánh An",
    code: "DB-CG-1004",
    addr: "101 Tôn Đức Thắng",
    ci: "09:14",
    co: "09:30",
    dur: "16ph",
    rev: 0,
    ord: 0,
    status: "noord"
  }, {
    name: "Tạp hóa Mai Linh",
    code: "DB-CG-1005",
    addr: "55 Bạch Mai",
    ci: null,
    co: null,
    dur: "—",
    rev: 0,
    ord: 0,
    status: "pending"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "dms-drawer-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-drawer",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("header", {
    className: "dms-drawer__h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "dms-drawer__t"
  }, shift.name, " \xB7 ", shift.time), /*#__PURE__*/React.createElement(Status, {
    tone: st.tone
  }, st.label)), /*#__PURE__*/React.createElement("div", {
    className: "dms-drawer__sub"
  }, dowVi(date), ", ", fmtDate(date), "/", date.getFullYear(), " \xB7 ", emp.name, " (", emp.code, ")")), /*#__PURE__*/React.createElement("div", {
    className: "dms-drawer__hr"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "map-trifold"
  }, "B\u1EA3n \u0111\u1ED3"), /*#__PURE__*/React.createElement("button", {
    className: "smodal__x",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dms-drawer__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kvgrid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Tuy\u1EBFn"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dms-shiftbadge"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-path"
  }), "TBH-CG-01"), " Tuy\u1EBFn C\u1EA7u Gi\u1EA5y 1")), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "\u0110i\u1EC3m \u0111\xE3 gh\xE9"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v"
  }, /*#__PURE__*/React.createElement("b", {
    className: "dms-text-num"
  }, shift.visited, "/", shift.total), " \u0111i\u1EC3m")), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "Doanh thu"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v dms-text-num"
  }, /*#__PURE__*/React.createElement("b", null, vnd(shift.rev)))), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__l"
  }, "S\u1ED1 \u0111\u01A1n"), /*#__PURE__*/React.createElement("div", {
    className: "dms-kv__v dms-text-num"
  }, /*#__PURE__*/React.createElement("b", null, shift.ord), " \u0111\u01A1n"))), /*#__PURE__*/React.createElement("div", {
    className: "dms-divider"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dms-section__t"
  }, "H\xE0nh tr\xECnh ch\u0103m s\xF3c"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-secondary)"
    }
  }, "5 \u0111i\u1EC3m b\xE1n \xB7 4 \u0111\xE3 gh\xE9 \xB7 1 ch\u01B0a gh\xE9")), /*#__PURE__*/React.createElement(MapPlaceholder, {
    style: {
      height: 200,
      marginBottom: 14
    },
    pins: [{
      x: 18,
      y: 30,
      label: "1"
    }, {
      x: 34,
      y: 50,
      label: "2"
    }, {
      x: 50,
      y: 36,
      label: "3"
    }, {
      x: 68,
      y: 56,
      label: "4"
    }, {
      x: 84,
      y: 30,
      label: "5",
      idle: true
    }]
  }), /*#__PURE__*/React.createElement("div", null, visits.map((v, i) => {
    const cls = v.status === "done" ? "is-done" : v.status === "pending" ? "is-skipped" : "is-done";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "dms-vline " + cls
    }, /*#__PURE__*/React.createElement("div", {
      className: "dms-vlhead"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dms-vlt"
    }, i + 1, ". ", v.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "ui-monospace, monospace",
        fontSize: 11,
        color: "var(--fg-secondary)",
        marginLeft: 6
      }
    }, v.code)), /*#__PURE__*/React.createElement("span", {
      className: "dms-vltime"
    }, v.ci ? v.ci + " → " + v.co : "Chưa ghé")), /*#__PURE__*/React.createElement("div", {
      className: "dms-vlb"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dms-vlmeta"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-map-pin"
    }), " ", v.addr), v.dur !== "—" ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-timer"
    }), " Th\u1EDDi gian: ", /*#__PURE__*/React.createElement("b", null, v.dur)) : null), v.status !== "pending" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "dms-vlmeta"
    }, /*#__PURE__*/React.createElement("span", null, "Doanh thu: ", /*#__PURE__*/React.createElement("b", {
      className: "dms-text-num"
    }, v.rev > 0 ? vnd(v.rev) : "—")), /*#__PURE__*/React.createElement("span", null, "S\u1ED1 \u0111\u01A1n: ", /*#__PURE__*/React.createElement("b", {
      className: "dms-text-num"
    }, v.ord)), v.status === "noord" ? /*#__PURE__*/React.createElement(Status, {
      tone: "yellow"
    }, "Kh\xF4ng ph\xE1t sinh \u0111\u01A1n") : null), /*#__PURE__*/React.createElement("div", {
      className: "dms-vlmeta",
      style: {
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg-base)",
        fontWeight: 500
      }
    }, "\u1EA2nh check-in / check-out:"), /*#__PURE__*/React.createElement("div", {
      className: "dms-vlphotos"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dms-vlphoto"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-image"
    }), /*#__PURE__*/React.createElement("div", {
      className: "dms-vlphoto__lbl"
    }, "Check-in")), /*#__PURE__*/React.createElement("div", {
      className: "dms-vlphoto"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-image"
    }), /*#__PURE__*/React.createElement("div", {
      className: "dms-vlphoto__lbl"
    }, "Check-out"))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-muted)",
        borderRadius: 6,
        padding: "8px 10px",
        fontSize: 12,
        color: "var(--fg-secondary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-clock",
      style: {
        marginRight: 4
      }
    }), "Sale ch\u01B0a gh\xE9 \u0111i\u1EC3m b\xE1n n\xE0y. D\u1EF1 ki\u1EBFn 10:30 \u2014 10:50.")));
  })))));
}
Object.assign(window, {
  TrackingScreen,
  TrackingDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sale_dms/screens/Tracking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Common.jsx
try { (() => {
// Shared primitives used by every screen in the UI kit.
// Mounted globally onto window at the bottom (see "shared scope" note in system prompt).
const {
  useState
} = React;

// ─────────────────────────────────────────────────────────
// Buttons
// ─────────────────────────────────────────────────────────
function Button({
  variant = "primary",
  icon,
  iconRight,
  onClick,
  children,
  style
}) {
  const cls = "sbtn sbtn--" + variant;
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: onClick,
    style: style
  }, icon ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + icon
  }) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + iconRight
  }) : null);
}
function IconButton({
  icon,
  onClick,
  title,
  variant = "outline"
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--" + variant + " sbtn--icon",
    title: title,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + icon
  }));
}

// ─────────────────────────────────────────────────────────
// Field
// ─────────────────────────────────────────────────────────
function Field({
  icon,
  placeholder,
  value,
  onChange,
  width = 220,
  iconRight
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "sfield",
    style: {
      width
    }
  }, icon ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + icon
  }) : null, /*#__PURE__*/React.createElement("input", {
    className: "sfield__input",
    placeholder: placeholder,
    value: value || "",
    onChange: e => onChange && onChange(e.target.value)
  }), iconRight ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + iconRight
  }) : null);
}
function LabeledField({
  label,
  required,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "slbl-field"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slbl-field__lbl"
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "t-required"
  }, " *") : null), children);
}

// ─────────────────────────────────────────────────────────
// Status / chip / pill
// ─────────────────────────────────────────────────────────
function Status({
  tone = "green",
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "status status--" + tone
  }, children);
}

// ─────────────────────────────────────────────────────────
// Avatar
// ─────────────────────────────────────────────────────────
function Avatar({
  src,
  size = 32,
  name
}) {
  const initials = (name || "?").split(" ").map(p => p[0]).slice(-2).join("");
  return src ? /*#__PURE__*/React.createElement("span", {
    className: "savatar",
    style: {
      width: size,
      height: size,
      backgroundImage: `url(${src})`
    },
    title: name
  }) : /*#__PURE__*/React.createElement("span", {
    className: "savatar savatar--initials",
    style: {
      width: size,
      height: size,
      fontSize: size * 0.4
    },
    title: name
  }, initials);
}
function AvatarStack({
  people,
  size = 28,
  max = 3
}) {
  const shown = people.slice(0, max);
  const rest = people.length - max;
  return /*#__PURE__*/React.createElement("span", {
    className: "savatar-stack"
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: i,
    src: p.src,
    name: p.name,
    size: size
  })), rest > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "savatar savatar--more",
    style: {
      width: size,
      height: size
    }
  }, "+", rest) : null);
}

// ─────────────────────────────────────────────────────────
// Badge count
// ─────────────────────────────────────────────────────────
function BadgeCount({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "badge-count"
  }, children);
}

// ─────────────────────────────────────────────────────────
// Modal
// ─────────────────────────────────────────────────────────
function Modal({
  open,
  onClose,
  title,
  footer,
  children,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "smodal-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "smodal",
    style: {
      width
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("header", {
    className: "smodal__head"
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("button", {
    className: "smodal__x",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "smodal__body"
  }, children), /*#__PURE__*/React.createElement("footer", {
    className: "smodal__foot"
  }, footer)));
}

// ─────────────────────────────────────────────────────────
// Empty state
// ─────────────────────────────────────────────────────────
function EmptyState({
  illustration,
  title,
  subtitle,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sempty"
  }, illustration ? /*#__PURE__*/React.createElement("img", {
    src: illustration,
    alt: ""
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "sempty__t"
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    className: "sempty__s"
  }, subtitle) : null, action);
}
Object.assign(window, {
  Button,
  IconButton,
  Field,
  LabeledField,
  Status,
  Avatar,
  AvatarStack,
  BadgeCount,
  Modal,
  EmptyState
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Common.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Customers.jsx
try { (() => {
// Customers.jsx — list screen with filters, table, create modal, detail drawer
const {
  useState: useStateC
} = React;
const SEED = [{
  code: "KH-00231",
  name: "Công ty CP Hồng Hà",
  date: "06/04",
  team: "Kinh doanh 1",
  owner: 4,
  by: 4,
  status: "Hoạt động",
  tone: "green",
  amount: "1.250.000 đ"
}, {
  code: "KH-00230",
  name: "Nhà hàng Phở Thìn",
  date: "05/04",
  team: "Bán lẻ",
  owner: 2,
  by: 5,
  status: "Đang xử lý",
  tone: "cyan",
  amount: "682.000 đ"
}, {
  code: "KH-00229",
  name: "Trần Thị Hương",
  date: "05/04",
  team: "Telesale",
  owner: 1,
  by: 1,
  status: "Mới",
  tone: "purple",
  amount: "—"
}, {
  code: "KH-00228",
  name: "Cafe Cộng - CN Tây Sơn",
  date: "04/04",
  team: "Kinh doanh 2",
  owner: 3,
  by: 4,
  status: "Hoạt động",
  tone: "green",
  amount: "3.420.000 đ"
}, {
  code: "KH-00227",
  name: "Lê Văn Đức",
  date: "04/04",
  team: "Telesale",
  owner: 1,
  by: 2,
  status: "Đang xử lý",
  tone: "cyan",
  amount: "—"
}, {
  code: "KH-00226",
  name: "Công ty TNHH Minh Quang",
  date: "03/04",
  team: "Đại lý",
  owner: 5,
  by: 5,
  status: "Hoạt động",
  tone: "green",
  amount: "8.910.000 đ"
}, {
  code: "KH-00225",
  name: "Phạm Thị Bích",
  date: "03/04",
  team: "Telesale",
  owner: 6,
  by: 6,
  status: "Tạm dừng",
  tone: "yellow",
  amount: "—"
}, {
  code: "KH-00224",
  name: "Tiệm bánh Maison Marou",
  date: "02/04",
  team: "Bán lẻ",
  owner: 2,
  by: 4,
  status: "Hoạt động",
  tone: "green",
  amount: "1.080.000 đ"
}, {
  code: "KH-00223",
  name: "Vũ Quang Hùng",
  date: "02/04",
  team: "Kinh doanh 1",
  owner: 4,
  by: 4,
  status: "Lỗi",
  tone: "red",
  amount: "—"
}, {
  code: "KH-00222",
  name: "Spa Hương Sen",
  date: "01/04",
  team: "Kinh doanh 2",
  owner: 3,
  by: 5,
  status: "Hoạt động",
  tone: "green",
  amount: "2.460.000 đ"
}];
const AV = n => `../../assets/avatars/avatar-${String((n - 1) % 12 + 1).padStart(2, "0")}.jpg`;
const PEOPLE = [{
  name: "Nguyễn Văn An",
  src: AV(4)
}, {
  name: "Phạm Thị Bình",
  src: AV(2)
}, {
  name: "Trần Văn Cường",
  src: AV(3)
}, {
  name: "Lê Thị Dung",
  src: AV(1)
}, {
  name: "Phạm Văn Bình",
  src: AV(5)
}, {
  name: "Đặng Thị Hà",
  src: AV(6)
}];
function Customers() {
  const [rows, setRows] = useStateC(SEED);
  const [open, setOpen] = useStateC(false);
  const [selected, setSelected] = useStateC(null);
  const [form, setForm] = useStateC({
    name: "",
    team: "Kinh doanh 1",
    phone: "",
    email: ""
  });
  const [query, setQuery] = useStateC("");
  const [filter, setFilter] = useStateC("all");
  const visible = rows.filter(r => {
    if (filter !== "all" && r.tone !== filter) return false;
    if (query && !r.name.toLowerCase().includes(query.toLowerCase()) && !r.code.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });
  function submit() {
    if (!form.name.trim()) return;
    const code = "KH-" + String(232 + (rows.length - SEED.length)).padStart(5, "0");
    const next = {
      code,
      name: form.name,
      date: "23/05",
      team: form.team,
      owner: 4,
      by: 4,
      status: "Mới",
      tone: "purple",
      amount: "—"
    };
    setRows([next, ...rows]);
    setForm({
      name: "",
      team: "Kinh doanh 1",
      phone: "",
      email: ""
    });
    setOpen(false);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "scust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sphead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "sphead__t"
  }, "Kh\xE1ch h\xE0ng"), /*#__PURE__*/React.createElement("div", {
    className: "sphead__crumbs"
  }, /*#__PURE__*/React.createElement("span", null, "T\u1ED5ng quan"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right"
  }), /*#__PURE__*/React.createElement("span", null, "B\xE1n h\xE0ng"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right"
  }), /*#__PURE__*/React.createElement("b", null, "Kh\xE1ch h\xE0ng"))), /*#__PURE__*/React.createElement("div", {
    className: "sphead__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "export"
  }, "Xu\u1EA5t Excel"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "upload-simple"
  }, "Nh\u1EADp danh s\xE1ch"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus",
    onClick: () => setOpen(true)
  }, "Th\xEAm kh\xE1ch h\xE0ng"))), /*#__PURE__*/React.createElement("div", {
    className: "sfilters card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sfilters__tabs"
  }, [{
    id: "all",
    label: "Tất cả",
    count: rows.length
  }, {
    id: "green",
    label: "Hoạt động",
    count: rows.filter(r => r.tone === "green").length
  }, {
    id: "cyan",
    label: "Đang xử lý",
    count: rows.filter(r => r.tone === "cyan").length
  }, {
    id: "purple",
    label: "Mới",
    count: rows.filter(r => r.tone === "purple").length
  }, {
    id: "yellow",
    label: "Tạm dừng",
    count: rows.filter(r => r.tone === "yellow").length
  }, {
    id: "red",
    label: "Lỗi",
    count: rows.filter(r => r.tone === "red").length
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: "sfilters__tab " + (filter === t.id ? "is-active" : ""),
    onClick: () => setFilter(t.id)
  }, t.label, " ", /*#__PURE__*/React.createElement("span", {
    className: "sfilters__count"
  }, t.count)))), /*#__PURE__*/React.createElement("div", {
    className: "sfilters__right"
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "magnifying-glass",
    placeholder: "T\xECm theo t\xEAn / m\xE3 kh\xE1ch h\xE0ng",
    value: query,
    onChange: setQuery,
    width: 280
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "funnel",
    title: "B\u1ED9 l\u1ECDc"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrows-down-up",
    title: "S\u1EAFp x\u1EBFp"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "gear",
    title: "C\xE0i \u0111\u1EB7t c\u1ED9t"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("table", {
    className: "stable"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "schk"
  })), /*#__PURE__*/React.createElement("th", null, "M\xE3"), /*#__PURE__*/React.createElement("th", null, "T\xEAn kh\xE1ch h\xE0ng"), /*#__PURE__*/React.createElement("th", null, "Ng\xE0y t\u1EA1o"), /*#__PURE__*/React.createElement("th", null, "Ph\xF2ng ban"), /*#__PURE__*/React.createElement("th", null, "Ph\u1EE5 tr\xE1ch"), /*#__PURE__*/React.createElement("th", null, "Ng\u01B0\u1EDDi t\u1EA1o"), /*#__PURE__*/React.createElement("th", null, "Doanh thu"), /*#__PURE__*/React.createElement("th", null, "Tr\u1EA1ng th\xE1i"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90,
      textAlign: "right"
    }
  }, "Thao t\xE1c"))), /*#__PURE__*/React.createElement("tbody", null, visible.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.code,
    onClick: () => setSelected(r),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "schk",
    onClick: e => e.stopPropagation()
  })), /*#__PURE__*/React.createElement("td", {
    className: "t-mono"
  }, r.code), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, r.name)), /*#__PURE__*/React.createElement("td", null, r.date), /*#__PURE__*/React.createElement("td", null, r.team), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(AvatarStack, {
    people: [PEOPLE[(r.owner - 1) % 6], PEOPLE[r.owner % 6], PEOPLE[(r.owner + 1) % 6], PEOPLE[(r.owner + 2) % 6]],
    size: 24,
    max: 3
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "sperson"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: PEOPLE[(r.by - 1) % 6].src,
    name: PEOPLE[(r.by - 1) % 6].name,
    size: 24
  }), PEOPLE[(r.by - 1) % 6].name)), /*#__PURE__*/React.createElement("td", {
    className: "t-mono"
  }, r.amount), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Status, {
    tone: r.tone
  }, r.status)), /*#__PURE__*/React.createElement("td", {
    onClick: e => e.stopPropagation(),
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "srowact"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "pencil-simple",
    title: "S\u1EEDa",
    variant: "outline"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "dots-three-vertical",
    title: "Kh\xE1c",
    variant: "outline"
  }))))), visible.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 10
  }, /*#__PURE__*/React.createElement(EmptyState, {
    illustration: "../../assets/modules/customer.png",
    title: "Kh\xF4ng c\xF3 kh\xE1ch h\xE0ng kh\u1EDBp b\u1ED9 l\u1ECDc",
    subtitle: "Th\u1EED x\xF3a t\u1EEB kh\xF3a ho\u1EB7c \u0111\u1ED5i b\u1ED9 l\u1ECDc tr\u1EA1ng th\xE1i.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => {
        setQuery("");
        setFilter("all");
      }
    }, "X\xF3a b\u1ED9 l\u1ECDc")
  }))) : null)), /*#__PURE__*/React.createElement("footer", {
    className: "spager"
  }, /*#__PURE__*/React.createElement("div", null, "1 \u2013 ", visible.length, " of ", rows.length, " items"), /*#__PURE__*/React.createElement("div", {
    className: "spager__nums"
  }, /*#__PURE__*/React.createElement("button", {
    className: "spager__arrow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-left"
  })), /*#__PURE__*/React.createElement("span", {
    className: "spager__num is-active"
  }, "1"), /*#__PURE__*/React.createElement("span", {
    className: "spager__num"
  }, "2"), /*#__PURE__*/React.createElement("span", {
    className: "spager__num"
  }, "3"), /*#__PURE__*/React.createElement("span", {
    className: "spager__num spager__dots"
  }, "\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "spager__num"
  }, "12"), /*#__PURE__*/React.createElement("button", {
    className: "spager__arrow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right"
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconRight: "caret-down"
  }, "10 / trang"))), /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: () => setOpen(false),
    title: "T\u1EA1o kh\xE1ch h\xE0ng m\u1EDBi",
    width: 560,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setOpen(false)
    }, "H\u1EE7y"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "plus",
      onClick: submit
    }, "Th\xEAm"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "sform"
  }, /*#__PURE__*/React.createElement(LabeledField, {
    label: "T\xEAn kh\xE1ch h\xE0ng",
    required: true
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "user",
    placeholder: "VD: C\xF4ng ty CP Sao Mai",
    value: form.name,
    onChange: v => setForm({
      ...form,
      name: v
    }),
    width: "100%"
  })), /*#__PURE__*/React.createElement(LabeledField, {
    label: "Ph\xF2ng ban",
    required: true
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "users-three",
    placeholder: "Kinh doanh 1",
    value: form.team,
    onChange: v => setForm({
      ...form,
      team: v
    }),
    iconRight: "caret-down",
    width: "100%"
  })), /*#__PURE__*/React.createElement(LabeledField, {
    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "phone",
    placeholder: "0987 123 456",
    value: form.phone,
    onChange: v => setForm({
      ...form,
      phone: v
    }),
    width: "100%"
  })), /*#__PURE__*/React.createElement(LabeledField, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "envelope",
    placeholder: "ten@congty.vn",
    value: form.email,
    onChange: v => setForm({
      ...form,
      email: v
    }),
    width: "100%"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sform__hint"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-info"
  }), " Kh\xE1ch h\xE0ng \u0111\u01B0\u1EE3c t\u1EA1o s\u1EBD \u1EDF tr\u1EA1ng th\xE1i ", /*#__PURE__*/React.createElement("b", null, "M\u1EDBi"), " v\xE0 g\xE1n cho b\u1EA1n."))), selected ? /*#__PURE__*/React.createElement("aside", {
    className: "sdrawer",
    onClick: () => setSelected(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "sdrawer__panel",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("header", {
    className: "sdrawer__h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-small t-secondary"
  }, selected.code), /*#__PURE__*/React.createElement("div", {
    className: "sdrawer__title"
  }, selected.name)), /*#__PURE__*/React.createElement("div", {
    className: "sdrawer__hctrl"
  }, /*#__PURE__*/React.createElement(Status, {
    tone: selected.tone
  }, selected.status), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    variant: "ghost",
    onClick: () => setSelected(null)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sdrawer__tabs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "is-active"
  }, "T\u1ED5ng quan"), /*#__PURE__*/React.createElement("span", null, "\u0110\u01A1n h\xE0ng"), /*#__PURE__*/React.createElement("span", null, "Li\xEAn h\u1EC7"), /*#__PURE__*/React.createElement("span", null, "Ghi ch\xFA"), /*#__PURE__*/React.createElement("span", null, "L\u1ECBch s\u1EED")), /*#__PURE__*/React.createElement("div", {
    className: "sdrawer__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel__title"
  }, "Th\xF4ng tin chung"), /*#__PURE__*/React.createElement("dl", {
    className: "skv"
  }, /*#__PURE__*/React.createElement("dt", null, "Ph\xF2ng ban"), /*#__PURE__*/React.createElement("dd", null, selected.team), /*#__PURE__*/React.createElement("dt", null, "Ng\xE0y t\u1EA1o"), /*#__PURE__*/React.createElement("dd", null, selected.date, " \xB7 Th\u1EE9 Hai"), /*#__PURE__*/React.createElement("dt", null, "Ph\u1EE5 tr\xE1ch"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(AvatarStack, {
    people: PEOPLE.slice(0, 4),
    size: 24,
    max: 3
  })), /*#__PURE__*/React.createElement("dt", null, "Ng\u01B0\u1EDDi t\u1EA1o"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("span", {
    className: "sperson"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: PEOPLE[(selected.by - 1) % 6].src,
    name: "",
    size: 24
  }), PEOPLE[(selected.by - 1) % 6].name)), /*#__PURE__*/React.createElement("dt", null, "Doanh thu 30 ng\xE0y"), /*#__PURE__*/React.createElement("dd", {
    className: "t-mono"
  }, selected.amount))), /*#__PURE__*/React.createElement("div", {
    className: "card panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel__title"
  }, "\u0110\u01A1n h\xE0ng g\u1EA7n \u0111\xE2y"), /*#__PURE__*/React.createElement("ul", {
    className: "sord"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "sord__c"
  }, "\u0110H-08231"), /*#__PURE__*/React.createElement("span", null, "Ng\xE0y 06/04"), /*#__PURE__*/React.createElement(Status, {
    tone: "green"
  }, "\u0110\xE3 giao"), /*#__PURE__*/React.createElement("span", {
    className: "t-mono"
  }, "1.250.000 \u0111")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "sord__c"
  }, "\u0110H-08120"), /*#__PURE__*/React.createElement("span", null, "Ng\xE0y 28/03"), /*#__PURE__*/React.createElement(Status, {
    tone: "cyan"
  }, "\u0110ang giao"), /*#__PURE__*/React.createElement("span", {
    className: "t-mono"
  }, "682.000 \u0111")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "sord__c"
  }, "\u0110H-08017"), /*#__PURE__*/React.createElement("span", null, "Ng\xE0y 17/03"), /*#__PURE__*/React.createElement(Status, {
    tone: "green"
  }, "\u0110\xE3 giao"), /*#__PURE__*/React.createElement("span", {
    className: "t-mono"
  }, "3.420.000 \u0111"))))))) : null);
}
Object.assign(window, {
  Customers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Customers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Dashboard.jsx
try { (() => {
// Dashboard.jsx — module landing for the "Tổng quan" view
const {
  useMemo: useMemoD
} = React;
function StatCard({
  icon,
  label,
  value,
  delta,
  tone = "green"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sstat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sstat__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sstat__icon",
    style: {
      background: "var(--surface-pink)",
      color: "var(--brand-pink)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "sstat__delta",
    style: {
      color: tone === "green" ? "var(--color-green)" : "var(--color-red)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + (tone === "green" ? "trend-up" : "trend-down")
  }), delta)), /*#__PURE__*/React.createElement("div", {
    className: "sstat__value"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "sstat__label"
  }, label));
}
function MiniBar({
  data
}) {
  const max = Math.max(...data);
  return /*#__PURE__*/React.createElement("div", {
    className: "sbars"
  }, data.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sbars__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbars__bar",
    style: {
      height: `${v / max * 100}%`
    }
  }))));
}
function Dashboard() {
  const recent = [{
    who: {
      name: "Nguyễn Văn An",
      src: "../../assets/avatars/avatar-04.jpg"
    },
    action: "đã tạo khách hàng mới",
    tgt: "Công ty Hồng Hà",
    when: "5 phút trước"
  }, {
    who: {
      name: "Phạm Thị Bình",
      src: "../../assets/avatars/avatar-02.jpg"
    },
    action: "cập nhật đơn hàng",
    tgt: "#ĐH-08231",
    when: "12 phút trước"
  }, {
    who: {
      name: "Trần Văn Cường",
      src: "../../assets/avatars/avatar-03.jpg"
    },
    action: "đóng phiếu xuất kho",
    tgt: "Kho Hà Nội · #X-2104",
    when: "1 giờ trước"
  }, {
    who: {
      name: "Lê Thị Dung",
      src: "../../assets/avatars/avatar-01.jpg"
    },
    action: "thêm 4 nhân viên vào phòng ban",
    tgt: "Kinh doanh 1",
    when: "2 giờ trước"
  }, {
    who: {
      name: "Phạm Văn Bình",
      src: "../../assets/avatars/avatar-05.jpg"
    },
    action: "duyệt báo giá",
    tgt: "BG-00417",
    when: "Hôm qua, 17:42"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "sdash"
  }, /*#__PURE__*/React.createElement("section", {
    className: "sstats"
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "users-three",
    label: "Kh\xE1ch h\xE0ng m\u1EDBi (30 ng\xE0y)",
    value: "248",
    delta: "+12,5%",
    tone: "green"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "shopping-bag",
    label: "\u0110\u01A1n h\xE0ng th\xE1ng n\xE0y",
    value: "1.524",
    delta: "+4,2%",
    tone: "green"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "currency-circle-dollar",
    label: "Doanh thu th\xE1ng (VN\u0110)",
    value: "2,18 t\u1EF7",
    delta: "\u22121,8%",
    tone: "red"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "package",
    label: "T\u1ED3n kho (SKU)",
    value: "3.412",
    delta: "+18",
    tone: "green"
  })), /*#__PURE__*/React.createElement("section", {
    className: "scards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card panel"
  }, /*#__PURE__*/React.createElement("header", {
    className: "panel__h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "panel__title"
  }, "Doanh thu 7 ng\xE0y"), /*#__PURE__*/React.createElement("div", {
    className: "panel__sub"
  }, "T\u1ED5ng: 412,5 tri\u1EC7u VN\u0110")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "caret-down"
  }, "7 ng\xE0y")), /*#__PURE__*/React.createElement(MiniBar, {
    data: [42, 58, 61, 73, 49, 65, 84]
  }), /*#__PURE__*/React.createElement("div", {
    className: "sbars__labels"
  }, /*#__PURE__*/React.createElement("span", null, "T2"), /*#__PURE__*/React.createElement("span", null, "T3"), /*#__PURE__*/React.createElement("span", null, "T4"), /*#__PURE__*/React.createElement("span", null, "T5"), /*#__PURE__*/React.createElement("span", null, "T6"), /*#__PURE__*/React.createElement("span", null, "T7"), /*#__PURE__*/React.createElement("span", null, "CN"))), /*#__PURE__*/React.createElement("div", {
    className: "card panel"
  }, /*#__PURE__*/React.createElement("header", {
    className: "panel__h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "panel__title"
  }, "Top ph\xF2ng ban"), /*#__PURE__*/React.createElement("div", {
    className: "panel__sub"
  }, "Theo doanh s\u1ED1 th\xE1ng n\xE0y")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "caret-down"
  }, "Th\xE1ng n\xE0y")), /*#__PURE__*/React.createElement("ul", {
    className: "srank"
  }, [{
    n: "Kinh doanh 1",
    v: "612 triệu",
    pct: 100
  }, {
    n: "Kinh doanh 2",
    v: "498 triệu",
    pct: 81
  }, {
    n: "Bán lẻ",
    v: "342 triệu",
    pct: 56
  }, {
    n: "Telesale",
    v: "218 triệu",
    pct: 36
  }, {
    n: "Đại lý",
    v: " 92 triệu",
    pct: 15
  }].map(r => /*#__PURE__*/React.createElement("li", {
    key: r.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "srank__n"
  }, r.n), /*#__PURE__*/React.createElement("span", {
    className: "srank__bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: r.pct + "%"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "srank__v"
  }, r.v)))))), /*#__PURE__*/React.createElement("section", {
    className: "scards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card panel",
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "panel__h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "panel__title"
  }, "Ho\u1EA1t \u0111\u1ED9ng g\u1EA7n \u0111\xE2y"), /*#__PURE__*/React.createElement("div", {
    className: "panel__sub"
  }, "5 m\u1EE5c m\u1EDBi nh\u1EA5t")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconRight: "caret-right"
  }, "Xem t\u1EA5t c\u1EA3")), /*#__PURE__*/React.createElement("ul", {
    className: "sfeed"
  }, recent.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: r.who.src,
    name: r.who.name,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    className: "sfeed__txt"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, r.who.name), " ", r.action, " ", /*#__PURE__*/React.createElement("b", null, r.tgt)), /*#__PURE__*/React.createElement("div", {
    className: "sfeed__when"
  }, r.when))))))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Marketing.jsx
try { (() => {
// Marketing.jsx — Danh sách contact screen (mirrors live product)
const {
  useState: useStateM
} = React;
const SALES = [{
  code: "Cskh01",
  name: "Quốc Thiện",
  src: "../../assets/avatars/avatar-04.jpg"
}, {
  code: "Sale17",
  name: "Hiếu Phạm",
  src: "../../assets/avatars/avatar-01.jpg"
}, {
  code: "Sale19",
  name: "Thanh Liêm",
  src: "../../assets/avatars/avatar-03.jpg"
}, {
  code: "Sale14",
  name: "Xuân Mai",
  src: "../../assets/avatars/avatar-02.jpg"
}, {
  code: "Sale04",
  name: "Anh Thư",
  src: "../../assets/avatars/avatar-05.jpg"
}, {
  code: "Sale15",
  name: "Vân Anh",
  src: "../../assets/avatars/avatar-06.jpg"
}];
const sale = i => `${SALES[i].name} (${SALES[i].code})`;
const SEED = [{
  stt: 1,
  name: "Phạm Hải Yến",
  phone: "0987 654 321",
  carrier: "VIETTEL",
  msg: "Địa chỉ skyland, trung hòa c…",
  order: "A00003856287…",
  dup: true,
  loyal: true,
  sale: 0,
  tag: {
    t: "Lead mới",
    tone: "pink"
  },
  internal: "Kiểm tra lại số này đan…",
  track: "MVD323112",
  product: "Smart TV Google TV - T…"
}, {
  stt: 2,
  name: "Nguyễn Thị Mai Lan",
  phone: "0345 678 901",
  carrier: "MOBIPHONE",
  msg: "",
  order: "A00003434341…",
  dup: false,
  loyal: false,
  sale: 1,
  tag: {
    t: "Tiềm năng",
    tone: "cyan"
  },
  internal: "",
  track: "MVD724234",
  product: "Apple Iphone 14 - 128G…"
}, {
  stt: 3,
  name: "Trần Văn Minh",
  phone: "0765 432 109",
  carrier: "VINAPHONE",
  msg: "Cần giao nhanh",
  order: "A00006624342…",
  dup: true,
  loyal: false,
  sale: 2,
  tag: {
    t: "Gọi lần 1",
    tone: "blear"
  },
  internal: "",
  track: "MVD727344",
  product: "Samsung Galaxy S23 Ul…"
}, {
  stt: 4,
  name: "Phạm Đức Anh",
  phone: "0210 987 654",
  carrier: "VIETTEL",
  msg: "",
  order: "A0000772245",
  dup: false,
  loyal: true,
  sale: 3,
  tag: {
    t: "Hướng dẫn…",
    tone: "lilac"
  },
  internal: "Khách hàng khó tính",
  track: "MVD722246",
  product: "OPPO Reno10 5G - 256…"
}, {
  stt: 5,
  name: "Hoàng Ngọc Bảo C…",
  phone: "0890 123 456",
  carrier: "VINAPHONE",
  msg: "Giao hành chính",
  order: "A00003856287…",
  dup: false,
  loyal: true,
  sale: 4,
  tag: {
    t: "Gọi lần 2",
    tone: "pinkbg"
  },
  internal: "",
  track: "MVD935454",
  product: "Vivo V29e - 128GB - Mà…"
}, {
  stt: 6,
  name: "Đặng Trung Kiên",
  phone: "0567 890 123",
  carrier: "VIETTEL",
  msg: "",
  order: "A00002624523…",
  dup: true,
  loyal: false,
  sale: 5,
  tag: {
    t: "Lead mới",
    tone: "pink"
  },
  internal: "Check lại",
  track: "MVD1112345",
  product: "Google Pixel 8 Pro - 25…"
}, {
  stt: 7,
  name: "Vũ Thị Thanh Hương",
  phone: "0699 455 125",
  carrier: "MOBIPHONE",
  msg: "",
  order: "A00008353445…",
  dup: false,
  loyal: true,
  sale: 4,
  tag: {
    t: "Upslale lần 1",
    tone: "yellow"
  },
  internal: "",
  track: "MVD223423",
  product: "Sony Xperia 1 V - 256G…"
}, {
  stt: 8,
  name: "Bùi Minh Tuấn",
  phone: "0989 568 642",
  carrier: "VIETTEL",
  msg: "Địa chỉ skyland, trung hòa c…",
  order: "A00003856287…",
  dup: false,
  loyal: true,
  sale: 0,
  tag: {
    t: "Lead mới",
    tone: "pink"
  },
  internal: "",
  track: "MVD323112",
  product: "Smart TV Google TV - T…"
}];
function CarrierLabel({
  name
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "scarrier"
  }, name);
}
function PhoneCell({
  phone,
  carrier
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sphone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sphone__num"
  }, phone), /*#__PURE__*/React.createElement(CarrierLabel, {
    name: carrier
  }));
}
function CommIcons() {
  // The little row of pink-outlined comm-channel icons next to the phone number.
  return /*#__PURE__*/React.createElement("span", {
    className: "scomm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scomm__btn",
    title: "G\u1ECDi/ghi \xE2m"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-microphone"
  })), /*#__PURE__*/React.createElement("span", {
    className: "scomm__btn",
    title: "Ghi ch\xFA"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-note"
  })), /*#__PURE__*/React.createElement("span", {
    className: "scomm__zalo",
    title: "Zalo"
  }, "Zalo"), /*#__PURE__*/React.createElement("span", {
    className: "scomm__zalo scomm__zalo--oa",
    title: "Zalo OA"
  }, "Zalo", /*#__PURE__*/React.createElement("sup", null, "OA")));
}
function OrderCell({
  code
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "sorder"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-square"
  }), /*#__PURE__*/React.createElement("span", null, code));
}
function InternalMsgCell({
  text
}) {
  if (!text) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: "sinmsg"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-chat-circle"
  }), /*#__PURE__*/React.createElement("span", null, text));
}
function Marketing() {
  const [rows] = useStateM(SEED);
  const [subtab, setSubtab] = useStateM("contacts");
  const [viewMode, setViewMode] = useStateM("v1");
  const TABS = [{
    id: "contacts",
    label: "Danh sách contact",
    icon: "list"
  }, {
    id: "src",
    label: "Báo cáo lead theo nguồn",
    icon: "chart-bar"
  }, {
    id: "hr",
    label: "Báo cáo lead theo nhân sự",
    icon: "chart-bar"
  }, {
    id: "saleby",
    label: "Báo cáo marketing theo sale",
    icon: "chart-bar"
  }, {
    id: "prod",
    label: "Báo cáo lead theo sản phẩm",
    icon: "chart-bar"
  }, {
    id: "config",
    label: "Cấu hình marketing nhập data",
    icon: "gear"
  }, {
    id: "seeding",
    label: "Dach sách số seeding",
    icon: "list-bullets"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "smkt"
  }, /*#__PURE__*/React.createElement(SubTabs, {
    tabs: TABS,
    active: subtab,
    onSelect: setSubtab
  }), /*#__PURE__*/React.createElement("div", {
    className: "card spagecard"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "spagecard__t"
  }, "Danh s\xE1ch contact"), /*#__PURE__*/React.createElement("div", {
    className: "spagecard__r"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sdrop"
  }, /*#__PURE__*/React.createElement("span", null, "Chu\u1EA9n sandboxvn"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("span", {
    className: "sdate"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-calendar"
  }), "01/03/2025 - 01/03/2025"), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--primary sbtn--icon",
    title: "L\u01B0u"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-floppy-disk"
  })), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--primary"
  }, /*#__PURE__*/React.createElement("span", null, "B\u1ED9 l\u1ECDc"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--primary"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass"
  }), /*#__PURE__*/React.createElement("span", null, "T\xECm ki\u1EBFm")))), /*#__PURE__*/React.createElement("div", {
    className: "sviewbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sviewbar__l"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sviewtab " + (viewMode === "v1" ? "is-active" : ""),
    onClick: () => setViewMode("v1")
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-list"
  }), "Xem ki\u1EC3u 1"), /*#__PURE__*/React.createElement("button", {
    className: "sviewtab " + (viewMode === "v2" ? "is-active" : ""),
    onClick: () => setViewMode("v2")
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-rows"
  }), "Xem ki\u1EC3u 2"), /*#__PURE__*/React.createElement("button", {
    className: "sviewtab sviewtab--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-pencil-simple"
  }), "Nh\u1EADp th\u1EE7 c\xF4ng"), /*#__PURE__*/React.createElement("button", {
    className: "sviewtab sviewtab--icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-dots-three-vertical"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "sviewtab sviewtab--icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-gear"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card stable-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "stable stable--mkt"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "schk"
  })), /*#__PURE__*/React.createElement("th", null, "STT"), /*#__PURE__*/React.createElement("th", null, "Kh\xE1ch h\xE0ng"), /*#__PURE__*/React.createElement("th", null, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"), /*#__PURE__*/React.createElement("th", null, "Tin nh\u1EAFn kh\xE1ch h\xE0ng"), /*#__PURE__*/React.createElement("th", null, "M\xE3 \u0111\u01A1n h\xE0ng"), /*#__PURE__*/React.createElement("th", null, "Tr\xF9ng s\u1ED1"), /*#__PURE__*/React.createElement("th", null, "Kh\xE1ch c\u0169"), /*#__PURE__*/React.createElement("th", null, "Sale"), /*#__PURE__*/React.createElement("th", null, "T\xE1c nghi\u1EC7p c\u1EA7n"), /*#__PURE__*/React.createElement("th", null, "Tin nh\u1EAFn n\u1ED9i b\u1ED9"), /*#__PURE__*/React.createElement("th", null, "M\xE3 v\u1EADn \u0111\u01A1n"), /*#__PURE__*/React.createElement("th", null, "S\u1EA3n ph\u1EA9m"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 76,
      textAlign: "left"
    }
  }, "Thao t\xE1c"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.stt
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "schk"
  })), /*#__PURE__*/React.createElement("td", null, r.stt), /*#__PURE__*/React.createElement("td", null, r.name), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "sphone-wrap"
  }, /*#__PURE__*/React.createElement(PhoneCell, {
    phone: r.phone,
    carrier: r.carrier
  }), /*#__PURE__*/React.createElement(CommIcons, null))), /*#__PURE__*/React.createElement("td", null, r.msg ? /*#__PURE__*/React.createElement(OrderCell, {
    code: r.msg
  }) : null), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(OrderCell, {
    code: r.order
  })), /*#__PURE__*/React.createElement("td", null, r.dup ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-users dup-ico",
    title: "Tr\xF9ng s\u1ED1"
  }) : null), /*#__PURE__*/React.createElement("td", null, r.loyal ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-heart-fill loyal-ico",
    title: "Kh\xE1ch c\u0169"
  }) : null), /*#__PURE__*/React.createElement("td", null, sale(r.sale)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "mtag mtag--" + r.tag.tone
  }, r.tag.t)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(InternalMsgCell, {
    text: r.internal
  })), /*#__PURE__*/React.createElement("td", null, r.track), /*#__PURE__*/React.createElement("td", null, r.product), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "srowact"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline sbtn--icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-pencil-simple"
  })), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline sbtn--icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  }))))))))), /*#__PURE__*/React.createElement("footer", {
    className: "spager spager--right"
  }, /*#__PURE__*/React.createElement("div", null, "1 - 10 of 250 items"), /*#__PURE__*/React.createElement("div", {
    className: "spager__nums"
  }, /*#__PURE__*/React.createElement("button", {
    className: "spager__arrow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-left"
  })), /*#__PURE__*/React.createElement("span", {
    className: "spager__num is-active"
  }, "1"), /*#__PURE__*/React.createElement("span", {
    className: "spager__num"
  }, "2"), /*#__PURE__*/React.createElement("span", {
    className: "spager__num"
  }, "3"), /*#__PURE__*/React.createElement("span", {
    className: "spager__num"
  }, "4"), /*#__PURE__*/React.createElement("span", {
    className: "spager__num"
  }, "5"), /*#__PURE__*/React.createElement("span", {
    className: "spager__num spager__dots"
  }, "\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "spager__num"
  }, "12"), /*#__PURE__*/React.createElement("button", {
    className: "spager__arrow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "sbtn sbtn--outline"
  }, "10 / trang ", /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  }))));
}
Object.assign(window, {
  Marketing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Marketing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Shell.jsx
try { (() => {
// Shell.jsx — Sidebar (108 px) + TopNav (50 px) — matched to live product

const MODULES = [{
  id: "marketing",
  label: "Marketing",
  icon: "../../assets/modules/marketing.png"
}, {
  id: "sales",
  label: "Sales",
  icon: "../../assets/modules/sales.png"
}, {
  id: "storage",
  label: "Kho vận",
  icon: "../../assets/modules/storage.png"
}, {
  id: "buy",
  label: "Mua hàng",
  icon: "../../assets/modules/buy.png"
}, {
  id: "account",
  label: "Kế toán",
  icon: "../../assets/modules/account.png"
}, {
  id: "cash",
  label: "Cửa hàng",
  icon: "../../assets/modules/cash.png"
}, {
  id: "job",
  label: "Công việc",
  icon: "../../assets/modules/job.png"
}, {
  id: "customer",
  label: "Khách hàng",
  icon: "../../assets/modules/customer.png"
}, {
  id: "employee",
  label: "Nhân sự",
  icon: "../../assets/modules/employee.png"
}, {
  id: "production",
  label: "Sản xuất",
  icon: "../../assets/modules/utilities.png"
}, {
  id: "report",
  label: "Báo cáo",
  icon: "../../assets/modules/report.png"
}];
function Sidebar({
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "ssidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ssidebar__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-primary.png",
    alt: "SandBox"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "ssidebar__nav"
  }, MODULES.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    type: "button",
    className: "smod " + (m.id === active ? "smod--active" : ""),
    onClick: () => onSelect(m.id),
    title: m.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "smod__sticker"
  }), /*#__PURE__*/React.createElement("img", {
    src: m.icon,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "smod__label"
  }, m.label)))));
}
function TopNav() {
  return /*#__PURE__*/React.createElement("header", {
    className: "stopnav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "stopnav__hamb",
    title: "Menu"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-list"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__item stopnav__item--notif"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stopnav__bell"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-bell"
  }), /*#__PURE__*/React.createElement("span", {
    className: "badge-count"
  }, "4")), "Th\xF4ng b\xE1o h\u1EC7 th\u1ED1ng"), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__item"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-globe"
  }), "Website \u0111\u1EB7t ch\u1ED7"), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__item stopnav__item--brand"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-storefront"
  }), "Chi nh\xE1nh C\u1EA7u Gi\u1EA5y", /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__icons"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stopnav__icobtn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-bell"
  }), /*#__PURE__*/React.createElement("span", {
    className: "badge-count"
  }, "4")), /*#__PURE__*/React.createElement("span", {
    className: "stopnav__icobtn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-rocket-launch"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__profile"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/avatars/avatar-04.jpg",
    name: "Nguy\u1EC5n V\u0103n An",
    size: 36
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stopnav__profile-n"
  }, "Nguy\u1EC5n V\u0103n An"), /*#__PURE__*/React.createElement("div", {
    className: "stopnav__profile-r"
  }, "Admin \u0111\u01A1n v\u1ECB"))));
}

// Sub-tab bar — the pink pill that sits just below the topnav in Marketing
function SubTabs({
  tabs,
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "ssubtabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: "ssubtab " + (t.id === active ? "is-active" : ""),
    onClick: () => onSelect && onSelect(t.id)
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-" + t.icon
  }), t.label)));
}
Object.assign(window, {
  Sidebar,
  TopNav,
  SubTabs,
  MODULES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/app.jsx
try { (() => {
// app.jsx — top-level: chooses which module screen to render

function ModulePlaceholder({
  module
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "splaceholder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sphead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "sphead__t"
  }, module.label), /*#__PURE__*/React.createElement("div", {
    className: "sphead__crumbs"
  }, /*#__PURE__*/React.createElement("span", null, "T\u1ED5ng quan"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right"
  }), /*#__PURE__*/React.createElement("b", null, module.label)))), /*#__PURE__*/React.createElement("div", {
    className: "card panel"
  }, /*#__PURE__*/React.createElement(EmptyState, {
    illustration: module.icon,
    title: `Module ${module.label}`,
    subtitle: "Ph\u1EA7n n\xE0y ch\u01B0a c\xF3 trong UI kit demo. M\u1EDF Marketing \u0111\u1EC3 xem flow t\u01B0\u01A1ng t\xE1c \u0111\u1EA7y \u0111\u1EE7 kh\u1EDBp v\u1EDBi production."
  })));
}
function App() {
  const [active, setActive] = React.useState("marketing");
  const module = MODULES.find(m => m.id === active);
  let screen;
  if (active === "marketing") screen = /*#__PURE__*/React.createElement(Marketing, null);else if (active === "customer") screen = /*#__PURE__*/React.createElement(Customers, null);else if (active === "dashboard") screen = /*#__PURE__*/React.createElement(Dashboard, null);else screen = /*#__PURE__*/React.createElement(ModulePlaceholder, {
    module: module
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "sshell"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onSelect: setActive
  }), /*#__PURE__*/React.createElement("div", {
    className: "sshell__main"
  }, /*#__PURE__*/React.createElement(TopNav, null), /*#__PURE__*/React.createElement("main", {
    className: "sshell__work"
  }, screen)));
}
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/app.jsx", error: String((e && e.message) || e) }); }

})();
