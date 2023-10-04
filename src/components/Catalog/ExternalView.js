import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Dialog, DialogTitle, Grid, Typography,DialogActions, DialogContent, Checkbox, DialogContentText } from '@mui/material';


function ExternalView({open,setOpen}){

 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleApplyClick = () => {
    // Implementa aquí la lógica para aplicar cambios
    console.log('Cambios aplicados');
    handleClose(); // Cierra el diálogo al aplicar
  };
  

    
    
    return(
      <div>
     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Vista Externa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Contenido de la vista externa.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button open={open} onClick={() => setOpen(false)} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}


export default ExternalView;