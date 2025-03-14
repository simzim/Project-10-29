import { useContext } from "react";
import ProductsContext from "../context/ProductsContext.js";

export function useProducts() {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('Must be with products provider')
    }
    return context;
}