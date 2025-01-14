import { IProduct } from "@/interfaces";
import { Grid, Card, CardActionArea, CardMedia, Box, Typography } from "@mui/material";
import { FC, useMemo, useState } from "react";
import NextLink from 'next/link';

interface ProductCardProps {
    product: IProduct;
}

export const ProductCard:FC<ProductCardProps> = ({product}) => {

    const [isHovered, setIsHovered] = useState(false);

    const productImage = useMemo(() => {
        return isHovered ? `/products/${product.images[1]}` : `/products/${product.images[0]}`
    }, [isHovered, product.images])

    return (
        <Grid item 
            xs={6} 
            sm={4} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>
                <NextLink href='/product/slug' passHref prefetch={false}>
                    <CardActionArea>
                        <CardMedia 
                        component={'img'}
                        className="fadeIn"
                        image={ productImage }
                        alt={product.title}
                        />
                    </CardActionArea>
                </NextLink>
            </Card>

            <Box sx={{mt: 1}} className="fadeIn">
                <Typography fontWeight={700}>{ product.title }</Typography>
                <Typography fontWeight={500}>${ product.price }</Typography>
            </Box>
        </Grid>
    )
}
