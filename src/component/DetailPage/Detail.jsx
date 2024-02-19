import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../Context";
import Detailed from "../../pages/HomePage/Detailed";

export const Detail = () => {
  const { loading, setLoading, error, setError } = LoadingContext();
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    await axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        setError(err?.message);
      });
  };
  // fetchData();
  // console.log(product);
  return (
    <>
      <Detailed product={product} />
    </>
  );
};

// export default Detail;
