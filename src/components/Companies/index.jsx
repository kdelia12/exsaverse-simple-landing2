import React from "react";
import { Link } from "react-router-dom";
import SectionTitleContainer from "../../common/SectionTitleContainer";

import Container from "../../common/Container";

import CompanyImage1 from "../../assets/partnership/eogold.png";
import CompanyImage2 from "../../assets/partnership/ineargold.png";
import CompanyImage3 from "../../assets/partnership/linkedgold.png";
import CompanyImage4 from "../../assets/partnership/segsdao.png";
import CompanyImage5 from "../../assets/partnership/stressgold.png";
import CompanyImage6 from "../../assets/partnership/unitygold.png";

const imageLinkHoverClass =
  "object-cover grayscale transition-all duration-300 ease-in-out hover:grayscale-0 lg:max-w-[130px]";
const Companies = () => {
  return (
    <section className="companies section-spacing dark:bg-black">
      <Container>
        <SectionTitleContainer>
          <h2 className="section-title mb-2">Our Partner</h2>
        </SectionTitleContainer>

        {/* wrapper */}
        <div
  data-aos="fade-up"
  data-aos-once="true"
  className="flex flex-wrap items-center justify-center gap-8 rounded-lg p-3 md:p-8 lg:p-7 xl:p-10"
>
  <Link
    to="https://twitter.com/eocommunity_"
    target="_blank"
    className={`w-full md:w-1/6 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
  >
    <img src={`${CompanyImage1}`} alt="uideck" className="max-w-full max-h-full" />
  </Link>
  <Link
    to="https://twitter.com/ineardao"
    target="_blank"
    className={`w-full md:w-1/6 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
  >
    <img src={`${CompanyImage2}`} alt="tailgrids" className="max-w-full max-h-full" />
  </Link>
  <Link
    to="https://twitter.com/LinkedCo"
    target="_blank"
    className={`w-full md:w-1/6 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
  >
    <img src={`${CompanyImage3}`} alt="lineicons" className="max-w-full max-h-full" />
  </Link>
  <Link
    to="https://twitter.com/segs_dao"
    target="_blank"
    className={`w-full md:w-1/6 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
  >
    <img src={`${CompanyImage4}`} alt="ayroui" className="max-w-full max-h-full" />
  </Link>
  <Link
    to="https://twitter.com/StressCapitals"
    target="_blank"
    className={`w-full md:w-1/6 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
  >
    <img src={`${CompanyImage5}`} alt="plainadmin" className="max-w-full max-h-full" />
  </Link>
  <Link
    to="https://twitter.com/unityacademy__?s=21"
    target="_blank"
    className={`w-full md:w-1/6 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
  >
    <img src={`${CompanyImage6}`} alt="plainadmin" className="max-w-full max-h-full" />
  </Link>
</div>
        {/* end wrapper */}
      </Container>
    </section>
  );
};
export default Companies;