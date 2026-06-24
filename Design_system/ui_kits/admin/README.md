# SandboxVN Admin — UI Kit

A click-thru recreation of the SandboxVN ERP admin shell. Built from the Figma design system; everything here is a cosmetic recreation, not production code.

## Layout

```
┌──────┬────────────────────────────────────────────────────┐
│      │  Top nav (50 px)                                   │
│ Side ├────────────────────────────────────────────────────┤
│ bar  │  Workspace (canvas #dce5ee)                        │
│ 120  │   ├─ Page header                                   │
│ px   │   ├─ Filter / action bar                           │
│      │   └─ Content card                                  │
└──────┴────────────────────────────────────────────────────┘
```

## Files

- `index.html` — full shell + interactive demo (Customers list, detail, create modal, Dashboard view)
- `app.jsx` — top-level layout + routing between screens
- `Shell.jsx` — Sidebar + TopNav chrome
- `Customers.jsx` — Customers list screen with table + filters + create modal
- `Dashboard.jsx` — Module landing with stat cards + recent activity
- `Common.jsx` — Buttons, Field, StatusPill, Avatar, Badge, IconButton, Modal

## Click-thru

1. Lands on **Dashboard** (Báo cáo tổng quan).
2. Click any sidebar tile → switches module (most show a placeholder; Customers is fully built).
3. From **Customers**: click _Thêm khách hàng_ → modal; fill name → row appears at top of table.
4. Click any row → detail drawer slides in.

## Coverage / limitations

- Real product has 14 modules; only **Dashboard** and **Customer** are populated. Other modules show a styled empty state.
- No real data persistence — modal closes on confirm and the table updates in-memory.
- No keyboard nav / a11y.
