// Reports.jsx — Dashboard báo cáo Sale DMS

function ReportsScreen() {
  return (
    <div className="dms-stack">
      <Crumbs items={[{ label: "Sale DMS" }, { label: "Báo cáo" }]} />
      <PageHeader
        title="Báo cáo Sale DMS"
        subtitle="Tổng quan hiệu suất chăm sóc, doanh thu và lịch trình của đội ngũ sale."
        actions={(<>
          <Button variant="outline" icon="funnel">Bộ lọc</Button>
          <Button variant="outline" icon="export">Xuất Excel</Button>
          <Button variant="primary" icon="printer">In báo cáo</Button>
        </>)}
      />

      {/* Filter bar */}
      <div className="dms-filterbar" style={{ borderRadius: 8 }}>
        <div className="dms-dropfield"><span>Khoảng thời gian:</span><b>01/05 — 26/05/2026</b><i className="ph ph-caret-down" /></div>
        <div className="dms-segctrl" style={{ marginLeft: 6 }}>
          <button>Hôm nay</button>
          <button>Tuần này</button>
          <button className="is-active">Tháng này</button>
          <button>Tháng trước</button>
          <button>Quý này</button>
        </div>
        <div className="dms-dropfield"><span>Nhân viên:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
        <div className="dms-dropfield"><span>Nhóm sale:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
        <div className="dms-dropfield"><span>Tuyến:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
        <div className="dms-dropfield"><span>Khu vực:</span><b>Hà Nội</b><i className="ph ph-caret-down" /></div>
      </div>

      {/* KPI cards - row 1 */}
      <div className="dms-kpis dms-kpis--5">
        <Kpi label="Tổng doanh thu" value={vnd(842_580_000)} icon="trend-up" tone="green" delta={{ dir: "up", val: "+18,2%", note: "vs tháng trước" }} />
        <Kpi label="Tổng đơn hàng" value={fmtNum(1_284)} unit="đơn" icon="shopping-bag-open" tone="blue" delta={{ dir: "up", val: "+9,4%", note: "vs tháng trước" }} />
        <Kpi label="Điểm bán đã chăm sóc" value="218" unit="/ 248" icon="map-pin-line" tone="cyan" delta={{ dir: "up", val: "+12 điểm", note: "vs tháng trước" }} />
        <Kpi label="Lượt check-in" value={fmtNum(3_142)} icon="sign-in" tone="purple" delta={{ dir: "up", val: "+14,8%", note: "" }} />
        <Kpi label="Tỷ lệ hoàn thành" value="87,4" unit="%" icon="check-circle" tone="green" delta={{ dir: "up", val: "+3,1pp", note: "" }} />
      </div>

      {/* KPI cards - row 2 */}
      <div className="dms-kpis">
        <Kpi label="Điểm chưa ghé" value="30" unit="điểm" icon="map-pin-slash" tone="orange" delta={{ dir: "down", val: "-8", note: "vs tháng trước" }} />
        <Kpi label="Công nợ hiện tại" value={vnd(48_240_000)} icon="receipt-x" tone="red" delta={{ dir: "down", val: "-6,8%", note: "" }} />
        <Kpi label="DT trung bình / điểm bán" value={vnd(3_865_000)} icon="storefront" tone="pink" delta={{ dir: "up", val: "+5,2%", note: "" }} />
        <Kpi label="DT trung bình / sale" value={vnd(140_430_000)} icon="user-circle" tone="yellow" delta={{ dir: "up", val: "+11,4%", note: "" }} />
      </div>

      {/* Charts row 1 */}
      <div className="dms-charts2">
        <div className="dms-chartcard">
          <div className="dms-chartcard__h">
            <div>
              <div className="dms-chartcard__t">Doanh thu theo ngày</div>
              <div className="dms-chartcard__s">26 ngày · đơn vị triệu đồng</div>
            </div>
            <div className="dms-segctrl">
              <button className="is-active">Ngày</button>
              <button>Tuần</button>
              <button>Tháng</button>
            </div>
          </div>
          <LineChart />
        </div>
        <div className="dms-chartcard">
          <div className="dms-chartcard__h">
            <div>
              <div className="dms-chartcard__t">Tỷ lệ hoàn thành lịch trình</div>
              <div className="dms-chartcard__s">Tổng 1.420 ca</div>
            </div>
          </div>
          <DonutChart />
          <div className="dms-donut-legend">
            {[
              { l: "Hoàn thành",     v: "87,4%", c: "var(--color-green)" },
              { l: "Đang thực hiện", v: "6,2%",  c: "var(--color-blue)" },
              { l: "Quá giờ",        v: "4,1%",  c: "var(--color-yellow)" },
              { l: "Không thực hiện", v: "2,3%",  c: "var(--color-red)" },
            ].map((r, i) => (
              <div key={i} className="dms-donut-legend__row">
                <span className="dms-donut-legend__sw" style={{ background: r.c }}></span>
                <span className="dms-donut-legend__l">{r.l}</span>
                <span className="dms-donut-legend__v">{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts row 2 */}
      <div className="dms-charts2">
        <div className="dms-chartcard">
          <div className="dms-chartcard__h">
            <div>
              <div className="dms-chartcard__t">Doanh thu theo sale</div>
              <div className="dms-chartcard__s">Top 6 sale theo doanh thu tháng này · triệu đồng</div>
            </div>
          </div>
          <VBars
            labels={["N.V.An","T.T.Bình","L.V.Cường","P.T.Hà","H.M.Đức","Đ.Q.Khánh"]}
            values={[182, 164, 148, 132, 118, 96]}
          />
        </div>
        <div className="dms-chartcard">
          <div className="dms-chartcard__h">
            <div>
              <div className="dms-chartcard__t">Số lượt chăm sóc theo tuyến</div>
              <div className="dms-chartcard__s">Check-in + check-out · tháng này</div>
            </div>
          </div>
          <HBars rows={[
            { name: "Tuyến Cầu Giấy 2", v: 482, pct: 100 },
            { name: "Tuyến Cầu Giấy 1", v: 418, pct: 87 },
            { name: "Tuyến Hai Bà Trưng", v: 396, pct: 82 },
            { name: "Tuyến Long Biên", v: 368, pct: 76 },
            { name: "Tuyến Đống Đa 1", v: 312, pct: 65 },
            { name: "Tuyến Thanh Xuân", v: 286, pct: 59 },
            { name: "Tuyến Hà Đông", v: 198, pct: 41 },
          ]} />
        </div>
      </div>

      {/* Top outlets */}
      <Section title="Top điểm bán doanh thu cao" subtitle="10 điểm bán dẫn đầu tháng này" action={<Button variant="outline" icon="arrow-square-out">Xem tất cả</Button>} flush>
        <table className="dms-table">
          <thead><tr>
            <th className="col-stt">STT</th>
            <th>Điểm bán</th>
            <th>Tuyến</th>
            <th>Doanh thu</th>
            <th>Số đơn</th>
            <th>Công nợ</th>
            <th>Người phụ trách</th>
          </tr></thead>
          <tbody>
            {OUTLETS.slice(0, 8).map((o, i) => (
              <tr key={o.id}>
                <td className="col-stt">{String(i+1).padStart(2, "0")}</td>
                <td>
                  <div className="dms-outletcell">
                    <div className="dms-outletcell__thumb" style={{ width: 32, height: 32 }}><i className="ph ph-storefront" style={{ fontSize: 16 }} /></div>
                    <div className="dms-outletcell__t">
                      <span className="dms-outletcell__name">{o.name}</span>
                      <span className="dms-outletcell__code">{o.code}</span>
                    </div>
                  </div>
                </td>
                <td><span className="dms-shiftbadge"><i className="ph ph-path" />{o.route}</span></td>
                <td className="num"><b>{vnd((25 - i*2.4) * 1_000_000 | 0)}</b></td>
                <td className="num">{38 - i*3}</td>
                <td className="num" style={{ color: i < 3 ? "var(--color-red)" : "var(--fg-base)" }}>
                  {i < 3 ? vnd((4 - i*0.8) * 1_000_000 | 0) : "—"}
                </td>
                <td><span className="sperson"><Avatar src={avSrc(i+1)} size={22} />{o.mgr}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      {/* Sales performance */}
      <Section title="Hiệu suất sale" subtitle="Báo cáo chi tiết theo từng nhân viên · tháng này" flush>
        <table className="dms-table">
          <thead><tr>
            <th className="col-stt">STT</th>
            <th>Sale</th>
            <th>Ca phân</th>
            <th>Ca hoàn thành</th>
            <th>Tỷ lệ</th>
            <th>Điểm bán đã ghé</th>
            <th>Số đơn</th>
            <th>Doanh thu</th>
            <th>DT TB / điểm</th>
            <th>Check-in trễ</th>
            <th>Điểm bỏ qua</th>
          </tr></thead>
          <tbody>
            {SALES_TEAM.map((s, i) => {
              const assigned = 28 - i*2;
              const done = assigned - i;
              const pct = Math.round(done / assigned * 100);
              const visited = 184 - i*14;
              const orders = 76 - i*6;
              const revenue = (182 - i*16) * 1_000_000;
              return (
                <tr key={s.id}>
                  <td className="col-stt">{String(i+1).padStart(2, "0")}</td>
                  <td>
                    <span className="sperson">
                      <Avatar src={avSrc(s.avatar)} size={28} />
                      <span><div style={{ fontWeight: 600 }}>{s.name}</div><div style={{ fontSize: 11, color: "var(--fg-secondary)", fontFamily: "ui-monospace, monospace" }}>{s.code}</div></span>
                    </span>
                  </td>
                  <td className="num">{assigned}</td>
                  <td className="num">{done}</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 120 }}>
                      <div style={{ flex: 1, height: 6, background: "var(--surface-pink)", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ width: pct + "%", height: "100%", background: "var(--brand-gradient-h)" }}></div>
                      </div>
                      <span className="num" style={{ fontSize: 12, fontWeight: 600 }}>{pct}%</span>
                    </div>
                  </td>
                  <td className="num">{visited}</td>
                  <td className="num">{orders}</td>
                  <td className="num"><b>{vnd(revenue)}</b></td>
                  <td className="num">{vnd((revenue / visited) | 0)}</td>
                  <td className="num">{i === 0 ? "—" : <Status tone="yellow">{i} lần</Status>}</td>
                  <td className="num">{i < 2 ? "—" : <Status tone="red">{i - 1} điểm</Status>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Section>

      {/* Stock & Debt side by side */}
      <div className="dms-row">
        <Section title="Báo cáo tồn kho tại điểm bán" subtitle="Cảnh báo tồn thấp / tồn cao" action={<Button variant="outline" icon="arrow-square-out">Xem chi tiết</Button>} flush>
          <table className="dms-table">
            <thead><tr>
              <th className="col-stt">STT</th>
              <th>Điểm bán</th>
              <th>Sản phẩm</th>
              <th>Tồn</th>
              <th>Cảnh báo</th>
            </tr></thead>
            <tbody>
              {[
                { o: "Tạp hóa Hương Giang", sp: "Sữa TH True Milk", qty: "6 thùng",  warn: "low" },
                { o: "Siêu thị Mini Tâm Phát", sp: "Mì Hảo Hảo",   qty: "240 thùng", warn: "high" },
                { o: "Tạp hóa Bà Lành",       sp: "Nước suối Lavie", qty: "4 thùng",   warn: "low" },
                { o: "Cà phê Khánh An",       sp: "Coca 330ml",    qty: "8 lon",     warn: "low" },
                { o: "Nhà hàng Hương Sen",    sp: "Bia Tiger 330ml", qty: "180 thùng", warn: "high" },
              ].map((r, i) => (
                <tr key={i}>
                  <td className="col-stt">{String(i+1).padStart(2, "0")}</td>
                  <td style={{ fontWeight: 500 }}>{r.o}</td>
                  <td>{r.sp}</td>
                  <td className="num"><b>{r.qty}</b></td>
                  <td>
                    {r.warn === "low"
                      ? <Status tone="yellow">Tồn thấp</Status>
                      : <Status tone="red">Tồn cao</Status>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
        <Section title="Báo cáo công nợ điểm bán" subtitle="Sắp xếp theo công nợ quá hạn" action={<Button variant="outline" icon="arrow-square-out">Xem chi tiết</Button>} flush>
          <table className="dms-table">
            <thead><tr>
              <th className="col-stt">STT</th>
              <th>Điểm bán</th>
              <th>Tuyến</th>
              <th>Tổng nợ</th>
              <th>Quá hạn</th>
            </tr></thead>
            <tbody>
              {[
                { o: "Tạp hóa Hương Giang", code: "DB-CG-1001", route: "TBH-CG-01", debt: 8_240_000, over: 3_120_000 },
                { o: "Cà phê Khánh An",     code: "DB-DD-2001", route: "TBH-DD-01", debt: 6_180_000, over: 6_180_000 },
                { o: "Tạp hóa Anh Tú",      code: "DB-LB-4002", route: "TBH-LB-01", debt: 5_640_000, over: 2_240_000 },
                { o: "Siêu thị Tâm Phát",   code: "DB-CG-1002", route: "TBH-CG-01", debt: 4_320_000, over: 0 },
                { o: "Nhà hàng Hương Sen",  code: "DB-DD-2002", route: "TBH-DD-01", debt: 3_180_000, over: 1_120_000 },
              ].map((r, i) => (
                <tr key={i}>
                  <td className="col-stt">{String(i+1).padStart(2, "0")}</td>
                  <td>
                    <div style={{ fontWeight: 500 }}>{r.o}</div>
                    <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: "var(--fg-secondary)" }}>{r.code}</div>
                  </td>
                  <td><span className="dms-shiftbadge"><i className="ph ph-path" />{r.route}</span></td>
                  <td className="num"><b>{vnd(r.debt)}</b></td>
                  <td className="num">
                    {r.over > 0 ? <span style={{ color: "var(--color-red)", fontWeight: 600 }}>{vnd(r.over)}</span> : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </div>
    </div>
  );
}

// ─── Charts ─────────────────────────────────────────────────
function LineChart() {
  const data = [38, 42, 36, 48, 55, 62, 58, 65, 72, 68, 75, 82, 78, 85, 92, 88, 94, 102, 96, 108, 115, 122, 118, 124, 132, 128];
  const W = 720, H = 200, PAD_L = 32, PAD_R = 8, PAD_T = 10, PAD_B = 24;
  const innerW = W - PAD_L - PAD_R;
  const innerH = H - PAD_T - PAD_B;
  const max = 140;
  const pts = data.map((v, i) => {
    const x = PAD_L + (i / (data.length - 1)) * innerW;
    const y = PAD_T + (1 - v / max) * innerH;
    return [x, y];
  });
  const path = pts.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
  const area = `${path} L${pts[pts.length-1][0]},${PAD_T + innerH} L${PAD_L},${PAD_T + innerH} Z`;
  const yTicks = [0, 35, 70, 105, 140];
  return (
    <div className="dms-linechart">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="dmsLineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fd65af" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#fe8377" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {yTicks.map((v, i) => {
          const y = PAD_T + (1 - v / max) * innerH;
          return (
            <g key={i}>
              <line x1={PAD_L} y1={y} x2={W - PAD_R} y2={y} className="dms-linechart__grid" />
              <text x={PAD_L - 6} y={y + 3} textAnchor="end" className="dms-linechart__axis">{v}</text>
            </g>
          );
        })}
        <path d={area} className="dms-linechart__area" />
        <path d={path} className="dms-linechart__line" />
        {pts.filter((_, i) => i % 3 === 0).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" className="dms-linechart__dot" />
        ))}
        {[0, 6, 12, 18, 24].map((i) => {
          const x = PAD_L + (i / (data.length - 1)) * innerW;
          return <text key={i} x={x} y={H - 6} textAnchor="middle" className="dms-linechart__axis">{(i+1).toString().padStart(2,"0")}/05</text>;
        })}
      </svg>
    </div>
  );
}

function DonutChart() {
  // 87.4 / 6.2 / 4.1 / 2.3
  const C = 80, S = 18; // center radius
  const segs = [
    { v: 87.4, c: "#068b00" },
    { v: 6.2,  c: "#0069e1" },
    { v: 4.1,  c: "#cc9900" },
    { v: 2.3,  c: "#ff4b4b" },
  ];
  let off = -25; // start at top
  const total = 100;
  const r = 70;
  const cx = 90, cy = 90;
  function arc(start, end) {
    const a0 = (start / total) * 2 * Math.PI;
    const a1 = (end / total) * 2 * Math.PI;
    const x0 = cx + Math.cos(a0) * r;
    const y0 = cy + Math.sin(a0) * r;
    const x1 = cx + Math.cos(a1) * r;
    const y1 = cy + Math.sin(a1) * r;
    const large = end - start > 50 ? 1 : 0;
    return `M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${large} 1 ${x1},${y1} Z`;
  }
  let cursor = -25; // start position offset
  return (
    <div className="dms-donut">
      <svg viewBox="0 0 180 180" style={{ width: "100%", height: "100%" }}>
        {segs.map((s, i) => {
          const start = cursor;
          const end = cursor + s.v;
          cursor = end;
          return <path key={i} d={arc(start, end)} fill={s.c} />;
        })}
        <circle cx={cx} cy={cy} r={42} fill="#fff" />
      </svg>
      <div className="dms-donut__center">
        <div className="dms-donut__pct">87,4%</div>
        <div className="dms-donut__lbl">Hoàn thành</div>
      </div>
    </div>
  );
}

function VBars({ labels, values }) {
  const max = Math.max(...values);
  return (
    <div>
      <div className="dms-vbars">
        {values.map((v, i) => (
          <div key={i} className="dms-vbars__col">
            <div className="dms-vbars__bar">
              <div className="dms-vbars__fill" style={{ height: (v / max * 100) + "%" }}>
                <div style={{ textAlign: "center", color: "#fff", fontSize: 10, fontWeight: 700, paddingTop: 4 }}>{v}</div>
              </div>
            </div>
            <div className="dms-vbars__lbl">{labels[i]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HBars({ rows }) {
  return (
    <div className="dms-hbar">
      {rows.map((r, i) => (
        <div key={i} className="dms-hbar__row">
          <span className="dms-hbar__name">{r.name}</span>
          <span className="dms-hbar__track"><span className="dms-hbar__fill" style={{ width: r.pct + "%" }}></span></span>
          <span className="dms-hbar__val">{fmtNum(r.v)}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { ReportsScreen });
