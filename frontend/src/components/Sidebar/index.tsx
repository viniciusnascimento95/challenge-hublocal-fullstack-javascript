import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItem component="a" href="/" >
        <ListItemText primary="Dashboard" />
      </ListItem>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ConfirmationNumberIcon />
      </ListItemIcon>
      <ListItem component="a" href="/tickets" >
      <ListItemText primary="Chamados" />
      </ListItem>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItem component="a" href="/users">        
        <ListItemText primary="Usuários" />
      </ListItem>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItem component="a" href="/companies" >
      <ListItemText primary="Empresas" />
      </ListItem>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Localização" />
    </ListItemButton>
  </React.Fragment>
);

export function Sidebar() {

  return (

    <List component="nav">
      {mainListItems}
    </List>
  )
}