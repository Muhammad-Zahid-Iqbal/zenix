import React from 'react';
import main_balance from '../../../images/main_balance.png';
import circle from '../../../images/circle.png';
import { Grid } from '@mui/material';
import BalanceCard from './BalanceCard';
const Mainbalance = () => {
    const cardsData = [
        { imageUrl: 'https://zenix.dexignzone.com/xhtml/images/card/card1.jpg', iconImage: main_balance },
        { imageUrl: 'https://zenix.dexignzone.com/xhtml/images/card/card2.jpg', iconImage: circle },
        { imageUrl: 'https://zenix.dexignzone.com/xhtml/images/card/card3.jpg', iconImage: circle },
        { imageUrl: 'https://zenix.dexignzone.com/xhtml/images/card/card4.jpg', iconImage: circle },
    ];

    return (
        <Grid container spacing={2} padding={2}>
            {cardsData.map((card, index) => (
                <BalanceCard key={index} imageUrl={card.imageUrl} iconImage={card.iconImage} />
            ))}
        </Grid>
    );
};

export default Mainbalance;