import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

interface BidFormProps {
    auctionId: string;
    onBidPlaced: (bidAmount: number, userId: string) => Promise<void>; // Updated prop type
}

const BidForm: React.FC<BidFormProps> = ({ auctionId, onBidPlaced }) => {
    const [bidAmount, setBidAmount] = useState<number>(); // Number type for bidAmount
    const [userId, setUserId] = useState('');
    const [bidError, setBidError] = useState<string | null>(null);
    const [helperText, setHelperText] = useState<string | null>(null); // For helper text


    const handleBidSubmit = async (event: React.FormEvent) => {

        event.preventDefault();

        if (!bidAmount || bidAmount <= 0) {
            setBidError('true');
            setHelperText('Please enter a valid bid amount.');
            return;
        }


        if(!userId){
            setBidError('true');
            setHelperText('Please enter your User ID.');
            return;

        }
        setBidError(null);
        setHelperText(null);
        try {
            await onBidPlaced(bidAmount, userId);


        } catch (error: any) { // Use any for wider error catching.
            console.error("Error placing bid:", error)
            // Handle and display the error appropriately
             setBidError('true');
             if(error?.data?.message){
                setHelperText(error.data.message); // Display error message from backend
             }else{
                setHelperText('Failed to place bid.'); // Generic error message
             }

        }

    };



    return (
        <Box component="form" onSubmit={handleBidSubmit} noValidate sx={{ mt: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
                Place Your Bid
            </Typography>
            <TextField
                label="Bid Amount"
                type="number"
                value={bidAmount || ''}
                onChange={(e) => setBidAmount(parseFloat(e.target.value))}
                fullWidth
                margin="normal"
                required
                error={bidError !== null}
                helperText={helperText || "Enter a number greater than 0"}


            />
             <TextField
                label="User ID"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                fullWidth
                margin="normal"
                required
                error={bidError !== null}

            />


            <Button type="submit" variant="contained" color="primary">
                Place Bid
            </Button>
        </Box>
    );
};

export default BidForm;