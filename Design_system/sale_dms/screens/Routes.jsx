// Routes.jsx — Danh sách tuyến + Chi tiết tuyến với timeline điểm bán

function RoutesList({ onView, onAdd }) {
  return (
    <div>
      <Crumbs items={[{ label: "Sale DMS" }, { label: "Tuyến bán hàng" }]} />
      <PageHeader
        title="Tuyến bán hàng"
        subtitle="Định nghĩa các tuyến đi và gán điểm bán vào tuyến. Mỗi tuyến có thứ tự ghé thăm rõ ràng."
        actions={(<>
          <Button variant="outline" icon="map-trifold">Xem trên bản đồ</Button>
          <Button variant="primary" icon="plus" onClick={onAdd}>Thêm tuyến mới</Button>
        </>)}
      />
      <FilterBar
        search="Tìm theo tên hoặc mã tuyến"
        dropdowns={[
          { label: "Người phụ trách:", value: "Tất cả" },
          { label: "Trạng thái:", value: "Hoạt động" },
        ]}
      />
      <div className="dms-tablecard">
        <table className="dms-table">
          <thead><tr>
            <th className="col-stt">STT</th>
            <th>Mã tuyến</th>
            <th>Tên tuyến</th>
            <th>Mô tả</th>
            <th>Số điểm bán</th>
            <th>Người phụ trách</th>
            <th>Trạng thái</th>
            <th className="col-act">Thao tác</th>
          </tr></thead>
          <tbody>
            {ROUTES.map((r, i) => (
              <tr key={r.id}>
                <td className="col-stt">{String(i+1).padStart(2,"0")}</td>
                <td><span className="dms-shiftbadge"><i className="ph ph-path" />{r.code}</span></td>
                <td><span className="dms-soft-link" onClick={() => onView(r)} style={{ fontWeight: 600 }}>{r.name}</span></td>
                <td style={{ color: "var(--fg-secondary)" }}>{r.desc}</td>
                <td className="num"><b>{r.outlets}</b> điểm</td>
                <td><span className="sperson"><Avatar src={avSrc(i+1)} size={24} />{r.mgr}</span></td>
                <td><Status tone={STATUS_TONES[r.status]}>{r.status}</Status></td>
                <td><RowActions onView={() => onView(r)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableFoot total={32} pages={4} />
      </div>
    </div>
  );
}

function RouteDetail({ route, onBack }) {
  const [showAdd, setShowAdd] = React.useState(false);
  // Use a slice of outlets for this route's timeline
  const points = OUTLETS.slice(0, 7);
  return (
    <div className="dms-stack">
      <Crumbs items={[
        { label: "Sale DMS" },
        { label: "Tuyến bán hàng", onClick: onBack },
        { label: route.name },
      ]} />

      <div className="dms-detailhero">
        <div className="dms-detailhero__img" style={{ background: "var(--surface-highlight)", color: "var(--color-blue)" }}>
          <i className="ph ph-path" />
        </div>
        <div className="dms-detailhero__b">
          <div className="dms-detailhero__t">
            {route.name}
            <span className="dms-detailhero__code">{route.code}</span>
            <Status tone={STATUS_TONES[route.status]}>{route.status}</Status>
          </div>
          <div className="dms-detailhero__meta">
            <span><i className="ph ph-map-pin" /><b style={{ marginLeft: 4 }}>{route.outlets}</b> điểm bán</span>
            <span><i className="ph ph-users-three" /> Phụ trách: <b>{route.mgr}</b></span>
            <span style={{ maxWidth: 360 }}>{route.desc}</span>
          </div>
        </div>
        <div className="dms-detailhero__r">
          <Button variant="outline" icon="trash">Xóa tuyến</Button>
          <Button variant="primary" icon="pencil-simple">Sửa tuyến</Button>
        </div>
      </div>

      <div className="dms-row" style={{ alignItems: "flex-start" }}>
        <div style={{ flex: 1.2 }}>
          <Section
            title={`Điểm bán trong tuyến (${points.length})`}
            subtitle="Kéo thả để sắp xếp lại thứ tự ghé thăm trong ngày"
            action={(<>
              <Button variant="outline" icon="funnel">Lọc</Button>
              <Button variant="primary" icon="plus" onClick={() => setShowAdd(true)}>Thêm điểm bán vào tuyến</Button>
            </>)}
          >
            <div className="dms-timeline">
              {points.map((p, i) => (
                <div key={p.id} className="dms-tlitem">
                  <div className="dms-tlspine" />
                  <div className="dms-tlnum">{i+1}</div>
                  <div className="dms-tlcard">
                    <span className="dms-tldrag" title="Kéo để sắp xếp"><i className="ph ph-dots-six-vertical" /></span>
                    <div className="dms-outletcell__thumb" style={{ width: 36, height: 36 }}><i className="ph ph-storefront" style={{ fontSize: 18 }} /></div>
                    <div className="dms-tlcard__b">
                      <div className="dms-tlcard__name">
                        {p.name} <span className="dms-code">{p.code}</span>
                        <Status tone={STATUS_TONES[p.status]}>{p.status}</Status>
                      </div>
                      <div className="dms-tlcard__meta">
                        <span><i className="ph ph-map-pin" />{p.addr}</span>
                        <span><i className="ph ph-user" />{p.mgr}</span>
                      </div>
                    </div>
                    <div className="dms-tlcard__r">
                      <Avatar src={avSrc(i+1)} size={24} />
                      <button className="sbtn sbtn--outline sbtn--icon" title="Xem chi tiết"><i className="ph ph-arrow-right" /></button>
                      <button className="sbtn sbtn--outline sbtn--icon" title="Xóa khỏi tuyến" style={{ borderColor: "var(--color-red-bg)" }}><i className="ph ph-x" style={{ color: "var(--color-red)" }} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
        <div style={{ flex: 1 }}>
          <Section title="Bản đồ tuyến" subtitle="Lộ trình đề xuất theo thứ tự điểm bán" action={<Button variant="outline" icon="arrow-square-out">Mở rộng</Button>}>
            <MapPlaceholder
              style={{ height: 480 }}
              pins={[
                { x: 22, y: 24, label: "1" },
                { x: 36, y: 38, label: "2" },
                { x: 30, y: 56, label: "3" },
                { x: 50, y: 62, label: "4" },
                { x: 64, y: 48, label: "5" },
                { x: 76, y: 36, label: "6" },
                { x: 70, y: 70, label: "7" },
              ]}
            />
            <div className="dms-divider" />
            <div className="dms-kvgrid">
              <div className="dms-kv"><div className="dms-kv__l">Tổng quãng đường</div><div className="dms-kv__v">~ 14,2 km</div></div>
              <div className="dms-kv"><div className="dms-kv__l">Thời gian dự kiến</div><div className="dms-kv__v">~ 3h 40 phút</div></div>
              <div className="dms-kv"><div className="dms-kv__l">Khoảng cách trung bình</div><div className="dms-kv__v">~ 2,0 km/điểm</div></div>
              <div className="dms-kv"><div className="dms-kv__l">Phương tiện đề xuất</div><div className="dms-kv__v">Xe máy</div></div>
            </div>
          </Section>
        </div>
      </div>

      {showAdd ? <AddOutletsToRouteModal onClose={() => setShowAdd(false)} /> : null}
    </div>
  );
}

function AddOutletsToRouteModal({ onClose }) {
  const [picked, setPicked] = React.useState(new Set(["DB001", "DB002"]));
  const toggle = (id) => {
    const s = new Set(picked); s.has(id) ? s.delete(id) : s.add(id); setPicked(s);
  };
  return (
    <div className="dms-modal-scrim" onClick={onClose}>
      <div className="dms-modal" style={{ width: 760 }} onClick={(e) => e.stopPropagation()}>
        <header className="dms-modal__h">
          <div className="dms-modal__ht">
            <div className="dms-modal__t">Thêm điểm bán vào tuyến</div>
            <div className="dms-modal__s">Đã chọn <b>{picked.size}</b> điểm bán. Sau khi thêm có thể kéo thả để sắp xếp thứ tự.</div>
          </div>
          <button className="smodal__x" onClick={onClose}><i className="ph ph-x" /></button>
        </header>
        <div className="dms-modal__body">
          <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            <label className="sfield" style={{ flex: 1 }}>
              <i className="ph ph-magnifying-glass" />
              <input className="sfield__input" placeholder="Tìm theo tên, mã hoặc địa chỉ" />
            </label>
            <div className="dms-dropfield"><span>Nhóm:</span><b>Tất cả</b><i className="ph ph-caret-down" /></div>
            <div className="dms-dropfield"><span>Khu vực:</span><b>Cầu Giấy</b><i className="ph ph-caret-down" /></div>
          </div>
          <div style={{ border: "1px solid var(--stroke-base)", borderRadius: 8, overflow: "hidden" }}>
            <table className="dms-table">
              <thead><tr>
                <th style={{ width: 40 }}></th>
                <th>Điểm bán</th>
                <th>Nhóm</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
              </tr></thead>
              <tbody>
                {OUTLETS.map((o) => (
                  <tr key={o.id} onClick={() => toggle(o.id)} style={{ cursor: "pointer", background: picked.has(o.id) ? "var(--surface-pink)" : undefined }}>
                    <td>
                      <span className="dms-checkbox" style={{
                        width: 18, height: 18, borderRadius: 4, border: "1.5px solid " + (picked.has(o.id) ? "var(--brand-pink)" : "var(--stroke-medium)"),
                        background: picked.has(o.id) ? "var(--brand-pink)" : "#fff",
                        display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff"
                      }}>
                        {picked.has(o.id) ? <i className="ph ph-check" style={{ fontSize: 11, fontWeight: 700 }} /> : null}
                      </span>
                    </td>
                    <td><div className="dms-outletcell"><div className="dms-outletcell__thumb" style={{ width: 32, height: 32 }}><i className="ph ph-storefront" style={{ fontSize: 16 }} /></div>
                      <div className="dms-outletcell__t">
                        <span className="dms-outletcell__name">{o.name}</span>
                        <span className="dms-outletcell__code">{o.code}</span>
                      </div></div></td>
                    <td>{o.group}</td>
                    <td style={{ color: "var(--fg-secondary)", maxWidth: 240 }}>{o.addr}</td>
                    <td><Status tone={STATUS_TONES[o.status]}>{o.status}</Status></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <footer className="dms-modal__foot">
          <span style={{ fontSize: 13, color: "var(--fg-base)" }}>
            <b>{picked.size}</b> điểm bán được chọn
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            <Button variant="outline" onClick={onClose}>Hủy</Button>
            <Button variant="primary" icon="plus">Thêm vào tuyến</Button>
          </div>
        </footer>
      </div>
    </div>
  );
}

Object.assign(window, { RoutesList, RouteDetail });
