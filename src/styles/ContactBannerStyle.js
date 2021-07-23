import styled from 'styled-components';

const ContactBannerStyle = styled.div`
  padding: 10rem 0;
  .contactBanner_wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner_heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner_heading {
      font-size: 2.5rem;
    }
  }
`;

export default ContactBannerStyle;
