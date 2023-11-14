import React, { useState } from 'react';
import {
    Grid,
    Paper,
    IconButton,
    Menu,
    MenuItem,
    FormControl,
    Select,
    Box,
    Button
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Div from '../../../shared/Div/Div';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import bee from "../../../images/b.png";


const ITEM_HEIGHT = 48;

const OrderSection = ({ title, imageUrl, handleChange, orderValue, rows, columns }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
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

                                    value={orderValue}
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
                                    <MenuItem value='defaultValue' >
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
    );
};
export default OrderSection;