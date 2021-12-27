import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  component: {
    width: "80%%",
    height: "65vh",
    background: "#fff",
    margin: "80px 140px",
  },
  image: {
    width: "15%",
  },
  container: {
    textAlign: "center",
    paddingTop: 70,
  },
  buyNowLink: {
    textDecoration: "none",
  },
  shopNow: {
    backgroundColor: "#2874f0",
    color: "white",
    fontWeight: 530,
    padding: "10px 30px",
    marginTop: 10,
  },
});

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  const classes = useStyle();

  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={imgurl} className={classes.image} />
        <Typography>Your cart is empty!</Typography>
        <Link to="/" className={classes.buyNowLink}>
          <Button
            // onClick={() => buyNow()}
            variant="contained"
            className={classes.shopNow}
            // color="primary"
          >
            Shop Now
          </Button>
        </Link>
        {/* <span>Add items to it now.</span> */}
      </Box>
    </Box>
  );
};

export default EmptyCart;
