import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const url = "https://fakestoreapi.com/products";
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(url)
      .catch((error) => console.log("error=>  ", error));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("prod=> ", products);
  return (
    <>
      <h6>ProductListing</h6>
      <ProductComponent />
    </>
  );
};
export default ProductListing;
