export interface ProjectSheet {
  id: string;
  pageNumber: number;
  image: string;
  title: string;
  category: 'community-housing' | 'architectural-drawings' | 'building-construction' | 'working-drawings' | 'interior-design' | 'landscape-architecture';
  categoryTitle: string;
  sheetLabel?: string;
  area?: string;
  caption: string;
  highlights?: string[];
  dimensions?: string;
}

export interface CategoryInfo {
  id: 'all' | 'community-housing' | 'architectural-drawings' | 'building-construction' | 'working-drawings' | 'interior-design' | 'landscape-architecture';
  title: string;
  shortTitle: string;
  description: string;
  count: number;
}

export const PERSONAL_INFO = {
  name: "Adil Mansuri",
  role: "Aspiring Architect",
  subRole: "Diploma in Architecture",
  institute: "P.I.A.R.",
  instituteFullName: "Parul Institute of Architecture and Research",
  enrollmentNumber: "2401016010017",
  location: "Panigate, Vadodara, Gujarat",
  phone: "9375778856",
  email: "adilmansuri2024@gmail.com",
  introduction: "I am an aspiring architect passionate about concept design, interior design, and architectural visualization. I enjoy exploring how spatial planning, materiality, and aesthetics can work together to create thoughtful, functional spaces. My academic portfolio documents my development through housing planning, architectural drawings, construction details, working drawings, interior design, and landscape architecture.",
  bioSummary: "Eager to develop my skills in creating thoughtful and functional spaces with a strong focus on spatial planning, materiality, aesthetics, and contributing to innovative architectural solutions while pursuing my diploma in architecture.",
  specializations: ["Sustainable Architecture", "Concept Design", "Spatial Planning", "Interior Design", "Architectural Visualization"],
  education: [
    {
      degree: "Pursuing Diploma in Architecture (Current)",
      institution: "P.I.A.R. (Parul Institute of Architecture and Research)",
      enrollment: "2401016010017",
      year: "Current",
      description: "Academic focus across architectural design studio, building construction details, working drawings, 3D visualization, sustainable architecture, and landscape design."
    },
    {
      degree: "10th Pass (GSEB)",
      institution: "Gujarat Secondary and Higher Secondary Education Board",
      year: "2024",
      description: "Completed secondary education under the Gujarat State Board."
    }
  ],
  skills: {
    software: [
      { name: "AutoCAD", level: "Advanced Drafting", desc: "Working drawings, layouts, centre-line, schedules" },
      { name: "SketchUp", level: "3D Spatial Modeling", desc: "Massing, residential forms, interior perspectives" },
      { name: "Photoshop", level: "Post-Production", desc: "Plan rendering, visual presentation, post-processing" },
      { name: "V-Ray", level: "Architectural Rendering", desc: "Lighting studies, materiality, realistic rendering" }
    ],
    languages: [
      { name: "English", proficiency: "Fluent Professional" },
      { name: "Hindi", proficiency: "Native / Bilingual" }
    ],
    otherSkills: [
      { name: "Communication", desc: "Design rationale presentation and technical clarification" },
      { name: "Photography", desc: "Architectural composition, light study, and framing" },
      { name: "Event Management", desc: "Exhibition coordination, academic workshop handling" },
      { name: "Teamwork", desc: "Studio collaboration, group survey, and peer review" }
    ],
    interests: [
      { name: "Photography", icon: "camera" },
      { name: "Art & Drawing", icon: "palette" },
      { name: "Fitness & Gym", icon: "activity" },
      { name: "Cooking", icon: "chef" },
      { name: "Gardening", icon: "leaf" }
    ]
  }
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    title: 'All Selected Work',
    shortTitle: 'All Works',
    description: 'Comprehensive academic portfolio sheets covering housing, technical working drawings, building construction, interior design, and landscape architecture.',
    count: 46
  },
  {
    id: 'community-housing',
    title: 'Community Housing Planning',
    shortTitle: 'Housing Planning',
    description: 'Typological housing planning (EWS, LIG, MIG, HIG), site analysis at Bapod (Vadodara), floor plans, elevation, and site section.',
    count: 9
  },
  {
    id: 'architectural-drawings',
    title: 'Architectural Drawings',
    shortTitle: 'Arch Drawings',
    description: 'Plan rendering, digital post-processing, 3D residential modeling, passive cooling study (BedZED London), and interior lighting visualization.',
    count: 5
  },
  {
    id: 'building-construction',
    title: 'Building Construction Details',
    shortTitle: 'Construction Details',
    description: 'Hand-drawn isometric construction details, stanchion caps, steel connections, truss junctions, and foundation steel detailing.',
    count: 3
  },
  {
    id: 'working-drawings',
    title: 'Working Drawings',
    shortTitle: 'Working Drawings',
    description: 'Full municipal and on-site technical working drawings set: key plan, layouts, centre-line, column-beam schedule, plinth & ground beams, staircase, slab, and electrical layout.',
    count: 19
  },
  {
    id: 'interior-design',
    title: 'Interior Design — 3BHK House',
    shortTitle: 'Interior Design',
    description: 'Comprehensive 3BHK residence interior technical drawing set: space planning, furniture layout, flooring, ceiling, and dimensioned interior elevations.',
    count: 6
  },
  {
    id: 'landscape-architecture',
    title: 'Landscape Architecture',
    shortTitle: 'Landscape',
    description: 'Landscape site analysis, masterplan, hardscape & water feature detailing, softscape zoning, and organic flow circular focal space concepts.',
    count: 6
  }
];

