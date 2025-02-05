import { initialData } from "@/database/products";
import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import NextLink from "next/link";
import { ItemCounter } from "../ui";
import { FC } from "react";

const productsInCard = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

interface CardListProps {
    editable?: boolean;
}

export const CardList:FC<CardListProps> = ({editable = false}) => {
    return (
        <>
            {
                productsInCard.map((product) => (
                    <Grid container spacing={2} key={product.slug} sx={{mb: 1}}>
                        <Grid item xs={3}>
                            <NextLink href='/product/slug' passHref style={{textDecoration: 'none'}}>
                                <CardActionArea>
                                    <CardMedia 
                                        image={`/products/${product.images[0]}`}
                                        component='img'
                                        sx={{borderRadius: '5px'}}
                                    />
                                </CardActionArea>
                            </NextLink>
                        </Grid>

                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>
                                <Typography variant="body1">{product.title}</Typography>
                                <Typography variant="body1">
                                    Talla <strong>M</strong> 
                                </Typography>

                                {
                                    editable 
                                        ? <ItemCounter />
                                        : <Typography variant="h5">3</Typography>
                                }
                            </Box>
                        </Grid>

                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                            <Typography variant="subtitle1">${`${product.price}`}</Typography>

                            {
                                editable && (
                                    <Button variant="text" color="secondary">
                                        Borrar
                                    </Button>
                                )
                            }
                        </Grid>
                    </Grid>
                ))
            }
        </>
    );
};
