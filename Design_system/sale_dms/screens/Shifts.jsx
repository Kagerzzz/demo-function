// Shifts.jsx — Thiết lập ca làm việc (danh sách)

function ShiftsList({ onAdd }) {
  function duration(start, end, overnight) {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    let mins = (eh * 60 + em) - (sh * 60 + sm);
    if (overnight || mins < 0) mins += 24 * 60;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h + "h" + (m ? " " + m + "ph" : "");
  }
  return (
    <div>
      <Crumbs items={[{ label: "Sale DMS" }, { label: "Thiết lập ca làm việc" }]} />
      <PageHeader
        title="Thiết lập ca làm việc"
        subtitle="Quản lý các ca làm việc tiêu chuẩn được dùng khi phân ca cho nhân viên sale."
        actions={(<>
          <Button variant="outline" icon="clock-counter-clockwise">Lịch sử thay đổi</Button>
          <Button variant="primary" icon="plus" onClick={onAdd}>Thêm ca làm việc</Button>
        </>)}
      />
      <FilterBar
        search="Tìm theo tên hoặc mã ca"
        dropdowns={[{ label: "Trạng thái:", value: "Tất cả" }]}
      />
      <div className="dms-tablecard">
        <table className="dms-table">
          <thead><tr>
            <th className="col-stt">STT</th>
            <th>Mã ca</th>
            <th>Tên ca</th>
            <th>Giờ bắt đầu</th>
            <th>Giờ kết thúc</th>
            <th>Thời lượng</th>
            <th>Ghi chú</th>
            <th>Trạng thái</th>
            <th className="col-act">Thao tác</th>
          </tr></thead>
          <tbody>
            {SHIFTS.map((s, i) => (
              <tr key={s.id}>
                <td className="col-stt">{String(i+1).padStart(2,"0")}</td>
                <td><span className="dms-shiftbadge"><i className="ph ph-clock" />{s.code}</span></td>
                <td style={{ fontWeight: 600 }}>{s.name}</td>
                <td className="num">{s.start}</td>
                <td className="num">{s.end}</td>
                <td className="num">
                  <b>{duration(s.start, s.end, s.overnight)}</b>
                  {s.overnight ? <Status tone="purple" style={{ marginLeft: 8 }}>Ca qua ngày</Status> : null}
                </td>
                <td style={{ color: "var(--fg-secondary)" }}>{s.note}</td>
                <td><Status tone={STATUS_TONES[s.status]}>{s.status}</Status></td>
                <td><RowActions /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableFoot total={8} pages={1} />
      </div>
    </div>
  );
}

Object.assign(window, { ShiftsList });
