import tw from "twin.macro";

import { AiFillStar } from "react-icons/ai";

import Container from "../../common/Container";
import SectionTitleContainer from "../../common/SectionTitleContainer";
import Row, { RowItem } from "../../common/Row";

import AuthorImage1 from "../../assets/images/anu.gif";
import AuthorImage2 from "../../assets/images/anu.gif";
import AuthorImage3 from "../../assets/images/anu.gif";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const starFillColor = "text-yellow-400";

const reviewsInfo = [
  {
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage1}`,
    authorName: "Musharof Chy",
    authorPosition: "Founder @TailGrids",
    discordLink: "https://discord.gg/example",
    twitterLink: "https://twitter.com/example",
  },
  {
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage2}`,
    authorName: "Devid Weilium",
    authorPosition: "Founder @UIdeck",
    discordLink: "https://discord.gg/example",
    twitterLink: "https://twitter.com/example",
  },
  {
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage3}`,
    authorName: "Lethium Frenci",
    authorPosition: "Founder @Lineicons",
    discordLink: "https://discord.gg/example",
    twitterLink: "https://twitter.com/example",
  },
  {
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage3}`,
    authorName: "Lethium Frenci",
    authorPosition: "Founder @Lineicons",
    discordLink: "https://discord.gg/example",
    twitterLink: "https://twitter.com/example",
  },
  {
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage1}`,
    authorName: "Musharof Chy",
    authorPosition: "Founder @TailGrids",
    discordLink: "https://discord.gg/example",
    twitterLink: "https://twitter.com/example",
  },
  {
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage2}`,
    authorName: "Devid Weilium",
    authorPosition: "Founder @UIdeck",
    discordLink: "https://discord.gg/example",
    twitterLink: "https://twitter.com/example",
  },
  {
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage3}`,
    authorName: "Lethium Frenci",
    authorPosition: "Founder @Lineicons",
    discordLink: "https://discord.gg/example",
    twitterLink: "https://twitter.com/example",
  },
  {
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage3}`,
    authorName: "Lethium Frenci",
    authorPosition: "Founder @Lineicons",
    discordLink: "https://discord.gg/example",
    twitterLink: "https://twitter.com/example",
  },
];

const AuthorName = tw.h5`
  pl-1 text-[1 rem] font-bold text-black dark:text-amber-500`;

const AuthorPosition = tw.span`block text-[0.8rem] font-normal text-[#959CB1]`;

const AuthorWrapper = tw.div`flex`;
const Divider = tw.span`my-3 block h-[0.5px] bg-[#959cb1]`;
const DiscordIcon = tw(FaDiscord)`w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-300`;
const TwitterIcon = tw(FaTwitter)`w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-300`;
const Reviews = () => {
  return (
    <section className="section-spacing bg-[#F9FAFF] dark:bg-black">
  <Container>
    <SectionTitleContainer className="mb-14 text-center">
      <h2 className="section-title mb-2">Meet Our Teams</h2>
      <p>We have a professional team that handles this marketplace well</p>
    </SectionTitleContainer>

    <Row>
      {reviewsInfo.map((review, index) => (
        <RowItem key={index} className="mb-8 w-full sm:w-1/2 lg:w-1/4 px-4">
          <article
            className={`
              h-full rounded-md bg-white py-8 px-4
              text-[#959CB1] shadow-lg
              dark:bg-[#1d2144]`}
          >
            <picture>
              <img src={review.authorImg} alt="" />
            </picture>
            <Divider></Divider>
            <AuthorWrapper>
              <AuthorName>
                {review.authorName}
                <AuthorPosition>{review.authorPosition}</AuthorPosition>
              </AuthorName>
              <div className="ml-4 flex items-center">
                <a
                  href={review.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiscordIcon />
                </a>
                <a
                  href={review.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4"
                >
                  <TwitterIcon />
                </a>
              </div>
            </AuthorWrapper>
          </article>
        </RowItem>
      ))}
    </Row>
  </Container>
</section>

  );
};

export default Reviews;
