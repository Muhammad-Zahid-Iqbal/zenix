import { Button, Grid } from '@mui/material'
import * as React from 'react';
import OrderSection from './OrderSection';


const ITEM_HEIGHT = 48;

const SellBuyorder = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [sellOrder, setSellOrder] = React.useState('defaultSelectedValue');
    const [buyOrder, setBuyOrder] = React.useState('defaultValue');

    const handleChange = (event) => {
        setSellOrder(event.target.value);
    }; 
    const handleChange2 = (event) => {
        setBuyOrder(event.target.value);
    };
    
    const columns = [
        {
            field: 'price',
            headerName: 'Price',
            width: 200
        },

        {
            field: 'amount',
            headerName: 'Amount',
            width: 230,
        },
        {
            field: 'total',
            headerName: 'Total',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,

        },
    ];

    const rows = [
        { id: 1, amount: 400, total: 'Jon', price: 35 },
        { id: 2, amount: 500, total: 'Cersei', price: 42 },
        { id: 3, amount: 700, total: 'Jaime', price: 45 },
        { id: 4, amount: 800, total: 'Arya', price: 16 },
        { id: 5, amount: 900, total: 'Daenerys', price: 45 },
        { id: 6, amount: 1000, total: null, price: 150 },
        { id: 7, amount: 1100, total: 'Ferrara', price: 44 },
        { id: 8, amount: 1200, total: 'Rossini', price: 36 },
        { id: 9, amount: 1300, total: 'Harvey', price: 65 },
    ];
    return (
        <Grid container spacing={2} padding={2}>
            <OrderSection
                title="Sell Order"
                // imageUrl="https://your-sell-image-url.jpg"
                handleChange={handleChange}
                orderValue={sellOrder}
                rows={rows}
                columns={columns}
            />
            <OrderSection
                title="Buy Order"
                // imageUrl="https://your-buy-image-url.jpg"
                handleChange={handleChange2}
                orderValue={buyOrder}
                rows={rows}
                columns={columns}
            />
        </Grid>
    )
}

export default SellBuyorder
