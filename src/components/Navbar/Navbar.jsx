import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { classExpression } from "@babel/types";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        className={classExpression.appBar}
        color="inherit"
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={(classes.title, classes.antonFont)}
            textDecoration="none"
            color="inherit"
            style={{
              letterSpacing: ".3rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            Runner's Paradise
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show items in cart"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
