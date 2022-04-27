import { Button, Grid, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Template from "../../components/shared/Template";

export function CreateCompany() {
    return (

        <Template title="Cadastro de Empresas">
            <Grid container spacing={4}>
                <Grid item xs={10}>
                    <Typography variant="h5" gutterBottom component="div">
                        Formulário de Cadastro
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="outlined" component="a" href="/companies">
                        Voltar
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <TextField required id="outlined-basic" label="Nome da empresa" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField required id="outlined-basic" label="Descrição" variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField required id="outlined-basic" label="CNPJ" variant="outlined" />
                    </Grid>

                    <Grid item xs={6}>
                        <Button variant="contained" color="success">
                            Salvar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Template>

    )
}