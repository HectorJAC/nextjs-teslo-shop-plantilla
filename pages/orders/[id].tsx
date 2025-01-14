import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";
import { CardList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import { Box, Card, CardContent, Chip, Divider, Grid, Typography } from "@mui/material";
import NextLink from "next/link";

const OrderPage = () => {
    return (
        <ShopLayout 
            title='Resumen de la orden 135'
            pageDescription='Resumen de la orden de compra'
        >
            <Typography variant="h1" component='h1'>Orden: ABC123</Typography>

            {/* <Chip 
                sx={{my: 2}}
                label='Pendiente de Pago'
                variant="outlined"
                color="error"
                icon={<CreditCardOffOutlined />}
            /> */}

            <Chip 
                sx={{my: 2}}
                label='Orden ya fue pagada'
                variant="outlined"
                color="success"
                icon={<CreditScoreOutlined />}
            />

            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CardList 
                        editable
                    />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant="h2">Resumen (3 productos)</Typography>

                            <Divider sx={{my: 1}} />

                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant="subtitle1">Direccion de entrega</Typography>
                                <NextLink href='/checkout/address' passHref>
                                    Editar
                                </NextLink>
                            </Box>

                            <Typography>Hector Aramboles</Typography>
                            <Typography>212 Casa Lejana</Typography>
                            <Typography>Villa Grande, HTR 452</Typography>
                            <Typography>Estados Unidos</Typography>
                            <Typography>8236501248</Typography>

                            <Divider sx={{my: 1}} />

                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref>
                                    Editar
                                </NextLink>
                            </Box>

                            <OrderSummary />

                            <Box sx={{mt: 3}}>
                                <h1>Pagar</h1>

                                <Chip 
                                    sx={{my: 2}}
                                    label='Orden ya fue pagada'
                                    variant="outlined"
                                    color="success"
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default OrderPage;