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

const { useState: useStatePP, useRef: useRefPP, useEffect: useEffectPP, useMemo: useMemoPP } = React;

function formatVNDPP(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}

// Highlight query inside text (split on diacritic-folded match)
function HighlightText({ text, query }) {
  if (!query) return <>{text}</>;
  const fold = (s) => s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "D")
    .toLowerCase();
  const t = fold(text);
  const q = fold(query);
  if (!q || !t.includes(q)) return <>{text}</>;

  // walk char-by-char and segment
  const parts = [];
  let i = 0;
  while (i < t.length) {
    const idx = t.indexOf(q, i);
    if (idx === -1) { parts.push({ s: text.slice(i), h: false }); break; }
    if (idx > i) parts.push({ s: text.slice(i, idx), h: false });
    parts.push({ s: text.slice(idx, idx + q.length), h: true });
    i = idx + q.length;
  }
  return (
    <>{parts.map((p, j) => p.h ? <mark key={j} className="pf-pp__hl">{p.s}</mark> : <React.Fragment key={j}>{p.s}</React.Fragment>)}</>
  );
}

// Selected product chip (chunky row above input)
function SelectedRow({ product, onRemove }) {
  return (
    <div className="pf-pp__sel">
      <span className="pf-pp__thumb" style={{ background: product.color }}>
        {productInitials(product)}
      </span>
      <div className="pf-pp__sel-text">
        <div className="pf-pp__sel-n">{product.name}</div>
        <div className="pf-pp__sel-s">
          <span className="pf-pp__sku">{product.sku}</span>
          <span className="pf-pp__dot">·</span>
          <span>{product.category}</span>
          <span className="pf-pp__dot">·</span>
          <span>{product.brand}</span>
        </div>
      </div>
      <div className="pf-pp__sel-price">{formatVNDPP(product.price)}</div>
      <button type="button" className="pf-pp__rm" onClick={onRemove} title="Bỏ chọn">
        <i className="ph ph-x" />
      </button>
    </div>
  );
}

// Dropdown result row
function ResultRow({ product, isOn, onToggle, query, multi }) {
  return (
    <button
      type="button"
      className={"pf-pp__row" + (isOn ? " is-on" : "")}
      onClick={onToggle}
    >
      <span className={"pf-pp__row-chk" + (multi ? "" : " pf-pp__row-chk--radio")}>
        {isOn ? <i className="ph ph-check" /> : null}
      </span>
      <span className="pf-pp__thumb pf-pp__thumb--sm" style={{ background: product.color }}>
        {productInitials(product)}
      </span>
      <span className="pf-pp__row-body">
        <span className="pf-pp__row-n">
          <HighlightText text={product.name} query={query} />
        </span>
        <span className="pf-pp__row-s">
          <span className="pf-pp__sku">
            <HighlightText text={product.sku} query={query} />
          </span>
          <span className="pf-pp__dot">·</span>
          <span>{product.brand}</span>
          <span className="pf-pp__dot">·</span>
          <span className={"pf-pp__stock" + (product.stock < 30 ? " is-low" : "")}>
            Còn {product.stock}
          </span>
        </span>
      </span>
      <span className="pf-pp__row-price">{formatVNDPP(product.price)}</span>
    </button>
  );
}

function ProductPicker({
  selected,        // array of product objects
  onChange,        // (next: product[]) => void
  multi = true,
  placeholder = "Tìm sản phẩm theo tên, mã SKU, thương hiệu…",
  emptyHint = "Chưa có sản phẩm nào được chọn",
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
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const selectedIds = useMemoPP(() => new Set(selected.map((p) => p.id)), [selected]);
  const results = useMemoPP(
    () => searchProducts(query, { category }),
    [query, category]
  );

  // Reset active index when results change
  useEffectPP(() => { setActiveIdx(0); }, [query, category]);

  const toggle = (p) => {
    if (selectedIds.has(p.id)) {
      onChange(selected.filter((s) => s.id !== p.id));
    } else if (multi) {
      onChange([...selected, p]);
    } else {
      onChange([p]);
      setOpen(false);
    }
  };

  const removeAt = (i) => onChange(selected.filter((_, j) => j !== i));

  const onKeyDown = (e) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter") { setOpen(true); return; }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(results.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[activeIdx]) toggle(results[activeIdx]);
    } else if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "Backspace" && !query && selected.length) {
      removeAt(selected.length - 1);
    }
  };

  return (
    <div className="pf-pp" ref={wrapRef}>
      <div
        className={"pf-pp__field" + (open ? " is-open" : "")}
        onClick={() => { setOpen(true); inputRef.current?.focus(); }}
      >
        {selected.length > 0 ? (
          <div className="pf-pp__sels">
            {selected.map((p, i) => (
              <SelectedRow key={p.id} product={p} onRemove={() => removeAt(i)} />
            ))}
          </div>
        ) : null}

        <div className="pf-pp__inputrow">
          <i className="ph ph-magnifying-glass pf-pp__lens" />
          <input
            ref={inputRef}
            className="pf-pp__input"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            placeholder={selected.length ? "Thêm sản phẩm…" : placeholder}
          />
          {selected.length > 0 ? (
            <span className="pf-pp__count">
              {selected.length} sản phẩm
            </span>
          ) : null}
          <i className={"ph ph-caret-" + (open ? "up" : "down") + " pf-pp__caret"} />
        </div>
      </div>

      {open ? (
        <div className="pf-pp__drop">
          <div className="pf-pp__cats">
            {["Tất cả", ...PRODUCT_CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                className={"pf-pp__cat" + (category === c ? " is-on" : "")}
                onClick={(e) => { e.stopPropagation(); setCategory(c); }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="pf-pp__results">
            {results.length === 0 ? (
              <div className="pf-pp__empty">
                <i className="ph ph-magnifying-glass" />
                <div className="pf-pp__empty-t">Không tìm thấy sản phẩm</div>
                <div className="pf-pp__empty-s">
                  Thử từ khoá khác, hoặc thêm sản phẩm mới vào danh mục.
                </div>
              </div>
            ) : (
              results.map((p, i) => (
                <ResultRow
                  key={p.id}
                  product={p}
                  isOn={selectedIds.has(p.id)}
                  onToggle={() => toggle(p)}
                  query={query}
                  multi={multi}
                />
              ))
            )}
          </div>

          <div className="pf-pp__foot">
            <span><kbd>↑</kbd> <kbd>↓</kbd> di chuyển · <kbd>Enter</kbd> chọn · <kbd>Esc</kbd> đóng</span>
            <span className="pf-pp__foot-r">
              {selected.length} đã chọn · {results.length} kết quả
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

Object.assign(window, { ProductPicker });
