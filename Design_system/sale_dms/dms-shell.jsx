// Shell.jsx — full Sale DMS shell: module rail (108) + secondary nav (224) + topnav + workspace

const SALE_DMS_NAV = [
  { id: "outlets",     label: "Điểm bán",            icon: "storefront",  count: "248" },
  { id: "routes",      label: "Tuyến bán hàng",      icon: "path",        count: "32" },
  { id: "shifts",      label: "Thiết lập ca làm việc", icon: "clock-clockwise", count: "8" },
  { id: "assignments", label: "Phân ca",             icon: "calendar-plus", count: null },
  { id: "tracking",    label: "Theo dõi công việc",  icon: "monitor-play", count: null },
  { id: "reports",     label: "Báo cáo",             icon: "chart-line-up", count: null },
];

function DmsSidebar() {
  const items = [
    { id: "marketing", icon: "../assets/modules/marketing.png", label: "Marketing" },
    { id: "sales", icon: "../assets/modules/sales.png", label: "Sale DMS", active: true },
    { id: "storage", icon: "../assets/modules/storage.png", label: "Kho vận" },
    { id: "buy", icon: "../assets/modules/buy.png", label: "Mua hàng" },
    { id: "account", icon: "../assets/modules/account.png", label: "Kế toán" },
    { id: "cash", icon: "../assets/modules/cash.png", label: "Cửa hàng" },
    { id: "job", icon: "../assets/modules/job.png", label: "Công việc" },
    { id: "customer", icon: "../assets/modules/customer.png", label: "Khách hàng" },
    { id: "employee", icon: "../assets/modules/employee.png", label: "Nhân sự" },
    { id: "report", icon: "../assets/modules/report.png", label: "Báo cáo" },
    { id: "setting", icon: "../assets/modules/setting.png", label: "Thiết lập" },
  ];
  return (
    <aside className="ssidebar">
      <div className="ssidebar__logo">
        <img src="../assets/logo-primary.png" alt="SandBox" />
      </div>
      <nav className="ssidebar__nav">
        {items.map((m) => (
          <button key={m.id} className={"smod " + (m.active ? "smod--active" : "")} title={m.label}>
            <span className="smod__sticker" />
            <img src={m.icon} alt="" />
            <span className="smod__label">{m.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function DmsTopnav() {
  return (
    <header className="stopnav">
      <button className="stopnav__hamb" title="Menu"><i className="ph ph-list" /></button>
      <div className="stopnav__spacer" />
      <div className="stopnav__item stopnav__item--notif">
        <span className="stopnav__bell"><i className="ph ph-bell" /><span className="badge-count">4</span></span>
        Thông báo hệ thống
      </div>
      <div className="stopnav__item"><i className="ph ph-globe" />Website đặt chỗ</div>
      <div className="stopnav__item stopnav__item--brand">
        <i className="ph ph-storefront" />Chi nhánh Cầu Giấy<i className="ph ph-caret-down" />
      </div>
      <div className="stopnav__icons">
        <span className="stopnav__icobtn"><i className="ph ph-question" /></span>
        <span className="stopnav__icobtn"><i className="ph ph-gear" /></span>
      </div>
      <div className="stopnav__profile">
        <Avatar src="../assets/avatars/avatar-04.jpg" name="Nguyễn Văn An" size={36} />
        <div>
          <div className="stopnav__profile-n">Nguyễn Văn An</div>
          <div className="stopnav__profile-r">Quản lý Sale DMS</div>
        </div>
      </div>
    </header>
  );
}

function DmsSubNav({ active, onSelect }) {
  return (
    <aside className="dms-subnav">
      <div className="dms-subnav__head">
        <div className="dms-subnav__kicker">Module</div>
        <div className="dms-subnav__title">Sale DMS</div>
        <div className="dms-subnav__sub">Quản lý điểm bán &amp; lịch chăm sóc</div>
      </div>
      <nav className="dms-subnav__list">
        {SALE_DMS_NAV.map((it) => (
          <button
            key={it.id}
            className={"dms-navitem " + (active === it.id ? "is-active" : "")}
            onClick={() => onSelect(it.id)}
          >
            <i className={"ph ph-" + it.icon} />
            <span>{it.label}</span>
            {it.count ? <span className="dms-navitem__count">{it.count}</span> : null}
          </button>
        ))}
      </nav>
      <div className="dms-subnav__foot">
        <div className="dms-subnav__quote">
          <div className="dms-subnav__quote-t">
            <i className="ph ph-lightbulb" style={{ marginRight: 4 }} />
            Mẹo nhanh
          </div>
          <div className="dms-subnav__quote-s">Kéo thả điểm bán trong tuyến để sắp xếp thứ tự ghé thăm.</div>
        </div>
      </div>
    </aside>
  );
}

// Breadcrumb
function Crumbs({ items }) {
  return (
    <div className="dms-crumbs">
      <i className="ph ph-house" />
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            <i className="ph ph-caret-right" />
            {last
              ? <span className="dms-crumbs__here">{it.label}</span>
              : <a onClick={it.onClick}>{it.label}</a>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function PageHeader({ title, subtitle, actions }) {
  return (
    <div className="dms-pgh">
      <div>
        <h1 className="dms-pgh__t">{title}</h1>
        {subtitle ? <div className="dms-pgh__s">{subtitle}</div> : null}
      </div>
      {actions ? <div className="dms-pgh__actions">{actions}</div> : null}
    </div>
  );
}

// Generic filter bar
function FilterBar({ search, onSearch, dropdowns, right }) {
  return (
    <div className="dms-filterbar">
      <label className="sfield" style={{ width: 280 }}>
        <i className="ph ph-magnifying-glass" />
        <input
          className="sfield__input"
          placeholder={search || "Tìm kiếm..."}
          onChange={(e) => onSearch && onSearch(e.target.value)}
        />
      </label>
      {(dropdowns || []).map((d, i) => (
        <div key={i} className="dms-dropfield">
          <span>{d.label}</span>
          <b>{d.value || "Tất cả"}</b>
          <i className="ph ph-caret-down" />
        </div>
      ))}
      <div className="dms-filterbar__r">{right}</div>
    </div>
  );
}

// Standard pagination footer
function TableFoot({ total, page = 1, pages = 5 }) {
  return (
    <div className="dms-tfoot">
      <div>Hiển thị 1 - 10 của {total} bản ghi</div>
      <div className="dms-tfoot__pp">
        <span>Số dòng / trang:</span>
        <select defaultValue="10"><option>10</option><option>25</option><option>50</option></select>
      </div>
      <div className="dms-tfoot__nums">
        <button className="dms-tfoot__arrow"><i className="ph ph-caret-left" /></button>
        {Array.from({ length: pages }).map((_, i) => (
          <button key={i} className={"dms-tfoot__num " + (i+1 === page ? "is-active" : "")}>{i+1}</button>
        ))}
        <span className="dms-tfoot__num is-dots">…</span>
        <button className="dms-tfoot__num">{pages + 8}</button>
        <button className="dms-tfoot__arrow"><i className="ph ph-caret-right" /></button>
      </div>
    </div>
  );
}

function RowActions({ onView, onEdit, onDelete }) {
  return (
    <div className="dms-rowact">
      <button title="Xem chi tiết" onClick={onView}><i className="ph ph-eye" /></button>
      <button title="Sửa" onClick={onEdit}><i className="ph ph-pencil-simple" /></button>
      <button title="Xóa" className="is-danger" onClick={onDelete}><i className="ph ph-trash" /></button>
    </div>
  );
}

// Section header card
function Section({ title, subtitle, action, children, flush }) {
  return (
    <div className="dms-section">
      <div className="dms-section__h">
        <div>
          <div className="dms-section__t">{title}</div>
          {subtitle ? <div className="dms-section__s">{subtitle}</div> : null}
        </div>
        {action}
      </div>
      <div className={"dms-section__b " + (flush ? "dms-section__b--flush" : "")}>{children}</div>
    </div>
  );
}

// KPI card
function Kpi({ label, value, unit, icon, tone = "pink", delta }) {
  return (
    <div className="dms-kpi">
      <div className="dms-kpi__head">
        <div className="dms-kpi__label">{label}</div>
        <div className={"dms-kpi__icon dms-kpi__icon--" + tone}><i className={"ph ph-" + icon} /></div>
      </div>
      <div className="dms-kpi__value">
        <span className="dms-text-num">{value}</span>
        {unit ? <span className="u">{unit}</span> : null}
      </div>
      {delta ? (
        <div className="dms-kpi__foot">
          {delta.dir === "up" && <span className="dms-kpi__delta-up"><i className="ph ph-trend-up" />{delta.val}</span>}
          {delta.dir === "down" && <span className="dms-kpi__delta-down"><i className="ph ph-trend-down" />{delta.val}</span>}
          {delta.dir === "flat" && <span className="dms-kpi__delta-flat">{delta.val}</span>}
          <span>{delta.note}</span>
        </div>
      ) : null}
    </div>
  );
}

// Tabs row
function Tabs({ tabs, active, onSelect }) {
  return (
    <div className="dms-tabs">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={"dms-tab " + (t.id === active ? "is-active" : "")}
          onClick={() => onSelect(t.id)}
        >
          <i className={"ph ph-" + t.icon} />
          {t.label}
          {t.count != null ? <span className="dms-tab__count">{t.count}</span> : null}
        </button>
      ))}
    </div>
  );
}

// Map placeholder (decorative)
function MapPlaceholder({ pins = [], children, style }) {
  return (
    <div className="dms-map" style={style}>
      <div className="dms-map__chip"><i className="ph ph-map-pin-line" />Bản đồ vị trí · Google Maps</div>
      <div className="dms-map__ctrls">
        <button><i className="ph ph-plus" /></button>
        <button><i className="ph ph-minus" /></button>
        <button><i className="ph ph-crosshair" /></button>
      </div>
      {/* dashed route */}
      {pins.length > 1 ? (
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <polyline
            points={pins.map(p => `${p.x}%,${p.y}%`).join(" ")}
            className="dms-map__route"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ) : null}
      {pins.map((p, i) => (
        <div
          key={i}
          className={"dms-map__pin " + (p.idle ? "dms-map__pin--idle" : "")}
          style={{ left: p.x + "%", top: p.y + "%" }}
        >
          <span>{p.label}</span>
        </div>
      ))}
      {children}
    </div>
  );
}

Object.assign(window, {
  SALE_DMS_NAV, DmsSidebar, DmsTopnav, DmsSubNav,
  Crumbs, PageHeader, FilterBar, TableFoot, RowActions,
  Section, Kpi, Tabs, MapPlaceholder
});
