// Marketing.jsx — Danh sách contact screen (mirrors live product)
const { useState: useStateM } = React;

const SALES = [
  { code: "Cskh01",  name: "Quốc Thiện",  src: "../../assets/avatars/avatar-04.jpg" },
  { code: "Sale17",  name: "Hiếu Phạm",   src: "../../assets/avatars/avatar-01.jpg" },
  { code: "Sale19",  name: "Thanh Liêm",  src: "../../assets/avatars/avatar-03.jpg" },
  { code: "Sale14",  name: "Xuân Mai",    src: "../../assets/avatars/avatar-02.jpg" },
  { code: "Sale04",  name: "Anh Thư",     src: "../../assets/avatars/avatar-05.jpg" },
  { code: "Sale15",  name: "Vân Anh",     src: "../../assets/avatars/avatar-06.jpg" },
];
const sale = (i) => `${SALES[i].name} (${SALES[i].code})`;

const SEED = [
  { stt: 1, name: "Phạm Hải Yến",      phone: "0987 654 321", carrier: "VIETTEL",    msg: "Địa chỉ skyland, trung hòa c…", order: "A00003856287…", dup: true,  loyal: true,  sale: 0, tag: { t: "Lead mới",    tone: "pink"   }, internal: "Kiểm tra lại số này đan…",    track: "MVD323112",  product: "Smart TV Google TV - T…" },
  { stt: 2, name: "Nguyễn Thị Mai Lan", phone: "0345 678 901", carrier: "MOBIPHONE",  msg: "",                                  order: "A00003434341…", dup: false, loyal: false, sale: 1, tag: { t: "Tiềm năng",   tone: "cyan"   }, internal: "",                              track: "MVD724234",  product: "Apple Iphone 14 - 128G…" },
  { stt: 3, name: "Trần Văn Minh",      phone: "0765 432 109", carrier: "VINAPHONE",  msg: "Cần giao nhanh",                    order: "A00006624342…", dup: true,  loyal: false, sale: 2, tag: { t: "Gọi lần 1",   tone: "blear"  }, internal: "",                              track: "MVD727344",  product: "Samsung Galaxy S23 Ul…" },
  { stt: 4, name: "Phạm Đức Anh",       phone: "0210 987 654", carrier: "VIETTEL",    msg: "",                                  order: "A0000772245",   dup: false, loyal: true,  sale: 3, tag: { t: "Hướng dẫn…",  tone: "lilac"  }, internal: "Khách hàng khó tính",           track: "MVD722246",  product: "OPPO Reno10 5G - 256…" },
  { stt: 5, name: "Hoàng Ngọc Bảo C…",  phone: "0890 123 456", carrier: "VINAPHONE",  msg: "Giao hành chính",                   order: "A00003856287…", dup: false, loyal: true,  sale: 4, tag: { t: "Gọi lần 2",   tone: "pinkbg" }, internal: "",                              track: "MVD935454",  product: "Vivo V29e - 128GB - Mà…" },
  { stt: 6, name: "Đặng Trung Kiên",    phone: "0567 890 123", carrier: "VIETTEL",    msg: "",                                  order: "A00002624523…", dup: true,  loyal: false, sale: 5, tag: { t: "Lead mới",    tone: "pink"   }, internal: "Check lại",                     track: "MVD1112345", product: "Google Pixel 8 Pro - 25…" },
  { stt: 7, name: "Vũ Thị Thanh Hương", phone: "0699 455 125", carrier: "MOBIPHONE",  msg: "",                                  order: "A00008353445…", dup: false, loyal: true,  sale: 4, tag: { t: "Upslale lần 1", tone: "yellow" }, internal: "",                              track: "MVD223423",  product: "Sony Xperia 1 V - 256G…" },
  { stt: 8, name: "Bùi Minh Tuấn",      phone: "0989 568 642", carrier: "VIETTEL",    msg: "Địa chỉ skyland, trung hòa c…",     order: "A00003856287…", dup: false, loyal: true,  sale: 0, tag: { t: "Lead mới",    tone: "pink"   }, internal: "",                              track: "MVD323112",  product: "Smart TV Google TV - T…" },
];

function CarrierLabel({ name }) {
  return <span className="scarrier">{name}</span>;
}

function PhoneCell({ phone, carrier }) {
  return (
    <div className="sphone">
      <div className="sphone__num">{phone}</div>
      <CarrierLabel name={carrier} />
    </div>
  );
}

function CommIcons() {
  // The little row of pink-outlined comm-channel icons next to the phone number.
  return (
    <span className="scomm">
      <span className="scomm__btn" title="Gọi/ghi âm"><i className="ph ph-microphone" /></span>
      <span className="scomm__btn" title="Ghi chú"><i className="ph ph-note" /></span>
      <span className="scomm__zalo" title="Zalo">Zalo</span>
      <span className="scomm__zalo scomm__zalo--oa" title="Zalo OA">Zalo<sup>OA</sup></span>
    </span>
  );
}

function OrderCell({ code }) {
  return (
    <span className="sorder">
      <i className="ph ph-square" />
      <span>{code}</span>
    </span>
  );
}

function InternalMsgCell({ text }) {
  if (!text) return null;
  return (
    <span className="sinmsg">
      <i className="ph ph-chat-circle" />
      <span>{text}</span>
    </span>
  );
}

