// Customers.jsx — list screen with filters, table, create modal, detail drawer
const { useState: useStateC } = React;

const SEED = [
  { code: "KH-00231", name: "Công ty CP Hồng Hà",        date: "06/04",  team: "Kinh doanh 1", owner: 4, by: 4, status: "Hoạt động",  tone: "green",  amount: "1.250.000 đ" },
  { code: "KH-00230", name: "Nhà hàng Phở Thìn",          date: "05/04",  team: "Bán lẻ",       owner: 2, by: 5, status: "Đang xử lý",  tone: "cyan",   amount: "682.000 đ" },
  { code: "KH-00229", name: "Trần Thị Hương",             date: "05/04",  team: "Telesale",     owner: 1, by: 1, status: "Mới",         tone: "purple", amount: "—" },
  { code: "KH-00228", name: "Cafe Cộng - CN Tây Sơn",     date: "04/04",  team: "Kinh doanh 2", owner: 3, by: 4, status: "Hoạt động",   tone: "green",  amount: "3.420.000 đ" },
  { code: "KH-00227", name: "Lê Văn Đức",                 date: "04/04",  team: "Telesale",     owner: 1, by: 2, status: "Đang xử lý",  tone: "cyan",   amount: "—" },
  { code: "KH-00226", name: "Công ty TNHH Minh Quang",    date: "03/04",  team: "Đại lý",       owner: 5, by: 5, status: "Hoạt động",   tone: "green",  amount: "8.910.000 đ" },
  { code: "KH-00225", name: "Phạm Thị Bích",              date: "03/04",  team: "Telesale",     owner: 6, by: 6, status: "Tạm dừng",    tone: "yellow", amount: "—" },
  { code: "KH-00224", name: "Tiệm bánh Maison Marou",     date: "02/04",  team: "Bán lẻ",       owner: 2, by: 4, status: "Hoạt động",   tone: "green",  amount: "1.080.000 đ" },
  { code: "KH-00223", name: "Vũ Quang Hùng",              date: "02/04",  team: "Kinh doanh 1", owner: 4, by: 4, status: "Lỗi",         tone: "red",    amount: "—" },
  { code: "KH-00222", name: "Spa Hương Sen",              date: "01/04",  team: "Kinh doanh 2", owner: 3, by: 5, status: "Hoạt động",   tone: "green",  amount: "2.460.000 đ" },
];

const AV = (n) => `../../assets/avatars/avatar-${String(((n - 1) % 12) + 1).padStart(2, "0")}.jpg`;
const PEOPLE = [
  { name: "Nguyễn Văn An",   src: AV(4) },
  { name: "Phạm Thị Bình",   src: AV(2) },
  { name: "Trần Văn Cường",  src: AV(3) },
  { name: "Lê Thị Dung",     src: AV(1) },
  { name: "Phạm Văn Bình",   src: AV(5) },
  { name: "Đặng Thị Hà",     src: AV(6) },
];

