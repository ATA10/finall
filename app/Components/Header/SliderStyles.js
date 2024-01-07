import styled, { keyframes } from 'styled-components';

export const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SliderContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imgSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // animation: ${fadeOut} 10s ease-in-out ;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const SliderText = styled.div`
  // animation: ${slideUp} 5s ease-in-out infinite, ${fadeInUp} 2s ease-in-out;
  animation: ${fadeOut} 5s ease-in-out infinite, ${fadeInUp} 3s ease-in-out ;
`;