function Marketing() {
  const [rows] = useStateM(SEED);
  const [subtab, setSubtab] = useStateM("contacts");
  const [viewMode, setViewMode] = useStateM("v1");

  const TABS = [
    { id: "contacts",   label: "Danh sách contact",        icon: "list" },
    { id: "src",        label: "Báo cáo lead theo nguồn",   icon: "chart-bar" },
    { id: "hr",         label: "Báo cáo lead theo nhân sự", icon: "chart-bar" },
    { id: "saleby",     label: "Báo cáo marketing theo sale", icon: "chart-bar" },
    { id: "prod",       label: "Báo cáo lead theo sản phẩm", icon: "chart-bar" },
    { id: "config",     label: "Cấu hình marketing nhập data", icon: "gear" },
    { id: "seeding",    label: "Dach sách số seeding",       icon: "list-bullets" },
  ];

  return (
    <div className="smkt">
      <SubTabs tabs={TABS} active={subtab} onSelect={setSubtab} />

      {/* page title card */}
      <div className="card spagecard">
        <h2 className="spagecard__t">Danh sách contact</h2>
        <div className="spagecard__r">
          <span className="sdrop">
            <span>Chuẩn sandboxvn</span>
            <i className="ph ph-caret-down" />
          </span>
          <span className="sdate">
            <i className="ph ph-calendar" />
            01/03/2025 - 01/03/2025
          </span>
          <button className="sbtn sbtn--primary sbtn--icon" title="Lưu"><i className="ph ph-floppy-disk" /></button>
          <button className="sbtn sbtn--primary"><span>Bộ lọc</span><i className="ph ph-caret-down" /></button>
          <button className="sbtn sbtn--primary"><i className="ph ph-magnifying-glass" /><span>Tìm kiếm</span></button>
        </div>
      </div>

      {/* view-mode strip */}
      <div className="sviewbar">
        <div className="sviewbar__l">
          <button className={"sviewtab " + (viewMode === "v1" ? "is-active" : "")} onClick={() => setViewMode("v1")}><i className="ph ph-list" />Xem kiểu 1</button>
          <button className={"sviewtab " + (viewMode === "v2" ? "is-active" : "")} onClick={() => setViewMode("v2")}><i className="ph ph-rows" />Xem kiểu 2</button>
          <button className="sviewtab sviewtab--ghost"><i className="ph ph-pencil-simple" />Nhập thủ công</button>
          <button className="sviewtab sviewtab--icon"><i className="ph ph-dots-three-vertical" /></button>
        </div>
        <button className="sviewtab sviewtab--icon"><i className="ph ph-gear" /></button>
      </div>

      {/* table card */}
      <div className="card stable-wrap">
        <table className="stable stable--mkt">
          <thead>
            <tr>
              <th style={{ width: 36 }}><span className="schk" /></th>
              <th>STT</th>
              <th>Khách hàng</th>
              <th>Số điện thoại</th>
              <th>Tin nhắn khách hàng</th>
              <th>Mã đơn hàng</th>
              <th>Trùng số</th>
              <th>Khách cũ</th>
              <th>Sale</th>
              <th>Tác nghiệp cần</th>
              <th>Tin nhắn nội bộ</th>
              <th>Mã vận đơn</th>
              <th>Sản phẩm</th>
              <th style={{ width: 76, textAlign: "left" }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.stt}>
                <td><span className="schk" /></td>
                <td>{r.stt}</td>
                <td>{r.name}</td>
                <td>
                  <div className="sphone-wrap">
                    <PhoneCell phone={r.phone} carrier={r.carrier} />
                    <CommIcons />
                  </div>
                </td>
                <td>{r.msg ? <OrderCell code={r.msg} /> : null}</td>
                <td><OrderCell code={r.order} /></td>
                <td>{r.dup ? <i className="ph ph-users dup-ico" title="Trùng số" /> : null}</td>
                <td>{r.loyal ? <i className="ph ph-heart-fill loyal-ico" title="Khách cũ" /> : null}</td>
                <td>{sale(r.sale)}</td>
                <td><span className={"mtag mtag--" + r.tag.tone}>{r.tag.t}</span></td>
                <td><InternalMsgCell text={r.internal} /></td>
                <td>{r.track}</td>
                <td>{r.product}</td>
                <td>
                  <span className="srowact">
                    <button className="sbtn sbtn--outline sbtn--icon"><i className="ph ph-pencil-simple" /></button>
                    <button className="sbtn sbtn--outline sbtn--icon"><i className="ph ph-caret-down" /></button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="spager spager--right">
        <div>1 - 10 of 250 items</div>
        <div className="spager__nums">
          <button className="spager__arrow"><i className="ph ph-caret-left" /></button>
          <span className="spager__num is-active">1</span>
          <span className="spager__num">2</span>
          <span className="spager__num">3</span>
          <span className="spager__num">4</span>
          <span className="spager__num">5</span>
          <span className="spager__num spager__dots">…</span>
          <span className="spager__num">12</span>
          <button className="spager__arrow"><i className="ph ph-caret-right" /></button>
        </div>
        <button className="sbtn sbtn--outline">10 / trang <i className="ph ph-caret-down" /></button>
      </footer>
    </div>
  );
}

Object.assign(window, { Marketing });
