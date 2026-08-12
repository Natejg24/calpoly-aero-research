/**
 * js/data.js
 * ---------------------------------------------------------------------
 * Single source of truth for every research project on the site.
 *
 * This is the ONLY file most students should need to touch when adding
 * or updating a project. Every page (home, projects, project detail,
 * publications, equipment, gallery) reads from this array — add one
 * object here and it automatically shows up everywhere it belongs.
 *
 * IMPORTANT: every fact below (specs, apparatus details, author names,
 * roles) was pulled directly from the corresponding PDF report in
 * /pdfs. If you revise a report, re-check this file against the new
 * PDF text so the site doesn't drift from the source of truth.
 *
 * Field guide:
 *   id          unique URL-safe slug, used by project.html?slug=<id>
 *   title       short project/apparatus name (used on cards, nav, equipment page)
 *   paperTitle  exact title of the published report (used on publications page
 *               and as a citation line on the project detail page)
 *   tag         short research category shown as a pill/badge
 *   image       path to the preview image (project thumbnail)
 *   pdf         path to the downloadable PDF report
 *   paperUrl    external URL to the published paper (e.g. AIAA ARC/DOI page).
 *               When present, the Publications page links out to this
 *               instead of the local PDF.
 *   people      contributor names, in the order they appear on the report byline
 *   summary     1-2 sentence description used on cards and publication rows
 *   overview    longer paragraph for the project detail page
 *   specs       array of {label, value} pairs — real apparatus specs, shown as
 *               a quick-facts row on the detail page and as the spec sheet on
 *               the equipment page
 *
 * NOTE ON FILE FORMAT: this site intentionally avoids ES module
 * import/export syntax. Modules require pages to be loaded over
 * http:// (a real or local server) — opening index.html by
 * double-clicking it (a file:// URL) silently fails to run any
 * module script in Chrome and other browsers, which is why "some
 * pages look empty" is the #1 support question for sites built this
 * way. Everything here instead hangs off one shared global,
 * `window.SEAL`, using plain scripts that work identically whether the
 * file is double-clicked, served locally, or published to GitHub
 * Pages. See js/main.js for how the pieces are wired together.
 * ---------------------------------------------------------------------
 */

window.SEAL = window.SEAL || {};

