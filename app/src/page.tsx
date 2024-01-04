'use client'
import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ProjectForm from './panel/ProjectForm';
import ProductsForm from './panel/ProductsForm';

import { ProductList } from "../data/Urunler";
import { ProjectList } from "../data/Projeler";


const Admin: React.FC = () => {

  const [productList, setproductsList] = useState(ProductList)
  const [projectList, setProjectList] = useState(ProjectList)

  const AddProje = async (newProjeItem) => {
    // Update the local state
    const updatedProjectList = [...projectList, newProjeItem];
    setProjectList(updatedProjectList);
  
    // Define the update function outside the AddProje function
    const handleUpdateProjectList = async (updatedList) => {
      try {
        const response = await fetch('/src/api/Sserver', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ projectList: updatedList }),
        });
  
        if (response.ok) {
          console.log('ProjectList updated successfully');
        } else {
          console.error('Failed to update ProjectList');
        }
      } catch (error) {
        console.error('Error updating ProjectList', error);
      }
    };  
    // Invoke the update function with the updated projectList
    await handleUpdateProjectList(updatedProjectList);
  };

  useEffect(()=>{
    console.log(projectList)
  },[projectList])

  const AddProduct = (newProductItem:any) => {
    setproductsList([...productList, newProductItem]);
  };

  useEffect(()=>{
    console.log(productList)
  },[productList])

  return (
    <>
    <CssBaseline />
    <div>
      <h1>Admin Panel</h1>
      <ProjectForm ProjeList={projectList} setProjeList ={setProjectList} AddProje = {AddProje}/>
      <ProductsForm ProductList={productList} setProductsList ={setproductsList} AddProduct = {AddProduct}/>
    </div>
    </>
  );
};

export default Admin;
