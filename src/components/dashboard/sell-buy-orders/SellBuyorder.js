import { Button, Grid } from '@mui/material'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Div from '../../../shared/Div/Div';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import bee from "../../../images/b.png";


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
            <Grid item sm={6} xs={12}>
                <Box>
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
                                            background: "#3B3363"
                                        },
                                    }}
                                >
                                    <MenuItem>
                                        Details
                                    </MenuItem>
                                    <MenuItem sx={{ color: "red" }} onClick={handleClose}>
                                        Cancel
                                    </MenuItem>
                                </Menu>
                            </Div>
                        </Box>

                        <Box sx={{ background: "#2C254A", margin: "20px" }}>


                            <FormControl fullWidth size="small" sx={{ marginTop: "10px", }}>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    sx={{
                                        '& .MuiSelect-select:focus': {
                                            backgroundColor: 'transparent', // Focus ke time ka background ko transparent kar diya
                                            boxShadow: 'none', // Focus ke time ka box-shadow hataya
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none', // Select text field ke bahar ka border hataya
                                        },
                                    }}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {

                                                backgroundColor: '#3B3363', // Change this to your preferred color
                                            },
                                        },
                                    }}

                                    value={sellOrder}
                                    onChange={handleChange}
                                >
                                    <MenuItem value='defaultSelectedValue'>
                                        <span style={{ display: "flex" }}><img src={"https://zenix.dexignzone.com/xhtml/images/svg/lit3.svg"} height={60} width={60} alt='litteral' /><p style={{ marginTop: "15px", marginLeft: "25px" }}>Litecoin</p></span>
                                    </MenuItem>
                                    <MenuItem value={20} >
                                        <span style={{ display: "flex" }}><img src={"https://zenix.dexignzone.com/xhtml/images/svg/lit3.svg"} height={60} width={60} alt='litteral' /><p style={{ marginTop: "15px", marginLeft: "25px" }}>Ripple</p></span>
                                    </MenuItem>
                                    <MenuItem value={30} >
                                        <span style={{ display: "flex" }}><img src={bee} height={60} width={60} alt='litteral' /><p style={{ marginTop: "15px", marginLeft: "25px" }}>Ethereum</p></span>
                                    </MenuItem>
                                    <MenuItem value={40} >
                                        <span style={{ display: "flex" }}><img src={"https://zenix.dexignzone.com/xhtml/images/svg/eth.svg"} height={60} width={60} alt='litteral' /><p style={{ marginTop: "15px", marginLeft: "25px" }}>Bitcoin</p></span>
                                    </MenuItem>
                                    <MenuItem value={50} >
                                        <span style={{ display: "flex" }}><img src={bee} height={60} width={60} alt='litteral' /><p style={{ marginTop: "15px", marginLeft: "25px" }}>Litecoin</p></span>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <DataGrid
                            // sx={{padding:"20px",}}
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                        // pageSizeOptions={[5, 10]}
                        // checkboxSelection
                        />
                        <Div sx={{ display: "flex", justifyContent: "center", position: "relative", top: "20px", }}>
                            <Button variant="contained" sx={{ background: "#6418C3" }} ><ArrowDropDownIcon sx={{ fontSize: "35px", height: "40px", width: "50px", fontWeight: 900 }} /></Button>

                        </Div>
                    </Paper>
                </Box>
            </Grid>

            <Grid item sm={6} xs={12} >
            <Box>
                    <Paper elevation={3} sx={{ color: "white", background: "#3B3363" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Div sx={{ padding: "24px" }}>
                                <h2>Buy Order</h2>
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
                                            background: "#3B3363"
                                        },
                                    }}
                                >
                                    <MenuItem>
                                        Details
                                    </MenuItem>
                                    <MenuItem sx={{ color: "red" }} onClick={handleClose}>
                                        Cancel
                                    </MenuItem>
                                </Menu>
                            </Div>
                        </Box>

                        <Box sx={{ background: "#2C254A", margin: "20px" }}>


                            <FormControl fullWidth size="small" sx={{ marginTop: "10px", }}>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    sx={{
                                        '& .MuiSelect-select:focus': {
                                            backgroundColor: 'transparent', // Focus ke time ka background ko transparent kar diya
                                            boxShadow: 'none', // Focus ke time ka box-shadow hataya
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none', // Select text field ke bahar ka border hataya
                                        },
                                    }}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {

                                                backgroundColor: '#3B3363', // Change this to your preferred color
                                            },
                                        },
                                    }}

                                    value={buyOrder}
                                    onChange={handleChange2}
                                >
                                    <MenuItem value={10}>
                                        <span style={{ display: "flex" }}><img src={"https://zenix.dexignzone.com/xhtml/images/svg/lit3.svg"} height={60} width={60} alt='litteral' /><p style={{ marginTop: "15px", marginLeft: "25px" }}>Litecoin</p></span>
                                    </MenuItem>
                                    <MenuItem value={20} >
                                        <span style={{ display: "flex" }}><img src={"https://zenix.dexignzone.com/xhtml/images/svg/lit3.svg"} height={60} width={60} alt='litteral' /><p style={{ marginTop: "15px", marginLeft: "25px" }}>Ripple</p></span>
                                    </MenuItem>
                                    <MenuItem value='defaultValue'>
                                        <span style={{ display: "flex" }}><img src={bee} height={60} width={60} alt='litteral' /><p style={{ marginTop: "15px", marginLeft: "25px" }}>Ethereum</p></span>
                                    </MenuItem>
                                    <MenuItem value={40} >
                                        <span style={{ display: "flex" }}><img src={"https://zenix.dexignzone.com/xhtml/images/svg/eth.svg"} height={60} width={60} alt='litteral' /><p style={{ marginTop: "15px", marginLeft: "25px" }}>Bitcoin</p></span>
                                    </MenuItem>
                                    <MenuItem value={50} >
                                        <span style={{ display: "flex" }}><img src={bee} height={60} width={60} alt='litteral' /><p style={{ marginTop: "15px", marginLeft: "25px" }}>Litecoin</p></span>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <DataGrid
                            // sx={{padding:"20px",}}
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                        // pageSizeOptions={[5, 10]}
                        // checkboxSelection
                        />
                        <Div sx={{ display: "flex", justifyContent: "center", position: "relative", top: "20px", }}>
                            <Button variant="contained" sx={{ background: "#6418C3" }} ><ArrowDropDownIcon sx={{ fontSize: "35px", height: "40px", width: "50px", fontWeight: 900 }} /></Button>

                        </Div>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SellBuyorder
