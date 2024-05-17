import { startTransition, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Container, Box, Button } from '@mui/material';

const pages = ['Home', 'Objectives', 'Projects', 'HR'];

export function PageWrapper() {
    const nav = useNavigate();

    const handleMenuButtonClick = (page) => {
        switch (page) {
            case 'Objectives':
                startTransition(() => {
                    nav('/objectives');
                });
                break;
            case 'Projects':
                startTransition(() => {
                    nav('/projects');
                });
                break;
            case 'HR':
                startTransition(() => {
                    nav('/hr');
                });
                break;
            default:
                // Go home
                startTransition(() => {
                    nav('/');
                });
                break;
        }
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
                            onClick={() => handleMenuButtonClick(page)}
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