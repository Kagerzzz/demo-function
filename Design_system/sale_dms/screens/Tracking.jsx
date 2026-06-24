// Tracking.jsx — Theo dõi công việc: calendar grid + drawer chi tiết ca

const TRACK_STATUS = {
  "scheduled": { label: "Chưa bắt đầu", tone: "gray",   variant: "gray" },
  "checkedin": { label: "Đã check-in",  tone: "blue",   variant: "blue" },
  "checkedout":{ label: "Đã check-out", tone: "cyan",   variant: "blue" },
  "done":      { label: "Hoàn thành",   tone: "green",  variant: "green" },
  "late":      { label: "Quá giờ",      tone: "yellow", variant: "yellow" },
  "skipped":   { label: "Không thực hiện", tone: "red", variant: "red" },
};

function TrackingScreen({ onOpenShift }) {
  const days = nextDays(7);
  function shiftsFor(empIdx, dayIdx) {
    const seed = (empIdx * 11 + dayIdx) % 7;
    if (seed === 0) return [{ name: "Ca sáng", time: "07:00 — 11:30", visited: 8, total: 8, rev: 5_280_000, ord: 5, st: "done" }];
    if (seed === 1) return [
      { name: "Ca sáng", time: "07:00 — 11:30", visited: 6, total: 8, rev: 3_140_000, ord: 3, st: "checkedout" },
      { name: "Ca chiều", time: "13:30 — 17:30", visited: 0, total: 5, rev: 0, ord: 0, st: "scheduled" },
    ];
    if (seed === 2) return [{ name: "Ca chiều", time: "13:30 — 17:30", visited: 4, total: 7, rev: 0, ord: 0, st: "checkedin" }];
    if (seed === 3) return [{ name: "Ca cả ngày", time: "08:00 — 17:30", visited: 11, total: 12, rev: 12_480_000, ord: 8, st: "done" }];
    if (seed === 4) return [];
    if (seed === 5) return [{ name: "Ca sáng", time: "07:00 — 11:30", visited: 2, total: 8, rev: 0, ord: 0, st: "late" }];
    return [{ name: "Ca chiều", time: "13:30 — 17:30", visited: 0, total: 5, rev: 0, ord: 0, st: "skipped" }];
  }

  return (
    <div>
      <Crumbs items={[{ label: "Sale DMS" }, { label: "Theo dõi công việc" }]} />
      <PageHeader
        title="Theo dõi công việc"
        subtitle="Theo dõi thực tế quá trình chăm sóc của sale theo từng ca, bao gồm check-in/check-out và doanh thu phát sinh."
        actions={(<>
          <Button variant="outline" icon="map-trifold">Xem trên bản đồ</Button>
          <Button variant="outline" icon="export">Xuất báo cáo</Button>
        </>)}
      />

      {/* Quick KPIs */}
      <div className="dms-kpis" style={{ marginBottom: 14 }}>
        <Kpi label="Ca hôm nay" value="18" unit="ca" icon="calendar-check" tone="pink" delta={{ dir: "flat", val: "12 hoàn thành", note: "/ 6 đang thực hiện" }} />
        <Kpi label="Check-in trễ" value="3" unit="ca" icon="clock-countdown" tone="yellow" delta={{ dir: "down", val: "-2", note: "vs hôm qua" }} />
        <Kpi label="Điểm bán đã ghé" value="86" unit="/ 124" icon="map-pin-line" tone="blue" delta={{ dir: "up", val: "+18%", note: "vs hôm qua" }} />
        <Kpi label="Doanh thu phát sinh" value={vnd(48_280_000)} icon="trend-up" tone="green" delta={{ dir: "up", val: "+12,4%", note: "" }} />
      </div>

      <div className="dms-cal">
        <div className="dms-caltool">
          <div className="dms-caltool__l">
            <div className="dms-dropfield"><span>Khoảng:</span><b>{fmtDate(days[0])} — {fmtDate(days[6])}</b><i className="ph ph-caret-down" /></div>
            <div className="dms-segctrl">
              <button>Hôm nay</button>
              <button className="is-active">7 ngày</button>
              <button>Tháng này</button>
            </div>
            <div className="dms-dropfield"><span>Nhân viên:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
            <div className="dms-dropfield"><span>Nhóm sale:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
            <div className="dms-dropfield"><span>Tuyến:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
            <div className="dms-dropfield"><span>Đơn hàng:</span><b>Có phát sinh</b><i className="ph ph-caret-down" /></div>
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          <table className="dms-caltbl">
            <thead>
              <tr>
                <th style={{ width: 220, textAlign: "left" }}>Nhân viên sale</th>
                {days.map((d, i) => (
                  <th key={i} className={"dms-cal__dayhead " + (isToday(d) ? "is-today" : "")}>
                    <div className="dms-cal__dow">{dowVi(d)}</div>
                    <div className="dms-cal__date">{fmtDate(d)}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SALES_TEAM.map((emp, ei) => (
                <tr key={emp.id}>
                  <td className="dms-cal__empname">
                    <div className="dms-emp">
                      <Avatar src={avSrc(emp.avatar)} size={36} name={emp.name} />
                      <div className="dms-emp__t">
                        <div className="dms-emp__n">{emp.name}</div>
                        <div className="dms-emp__c">{emp.code} · {emp.team}</div>
                      </div>
                    </div>
                  </td>
                  {days.map((d, di) => {
                    const list = shiftsFor(ei, di);
                    return (
                      <td key={di} className={"dms-cal__cell " + (isToday(d) ? "is-today" : "")}>
                        {list.map((s, si) => {
                          const st = TRACK_STATUS[s.st];
                          return (
                            <div
                              key={si}
                              className={"dms-shiftcard dms-shiftcard--" + st.variant}
                              onClick={() => onOpenShift && onOpenShift({ emp, date: d, shift: s, st })}
                            >
                              <div className="dms-shiftcard__t">
                                <span className="dms-shiftcard__n">{s.name}</span>
                                <span className={"status status--" + st.tone} style={{ padding: "2px 6px", fontSize: 9 }}>{st.label}</span>
                              </div>
                              <span className="dms-shiftcard__time">{s.time}</span>
                              <div className="dms-shiftcard__meta">
                                <span><i className="ph ph-map-pin" />{s.visited}/{s.total}</span>
                                {s.rev > 0 ? <span><i className="ph ph-coin-vertical" />{(s.rev/1_000_000).toFixed(1)}tr</span> : <span style={{ opacity: 0.5 }}>—</span>}
                                {s.ord > 0 ? <span><i className="ph ph-shopping-bag-open" />{s.ord}</span> : null}
                              </div>
                            </div>
                          );
                        })}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Drawer chi tiết ca ────────────────────────────────────
function TrackingDrawer({ data, onClose }) {
  if (!data) return null;
  const { emp, shift, date, st } = data;
  // Mock 5 visits
  const visits = [
    { name: "Tạp hóa Hương Giang", code: "DB-CG-1001", addr: "12 Cầu Giấy, Q. Cầu Giấy", ci: "07:18", co: "07:35", dur: "17ph", rev: 1_280_000, ord: 1, status: "done" },
    { name: "Siêu thị Mini Tâm Phát", code: "DB-CG-1002", addr: "45 Trần Thái Tông", ci: "07:48", co: "08:05", dur: "17ph", rev: 2_640_000, ord: 1, status: "done" },
    { name: "Tạp hóa Bà Lành", code: "DB-CG-1003", addr: "78 Xuân Thủy", ci: "08:22", co: "08:40", dur: "18ph", rev: 1_360_000, ord: 1, status: "done" },
    { name: "Cà phê Khánh An", code: "DB-CG-1004", addr: "101 Tôn Đức Thắng", ci: "09:14", co: "09:30", dur: "16ph", rev: 0, ord: 0, status: "noord" },
    { name: "Tạp hóa Mai Linh", code: "DB-CG-1005", addr: "55 Bạch Mai", ci: null, co: null, dur: "—", rev: 0, ord: 0, status: "pending" },
  ];

  return (
    <div className="dms-drawer-scrim" onClick={onClose}>
      <div className="dms-drawer" onClick={(e) => e.stopPropagation()}>
        <header className="dms-drawer__h">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h3 className="dms-drawer__t">{shift.name} · {shift.time}</h3>
              <Status tone={st.tone}>{st.label}</Status>
            </div>
            <div className="dms-drawer__sub">
              {dowVi(date)}, {fmtDate(date)}/{date.getFullYear()} · {emp.name} ({emp.code})
            </div>
          </div>
          <div className="dms-drawer__hr">
            <Button variant="outline" icon="map-trifold">Bản đồ</Button>
            <button className="smodal__x" onClick={onClose}><i className="ph ph-x" /></button>
          </div>
        </header>
        <div className="dms-drawer__body">
          {/* Summary */}
          <div className="dms-kvgrid">
            <div className="dms-kv"><div className="dms-kv__l">Tuyến</div><div className="dms-kv__v"><span className="dms-shiftbadge"><i className="ph ph-path" />TBH-CG-01</span> Tuyến Cầu Giấy 1</div></div>
            <div className="dms-kv"><div className="dms-kv__l">Điểm đã ghé</div><div className="dms-kv__v"><b className="dms-text-num">{shift.visited}/{shift.total}</b> điểm</div></div>
            <div className="dms-kv"><div className="dms-kv__l">Doanh thu</div><div className="dms-kv__v dms-text-num"><b>{vnd(shift.rev)}</b></div></div>
            <div className="dms-kv"><div className="dms-kv__l">Số đơn</div><div className="dms-kv__v dms-text-num"><b>{shift.ord}</b> đơn</div></div>
          </div>

          <div className="dms-divider" />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div className="dms-section__t">Hành trình chăm sóc</div>
            <div style={{ fontSize: 12, color: "var(--fg-secondary)" }}>5 điểm bán · 4 đã ghé · 1 chưa ghé</div>
          </div>

          {/* Mini map */}
          <MapPlaceholder
            style={{ height: 200, marginBottom: 14 }}
            pins={[
              { x: 18, y: 30, label: "1" },
              { x: 34, y: 50, label: "2" },
              { x: 50, y: 36, label: "3" },
              { x: 68, y: 56, label: "4" },
              { x: 84, y: 30, label: "5", idle: true },
            ]}
          />

          {/* Vertical timeline */}
          <div>
            {visits.map((v, i) => {
              const cls = v.status === "done" ? "is-done" : v.status === "pending" ? "is-skipped" : "is-done";
              return (
                <div key={i} className={"dms-vline " + cls}>
                  <div className="dms-vlhead">
                    <div className="dms-vlt">{i+1}. {v.name} <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: "var(--fg-secondary)", marginLeft: 6 }}>{v.code}</span></div>
                    <span className="dms-vltime">{v.ci ? v.ci + " → " + v.co : "Chưa ghé"}</span>
                  </div>
                  <div className="dms-vlb">
                    <div className="dms-vlmeta">
                      <span><i className="ph ph-map-pin" /> {v.addr}</span>
                      {v.dur !== "—" ? <span><i className="ph ph-timer" /> Thời gian: <b>{v.dur}</b></span> : null}
                    </div>
                    {v.status !== "pending" ? (
                      <>
                        <div className="dms-vlmeta">
                          <span>Doanh thu: <b className="dms-text-num">{v.rev > 0 ? vnd(v.rev) : "—"}</b></span>
                          <span>Số đơn: <b className="dms-text-num">{v.ord}</b></span>
                          {v.status === "noord" ? <Status tone="yellow">Không phát sinh đơn</Status> : null}
                        </div>
                        <div className="dms-vlmeta" style={{ alignItems: "center" }}>
                          <span style={{ color: "var(--fg-base)", fontWeight: 500 }}>Ảnh check-in / check-out:</span>
                          <div className="dms-vlphotos">
                            <div className="dms-vlphoto"><i className="ph ph-image" /><div className="dms-vlphoto__lbl">Check-in</div></div>
                            <div className="dms-vlphoto"><i className="ph ph-image" /><div className="dms-vlphoto__lbl">Check-out</div></div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div style={{ background: "var(--surface-muted)", borderRadius: 6, padding: "8px 10px", fontSize: 12, color: "var(--fg-secondary)" }}>
                        <i className="ph ph-clock" style={{ marginRight: 4 }} />Sale chưa ghé điểm bán này. Dự kiến 10:30 — 10:50.
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TrackingScreen, TrackingDrawer });
