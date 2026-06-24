// PromotionForm.jsx — the full Add/Edit Promotion page

const { useState: useStatePF, useMemo: useMemoPF } = React;

// ─── Field/operator metadata ───────────────────────────────────
const FIELD_OPTIONS = [
  { value: "sku", label: "Mã SKU" },
  { value: "category", label: "Danh mục" },
  { value: "brand", label: "Thương hiệu" },
  { value: "cart_total", label: "Tổng giỏ hàng (1 đơn)" },
  { value: "cumulative_spend", label: "Chi tiêu tích lũy (nhiều đơn)" },
  { value: "order_count", label: "Số đơn đã mua" },
  { value: "item_qty", label: "Số lượng sản phẩm" },
  { value: "segment", label: "Nhóm khách hàng" },
  { value: "channel", label: "Kênh bán" },
];

// Time-windows for cumulative metrics
const PERIOD_OPTIONS = [
  { value: "lifetime",  label: "Toàn bộ thời gian" },
  { value: "30d",       label: "30 ngày qua" },
  { value: "90d",       label: "90 ngày qua" },
  { value: "365d",      label: "365 ngày qua" },
  { value: "ytd",       label: "Từ đầu năm đến nay" },
  { value: "campaign",  label: "Trong thời gian chiến dịch" },
];
const PERIOD_LABELS = Object.fromEntries(PERIOD_OPTIONS.map((p) => [p.value, p.label]));
const OP_OPTIONS = [
  { value: "is", label: "là" },
  { value: "is_not", label: "không phải" },
  { value: "contains", label: "chứa" },
  { value: "gte", label: "≥" },
  { value: "lte", label: "≤" },
  { value: "in_list", label: "thuộc danh sách" },
];

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
  channel: ["is", "is_not", "in_list"],
};
function opsFor(field) {
  const allowed = OPS_BY_FIELD[field] || OP_OPTIONS.map((o) => o.value);
  return OP_OPTIONS.filter((o) => allowed.includes(o.value));
}

