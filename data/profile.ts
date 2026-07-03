/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO UPDATE YOUR SITE.
 *  Everything shown on the page — name, bio, jobs, interests —
 *  lives here. The layout code never needs to change.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Sidney Qiu",
  credentials: ["P.Eng", "PMP", "CSM"],
  title: "Systems Engineer",
  company: "Waymo",
  location: "San Francisco Bay Area",
  linkedin: "https://www.linkedin.com/in/sidneyqiu/",
  email: "lzty88@gmail.com",

  about: [
    `I'm a systems engineer with over two decades of experience taking
    complex, safety-critical systems from concept to launch — autonomous
    vehicles at Waymo and Zoox, avionics and flight-deck controls in
    aerospace, and CBTC subway signaling at Thales.`,
    `My work sits at the intersection of engineering rigor and program
    leadership: requirements definition and decomposition, FMEA, hazard
    and fault-tree analysis, verification & validation, and guiding
    cross-functional teams through certification standards like ARP4754,
    DO-178, and DO-254. I care about systems that are not just clever,
    but demonstrably safe.`,
  ],
};

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    role: "Systems Engineer",
    company: "Waymo",
    period: "Dec 2019 – Present",
    location: "San Francisco Bay Area",
    highlights: [
      "Lead system definition, integration, and launch of complex multi-disciplinary projects for autonomous vehicles, from architecture through transition into operations.",
      "Apply systems engineering and data analysis to safety-critical hardware/software systems, using FMEA, hazard analysis, and fault-tree analysis.",
    ],
  },
  {
    role: "Technical Program Manager",
    company: "Zoox",
    period: "Oct 2018 – Sep 2019",
    location: "San Francisco Bay Area",
    highlights: [
      "Led initial safety-certification requirements and process definition across perception, planning, simulation, hardware, and operations teams.",
      "Defined the requirements-management structure from robot level down to sensor and hardware architecture, with full traceability to test results.",
    ],
  },
  {
    role: "Senior Project Manager & Lead Systems Engineer",
    company: "Aversan Inc.",
    period: "Jul 2012 – Sep 2018",
    location: "Greater Toronto Area, Canada",
    highlights: [
      "Managed multiple aerospace programs, including technical leadership of a DAL-A flight-deck control system for a new narrow-body airliner.",
      "Authored and approved certification deliverables to ARP4754 / ARP4761 / DO-254 / DO-178B/C, managing international customers end to end.",
    ],
  },
  {
    role: "Project Engineer",
    company: "Aversan Inc. (at Honeywell)",
    period: "Jan 2011 – Jul 2012",
    location: "Greater Toronto Area, Canada",
    highlights: [
      "Led a cross-functional team developing aircraft environmental-control electronics from requirements through PDR/CDR into production.",
    ],
  },
  {
    role: "Resident Expert & System Lead, Wayside Subsystem",
    company: "Thales",
    period: "Mar 2008 – Jan 2011",
    location: "Toronto, Canada",
    highlights: [
      "Technical reference for an entire subway line's CBTC signaling design — safety scenarios, requirements, and system integration in a large-scale deployment.",
    ],
  },
  {
    role: "Systems Engineering / Software Requirements Team Lead",
    company: "Honeywell",
    period: "2003 – Mar 2008",
    location: "Toronto, Canada",
    highlights: [
      "Led the software requirements team on a large-scale aerospace program: requirements flow-down, safety and reliability analysis, and qualification planning in DOORS.",
    ],
  },
  {
    role: "Software Developer",
    company: "IBM",
    period: "May 2001 – Aug 2002",
    location: "Toronto, Canada",
    highlights: [
      "Built and tested large-scale C/C++ applications on the DB2 team and maintained the division's development infrastructure of 50+ servers and mainframes.",
    ],
  },
];

export const education = [
  {
    school: "University of Toronto",
    detail: "Engineering",
  },
];

export type Interest = {
  title: string;
  emoji: string;
  description: string;
};

export const interests: Interest[] = [
  {
    title: "Health & Fitness",
    emoji: "💪",
    description:
      "Staying active and healthy is a priority — I believe good engineering starts with good energy.",
  },
  {
    title: "Travel & the Outdoors",
    emoji: "🏔️",
    description:
      "From Bay Area trails to trips abroad, I love exploring new places and spending time outdoors.",
  },
];
