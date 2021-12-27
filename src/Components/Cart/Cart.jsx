import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import LoginDialog from "../Login/LoginDialog";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";

const useStyle = makeStyles((theme) => ({
  component: {
    // marginTop: 55,
    padding: "30px 135px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
    },
  },
  leftComponent: {
    // width: '67%',
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
    },
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    borderTop: "1px solid #f0f0f0",
  },
  placeOrder: {
    display: "flex",
    marginLeft: "auto",
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 51,
  },
  placeorderLink: {
    textDecoration: "none",
  },
}));

const Cart = ({ match, history }) => {
  const classes = useStyle();

  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && match.params.id !== cartItems.id)
      dispatch(addToCart(match.params.id));
  }, [dispatch, cartItems, match]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const { account, setAccount } = useContext(LoginContext);
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <>
      {cartItems.length ? (
        <Grid container className={classes.component}>
          <Grid
            item
            lg={9}
            md={9}
            sm={12}
            xs={12}
            className={classes.leftComponent}
          >
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}

            <Box className={classes.bottom}>
              {account ? (
                <Link to="/" className={classes.placeorderLink}>
                  <Button variant="contained" className={classes.placeOrder}>
                    Place Order
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => openDialog()}
                  variant="contained"
                  className={classes.placeOrder}
                >
                  Place Order
                </Button>
              )}
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
          <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
