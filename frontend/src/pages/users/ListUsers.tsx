import Template from "../../components/shared/Template";
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';

import { Button } from "@mui/material";
import { Api } from "../../services/api";

interface UserData {
  id?: string;
  fullname: string;
  email: string;
  created_at: string;
}

export function ListUsers() {

  const [users, setUser] = useState<UserData[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Api.get('users');
       
        setUser(response.data);
       
      } catch (err) {
       
      } finally {
       
      }

      // fetch("http://localhost:3333/users")
      //   .then((data) => data.json())
      //   .then((data) => setUser(data))
    }
    getData();
  }, []);
  console.log(users)
 
  return (

    <Template title="Administração de usuários">
      <h2>Usuários</h2>

      <TableContainer component={Paper} sx={{ border: 1, borderColor: 'grey.500' }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome completo</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Data de criação</TableCell>
              {/* <TableCell align="right">Senha</TableCell> */}
              <TableCell align="center">Opções</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

         
          {users && users.map((user, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.fullname}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.created_at}</TableCell> 
                {/* <TableCell align="right">****</TableCell> */}
                <TableCell align="center"><Button variant="outlined" startIcon={<EditIcon />} >Editar </Button> <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>Excluir </Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
      </TableContainer>

    </Template>

  )
}