// placeholder per field
function placeholderFor(field) {
  switch (field) {
    case "sku": return "SKU01234";
    case "category": return "Áo thun";
    case "brand": return "Coolmate";
    case "cart_total": return "500.000";
    case "cumulative_spend": return "10.000.000";
    case "order_count": return "5";
    case "item_qty": return "3";
    case "segment": return "Khách VIP";
    case "channel": return "Cửa hàng / Online";
    default: return "Giá trị";
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
  conditions: [
    { field: "cumulative_spend", op: "gte", value: "10000000", period: "90d" },
  ],
  conditionJoin: "AND",
  // Benefit
  scopeType: "new_item",
  scopeSort: "as_added",
  scopeReuse: false,
  // Reward
  rewardType: "free_item",
  rewardValue: "",
  rewardCap: "",
  rewardItems: [
    { id: "p21", sku: "GF-BT-01", name: "Bộ ấm trà gốm sứ Bát Tràng", category: "Quà tặng", brand: "Sandbox", price: 290000, stock: 48, color: "#a8b8c8" },
  ],
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
  priority: 10,
};

// ────────────────────────────────────────────────────────────
//  Section 1 — Basic info
// ────────────────────────────────────────────────────────────
function Sec1Basic({ s, set }) {
  const t = detectType(s);
  return (
    <PFSection
      num="1"
      title="Thông tin chung"
      sub="Tên, mô tả và trạng thái của khuyến mãi."
      right={
        <span className="pf-pill pf-pill--brand">
          <i className="ph ph-sparkle" />
          Loại tự động: {t.label}
        </span>
      }
    >
      <div className="pf-row--name-type">
        <PFRow label="Tên khuyến mãi" required>
          <PFInput
            value={s.name}
            onChange={(v) => set({ name: v })}
            placeholder="VD: Mua 3 áo thun – tặng áo rẻ nhất"
          />
        </PFRow>
        <PFRow label="Trạng thái">
          <PFSegmented
            value={s.status}
            onChange={(v) => set({ status: v })}
            options={[
              { value: "draft", label: "Nháp", icon: "pencil-simple" },
              { value: "active", label: "Đang chạy", icon: "broadcast" },
            ]}
            brand
          />
        </PFRow>
      </div>

      <PFRow label="Mô tả" hint={<><i className="ph ph-info" />Mô tả hiển thị cho nhân viên thu ngân khi áp dụng tại quầy.</>}>
        <PFTextarea
          value={s.description}
          onChange={(v) => set({ description: v })}
          placeholder="Mô tả ngắn gọn nội dung và mục đích khuyến mãi."
          rows={3}
        />
      </PFRow>

      <PFRow label="Thẻ" hint="Nhấn Enter để thêm thẻ. Dùng để phân loại và lọc trong báo cáo.">
        <PFChipsInput
          chips={s.tags}
          onAdd={(c) => set({ tags: [...s.tags, c] })}
          onRemove={(i) => set({ tags: s.tags.filter((_, j) => j !== i) })}
          placeholder="hè 2026, flash sale, vip..."
        />
      </PFRow>
    </PFSection>
  );
}

// ────────────────────────────────────────────────────────────
//  Section 2 — Trigger conditions
// ────────────────────────────────────────────────────────────
function ConditionRow({ cond, onChange, onRemove }) {
  const ops = opsFor(cond.field);
  const showPeriod = isCumulative(cond.field);
  const isProductField = cond.field === "sku";
  const expanded = showPeriod || isProductField;
  return (
    <div className={"pf-cond-row" + (expanded ? " pf-cond-row--multi" : "")}>
      <div className="pf-cond-row__main">
        <PFSelect
          value={cond.field}
          onChange={(v) => {
            const next = { ...cond, field: v, op: opsFor(v)[0]?.value || cond.op };
            if (isCumulative(v) && !next.period) next.period = "90d";
            if (v === "sku" && !next.products) next.products = [];
            onChange(next);
          }}
          options={FIELD_OPTIONS}
        />
        <PFSelect
          value={cond.op}
          onChange={(v) => onChange({ ...cond, op: v })}
          options={ops}
        />
        {isProductField ? (
          <div className="pf-cond-row__pp">
            <span className="pf-cond-row__pp-summary">
              {cond.products && cond.products.length
                ? `${cond.products.length} sản phẩm đã chọn`
                : "Chưa chọn sản phẩm — chọn ở khu vực bên dưới"}
            </span>
          </div>
        ) : (
          <PFInput
            value={cond.value}
            onChange={(v) => onChange({ ...cond, value: v })}
            placeholder={placeholderFor(cond.field)}
            suffix={suffixFor(cond.field)}
          />
        )}
        <button type="button" className="pf-cond-row__rm" onClick={onRemove} title="Xóa điều kiện">
          <i className="ph ph-trash" />
        </button>
      </div>
      {isProductField ? (
        <div className="pf-cond-row__extra pf-cond-row__extra--picker">
          <ProductPicker
            selected={cond.products || []}
            onChange={(next) => onChange({ ...cond, products: next })}
            multi={true}
            placeholder="Tìm sản phẩm theo tên (VD: 'áo thun trắng'), mã SKU hoặc thương hiệu…"
          />
        </div>
      ) : null}
      {showPeriod ? (
        <div className="pf-cond-row__extra">
          <i className="ph ph-arrow-elbow-down-right" />
          <span className="pf-cond-row__extra-lbl">tính trong</span>
          <PFSelect
            value={cond.period || "lifetime"}
            onChange={(v) => onChange({ ...cond, period: v })}
            options={PERIOD_OPTIONS}
            width={240}
          />
          <span className="pf-cond-row__extra-hint">
            <i className="ph ph-info" />
            Cộng dồn tổng chi tiêu của khách hàng từ tất cả đơn trong khoảng này.
          </span>
        </div>
      ) : null}
    </div>
  );
}

function Sec2Trigger({ s, set }) {
  const updateCond = (i, next) => {
    const copy = s.conditions.slice();
    copy[i] = next;
    set({ conditions: copy });
  };
  const removeCond = (i) => {
    set({ conditions: s.conditions.filter((_, j) => j !== i) });
  };
  const addCond = () => {
    set({
      conditions: [
        ...s.conditions,
        { field: "category", op: "contains", value: "" },
      ],
    });
  };

  return (
    <PFSection
      num="2"
      title="Điều kiện kích hoạt"
      sub="Khách phải làm gì để khuyến mãi này được kích hoạt?"
      right={
        s.conditions.length > 1 ? (
          <PFSegmented
            value={s.conditionJoin}
            onChange={(v) => set({ conditionJoin: v })}
            options={[
              { value: "AND", label: "Tất cả (AND)" },
              { value: "OR", label: "Một trong (OR)" },
            ]}
          />
        ) : null
      }
    >
      <div className="pf-cond-list">
        {s.conditions.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 ? (
              <div className="pf-cond-join">
                <span className={"pf-cond-join__lbl " + (s.conditionJoin === "AND" ? "is-and" : "is-or")}>
                  <i className="ph ph-arrow-down" />
                  {s.conditionJoin}
                </span>
              </div>
            ) : null}
            <ConditionRow
              cond={c}
              onChange={(next) => updateCond(i, next)}
              onRemove={() => removeCond(i)}
            />
          </React.Fragment>
        ))}
        {s.conditions.length ? <div style={{ height: 10 }} /> : null}
        <button type="button" className="pf-cond-add" onClick={addCond}>
          <i className="ph ph-plus-circle" />
          Thêm điều kiện
        </button>
      </div>
    </PFSection>
  );
}

