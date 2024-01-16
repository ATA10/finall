'use client'
import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ProjectForm from './panel/Proje/ProjectForm';
import ProductsForm from './panel/Product/ProductsForm';
import GaleriForm from './panel/Galeri/GaleriForm';
import EmailForm from './panel/Mail/EmailCon';
import Bar from './panel/Bar/Bar';

import { fetchData } from '../../pages/api/utils';
import { Productss } from './panel/Product/EkleUrun';
import { Projectss } from './panel/Proje/EkleProje';


interface Galeriss {
  id: number;
  img: string;
  title: string;
}

interface Emailss {
  id: number;
  name: string;
  email: string;
  durum: string;
}

const Admin: React.FC = () => {

  // State'lerin tanımlanması
  const [productList, setProductsList] = useState<Productss[]>([]);
  const [projectList, setProjectList] = useState<Projectss[]>([]);
  const [galeriList, setGaleriList] = useState<Galeriss[]>([]);
  const [EmailList, setEmailList] = useState<Emailss[]>([]);

  useEffect(() => {
    fetchData('Urunler').then((data) => {
      setProductsList(data);
    });
  }, []);

  useEffect(() => {
    fetchData('Projeler').then((data) => {
      setProjectList(data);
    });
  }, []);

  useEffect(() => {
    fetchData('Galeri').then((data) => {
      setGaleriList(data);
    });
  }, []);

  useEffect(() => {
    fetchData('email').then((data) => {
      setEmailList(data);
    });
  }, []);


  // Yeni proje eklemek için kullanılan fonksiyon
  const AddProje = async (newProjeItem: Projectss) => {
    // State güncellemesi
    setProjectList([...projectList, newProjeItem]);
    let arr: Projectss[] = [];
    projectList.map((proje, index) => {
      arr.push(proje);
    });
    arr.push(newProjeItem);
    try {
      // API'ye POST isteği gönderme
      const response = await fetch('/api/ServerProje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arr),
      });
      if (response.ok) {
        console.log('Proje başarıyla eklendi');
      } else {
        console.error('Proje eklenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu', error);
    }
  };

  // State değişikliği sonrasında yapılacak işlemler
  useEffect(() => {
    console.log(projectList);
  }, [projectList]);

  // Yeni ürün eklemek için kullanılan fonksiyon
  const AddProduct = async (newProductItem: Productss) => {
    // State güncellemesi
    setProductsList([...productList, newProductItem]);
    let arr1: Productss[] = [];
    productList.map((urun, index) => {
      arr1.push(urun);
    });
    arr1.push(newProductItem);
    try {
      // API'ye POST isteği gönderme
      const response = await fetch('/api/ServerProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arr1),
      });
      if (response.ok) {
        console.log('Ürün başarıyla eklendi');
      } else {
        console.error('Ürün eklenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu', error);
    }
  };

  // State değişikliği sonrasında yapılacak işlemler
  useEffect(() => {
    console.log(productList);
  }, [productList]);

   // Yeni Galeri eklemek için kullanılan fonksiyon
   const AddGaleri = async (newGaleriItem: Galeriss) => {
    // State güncellemesi
    setGaleriList([...galeriList, newGaleriItem]);
    let arrG: Galeriss[] = [];
    galeriList.map((Galeri, index) => {
      arrG.push(Galeri);
    });
    arrG.push(newGaleriItem);
    try {
      // API'ye POST isteği gönderme
      const response = await fetch('/api/ServerGaleri', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arrG),
      });
      if (response.ok) {
        console.log('Galeri başarıyla eklendi');
      } else {
        console.error('Galeri eklenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu', error);
    }
  };

  // State değişikliği sonrasında yapılacak işlemler
  useEffect(() => {
    console.log(galeriList);
  }, [galeriList]);


  // Yeni proje eklemek için kullanılan fonksiyon
  const AddEmail = async (newMailItem: Emailss) => {
    // State güncellemesi
    setEmailList([...EmailList, newMailItem]);
    let arr: Emailss[] = [];
    EmailList.map((mail, index) => {
      arr.push(mail);
    });
    arr.push(newMailItem);
    try {
      // API'ye POST isteği gönderme
      const response = await fetch('/api/Serveremail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arr),
      });
      if (response.ok) {
        console.log('email başarıyla eklendi');
      } else {
        console.error('email eklenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu', error);
    }
  };

  // State değişikliği sonrasında yapılacak işlemler
  useEffect(() => {
    console.log(EmailList);
  }, [EmailList]);

  // Component'in render edildiği kısım
  return (
    <>
      <CssBaseline />
      <div>
        <h1>Admin Panel</h1>
        <Bar/>
        <ProjectForm ProjeList={projectList} setProjeList={setProjectList} AddProje={AddProje} />
        <ProductsForm ProductList={productList} setProductList={setProductsList} AddProduct={AddProduct} />
        <GaleriForm GaleriList={galeriList} setGaleriList={setGaleriList} AddGaleri={AddGaleri}/>
        <EmailForm  emaillist={EmailList} setemaillist={setEmailList} AddEmail={AddEmail}/>        
      </div>
    </>
  );
};

export default Admin;

