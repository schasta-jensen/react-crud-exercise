import React from "react";
import { Card, List  } from  "@mui/material";
import { menuItens } from '../../data/menu.json';
import {useNavigate} from 'react-router-dom';
import { RenderTree } from '../../interfaces/treeview';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function MenuListIcon() {

    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const navigate = useNavigate();

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
        item: RenderTree
      ) => {
        setSelectedIndex(index);
        navigate(item.page, {replace: true});
        //navigate.push(item.page);

      };

      const renderTree = (node: RenderTree) => (
        <ListItemButton key={node.id} selected={selectedIndex === 0}  onClick={(event) => handleListItemClick(event, 0, node)} >
            <ListItemIcon className="menu-icon" ><node.icon fontSize="large" color="primary" /></ListItemIcon>
            <ListItemText primary={node.name}  
              primaryTypographyProps={{fontSize: 16, textTransform: 'uppercase', fontWeight: 600 }} />
        </ListItemButton>
        );

  return (

  <Card variant="outlined" sx={{
      width: "100%",
      borderRadius: "8px",
      padding: "0.1rem",
      minHeight: "87vh"   
    }}>
  <List component="nav" aria-label="menu">
    {menuItens.map((node: any) => renderTree(node))}     
  </List>
  </Card>

  );
};