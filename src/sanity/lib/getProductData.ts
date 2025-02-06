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
            const res = await client.fetch('*[_type=="product"][isFeaturedProduct == true][0..3]'); // Corrected query syntax
            return res;
        } catch (error) {
            console.error("Error fetching product data:", error);
            return []; // Return an empty array in case of error
        }
  };

  
export const sixProductsData = async (): Promise<IProduct[]> => {
    try {
            const res = await client.fetch('*[_type=="product"][2..7]'); // Corrected query syntax
            return res;
        } catch (error) {
            console.error("Error fetching product data:", error);
            return []; // Return an empty array in case of error
        }
  };

  
export const TrendingProductsData = async (): Promise<IProduct[]> => {
    try {
            const res = await client.fetch('*[_type=="product"][9..12]'); // Corrected query syntax
            return res;
        } catch (error) {
            console.error("Error fetching product data:", error);
            return []; // Return an empty array in case of error
        }
  };

  
export const CategorySofaData = async (): Promise<IProduct[]> => {
    try {
            const res = await client.fetch('*[_type=="product"][category == "Sofa"]'); // Corrected query syntax
            return res;
        } catch (error) {
            console.error("Error fetching product data:", error);
            return []; // Return an empty array in case of error
        }
  };

  
export const CategoryChairsData = async (): Promise<IProduct[]> => {
    try {
            const res = await client.fetch('*[_type=="product"][category == "Chair"]'); // Corrected query syntax
            return res;
        } catch (error) {
            console.error("Error fetching product data:", error);
            return []; // Return an empty array in case of error
        }
  };