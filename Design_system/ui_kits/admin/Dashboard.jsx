// Dashboard.jsx — module landing for the "Tổng quan" view
const { useMemo: useMemoD } = React;

function StatCard({ icon, label, value, delta, tone = "green" }) {
  return (
    <div className="sstat">
      <div className="sstat__row">
        <div className="sstat__icon" style={{ background: "var(--surface-pink)", color: "var(--brand-pink)" }}>
          <i className={"ph ph-" + icon} />
        </div>
        <div className="sstat__delta" style={{ color: tone === "green" ? "var(--color-green)" : "var(--color-red)" }}>
          <i className={"ph ph-" + (tone === "green" ? "trend-up" : "trend-down")} />
          {delta}
        </div>
      </div>
      <div className="sstat__value">{value}</div>
      <div className="sstat__label">{label}</div>
    </div>
  );
}

function MiniBar({ data }) {
  const max = Math.max(...data);
  return (
    <div className="sbars">
      {data.map((v, i) => (
        <div key={i} className="sbars__col">
          <div className="sbars__bar" style={{ height: `${(v / max) * 100}%` }} />
        </div>
      ))}
    </div>
  );
}

function Dashboard() {
  const recent = [
    { who: { name: "Nguyễn Văn An",   src: "../../assets/avatars/avatar-04.jpg" }, action: "đã tạo khách hàng mới",          tgt: "Công ty Hồng Hà",        when: "5 phút trước" },
    { who: { name: "Phạm Thị Bình",   src: "../../assets/avatars/avatar-02.jpg" }, action: "cập nhật đơn hàng",                tgt: "#ĐH-08231",              when: "12 phút trước" },
    { who: { name: "Trần Văn Cường",  src: "../../assets/avatars/avatar-03.jpg" }, action: "đóng phiếu xuất kho",              tgt: "Kho Hà Nội · #X-2104",   when: "1 giờ trước" },
    { who: { name: "Lê Thị Dung",     src: "../../assets/avatars/avatar-01.jpg" }, action: "thêm 4 nhân viên vào phòng ban",   tgt: "Kinh doanh 1",           when: "2 giờ trước" },
    { who: { name: "Phạm Văn Bình",   src: "../../assets/avatars/avatar-05.jpg" }, action: "duyệt báo giá",                    tgt: "BG-00417",               when: "Hôm qua, 17:42" },
  ];

  return (
    <div className="sdash">
      <section className="sstats">
        <StatCard icon="users-three"   label="Khách hàng mới (30 ngày)" value="248"     delta="+12,5%" tone="green" />
        <StatCard icon="shopping-bag"  label="Đơn hàng tháng này"        value="1.524"  delta="+4,2%"  tone="green" />
        <StatCard icon="currency-circle-dollar" label="Doanh thu tháng (VNĐ)" value="2,18 tỷ"  delta="−1,8%" tone="red" />
        <StatCard icon="package"       label="Tồn kho (SKU)"            value="3.412"  delta="+18"    tone="green" />
      </section>

      <section className="scards">
        <div className="card panel">
          <header className="panel__h">
            <div>
              <div className="panel__title">Doanh thu 7 ngày</div>
              <div className="panel__sub">Tổng: 412,5 triệu VNĐ</div>
            </div>
            <Button variant="ghost" iconRight="caret-down">7 ngày</Button>
          </header>
          <MiniBar data={[42, 58, 61, 73, 49, 65, 84]} />
          <div className="sbars__labels">
            <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>
          </div>
        </div>

        <div className="card panel">
          <header className="panel__h">
            <div>
              <div className="panel__title">Top phòng ban</div>
              <div className="panel__sub">Theo doanh số tháng này</div>
            </div>
            <Button variant="ghost" iconRight="caret-down">Tháng này</Button>
          </header>
          <ul className="srank">
            {[
              { n: "Kinh doanh 1",  v: "612 triệu", pct: 100 },
              { n: "Kinh doanh 2",  v: "498 triệu", pct: 81 },
              { n: "Bán lẻ",        v: "342 triệu", pct: 56 },
              { n: "Telesale",      v: "218 triệu", pct: 36 },
              { n: "Đại lý",        v: " 92 triệu", pct: 15 },
            ].map((r) => (
              <li key={r.n}>
                <span className="srank__n">{r.n}</span>
                <span className="srank__bar"><span style={{ width: r.pct + "%" }} /></span>
                <span className="srank__v">{r.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="scards">
        <div className="card panel" style={{ gridColumn: "1 / -1" }}>
          <header className="panel__h">
            <div>
              <div className="panel__title">Hoạt động gần đây</div>
              <div className="panel__sub">5 mục mới nhất</div>
            </div>
            <Button variant="outline" iconRight="caret-right">Xem tất cả</Button>
          </header>
          <ul className="sfeed">
            {recent.map((r, i) => (
              <li key={i}>
                <Avatar src={r.who.src} name={r.who.name} size={32} />
                <div className="sfeed__txt">
                  <div><b>{r.who.name}</b> {r.action} <b>{r.tgt}</b></div>
                  <div className="sfeed__when">{r.when}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Dashboard });
