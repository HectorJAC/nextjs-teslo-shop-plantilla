import { ShopLayout } from "@/components/layouts";
import { Chip, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import NextLink from 'next/link';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'fullname', headerName: 'Nombre Completo', width: 300},

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Si la orden esta pagada o no',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid
                    ? <Chip color="success" label='Pagada' variant="outlined" />
                    : <Chip color="error" label='No Pagada' variant="outlined" />
            )
        }
    },

    {
        field: 'orden',
        headerName: 'Ver Orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref style={{color: 'black'}}>
                    Ver Orden
                </NextLink>
            )
        }
    },
];

const rows = [
    {id: 1, paid: true, fullname: 'John Doe'},
    {id: 2, paid: false, fullname: 'Jane Doe'},
    {id: 3, paid: true, fullname: 'John Smith'},
    {id: 4, paid: true, fullname: 'Jane Smith'},
    {id: 5, paid: false, fullname: 'John Johnson'},
    {id: 6, paid: false, fullname: 'Jane Johnson'},
];

const HistoryPage = () => {
    return (
        <ShopLayout 
            title='Historial de compras' 
            pageDescription='Historial de las ordenes del cliente'
        >
            <Typography variant="h1" component='h1'>Historial de Ordenes</Typography>

            <Grid container>
                <Grid item xs={12} sx={{height: 650, width: '100%'}}>
                    <DataGrid 
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {paginationModel: {pageSize: 5}},
                        }}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default HistoryPage;