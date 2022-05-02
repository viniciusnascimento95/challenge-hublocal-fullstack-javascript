import { Button, Divider, Grid, LinearProgress, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import MapIcon from '@mui/icons-material/Map';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Template from "../../components/shared/Template";
import * as yup from "yup"

import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';


interface MyFormValuesCompany {
    name: string;
    description: string;
    cnpj: string;


}

export function CreateCompany() {


    const validationSchema = yup.object({
        name: yup.string().required('Fullname is required'),
        description: yup.string().required('Description is required'),

    });
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

    function onBlurCepUser(ev: any) {
        console.log(ev.target.value);

        if (ev.target.value?.length !== 8) {
            return;
        }

    }

    function onBlurCepLocation(ev: any, setFieldValue: any) {
        // console.log(ev.target.value);

        const { value } = ev.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${value}/json/`)
            .then((response) => response.json())
            .then((data) => {
                setFieldValue('andress', data.logradouro);
                setFieldValue('email', data.bairro);
                setFieldValue('cidade', data.localidade);
                setFieldValue('uf', data.uf);     
                console.log(data);       
            });

    }

    const initialValues: MyFormValuesCompany = { name: '', description: '', cnpj: '' };

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

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }}
                >

                    {({ submitForm, isSubmitting, setFieldValue }) => (
                        <Form>
                            <Grid container spacing={3}>

                            <Field
                                // className={classes.field}
                                component={TextField}
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                />

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


                            <Divider sx={{ my: 3 }} ><MapIcon />Localização</Divider>

                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <TextField required fullWidth id="outlined-basic" label="Nome do local" name="" variant="outlined" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField required fullWidth id="outlined-basic" onBlur={(ev: any) => onBlurCepLocation(ev, setFieldValue)} label="Cep" name="description" variant="outlined" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField required fullWidth id="outlined-basic" label="Uf" name="uf" variant="outlined" />
                                </Grid>


                                <Grid item xs={6}>
                                    <TextField required id="outlined-basic" fullWidth label="Endereço" name="andress" variant="outlined" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField required id="outlined-basic" fullWidth label="Bairro" name="bairro" variant="outlined" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField required id="outlined-basic" fullWidth label="Cidade" name="cidade" variant="outlined" />
                                </Grid>
                            </Grid>

                            <Divider sx={{ my: 3 }} ><AccountBoxIcon />Reponsavel</Divider>

                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <TextField required fullWidth id="outlined-basic" label="Nome completo" name="" variant="outlined" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField required fullWidth id="outlined-basic" label="Telefone" name="description" variant="outlined" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField required fullWidth id="outlined-basic" onBlur={onBlurCepUser} label="Cep" name="description" variant="outlined" />
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
                                <Button type="submit" disabled={isSubmitting}  disableElevation onClick={submitForm} variant="contained" color="success">
                                    Salvar
                                </Button>
                                {isSubmitting && <LinearProgress color="secondary" />}
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>


        </Template>

    )
}