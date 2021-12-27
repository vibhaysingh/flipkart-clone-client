import { Box, Button, makeStyles } from "@material-ui/core";
import { FlashOn as Flash, ShoppingCart as Cart } from "@material-ui/icons";
import clsx from "clsx";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
import { addToCart } from "../../redux/actions/cartActions";
import LoginDialog from "../Login/LoginDialog";

const useStyle = makeStyles((theme) => ({
  leftContainer: {
    minWidth: "40%",
    // textAlign: 'center',
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
    },
  },
  productImage: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  button: {
    width: "46%",
    borderRadius: 2,
    height: 50,
  },
  addToCart: {
    background: "#ff9f00",
    color: "#FFF",
  },
  buyNow: {
    background: "#fb641b",
    color: "#FFF",
  },
  buyNowLink: {
    textDecoration: "none",
  },
}));

const ActionItem = ({ product }) => {
  const classes = useStyle();
  const history = useHistory();
  const { id, price, detailUrl, title } = product;

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const openDialog = () => {
    setOpen(true);
  };

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    history.push("/cart");
  };

  return (
    <Box className={classes.leftContainer}>
      <img src={product.detailUrl} className={classes.productImage} alt="" />
      <br />
      <Button
        onClick={() => addItemToCart()}
        className={clsx(classes.button, classes.addToCart)}
        style={{ marginRight: 10 }}
        variant="contained"
      >
        <Cart />
        Add to Cart
      </Button>
      {account ? (
        <Link to="/cart" className={classes.buyNowLink}>
          <Button
            className={clsx(classes.button, classes.buyNow)}
            variant="contained"
          >
            <Flash /> Buy Now
          </Button>
        </Link>
      ) : (
        <Button
          onClick={() => openDialog()}
          className={clsx(classes.button, classes.buyNow)}
          variant="contained"
        >
          <Flash /> Buy Now
        </Button>
      )}
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default ActionItem;
