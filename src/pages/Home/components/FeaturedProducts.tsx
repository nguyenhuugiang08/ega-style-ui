import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Product } from "interfaces/interface";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import CardProduct from "components/CardProduct";

const useStyles = makeStyles({
    heading: {
        color: "#000",
        fontSize: "2em !important",
        lineHeight: 1.2,
        fontWeight: "600 !important",
        textTransform: "uppercase",
    },
    title: {
        padding: "15px 16px",
        whiteSpace: "nowrap",
        color: "#9c9c9c",
        fontSize: "18px",
        userSelect: "none",
        position: "relative",
        fontWeight: "bold",

        "&:after": {
            backgroundColor: "#cd6420",
            bottom: 0,
            content: '""',
            height: "2px",
            left: 0,
            position: "absolute",
            width: 0,
            transition: "width .2s ease-in-out",
        },

        "&$selected": {
            borderRadius: 0,
            color: "#000",

            "&:after": {
                width: "100%",
            },
        },

        "&:hover": {
            cursor: "pointer",
            color: "#cd6420",
        },
    },
    containerTitle: {
        marginTop: "10px",
        border: "1px solid #eee",
        borderLeft: "none",
        borderRight: "none",
        marginBottom: "30px",
    },
    selected: {},

    seeAllBtn: {
        fontSize: "16px !important",
        margin: "16px 0 30px 0 !important",

        "&:hover": {
            color: "#fff !important",
            backgroundColor: "#cd6420 !important",
        },
    },
});

const FeaturedProducts = () => {
    const classes = useStyles();
    const { dataHome } = useSelector((state: RootState) => state.others);

    const [isSelected, setIsSelected] = useState(0);

    const listTitle = dataHome.featuredProducts?.map(
        (product: { title: string; data: Product[] }) => product.title
    );

    const handleChangeSelectedTitle = (index: number) => {
        setIsSelected(index);
    };

    return (
        <Container sx={{ marginTop: "30px" }}>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                    className={classes.heading}
                    sx={{ mr: 1 }}
                    component={"span"}
                    variant={"body2"}
                >
                    gi???m s???c 50%
                </Typography>
                <img
                    src='https://bizweb.dktcdn.net/100/448/042/themes/876420/assets/flashsale-hot.png?1666084718503'
                    alt='GI???M S???C 50%'
                    style={{
                        maxHeight: "55px",
                        width: "33px",
                        aspectRatio: "auto 33 / 15",
                        height: "15px",
                    }}
                />
            </Grid>
            <Grid container className={classes.containerTitle}>
                {listTitle?.map((title: string, index: number) => (
                    <Grid
                        item
                        xs={3}
                        xl={2}
                        key={index}
                        className={`${classes.title} ${index === isSelected && classes.selected}`}
                        onClick={() => handleChangeSelectedTitle(index)}
                    >
                        {title}
                    </Grid>
                ))}
            </Grid>
            <Grid container sx={{ marginBottom: "30px" }}>
                <CardProduct products={dataHome.featuredProducts?.[isSelected].data} />
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant='outlined'
                    color='warning'
                    className={classes.seeAllBtn}
                    sx={{ textTransform: "none" }}
                >
                    Xem t???t c???
                    <ArrowForwardIosIcon
                        sx={{ fontSize: "14px", position: "relative", top: "1px" }}
                    />
                </Button>
            </Grid>
        </Container>
    );
};

export default FeaturedProducts;
