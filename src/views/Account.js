import React, { useState } from "react";
import { useAuth } from "../components/Hooks/AuthContext";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";
import "../elements/fonts/BuenosAires-Black/BuenosAiresBlackFont.css";
import "../elements/fonts/BuenosAires-Regular/BuenosAiresRegularFont.css";
import "../elements/fonts/BuenosAires-SemiBold/BuenosAiresFont.css";
import "../elements/fonts/BuenosAires-Thin/BuenosAiresThinFont.css";
import { Divider } from "@material-ui/core";
const statuses = [
  "Confirmada",
  "A confirmar",
  "Finalizada",
  "Cancelada",
];

const useStyles = makeStyles((theme) => ({
  menuTabs: {
    display: "flex",
    flexWrap: "wrap",
    overflowX: "auto",
    "& .MuiTabs-flexContainer": {
      flexWrap: "nowrap",
    },
    "& .MuiTab-root": {
      minWidth: "auto",
    },
  },
}));

const clasesData = [
  {
    id: 1,
    clase: "Historia",
    mensajes: 10,
    profesor: "Profesor 1",
    frecuencia: "Diaria",
  },
  {
    id: 2,
    clase: "Matemáticas",
    mensajes: 5,
    profesor: "Profesor 2",
    frecuencia: "Semanal",
  },
  {
    id: 3,
    clase: "Programación",
    mensajes: 5,
    profesor: "Profesor 4",
    frecuencia: "Semanal",
  },
  {
    id: 4,
    clase: "Química",
    mensajes: 5,
    profesor: "Profesor 5",
    frecuencia: "Semanal",
  },
  {
    id: 5,
    clase: "Matemáticas",
    mensajes: 5,
    profesor: "Profesor 7",
    frecuencia: "Semanal",
  },
];

