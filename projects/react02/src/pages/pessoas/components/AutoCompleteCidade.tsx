import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from '../../../shared/hooks';
import { CidadesService } from '../../../shared/services/api/cidades/CidadesService';

type TAutoCompleteOption = {
    id: number;
    label: string;

}

interface IAutoCompleteCidadeProps {
    isExternalLoading?: boolean;
}

export const AutoCompleteCidade: React.FC<IAutoCompleteCidadeProps> = ({isExternalLoading = false}) => {
    const { debounce } = useDebounce();
    const [opcoes, setOpcoes] = useState<TAutoCompleteOption[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [busca, setBusca] = useState('');
    const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
    useEffect(() => {
        setIsLoading(true);
        debounce(() => {
            CidadesService.getAll(1, busca)
                .then((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        // alert(result.message);
                    } else {
                        console.log(result);
                        setOpcoes(result.data.map(cidade => ({id: cidade.id, label: cidade.nome})));
                    }
                });
        });
    }, [busca]);

    const autoCompleteSelectedOption = useMemo(() => {
        if (!selectedId) return undefined;
        const selectedOption = opcoes.find(opcao => opcao.id === selectedId);
        return selectedOption;
    }, [selectedId, opcoes]);

    return (
        <Autocomplete 
            value={autoCompleteSelectedOption}
            loading={isLoading}
            disabled={isExternalLoading}
            popupIcon={ (isExternalLoading || isLoading) ? <CircularProgress size={28}/> : undefined}
            onChange={(_, newValue) => { setSelectedId(newValue?.id); setBusca(''); }}
            onInputChange={(_, newValue) => setBusca(newValue)}
            options={opcoes}
            renderInput={(params) => (
                <TextField 
                    {...params}
                    label='Cidade'
                />
            )}
        />
    );
};