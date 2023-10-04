import React, { useState } from 'react';
import {useAuth} from '../components/Hooks/AuthContext'
import { Box, Button, Grid, TextField, Typography,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const statuses = ['Confirmada', 'A confirmar', 'Finalizada', 'Aprobada','Cancelada'];

const Layout = (props) =>{
  const [selectedButton, setSelectedButton] = useState('Confirmada');

  
  const [formData, setFormData] = useState({
    nombre: '',
    titulo:'',
    servicio: '',
    duracion: '',
    descripcionProfesor: '',
    descripcionPublicacion: '',
    frecuencia: '',
    costo: '',
  });
  const labels = ['Publicación', 'Publicar', 'Despublicar', 'Modificar', 'Eliminar'];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  const [selectedButtons, setSelectedButtons] = useState(Array(6).fill(''));

  const handleButtonClick = (rowIndex, buttonLabel) => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[rowIndex] = buttonLabel;
    setSelectedButtons(newSelectedButtons);
  };

 

  return (
   
      <Grid container spacing={5} justifyContent={'center'}>
       
      <Grid  item xs={10} sm={6} md={6} >

 

      <Typography variant='h4' textAlign={'center'}>Crear publicacion</Typography>
      <form>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
          <TextField
            label="Titulo de publicacion"
            variant="outlined"
            margin="normal"
            fullWidth
            name="titulo"
            value={formData.titulo}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Nombre"
            variant="outlined"
            margin="normal"
            fullWidth
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Servicio"
            variant="outlined"
            margin="normal"
            fullWidth
            name="servicio"
            value={formData.servicio}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Duración"
            variant="outlined"
            margin="normal"
            fullWidth
            name="duracion"
            value={formData.duracion}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Descripción del profesor"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            name="descripcionProfesor"
            value={formData.descripcionProfesor}
            onChange={handleInputChange}
            rows={4}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
             label="Descripción de la Clase"
             variant="outlined"
             margin="normal"
             fullWidth
             multiline
             name="descripcionClase"
             value={formData.descripcionClase}
             onChange={handleInputChange}
             rows={4}
            
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Frecuencia"
            variant="outlined"
            margin="normal"
            fullWidth
            name="frecuencia"
            value={formData.frecuencia}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Costo"
            variant="outlined"
            margin="normal"
            fullWidth
            name="costo"
            value={formData.costo}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
        Enviar
      </Button>
    </form>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
      <Typography  variant='h4' backgroundColor='white' textAlign={'center'}>PANEL DE PUBLICACIONES</Typography>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {[1, 2, 3, 4, 5].map((index) => (
            <TableRow key={index}>
              <TableCell>Publicación {index}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" >
                  Publicar
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="secondary">
                  Despublicar
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="primary">
                  Modificar
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary">
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
      <Table>
      <TableBody>
        {[...Array(5).keys()].map((rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell>Publicación</TableCell>
            {statuses.map((status, statusIndex) => (
              <TableCell key={statusIndex}>
                <Button
                  variant= {selectedButtons[rowIndex] === status ? 'contained' : 'outlined'}
                  color='primary' 
                  onClick={() => handleButtonClick(rowIndex, status)}
                >
                  {status}
                </Button>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </Grid>
    </Grid>
      
  
  );
}



function Account(){
    const {  user} = useAuth();
    const navigate = useNavigate();
    
      const redirect = () => {
        navigate(`/`);
      }
   
    return(
        <>
        {
          user === null? redirect() : 
          user[0].categoria === 'profesor'? 
         
          <Layout ></Layout> :
          <Layout></Layout>
         
         
        }


         
            
            </>
    )
}

export default Account;