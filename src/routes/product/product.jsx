import "./product.css";

import { useContext, useState } from "react";
import { cartContext } from "../../CartProvider";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';

import { Card, CardContent, CardActions, CardMedia, Typography, IconButton, Chip, Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import DodgeSRT10 from "../../assets/images/DodgeSRT10.jpg";
import ChryslerME412 from "../../assets/images/ChryslerME412.jpg";
import AudiQuattro from "../../assets/images/AudiQuattro.jpg";
import BmwIsetta from "../../assets/images/BmwIsetta.jpg";
import Corrado from "../../assets/images/Corrado.jpg";
import GeneralLee from "../../assets/images/GeneralLee.jpg";
import Pajero from "../../assets/images/Pajero.jpg";
import Hoonicorn from "../../assets/images/Hoonicorn.jpg";
import FocusRS from "../../assets/images/FocusRS.jpg";
import AE86 from "../../assets/images/AE86.jpg";
import Espace from "../../assets/images/Espace.jpg";
import Sesto from "../../assets/images/Sesto.jpg";
import V63 from "../../assets/images/V63.jpg";
import GT90 from "../../assets/images/GT90.jpg";
import Mazda787 from "../../assets/images/Mazda787.jpg";

let products = [
    {
        make: "Dodge",
        model: "Ram SRT-10",
        year: 2004,
        price: 45580,
        class: "Pickup",
        image: DodgeSRT10,
        stock: true,
        layout: "RWD",
        engine: {
            capacity: 8.3,
            configuration: "V",
            cylinders: 10,
            fuel: "Gasoline",
            aspiration: "Natural",
            horsepower: 510,
            torque: 525
        }
    },
    {
        make: "Chrysler",
        model: "ME Four-Twelve",
        year: 2004,
        price: 143303,
        class: "Sports Car",
        image: ChryslerME412,
        stock: true,
        layout: "RWD",
        engine: {
            capacity: 6.0,
            configuration: "V",
            cylinders: 12,
            fuel: "Gasoline",
            aspiration: "Turbocharged",
            horsepower: 850,
            torque: 850
        }
    },
    {
        make: "Dodge",
        model: "Charger",
        year: 1969,
        price: 100000,
        class: "Muscle",
        image: GeneralLee,
        stock: true,
        layout: "RWD",
        engine: {
            capacity: 7.0,
            configuration: "V",
            cylinders: 8,
            fuel: "Gasoline",
            aspiration: "Natural",
            horsepower: 425,
            torque: 490
        }
    },
    {
        make: "Audi",
        model: "Quattro",
        year: 1985,
        price: 450000,
        class: "Group B",
        image: AudiQuattro,
        stock: true,
        layout: "4WD",
        engine: {
            capacity: 2.1,
            configuration: "I",
            cylinders: 5,
            fuel: "Gasoline",
            aspiration: "Turbocharged",
            horsepower: 540,
            torque: 435
        }
    },
    {
        make: "BMW",
        model: "Isetta",
        year: 1956,
        price: 9421,
        class: "Compact",
        image: BmwIsetta,
        stock: true,
        layout: "FWD",
        engine: {
            capacity: 0.2,
            configuration: "SS",
            cylinders: 1,
            fuel: "Gasoline",
            aspiration: "Natural",
            horsepower: 9.5,
            torque: 13.6
        }
    },
    {
        make: "Volkswagen",
        model: "Corrado",
        year: 1995,
        price: 55000,
        class: "Sport Compact",
        image: Corrado,
        stock: true,
        layout: "FWD",
        engine: {
            capacity: 2.9,
            configuration: "VR",
            cylinders: 6,
            fuel: "Gasoline",
            aspiration: "Natural",
            horsepower: 188,
            torque: 181
        }
    },
    {
        make: "Mitsubishi",
        model: "Pajero",
        year: 1997,
        price: 34999,
        class: "Rally Raid",
        image: Pajero,
        stock: true,
        layout: "AWD",
        engine: {
            capacity: 3.5,
            configuration: "V",
            cylinders: 6,
            fuel: "Gasoline",
            aspiration: "Natural",
            horsepower: 276,
            torque: 256
        }
    },
    {
        make: "Hoonicorn",
        model: "V2",
        year: 1965,
        price: 465018,
        class: "Muscle",
        image: Hoonicorn,
        stock: false,
        layout: "AWD",
        engine: {
            capacity: 6.7,
            configuration: "V",
            cylinders: 8,
            fuel: "Methanol",
            aspiration: "Turbocharged",
            horsepower: 1400,
            torque: 1250
        }
    },
    {
        make: "Ford",
        model: "Focus",
        year: 2018,
        price: 67999,
        class: "Hot Hatch",
        image: FocusRS,
        stock: true,
        layout: "AWD",
        engine: {
            capacity: 2.3,
            configuration: "I",
            cylinders: 4,
            fuel: "Gasoline",
            aspiration: "Turbocharged",
            horsepower: 350,
            torque: 350
        }
    },
    {
        make: "Toyota",
        model: "AE86",
        year: 1997,
        price: 34999,
        class: "Hot Hatch",
        image: AE86,
        stock: true,
        layout: "FWD",
        engine: {
            capacity: 1.4,
            configuration: "I",
            cylinders: 4,
            fuel: "Gasoline",
            aspiration: "Natural",
            horsepower: 130,
            torque: 109
        }
    },
    {
        make: "Renault",
        model: "Espace",
        year: 1995,
        price: 1000000,
        class: "Minivan",
        image: Espace,
        stock: true,
        layout: "RWD",
        engine: {
            capacity: 3.5,
            configuration: "V",
            cylinders: 10,
            fuel: "Gasoline",
            aspiration: "Natural",
            horsepower: 818,
            torque: 520
        }
    },
    {
        make: "Lamborghini",
        model: "Sesto Elemento",
        year: 2012,
        price: 2700000,
        class: "Track",
        image: Sesto,
        stock: true,
        layout: "AWD",
        engine: {
            capacity: 5.2,
            configuration: "V",
            cylinders: 10,
            fuel: "Gasoline",
            aspiration: "Natural",
            horsepower: 570,
            torque: 398
        }
    },
    {
        make: "Cadillac",
        model: "V-63 Fleetwood",
        year: 1929,
        price: 3000,
        class: "Luxury",
        image: V63,
        stock: true,
        layout: "RWD",
        engine: {
            capacity: 5.6,
            configuration: "V",
            cylinders: 8,
            fuel: "Gasoline",
            aspiration: "Natural",
            horsepower: 90,
            torque: 90
        }
    },
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
    {
        make: "Mazda",
        model: "787B",
        year: 1995,
        price: 120000,
        class: "Track",
        image: Mazda787,
        stock: true,
        layout: "RWD",
        engine: {
            capacity: 2.6,
            configuration: "R",
            cylinders: 4,
            fuel: "Gasoline",
            aspiration: "Natural",
            horsepower: 900,
            torque: 448
        }
    },
]

export default function Product() {
    const { addToCart } = useContext(cartContext);
    const [open, setOpen] = useState(false);
    const [engineData, setEngine] = useState(products[0].engine);

    const openDialog = (engine) => {
        setEngine(engine);
        setOpen(true);
    }

    const closeDialog = () => {
        setOpen(false);
    }

    return (
        <div>
            <Typography variant="h3" color="white" sx={{ textAlign: 'center', margin: "0.5em" }}>Products</Typography>

            <Grid container columns={15} sx={{ margin: 'auto', width: '85%' }} spacing={2}>
                {
                    products.map((item, index) => (
                        <Grid xs={5} key={index}>
                            <Card sx={{ width: 500, backgroundColor: "rgb(25, 30, 32)", margin: 'auto' }} variant="outlined">
                                <CardMedia sx={{ height: 250 }} image={item.image} title={item.make} />

                                <CardContent>
                                    <Typography variant="h5" color="gray">{item.year}, {item.make} {item.model}</Typography>
                                    <hr />
                                    <Typography variant="p" color="gray">Year: {item.year}</Typography>
                                    <br />
                                    <Typography variant="p" color="gray">Make: {item.make.toUpperCase()}</Typography>
                                    <br />
                                    <Typography variant="p" color="gray">Price: ${item.price.toLocaleString("en-US")}</Typography>
                                </CardContent>

                                <CardActions>
                                    <Button variant='outlined' onClick={(e) => { openDialog(item.engine) }}><AddIcon/>SHOW MORE</Button>
                                </CardActions>

                                <Grid container columns={10} sx={{ padding: "0.5em" }}>
                                    <Grid sx={{float: 'left'}}>
                                        <Chip label={item.stock ? "In Stock" : "Out Of Stock"} icon={item.stock ? <DoneIcon /> : <CancelIcon />} sx={{ float: "left" }} color={item.stock ? "success" : "error"} />
                                    </Grid>
                                    <Grid sx={{float: 'right'}}>
                                        <IconButton color={item.stock ? "primary" : "error"} sx={{ float: "right" }} aria-label="add to shopping cart" disabled={!(item.stock)} onClick={(e) => {
                                            addToCart(item, index);
                                        }}><AddShoppingCartIcon /></IconButton>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>

            <Dialog open={open} onClose={closeDialog} aria-labelledby="more-car-info" aria-describedby="engine-car-info">
                <DialogTitle id="more-car-info">{"More Info On The Car"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="engine-car-info">
                        <Typography variant="p">Capacity: {engineData.capacity}L</Typography>
                        <br/>
                        <Typography variant="p">Configuration: {engineData.configuration}</Typography>
                        <br/>
                        <Typography variant="p">Cylinders: {engineData.cylinders}</Typography>
                        <br/>
                        <Typography variant="p">Fuel: {engineData.fuel}</Typography>
                        <br/>
                        <Typography variant="p">Aspiration: {engineData.aspiration}</Typography>
                        <br/>
                        <Typography variant="p">Horsepower: {engineData.horsepower}hp</Typography>
                        <br/>
                        <Typography variant="p">Torque: {engineData.torque}lb-ft</Typography>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}