'use client'
import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ProjectForm from './panel/Proje/ProjectForm';
import ProductsForm from './panel/Product/ProductsForm';
import GaleriForm from './panel/Galeri/GaleriForm';
import EmailForm from './panel/Mail/EmailCon';
import Bar from './panel/Bar/Bar';

import { fetchData } from '../../pages/api/utils';

const Admin: React.FC = () => {

  // State'lerin tanımlanması
  const [productList, setProductsList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [galeriList, setGaleriList] = useState([]);
  const [EmailList, setEmailList] = useState([]);

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
  const AddProje = async (newProjeItem: any) => {
    // State güncellemesi
    setProjectList([...projectList, newProjeItem]);
    let arr = [];
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
  const AddProduct = async (newProductItem: any) => {
    // State güncellemesi
    setProductsList([...productList, newProductItem]);
    let arr1 = [];
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
   const AddGaleri = async (newGaleriItem: any) => {
    // State güncellemesi
    setGaleriList([...galeriList, newGaleriItem]);
    let arrG = [];
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
  const AddEmail = async (newMailItem: any) => {
    // State güncellemesi
    setEmailList([...EmailList, newMailItem]);
    let arr = [];
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

