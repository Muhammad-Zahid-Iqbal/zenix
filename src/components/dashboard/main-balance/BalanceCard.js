import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import Div from '../../../shared/Div/Div';

const BalanceCard = ({ imageUrl, iconImage }) => {
    const generatePaperStyle = (backgroundImageUrl) => ({
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '0.35rem',
        marginTop: '25px',
    });

    return (
        <Grid item sm={6} xs={12}>
            <Paper elevation={3} sx={generatePaperStyle(imageUrl)}>
                <Div sx={{ position: 'relative', padding: '25px 30px' }}>
                    <Div>
                        <p>Main Balance</p>
                    </Div>
                    <Div sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', fontWeight: 600 }}>
                        <h2>$673,412.66</h2>
                        <img src={iconImage} height={60} width={60} alt='main balance' />
                    </Div>
                    <Div sx={{ display: 'flex' }}>
                        <Div sx={{ marginRight: 5 }}>
                            <p style={{ fontSize: '12px', opacity: 0.6 }}>VALID THRU</p>
                            <Typography>08/21</Typography>
                        </Div>
                        <Div>
                            <p style={{ fontSize: '12px', opacity: 0.6 }}>CARD HOLDER</p>
                            <Typography>Marquezz Silalahi</Typography>
                        </Div>
                    </Div>
                </Div>
            </Paper>
        </Grid>
    );
};
export default BalanceCard;