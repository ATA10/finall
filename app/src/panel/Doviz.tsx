import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, Typography } from '@mui/material';
const Home = () => {
    const [tcmbDataUSD, setTcmbDataUSD] = useState(null);
    const [tcmbDataEUR, setTcmbDataEUR] = useState(null);
    const [tcmbData, setTcmbData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/doviz');
                const data = await response.text();
                
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, 'text/xml');
                console.log(xmlDoc);
                // const xpathResultDolar = xmlDoc.evaluate('/Tarih_Date/Currency[1]/ForexBuying', xmlDoc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                // const targetElementDolar = xpathResultDolar.singleNodeValue;
                // console.log(targetElementDolar?.textContent);
                // setTcmbDataUSD(targetElementDolar?.textContent);

                // const xpathResultEuro = xmlDoc.evaluate('/Tarih_Date/Currency[4]/ForexBuying', xmlDoc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                // const targetElementEuro = xpathResultEuro.singleNodeValue;
                // console.log(targetElementEuro?.textContent);
                // setTcmbDataEUR(targetElementEuro?.textContent);

                const newData = [];
                const xpathResultAllCurrencies = xmlDoc.evaluate('/Tarih_Date/Currency/Isim', xmlDoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                const xpathResultAllCurrencies1 = xmlDoc.evaluate('/Tarih_Date/Currency/ForexBuying', xmlDoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                for (let i = 0; i < xpathResultAllCurrencies.snapshotLength; i++) {
                const targetElementCurrency = xpathResultAllCurrencies.snapshotItem(i);
                const targetElementCurrency1 = xpathResultAllCurrencies1.snapshotItem(i);
                newData.push(targetElementCurrency?.textContent + ": " + targetElementCurrency1?.textContent);
                console.log(targetElementCurrency?.textContent + ":" + targetElementCurrency1?.textContent);
                }                
                setTcmbData(newData);
            } catch (error) {
                console.error('Error fetching TCMB data:', error);
            }
        };

        fetchData();
    }, []);

  return (
    <>
    <Grid
    flexDirection="column"
    width="40%" // Tam genişlik
    margin="auto" // Ortala
    container
    justifyContent="center"
    alignItems="center"  
    style={{backgroundColor:'rgba(255, 255, 255, 0.8)'}}    
    >
        <Box>
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
            Döviz Kurları
            </Typography> 
        </Box>
        <Box display={'flex'} margin={'left'}>
            {/* <Box>
                {tcmbDataUSD && (
                <><Typography variant="h4" gutterBottom>Dolar : {(tcmbDataUSD)}</Typography>
                <Typography variant="h4" gutterBottom>Euro : {(tcmbDataEUR)}</Typography></>
                )}
                
            </Box> */}
            <Box>
                <ul>
                    {tcmbData.slice(0,10).map((item, index) => (
                    <li key={index}>
                        <Typography variant="h4" gutterBottom>{item}</Typography>
                    </li>
                    ))}
                </ul>
            </Box>
        </Box>
    </Grid>
    </>
  );
};

export default Home;
