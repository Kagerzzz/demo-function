// FormPrimitives.jsx — reusable bits for the promotion editor
const { useState: usePF, useRef: useRefPF } = React;

// ── Section card with numbered title ─────────────────────────
function PFSection({ num, title, sub, right, children }) {
  return (
    <section className="pf-card">
      <header className="pf-card__h">
        <div className="pf-card__t">
          <span className="pf-card__num">{num}</span>
          <div>
            <h3 className="pf-card__title">{title}</h3>
            {sub ? <div className="pf-card__sub">{sub}</div> : null}
          </div>
        </div>
        {right ? <div className="pf-card__h-right">{right}</div> : null}
      </header>
      <div className="pf-card__body">{children}</div>
    </section>
  );
}

// ── Labelled row (label above input) ────────────────────────
function PFRow({ label, required, hint, children, className }) {
  return (
    <div className={"pf-row " + (className || "")}>
      {label ? (
        <label className="pf-row__lbl">
          {label}{required ? <span className="req">*</span> : null}
        </label>
      ) : null}
      {children}
      {hint ? <div className="pf-row__hint">{hint}</div> : null}
    </div>
  );
}

// ── Text input / number / textarea ──────────────────────────
function PFInput({ value, onChange, placeholder, type = "text", suffix, prefix, width }) {
  if (suffix || prefix) {
    return (
      <div className="pf-input-grp" style={width ? { width } : undefined}>
        {prefix ? <span className="pf-input-grp__prefix">{prefix}</span> : null}
        <input
          className={"pf-input" + (type === "number" ? " pf-input--num" : "")}
          type={type}
          value={value ?? ""}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
        />
        {suffix ? <span className="pf-input-grp__suffix">{suffix}</span> : null}
      </div>
    );
  }
  return (
    <input
      className={"pf-input" + (type === "number" ? " pf-input--num" : "")}
      type={type}
      value={value ?? ""}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeholder}
      style={width ? { width } : undefined}
    />
  );
}

