import tw from "twin.macro";
import { LinkButton } from "../../common/Button";
import Container from "../../common/Container";
import SectionTitleContainer from "../../common/SectionTitleContainer";
import banner from "../../assets/images/banner.jpg";

const ButtonContainer = tw.div`space-x-4 md:space-x-6`;


const Hero = () => {
  return (
    <div>
      <section id="hero" className="hero section-spacing dark:bg-black">
        <Container className="text-center">
        <div className={`mb-[20px] text-[2.488rem]
                font-bold 
                dark:text-amber-500 
                sm:mb-5 md:text-[3rem]`}>
      <img src={banner} alt="banner" />
    </div>
    
          <SectionTitleContainer
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <h1
              className={`mb-[20px] text-[2.488rem]
                font-bold 
                dark:text-amber-500 
                sm:mb-5 md:text-[3rem]`}
            >
              Exsaverse <br /> Whitelist Marketplace
            </h1>

            <p className="mb-12 text-[1.2rem] font-medium dark:text-slate-400">
              Lorem Bla bla bla Lorem Bla bla blaLorem Bla bla blaLorem Bla bla blaLorem Bla bla blaLorem Bla bla blaLorem Bla bla blaLorem Bla bla blaLorem Bla bla bla
            </p>

            <ButtonContainer>
              <LinkButton variant="secondary" rounded="lg">
                Join Discord
              </LinkButton>
            </ButtonContainer>
          </SectionTitleContainer>
        </Container>
      </section>
    </div>
  );
};

export default Hero;