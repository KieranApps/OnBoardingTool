import { useState } from 'react';
import { AppBar, Toolbar, Container, Box, Button } from '@mui/material';

const pages = ['Objectives', 'Projects', 'HR'];

export function PageWrapper() {
    const handleMenuButtonClick = () => {
      
    };
  
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleMenuButtonClick}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
            </AppBar>
        </Box>
    );
}