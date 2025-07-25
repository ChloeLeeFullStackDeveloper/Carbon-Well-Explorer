# Carbon Well Explorer 🛢️🗺️

An interactive, map-based web application for visualizing oil & gas well data in Alberta, with a focus on carbon emissions tracking and environmental impact.

Built using **React**, **TypeScript**, **Mapbox**, and **Tailwind CSS**, this tool provides a visual foundation for analyzing well status, emissions intensity, and abandonment prioritization — directly inspired by [Crbon Labs](https://crbonlabs.com)' mission to reduce 500 million tonnes of GHG emissions.

---

## 🔍 Features

### 🗺️ Interactive Map
- Mapbox-powered visualization of 500+ mock well locations
- Color-coded emissions intensity markers
- Region-specific clustering and zoom behavior

### 📊 Emissions Insights
- Each well includes:
  - ID, coordinates
  - Emissions (tons CO₂/year)
  - Status (`active`, `inactive`, `abandoned`)
  - GHG score (0–100)
  - Region classification

### 🔍 Filtering & Analysis *(in progress)*
- Filter wells by:
  - Status
  - Emissions range
  - Region

### ♿ Responsive & Accessible
- Built with Tailwind CSS for full mobile support
- WCAG-friendly markup and accessible interactions

---

## 🛠️ Tech Stack

| Area            | Tools / Libraries                          |
|-----------------|---------------------------------------------|
| Frontend        | React 18, TypeScript, Tailwind CSS          |
| Mapping         | Mapbox GL JS                                |
| State Management| Zustand (lightweight)                       |
| Tooling         | Vite, ESLint, Prettier, clsx, date-fns      |
| Testing         | (Planned) Jest, React Testing Library       |

---

## 📁 Folder Structure
```
carbon-well-explorer/
├── public/
│ └── mock-wells.json ← 500+ synthetic wells
├── src/
│ ├── components/
│ │ ├── Map/WellMap.tsx
│ │ └── Filters/FilterPanel.tsx
│ ├── store/useWellStore.ts
│ ├── types/Well.ts
│ ├── App.tsx
│ └── main.tsx
├── .env.local
├── tailwind.config.js
└── README.md

yaml
Copy
Edit
```
---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ChloeLeeFullStackDeveloper/Carbon-Well-Explorer.git
cd carbon-well-explorer