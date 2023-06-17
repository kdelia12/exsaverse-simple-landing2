import tw from "twin.macro";

import { AiFillStar } from "react-icons/ai";

import Container from "../../common/Container";
import SectionTitleContainer from "../../common/SectionTitleContainer";
import Row, { RowItem } from "../../common/Row";

import AuthorImage1 from "../../assets/images/author-01.png";
import AuthorImage2 from "../../assets/images/author-02.png";
import AuthorImage3 from "../../assets/images/author-03.png";

const starFillColor = "text-yellow-400";
import { GiCoins } from 'react-icons/gi';
import { FaDollarSign } from 'react-icons/fa';

const responselastsales = await fetch('https://urchin-app-cps4w.ondigitalocean.app/lastsales');
const data = await responselastsales.json();
const TeamsInfo = data.results.slice(0, 12).map((item) => ({
  ratings: (
    <>
        <FaDollarSign className={`${starFillColor}`} />
        <FaDollarSign className={`${starFillColor}`} />
        <FaDollarSign className={`${starFillColor}`} />
        <FaDollarSign className={`${starFillColor}`} />
        <FaDollarSign className={`${starFillColor}`} />
    </>
  ),
  desc: `${item.quantity} x ${item.item}`,
  authorName: item.price,
  authorPosition: item.specific,
}));

const AuthorName = tw.h5`
  pl-1 text-[1 rem] font-bold text-black dark:text-amber-500`;

const AuthorPosition = tw.span`block text-[0.8rem] font-normal text-[#959CB1]`;

const AuthorWrapper = tw.div`flex`;

const ReviewRating = tw.div`mb-6 inline-flex gap-2`;

const TeamsDesc = tw.div`dark:text-amber-500`;

const Divider = tw.span`my-4 block h-[0.5px] bg-[#959cb1]`;

const Teams = () => {
  return (
    <section className="section-spacing bg-[#F9FAFF] dark:bg-black">
  <Container>
    <SectionTitleContainer className="mb-14 text-center">
      <h2 className="section-title mb-2">Last Sales</h2>
      <p>
        Last Sales That Happen in Our Discord
      </p>
    </SectionTitleContainer>

    <Row>
      {TeamsInfo.map((review, index) => (
        <RowItem
          key={index}
          className="mb-8 w-full sm:w-1/2 lg:w-1/4 px-4"
        >
          <article
            className={`
              h-full rounded-md bg-white py-8 px-4 pt-4
              text-[#959CB1] shadow-lg
              dark:bg-[#1d2144]`}
          >
            <ReviewRating>{review.ratings}</ReviewRating>

            <TeamsDesc>{review.desc}</TeamsDesc>

            <Divider></Divider>

            <AuthorWrapper>
              <picture>
                <img src={review.authorImg} alt="" />
              </picture>

              <AuthorName>
                {review.authorName}
                <AuthorPosition>{review.authorPosition}</AuthorPosition>
              </AuthorName>
            </AuthorWrapper>
          </article>
        </RowItem>
      ))}
    </Row>
  </Container>
</section>

  );
};

export default Teams;
