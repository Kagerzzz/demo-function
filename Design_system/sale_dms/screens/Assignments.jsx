// Assignments.jsx — Phân ca: calendar grid + assignment modal

function AssignmentsScreen({ onOpenModal }) {
  const days = nextDays(7);
  const SHIFT_VARIANTS = {
    "Ca sáng": "pink",
    "Ca chiều": "blue",
    "Ca tối": "purple",
    "Ca cả ngày": "green",
  };
  // Mock calendar data per person/day
  function shiftsFor(empIdx, dayIdx) {
    const seed = (empIdx * 7 + dayIdx) % 6;
    if (seed === 0) return [{ name: "Ca sáng", time: "07:00 — 11:30", points: 8, route: "TBH-CG-01", status: "scheduled" }];
    if (seed === 1) return [
      { name: "Ca sáng", time: "07:00 — 11:30", points: 6, route: "TBH-CG-01", status: "doing" },
      { name: "Ca chiều", time: "13:30 — 17:30", points: 5, route: "TBH-DD-01", status: "scheduled" },
    ];
    if (seed === 2) return [{ name: "Ca chiều", time: "13:30 — 17:30", points: 7, route: "TBH-HBT-01", status: "done" }];
    if (seed === 3) return [{ name: "Ca cả ngày", time: "08:00 — 17:30", points: 12, route: "TBH-LB-01", status: "scheduled" }];
    if (seed === 4) return [];
    return [{ name: "Ca tối", time: "18:00 — 22:00", points: 4, route: "TBH-TX-01", status: "scheduled" }];
  }

  return (
    <div>
      <Crumbs items={[{ label: "Sale DMS" }, { label: "Phân ca" }]} />
      <PageHeader
        title="Phân ca"
        subtitle="Bảng lịch phân ca cho từng nhân viên sale. Bấm Phân ca để tạo lịch lặp hoặc phân thủ công."
        actions={(<>
          <Button variant="outline" icon="export">Xuất lịch</Button>
          <Button variant="outline" icon="copy">Sao chép tuần trước</Button>
          <Button variant="primary" icon="calendar-plus" onClick={onOpenModal}>Phân ca</Button>
        </>)}
      />

      <div className="dms-cal">
        <div className="dms-caltool">
          <div className="dms-caltool__l">
            <div className="dms-dropfield"><span>Khoảng:</span><b>{fmtDate(days[0])} — {fmtDate(days[6])}</b><i className="ph ph-caret-down" /></div>
            <div className="dms-segctrl">
              <button>Hôm nay</button>
              <button className="is-active">Tuần này</button>
              <button>Tuần sau</button>
              <button>Tháng này</button>
            </div>
            <div className="dms-dropfield"><span>Nhân viên:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
            <div className="dms-dropfield"><span>Nhóm sale:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
            <div className="dms-dropfield"><span>Tuyến:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
            <div className="dms-dropfield"><span>Trạng thái:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
          </div>
          <div className="dms-caltool__l">
            <span style={{ fontSize: 12, color: "var(--fg-secondary)" }}>Hiển thị:</span>
            <Legend />
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
                        {list.map((s, si) => (
                          <div key={si} className={"dms-shiftcard dms-shiftcard--" + SHIFT_VARIANTS[s.name] || "pink"}>
                            <div className="dms-shiftcard__t">
                              <span className="dms-shiftcard__n">{s.name}</span>
                              {s.status === "doing" && <span className="status status--blue" style={{ padding: "2px 6px", fontSize: 9 }}>Đang</span>}
                              {s.status === "done" && <span className="status status--green" style={{ padding: "2px 6px", fontSize: 9 }}>Xong</span>}
                            </div>
                            <span className="dms-shiftcard__time">{s.time}</span>
                            <div className="dms-shiftcard__meta">
                              <span><i className="ph ph-map-pin" />{s.points}</span>
                              <span><i className="ph ph-path" />{s.route}</span>
                            </div>
                          </div>
                        ))}
                        <button className="dms-cal__addbtn"><i className="ph ph-plus" />Thêm ca</button>
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

function Legend() {
  const items = [
    { c: "pink",   l: "Đã phân" },
    { c: "blue",   l: "Đang thực hiện" },
    { c: "green",  l: "Hoàn thành" },
    { c: "yellow", l: "Quá giờ" },
    { c: "gray",   l: "Không thực hiện" },
  ];
  return (
    <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap" }}>
      {items.map(it => (
        <span key={it.c} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--fg-secondary)" }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: ({
            pink: "var(--brand-pink)", blue: "var(--color-blue)", green: "var(--color-green)",
            yellow: "var(--color-yellow)", gray: "var(--stroke-medium)",
          })[it.c] }}></span>
          {it.l}
        </span>
      ))}
    </div>
  );
}

