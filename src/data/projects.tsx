import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiBootstrap,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiShadcnui,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_blank"
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
          target="_blank"
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
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  shadcn: {
    title: "Shadcn UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  spline: {
    title: "Spline / 3D",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">Java</span>,
  },
  csharp: {
    title: "C#",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">C#</span>,
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
    id: "smart-cv-builder",
    category: "Web App",
    title: "Smart CV Builder",
    src: `${BASE_PATH}/myportfolio/landing.png`,
    screenshots: ["landing.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Smart CV Builder - Web App tương tự Overleaf
          </TypographyP>

          <TypographyP className="font-mono">
            Smart CV Builder là web app giúp người dùng tạo CV trực tuyến,
            chỉnh sửa nội dung và xem trước bản CV theo thời gian thực. Dự án
            được lấy cảm hứng từ Overleaf, nhưng tập trung vào việc xây dựng CV
            chuyên nghiệp cho sinh viên IT và người mới đi thực tập.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Main Features</TypographyH3>

          <p className="font-mono mb-2">
            Người dùng có thể nhập thông tin cá nhân, học vấn, kỹ năng, kinh
            nghiệm, dự án cá nhân và xem preview CV ngay bên cạnh. Dự án có thể
            mở rộng thêm chức năng chọn template, xuất PDF và kiểm tra ATS cơ
            bản.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "ecommerce-website",
    category: "Web Development",
    title: "E-commerce Website",
    src: `${BASE_PATH}/myportfolio/projects.png`,
    screenshots: ["projects.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [PROJECT_SKILLS.postgres],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            E-commerce Website
          </TypographyP>

          <TypographyP className="font-mono">
            Website thương mại điện tử với các chức năng cơ bản như hiển thị sản
            phẩm, xem chi tiết sản phẩm, giỏ hàng, quản lý sản phẩm, quản lý
            người dùng, quản lý đơn hàng và xuất hóa đơn.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Admin Features</TypographyH3>

          <p className="font-mono mb-2">
            Trang quản trị hỗ trợ thêm, sửa, xóa sản phẩm, tìm kiếm bằng AJAX,
            xem chi tiết user, chỉnh sửa user, quản lý đơn hàng, thống kê doanh
            thu và xuất dữ liệu ra Excel.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "student-management-system",
    category: "OOP Project",
    title: "Student Management System",
    src: `${BASE_PATH}/myportfolio/project.png`,
    screenshots: ["project.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.csharp],
      backend: [PROJECT_SKILLS.csharp],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Student Management System
          </TypographyP>

          <TypographyP className="font-mono">
            Đây là dự án quản lý sinh viên được xây dựng khi học lập trình hướng
            đối tượng và cấu trúc dữ liệu. Ứng dụng tập trung vào việc quản lý
            danh sách sinh viên và xử lý dữ liệu bằng các thuật toán cơ bản.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Functions</TypographyH3>

          <p className="font-mono mb-2">
            Dự án hỗ trợ thêm, sửa, xóa, hiển thị, lọc dữ liệu, tìm kiếm tuyến
            tính, tìm kiếm nhị phân và sắp xếp danh sách sinh viên. Đây là project
            giúp luyện tư duy OOP, xử lý danh sách và tổ chức code rõ ràng hơn.
          </p>

          <SlideShow images={[`${BASE_PATH}/myportfolio/project.png`]} />
        </div>
      );
    },
  },

  {
    id: "salary-management-system",
    category: "OOP Project",
    title: "Employee Salary Management",
    src: `${BASE_PATH}/myportfolio/projects.png`,
    screenshots: ["projects.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.csharp],
      backend: [PROJECT_SKILLS.csharp],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Employee Salary Management
          </TypographyP>

          <TypographyP className="font-mono">
            Dự án quản lý tiền lương nhân viên được xây dựng bằng C# theo hướng
            lập trình hướng đối tượng. Hệ thống xử lý hai nhóm nhân viên chính:
            nhân viên biên chế và nhân viên hợp đồng.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">OOP Practice</TypographyH3>

          <p className="font-mono mb-2">
            Dự án giúp luyện tập kế thừa, đa hình, đóng gói dữ liệu, phương thức
            nhập xuất và tính lương theo từng loại nhân viên. Đây là một project
            phù hợp để thể hiện nền tảng lập trình C# cơ bản.
          </p>

          <SlideShow images={[`${BASE_PATH}/myportfolio/projects.png`]} />
        </div>
      );
    },
  },

  {
    id: "interactive-portfolio",
    category: "Portfolio",
    title: "3D Interactive Portfolio",
    src: `${BASE_PATH}/myportfolio/landing.png`,
    screenshots: ["landing.png"],
    live: "http://localhost:3000",
    github: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            3D Interactive Portfolio
          </TypographyP>

          <TypographyP className="font-mono">
            Đây là portfolio cá nhân của Bao Nguyen Nhan, được tùy chỉnh từ một
            template 3D interactive portfolio. Website dùng Next.js, Tailwind CSS,
            animation và hiệu ứng 3D để giới thiệu bản thân, kỹ năng và các dự án
            đã thực hiện.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Purpose</TypographyH3>

          <p className="font-mono mb-2">
            Mục tiêu của dự án là xây dựng một portfolio nổi bật để apply thực
            tập Frontend Developer, đồng thời thể hiện khả năng sử dụng React,
            Next.js, CSS animation và giao diện hiện đại.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
        </div>
      );
    },
  },
];

export default projects;