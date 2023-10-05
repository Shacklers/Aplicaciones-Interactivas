import React, { useState } from 'react';
import {useAuth} from '../components/Hooks/AuthContext'
import { Box, Button, Grid, TextField, Typography,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { Link } from 'react-router-dom';
const statuses = ['Confirmada', 'A confirmar', 'Finalizada', 'Aprobada','Cancelada'];


const useStyles = makeStyles((theme) => ({
  menuTabs: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    '& .MuiTabs-flexContainer': {
      flexWrap: 'nowrap',
    },
    '& .MuiTab-root': {
      minWidth: 'auto',
    },
  }}));

  const clasesData = [
    { id: 1, clase: 'Historia', mensajes: 10, profesor: 'Profesor 1', frecuencia: 'Diaria' },
    { id: 2, clase: 'Matemáticas', mensajes: 5, profesor: 'Profesor 2', frecuencia: 'Semanal' },
    { id: 3, clase: 'Programación', mensajes: 5, profesor: 'Profesor 4', frecuencia: 'Semanal' },
    { id: 4, clase: 'Química', mensajes: 5, profesor: 'Profesor 5', frecuencia: 'Semanal' },
    { id: 5, clase: 'Matemáticas', mensajes: 5, profesor: 'Profesor 7', frecuencia: 'Semanal' },
   
  ];

const LayoutProfesor = (props) =>{
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
   
      <Grid container spacing={0} justifyContent={'center'} marginBottom={"100px"}>
       <Box width={'100%'} backgroundColor={'salmon'}><Typography variant="h2" textAlign={'start'} color="initial" marginLeft={'10px'}>Mis clases</Typography></Box>
      <Grid  item xs={10} sm={6} md={6} marginTop={'50px'} backgroundColor={'white'}>

      <Box width={'100%'} backgroundColor={'salmon'}><Typography variant="h2" textAlign={'center'} color="initial" >Crear publicacion</Typography></Box>
      <form >
      <Grid container spacing={1}>
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
      <Grid item xs={12} sm={12} md={12} marginTop={'50px'} padding={'20px'}>
      <Box width={'100%'} backgroundColor={'salmon'}><Typography variant="h2" textAlign={'center'} color="initial">Mis publicaciones</Typography></Box>
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
      
      
      <Grid item xs={12} sm={12} md={12} marginTop={'50px'} padding={'20px'}  >
      <Box width={'100%'} backgroundColor={'salmon'}><Typography variant="h2" textAlign={'center'} color="initial">Estados de publicaciones</Typography></Box>
      <Table sx={{backgroundColor:'white'}}>
      
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

const LayoutAlumno = () => {
  return (
    
    <Grid container spacing={0} justifyContent={'center'}>
       <Box width={'100%'} backgroundColor={'salmon'}><Typography variant="h2" textAlign={'start'} color="initial" marginLeft={'10px'}>Alumno</Typography></Box>
    <Grid  item xs={10} sm={6} md={6} height={'800px'} sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    <Box width={'100%'} backgroundColor={'salmon'}><Typography variant="h2" textAlign={'center'} color="initial">Mis clases</Typography></Box>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Clase</TableCell>
            <TableCell>Mensajes</TableCell>
            <TableCell>Profesor</TableCell>
            <TableCell>Frecuencia</TableCell>
            <TableCell>Opinión</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clasesData.map((clase) => (
            <TableRow key={clase.id}>
              <TableCell>{clase.clase}</TableCell>
              <TableCell>
                <Link to={`/mensajes/${clase.id}`}>{clase.mensajes}</Link>
              </TableCell>
              <TableCell>{clase.profesor}</TableCell>
              <TableCell>{clase.frecuencia}</TableCell>
              <TableCell>
                <Link to={`/opinion/${clase.id}`}>
                  <Button variant="contained" color="primary">Dar Opinión</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     

    </Grid>
  </Grid>



  );
}

const initialUserData = {
  nombreUsuario: 'John',
  apellidoUsuario: 'Doe',
  emailUsuario: 'john.doe@example.com',
  contraseñaUsuario: '********', // Asegúrate de manejar contraseñas de manera segura en tu aplicación
  ubicacionUsuario: 'Ciudad, País',
  usuarioTelefono: '123456789'
};


const  LayoutMiCuenta = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedUserData(initialUserData);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Handle save logic here (e.g., update user data on the server)
    console.log('Updated user data:', editedUserData);
  };

  const handleInputChange = (field, value) => {
    setEditedUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  return (

    <Grid container spacing={0} alignContent={'start'} justifyContent={'center'}  height={'100%'}>
       <Box width={'100%'}backgroundColor={'salmon'}  ><Typography variant="h2"  textAlign={'start'} marginLeft={'10px'} color="initial">Mi cuenta</Typography></Box>
    <Grid  item xs={10} sm={6} md={4}padding={'20px'}  >
    
    <Box width={'100%'}  ><Typography variant="h2" backgroundColor={'salmon'} textAlign={'center'} color="initial">Mis datos</Typography></Box>
    <TableContainer component={Paper} >
      <Table>
       
        
    
        <TableBody>
          {Object.entries(initialUserData).map(([field, value]) => (
            <TableRow key={field}>
              <TableCell>{field}</TableCell>
              <TableCell>
                {isEditing ? (
                  <TextField
                    value={editedUserData[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                  />
                ) : (
                  value
                )}
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={2} align="center" sx={{backgroundColor:'salmon'}}>
              {isEditing ? (
                <IconButton onClick={handleSaveClick}>
                  <SaveIcon />
                </IconButton>
              ) : (
                <IconButton onClick={handleEditClick}>
                  <EditIcon />
                </IconButton>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
     

    </Grid>
  </Grid>

    
  );
};


function Account(){
    const {  user} = useAuth();
    const navigate = useNavigate();
    const menuItems = ['Mis Datos','Dar Clases', 'Alumno'];
    const componentes = [LayoutMiCuenta,LayoutProfesor ,LayoutAlumno ];
    const classes = useStyles();
      const redirect = () => {
        navigate(`/`);
      }
   

      const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const ComponenteActual = componentes[value];


    return(
        <>
        {
          user === null? redirect() : 
          <>
             <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                className={classes.menuTabs}
              >
                {menuItems.map((text, index) => (
                <Tab key={text} label={text} />
                ))}
            </Tabs>
            <ComponenteActual />
          </>
         
     
         
        }


         
            
            </>
    )
}

export default Account;