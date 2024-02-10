import PageBanner from "@/components/PageBanner";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";

import dynamic from "next/dynamic";
const ProjectMasonryIsotop = dynamic(
  () => import("@/components/ProjectMasonryIsotop"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "My Projects",
};

const ProjectMasonry = () => {
  return (
    <MainLayout header={2} onePageMenu={true}>
      <PageBanner pageName={"My Projects"} />
      <section className="projects-masonry-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <ProjectMasonryIsotop />
          {/* <div className="project-btn mt-25 text-center wow fadeInUp delay-0-2s">
            <Link legacyBehavior href="/projects">
              <a className="theme-btn">
                View More Projects <i className="far fa-angle-right" />
              </a> 
            </Link> 
          </div> */}
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </MainLayout>
  );
};
export default ProjectMasonry;