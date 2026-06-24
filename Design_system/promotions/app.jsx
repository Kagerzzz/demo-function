// app.jsx — mounts the PromotionForm inside the SandboxVN admin shell.
//
// Note: Sidebar/TopNav from the shared shell use paths like
// "../../assets/..." that resolve correctly only from /ui_kits/admin/.
// We're one level deeper-out, so we override the MODULES list + define
// a slim wrapper TopNav with corrected avatar/logo paths.

const LOCAL_MODULES = [
  { id: "marketing",   label: "Marketing",  icon: "../assets/modules/marketing.png" },
  { id: "sales",       label: "Sales",      icon: "../assets/modules/sales.png" },
  { id: "storage",     label: "Kho vận",    icon: "../assets/modules/storage.png" },
  { id: "buy",         label: "Mua hàng",   icon: "../assets/modules/buy.png" },
  { id: "account",     label: "Kế toán",    icon: "../assets/modules/account.png" },
  { id: "cash",        label: "Cửa hàng",   icon: "../assets/modules/cash.png" },
  { id: "job",         label: "Công việc",  icon: "../assets/modules/job.png" },
  { id: "customer",    label: "Khách hàng", icon: "../assets/modules/customer.png" },
  { id: "employee",    label: "Nhân sự",    icon: "../assets/modules/employee.png" },
  { id: "production",  label: "Sản xuất",   icon: "../assets/modules/utilities.png" },
  { id: "report",      label: "Báo cáo",    icon: "../assets/modules/report.png" },
];

function LocalSidebar({ active, onSelect }) {
  return (
    <aside className="ssidebar">
      <div className="ssidebar__logo">
        <img src="../assets/logo-primary.png" alt="SandBox" />
      </div>
      <nav className="ssidebar__nav">
        {LOCAL_MODULES.map((m) => (
          <button
            key={m.id}
            type="button"
            className={"smod " + (m.id === active ? "smod--active" : "")}
            onClick={() => onSelect(m.id)}
            title={m.label}
          >
            <img src={m.icon} alt="" />
            <span className="smod__label">{m.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function LocalTopNav() {
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
        <Avatar src="../assets/avatars/avatar-04.jpg" name="Nguyễn Văn An" size={36} />
        <div>
          <div className="stopnav__profile-n">Nguyễn Văn An</div>
          <div className="stopnav__profile-r">Admin đơn vị</div>
        </div>
      </div>
    </header>
  );
}

function App() {
  const [active, setActive] = React.useState("marketing");

  return (
    <div className="sshell">
      <LocalSidebar active={active} onSelect={setActive} />
      <div className="sshell__main">
        <LocalTopNav />
        <main className="sshell__work">
          <PromotionForm />
        </main>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