// ────────────────────────────────────────────────────────────
//  Section 3 — Benefit scope
// ────────────────────────────────────────────────────────────
const SCOPE_OPTS = [
  { value: "same_as_trigger", label: "Giống điều kiện kích hoạt", sub: "Chính sản phẩm thỏa mãn điều kiện sẽ được giảm.", icon: "arrows-clockwise" },
  { value: "specific_sku", label: "SKU cụ thể", sub: "Chọn một danh sách mã SKU áp dụng.", icon: "barcode" },
  { value: "specific_category", label: "Danh mục cụ thể", sub: "Áp dụng cho mọi sản phẩm trong danh mục.", icon: "folder" },
  { value: "entire_cart", label: "Toàn bộ giỏ hàng", sub: "Giảm trên tổng giá trị cuối cùng.", icon: "shopping-cart" },
  { value: "cheapest", label: "Sản phẩm rẻ nhất", sub: "Sản phẩm rẻ nhất trong đơn được giảm.", icon: "arrow-down" },
  { value: "most_expensive", label: "Sản phẩm đắt nhất", sub: "Sản phẩm đắt nhất trong đơn được giảm.", icon: "arrow-up" },
  { value: "new_item", label: "Sản phẩm tặng kèm", sub: "Một sản phẩm mới thêm vào đơn dưới dạng quà.", icon: "gift" },
];

function Sec3Scope({ s, set }) {
  return (
    <PFSection
      num="3"
      title="Phạm vi ưu đãi"
      sub="Sản phẩm nào trong đơn nhận ưu đãi?"
    >
      <PFRow label="Loại phạm vi">
        <PFRadioCard
          value={s.scopeType}
          onChange={(v) => set({ scopeType: v })}
          options={SCOPE_OPTS}
        />
      </PFRow>

      {s.scopeType === "specific_sku" ? (
        <PFRow
          label="Danh sách sản phẩm áp dụng"
          required
          hint="Ưu đãi chỉ áp lên những sản phẩm được chọn bên dưới. Tìm theo tên, mã SKU hoặc thương hiệu."
        >
          <ProductPicker
            selected={s.scopeProducts || []}
            onChange={(next) => set({ scopeProducts: next })}
            multi={true}
            placeholder="Tìm sản phẩm áp dụng ưu đãi…"
          />
        </PFRow>
      ) : null}

      <div className="pf-row--2">
        <PFRow
          label="Thứ tự áp dụng nếu nhiều sản phẩm thỏa điều kiện"
          hint="Quyết định sản phẩm nào được giảm trước khi giới hạn được áp."
        >
          <PFSelect
            value={s.scopeSort}
            onChange={(v) => set({ scopeSort: v })}
            options={[
              { value: "cheapest", label: "Rẻ nhất trước" },
              { value: "expensive", label: "Đắt nhất trước" },
              { value: "random", label: "Ngẫu nhiên" },
              { value: "as_added", label: "Theo thứ tự thêm vào" },
            ]}
          />
        </PFRow>
        <PFRow label=" ">
          <PFSwitchRow
            on={s.scopeReuse}
            onChange={(v) => set({ scopeReuse: v })}
            title="Sản phẩm kích hoạt cũng được nhận ưu đãi"
            sub="Khi tắt, sản phẩm dùng để mở khóa sẽ không bị tính giảm giá."
          />
        </PFRow>
      </div>
    </PFSection>
  );
}

// ────────────────────────────────────────────────────────────
//  Section 4 — Reward
// ────────────────────────────────────────────────────────────
const REWARD_OPTS = [
  { value: "percent", label: "Giảm theo %", sub: "VD: giảm 20% trên giá sản phẩm.", icon: "percent" },
  { value: "fixed", label: "Giảm số tiền", sub: "VD: giảm 50.000đ trực tiếp.", icon: "currency-circle-dollar" },
  { value: "free_item", label: "Tặng sản phẩm", sub: "Tặng kèm hàng hóa cụ thể.", icon: "gift" },
  { value: "fixed_price", label: "Giá cố định", sub: "Bán sản phẩm ở mức giá định sẵn.", icon: "tag" },
  { value: "free_ship", label: "Miễn phí vận chuyển", sub: "Phí ship = 0.", icon: "truck" },
];

