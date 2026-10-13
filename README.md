# Adil Mansuri — Academic Architecture Portfolio

A minimalist, Strata-inspired architecture portfolio website presenting the academic drawings, rendered plans, structural sheets, working drawings, interior technical details, and landscape design boards of **Adil Mansuri** (Diploma in Architecture, P.I.A.R. / Enrollment: 2401016010017).

## Features

- **Strata-Inspired Layout**:
  - **Desktop**: Fixed left photographic sidebar (~35% viewport) with circular "AM" monogram, concise personal statement, live section navigation, and contact badges; clean white content canvas on the right (~65% viewport).
  - **Mobile**: Collapses gracefully into a full-width dark photographic hero at the top, followed by vertically stacked content matching the reference video.
- **Academic Sheets Preserved**:
  - All 57 original 16:9 landscape portfolio sheets extracted directly from the source academic portfolio PDF into `public/portfolio-pages/`.
  - Displayed with `object-fit: contain` on neutral architectural backgrounds to guarantee zero distortion or cropping of technical dimensions, schedules, or title blocks.
- **Categorized Work Gallery**:
  - **A. Community Housing Planning** (EWS 36 sqm, LIG 60 sqm, MIG 90 sqm, HIG 187.5 sqm, Bapod Site Analysis, Plans, Elevation, Section)
  - **B. Architectural Drawings** (Plan Render, Photoshop Editing, 3D Residence Model, BedZED Passive Cooling Case Study, Render & Lighting)
  - **C. Building Construction Details** (Steel connection details, stanchion caps, isometric beam splices, structural sections)
  - **D. Working Drawings** (Key plan, ground/first/terrace layouts, furniture plans, centre line, column-beam schedule, plinth & ground beams, foundation, 150 mm RCC stair section, flooring layout, electrical sheets)
  - **E. Interior Design — 3BHK House** (Complete room planning: living room, kitchen, master bedroom, bedroom 2, bedroom 3, dressing room, store room, wash area, toilets, elevations)
  - **F. Landscape Architecture** (Site analysis, masterplan, hardscape & water feature detailing, softscape zoning, organic flow circular focal spaces)
- **High-Fidelity Lightbox**:
  - Click-to-enlarge modal with full viewport scaling.
  - Previous / Next navigation controls.
  - Left / Right keyboard arrow navigation and Escape to close.
  - Zoom toggle for inspecting fine drawing details and schedules.
  - Background scroll lock and full accessibility support.
- **Direct Communication & Contact**:
  - Verified phone number (+91 9375778856), email (adilmansuri2024@gmail.com), and location (Panigate, Vadodara, Gujarat).
  - Functional `tel:` and `mailto:` links with copy-to-clipboard buttons.
  - Genuine mailto form submission that drafts directly to Adil's email.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Vanilla CSS** with architectural custom properties
- **pypdfium2** (Used for high-resolution 1920×1080 sheet rasterization)

## Running the Website Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Preview the production build with:
   ```bash
   npm run preview
   ```
