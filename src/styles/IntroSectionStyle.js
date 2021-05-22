import styled from 'styled-components';

const IntroSectionStyle = styled.div`
  .intro {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .intro_heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .intro_name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .intro_img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .intro_info {
    margin-top: -18rem;
  }
  .intro_social,
  .intro_scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .intro_social {
    left: 50px;
  }
  .intro_scrollDown {
    right: 50px;
  }
  .intro_social_indicator,
  .intro_scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .intro_scrollDown {
    img {
      max-height: 70px;
    }
  }
  .intro_social_text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .intro {
      min-height: 750px;
    }
    .intro_heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .intro_name {
        font-size: 4.5rem;
      }
    }
    .intro_img {
      height: 400px;
    }
    .intro_info {
      margin-top: 3rem;
    }
    .intro_social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .intro_social_indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .intro_social_text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .intro_scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default IntroSectionStyle;
