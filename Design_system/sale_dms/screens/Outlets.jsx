// Outlets.jsx — Danh sách điểm bán + Chi tiết điểm bán + Modal thêm/sửa

function OutletsList({ onView, onAdd }) {
  return (
    <div>
      <Crumbs items={[{ label: "Sale DMS" }, { label: "Điểm bán" }]} />
      <PageHeader
        title="Điểm bán"
        subtitle="Quản lý toàn bộ điểm bán trong hệ thống. Mỗi điểm bán liên kết với tuyến, người phụ trách và lịch chăm sóc."
        actions={(
          <>
            <Button variant="outline" icon="upload-simple">Nhập danh sách</Button>
            <Button variant="outline" icon="download-simple">Xuất Excel</Button>
            <Button variant="primary" icon="plus" onClick={onAdd}>Thêm điểm bán</Button>
          </>
        )}
      />

      <FilterBar
        search="Tìm theo tên, mã hoặc số điện thoại"
        dropdowns={[
          { label: "Nhóm điểm bán:", value: "Tất cả" },
          { label: "Tuyến:",         value: "Tất cả" },
          { label: "Người phụ trách:", value: "Tất cả" },
          { label: "Tỉnh/TP:",       value: "Hà Nội" },
          { label: "Trạng thái:",    value: "Hoạt động" },
        ]}
        right={<Button variant="outline" icon="funnel">Bộ lọc nâng cao</Button>}
      />

      <div className="dms-tablecard">
        <table className="dms-table">
          <thead>
            <tr>
              <th className="col-stt">STT</th>
              <th>Điểm bán</th>
              <th>Chủ cửa hàng</th>
              <th>Số điện thoại</th>
              <th>Nhóm</th>
              <th>Tuyến</th>
              <th>Người phụ trách</th>
              <th>Địa chỉ</th>
              <th>Trạng thái</th>
              <th className="col-act">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {OUTLETS.map((o, i) => (
              <tr key={o.id}>
                <td className="col-stt">{String(i + 1).padStart(2, "0")}</td>
                <td>
                  <div className="dms-outletcell">
                    <div className="dms-outletcell__thumb"><i className="ph ph-storefront" /></div>
                    <div className="dms-outletcell__t">
                      <span className="dms-outletcell__name dms-soft-link" onClick={() => onView(o)}>{o.name}</span>
                      <span className="dms-outletcell__code">{o.code}</span>
                    </div>
                  </div>
                </td>
                <td>{o.owner}</td>
                <td className="num nowrap">{o.phone}</td>
                <td>{o.group}</td>
                <td><span className="dms-shiftbadge"><i className="ph ph-path" />{o.route}</span></td>
                <td>
                  <span className="sperson">
                    <Avatar src={avSrc(i + 1)} size={24} name={o.mgr} />
                    {o.mgr}
                    {o.mgr2 ? <span style={{ color: "var(--fg-secondary)" }}> +1</span> : null}
                  </span>
                </td>
                <td style={{ maxWidth: 240, color: "var(--fg-secondary)" }}>{o.addr}</td>
                <td><Status tone={STATUS_TONES[o.status]}>{o.status}</Status></td>
                <td><RowActions onView={() => onView(o)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableFoot total={248} page={1} />
      </div>
    </div>
  );
}

function OutletDetail({ outlet, onBack, onEdit }) {
  const [tab, setTab] = React.useState("orders");
  return (
    <div className="dms-stack">
      <Crumbs items={[
        { label: "Sale DMS" },
        { label: "Điểm bán", onClick: onBack },
        { label: outlet.name },
      ]} />

      <div className="dms-detailhero">
        <div className="dms-detailhero__img"><i className="ph ph-storefront" /></div>
        <div className="dms-detailhero__b">
          <div className="dms-detailhero__t">
            {outlet.name}
            <span className="dms-detailhero__code">{outlet.code}</span>
            <Status tone={STATUS_TONES[outlet.status]}>{outlet.status}</Status>
          </div>
          <div className="dms-detailhero__meta">
            <span><b>{outlet.owner}</b> · Chủ cửa hàng</span>
            <span><i className="ph ph-phone" /> {outlet.phone}</span>
            <span><i className="ph ph-path" /> {outlet.route}</span>
            <span><i className="ph ph-tag" /> {outlet.group}</span>
          </div>
        </div>
        <div className="dms-detailhero__r">
          <Button variant="outline" icon="map-pin">Mở bản đồ</Button>
          <Button variant="outline" icon="chat-circle-text">Liên hệ</Button>
          <Button variant="primary" icon="pencil-simple" onClick={onEdit}>Sửa thông tin</Button>
        </div>
      </div>

      {/* Quick stats */}
      <div className="dms-kpis">
        <Kpi label="Doanh thu" value={vnd(48_650_000)} icon="trend-up" tone="green" delta={{ dir: "up", val: "+12,4%", note: "vs tháng trước" }} />
        <Kpi label="Công nợ" value={vnd(3_240_000)} icon="receipt-x" tone="red" delta={{ dir: "down", val: "-8,1%", note: "trong 30 ngày" }} />
        <Kpi label="Tổng đơn hàng" value="186" unit="đơn" icon="shopping-cart-simple" tone="blue" delta={{ dir: "up", val: "+9", note: "vs tháng trước" }} />
        <Kpi label="Check-in gần nhất" value="2 giờ trước" icon="map-pin-line" tone="pink" delta={{ dir: "flat", val: "09:42 Hôm nay", note: "" }} />
      </div>

      <div className="dms-row">
        <div style={{ flex: 1.6 }}>
          <Section title="Thông tin điểm bán" subtitle="Cập nhật lần cuối 14/05/2026 bởi Nguyễn Văn An">
            <div className="dms-kvgrid">
              <div className="dms-kv"><div className="dms-kv__l">Chủ cửa hàng</div><div className="dms-kv__v">{outlet.owner}</div></div>
              <div className="dms-kv"><div className="dms-kv__l">Số điện thoại</div><div className="dms-kv__v dms-text-num">{outlet.phone}</div></div>
              <div className="dms-kv"><div className="dms-kv__l">Nhóm điểm bán</div><div className="dms-kv__v">{outlet.group}</div></div>
              <div className="dms-kv"><div className="dms-kv__l">Tuyến bán hàng</div><div className="dms-kv__v">{outlet.route}</div></div>
              <div className="dms-kv">
                <div className="dms-kv__l">Người phụ trách</div>
                <div className="dms-kv__v">
                  <span className="sperson">
                    <Avatar src={avSrc(1)} size={22} />
                    {outlet.mgr}
                    {outlet.mgr2 ? <span style={{ color: "var(--fg-secondary)" }}>, {outlet.mgr2}</span> : null}
                  </span>
                </div>
              </div>
              <div className="dms-kv"><div className="dms-kv__l">Trạng thái</div><div className="dms-kv__v"><Status tone={STATUS_TONES[outlet.status]}>{outlet.status}</Status></div></div>
              <div className="dms-kv" style={{ gridColumn: "1 / -1" }}>
                <div className="dms-kv__l">Địa chỉ</div>
                <div className="dms-kv__v">{outlet.addr}</div>
              </div>
              <div className="dms-kv"><div className="dms-kv__l">Kinh độ</div><div className="dms-kv__v dms-text-num">{outlet.lng}</div></div>
              <div className="dms-kv"><div className="dms-kv__l">Vĩ độ</div><div className="dms-kv__v dms-text-num">{outlet.lat}</div></div>
            </div>

            <div className="dms-divider" />
            <div className="dms-kv__l" style={{ marginBottom: 10 }}>Hình ảnh điểm bán (4)</div>
            <div className="dms-gallery" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              {[1,2,3,4].map(i => <div key={i} className="dms-gallery__cell"><i className="ph ph-image" /></div>)}
              <div className="dms-gallery__cell dms-gallery__cell--add"><i className="ph ph-plus" /></div>
            </div>
          </Section>
        </div>
        <div style={{ flex: 1 }}>
          <Section title="Vị trí trên bản đồ" subtitle={`${outlet.lat}, ${outlet.lng}`} action={<Button variant="outline" icon="arrow-square-out">Mở rộng</Button>}>
            <MapPlaceholder
              pins={[{ x: 52, y: 50, label: "1" }]}
              style={{ height: 340 }}
            />
          </Section>
        </div>
      </div>

      <Tabs
        active={tab}
        onSelect={setTab}
        tabs={[
          { id: "orders",  icon: "shopping-bag-open", label: "Lịch sử đơn hàng", count: 24 },
          { id: "visits",  icon: "map-pin-line",      label: "Lịch sử chăm sóc", count: 18 },
          { id: "stock",   icon: "package",           label: "Tồn kho tại điểm bán", count: 12 },
        ]}
      />

      <div className="dms-tablecard dms-tablecard--solo" style={{ marginTop: -14, borderRadius: "0 0 8px 8px" }}>
        {tab === "orders" && <OutletOrdersTab />}
        {tab === "visits" && <OutletVisitsTab />}
        {tab === "stock"  && <OutletStockTab />}
      </div>
    </div>
  );
}

function OutletOrdersTab() {
  const rows = [
    { code: "DH-26052026-0142", total: 4_280_000, payStatus: "Đã thanh toán", payTone: "green",  by: "Nguyễn Văn An", at: "26/05/2026 09:48" },
    { code: "DH-25052026-0091", total: 2_640_000, payStatus: "Còn nợ",        payTone: "yellow", by: "Nguyễn Văn An", at: "25/05/2026 10:12" },
    { code: "DH-23052026-0072", total: 6_120_000, payStatus: "Đã thanh toán", payTone: "green",  by: "Trần Thị Bình", at: "23/05/2026 16:05" },
    { code: "DH-20052026-0035", total: 1_980_000, payStatus: "Đã thanh toán", payTone: "green",  by: "Nguyễn Văn An", at: "20/05/2026 09:22" },
    { code: "DH-18052026-0011", total: 3_750_000, payStatus: "Hủy đơn",       payTone: "red",    by: "Trần Thị Bình", at: "18/05/2026 14:40" },
  ];
  return (
    <table className="dms-table">
      <thead><tr>
        <th className="col-stt">STT</th>
        <th>Mã đơn</th>
        <th>Tổng thanh toán</th>
        <th>Trạng thái</th>
        <th>Người tạo đơn</th>
        <th>Ngày tạo</th>
        <th className="col-act">Thao tác</th>
      </tr></thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r.code}>
            <td className="col-stt">{String(i+1).padStart(2,"0")}</td>
            <td><span className="dms-shiftbadge"><i className="ph ph-receipt" />{r.code}</span></td>
            <td className="num"><b>{vnd(r.total)}</b></td>
            <td><Status tone={r.payTone}>{r.payStatus}</Status></td>
            <td><span className="sperson"><Avatar src={avSrc(i+1)} size={24} />{r.by}</span></td>
            <td className="num">{r.at}</td>
            <td><div className="dms-rowact"><button title="Xem"><i className="ph ph-eye" /></button></div></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function OutletVisitsTab() {
  const rows = [
    { date: "26/05/2026", by: "Nguyễn Văn An", ci: "09:42", co: "09:58", dur: "16 phút", rev: 4_280_000, ord: 1, note: "Bổ sung hàng tuần" },
    { date: "23/05/2026", by: "Trần Thị Bình", ci: "16:01", co: "16:30", dur: "29 phút", rev: 6_120_000, ord: 1, note: "Khuyến mãi tháng 5" },
    { date: "20/05/2026", by: "Nguyễn Văn An", ci: "09:18", co: "09:35", dur: "17 phút", rev: 1_980_000, ord: 1, note: "—" },
    { date: "18/05/2026", by: "Trần Thị Bình", ci: "14:36", co: "14:55", dur: "19 phút", rev: 0,         ord: 0, note: "Khách hàng bận, hẹn lại" },
    { date: "15/05/2026", by: "Nguyễn Văn An", ci: "09:50", co: "10:10", dur: "20 phút", rev: 3_460_000, ord: 1, note: "—" },
  ];
  return (
    <table className="dms-table">
      <thead><tr>
        <th className="col-stt">STT</th>
        <th>Ngày chăm sóc</th>
        <th>Người chăm sóc</th>
        <th>Check-in</th>
        <th>Check-out</th>
        <th>Thời gian</th>
        <th>Doanh thu</th>
        <th>Số đơn</th>
        <th>Ghi chú</th>
      </tr></thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td className="col-stt">{String(i+1).padStart(2,"0")}</td>
            <td className="num nowrap">{r.date}</td>
            <td><span className="sperson"><Avatar src={avSrc(i+1)} size={24} />{r.by}</span></td>
            <td>
              <span className="dms-shiftbadge" style={{ background: "var(--color-green-bg)", color: "var(--color-green)" }}>
                <i className="ph ph-sign-in" /> {r.ci}
              </span>
              <button title="Xem ảnh" className="sbtn sbtn--outline" style={{ height: 26, padding: "0 8px", marginLeft: 6, fontSize: 11 }}><i className="ph ph-image" /></button>
            </td>
            <td>
              <span className="dms-shiftbadge" style={{ background: "var(--surface-pink)", color: "var(--brand-pink)" }}>
                <i className="ph ph-sign-out" /> {r.co}
              </span>
              <button title="Xem ảnh" className="sbtn sbtn--outline" style={{ height: 26, padding: "0 8px", marginLeft: 6, fontSize: 11 }}><i className="ph ph-image" /></button>
            </td>
            <td className="num">{r.dur}</td>
            <td className="num"><b>{r.rev > 0 ? vnd(r.rev) : "—"}</b></td>
            <td className="num">{r.ord}</td>
            <td style={{ color: "var(--fg-secondary)" }}>{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function OutletStockTab() {
  const rows = [
    { code: "SP-001", name: "Nước ngọt Coca 330ml", qty: 84,  unit: "lon", last: "26/05/2026 09:48" },
    { code: "SP-002", name: "Nước suối Lavie 500ml", qty: 132, unit: "chai", last: "26/05/2026 09:48" },
    { code: "SP-003", name: "Bánh AFC mặn 200g", qty: 24,  unit: "hộp", last: "23/05/2026 16:05" },
    { code: "SP-004", name: "Sữa TH True Milk 110ml", qty: 6,   unit: "thùng", last: "20/05/2026 09:22", low: true },
    { code: "SP-005", name: "Mì Hảo Hảo tôm chua cay", qty: 96,  unit: "thùng", last: "23/05/2026 16:05" },
  ];
  return (
    <table className="dms-table">
      <thead><tr>
        <th className="col-stt">STT</th>
        <th>Mã SP</th>
        <th>Tên sản phẩm</th>
        <th>Tồn kho</th>
        <th>Cập nhật gần nhất</th>
        <th className="col-act">Thao tác</th>
      </tr></thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r.code}>
            <td className="col-stt">{String(i+1).padStart(2,"0")}</td>
            <td><span className="dms-text-num" style={{ fontSize: 12, color: "var(--fg-secondary)" }}>{r.code}</span></td>
            <td>{r.name}</td>
            <td className="num">
              <b>{fmtNum(r.qty)}</b> <span style={{ color: "var(--fg-secondary)" }}>{r.unit}</span>
              {r.low ? <Status tone="yellow" style={{ marginLeft: 8 }}>Tồn thấp</Status> : null}
            </td>
            <td className="num">{r.last}</td>
            <td><button className="sbtn sbtn--outline" style={{ height: 30, fontSize: 12 }}><i className="ph ph-arrow-clockwise" />Cập nhật</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ─── Outlet Modal (Add / Edit) — large form modal ───
function OutletFormModal({ open, onClose, outlet }) {
  if (!open) return null;
  const isEdit = !!outlet;
  return (
    <div className="dms-modal-scrim" onClick={onClose}>
      <div className="dms-modal dms-modal--lg" onClick={(e) => e.stopPropagation()}>
        <header className="dms-modal__h">
          <div className="dms-modal__ht">
            <div className="dms-modal__t">{isEdit ? "Sửa thông tin điểm bán" : "Thêm điểm bán mới"}</div>
            <div className="dms-modal__s">Điền đầy đủ thông tin để tạo điểm bán và gán vào tuyến phụ trách.</div>
          </div>
          <button className="smodal__x" onClick={onClose}><i className="ph ph-x" /></button>
        </header>
        <div className="dms-modal__body">
          <div className="dms-stack">
            <SectionInModal title="1. Thông tin cơ bản" icon="info">
              <div className="dms-fieldgrid">
                <LF label="Tên điểm bán" req><input className="dms-input" defaultValue={outlet?.name || ""} placeholder="Tạp hóa Hương Giang" /></LF>
                <LF label="Mã điểm bán" req><input className="dms-input" defaultValue={outlet?.code || ""} placeholder="DB-CG-1001" /></LF>
                <LF label="Tên chủ cửa hàng" req><input className="dms-input" defaultValue={outlet?.owner || ""} placeholder="Phạm Thị Hương" /></LF>
                <LF label="Số điện thoại" req><input className="dms-input" defaultValue={outlet?.phone || ""} placeholder="0912 345 678" /></LF>
                <LF label="Nhóm điểm bán" req>
                  <select className="dms-select" defaultValue={outlet?.group || ""}>
                    <option value="">— Chọn nhóm —</option>
                    {OUTLET_GROUPS.map(g => <option key={g}>{g}</option>)}
                  </select>
                </LF>
                <LF label="Tuyến bán hàng">
                  <select className="dms-select" defaultValue={outlet?.route || ""}>
                    <option value="">— Chọn tuyến —</option>
                    {ROUTES.map(r => <option key={r.id} value={r.code}>{r.code} — {r.name}</option>)}
                  </select>
                </LF>
                <LF label="Người phụ trách" req hint="Có thể chọn nhiều người">
                  <div className="dms-multiselect">
                    <span className="dms-chip">
                      <Avatar src={avSrc(1)} size={20} />
                      Nguyễn Văn An
                      <span className="dms-chip__x"><i className="ph ph-x" /></span>
                    </span>
                    <span className="dms-chip">
                      <Avatar src={avSrc(2)} size={20} />
                      Trần Thị Bình
                      <span className="dms-chip__x"><i className="ph ph-x" /></span>
                    </span>
                    <input placeholder="Thêm người..." />
                  </div>
                </LF>
                <LF label="Trạng thái" req>
                  <select className="dms-select" defaultValue={outlet?.status || "Hoạt động"}>
                    <option>Hoạt động</option><option>Tạm dừng</option><option>Đóng cửa</option>
                  </select>
                </LF>
              </div>
            </SectionInModal>

            <SectionInModal title="2. Hình ảnh điểm bán" icon="image" hint="Tối đa 10 ảnh, dung lượng &lt; 5MB/ảnh">
              <div className="dms-gallery" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
                {[1,2,3].map(i => (
                  <div key={i} className="dms-gallery__cell">
                    <i className="ph ph-image" />
                    <button style={{
                      position: "absolute", top: 4, right: 4, width: 22, height: 22,
                      borderRadius: 999, border: 0, background: "rgba(58,58,76,0.8)",
                      color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center"
                    }}><i className="ph ph-x" style={{ fontSize: 12 }} /></button>
                  </div>
                ))}
                <div className="dms-gallery__cell dms-gallery__cell--add" style={{ flexDirection: "column", gap: 4 }}>
                  <i className="ph ph-upload-simple" />
                  <span style={{ fontSize: 10 }}>Tải ảnh</span>
                </div>
              </div>
            </SectionInModal>

            <SectionInModal title="3. Vị trí điểm bán" icon="map-pin">
              <div className="dms-fieldgrid">
                <LF label="Quốc gia"><select className="dms-select"><option>Việt Nam</option></select></LF>
                <LF label="Tỉnh / Thành phố" req><select className="dms-select"><option>Hà Nội</option><option>TP. Hồ Chí Minh</option><option>Đà Nẵng</option></select></LF>
                <LF label="Quận / Huyện"><select className="dms-select"><option>Cầu Giấy</option></select></LF>
                <LF label="Phường / Xã"><select className="dms-select"><option>Quan Hoa</option></select></LF>
                <div style={{ gridColumn: "1 / -1" }}>
                  <LF label="Địa chỉ chi tiết" req>
                    <input className="dms-input" defaultValue={outlet?.addr || ""} placeholder="Số nhà, tên đường" />
                  </LF>
                </div>
                <LF label="Kinh độ"><input className="dms-input dms-text-num" defaultValue={outlet?.lng || ""} placeholder="105.7900" /></LF>
                <LF label="Vĩ độ"><input className="dms-input dms-text-num" defaultValue={outlet?.lat || ""} placeholder="21.0341" /></LF>
              </div>
              <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
                <Button variant="outline" icon="crosshair">Lấy vị trí hiện tại</Button>
                <Button variant="outline" icon="map-trifold">Chọn vị trí trên bản đồ</Button>
              </div>
              <div style={{ marginTop: 14 }}>
                <MapPlaceholder pins={[{ x: 50, y: 50, label: "•" }]} style={{ height: 220 }} />
              </div>
            </SectionInModal>
          </div>
        </div>
        <footer className="dms-modal__foot">
          <span style={{ fontSize: 12, color: "var(--fg-secondary)" }}>
            <i className="ph ph-info" style={{ marginRight: 4 }} />
            Các trường có dấu (<span className="t-required">*</span>) là bắt buộc
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            <Button variant="outline" onClick={onClose}>Hủy</Button>
            <Button variant="outline" icon="floppy-disk">Lưu nháp</Button>
            <Button variant="primary" icon="check">{isEdit ? "Cập nhật điểm bán" : "Tạo điểm bán"}</Button>
          </div>
        </footer>
      </div>
    </div>
  );
}

function SectionInModal({ title, icon, hint, children }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 8, background: "var(--surface-pink)", color: "var(--brand-pink)",
          display: "inline-flex", alignItems: "center", justifyContent: "center"
        }}><i className={"ph ph-" + icon} style={{ fontSize: 14 }} /></div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14 }}>{title}</div>
          {hint ? <div style={{ fontSize: 11, color: "var(--fg-secondary)", marginTop: 1 }} dangerouslySetInnerHTML={{ __html: hint }} /> : null}
        </div>
      </div>
      <div style={{ paddingLeft: 38 }}>{children}</div>
    </div>
  );
}

function LF({ label, req, hint, children }) {
  return (
    <div className="dms-lf">
      <div className="dms-lf__l">{label}{req ? <span className="req">*</span> : null}</div>
      {children}
      {hint ? <div className="dms-lf__hint">{hint}</div> : null}
    </div>
  );
}

Object.assign(window, { OutletsList, OutletDetail, OutletFormModal, LF, SectionInModal });
