import React from "react";
import { getProducts } from "../actions/products/getProducts";


// export const dynamic = "force-dynamic";

export default async function ProductsPage() {


  const data = await getProducts();
  console.log(data)

  return (
    <ul className="text-center mt-8">
      {data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
    </ul>
  );
}