// src/lib/getProductData.ts

import { IProduct } from "../../../types/products";
import { client } from "./client";


export const getProductData = async (): Promise<IProduct[]> => {
  try {
          const res = await client.fetch('*[_type=="product"]'); // Corrected query syntax
          return res;
      } catch (error) {
          console.error("Error fetching product data:", error);
          return []; // Return an empty array in case of error
      }
};



export const fourProductsData = async (): Promise<IProduct[]> => {
    try {
            const res = await client.fetch('*[_type=="product"][0..3]'); // Corrected query syntax
            return res;
        } catch (error) {
            console.error("Error fetching product data:", error);
            return []; // Return an empty array in case of error
        }
  };

  

      
export const DynamicProductsData = async (): Promise<IProduct[]> => {
    try {
            const query = await client.fetch(`*[_type=="product" && _id == $id][0]`); // Corrected query syntax
            return query;
        } catch (error) {
            console.error("Error fetching product data:", error);
            return []; // Return an empty array in case of error
        }
  };