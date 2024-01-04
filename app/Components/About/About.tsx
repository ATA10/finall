import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MdEmail, MdPhoneInTalk, MdOutlineLocationOn } from "react-icons/md";


export default function About() {
        const gridItems = [
          { imgSrc: 'pic/uretim.png', title: 'ÜRETİM', text: 'Özel Ölçüler' },
          { imgSrc: 'pic/satis.png', title: 'Satış', text: 'Satış ve Satış Sonrası Hizmetler' },
          { imgSrc: 'pic/tasarim.png', title: 'Tasarım', text: 'Mutfak Ekipmanları İle Modern Mekanlar' },
          { imgSrc: 'pic/profesyonellik.png', title: 'Profesyonellik', text: 'Gelişmiş Makina Parke ve Uzman Kadro' },
          { imgSrc: 'pic/kalite.png', title: 'Kalite/Fiyat', text: 'En İyi Kalite / Fiyat Oranı' },
          { imgSrc: 'pic/secenek.png', title: 'Yüzlerce Seçenek', text: 'Endüstriyel Mutfak Ürünleri' },
        ];
    return (
        <>
        <Box sx={{ height: '5vh' }}/>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center" 
            alignItems="center" 
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
        </Box>
        <Box sx={{ height: '5vh' }}/>
        <Box>
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            width={'100%'}
            style={{ backgroundColor: ' #004080' }}
            >
            <Grid item xs={12} textAlign="center">
                <Typography variant="h3" color="#ccccff">
                MEKSAŞ ENDÜSTRİYEL MUTFAK VE SOĞUTMA
                </Typography>
                <Typography variant="body1" gutterBottom color="#ccccff">
                Profesyonel mutfaklar için; Depolama, hazırlık, pişirme, servis, açık büfe, bulaşık ve çamaşırhane
                sistemlerini bilgisayarlı çalışma ortamında işletmeye uygun şekilde ücretsiz olarak alt yapı
                çalışmaları ve projelendirme hizmetleri vermekteyiz.
                </Typography>
                <Typography color="#ccccff">
                Hoteller, Dinlenme Tesisleri, Restoranlar, Kafeteryalar, Fast Foodlar vb. gibi toplu yemek
                hizmeti veren yerlerin ihtiyaçlarına yönelik geniş ürün yelpazesi ile üretim yapmaktayız.
                </Typography>
                <Typography color="#ccccff">
                Firmamız Referansları ile Uzun Yıllardır Endüstriyel Mutfak Ekipmanları Konusunda Hizmet
                Vermiştir. Sizlerde Mutlu Çözüm Ortaklarımız Arasında Yerinizi Almak İçin Bize Ulaşabilirsiniz.
                </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent="center" alignItems="center">
                <MdPhoneInTalk style={{ color: '#ccccff', fontSize: '48px', margin: '10px' }} />05555555555                
                <MdEmail style={{ color: '#ccccff', fontSize: '48px', margin: '10px' }} />meksas@meksas.com
                <MdOutlineLocationOn style={{ color: '#ccccff', fontSize: '48px', margin: '10px' }} />Paşaalanı Mah. 12 Ekim Cad. No:201 Karesi – Balıkesir
            </Grid>
        </Grid>        
        </Box>
        <Box sx={{ height: '1vh' }} style={{ backgroundColor: '#ccff33' }}/>
        </>
    );
  }