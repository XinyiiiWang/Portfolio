import styled from 'styled-components';

const MapStyle = styled.div`
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map_card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background-color: var(--deep-dark);
  }
`;

export default MapStyle;