function RewardValueField({ s, set }) {
  switch (s.rewardType) {
    case "percent":
      return (
        <PFRow label="Tỉ lệ giảm" required hint="Phần trăm áp lên giá sản phẩm trong phạm vi ưu đãi.">
          <PFInput
            value={s.rewardValue}
            onChange={(v) => set({ rewardValue: v.replace(/[^\d]/g, "") })}
            placeholder="10"
            suffix="%"
            width={180}
          />
        </PFRow>
      );
    case "fixed":
      return (
        <PFRow label="Số tiền giảm" required>
          <PFInput
            value={s.rewardValue}
            onChange={(v) => set({ rewardValue: v.replace(/[^\d]/g, "") })}
            placeholder="50.000"
            suffix="đ"
            width={220}
          />
        </PFRow>
      );
    case "fixed_price":
      return (
        <PFRow label="Giá cố định" required>
          <PFInput
            value={s.rewardValue}
            onChange={(v) => set({ rewardValue: v.replace(/[^\d]/g, "") })}
            placeholder="99.000"
            suffix="đ"
            width={220}
          />
        </PFRow>
      );
    case "free_ship":
      return (
        <PFRow label="Mức trần phí ship được miễn" hint="Để trống nếu miễn toàn bộ.">
          <PFInput
            value={s.rewardValue}
            onChange={(v) => set({ rewardValue: v.replace(/[^\d]/g, "") })}
            placeholder="40.000"
            suffix="đ"
            width={220}
          />
        </PFRow>
      );
    case "free_item":
      return (
        <PFRow
          label="Sản phẩm tặng kèm"
          required
          hint={s.rewardLetCustomerChoose
            ? "Khách sẽ chọn số lượng đã cấu hình từ danh sách dưới đây."
            : "Khách sẽ được tặng toàn bộ các sản phẩm trong danh sách này."
          }
        >
          <ProductPicker
            selected={s.rewardItems}
            onChange={(next) => set({ rewardItems: next })}
            multi={true}
            placeholder="Tìm sản phẩm tặng (theo tên, SKU hoặc thương hiệu)…"
          />
        </PFRow>
      );
    default:
      return null;
  }
}

function Sec4Reward({ s, set }) {
  return (
    <PFSection num="4" title="Ưu đãi" sub="Khách được gì khi đạt điều kiện?">
      <PFRow label="Loại ưu đãi">
        <PFRadioCard
          value={s.rewardType}
          onChange={(v) => set({ rewardType: v })}
          options={REWARD_OPTS}
          columns={3}
        />
      </PFRow>

      <RewardValueField s={s} set={set} />

      {(s.rewardType === "percent" || s.rewardType === "fixed") ? (
        <div className="pf-row--2">
          <PFRow label="Giảm tối đa (tùy chọn)" hint="Áp trần để bảo vệ lợi nhuận khi giá trị đơn lớn.">
            <PFInput
              value={s.rewardCap}
              onChange={(v) => set({ rewardCap: v.replace(/[^\d]/g, "") })}
              placeholder="500.000"
              suffix="đ"
            />
          </PFRow>
          <div />
        </div>
      ) : null}

      {s.rewardType === "free_item" ? (
        <div className="pf-row--2">
          <PFRow label="Số lượng tặng">
            <PFStepper value={s.rewardQty} onChange={(v) => set({ rewardQty: v })} min={1} max={20} />
          </PFRow>
          <PFRow label=" ">
            <PFSwitchRow
              on={s.rewardLetCustomerChoose}
              onChange={(v) => set({ rewardLetCustomerChoose: v })}
              title="Cho phép khách tự chọn sản phẩm tặng"
              sub="Khi tắt, khách sẽ nhận tất cả sản phẩm trong danh sách."
            />
          </PFRow>
        </div>
      ) : null}
    </PFSection>
  );
}

