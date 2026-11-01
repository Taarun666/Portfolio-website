import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiArduino,
  SiChakraui,
  SiDocker,
  SiEspressif,
  SiExpress,
  SiFirebase,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  go: {
    title: "Go",
    bg: "black",
    fg: "white",
    icon: <SiGo />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  esp: {
    title: "ESP8266",
    bg: "black",
    fg: "white",
    icon: <SiEspressif />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "6-axis-robotic-arm",
    category: "Robotics",
    title: "6-Axis Robotic Arm",
    src: "/assets/projects/6-axis-robotic-arm.jpg",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.arduino, PROJECT_SKILLS.esp],
      backend: [],
    },
    live: "https://github.com/Taarun666/6-axis-robotic-arm",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A wirelessly controlled 6-axis robotic arm
          </TypographyP>
          <TypographyP className="font-mono ">
            A 6-axis robotic arm controlled by an ESP8266, using MG996R servo
            motors for movement. It supports wireless control over WiFi via a
            web interface or mobile app, with real-time joint control,
            pre-programmed sequences, and inverse kinematics — built for
            prototyping and automation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "half-a-brain",
    category: "AI / Self-Hosted",
    title: "Half-a-Brain",
    src: "/assets/projects/half-a-brain.jpg",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker],
    },
    live: "https://github.com/Taarun666/Half-a-Brain",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Self-hostable AI, turned into a personal autonomous assistant
          </TypographyP>
          <TypographyP className="font-mono ">
            A self-hosted AI setup that answers questions from your own docs
            or the web, runs custom agents, schedules automations, and does
            deep research — all pointed at either an online or a local LLM.
            Deployed with Docker Compose alongside a Postgres/pgvector
            database for retrieval.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "test-toe",
    category: "AI Security",
    title: "Test Toe",
    src: "/assets/projects/test-toe.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.go, PROJECT_SKILLS.docker],
    },
    live: "https://github.com/Taarun666/test-toe",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Autonomous AI agents for app pentesting
          </TypographyP>
          <TypographyP className="font-mono ">
            An AI pentesting setup that runs autonomous agents acting like
            real hackers — dynamically exercising an app to find
            vulnerabilities and validate them with working proofs of concept
            instead of false positives. Supports multi-agent orchestration,
            auto-fix suggestions, compliance reports, and CI/CD integration.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "notes-maker",
    category: "Productivity",
    title: "Notes Maker",
    src: "/assets/projects/notes-maker.png",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    live: "https://github.com/Taarun666/notes-maker",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Turn YouTube videos into clean, organized notes
          </TypographyP>
          <TypographyP className="font-mono ">
            A lightweight Python app that generates notes straight from
            YouTube videos. Keeps a clean, intuitive interface with note
            creation, editing, deletion, and categorization, aimed at being a
            simple way to turn video content into something you can actually
            study from.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
