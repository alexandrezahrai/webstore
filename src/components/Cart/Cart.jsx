import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, updateCartQuantity, removeFromCart, emptyCart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1" className={classes.gothicFont}>
      Your shopping cart is empty! &nbsp;
      <Link to="/" className={classes.link}>
        Please, add some items
      </Link>
      .
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography gutterBottom variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
      </div>
      <div>
        <Button
          className={classes.emptyButton}
          size="large"
          type="button"
          variant="contained"
          color="secondary"
          onClick={emptyCart}
          style={{ borderRadius: "50px" }}
        >
          Empty Cart
        </Button>
        <Button
          className={classes.checkoutButton}
          size="large"
          type="button"
          variant="contained"
          color="primary"
          style={{ borderRadius: "50px" }}
        >
          Checkout
        </Button>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading ...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography
        className={(classes.title, classes.gothicFont)}
        variant="h3"
        gutterBottom
      >
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
