import { useGetAuctionsQuery } from '../../services/auction.service'; // Import the hook
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    CircularProgress, // Import CircularProgress
} from '@mui/material';

const AuctionList: React.FC = () => {

    const { data: auctions, isLoading, isError } = useGetAuctionsQuery();

    if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      )

    }
    console.log(auctions);

    if (isError) return <p>Error loading auctions.</p>;



    if (!auctions || auctions.length === 0) { // Handle empty auction list

        return (

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                 <Typography variant="body1">No auctions available.</Typography>

            </Box>

        )
    }


    return (
        <Box>
            <Typography variant="h4" gutterBottom component="div">
                Available Auctions
            </Typography>
            <List>
                {auctions.map((auction) => (
                    <ListItem key={auction.id} component={RouterLink} to={`/auction/${auction.id}`}>
                        <ListItemText primary={auction.itemName} secondary={`Current Bid: $${auction.currentBid}`} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default AuctionList;