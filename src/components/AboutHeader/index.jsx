import { NavLink } from "react-router-dom";

import Container from "../../common/Container";
import Row, { RowItem } from "../../common/Row";

const AboutHeader = () => {
  return (
    <section className="py-[40px] px-4 dark:bg-black sm:px-8">
      <Container>
        <Row className="gap-6 sm:gap-0">
          <RowItem className="w-full md:w-8/12">
            <h2 className="section-title mb-2">About Page</h2>
            <p>
              Exsaverse is a biggest whitelist marketplace on Solana rightnow. But we dont wanna stop there, we are escalating to others network with our tech that keep anonimity of either buyer and seller!
            </p>
          </RowItem>

          <RowItem className="w-full md:w-4/12 md:self-center md:text-center">
            <p className="font-medium">
              <NavLink className="pr-2 hover:text-blue-500" to="/">
                Home
              </NavLink>
              &gt;
              <span className="pl-2 text-black-500">About</span>
            </p>
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHeader;
