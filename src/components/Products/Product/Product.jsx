import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.scroll}>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
        <CardContent>
          <div className={classes.CardContent} style={{ padding: "12px 16px" }}>
            <Typography
              variant="h5"
              gutterBottom
              className={classes.gothicFont}
              style={{
                letterSpacing: ".03rem",
                textTransform: "uppercase",
                lineHeight: "1.375",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              {product.name}
            </Typography>
            <section
              style={{
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography variant="h5" className={classes.gothicFont}>
                {product.price.formatted_with_symbol}
              </Typography>
              <CardActions disableSpacing className={classes.CardActions}>
                <IconButton
                  aria-label="Add to Cart"
                  onClick={() => onAddToCart(product.id, 1)}
                >
                  <AddShoppingCart />
                </IconButton>
              </CardActions>
            </section>
            <Typography
              className={classes.gothicFont}
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
            />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Product;