// ────────────────────────────────────────────────────────────
//  Section 5 — Repeat & limit
// ────────────────────────────────────────────────────────────
function Sec5Repeat({ s, set }) {
  return (
    <PFSection num="5" title="Lặp lại & giới hạn" sub="Khuyến mãi có thể áp nhiều lần không, và giới hạn sử dụng.">
      <PFSwitchRow
        on={s.repeatable}
        onChange={(v) => set({ repeatable: v })}
        title="Cho phép lặp lại trong cùng một đơn"
        sub="VD: mua 6 áo thì khuyến mãi “Mua 3 tặng 1” áp 2 lần."
      >
        {s.repeatable ? (
          <div className="pf-flex-row" style={{ marginTop: 4 }}>
            <span className="pf-mute" style={{ fontSize: 13 }}>Tối đa</span>
            <PFStepper
              value={s.maxRepeats === "unlimited" ? "" : s.maxRepeats}
              onChange={(v) => set({ maxRepeats: v })}
              min={1}
              max={99}
            />
            <span className="pf-mute" style={{ fontSize: 13 }}>lần / đơn</span>
            <span style={{ marginLeft: 8 }}>
              <PFCheckbox
                on={s.maxRepeats === "unlimited"}
                onChange={(on) => set({ maxRepeats: on ? "unlimited" : 1 })}
              >
                Không giới hạn
              </PFCheckbox>
            </span>
          </div>
        ) : null}
      </PFSwitchRow>

      <div>
        <div className="pf-row__lbl" style={{ marginBottom: 8 }}>Giới hạn sử dụng</div>
        <div className="pf-row--3">
          <PFRow label="Mỗi đơn" hint="Số lần áp dụng tối đa trên một đơn hàng.">
            <PFInput
              value={s.maxPerBill}
              onChange={(v) => set({ maxPerBill: v.replace(/[^\d]/g, "") })}
              placeholder="1"
              suffix="lần"
            />
          </PFRow>
          <PFRow label="Mỗi khách" hint="Một khách hàng dùng tối đa bao nhiêu lần.">
            <PFInput
              value={s.maxPerCustomer}
              onChange={(v) => set({ maxPerCustomer: v.replace(/[^\d]/g, "") })}
              placeholder="5"
              suffix="lần"
            />
          </PFRow>
          <PFRow label="Toàn hệ thống" hint="Tổng số lượt sử dụng của toàn bộ chiến dịch.">
            <PFInput
              value={s.maxGlobal}
              onChange={(v) => set({ maxGlobal: v.replace(/[^\d]/g, "") })}
              placeholder="1000"
              suffix="lần"
            />
          </PFRow>
        </div>
      </div>

      <PFRow label="Cách áp dụng">
        <PFSegmented
          value={s.applyMode}
          onChange={(v) => set({ applyMode: v })}
          options={[
            { value: "auto", label: "Tự động áp dụng", icon: "lightning" },
            { value: "coupon", label: "Cần mã giảm giá", icon: "ticket" },
          ]}
          brand
        />
      </PFRow>

      {s.applyMode === "coupon" ? (
        <PFRow label="Mã giảm giá" required hint="Mã không phân biệt hoa-thường. Nên ngắn và dễ gõ.">
          <div className="pf-flex-row">
            <PFInput
              value={s.couponCode}
              onChange={(v) => set({ couponCode: v.toUpperCase().replace(/\s/g, "") })}
              placeholder="HETHU2026"
              width={260}
            />
            <button
              type="button"
              className="sbtn sbtn--outline"
              onClick={() => set({ couponCode: "PRM" + Math.random().toString(36).slice(2, 7).toUpperCase() })}
            >
              <i className="ph ph-magic-wand" />
              Tạo tự động
            </button>
          </div>
        </PFRow>
      ) : null}
    </PFSection>
  );
}

