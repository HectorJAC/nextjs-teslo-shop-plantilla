import { CardList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import NextLink from "next/link";

const SummaryPage = () => {
    return (
        <ShopLayout 
            title='Resumen de compra'
            pageDescription='Resumen de la orden de compra'
        >
            <Typography variant="h1" component='h1'>Resumen</Typography>
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
                                <Button color="secondary" className="circular-btn" fullWidth>
                                    Confirmar Orden
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default SummaryPage;