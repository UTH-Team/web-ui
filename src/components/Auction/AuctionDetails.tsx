import { useGetAuctionQuery, usePlaceBidMutation, useQuickBuyMutation } from '../../services/auction.service';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress, Button } from '@mui/material';
import BidForm from './BidForm';
import { Auction } from '../../types/AuctionType';
import AuctionLayout from '../../layouts/AuctionLayout';


const AuctionDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: auction, isLoading, isError } = useGetAuctionQuery(id!, { skip: !id });
    const [placeBid] = usePlaceBidMutation();
    const [quickBuy] = useQuickBuyMutation();


    const [userId, setUserId] = useState('');


    const navigate = useNavigate();

    const handleBidSubmit = async (bidAmount: number) => {

        try {
            await placeBid({ auctionId: id!, bidAmount, userId });

        } catch (error) {
            console.error("Error placing bid:", error);
            // Add error handling/display to the user
        }
    };



    const handleQuickBuy = async () => {
        try {

            await quickBuy({ auctionId: id!, userId });
            navigate('/auctions')


        } catch (error) {

             console.error("Error quick buying:", error);

        }

    }




    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (isError) {
      return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><Typography variant="body1">Error loading auctions.</Typography></Box>;

    }



    if (!auction) { // Check if auction exists


        return (

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

                 <Typography variant="body1">Auction not found.</Typography>

            </Box>

        )


    }

    return (
        <AuctionLayout title={auction ? auction.itemName : "Auction Details"}>
            <Box>


                <Typography variant="h5" gutterBottom component="div">
                    {auction.itemName}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Starting Price: ${auction.startingPrice}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Current Bid: ${auction.currentBid}
                </Typography>



                {auction.quickBuyPrice && <Typography variant="body1" gutterBottom>Quick Buy Price: ${auction.quickBuyPrice}</Typography>}


                <BidForm auctionId={auction.id} onBidPlaced={handleBidSubmit} />

                {auction.quickBuyPrice &&
                    <Button variant="contained" color="primary" onClick={handleQuickBuy} disabled={!userId}>
                        Quick Buy
                    </Button>
                }
            </Box>

        </AuctionLayout>
    );
};

export default AuctionDetails;