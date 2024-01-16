// SliderStyles.ts
import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  height: 400px; /* Set your desired height */
  overflow: hidden;
`;

export const BackgroundImage = styled.div<{ imgSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
  background-size: cover;
  background-position: center;
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  color: white;
`;

export const SliderText = styled.div`
  max-width: 600px;
`;