function PFTextarea({ value, onChange, placeholder, rows = 3 }) {
  return (
    <textarea
      className="pf-textarea"
      rows={rows}
      value={value ?? ""}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

function PFSelect({ value, onChange, options, width }) {
  return (
    <select
      className="pf-select"
      value={value ?? ""}
      onChange={(e) => onChange && onChange(e.target.value)}
      style={width ? { width } : undefined}
    >
      {options.map((o) =>
        typeof o === "string"
          ? <option key={o} value={o}>{o}</option>
          : <option key={o.value} value={o.value}>{o.label}</option>
      )}
    </select>
  );
}

// ── Segmented toggle (2–4 short options) ────────────────────
function PFSegmented({ value, onChange, options, brand }) {
  return (
    <div className="pf-seg">
      {options.map((o) => {
        const isAct = (o.value ?? o) === value;
        return (
          <button
            key={o.value ?? o}
            type="button"
            className={"pf-seg__opt" + (isAct ? " is-active" + (brand ? " is-active--brand" : "") : "")}
            onClick={() => onChange && onChange(o.value ?? o)}
          >
            {o.icon ? <i className={"ph ph-" + o.icon} /> : null}
            {o.label ?? o}
          </button>
        );
      })}
    </div>
  );
}

// ── Switch with label & sublabel ────────────────────────────
function PFSwitch({ on, onChange, label, sub }) {
  const handle = () => onChange && onChange(!on);
  return (
    <label className={"pf-switch" + (on ? " is-on" : "")} onClick={handle}>
      <span className="pf-switch__track"><span className="pf-switch__thumb" /></span>
      {(label || sub) ? (
        <span>
          {label ? <div className="pf-switch__lbl">{label}</div> : null}
          {sub ? <div className="pf-switch__sub">{sub}</div> : null}
        </span>
      ) : null}
    </label>
  );
}

// ── Switch-row card (toggle on right, copy on left) ─────────
function PFSwitchRow({ on, onChange, title, sub, children }) {
  return (
    <div className="pf-switchrow">
      <div className="pf-switchrow__text">
        <div className="pf-switchrow__t">{title}</div>
        {sub ? <div className="pf-switchrow__s">{sub}</div> : null}
        {children ? <div style={{ marginTop: 12 }}>{children}</div> : null}
      </div>
      <PFSwitch on={on} onChange={onChange} />
    </div>
  );
}

// ── Radio-card grid ─────────────────────────────────────────
function PFRadioCard({ value, onChange, options, columns = 2 }) {
  return (
    <div className={"pf-radiogrid" + (columns === 3 ? " pf-radiogrid--3" : "")}>
      {options.map((o) => {
        const isAct = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            className={"pf-radio" + (isAct ? " is-active" : "")}
            onClick={() => onChange && onChange(o.value)}
          >
            <span className="pf-radio__dot" />
            {o.icon ? <i className={"ph ph-" + o.icon + " pf-radio__ico"} /> : null}
            <span className="pf-radio__t">{o.label}</span>
            {o.sub ? <span className="pf-radio__s">{o.sub}</span> : null}
          </button>
        );
      })}
    </div>
  );
}

// ── Checkbox ─────────────────────────────────────────────────
function PFCheckbox({ on, onChange, children }) {
  return (
    <label className={"pf-chk" + (on ? " is-on" : "")} onClick={() => onChange && onChange(!on)}>
      <span className="pf-chk__box"><i className="ph ph-check" /></span>
      <span>{children}</span>
    </label>
  );
}

// ── Tag chip input ──────────────────────────────────────────
function PFChipsInput({ chips, onAdd, onRemove, placeholder }) {
  const [draft, setDraft] = usePF("");
  const handle = (e) => {
    if ((e.key === "Enter" || e.key === ",") && draft.trim()) {
      e.preventDefault();
      onAdd(draft.trim());
      setDraft("");
    } else if (e.key === "Backspace" && !draft && chips.length) {
      onRemove(chips.length - 1);
    }
  };
  return (
    <div className="pf-chips">
      {chips.map((c, i) => (
        <span key={i} className="pf-chip">
          {c}
          <span className="pf-chip__x" onClick={() => onRemove(i)}><i className="ph ph-x" /></span>
        </span>
      ))}
      <input
        className="pf-chips__input"
        placeholder={chips.length ? "" : placeholder}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handle}
      />
    </div>
  );
}

// ── Numeric stepper ─────────────────────────────────────────
function PFStepper({ value, onChange, min = 0, max = 999, step = 1 }) {
  const clamp = (n) => Math.max(min, Math.min(max, n));
  return (
    <div className="pf-stepper">
      <button type="button" className="pf-stepper__btn" onClick={() => onChange(clamp((+value || 0) - step))}><i className="ph ph-minus" /></button>
      <input
        className="pf-stepper__inp"
        value={value}
        onChange={(e) => {
          const n = e.target.value.replace(/[^\d]/g, "");
          onChange(n === "" ? "" : clamp(+n));
        }}
      />
      <button type="button" className="pf-stepper__btn" onClick={() => onChange(clamp((+value || 0) + step))}><i className="ph ph-plus" /></button>
    </div>
  );
}

// ── Day-of-week selector ────────────────────────────────────
const DOW_LABELS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
function PFDayOfWeek({ days, onChange }) {
  const toggle = (i) => {
    const next = new Set(days);
    next.has(i) ? next.delete(i) : next.add(i);
    onChange([...next].sort());
  };
  return (
    <div className="pf-dow">
      {DOW_LABELS.map((l, i) => (
        <button
          key={i}
          type="button"
          className={"pf-dow__d" + (days.includes(i) ? " is-on" : "")}
          onClick={() => toggle(i)}
        >{l}</button>
      ))}
    </div>
  );
}

Object.assign(window, {
  PFSection, PFRow, PFInput, PFTextarea, PFSelect,
  PFSegmented, PFSwitch, PFSwitchRow,
  PFRadioCard, PFCheckbox, PFChipsInput,
  PFStepper, PFDayOfWeek, DOW_LABELS,
});