export const PORTFOLIO_PROJECTS: ProjectSheet[] = [
  // A. Community Housing Planning (Pages 4–12)
  {
    id: 'page-04',
    pageNumber: 4,
    image: '/portfolio-pages/page-04.jpg',
    title: 'EWS Housing Plan',
    category: 'community-housing',
    categoryTitle: 'Community Housing Planning',
    sheetLabel: 'EWS Plan · 36 sqm',
    area: '36 sqm',
    caption: 'Economically Weaker Section (EWS) residential floor plan layout with optimized compact living hall, bedroom, kitchenette, and utility spaces within a 36 sqm footprint.',
    highlights: ['Area: 36 sqm', 'Modular Grid Planning', 'Optimized Space Utility', 'Natural Ventilation']
  },
  {
    id: 'page-05',
    pageNumber: 5,
    image: '/portfolio-pages/page-05.jpg',
    title: 'LIG Housing Plan',
    category: 'community-housing',
    categoryTitle: 'Community Housing Planning',
    sheetLabel: 'LIG Plan · 60 sqm',
    area: '60 sqm',
    caption: 'Low Income Group (LIG) residential unit plan featuring functional zoning, comfortable living area, private bedroom, separate toilet facilities, and balcony utility.',
    highlights: ['Area: 60 sqm', 'Cross Ventilation', 'Defined Circulation', 'Affordable Typology']
  },
  {
    id: 'page-06',
    pageNumber: 6,
    image: '/portfolio-pages/page-06.jpg',
    title: 'MIG Housing Plan',
    category: 'community-housing',
    categoryTitle: 'Community Housing Planning',
    sheetLabel: 'MIG Plan · 90 sqm',
    area: '90 sqm',
    caption: 'Middle Income Group (MIG) housing unit designed with dual bedrooms, spacious living and dining zones, dedicated kitchen, attached wash area, and balconies.',
    highlights: ['Area: 90 sqm', '2BHK Functional Layout', 'Daylight Integration', 'Balcony Openings']
  },
  {
    id: 'page-07',
    pageNumber: 7,
    image: '/portfolio-pages/page-07.jpg',
    title: 'HIG Housing Plan',
    category: 'community-housing',
    categoryTitle: 'Community Housing Planning',
    sheetLabel: 'HIG Plan · 187.5 sqm',
    area: '187.5 sqm',
    caption: 'High Income Group (HIG) spacious residential apartment layout incorporating multi-bedroom planning, expansive living-dining hall, private terraces, and servant utility.',
    highlights: ['Area: 187.5 sqm', 'Luxury Typology', 'Ensuite Bathrooms', 'Private Terraces']
  },
  {
    id: 'page-08',
    pageNumber: 8,
    image: '/portfolio-pages/page-08.jpg',
    title: 'Site Analysis — Bapod, Vadodara',
    category: 'community-housing',
    categoryTitle: 'Community Housing Planning',
    sheetLabel: 'Site Analysis',
    caption: 'Contextual site analysis of the project location at Bapod, Vadodara, evaluating solar orientation, prevailing wind patterns, road connectivity, surrounding amenities, and site topography.',
    highlights: ['Location: Bapod, Vadodara', 'Sun Path & Wind Study', 'Road Hierarchy', 'Urban Context']
  },
  {
    id: 'page-09',
    pageNumber: 9,
    image: '/portfolio-pages/page-09.jpg',
    title: 'Community Housing — Ground Floor Plan',
    category: 'community-housing',
    categoryTitle: 'Community Housing Planning',
    sheetLabel: 'Ground Floor Plan',
    caption: 'Comprehensive ground floor cluster plan establishing pedestrian walkways, vehicular circulation, building entries, parking allocations, and landscaped internal courtyards.',
    highlights: ['Pedestrian & Vehicular Segregation', 'Cluster Access Nodes', 'Landscape Courtyards']
  },
  {
    id: 'page-10',
    pageNumber: 10,
    image: '/portfolio-pages/page-10.jpg',
    title: 'Community Housing — First Floor Plan',
    category: 'community-housing',
    categoryTitle: 'Community Housing Planning',
    sheetLabel: 'First Floor Plan',
    caption: 'Upper residential floor plan demonstrating stacking efficiency, shared corridor access, balcony positioning, and structural grid alignment across apartment units.',
    highlights: ['Stacking Efficiency', 'Shared Corridor Circulation', 'Balcony Projections']
  },
  {
    id: 'page-11',
    pageNumber: 11,
    image: '/portfolio-pages/page-11.jpg',
    title: 'Community Housing — Site Elevation',
    category: 'community-housing',
    categoryTitle: 'Community Housing Planning',
    sheetLabel: 'Site Elevation',
    caption: 'Site elevation illustrating streetscape integration, rhythmic facade articulation, fenestration patterns, sill/lintel banding, and vertical massing proportions.',
    highlights: ['Facade Articulation', 'Vertical Massing', 'Streetscape Harmonization']
  },
  {
    id: 'page-12',
    pageNumber: 12,
    image: '/portfolio-pages/page-12.jpg',
    title: 'Community Housing — Site Section',
    category: 'community-housing',
    categoryTitle: 'Community Housing Planning',
    sheetLabel: 'Site Section',
    caption: 'Longitudinal site section detailing building height relationships, ground-to-plinth transitions, staircase cores, floor-to-ceiling clearances, and surrounding open space connections.',
    highlights: ['Height-to-Open-Space Ratio', 'Staircase Cores', 'Site Grade Transitions']
  },

  // B. Architectural Drawings (Pages 14–18)
  {
    id: 'page-14',
    pageNumber: 14,
    image: '/portfolio-pages/page-14.jpg',
    title: 'Plan Render',
    category: 'architectural-drawings',
    categoryTitle: 'Architectural Drawings',
    sheetLabel: 'Visualization',
    caption: 'Architectural floor plan render highlighting spatial zoning, furniture materiality, surface textures, soft drop shadows, and internal lighting contrast.',
    highlights: ['Material Texturing', 'Spatial Hierarchy', 'Drop Shadow Visualization']
  },
  {
    id: 'page-15',
    pageNumber: 15,
    image: '/portfolio-pages/page-15.jpg',
    title: 'Photoshop Editing — Before / After',
    category: 'architectural-drawings',
    categoryTitle: 'Architectural Drawings',
    sheetLabel: 'Digital Post-Processing',
    caption: 'Demonstration of digital image enhancement and post-production techniques showing raw architectural line-work transformed into evocative textured presentation imagery.',
    highlights: ['Before / After Comparison', 'Photoshop Post-Production', 'Color Grading']
  },
  {
    id: 'page-16',
    pageNumber: 16,
    image: '/portfolio-pages/page-16.jpg',
    title: '3D Modeling of Residence Design',
    category: 'architectural-drawings',
    categoryTitle: 'Architectural Drawings',
    sheetLabel: '3D Residence Model',
    caption: 'Comprehensive 3D exterior digital modeling of residential building featuring multi-angle perspectives: Front View, Isometric View, Right View, and Rear View.',
    highlights: ['Isometric & Elevation Views', 'Massing Study', 'Boundary Wall & Entrance Integration']
  },
  {
    id: 'page-17',
    pageNumber: 17,
    image: '/portfolio-pages/page-17.jpg',
    title: 'BedZED — Passive Cooling & Energy Efficiency',
    category: 'architectural-drawings',
    categoryTitle: 'Architectural Drawings',
    sheetLabel: 'Case Study · London, UK',
    caption: 'Case study analysis of the landmark BedZED (Beddington Zero Energy Development) in London, UK, investigating passive cooling wind cowls, high thermal mass, and zero-carbon building strategies.',
    highlights: ['Location: London, UK', 'Passive Wind Cowls', 'Zero Carbon Development', 'Thermal Mass']
  },
  {
    id: 'page-18',
    pageNumber: 18,
    image: '/portfolio-pages/page-18.jpg',
    title: 'Render & Lighting Visualization',
    category: 'architectural-drawings',
    categoryTitle: 'Architectural Drawings',
    sheetLabel: 'Interior Rendering',
    caption: 'V-Ray interior perspective renders exploring artificial spotlighting, natural daylight penetration, living lounge warmth, and bedroom spatial ambiance.',
    highlights: ['Natural vs Artificial Light', 'Material Reflectivity', 'V-Ray Engine Render']
  },

  // C. Building Constructions (Pages 20–22)
  {
    id: 'page-20',
    pageNumber: 20,
    image: '/portfolio-pages/page-20.jpg',
    title: 'Steel Connection Details & Stanchion Caps',
    category: 'building-construction',
    categoryTitle: 'Building Construction Details',
    sheetLabel: 'Sheet 01 · Hand Drawn',
    caption: 'Hand-drawn construction detail sheet depicting stanchion caps, truss seatings, beams eccentrically connected to stanchions, and slab base connections to steel columns.',
    highlights: ['Hand-Drawn Technical Drafting', 'Stanchion Caps & Truss Connection', 'Eccentric Beam Joint']
  },
  {
    id: 'page-21',
    pageNumber: 21,
    image: '/portfolio-pages/page-21.jpg',
    title: 'Isometric Steel Beam-to-Column Splices',
    category: 'building-construction',
    categoryTitle: 'Building Construction Details',
    sheetLabel: 'Sheet 02 · Isometric',
    caption: 'Hand-drawn isometric construction sheet detailing steel I-beam column splices, bolted web and flange connections, stiffener plates, and structural load transfer mechanisms.',
    highlights: ['Isometric Steel Details', 'Flange & Web Bolting', 'Stiffener Plate Construction']
  },
  {
    id: 'page-22',
    pageNumber: 22,
    image: '/portfolio-pages/page-22.jpg',
    title: 'Structural Steel Details & Section Drawings',
    category: 'building-construction',
    categoryTitle: 'Building Construction Details',
    sheetLabel: 'Sheet 03 · Sections',
    caption: 'Technical drafting sheet illustrating structural steel assembly sections, column base plate plan, anchor bolt positions, and continuous framed connection details.',
    highlights: ['Base Plate Plan & Anchors', 'Multi-Level Column Splice', 'Assembly Elevation']
  },

  // D. Working Drawings (Pages 24–43)
  {
    id: 'page-24',
    pageNumber: 24,
    image: '/portfolio-pages/page-24.jpg',
    title: 'Site Layout / Key Plan',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 01 · Key Plan',
    caption: 'Comprehensive site layout and key plan setting out building boundaries, setbacks, entry gate locations, surrounding approach roads, and cardinal orientation.',
    highlights: ['Site Setbacks & Access', 'Key Plan Orientation', 'Municipal Submission Standard']
  },
  {
    id: 'page-25',
    pageNumber: 25,
    image: '/portfolio-pages/page-25.jpg',
    title: 'Dimensioned Ground Floor Layout',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 02 · Ground Floor',
    caption: 'Fully dimensioned ground floor working layout with precise wall thicknesses, room dimensions, door/window openings, and level markings for on-site construction execution.',
    highlights: ['On-Site Construction Dimensions', 'Wall Thickness Specifications', 'Opening Markings']
  },
  {
    id: 'page-26',
    pageNumber: 26,
    image: '/portfolio-pages/page-26.jpg',
    title: 'Dimensioned First Floor Layout',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 03 · First Floor',
    caption: 'Technical working drawing of first floor plan providing detailed dimensional strings, balcony setbacks, structural duct locations, and lintel level alignments.',
    highlights: ['Upper Floor Dimensions', 'Balcony Projections', 'Service Shaft Positioning']
  },
  {
    id: 'page-27',
    pageNumber: 27,
    image: '/portfolio-pages/page-27.jpg',
    title: 'Dimensioned Terrace Layout',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 04 · Terrace Plan',
    caption: 'Terrace working drawing showing parapet wall layout, rainwater down-take pipe locations, staircase cabin headroom, and roof slope drainage directions.',
    highlights: ['Rainwater Slope & Drainage', 'Staircase Headroom Cabin', 'Parapet Wall Details']
  },
  {
    id: 'page-28',
    pageNumber: 28,
    image: '/portfolio-pages/page-28.jpg',
    title: 'Furniture Layout — Ground Floor',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 05 · Ground Furniture',
    caption: 'Furniture arrangement plan for ground floor illustrating anthropometric clearances, living seating, dining table arrangement, kitchen work triangle, and bedroom ergonomics.',
    highlights: ['Anthropometric Circulation', 'Kitchen Work Triangle', 'Living & Dining Layout']
  },
  {
    id: 'page-29',
    pageNumber: 29,
    image: '/portfolio-pages/page-29.jpg',
    title: 'Furniture Layout — First Floor',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 06 · First Furniture',
    caption: 'Upper floor furniture plan detailing bedroom wardrobes, study desks, bed placements, side tables, and balcony sit-out arrangements.',
    highlights: ['Bedroom Wardrobe Niches', 'Study Desk Integration', 'Spatial Ergonomics']
  },
  {
    id: 'page-30',
    pageNumber: 30,
    image: '/portfolio-pages/page-30.jpg',
    title: 'Centre Line Layout',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 07 · Centre Line',
    caption: 'Grid-based centre line drawing essential for initial ground layout, establishing orthogonal grid coordinates, column centres, and reference datum lines.',
    highlights: ['Grid System & Coordinates', 'Column Centre Marking', 'Foundation Setting Out']
  },
  {
    id: 'page-31',
    pageNumber: 31,
    image: '/portfolio-pages/page-31.jpg',
    title: 'Column-Beam Schedule',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 08 · Schedules',
    caption: 'Structural schedule sheet presenting column designations, structural beam sizes, reinforcement rebar callouts, stirrups spacing, and concrete grades.',
    highlights: ['Column Reinforcement Schedule', 'Beam Cross-Sections', 'Bar Bending Specifications']
  },
  {
    id: 'page-32',
    pageNumber: 32,
    image: '/portfolio-pages/page-32.jpg',
    title: 'Plinth Beam Layout',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 09 · Plinth Beam',
    caption: 'Plinth level beam plan detailing structural tie-beams at ground surface, tie beam dimensions, column pedestals, and damp-proof course (DPC) level specifications.',
    highlights: ['Plinth Tie-Beams', 'DPC Level Reference', 'Differential Settlement Protection']
  },
  {
    id: 'page-33',
    pageNumber: 33,
    image: '/portfolio-pages/page-33.jpg',
    title: 'Ground Beam Layout',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 14 · Ground Beam',
    caption: 'Working drawing sheet confirming Ground Beam Layout (GB-1 to GB-17) at 1:50 scale, detailing beam connectivity, span dimensions, and column coordinates.',
    highlights: ['Ground Beam Layout (GB-1 to GB-17)', 'Scale 1:50', 'Framed Structure System']
  },
  {
    id: 'page-34',
    pageNumber: 34,
    image: '/portfolio-pages/page-34.jpg',
    title: 'Building Elevations',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 10 · Elevations',
    caption: 'Detailed 2D building elevations showing exterior surface finishes, parapet heights, weather sheds, window sill heights, and exterior level datums.',
    highlights: ['Vertical Level Datums', 'Weather Shed Profiles', 'Exterior Material Bands']
  },
  {
    id: 'page-35',
    pageNumber: 35,
    image: '/portfolio-pages/page-35.jpg',
    title: 'Building Sections',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 11 · Sections',
    caption: 'Transverse and longitudinal building sections showing floor slab thicknesses, lintel beams, plinth filling, foundation depth, and stair flights.',
    highlights: ['Floor-to-Ceiling Heights', 'Plinth Filling Details', 'Foundation Trench Depths']
  },
  {
    id: 'page-36',
    pageNumber: 36,
    image: '/portfolio-pages/page-36.jpg',
    title: 'Foundation Details',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 12 · Foundations',
    caption: 'Isolated footing and combined foundation details with excavation trenches, PCC bed thicknesses, footing rebars, and column starter bar dimensions.',
    highlights: ['Isolated Footing Sizing', 'PCC Bed Specifications', 'Reinforcement Starter Bars']
  },
  {
    id: 'page-37',
    pageNumber: 37,
    image: '/portfolio-pages/page-37.jpg',
    title: 'Slab Layout — Ground Floor',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 13 · Slab Layout',
    caption: 'Reinforced concrete slab layout illustrating one-way and two-way slab spans, main and distribution reinforcement, slab drops for toilets, and beam junctions.',
    highlights: ['One-Way & Two-Way Spans', 'Sunken Slab Depths', 'Beam-Slab Monolithic Joints']
  },
  {
    id: 'page-38',
    pageNumber: 38,
    image: '/portfolio-pages/page-38.jpg',
    title: 'Staircase Section / 150 mm RCC Stair',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 15 · Staircase',
    caption: 'Detailed staircase section sheet detailing a 150 mm RCC waist slab stair, tread and riser dimensions, mid-landing beam support, handrail anchoring, and rebar lap details.',
    highlights: ['150 mm RCC Waist Slab', 'Tread & Riser Ergonomics', 'Mid-Landing Beam Detailing']
  },
  {
    id: 'page-39',
    pageNumber: 39,
    image: '/portfolio-pages/page-39.jpg',
    title: 'Flooring / Tile Layout',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 16 · Flooring',
    caption: 'Flooring pattern and tile setting-out plan indicating tile sizes, starting points, skirting heights, transition thresholds between rooms, and wet area slope indicators.',
    highlights: ['Tile Setting-Out Datum', 'Skirting & Transition Strips', 'Anti-Skid Wet Area Layout']
  },
  {
    id: 'page-40',
    pageNumber: 40,
    image: '/portfolio-pages/page-40.jpg',
    title: 'Structural Sections & Door/Window Sections',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 17 · Openings & Sections',
    caption: 'Joinery detail sheet with architectural cross-sections of door frames, window sills, lintel projections, glass rebates, and weather-stripping profiles.',
    highlights: ['Door Frame Joinery Sections', 'Window Sill & Lintel Profiles', 'Hardware & Glass Fixtures']
  },
  {
    id: 'page-41',
    pageNumber: 41,
    image: '/portfolio-pages/page-41.jpg',
    title: 'Electrical Layout — Ground Floor',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 18 · Electrical GF',
    caption: 'Working drawing of ground floor electrical layout at 1:50 scale displaying light points, ceiling fans, switchboards, AC power points, and distribution board conduit routing.',
    highlights: ['Scale 1:50', 'Light & Power Point Schedule', 'Conduit Circuit Paths']
  },
  {
    id: 'page-42',
    pageNumber: 42,
    image: '/portfolio-pages/page-42.jpg',
    title: 'Electrical Layout — First Floor',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 19 · Electrical FF',
    caption: 'First floor electrical layout indicating bedroom switches, two-way bedhead controls, terrace fixtures, and service loop connections.',
    highlights: ['Scale 1:50', 'Two-Way Switching Systems', 'Bedroom Circuit Routing']
  },
  {
    id: 'page-43',
    pageNumber: 43,
    image: '/portfolio-pages/page-43.jpg',
    title: 'Electrical Layout — Terrace & Service Plan',
    category: 'working-drawings',
    categoryTitle: 'Working Drawings',
    sheetLabel: 'Sheet 20 · Electrical Terrace',
    caption: 'Terrace and service floor electrical layout showing overhead water tank sensor circuitry, external weatherproof lighting, and main earthing connections.',
    highlights: ['Weatherproof External Fixtures', 'Service & Pump Controls', 'Scale 1:50']
  },

  // E. Interior Design — 3BHK House Technical Drawing (Pages 45–50)
  {
    id: 'page-45',
    pageNumber: 45,
    image: '/portfolio-pages/page-45.jpg',
    title: '3BHK Technical Drawing — Overall Floor Plan & Layout',
    category: 'interior-design',
    categoryTitle: 'Interior Design — 3BHK House',
    sheetLabel: '3BHK Plan · Sheet 01',
    caption: 'Comprehensive 3BHK residence interior floor plan outlining complete room planning: living room, kitchen, master bedroom, bedroom 2, bedroom 3, dressing area, store room, wash area, common toilet, and attached toilet.',
    highlights: ['3BHK Complete Space Planning', 'Living Room & Dining Flow', 'Kitchen, Store & Wash Area', 'Private & Common Restrooms']
  },
  {
    id: 'page-46',
    pageNumber: 46,
    image: '/portfolio-pages/page-46.jpg',
    title: '3BHK Technical Drawing — Flooring & Circulation Layout',
    category: 'interior-design',
    categoryTitle: 'Interior Design — 3BHK House',
    sheetLabel: 'Flooring Layout · Sheet 02',
    caption: 'Flooring layout and internal circulation diagram indicating material transitions between living hall, bedrooms, kitchen tiles, wash area, and toilets.',
    highlights: ['Internal Circulation Paths', 'Room Boundary Transitions', 'Material Zoning']
  },
  {
    id: 'page-47',
    pageNumber: 47,
    image: '/portfolio-pages/page-47.jpg',
    title: '3BHK Technical Drawing — Furniture & Ceiling Layout',
    category: 'interior-design',
    categoryTitle: 'Interior Design — 3BHK House',
    sheetLabel: 'Furniture & Ceiling · Sheet 03',
    caption: 'Furniture arrangement coordinated with false ceiling drops, cove lighting profiles, fan positions, and functional activity centers across all rooms.',
    highlights: ['Coordinated False Ceiling', 'Cove Lighting Channels', 'Ergonomic Furniture Layout']
  },
  {
    id: 'page-48',
    pageNumber: 48,
    image: '/portfolio-pages/page-48.jpg',
    title: '3BHK Technical Drawing — Living Room Interior Elevations',
    category: 'interior-design',
    categoryTitle: 'Interior Design — 3BHK House',
    sheetLabel: 'Living Elevations · Sheet 04',
    caption: 'Dimensioned interior elevations of the Living Room displaying TV wall console paneling, display niches, ceiling drop levels, and wall finishes.',
    highlights: ['TV Unit Wall Paneling', 'Dimensioned Vertical Elevations', 'Display Niches & Sconces']
  },
  {
    id: 'page-49',
    pageNumber: 49,
    image: '/portfolio-pages/page-49.jpg',
    title: '3BHK Technical Drawing — Kitchen Interior Elevations',
    category: 'interior-design',
    categoryTitle: 'Interior Design — 3BHK House',
    sheetLabel: 'Kitchen Elevations · Sheet 05',
    caption: 'Detailed interior elevation drawings of modular kitchen counters, overhead cabinet heights, backsplash tile heights, and under-counter pullout storage.',
    highlights: ['Modular Kitchen Elevations', 'Overhead & Base Cabinets', 'Dado Tile Dimensions']
  },
  {
    id: 'page-50',
    pageNumber: 50,
    image: '/portfolio-pages/page-50.jpg',
    title: '3BHK Technical Drawing — Bedroom Interior Elevations',
    category: 'interior-design',
    categoryTitle: 'Interior Design — 3BHK House',
    sheetLabel: 'Bedroom Elevations · Sheet 06',
    caption: 'Dimensioned interior elevations for Bedroom 3 presenting wardrobe joinery, headboard wall panelling, dressing mirror placement, and vertical dimension lines.',
    highlights: ['Wardrobe Joinery Details', 'Bed Headboard Treatment', 'Full Height Wall Dimensions']
  },

  // F. Landscape Architecture (Pages 52–57)
  {
    id: 'page-52',
    pageNumber: 52,
    image: '/portfolio-pages/page-52.jpg',
    title: 'Basics of Landscape Architecture — Site Analysis',
    category: 'landscape-architecture',
    categoryTitle: 'Landscape Architecture',
    sheetLabel: 'Landscape Analysis · Sheet 01',
    caption: 'Site analysis sheet exploring landscape fundamentals: solar access, microclimate, soil permeability, slope analysis, pedestrian desire lines, and existing vegetation.',
    highlights: ['Microclimate & Sun Angles', 'Topography & Slope Study', 'Pedestrian Desire Lines']
  },
  {
    id: 'page-53',
    pageNumber: 53,
    image: '/portfolio-pages/page-53.jpg',
    title: 'Landscape Masterplan',
    category: 'landscape-architecture',
    categoryTitle: 'Landscape Architecture',
    sheetLabel: 'Masterplan · Sheet 02',
    caption: 'Comprehensive landscape masterplan integrating curvilinear walking trails, peripheral boundary planting, central plaza, interactive water features, and expansive grassy knolls.',
    highlights: ['Curvilinear Trail Network', 'Central Plaza & Knolls', 'Overall Spatial Hierarchy']
  },
  {
    id: 'page-54',
    pageNumber: 54,
    image: '/portfolio-pages/page-54.jpg',
    title: 'Landscape Detailing — Hardscape & Water Features',
    category: 'landscape-architecture',
    categoryTitle: 'Landscape Architecture',
    sheetLabel: 'Hardscape Details · Sheet 03',
    caption: 'Hardscape detail sheet featuring surface pavement gradients, drainage channel design, retaining curbs, seating benches, and focal water-feature recommendations.',
    highlights: ['Paving Materials & Gradients', 'Focal Water Feature', 'Drainage Channel Detailing']
  },
  {
    id: 'page-55',
    pageNumber: 55,
    image: '/portfolio-pages/page-55.jpg',
    title: 'Softscape Zoning & Plant Suggestions',
    category: 'landscape-architecture',
    categoryTitle: 'Landscape Architecture',
    sheetLabel: 'Softscape Details · Sheet 04',
    caption: 'Planting palette and softscape zoning guide classifying shade canopy trees, intermediate flowering shrubs, groundcovers, and hedgerows for sensory continuity.',
    highlights: ['Canopy & Shade Trees', 'Shrub & Groundcover Palette', 'Softscape Microclimate Zoning']
  },
  {
    id: 'page-56',
    pageNumber: 56,
    image: '/portfolio-pages/page-56.jpg',
    title: 'Organic Flow & Circular Focal Spaces — Concept Sheet',
    category: 'landscape-architecture',
    categoryTitle: 'Landscape Architecture',
    sheetLabel: 'Concept Sheet · View A',
    caption: 'Landscape concept envisioning a flowing organic garden: curvilinear pathways connect circular focal spaces, open lawns, layered planting, water features, and a green planted boundary creating continuous identity.',
    highlights: ['Curvilinear Pathways', 'Circular Focal Nodes', 'Layered Planting & Water Features']
  },
  {
    id: 'page-57',
    pageNumber: 57,
    image: '/portfolio-pages/page-57.jpg',
    title: 'Organic Flow & Circular Focal Spaces — Spatial Integration',
    category: 'landscape-architecture',
    categoryTitle: 'Landscape Architecture',
    sheetLabel: 'Concept Sheet · View B',
    caption: 'Detailed continuation sheet of the organic flow garden concept, demonstrating spatial continuity, pedestrian journey experiences, shaded seating clearings, and perimeter green buffers.',
    highlights: ['Spatial Continuity & Identity', 'Pedestrian Experience Journey', 'Perimeter Planted Boundary']
  }
];
