// Slider.tsx
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SliderContainer, BackgroundImage, TextContainer, SliderText } from './SliderStyles';

const gridItems = [
  { imgSrc: '/pic/tema/1.jpg', title: 'FUKO REİZ ENDÜSTRİYEL MUTFAK VE TASARIM', text: 'YÜKSEK KALİTELİ ENDÜSTRİYEL MUTFAK ÜRÜNLERİ' },
  { imgSrc: '/pic/tema/2.jpg', title: 'FUKO REİZ ENDÜSTRİYEL MUTFAK VE TASARIM', text: 'PROFESYONEL MUTFAKLAR İÇİN PROFESYONEL ÜRÜNLER' },
  { imgSrc: '/pic/tema/3.jpg', title: 'FUKO REİZ ENDÜSTRİYEL MUTFAK VE TASARIM', text: 'ÜST DÜZEY TASARIMLAR' },
];

const Slider = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % gridItems.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      <BackgroundImage imgSrc={gridItems[currentItem].imgSrc} />
      <Container maxWidth="xl" fixed>
        <TextContainer>
          <SliderText>
            <Typography variant="h4" color="white" style={{ fontWeight: 'inherit' }}>
              {gridItems[currentItem].title}
            </Typography>
            <Typography variant="h2" color="white" style={{ fontWeight: 'inherit' }}>
              {gridItems[currentItem].text}
            </Typography>
          </SliderText>
        </TextContainer>
      </Container>
    </SliderContainer>
  );
};

export default Slider;
