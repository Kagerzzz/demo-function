// app.jsx — main router

function App() {
  // Top-level route: which Sale DMS menu
  const [nav, setNav] = React.useState("outlets");

  // Per-section sub-state
  const [outletView, setOutletView] = React.useState({ mode: "list", outlet: null });
  const [outletModal, setOutletModal] = React.useState(false);
  const [routeView, setRouteView] = React.useState({ mode: "list", route: null });
  const [assignModal, setAssignModal] = React.useState(false);
  const [trackDrawer, setTrackDrawer] = React.useState(null);

  // Map nav id → screen
  let screen;
  if (nav === "outlets") {
    if (outletView.mode === "detail" && outletView.outlet) {
      screen = (
        <OutletDetail
          outlet={outletView.outlet}
          onBack={() => setOutletView({ mode: "list", outlet: null })}
          onEdit={() => setOutletModal(true)}
        />
      );
    } else {
      screen = (
        <OutletsList
          onView={(o) => setOutletView({ mode: "detail", outlet: o })}
          onAdd={() => setOutletModal(true)}
        />
      );
    }
  } else if (nav === "routes") {
    if (routeView.mode === "detail" && routeView.route) {
      screen = <RouteDetail route={routeView.route} onBack={() => setRouteView({ mode: "list", route: null })} />;
    } else {
      screen = <RoutesList onView={(r) => setRouteView({ mode: "detail", route: r })} onAdd={() => {}} />;
    }
  } else if (nav === "shifts") {
    screen = <ShiftsList onAdd={() => {}} />;
  } else if (nav === "assignments") {
    screen = <AssignmentsScreen onOpenModal={() => setAssignModal(true)} />;
  } else if (nav === "tracking") {
    screen = <TrackingScreen onOpenShift={(d) => setTrackDrawer(d)} />;
  } else if (nav === "reports") {
    screen = <ReportsScreen />;
  }

  // When switching nav, reset sub-states
  const selectNav = (id) => {
    setNav(id);
    setOutletView({ mode: "list", outlet: null });
    setRouteView({ mode: "list", route: null });
  };

  return (
    <div className="dms-shell">
      <DmsSidebar />
      <DmsSubNav active={nav} onSelect={selectNav} />
      <div className="dms-main">
        <DmsTopnav />
        <main className="dms-work">{screen}</main>
      </div>

      <OutletFormModal
        open={outletModal}
        outlet={outletView.mode === "detail" ? outletView.outlet : null}
        onClose={() => setOutletModal(false)}
      />
      {assignModal ? <AssignmentModal onClose={() => setAssignModal(false)} /> : null}
      {trackDrawer ? <TrackingDrawer data={trackDrawer} onClose={() => setTrackDrawer(null)} /> : null}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
