import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MdEmail, MdPhoneInTalk, MdOutlineLocationOn } from "react-icons/md";

const gridItems = [
  { imgSrc: 'pic/ikon/uretim.png', title: 'ÜRETİM', text: 'Özel Ölçüler' },
  { imgSrc: 'pic/ikon/satis.png', title: 'Satış', text: 'Satış ve Satış Sonrası Hizmetler' },
  { imgSrc: 'pic/ikon/tasarim.png', title: 'Tasarım', text: 'Mutfak Ekipmanları İle Modern Mekanlar' },
  { imgSrc: 'pic/ikon/profesyonellik.png', title: 'Profesyonellik', text: 'Gelişmiş Makina Parke ve Uzman Kadro' },
  { imgSrc: 'pic/ikon/kalite.png', title: 'Kalite/Fiyat', text: 'En İyi Kalite / Fiyat Oranı' },
  { imgSrc: 'pic/ikon/secenek.png', title: 'Yüzlerce Seçenek', text: 'Endüstriyel Mutfak Ürünleri' },
];

export default function About() {
  return (
    <Container maxWidth="xl" fixed id="kurumsal">
      <Box sx={{ height: '5vh' }} />
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="center"
          style={{ marginLeft: '100px' }}
        >
          <Grid container spacing={2}>
            {gridItems.map((item, index) => (
              <Grid key={index} item xs={4}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg width="100" height="100">
                    <image href={item.imgSrc} width="100" height="100" />
                  </svg>
                  <div style={{ marginLeft: '10px' }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>{item.text}</Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Box sx={{ height: '5vh' }} />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          width={'100%'}
          style={{ backgroundColor: ' #004080' }}
        >
          <Grid item xs={12} textAlign="center">
            <Typography variant="h3" color="#ccccff">
              FUKOREİS ENDÜSTRİYEL MUTFAK VE SOĞUTMA
            </Typography>
            <Typography variant="body1" gutterBottom color="#ccccff" fontSize={'20px'}>
              Profesyonel mutfaklar için; Depolama, hazırlık, pişirme, servis, açık büfe, bulaşık ve çamaşırhane
              sistemlerini bilgisayarlı çalışma ortamında işletmeye uygun şekilde ücretsiz olarak alt yapı
              çalışmaları ve projelendirme hizmetleri vermekteyiz.
            </Typography>
            <Typography color="#ccccff" fontSize={'20px'}>
              Hoteller, Dinlenme Tesisleri, Restoranlar, Kafeteryalar, Fast Foodlar vb. gibi toplu yemek
              hizmeti veren yerlerin ihtiyaçlarına yönelik geniş ürün yelpazesi ile üretim yapmaktayız.
            </Typography>
            <Typography color="#ccccff" fontSize={'20px'}>
              Firmamız Referansları ile Uzun Yıllardır Endüstriyel Mutfak Ekipmanları Konusunda Hizmet
              Vermiştir. Sizlerde Mutlu Çözüm Ortaklarımız Arasında Yerinizi Almak İçin Bize Ulaşabilirsiniz.
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="center" alignItems="center">
            <MdPhoneInTalk style={{ color: '#00ff00', fontSize: '48px', margin: '10px' }} />
            <h1 style={{ color: '#ccccff', fontSize: '24px', margin: '10px' }}>05555555555</h1>
            <MdEmail style={{ color: '#00ff00', fontSize: '48px', margin: '10px' }} />
            <h1 style={{ color: '#ccccff', fontSize: '24px', margin: '10px' }}>FUKOREIS@FUKOREIS.com</h1>
            <MdOutlineLocationOn style={{ color: '#00ff00', fontSize: '48px', margin: '10px' }} />
            <h1 style={{ color: '#ccccff', fontSize: '24px', margin: '10px' }}>
              Paşaalanı Mah. 12 Ekim Cad. No:201 Karesi – Balıkesir
            </h1>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: '1vh' }} style={{ backgroundColor: '#00ff00' }} />
    </Container>
  );
}