SEAL.projects = [
  {
    id: 'red-raptor-wind-tunnel',
    title: 'Red Raptor Tabletop Wind Tunnel',
    paperTitle: 'A Demonstration Experiment to Study the Effects of Flow Correctors and the Impact of an Adverse Pressure Gradient',
    tag: 'Wind Tunnel Education',
    image: 'images/red-raptor-wind-tunnel.jpg',
    pdf: 'pdfs/red-raptor-wind-tunnel.pdf',
    paperUrl: 'https://arc.aiaa.org/doi/10.2514/6.2026-115183',
    people: 'Jalees I. Malik, Nathan J. Guerra, Nandeesh Hiremath',
    summary: 'A small-scale educational wind tunnel demonstrating the area-speed relation, Bernoulli’s equation, and the effect of flow correctors and diffuser angle on pressure loss and separation.',
    overview: 'Red Raptor replicates the behavior of SEAL’s Low-Speed Wind Tunnel at tabletop scale. A server-grade computer fan (max. 5,500 RPM, 57.16 W) drives air through a swappable mesh screen and honeycomb flow-straightening stack into a transparent acrylic converging-diverging duct, where a hinged, variable-angle diffuser door lets students dial in different adverse pressure gradients. A green 550 nm Class 3B laser and glycerin-water smoke make the internal flow visible in real time, while a hand-held vane anemometer captures exit velocity for each flow-corrector and diffuser-angle combination. Results showed the mesh-and-honeycomb configuration produced the most uniform, laminar flow, and that pressure loss coefficients rose sharply once the diffuser angle exceeded about 10° — consistent with the onset of boundary-layer separation predicted by theory.',
    specs: [
      { label: 'Driver', value: 'Server-grade PC fan, 5,500 RPM max, 57.16 W' },
      { label: 'Flow correctors', value: '1/16" mesh screen + aluminum honeycomb (1" cell depth)' },
      { label: 'Diffuser', value: 'Hinged variable-angle door, incremental settings' },
      { label: 'Flow visualization', value: '550 nm Class 3B laser sheet + glycerin smoke' },
      { label: 'Instrumentation', value: 'Hand-held vane anemometer' },
      { label: 'Construction', value: 'CAD-designed, 3D-printed housing, transparent acrylic duct' }
    ]
  },
  {
    id: 'bemt-propeller-modeling',
    title: 'BEMT Models for Low Reynolds Number Propellers',
    paperTitle: 'A Road Map for Tuning BEMT Models for Low Reynolds Number Propellers',
    tag: 'Propulsion Modeling',
    image: 'images/bemt-propeller-modeling.jpg',
    pdf: 'pdfs/bemt-propeller-modeling.pdf',
    paperUrl: 'https://arc.aiaa.org/doi/10.2514/6.2026-111552',
    people: 'Stefanos Arthur Demeti Rosenbaum, Dianne J. DeTurris, Nandeesh Hiremath',
    summary: 'A standardized experimental workflow validating Blade Element Momentum Theory (BEMT) against measured propeller thrust, torque, power, and efficiency at low Reynolds number.',
    overview: 'This study validates untuned Blade Element Momentum Theory (BEMT) predictions, generated in QBlade, against propeller performance measured on a Tyto Robotics ASTM Standard Flight Stand 15 mounted in SEAL’s Low-Speed Wind Tunnel. Blade geometry was captured with a custom 3D-printed measuring jig after a 3D scanner proved unable to resolve the thin blade tip. Three low Reynolds number cases were tested by sweeping freestream velocity at fixed RPM. Power and torque coefficients were consistently underpredicted by BEMT, traced to viscous effects — laminar separation bubbles and early flow separation — that the simplified sectional loss model misses; thrust predictions both over- and under-shot measured values depending on operating condition. The results point to targeted corrections in the viscous loss model, spanwise Reynolds number formulation, and post-stall polar extrapolation as the most promising paths to a more reliable low-Reynolds-number BEMT tool.',
    specs: [
      { label: 'Test platform', value: 'Tyto Robotics ASTM Flight Stand 15' },
      { label: 'Facility', value: 'SEAL Low-Speed Wind Tunnel (open-return, 421 cm test section) — Building 41B, Room 139' },
      { label: 'Force/torque range', value: 'Up to 150 N axial force, 8 N·m torque' },
      { label: 'Motor', value: 'Tmotor AT8030 KV160 (BLDC)' },
      { label: 'Blade geometry capture', value: 'Custom 3D-printed measuring jig' },
      { label: 'BEMT software', value: 'QBlade (TU Berlin)' }
    ]
  },
  {
    id: 'heat-transfer-experiments',
    title: 'Introductory Heat Transfer Experiments',
    paperTitle: 'Introductory Heat Transfer Experiments for Aerospace Engineering',
    tag: 'Thermal Systems',
    image: 'images/heat-transfer-experiments.jpg',
    pdf: 'pdfs/heat-transfer-experiments.pdf',
    paperUrl: 'https://arc.aiaa.org/doi/10.2514/6.2026-112763',
    people: 'Metztli Singha, Nandeesh Hiremath',
    summary: 'Radiation and convection benchtop experiments connecting surface finish and emissivity to measured cooling rates and heat transfer coefficients.',
    overview: 'Two small-scale rigs connect classroom heat-transfer theory to measured behavior. For radiation, three water-filled PASCO radiation cans (polished aluminum, black, and white finishes) were left in direct sunlight while their relative irradiance was tracked with Ocean Insight UV/VIS/NIR spectrometers; a PASCO Leslie’s Cube thermal radiation cube with four differently finished faces and a calibrated thermopile sensor isolated the effect of surface finish on emissivity independent of sunlight. For convection, a 2"-diameter aluminum cylinder instrumented with Type T thermocouples and a 40 W internal insertion heater was run through free- and forced-convection cooling cycles to extract quasi-steady and steady-state heat transfer coefficients. Results showed emission and absorption tracking surface finish as theory predicts, and forced convection cooling consistently outpacing free convection, with the cooling rate varying by position relative to the flow.',
    specs: [
      { label: 'Radiation rig', value: 'PASCO Radiation Cans (TD-8570A), 300 mL water, 3 surface finishes' },
      { label: 'Thermal cube', value: 'PASCO Leslie’s Cube (TD-8554A), 100 W, 10×10 cm faces' },
      { label: 'Radiation sensing', value: 'PASCO thermopile sensor (TD-8553) + Ocean Insight spectrometers' },
      { label: 'Convection rig', value: '2"-dia. aluminum cylinder, Type T thermocouples' },
      { label: 'Heater', value: '40 W insertion heater, up to 120 V / 0.33 A' }
    ]
  },
  {
    id: 'vortexfield-wind-wall',
    title: 'VortexField Modular Open-Jet Wind Wall',
    paperTitle: 'Design and Validation of a Multi-Fan Modular Open-Jet Wind Wall for Controlled Inflow Generation',
    tag: 'Controlled Inflow Generation',
    image: 'images/vortexfield-wind-wall.jpg',
    pdf: 'pdfs/vortexfield-wind-wall.pdf',
    paperUrl: 'https://arc.aiaa.org/doi/10.2514/6.2026-112823',
    people: 'Kanan Thummar, Nandeesh Hiremath',
    summary: 'A 32-fan modular open-jet wind wall (VFa) with PWM control and a wireless GUI, built and validated for controlled, spatially resolved inflow generation.',
    overview: 'The VortexField apparatus (VFa) is two modules of sixteen 120 mm fans each (4×4 per module, 32 fans total), independently PWM-driven by a pair of ESP32 DevKit microcontrollers and commanded wirelessly through a custom Python GUI. Because the fans’ circular outlets in square housings created strong radial outflow and gaps between adjacent fans, the team designed 3D-printed circular-to-square diffuser shrouds (116 mm inlet, 116 mm square outlet) paired with 1"-thick aluminum honeycomb to straighten the flow. Smoke visualization and velocity measurements confirmed improved flow alignment downstream of the conditioned outlets, at the cost of some mean-velocity loss from added pressure drop. A full flow-field map of the assembled array revealed a persistent low-speed core near each fan hub, and a benchmark propeller test against SEAL’s Low-Speed Wind Tunnel (comparing thrust and torque coefficients) showed the VFa’s velocity measurements were an order of magnitude more repeatable than the wind tunnel’s.',
    specs: [
      { label: 'Fan array', value: '32 fans (2 modules × 16, 120 mm, 4×4 layout)' },
      { label: 'Control', value: '2× ESP32 DevKit MCUs, PWM, custom Python GUI' },
      { label: 'Shroud', value: '3D-printed, 116 mm inlet → 116 mm square outlet' },
      { label: 'Flow conditioning', value: '1" aluminum honeycomb, 1/8" cell wall' },
      { label: 'Validation', value: 'Smoke visualization, velocity mapping, SEAL LSWT benchmark' }
    ]
  },
  {
    id: 'ludwieg-tube',
    title: 'Tabletop Ludwieg Tube Acoustic Wave Study',
    paperTitle: 'Pressure Wave Characterization in a Tabletop Ludwieg Tube for Speed of Sound Measurement and End-Cap Impedance Effects',
    tag: 'Compressible Flow & Acoustics',
    image: 'images/ludwieg-tube.jpg',
    pdf: 'pdfs/ludwieg-tube.pdf',
    paperUrl: 'https://arc.aiaa.org/doi/10.2514/6.2026-114409',
    people: 'Yusuf Kothambawala, Nandeesh Hiremath',
    summary: 'A low-cost tabletop Ludwieg tube using a latex-membrane driver and a wireless MEMS pressure sensor to measure the speed of sound and end-cap acoustic impedance.',
    overview: 'A 120 cm clear plastic tube, mounted on a wooden base, is driven by a hand-plucked latex membrane stretched over a perforated end cap — generating a weak compression wave without any diaphragm rupture. A MEMS differential pressure sensor near the driven end streams pressure and temperature data over Wi-Fi from an Arduino Uno R4 WiFi to a laptop running Python post-processing. Time-of-flight analysis of the incident and reflected wave (over a measured 1.1144 m sensor-to-end-cap distance) yielded a speed-of-sound measurement in close agreement with theory. Swapping in end caps of metals, elastomers, wood, foams, and polymers let the team compare reflection strength and acoustic impedance across materials, finding repeatable, material-dependent reflection behavior consistent with predicted impedance mismatch trends between rigid and compliant terminations.',
    specs: [
      { label: 'Tube', value: '120 cm clear plastic, wooden base, collar mounts' },
      { label: 'Driver', value: 'Hand-plucked latex membrane over perforated end cap' },
      { label: 'Sensor', value: 'MEMS differential pressure sensor (I²C)' },
      { label: 'Data acquisition', value: 'Arduino Uno R4 WiFi → Python over Wi-Fi hotspot' },
      { label: 'Measured baseline', value: 'Sensor-to-end-cap distance: 1.1144 m' },
      { label: 'End caps tested', value: 'Metals, elastomers, wood, foams, polymers' }
    ]
  }
];

/**
 * Look up a single project by its slug (used by project.html).
 * Returns undefined if no project matches — callers should handle that
 * case gracefully rather than assuming a match.
 */
SEAL.getProjectById = function (id) {
  return SEAL.projects.find(function (project) { return project.id === id; });
};
