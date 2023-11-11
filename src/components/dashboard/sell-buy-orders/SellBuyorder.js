import { Grid } from '@mui/material'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Div from '../../../shared/Div/Div';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ITEM_HEIGHT = 48;

const SellBuyorder = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
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
            //   width: 50,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    return (
        <Grid container spacing={2} padding={2}>
            <Grid item sm={7} xs={12}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: "100%",
                            height: 500,
                        },
                    }}
                >

                    <Paper elevation={3} sx={{ color: "white", background: "#3B3363" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Div sx={{ padding: "24px" }}>
                                <h2>Sell Order</h2>
                            </Div>
                            <Div sx={{ padding: "24px" }}>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: '20ch',
                                            background:"#3B3363"
                                        },
                                    }}
                                >
                                        <MenuItem>
                                            Details
                                        </MenuItem>
                                        <MenuItem sx={{color:"red"}}  onClick={handleClose}>
                                            Cancel
                                        </MenuItem>
                                </Menu>
                            </Div>
                        </Box>

                        <DataGrid
                        sx={{padding:"20px", border:"none", borderBottom: 'none'}}
                            rows={rows}
                            columns={columns}
                            initialState={{
                                // pagination: {
                                //     paginationModel: { page: 0, pageSize: 5 },
                                // },
                            }}
                        // pageSizeOptions={[5, 10]}
                        // checkboxSelection
                        />
                    </Paper>
                </Box>
            </Grid>

            <Grid item sm={5} xs={12} >
            </Grid>
        </Grid>
    )
}

export default SellBuyorder
