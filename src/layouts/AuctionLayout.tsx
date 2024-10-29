import { ReactNode } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';


interface AuctionLayoutProps {
    children: ReactNode;
    title?: string;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false; // Make maxWidth customizable
    spacing?: number; // Add spacing prop

}

const AuctionLayout: React.FC<AuctionLayoutProps> = ({ children, title, maxWidth = 'md', spacing = 2 }) => {  // Default maxWidth='md'
    return (
        <Container maxWidth={maxWidth}>
            <Stack spacing={spacing} sx={{ my: 4 }}> {/* Use Stack for spacing, optional title */}

                {title && (
                    <Typography variant="h4" component="h1">
                        {title}
                    </Typography>
                )}

                {children}

            </Stack>

        </Container>
    );
};

export default AuctionLayout;