import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
// import { makeStyles } from "@mui/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    console.log("product single = >  ", product);

    return (
      <Card sx={{ maxWidth: 300 }}>
        <Grid
          container
          key={id}
          spacing={{ xs: 1, sm: 4 }}
          direction="column"
          // flexWrap="wrap"
        >
          <CardMedia component="img" image={image} alt="prod1" />
          <CardContent>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $ {price},{category}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Card>
    );
  });

  return <>{renderList}</>;
};
export default ProductComponent;
