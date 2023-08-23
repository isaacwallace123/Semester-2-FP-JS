import { useContext } from 'react';
import { cartContext } from '../../CartProvider';

import { Typography, Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

/*


{
    make: "Ford",
    model: "GT90",
    year: 1995,
    price: 1200000,
    class: "Concept",
    image: GT90,
    stock: true,
    layout: "RWD",
    engine: {
        capacity: 5.9,
        configuration: "V",
        cylinders: 12,
        fuel: "Gasoline",
        aspiration: "Turbocharged",
        horsepower: 720,
        torque: 660
    }
},
    */

function Cart() {
    const { cart, removeFromCart } = useContext(cartContext);

    const newCart = cart.map((data, index) => {
        return { ...data, ...data.engine, id: index };
    });

    return (
        <div>
            <Typography variant="h3" color="white" sx={{ textAlign: 'center', margin: "0.5em" }}>In Your Cart</Typography>

            <Box sx={{ height: 625, width: '95%', margin: 'auto', backgroundColor: 'rgb(25, 30, 32)' }}>
                <DataGrid
                    sx={{
                        color: '#ffffff',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                        borderColor: 'secondary',
                        border: 2,
                        boxShadow: 2,
                        '& .MuiCheckbox-root svg': {
                            width: 16,
                            height: 16,
                            backgroundColor: 'transparent',
                            border: `1px solid #ffffff`,
                        },
                        "& .MuiDataGrid-sortIcon": {
                            color: "white",
                        },
                        "& .MuiDataGrid-menuIconButton": {
                            color: "white"
                        },
                    }}
                    rows={newCart}
                    columns={[
                        { field: 'id', headerName: 'ID', width: 30 },
                        {
                            field: 'make',
                            headerName: 'Make',
                            description: 'The make of the car.',
                            width: 130,
                            editable: false,
                        },
                        {
                            field: 'model',
                            headerName: 'Model',
                            description: 'The model of the car.',
                            width: 170,
                            editable: false,
                        },
                        {
                            field: 'year',
                            headerName: 'Year',
                            description: 'The year the car was manufactured.',
                            width: 70,
                            editable: false,
                        },
                        {
                            field: 'price',
                            headerName: 'Price',
                            description: 'The value of the car.',
                            width: 130,
                            editable: false,
                            valueGetter: (params) => `$${params.row.price.toLocaleString('en-US')}`,
                        },
                        {
                            field: 'capacity',
                            headerName: 'Capacity',
                            description: 'The fuel capacity the car has.',
                            width: 160,
                            editable: false,
                        },
                        {
                            field: 'configuration',
                            headerName: 'Configuration',
                            description: 'The engine configuration.',
                            width: 160,
                            editable: false,
                        },
                        {
                            field: 'cylinders',
                            headerName: 'Cylinders',
                            description: 'The amount of cylinders the car has.',
                            width: 100,
                            editable: false,
                        },
                        {
                            field: 'fuel',
                            headerName: 'Fuel Type',
                            description: 'The fuel type for the car.',
                            width: 160,
                            editable: false,
                        },
                        {
                            field: 'aspiration',
                            headerName: 'Aspiration',
                            description: 'The aspiration the car has.',
                            width: 180,
                            editable: false,
                        },
                        {
                            field: 'horsepower',
                            headerName: 'Horsepower',
                            description: 'The horsepower the car has.',
                            width: 160,
                            editable: false,
                        },
                        {
                            field: 'torque',
                            headerName: 'Torque',
                            description: 'The torque for the car.',
                            width: 120,
                            editable: false,
                        },
                        {
                            field: 'action',
                            headerName: 'Action',
                            sortable: false,
                            renderCell: (params) => {
                                return <Button color='error' variant='outlined' key={params.row.id} onClick={(e) => { removeFromCart(params.row.id) }}>Delete</Button>;
                            }
                        }
                    ]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>

            <Typography variant='h4' color='white' sx={{ textAlign: 'center', margin: "0.5em" }}>Total Cost: ${Array.from(cart.values()).reduce((accumulator, current) => { return accumulator + current.price }, 0).toLocaleString("en-US")}</Typography>
        </div>
    )
}

export default Cart;