// ─── Modal phân ca ─────────────────────────────────────────
function AssignmentModal({ onClose }) {
  const [mode, setMode] = React.useState("repeat"); // repeat | manual
  const [openDays, setOpenDays] = React.useState({ 2: true, 4: true });
  const DOW = [
    { id: 2, label: "Thứ Hai" },
    { id: 3, label: "Thứ Ba" },
    { id: 4, label: "Thứ Tư" },
    { id: 5, label: "Thứ Năm" },
    { id: 6, label: "Thứ Sáu" },
    { id: 7, label: "Thứ Bảy" },
    { id: 8, label: "Chủ Nhật" },
  ];
  const toggle = (id) => setOpenDays(s => ({ ...s, [id]: !s[id] }));

  return (
    <div className="dms-modal-scrim" onClick={onClose}>
      <div className="dms-modal dms-modal--lg" onClick={(e) => e.stopPropagation()}>
        <header className="dms-modal__h">
          <div className="dms-modal__ht">
            <div className="dms-modal__t">Phân ca cho nhân viên sale</div>
            <div className="dms-modal__s">Tạo lịch lặp cố định theo tuần hoặc phân thủ công từng ngày.</div>
          </div>
          <button className="smodal__x" onClick={onClose}><i className="ph ph-x" /></button>
        </header>
        <div className="dms-modal__body">
          <div className="dms-stack">
            <SectionInModal title="1. Thông tin chung" icon="info">
              <div className="dms-fieldgrid">
                <div style={{ gridColumn: "1 / -1" }}>
                  <LF label="Nhân viên sale" req hint="Có thể chọn nhiều nhân viên cùng lúc">
                    <div className="dms-multiselect">
                      {SALES_TEAM.slice(0,3).map((s, i) => (
                        <span key={s.id} className="dms-chip">
                          <Avatar src={avSrc(s.avatar)} size={20} />
                          {s.name}
                          <span className="dms-chip__x"><i className="ph ph-x" /></span>
                        </span>
                      ))}
                      <input placeholder="Tìm nhân viên..." />
                    </div>
                  </LF>
                </div>
                <LF label="Từ ngày" req><input className="dms-input" defaultValue="01/06/2026" /></LF>
                <LF label="Đến ngày" req><input className="dms-input" defaultValue="30/06/2026" /></LF>
              </div>

              <div style={{ marginTop: 14 }}>
                <div className="dms-lf__l" style={{ marginBottom: 8 }}>Kiểu phân ca <span className="t-required">*</span></div>
                <div className="dms-radiocard-grp">
                  <div className={"dms-radiocard " + (mode === "repeat" ? "is-active" : "")} onClick={() => setMode("repeat")}>
                    <div className="dms-radiocard__bullet" />
                    <div>
                      <div className="dms-radiocard__t"><i className="ph ph-repeat" style={{ marginRight: 6 }} />Lịch lặp cố định</div>
                      <div className="dms-radiocard__s">Phân ca cố định theo các thứ trong tuần. Áp dụng lặp lại trong khoảng thời gian đã chọn.</div>
                    </div>
                  </div>
                  <div className={"dms-radiocard " + (mode === "manual" ? "is-active" : "")} onClick={() => setMode("manual")}>
                    <div className="dms-radiocard__bullet" />
                    <div>
                      <div className="dms-radiocard__t"><i className="ph ph-calendar-blank" style={{ marginRight: 6 }} />Phân thủ công</div>
                      <div className="dms-radiocard__s">Phân ca từng ngày cụ thể. Hệ thống sinh danh sách ngày để cấu hình ca cho mỗi ngày.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <LF label="Ghi chú">
                  <textarea className="dms-textarea" placeholder="Ghi chú chung cho lịch phân ca này..." />
                </LF>
              </div>
            </SectionInModal>

            <SectionInModal title={mode === "repeat" ? "2. Cấu hình lịch lặp theo tuần" : "2. Cấu hình từng ngày"} icon="calendar">
              {mode === "repeat" ? (
                <div className="dms-accordion">
                  {DOW.map((d) => {
                    const open = !!openDays[d.id];
                    const shiftCount = d.id === 2 ? 2 : d.id === 4 ? 1 : 0;
                    return (
                      <div key={d.id} className={"dms-acc-item " + (open ? "is-open" : "")}>
                        <div className="dms-acc-head" onClick={() => toggle(d.id)}>
                          <i className="ph ph-caret-right dms-acc-head__caret" />
                          <span className="dms-acc-head__t">{d.label}</span>
                          <div className="dms-acc-head__count">
                            {shiftCount > 0
                              ? <span className="status status--green">{shiftCount} ca</span>
                              : <span style={{ fontSize: 12, color: "var(--fg-secondary)" }}>Chưa cấu hình</span>}
                            <button className="sbtn sbtn--ghost" style={{ height: 30, padding: "0 8px", fontSize: 12 }} onClick={(e) => { e.stopPropagation(); }}>
                              <i className="ph ph-plus" />Thêm ca
                            </button>
                          </div>
                        </div>
                        {open ? (
                          <div className={"dms-acc-body " + (shiftCount === 0 ? "is-empty" : "")}>
                            {shiftCount > 0 ? <ShiftDayCards count={shiftCount} /> :
                              <div style={{ fontSize: 12, color: "var(--fg-secondary)", textAlign: "center", padding: 8 }}>
                                Chưa có ca nào cho {d.label.toLowerCase()}. Bấm <b>+ Thêm ca</b> để cấu hình.
                              </div>
                            }
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="dms-accordion">
                  {[0,1,2].map(i => {
                    const d = nextDays(1, i)[0];
                    const open = i < 2;
                    return (
                      <div key={i} className={"dms-acc-item " + (open ? "is-open" : "")}>
                        <div className="dms-acc-head" onClick={() => {}}>
                          <i className="ph ph-caret-right dms-acc-head__caret" />
                          <span className="dms-acc-head__t">{dowVi(d)}, {fmtDate(d)}</span>
                          <div className="dms-acc-head__count">
                            <span className="status status--green">1 ca</span>
                            <button className="sbtn sbtn--ghost" style={{ height: 30, padding: "0 8px", fontSize: 12 }}><i className="ph ph-plus" />Thêm ca</button>
                          </div>
                        </div>
                        {open ? <div className="dms-acc-body"><ShiftDayCards count={1} /></div> : null}
                      </div>
                    );
                  })}
                </div>
              )}
            </SectionInModal>

            <div className="dms-warning">
              <i className="ph ph-warning-circle" />
              <div>
                <b>Cảnh báo trùng ca:</b> Hệ thống phát hiện <b>Trần Thị Bình</b> đã được phân Ca chiều vào Thứ Tư (13:30 — 17:30) trong khoảng thời gian này.
                Bấm <span className="dms-soft-link">Xem chi tiết</span> để xử lý trước khi lưu.
              </div>
            </div>

            <SectionInModal title="3. Xem trước kết quả phân ca" icon="eye" hint="Tổng cộng <b>12 ca</b> sẽ được tạo cho <b>3 nhân viên</b> trong khoảng <b>30 ngày</b>">
              <div style={{ background: "var(--surface-muted)", borderRadius: 8, padding: 12, fontSize: 12, color: "var(--fg-secondary)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span>Mỗi tuần lặp lại 3 ca · Tổng <b>12 ca</b> trong tháng</span>
                  <Button variant="outline" icon="calendar"><span style={{ fontSize: 12 }}>Xem toàn bộ lịch</span></Button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
                  {nextDays(14).map((d, i) => {
                    const has = [0,2,4,7,9,11].includes(i);
                    return (
                      <div key={i} style={{
                        background: "#fff", border: "1px solid var(--stroke-base)", borderRadius: 6,
                        padding: 6, fontSize: 10, textAlign: "center", color: "var(--fg-secondary)",
                        opacity: has ? 1 : 0.5,
                      }}>
                        <div style={{ fontWeight: 600, color: "var(--fg-base)" }}>{dowVi(d)} {fmtDate(d)}</div>
                        {has ? <div style={{ marginTop: 4, padding: "2px 4px", background: "var(--surface-pink)", color: "var(--brand-pink)", borderRadius: 3, fontWeight: 600 }}>Ca sáng</div> : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </SectionInModal>
          </div>
        </div>
        <footer className="dms-modal__foot">
          <span style={{ fontSize: 12, color: "var(--fg-secondary)" }}>
            <i className="ph ph-info" style={{ marginRight: 4 }} />Hệ thống tự kiểm tra trùng ca khi lưu
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            <Button variant="outline" onClick={onClose}>Hủy</Button>
            <Button variant="outline" icon="eye">Xem trước</Button>
            <Button variant="primary" icon="check">Tạo lịch phân ca</Button>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ShiftDayCards({ count }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="dms-mini-shiftcard">
          <div className="dms-mini-shiftcard__h">
            <div className="dms-mini-shiftcard__t">
              <i className="ph ph-clock-clockwise" />Ca {i === 0 ? "sáng" : "chiều"}
              <span className="dms-shiftbadge">{i === 0 ? "07:00 — 11:30" : "13:30 — 17:30"}</span>
            </div>
            <button className="sbtn sbtn--outline sbtn--icon" style={{ height: 28, width: 28 }}><i className="ph ph-trash" style={{ color: "var(--color-red)" }} /></button>
          </div>
          <div className="dms-fieldgrid">
            <LF label="Ca làm việc" req>
              <select className="dms-select" defaultValue={i === 0 ? "Ca sáng" : "Ca chiều"}>
                <option>Ca sáng</option><option>Ca chiều</option><option>Ca tối</option><option>Ca cả ngày</option>
              </select>
            </LF>
            <LF label="Loại phân công" req>
              <select className="dms-select" defaultValue={i === 0 ? "Theo tuyến" : "Theo điểm bán"}>
                <option>Theo tuyến</option><option>Theo điểm bán</option>
              </select>
            </LF>
            {i === 0 ? (
              <div style={{ gridColumn: "1 / -1" }}>
                <LF label="Tuyến bán hàng" req>
                  <select className="dms-select">{ROUTES.map(r => <option key={r.id}>{r.code} — {r.name}</option>)}</select>
                </LF>
              </div>
            ) : null}
          </div>
          <div>
            <div className="dms-lf__l" style={{ marginBottom: 6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Danh sách điểm bán ({i === 0 ? 6 : 4})</span>
              <span style={{ fontSize: 11, color: "var(--fg-secondary)", fontWeight: 400 }}>Kéo để sắp xếp</span>
            </div>
            <div className="dms-pointlist">
              {OUTLETS.slice(0, i === 0 ? 4 : 3).map((p, pi) => (
                <div key={p.id} className="dms-pointlist__item">
                  <i className="ph ph-dots-six-vertical" style={{ color: "var(--fg-secondary)" }} />
                  <span className="dms-pointlist__order">{pi+1}</span>
                  <span className="dms-pointlist__name">{p.name}</span>
                  <span className="dms-pointlist__addr">{p.addr.split(",").slice(-2).join(",").trim()}</span>
                  <button className="dms-pointlist__x"><i className="ph ph-x" /></button>
                </div>
              ))}
              <button className="dms-cal__addbtn" style={{ marginTop: 4, height: 28 }}>
                <i className="ph ph-plus" />Thêm điểm bán
              </button>
            </div>
          </div>
          <LF label="Ghi chú cho ca">
            <input className="dms-input" placeholder="Ghi chú riêng cho ca này..." />
          </LF>
        </div>
      ))}
    </>
  );
}

Object.assign(window, { AssignmentsScreen, AssignmentModal });