// ────────────────────────────────────────────────────────────
//  Section 6 — Schedule
// ────────────────────────────────────────────────────────────
function Sec6Schedule({ s, set }) {
  return (
    <PFSection num="6" title="Lịch áp dụng" sub="Khoảng thời gian, ngày trong tuần, khung giờ.">
      <div className="pf-row--2">
        <PFRow label="Bắt đầu" required>
          <input
            className="pf-input"
            type="datetime-local"
            value={s.startAt}
            onChange={(e) => set({ startAt: e.target.value })}
          />
        </PFRow>
        <PFRow label="Kết thúc" hint="Bỏ trống nếu chạy liên tục không kết thúc.">
          <input
            className="pf-input"
            type="datetime-local"
            value={s.endAt}
            onChange={(e) => set({ endAt: e.target.value })}
          />
        </PFRow>
      </div>

      <PFRow label="Ngày trong tuần" hint="Khuyến mãi chỉ kích hoạt vào các ngày đã chọn.">
        <PFDayOfWeek days={s.dows} onChange={(v) => set({ dows: v })} />
      </PFRow>

      <PFSwitchRow
        on={s.hoursOn}
        onChange={(v) => set({ hoursOn: v })}
        title="Giới hạn khung giờ trong ngày"
        sub="VD: chỉ áp dụng từ 17:00 – 22:00 (happy hour)."
      >
        {s.hoursOn ? (
          <div className="pf-flex-row">
            <input
              className="pf-input"
              type="time"
              value={s.hourStart}
              onChange={(e) => set({ hourStart: e.target.value })}
              style={{ width: 140 }}
            />
            <span className="pf-mute">đến</span>
            <input
              className="pf-input"
              type="time"
              value={s.hourEnd}
              onChange={(e) => set({ hourEnd: e.target.value })}
              style={{ width: 140 }}
            />
          </div>
        ) : null}
      </PFSwitchRow>
    </PFSection>
  );
}

// ────────────────────────────────────────────────────────────
//  Section 7 — Stacking
// ────────────────────────────────────────────────────────────
function Sec7Stacking({ s, set }) {
  return (
    <PFSection num="7" title="Kết hợp khuyến mãi" sub="Quy tắc khi nhiều khuyến mãi cùng được kích hoạt.">
      <PFSwitchRow
        on={s.exclusive}
        onChange={(v) => set({ exclusive: v })}
        title="Khuyến mãi độc quyền"
        sub="Khi bật, khuyến mãi này không thể kết hợp với khuyến mãi khác."
      />

      {!s.exclusive ? (
        <PFRow
          label="Ưu tiên áp dụng"
          hint="Số càng cao càng được áp trước. Dùng khi muốn ép thứ tự với các khuyến mãi khác."
        >
          <PFStepper
            value={s.priority}
            onChange={(v) => set({ priority: v })}
            min={0}
            max={999}
          />
        </PFRow>
      ) : null}
    </PFSection>
  );
}

// ────────────────────────────────────────────────────────────
//  Main composition
// ────────────────────────────────────────────────────────────
function PromotionForm() {
  const [state, setState] = useStatePF(INITIAL_STATE);
  const set = (patch) => setState((s) => ({ ...s, ...patch }));

  return (
    <div className="pf-page">
      {/* Page header */}
      <header className="pf-head">
        <div>
          <div className="pf-head__crumbs">
            <a href="#">Marketing</a>
            <i className="ph ph-caret-right" />
            <a href="#">Khuyến mãi</a>
            <i className="ph ph-caret-right" />
            <b style={{ color: "var(--fg-base)", fontWeight: 600 }}>Tạo khuyến mãi mới</b>
          </div>
          <h1 className="pf-head__title">Tạo khuyến mãi mới</h1>
        </div>
        <div className="pf-head__meta">
          <span className="pf-pill pf-pill--gray">
            <i className="ph ph-clock" />
            Tự lưu nháp lúc 14:32
          </span>
          <button className="sbtn sbtn--outline"><i className="ph ph-eye" />Xem trước</button>
          <button className="sbtn sbtn--outline"><i className="ph ph-copy" />Nhân bản</button>
        </div>
      </header>

      {/* Two-column body */}
      <div className="pf-grid">
        <div className="pf-col">
          <Sec1Basic s={state} set={set} />
          <Sec2Trigger s={state} set={set} />
          <Sec3Scope s={state} set={set} />
          <Sec4Reward s={state} set={set} />
          <Sec5Repeat s={state} set={set} />
          <Sec6Schedule s={state} set={set} />
          <Sec7Stacking s={state} set={set} />
        </div>
        <aside className="pf-rail">
          <PreviewPanel state={state} />
        </aside>
      </div>

      {/* Sticky save bar */}
      <footer className="pf-savebar">
        <div className="pf-savebar__l">
          <i className="ph ph-info" />
          Mọi thay đổi sẽ tự động lưu vào bản nháp. Khuyến mãi chỉ chạy khi trạng thái = <b style={{ color: "var(--color-green)", marginLeft: 4 }}>Đang chạy</b>.
        </div>
        <div className="pf-savebar__r">
          <button className="sbtn sbtn--outline">Hủy</button>
          <button className="sbtn sbtn--outline"><i className="ph ph-floppy-disk" />Lưu nháp</button>
          <button className="sbtn sbtn--primary">
            <i className="ph ph-check-circle" />
            Lưu khuyến mãi
          </button>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { PromotionForm });
