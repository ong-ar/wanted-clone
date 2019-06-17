import * as React from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 87.72%;
  margin: 0 auto;
  max-width: 1060px;
  height: 50px;
  position: relative;
`;

const Logo = styled.a`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const NavOne = styled.div`
  text-align: center;
  line-height: 50px;
  height: inherit;
`;

const NavTwo = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
`;

const HomePresenter: React.SFC = () => {
  return (
    <React.Fragment>
      <Header>
        <Container>
          <Logo>logo</Logo>
          <NavOne>
            <ul
              style={{
                listStyleType: "none",
                height: "50px",
                margin: 0,
                padding: 0
              }}
            >
              <li style={{ display: "inline" }}>1</li>
              <li style={{ display: "inline" }}>2</li>
            </ul>
          </NavOne>
          <NavTwo>메뉴2</NavTwo>
        </Container>
      </Header>
      <div>slide</div>
      <section>
        <article>article1</article>
        <article>article2</article>
        <article>article3</article>
      </section>
      <footer>footer</footer>
    </React.Fragment>
  );
};

export default HomePresenter;
