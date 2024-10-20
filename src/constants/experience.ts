export interface Experience {
  company: string;
  jobs: string[];
  from: string;
  to: string;
}

export const EXPERIENCES: Experience[] = [
  {
    company: "EPAM Systems",
    jobs: [
      "Developing the frontend infrastructure of client web applications, enhancing render performance and user experience.",
      "Conducting code reviews and providing constructive feedback to team members.",
      "Resolving technical issues and bugs in a timely manner to ensure smooth project delivery.",
      "Working closely with backend developers to integrate frontend components with server-side logic.",
      "Collaborating with the design team to implement user-friendly interfaces that met client requirements.",
      "Mentoring junior developers and assisted them in solving complex technical problems.",
    ],
    from: "July 2021",
    to: "Present",
  },
  {
    company: "Udevs",
    jobs: [
      "Developed a streaming app for Samsung TVs using Tizen and React.",
      "Integrated the app with the remote controller for enhanced user interaction and navigation.",
      "Optimized app performance and memory usage to ensure smooth operation on Samsung TV devices.",
    ],
    from: "Feb. 2024",
    to: "June 2024",
  },
  {
    company: "Menotary",
    jobs: [
      "Implemented new modules of the startup project of the company.",
      "Optimized existing codebase for improved performance and scalability.",
      "Developed and delivered web apps for clients.",
    ],
    from: "Sep. 2020",
    to: "July 2021",
  },
];
