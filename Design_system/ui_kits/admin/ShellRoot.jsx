// ShellRoot.jsx — Sidebar + TopNav + SubTabs for root-level demo files

const MODULES = [
  { id: "marketing",   label: "Marketing",  icon: "Design_system/assets/modules/marketing.png" },
  { id: "sales",       label: "Sales",      icon: "Design_system/assets/modules/sales.png" },
  { id: "storage",     label: "Kho vận",    icon: "Design_system/assets/modules/storage.png" },
  { id: "buy",         label: "Mua hàng",   icon: "Design_system/assets/modules/buy.png" },
  { id: "account",     label: "Kế toán",    icon: "Design_system/assets/modules/account.png" },
  { id: "cash",        label: "Cửa hàng",   icon: "Design_system/assets/modules/cash.png" },
  { id: "job",         label: "Công việc",  icon: "Design_system/assets/modules/job.png" },
  { id: "customer",    label: "Khách hàng", icon: "Design_system/assets/modules/customer.png" },
  { id: "employee",    label: "Nhân sự",    icon: "Design_system/assets/modules/employee.png" },
  { id: "production",  label: "Sản xuất",   icon: "Design_system/assets/modules/utilities.png" },
  { id: "report",      label: "Báo cáo",    icon: "Design_system/assets/modules/report.png" },
];

function Sidebar({ active, onSelect }) {
  return (
    <aside className="ssidebar">
      <div className="ssidebar__logo">
        <img src="Design_system/assets/logo-primary.png" alt="SandBox" />
      </div>
      <nav className="ssidebar__nav">
        {MODULES.map((m) => (
          <button
            key={m.id}
            type="button"
            className={"smod " + (m.id === active ? "smod--active" : "")}
            onClick={() => onSelect && onSelect(m.id)}
            title={m.label}
          >
            {/* sticker-corner detail */}
            <span className="smod__sticker" />
            <img src={m.icon} alt="" />
            <span className="smod__label">{m.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function TopNav() {
  return (
    <header className="stopnav">
      <button className="stopnav__hamb" title="Menu"><i className="ph ph-list" /></button>
      <div className="stopnav__spacer" />

      <div className="stopnav__item stopnav__item--notif">
        <span className="stopnav__bell">
          <i className="ph ph-bell" />
          <span className="badge-count">4</span>
        </span>
        Thông báo hệ thống
      </div>
      <div className="stopnav__item">
        <i className="ph ph-globe" />
        Website đặt chỗ
      </div>
      <div className="stopnav__item stopnav__item--brand">
        <i className="ph ph-storefront" />
        Chi nhánh Cầu Giấy
        <i className="ph ph-caret-down" />
      </div>

      <div className="stopnav__icons">
        <span className="stopnav__icobtn">
          <i className="ph ph-bell" />
          <span className="badge-count">4</span>
        </span>
        <span className="stopnav__icobtn"><i className="ph ph-rocket-launch" /></span>
      </div>

      <div className="stopnav__profile">
        <Avatar src="Design_system/assets/avatars/avatar-04.jpg" name="Nguyễn Văn An" size={36} />
        <div>
          <div className="stopnav__profile-n">Nguyễn Văn An</div>
          <div className="stopnav__profile-r">Admin đơn vị</div>
        </div>
      </div>
    </header>
  );
}

function SubTabs({ tabs, active, onSelect }) {
  return (
    <nav className="ssubtabs">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={"ssubtab " + (t.id === active ? "is-active" : "")}
          onClick={() => onSelect && onSelect(t.id)}
        >
          <i className={"ph ph-" + t.icon} />
          {t.label}
        </button>
      ))}
    </nav>
  );
}

Object.assign(window, { Sidebar, TopNav, SubTabs, MODULES });
