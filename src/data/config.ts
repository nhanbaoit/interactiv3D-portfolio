const config = {
  title: "Bao Nguyen Nhan | Frontend Developer",
  description: {
    long: "Explore the portfolio of Bao Nguyen Nhan, a Frontend Developer learning React, Next.js, Java, C#, HTML, CSS and building modern interactive websites.",
    short:
      "Discover the portfolio of Bao Nguyen Nhan, a Frontend Developer focused on React, Next.js and interactive web experiences.",
  },
  keywords: [
    "Bao Nguyen Nhan",
    "Nhan Bao",
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Three.js",
    "Portfolio",
    "CV Builder",
    "Student Management System",
  ],
  author: "Bao Nguyen Nhan",
  email: "nhanbao.0401@gmail.com",
  site: "http://localhost:3000",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/_Abhi_Speaks/",
    linkedin: "https://www.linkedin.com/in/zende-abhijit/",
    instagram: "https://www.instagram.com/_.celestial_abhi._/",
    facebook: "https://www.facebook.com/profile.php?id=100010029821759",
    github: "https://github.com/Abhiz2411/",
  },
};
export { config };