function Customers() {
  const [rows, setRows] = useStateC(SEED);
  const [open, setOpen]  = useStateC(false);
  const [selected, setSelected] = useStateC(null);
  const [form, setForm] = useStateC({ name: "", team: "Kinh doanh 1", phone: "", email: "" });
  const [query, setQuery] = useStateC("");
  const [filter, setFilter] = useStateC("all");

  const visible = rows.filter((r) => {
    if (filter !== "all" && r.tone !== filter) return false;
    if (query && !r.name.toLowerCase().includes(query.toLowerCase()) && !r.code.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  function submit() {
    if (!form.name.trim()) return;
    const code = "KH-" + String(232 + (rows.length - SEED.length)).padStart(5, "0");
    const next = { code, name: form.name, date: "23/05", team: form.team, owner: 4, by: 4, status: "Mới", tone: "purple", amount: "—" };
    setRows([next, ...rows]);
    setForm({ name: "", team: "Kinh doanh 1", phone: "", email: "" });
    setOpen(false);
  }

  return (
    <div className="scust">
      {/* page header */}
      <div className="sphead">
        <div>
          <h2 className="sphead__t">Khách hàng</h2>
          <div className="sphead__crumbs"><span>Tổng quan</span><i className="ph ph-caret-right" /><span>Bán hàng</span><i className="ph ph-caret-right" /><b>Khách hàng</b></div>
        </div>
        <div className="sphead__actions">
          <Button variant="outline" icon="export">Xuất Excel</Button>
          <Button variant="outline" icon="upload-simple">Nhập danh sách</Button>
          <Button variant="primary" icon="plus" onClick={() => setOpen(true)}>Thêm khách hàng</Button>
        </div>
      </div>

      {/* filter strip */}
      <div className="sfilters card">
        <div className="sfilters__tabs">
          {[
            { id: "all",    label: "Tất cả",       count: rows.length },
            { id: "green",  label: "Hoạt động",    count: rows.filter(r => r.tone === "green").length },
            { id: "cyan",   label: "Đang xử lý",   count: rows.filter(r => r.tone === "cyan").length },
            { id: "purple", label: "Mới",          count: rows.filter(r => r.tone === "purple").length },
            { id: "yellow", label: "Tạm dừng",     count: rows.filter(r => r.tone === "yellow").length },
            { id: "red",    label: "Lỗi",          count: rows.filter(r => r.tone === "red").length },
          ].map((t) => (
            <button
              key={t.id}
              className={"sfilters__tab " + (filter === t.id ? "is-active" : "")}
              onClick={() => setFilter(t.id)}
            >
              {t.label} <span className="sfilters__count">{t.count}</span>
            </button>
          ))}
        </div>
        <div className="sfilters__right">
          <Field icon="magnifying-glass" placeholder="Tìm theo tên / mã khách hàng" value={query} onChange={setQuery} width={280} />
          <IconButton icon="funnel" title="Bộ lọc" />
          <IconButton icon="arrows-down-up" title="Sắp xếp" />
          <IconButton icon="gear" title="Cài đặt cột" />
        </div>
      </div>

      {/* table */}
      <div className="card">
        <table className="stable">
          <thead>
            <tr>
              <th style={{ width: 36 }}><span className="schk" /></th>
              <th>Mã</th>
              <th>Tên khách hàng</th>
              <th>Ngày tạo</th>
              <th>Phòng ban</th>
              <th>Phụ trách</th>
              <th>Người tạo</th>
              <th>Doanh thu</th>
              <th>Trạng thái</th>
              <th style={{ width: 90, textAlign: "right" }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => (
              <tr key={r.code} onClick={() => setSelected(r)} style={{ cursor: "pointer" }}>
                <td><span className="schk" onClick={(e) => e.stopPropagation()} /></td>
                <td className="t-mono">{r.code}</td>
                <td><b>{r.name}</b></td>
                <td>{r.date}</td>
                <td>{r.team}</td>
                <td><AvatarStack people={[PEOPLE[(r.owner - 1) % 6], PEOPLE[(r.owner) % 6], PEOPLE[(r.owner + 1) % 6], PEOPLE[(r.owner + 2) % 6]]} size={24} max={3} /></td>
                <td>
                  <span className="sperson">
                    <Avatar src={PEOPLE[(r.by - 1) % 6].src} name={PEOPLE[(r.by - 1) % 6].name} size={24} />
                    {PEOPLE[(r.by - 1) % 6].name}
                  </span>
                </td>
                <td className="t-mono">{r.amount}</td>
                <td><Status tone={r.tone}>{r.status}</Status></td>
                <td onClick={(e) => e.stopPropagation()} style={{ textAlign: "right" }}>
                  <span className="srowact">
                    <IconButton icon="pencil-simple" title="Sửa" variant="outline" />
                    <IconButton icon="dots-three-vertical" title="Khác" variant="outline" />
                  </span>
                </td>
              </tr>
            ))}
            {visible.length === 0 ? (
              <tr><td colSpan={10}>
                <EmptyState
                  illustration="../../assets/modules/customer.png"
                  title="Không có khách hàng khớp bộ lọc"
                  subtitle="Thử xóa từ khóa hoặc đổi bộ lọc trạng thái."
                  action={<Button variant="ghost" onClick={() => { setQuery(""); setFilter("all"); }}>Xóa bộ lọc</Button>}
                />
              </td></tr>
            ) : null}
          </tbody>
        </table>

        <footer className="spager">
          <div>1 – {visible.length} of {rows.length} items</div>
          <div className="spager__nums">
            <button className="spager__arrow"><i className="ph ph-caret-left" /></button>
            <span className="spager__num is-active">1</span>
            <span className="spager__num">2</span>
            <span className="spager__num">3</span>
            <span className="spager__num spager__dots">…</span>
            <span className="spager__num">12</span>
            <button className="spager__arrow"><i className="ph ph-caret-right" /></button>
          </div>
          <Button variant="outline" iconRight="caret-down">10 / trang</Button>
        </footer>
      </div>

      {/* CREATE MODAL */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Tạo khách hàng mới"
        width={560}
        footer={<>
          <Button variant="outline" onClick={() => setOpen(false)}>Hủy</Button>
          <Button variant="primary" icon="plus" onClick={submit}>Thêm</Button>
        </>}
      >
        <div className="sform">
          <LabeledField label="Tên khách hàng" required>
            <Field icon="user" placeholder="VD: Công ty CP Sao Mai" value={form.name} onChange={(v) => setForm({ ...form, name: v })} width="100%" />
          </LabeledField>
          <LabeledField label="Phòng ban" required>
            <Field icon="users-three" placeholder="Kinh doanh 1" value={form.team} onChange={(v) => setForm({ ...form, team: v })} iconRight="caret-down" width="100%" />
          </LabeledField>
          <LabeledField label="Số điện thoại">
            <Field icon="phone" placeholder="0987 123 456" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} width="100%" />
          </LabeledField>
          <LabeledField label="Email">
            <Field icon="envelope" placeholder="ten@congty.vn" value={form.email} onChange={(v) => setForm({ ...form, email: v })} width="100%" />
          </LabeledField>
          <div className="sform__hint"><i className="ph ph-info" /> Khách hàng được tạo sẽ ở trạng thái <b>Mới</b> và gán cho bạn.</div>
        </div>
      </Modal>

      {/* DETAIL DRAWER */}
      {selected ? (
        <aside className="sdrawer" onClick={() => setSelected(null)}>
          <div className="sdrawer__panel" onClick={(e) => e.stopPropagation()}>
            <header className="sdrawer__h">
              <div>
                <div className="t-small t-secondary">{selected.code}</div>
                <div className="sdrawer__title">{selected.name}</div>
              </div>
              <div className="sdrawer__hctrl">
                <Status tone={selected.tone}>{selected.status}</Status>
                <IconButton icon="x" variant="ghost" onClick={() => setSelected(null)} />
              </div>
            </header>
            <div className="sdrawer__tabs">
              <span className="is-active">Tổng quan</span>
              <span>Đơn hàng</span>
              <span>Liên hệ</span>
              <span>Ghi chú</span>
              <span>Lịch sử</span>
            </div>
            <div className="sdrawer__body">
              <div className="card panel">
                <div className="panel__title">Thông tin chung</div>
                <dl className="skv">
                  <dt>Phòng ban</dt><dd>{selected.team}</dd>
                  <dt>Ngày tạo</dt><dd>{selected.date} · Thứ Hai</dd>
                  <dt>Phụ trách</dt><dd><AvatarStack people={PEOPLE.slice(0, 4)} size={24} max={3} /></dd>
                  <dt>Người tạo</dt><dd><span className="sperson"><Avatar src={PEOPLE[(selected.by - 1) % 6].src} name="" size={24} />{PEOPLE[(selected.by - 1) % 6].name}</span></dd>
                  <dt>Doanh thu 30 ngày</dt><dd className="t-mono">{selected.amount}</dd>
                </dl>
              </div>
              <div className="card panel">
                <div className="panel__title">Đơn hàng gần đây</div>
                <ul className="sord">
                  <li><span className="sord__c">ĐH-08231</span><span>Ngày 06/04</span><Status tone="green">Đã giao</Status><span className="t-mono">1.250.000 đ</span></li>
                  <li><span className="sord__c">ĐH-08120</span><span>Ngày 28/03</span><Status tone="cyan">Đang giao</Status><span className="t-mono">682.000 đ</span></li>
                  <li><span className="sord__c">ĐH-08017</span><span>Ngày 17/03</span><Status tone="green">Đã giao</Status><span className="t-mono">3.420.000 đ</span></li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      ) : null}
    </div>
  );
}

Object.assign(window, { Customers });
