import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import MapIcon from '@mui/icons-material/Map';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Template from "../../components/shared/Template";
// import { useEffect, useState } from "react";

export function CreateCompany() {

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    // useEffect(() => {
    //     // if (props.lazy) return;
    //     getCepLocation();
    //   }, [props.lazy]);

    function getCepLocation() {
        // setLoading(true);
        fetch(`https://viacep.com.br/ws/76803614/json/`)
      .then(response => response.json())
      .then(data => {

        console.log(data);
        // setData(data);
        // setError(false);
        // onSuccess(data);
      })
    //   .catch(err => {
    //     setError(true);
    //   })
    //   .finally(() => setLoading(false));
    
    }

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
            <Grid container spacing={11}>
                <Grid item xs={10}>
                    <Typography variant="h5" gutterBottom component="div">
                        Nova Empresa
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
                </Grid>


                <Divider sx={{ my: 3 }} ><MapIcon/>Localização</Divider>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField required fullWidth id="outlined-basic" label="Nome do local" name="" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField required fullWidth id="outlined-basic" label="Cep" name="description" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField required fullWidth id="outlined-basic" label="Uf" name="description" variant="outlined" />
                    </Grid>


                    <Grid item xs={6}>
                        <TextField required id="outlined-basic" fullWidth label="Endereço" name="andress" variant="outlined" />
                    </Grid> 
                    <Grid item xs={3}>
                        <TextField required id="outlined-basic" fullWidth label="Bairro" name="andress" variant="outlined" />
                    </Grid>    
                    <Grid item xs={3}>
                        <TextField required id="outlined-basic" fullWidth label="Cidade" name="andress" variant="outlined" />
                    </Grid>                   
                </Grid>

                <Divider sx={{ my: 3 }} ><AccountBoxIcon/>Reponsavel</Divider>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField required fullWidth id="outlined-basic" label="Nome completo" name="" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField required fullWidth id="outlined-basic" label="Telefone" name="description" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField required fullWidth id="outlined-basic" label="Cep" name="description" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField required fullWidth id="outlined-basic" label="Uf" name="description" variant="outlined" />
                    </Grid>


                    <Grid item xs={6}>
                        <TextField required id="outlined-basic" fullWidth label="Endereço" name="andress" variant="outlined" />
                    </Grid> 
                    <Grid item xs={3}>
                        <TextField required id="outlined-basic" fullWidth label="Bairro" name="andress" variant="outlined" />
                    </Grid>    
                    <Grid item xs={3}>
                        <TextField required id="outlined-basic" fullWidth label="Cidade" name="andress" variant="outlined" />
                    </Grid>                   
                </Grid>

                <Grid item xs={6} sx={{ mt: 3 }}>
                        <Button type="submit" variant="contained" color="success">
                            Salvar
                        </Button>
                    </Grid>

            </Box>

            

           
        </Template>

    )
}