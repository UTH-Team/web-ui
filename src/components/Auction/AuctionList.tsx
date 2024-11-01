import { useGetAuctionsQuery } from '../../services/auction.service';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Typography,
    CircularProgress,
    Grid,
    Paper,
    Button,
    Stack
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

    if (isError) return <p>Error loading auctions.</p>;

    if (!auctions || auctions.length === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="body1">No auctions available.</Typography>
            </Box>
        )
    }

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h4" gutterBottom component="div">
                Available Auctions
            </Typography>
            <Grid container spacing={3}>
                {auctions.map((auction) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={auction.id}>
                        <Paper
                            elevation={3}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: 200,
                                    backgroundColor: '#f5f5f5',
                                    backgroundImage: `url(${auction.imageUrl || '/placeholder-image.jpg'})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                            <Box sx={{ p: 2 }}>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="div">
                                        {auction.itemName}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Current Bid: ${auction.currentBid}
                                    </Typography>
                                    <Button
                                        component={RouterLink}
                                        to={`/auction/${auction.id}`}
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Place Bid
                                    </Button>
                                </Stack>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AuctionList;