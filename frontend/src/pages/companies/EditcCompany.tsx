import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Template from "../../components/shared/Template";
import { useParams } from 'react-router';
import { Api } from '../../services/api';
import { useEffect, useState } from "react";


interface CompanyData {
    id: string;
    name: string;
    description: string;
    cnpj: string;
    owner_id: string;
    created_at: string;
  }
  

export function EditUsers() {

    const initialValues = {
        id: "",
        name: "",
        description: "",
        cnpj: "",
        owner_id: "",
        created_at: "",        
      };
      

    const [company, setCompany] = useState<CompanyData>(initialValues);

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
          try {
            // const response = await Api.get(`companies/127ebff6-e0a7-4db3-b0eb-6798eff3cde3`);
            const response = await Api.get(`companies/${id}`);
            console.log(response.data);
            setCompany(response.data);

          } catch (err) {

          } finally {

          }

          // fetch("http://localhost:3333/users")
          //   .then((data) => data.json())
          //   .then((data) => setUser(data))
        }
        getData();
      }, []);
    //   console.log(companies)




    return (
        <Template title="Editar dados empresa">
        <Grid container spacing={4}>
            <Grid item xs={10}>
                <Typography variant="h5" gutterBottom component="div">
                    Editando Empresa {company && company.name}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant="outlined" component="a" href="/companies">
                    Voltar
                </Button>
            </Grid>
        </Grid>

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <TextField required id="outlined-basic" label="Nome da empresa" variant="outlined" value={company && company.name}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField required id="outlined-basic" label="Descrição" variant="outlined" value={company && company.description}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField required id="outlined-basic" label="CNPJ" variant="outlined" value={company && company.cnpj}/>
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