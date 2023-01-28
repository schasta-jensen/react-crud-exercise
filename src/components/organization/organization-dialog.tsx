import React, { FC, Fragment, useRef, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface DialogBoxProps {
    open: boolean;
    OnDialogHandle: () => void;
  }

  export const OrganizationDialog: FC<DialogBoxProps> = (props: any) => {

    const cancelButtonRef = useRef(null);
    //const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      props.OnDialogHandle();
    };  
  
    return (
      <div>
        <Dialog open={props.open} onClose={handleClose} fullWidth={true}  maxWidth={'sm'}>
          <DialogTitle>Instituição</DialogTitle>
          <DialogContent>           
          {props.children}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>            
          </DialogActions>
        </Dialog>
      </div>
    );
  }