const LayoutProfesor = (props) => {
  const [selectedButton, setSelectedButton] = useState("Confirmada");

  const [formData, setFormData] = useState({
    nombre: "",
    titulo: "",
    servicio: "",
    duracion: "",
    descripcionProfesor: "",
    descripcionPublicacion: "",
    frecuencia: "",
    costo: "",
  });
  const labels = [
    "Publicación",
    "Publicar",
    "Despublicar",
    "Modificar",
    "Eliminar",
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  const [selectedButtons, setSelectedButtons] = useState(Array(6).fill(""));

  const handleButtonClick = (rowIndex, buttonLabel) => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[rowIndex] = buttonLabel;
    setSelectedButtons(newSelectedButtons);
  };

  return (
    <Grid
      container
      spacing={0}
      justifyContent={"center"}
      marginBottom={"100px"}
    >
      <Box width={"100%"} backgroundColor={"salmon"}>
        <Typography
          variant="h2"
          textAlign={"start"}
          
          marginLeft={"10px"}
          fontFamily={"BuenosAires"}
          color="whiteSmoke"

        >
          Mis clases
        </Typography>
      </Box>
      <Grid
        item
        xs={10}
        sm={6}
        md={6}
        marginTop={"50px"}
        backgroundColor={"white"}
      >
        <Box width={"100%"} backgroundColor={"salmon"}>
          <Typography variant="h2" textAlign={"center"}  fontFamily={"BuenosAires"} fontSize={{xs:'40px'}}  color="whiteSmoke">
            Crear publicacion
          </Typography>
        </Box>
        <form style={{display:"flex", alignItems:'center', flexDirection:'column'}}>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{width:"50%"}}
            
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} sm={12} md={12} marginTop={"50px"} padding={"20px"}>
        <Box width={"100%"} backgroundColor={"salmon"}>
          <Typography variant="h2" textAlign={"center"} fontFamily={"BuenosAires"} fontSize={{xs:'35px'}}  color="whiteSmoke">
            Mis publicaciones
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {[1, 2, 3, 4, 5].map((index) => (
                <TableRow key={index}>
                  <TableCell>Publicación {index}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
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
      
      <Grid item xs={12} sm={12} md={12} marginTop={"50px"} padding={"20px"}>
        
        <Box width={"100%"} backgroundColor={"salmon"}>
          <Typography variant="h2" textAlign={"center"} fontSize={{xs:'40px'}}   fontFamily={"BuenosAires"}
          color="whiteSmoke">
            Estados de publicaciones
          </Typography>
        </Box>
        <TableContainer component={Paper}>
        <Table component={Paper} >
          <TableBody>
            {[...Array(5).keys()].map((rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>Publicación</TableCell>
                {statuses.map((status, statusIndex) => (
                  <TableCell key={statusIndex}>
                    <Button
                      variant={
                        selectedButtons[rowIndex] === status
                          ? "contained"
                          : "outlined"
                      }
                      color="primary"
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
        </TableContainer>
      </Grid>
    </Grid>
  );
};

const LayoutAlumno = () => {
  return (
    <Grid container spacing={0} justifyContent={"center"}>
      <Box width={"100%"} backgroundColor={"salmon"}>
        <Typography
          variant="h2"
          textAlign={"start"}
          marginLeft={"10px"}
          fontFamily={"BuenosAires"}
          color={"whiteSmoke"}
        >
          Alumno
        </Typography>
      </Box>
      <Grid
        item
        xs={10}
        sm={6}
        md={6}
        height={"800px"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box width={"100%"} backgroundColor={"salmon"}>
          <Typography variant="h2" textAlign={"center"}  fontFamily={"BuenosAires"} fontSize={'50px'}
          color={"whiteSmoke"}>
            Mis clases
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell sx={{ fontFamily:"BuenosAires",}} >Clase</TableCell>
                <TableCell sx={{ fontFamily:"BuenosAires",}}>Mensajes</TableCell>
                <TableCell sx={{ fontFamily:"BuenosAires",}}>Profesor</TableCell>
                <TableCell sx={{ fontFamily:"BuenosAires",}}>Frecuencia</TableCell>
                <TableCell sx={{ fontFamily:"BuenosAires",}}>Opinión</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clasesData.map((clase) => (
                <TableRow key={clase.id}>
                  <TableCell sx={{ fontFamily:"BuenosAires",}}>{clase.clase}</TableCell>
                  <TableCell sx={{ fontFamily:"BuenosAires",}}>
                    <Link to={`/mensajes/${clase.id}`}>{clase.mensajes}</Link>
                  </TableCell>
                  <TableCell sx={{ fontFamily:"BuenosAires",}}>{clase.profesor}</TableCell>
                  <TableCell sx={{ fontFamily:"BuenosAires",}}>{clase.frecuencia}</TableCell>
                  <TableCell sx={{ fontFamily:"BuenosAires",}}>
                    <Link to={`/opinion/${clase.id}`}>
                      <Button variant="contained" color="primary">
                        Dejá tu opinión
                      </Button>
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
};

const initialUserData = {
  Nombre: "Juan",
  Apellido: "Lopez",
  Email: "juan.lopez@gmail.com",
  Contraseña: "********",
  Ubicacion: "Argentina",
  Telefono: "123456789",
};

const LayoutMiCuenta = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedUserData(initialUserData);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    
    console.log("Updated user data:", editedUserData);
  };

  const handleInputChange = (field, value) => {
    setEditedUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  return (
    <Grid
      container
      spacing={0}
      alignContent={"start"}
      justifyContent={"center"}
      height={"100%"}
    >
      <Box width={"100%"} backgroundColor={"salmon"}>
        <Typography
          variant="h2"
          textAlign={"start"}
          marginLeft={"10px"}
          fontFamily={"BuenosAires"}
          color={"whiteSmoke"}
          
        >
          Mi cuenta
        </Typography>
      </Box>
      <Grid item xs={10} sm={6} md={4} padding={"20px"}>
        <Box width={"100%"}>
          <Typography
            variant="h2"
            backgroundColor={"salmon"}
            textAlign={"center"}
            fontFamily={"BuenosAires"}
            color={"whiteSmoke"}
            fontSize={'55px'}
          >
            Mis datos
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {Object.entries(initialUserData).map(([field, value]) => (
                <TableRow key={field}>
                  <TableCell  sx={{ fontFamily:"BuenosAires",}} 
                  >{field}</TableCell>
                  <TableCell sx={{ fontFamily:"BuenosAires",}}>
                    {isEditing ? (
                      <TextField
                        value={editedUserData[field]}
                        
                        onChange={(e) =>
                          handleInputChange(field, e.target.value)
                        }
                      />
                    ) : (
                      value
                    )}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell
                  colSpan={2}
                  align="center"
                  sx={{ backgroundColor: "salmon" }}
                >
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

function Account() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const menuItems = ["Mis Datos", "Dar Clases", "Alumno"];
  const componentes = [LayoutMiCuenta, LayoutProfesor, LayoutAlumno];
  const classes = useStyles();
  const redirect = () => {
    navigate(`/`);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ComponenteActual = componentes[value];

  return (
    <>
      {user === null ? (
        redirect()
      ) : (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            className={classes.menuTabs}
            sx={{ fontFamily:"BuenosAires",}}
          >
            {menuItems.map((text, index) => (
              <Tab key={text} label={text} sx={{ fontFamily:"BuenosAires",}} />
            ))}
          </Tabs>
          <ComponenteActual />
        </>
      )}
    </>
  );
}

export default Account;
