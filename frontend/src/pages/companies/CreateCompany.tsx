import { Button, Grid, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Template from "../../components/shared/Template";

export function CreateCompany() {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          name: data.get('name'),
          description: data.get('description'),
          cnpj: data.get('cnpj'),      
        });  
    
        // const values = {
        //   email: data.get('email'),
        //   password: data.get('password'), 
        // }
        // await onFinish(values as any);
      };

    //   const schema = Yup.object().shape({
    //     email: Yup.string().required('Campo obrigatório'),
    //     password: Yup.string().required('Campo obrigatório'),
    //   });



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

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField required fullWidth id="outlined-basic" label="Nome da empresa" name="name" variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField required fullWidth id="outlined-basic" label="Descrição" name="description" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="outlined-basic" fullWidth label="CNPJ" name="cnpj" variant="outlined" />
                    </Grid>

                    <Grid item xs={6}>
                        <Button type="submit" variant="contained" color="success">
                            Salvar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Template>

    )
}