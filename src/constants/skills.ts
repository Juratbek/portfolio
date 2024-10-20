import {
  Git,
  Java,
  JavaScript,
  Jest,
  Nestjs,
  NextJS,
  Nodejs,
  PostgreSQL,
  React,
  ReactTestingLibrary,
  Redux,
  Spring,
  TypeScript,
  Vue,
} from "../components/logos";

export interface Skill {
  name: string;
  description?: string;
  img: {
    component: (_props: Record<string, any>) => any;
    top: number;
    left: number;
  };
}

export const MAIN_SKILLS: Skill[] = [
  {
    name: "React",
    img: {
      component: React,
      top: 100,
      left: 130,
    },
  },
  {
    name: "Next.js",
    img: {
      component: NextJS,
      top: 102,
      left: 132,
    },
  },
  {
    name: "Redux",
    img: {
      component: Redux,
      top: 92,
      left: 130,
    },
  },
  {
    name: "JavaScript",
    img: {
      component: JavaScript,
      top: 72,
      left: 100,
    },
  },
  {
    name: "TypeScript",
    img: {
      component: TypeScript,
      top: 72,
      left: 100,
    },
  },
  {
    name: "React Query",
    img: {
      component: TypeScript,
      top: 72,
      left: 100,
    },
  },
  {
    name: "Jest",
    img: {
      component: Jest,
      top: 87,
      left: 116,
    },
  },
  {
    name: "React Testing Library",
    img: {
      component: ReactTestingLibrary,
      top: 80,
      left: 120,
    },
  },
  {
    name: "Git",
    img: {
      component: Git,
      top: 77,
      left: 111,
    },
  },
];

export const COMPETENT_SKILLS: Skill[] = [
  {
    name: "Vue.js",
    img: {
      component: Vue,
      top: 100,
      left: 110,
    },
  },
  {
    name: "React Native",
    img: {
      component: React,
      top: 100,
      left: 130,
    },
  },
  {
    name: "Node.js",
    img: {
      component: Nodejs,
      top: 84,
      left: 112,
    },
  },
  {
    name: "NestJS",
    img: {
      component: Nestjs,
      top: 80,
      left: 112,
    },
  },
  {
    name: "Java",
    img: {
      component: Java,
      top: 59,
      left: 126,
    },
  },
  {
    name: "Spring Boot",
    img: {
      component: Spring,
      top: 101,
      left: 112,
    },
  },
  {
    name: "PostgreSQL",
    img: {
      component: PostgreSQL,
      top: 80,
      left: 112,
    },
  },
];
