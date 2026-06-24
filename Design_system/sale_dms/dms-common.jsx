// Shared primitives used by every screen in the UI kit.
// Mounted globally onto window at the bottom (see "shared scope" note in system prompt).
const { useState } = React;

// ─────────────────────────────────────────────────────────
// Buttons
// ─────────────────────────────────────────────────────────
function Button({ variant = "primary", icon, iconRight, onClick, children, style }) {
  const cls = "sbtn sbtn--" + variant;
  return (
    <button className={cls} onClick={onClick} style={style}>
      {icon ? <i className={"ph ph-" + icon} /> : null}
      {children ? <span>{children}</span> : null}
      {iconRight ? <i className={"ph ph-" + iconRight} /> : null}
    </button>
  );
}
function IconButton({ icon, onClick, title, variant = "outline" }) {
  return (
    <button className={"sbtn sbtn--" + variant + " sbtn--icon"} title={title} onClick={onClick}>
      <i className={"ph ph-" + icon} />
    </button>
  );
}

// ─────────────────────────────────────────────────────────
// Field
// ─────────────────────────────────────────────────────────
function Field({ icon, placeholder, value, onChange, width = 220, iconRight }) {
  return (
    <label className="sfield" style={{ width }}>
      {icon ? <i className={"ph ph-" + icon} /> : null}
      <input
        className="sfield__input"
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {iconRight ? <i className={"ph ph-" + iconRight} /> : null}
    </label>
  );
}

function LabeledField({ label, required, children }) {
  return (
    <div className="slbl-field">
      <div className="slbl-field__lbl">
        {label}{required ? <span className="t-required"> *</span> : null}
      </div>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Status / chip / pill
// ─────────────────────────────────────────────────────────
function Status({ tone = "green", children }) {
  return <span className={"status status--" + tone}>{children}</span>;
}

// ─────────────────────────────────────────────────────────
// Avatar
// ─────────────────────────────────────────────────────────
function Avatar({ src, size = 32, name }) {
  const initials = (name || "?").split(" ").map((p) => p[0]).slice(-2).join("");
  return src ? (
    <span
      className="savatar"
      style={{ width: size, height: size, backgroundImage: `url(${src})` }}
      title={name}
    />
  ) : (
    <span
      className="savatar savatar--initials"
      style={{ width: size, height: size, fontSize: size * 0.4 }}
      title={name}
    >{initials}</span>
  );
}

function AvatarStack({ people, size = 28, max = 3 }) {
  const shown = people.slice(0, max);
  const rest = people.length - max;
  return (
    <span className="savatar-stack">
      {shown.map((p, i) => <Avatar key={i} src={p.src} name={p.name} size={size} />)}
      {rest > 0 ? <span className="savatar savatar--more" style={{ width: size, height: size }}>+{rest}</span> : null}
    </span>
  );
}

// ─────────────────────────────────────────────────────────
// Badge count
// ─────────────────────────────────────────────────────────
function BadgeCount({ children }) {
  return <span className="badge-count">{children}</span>;
}

// ─────────────────────────────────────────────────────────
// Modal
// ─────────────────────────────────────────────────────────
function Modal({ open, onClose, title, footer, children, width = 520 }) {
  if (!open) return null;
  return (
    <div className="smodal-scrim" onClick={onClose}>
      <div className="smodal" style={{ width }} onClick={(e) => e.stopPropagation()}>
        <header className="smodal__head">
          <span>{title}</span>
          <button className="smodal__x" onClick={onClose}><i className="ph ph-x" /></button>
        </header>
        <div className="smodal__body">{children}</div>
        <footer className="smodal__foot">{footer}</footer>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Empty state
// ─────────────────────────────────────────────────────────
function EmptyState({ illustration, title, subtitle, action }) {
  return (
    <div className="sempty">
      {illustration ? <img src={illustration} alt="" /> : null}
      <div className="sempty__t">{title}</div>
      {subtitle ? <div className="sempty__s">{subtitle}</div> : null}
      {action}
    </div>
  );
}

Object.assign(window, { Button, IconButton, Field, LabeledField, Status, Avatar, AvatarStack, BadgeCount, Modal, EmptyState });
