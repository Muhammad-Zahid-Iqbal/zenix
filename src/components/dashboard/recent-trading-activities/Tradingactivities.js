import { Box, Grid, Paper, Typography } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { DataGrid } from '@mui/x-data-grid';
import bit1 from '../../../images/bit1.png'
import bit2 from '../../../images/bit2.png'
import bit3 from '../../../images/bit3.png'
import bit4 from '../../../images/bit4.png'
import bit5 from '../../../images/bit5.png'
import bit6 from '../../../images/bit6.png'
import arrow1 from '../../../images/arrow1.png'
import arrow2 from '../../../images/arrow2.png'
import arrow3 from '../../../images/arrow3.png'
import arrow4 from '../../../images/arrow4.png'
import arrow5 from '../../../images/arrow5.png'
import arrow6 from '../../../images/arrow6.png'

const Tradingactivities = () => {
    const PaperStyle = () => ({
        background: "#3B3363",
    });

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 100,
            renderCell: (params) => (
                <img src={getArrowImage(params.row.bitcoin)} alt={params.row.bitcoin} style={{ width: '50px', height: '50px' }} />
            ),
        },
        {
            field: 'firstName',
            headerName: '',
            width: 1,
            renderCell: (params) => (
                <img src={getCoinImage(params.row.bitcoin)} alt={params.row.bitcoin} style={{ width: '24px', height: '24px' }} />
            ),
        },
        {
            field: 'bitcoin',
            headerName: 'Coin Name',
            width: 200
        },
        {
            field: 'time',
            headerName: 'Time',
            width: 200,
        },
        {
            field: 'amount',
            headerName: 'amount',
            sortable: false,
            width: 420,

        },
        {
            field: 'button',
            headerName: 'Menu',
            sortable: false,
            width: 200,
            renderCell: (params) => (
                <Button variant="contained">Contained</Button>
            ),
        },


    ];
    const getArrowImage = (arrowName) => {
        switch (arrowName) {
            case 'Bitcoin':
                return arrow5;
            case 'Ethereum':
                return arrow2;
            case 'Monero':
                return arrow3;
            case 'Litecoin':
                return arrow4;
            case 'Bitcoin':
                return arrow4;
            case 'Monero':
                return arrow5;
            case 'Bitcoin':
                return arrow6;
            // Add more cases for other coin names as needed
            default:
                return arrow6; // Default image
        }
    };

    const getCoinImage = (coinName) => {
        switch (coinName) {
            case 'Ethereum':
                return bit1;
            case 'Monero':
                return bit4;
            case 'Litecoin':
                return bit3;
            case 'Bitcoin':
                return bit2;
            // Add more cases for other coin names as needed
            default:
                return bit6; // Default image
        }
    };

    const rows = [
        { id: 1, bitcoin: "Bitcoin", amount: '+$5,553', time: '06:24:45 AM' },
        { id: 2, bitcoin: "Ethereum", amount: '+$5,553', time: '06:24:45 AM' },
        { id: 3, bitcoin: "Monero", amount: '+$5,553', time: '	06:24:45 AM' },
        { id: 4, bitcoin: "Litecoin", amount: '-$912', time: '06:24:45 AM' },
        { id: 5, bitcoin: "Bitcoin", amount: '+$7,762', time: '	06:24:45 AM' },
        { id: 6, bitcoin: "Monero", amount: '+$5,553', time: '	06:24:45 AM' },
        { id: 7, bitcoin: "Litecoin", amount: '-$912', time: '06:24:45 AM' },

    ];
    return (
        <Box sx={{ padding: 2 }}>
            <Paper elevation={3} sx={PaperStyle}>
                <Grid container spacing={2}>
                    <Grid item sm={8} xs={12}>
                        <Typography variant='contained' sx={{ fontSize: "20px", lineHeight: 1.5, padding: "20px" }}>Recent Trading Activities</Typography>
                        <Typography sx={{ fontSize: "14px", color: "#828690", padding: "20px" }}>Lorem ipsum dolor sit amet, consectetur</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ margin: "20px" }}>
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>

                <Box>
                    <div style={{ height: 440, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 6 },
                                },
                            }}

                        />
                    </div>
                </Box>
            </Paper>
        </Box>
    )
}

export default Tradingactivities
