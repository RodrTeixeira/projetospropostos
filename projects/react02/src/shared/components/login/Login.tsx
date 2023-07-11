import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import * as yup from 'yup';
import { useAuthContext } from '../../contexts';

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(5),
});

interface ILoginProps {
    children: React.ReactNode;
}

export const Login: React.FC<ILoginProps> = ({children}) => {
    const { isAuthenticated, login } = useAuthContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = () => {
        loginSchema
            .validate({email, password})
            .then(dadosValidados => {
                login(dadosValidados.email, dadosValidados.password);
            })
            .catch((errors) => {

            });
    };

    if (isAuthenticated) return (
        <>{children}</>
    );

    return (
        <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center'>
            <Card>
                <CardContent>
                    <Box display='flex' flexDirection='column' gap={2} width={300}>
                        <Typography variant='h6' align='center'>
                            Identifique-se
                        </Typography>
                        <TextField 
                            fullWidth
                            label='Email'
                            type='email'
                            value={email}
                            error={!!emailError}
                            helperText={emailError}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField 
                            fullWidth
                            label='Senha'
                            type='password'
                            value={password}
                            error={!!passwordError}
                            helperText={passwordError}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Box>
                </CardContent>
                <CardActions>
                    <Box width='100%' display='flex' justifyContent='center'>
                        <Button
                            variant='contained'
                            onClick={handleSubmit}
                        >
                            Entrar
                        </Button>
                    </Box>
                </CardActions>
            </Card> 
        </Box>
    );

};