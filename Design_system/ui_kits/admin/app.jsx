// app.jsx — top-level: chooses which module screen to render

function ModulePlaceholder({ module }) {
  return (
    <div className="splaceholder">
      <div className="sphead">
        <div>
          <h2 className="sphead__t">{module.label}</h2>
          <div className="sphead__crumbs"><span>Tổng quan</span><i className="ph ph-caret-right" /><b>{module.label}</b></div>
        </div>
      </div>
      <div className="card panel">
        <EmptyState
          illustration={module.icon}
          title={`Module ${module.label}`}
          subtitle="Phần này chưa có trong UI kit demo. Mở Marketing để xem flow tương tác đầy đủ khớp với production."
        />
      </div>
    </div>
  );
}

function App() {
  const [active, setActive] = React.useState("marketing");
  const module = MODULES.find((m) => m.id === active);

  let screen;
  if (active === "marketing")       screen = <Marketing />;
  else if (active === "customer")   screen = <Customers />;
  else if (active === "dashboard")  screen = <Dashboard />;
  else                              screen = <ModulePlaceholder module={module} />;

  return (
    <div className="sshell">
      <Sidebar active={active} onSelect={setActive} />
      <div className="sshell__main">
        <TopNav />
        <main className="sshell__work">{screen}</main>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
