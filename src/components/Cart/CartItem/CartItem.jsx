import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ item, updateCartQuantity, removeFromCart }) => {
  const classes = useStyles();
  return (
    <Card style={{ borderRadius: "20px" }}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions
        className={classes.CardActions}
        style={{ marginBottom: "1rem" }}
      >
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => removeFromCart(item.id)}
          style={{ borderRadius: "50px" }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
