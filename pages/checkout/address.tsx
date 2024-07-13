import { ShopLayout } from '@/components/layouts';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const AddressPage = () => {
    return (
        <ShopLayout 
            title='Direccion' 
            pageDescription='Confirmar dirección de envío'
        >
            <Typography variant='h1' component='h1'>Direccion</Typography>

            <Grid container spacing={2} sx={{mt: 2}}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        label='Nombre'
                        variant='filled'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField 
                        label='Apellido'
                        variant='filled'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField 
                        label='Direccion'
                        variant='filled'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField 
                        label='Direccion 2'
                        variant='filled'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField 
                        label='Codigo Postal'
                        variant='filled'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField 
                        label='Ciudad'
                        variant='filled'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <Select
                            variant='filled'
                            label='Pais'
                            value={1}
                        >
                            <MenuItem value={1}>
                                Republica Dominicana
                            </MenuItem>
                            <MenuItem value={2}>
                                Canada
                            </MenuItem>
                            <MenuItem value={3}>
                                Costa Rica
                            </MenuItem>
                            <MenuItem value={4}>
                                Estados Unidos
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField 
                        label='Telfono'
                        variant='filled'
                        fullWidth
                    />
                </Grid>
            </Grid>

            <Box sx={{mt: 5}} display='flex' justifyContent='center'>
                <Button color='secondary' className='circular-btn' size='large'>
                    Revisar Pedido
                </Button>
            </Box>
        </ShopLayout>
    );
};

export default AddressPage;