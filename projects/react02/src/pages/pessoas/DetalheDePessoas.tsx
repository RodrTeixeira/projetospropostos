import { Box, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FerramentasDeDetalhe } from '../../shared/components';
import { VTextField, VForm, useVForm, IVFormErrors } from '../../shared/forms';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';
import * as yup from 'yup';


interface IFormData {
    email: string;
    nomeCompleto: string;
    cidadeId: number;
}

const formValidationSchema: yup.Schema<IFormData> = yup.object().shape({
    nomeCompleto: yup.string().required().min(3),
    email: yup.string().required().email(),
    cidadeId: yup.number().required(),
});


export const DetalheDePessoas: React.FC = () => {
    const { id = 'nova' } = useParams<'id'>();
    const navigate = useNavigate(); 

    const { formRef, save, saveAndClose, isSaveAndClose } = useVForm();

    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');

    useEffect(() => {
        if (id !== 'nova') {
            setIsLoading(true);
            PessoasService.getById(Number(id))
                .then((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert(result.message);
                        navigate('/pessoas');
                    } else {
                        setNome(result.nomeCompleto);

                        formRef.current?.setData(result);
                    }
                });
        } else {
            formRef.current?.setData({
                nomeCompleto: '',
                email: '',
                cidadeId: '',
            });
        }
    }, [id]);

    const handleSave = (dados: IFormData) => {

        formValidationSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {

                setIsLoading(true);

                if (id === 'nova') {
                    PessoasService
                        .create(dadosValidados)
                        .then((result) => {
                            setIsLoading(false);
                            if (result instanceof Error) {
                                alert(result.message);
                            } else {
                                if (isSaveAndClose()) {
                                    navigate('/pessoas');
                                } else {
                                    navigate(`/pessoas/detalhe/${result}`);
                                } 
                            }
                        });
                } else {
                    PessoasService
                        .updateById(Number(id), {id: Number(id), ...dadosValidados})
                        .then((result) => {
                            setIsLoading(false);
                            if (result instanceof Error) {
                                alert(result.message);
                            } else {
                                if (isSaveAndClose()) {
                                    navigate('/pessoas');
                                }
                            }
                        });
                }
            })
            .catch((errors: yup.ValidationError) => {
                const validationErrors: IVFormErrors = {};
                errors.inner.forEach(error => {
                    if (!error.path) return;
                    validationErrors[error.path] = error.message;
                });
                formRef.current?.setErrors(validationErrors);
            });     
    };

    const handleDelete = (id: number) => {
        
        if (confirm('Realmente deseja apagar?')) {
            PessoasService.deleteById(id)
                .then(result => {
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        alert('Registro apagado com sucesso!!');
                        navigate('/pessoas');
                    }
                });
        }

    };

    return (
        <LayoutBaseDePagina 
            titulo={id === 'nova' ? 'Nova Pessoa' : nome}
            barraDeFerramentas={
                <FerramentasDeDetalhe 
                    textoBotaoNovo='Nova'
                    mostrarBotaoSalvarEFechar
                    mostrarBotaoApagar={id !== 'nova'}
                    mostrarBotaoNovo={id !== 'nova'}

                    aoClicarEmSalvar={save}
                    aoClicarEmSalvarEFechar={saveAndClose}
                    aoClicarEmApagar={() => handleDelete(Number(id))}
                    aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
                    aoClicarEmVoltar={() => navigate('/pessoas')}

                />
            }
        >
        
            <VForm ref={formRef} onSubmit={handleSave}>
                <Box margin={1} display='flex' flexDirection='column' component={Paper} variant='outlined'>
                
                    <Grid container direction='column' padding={2} spacing={2}>
                        {isLoading && (
                            <Grid item>
                                <LinearProgress variant='indeterminate'/>
                            </Grid>
                        )}
                        <Grid item>
                            <Typography variant='h6'>Geral</Typography>
                        </Grid>
                        <Grid container item direction='row'>
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                                <VTextField fullWidth label='Nome Completo' name='nomeCompleto' disabled={isLoading} onChange={e => setNome(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container item direction='row'>
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                                <VTextField fullWidth label='Email' name='email' disabled={isLoading}/>
                            </Grid>
                        </Grid>
                        <Grid container item direction='row'>
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                                <VTextField fullWidth label='Cidade' name='cidadeId' disabled={isLoading}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box> 
            </VForm>
           
        </LayoutBaseDePagina>
        
    );
};