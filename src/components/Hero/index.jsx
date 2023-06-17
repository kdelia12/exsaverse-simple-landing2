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
        <div className={`mb-20 text-2xl font-bold dark:text-amber-500 sm:mb-5 md:text-3xl`}>
      <img src={banner} alt="banner" class="transform hover:scale-110 transition duration-500 ease-in-out" />
    </div>
    
          <SectionTitleContainer
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <h2 className="mb-4 text-[1.953rem] font-bold dark:text-amber-500">
            ㅤㅤㅤㅤㅤㅤㅤ
            </h2>
            <ButtonContainer>
            <LinkButton variant="secondary" rounded="lg" to="https://discord.gg/exsaverse">
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