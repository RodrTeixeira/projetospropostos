import { Box, TextField, Button, Paper, useTheme, Icon} from '@mui/material';
import { Environment } from '../../environment';

interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void; 
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void; 
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
    textoDaBusca = '',
    mostrarInputBusca = false,
    aoMudarTextoDeBusca,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    aoClicarEmNovo,
}) => {
    const theme = useTheme();
    return (
        <Box 
            height={theme.spacing(5)} 
            marginX={1} 
            padding={1} 
            paddingX={2} 
            display='flex' 
            gap={1} 
            alignItems='center' 
            component={Paper}
        >
            {mostrarInputBusca && (
                <TextField 
                    size='small'
                    value={textoDaBusca}
                    onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
                    placeholder={Environment.INPUT_DE_BUSCA}
                />
            )}
            <Box flex={1} display='flex' justifyContent='end'>
                {mostrarBotaoNovo && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='contained'
                        onClick={aoClicarEmNovo}
                        endIcon={<Icon>add</Icon>}
                    >{textoBotaoNovo}</Button>
                )}
            </Box>
            
        </Box>
    );
};