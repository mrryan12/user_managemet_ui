import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, MenuItem, Box, Alert } from '@mui/material';
import ApiService from '../Service/ApiService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validation = () => {
        if(!username || username.length < 3){
            console.log(username);
            setError("Username must be between 3 and 20 characters.");
            return false;
        }
        if(!password || password.length < 6){
            setError("Password must be at least 6 characters");
            return false;
        }
        if(!role){
            setError("Please Select the Role");
            return false;
        }
        return true;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (validation()) {
            let object = { username: username ,password: password ,role: role };
            ApiService.register(object).then(response => {
                navigate('/login');
            }).catch(error => {
                alert("User Not able to registered")
                console.error('Error:', error);
            });

        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto', padding: '20px', textAlign: 'center' }}>
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleRegister}>
                <TextField
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    select
                    label="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    fullWidth
                    margin="normal"
                >
                    <MenuItem value="ADMIN">Admin</MenuItem>
                    <MenuItem value="NORMAL">Normal</MenuItem>
                </TextField>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </form>
            <Button onClick={() => navigate('/login')} variant="text" color="primary">
                Already have an account? Login
            </Button>
        </Box>
    );
};

export default Register;
