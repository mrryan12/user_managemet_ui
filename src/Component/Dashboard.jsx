import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import authService from '../services/authService';

const Dashboard = () => {

    const role = localStorage.getItem("role");
    const navigate = useNavigate();

    const menuItems = [
        { text: 'Dashboard', path: '/dashboard' },
        { text: 'User List', path: '/user-list' },
    ];

    if (role === 'ADMIN') {
        menuItems.push({ text: 'User Management', path: '/user-management' });
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <Box>
            <Typography variant="h4">{` ${role === "ADMIN" ? "Admin " : "User "} Dashboard`}</Typography>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} onClick={() => navigate(item.path)}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Button onClick={handleLogout} variant="contained" color="secondary">
                Logout
            </Button>
        </Box>
    );
};

export default Dashboard;
