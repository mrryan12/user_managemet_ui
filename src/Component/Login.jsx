import React, { useState } from "react";
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ApiService from "../Service/ApiService";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        let obj = {username: username, password: password}


        ApiService.login(username,password).then(res => {
             localStorage.setItem("role",res.role);
             localStorage.setItem("accessToken",res.username);
             navigate('/dashboard');
        }).catch(error => {
            alert("Password does not match");
            console.error('Error:', error);
        })
    }

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: '20px', textAlign: 'center' }}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <TextField
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
            <Button onClick={() => navigate('/register')} variant="text" color="primary">
                Don't have an account? Signup here
            </Button>
        </Box>
    );
}
export default Login;