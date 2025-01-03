import { Grid } from "@mui/material";
import { Product } from "../../app/model/product";
import ProductCard from "./ProductCard";

interface Props{
    products: Product[];
}
export default function ProductList({products}: Props){
    return(
        <Grid container spacing={3} sx={{paddingX: { xs: 2, sm: 4, md: 25 }}}>
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
        </Grid>
        
    );
}