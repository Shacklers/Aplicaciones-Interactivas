import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import Card from '@mui/joy/Card';
import { Box, CardMedia, Grid } from '@mui/material';
import React from 'react';

import Button from '@mui/joy/Button';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import "../elements/fonts/BuenosAires-Black/BuenosAiresBlackFont.css";
import "../elements/fonts/BuenosAires-Regular/BuenosAiresRegularFont.css";
import "../elements/fonts/BuenosAires-SemiBold/BuenosAiresFont.css";
import "../elements/fonts/BuenosAires-Thin/BuenosAiresThinFont.css";
const useStyles = makeStyles((theme) => ({
    fisrtList: {
        display: 'flex',
        flexDirection: 'row',
        
        justifyContent:'center',
        gap:'10px',
        width:'100%'
    },
    firstBox:{
        width:'80%',
   
    },
    list:{
        backgroundColor:'#fff1f1',
        fontFamily:'BuenosAires-Black',
        width: 'auto',
        borderRadius:'20px',
        border:'1px solid salmon',
        
      
    },
    firstTypography:{
        width:'50%',
        textAlign:'center',
        
        
        
    },
    secondList:{
        display: 'flex',
        flexDirection: 'row',
        gap:'10px',
        width:'100%'
    }
  }));

export function Post(){
    const classes = useStyles();
    const items = ['Matematica', 'Fisica', 'Algebra', 'Venezuela'];
    const navigate = useNavigate();
    const { user } = useParams();
    const handleClick = (user) => {
        navigate(`/Post/${user}/Checkout`);
    }

    return (
      
            <Grid container justifyContent={'center'} alignItems={'start'}  sx={{width:'100%', height:'auto',padding:'50px'}} xs={12} md={12} xl={12}>
                <Grid item  sx={{width:'60%',  display:'flex',flexWrap:'wrap', height:'auto', flexDirection:{xs:'column' ,xl:'row'}, alignItems:{xs:'center'}}}  xs={12} md={12} xl={12} >
                    <Box sx={{ width:'100%',  height:'100px', }}>
                        <Box className={classes.firstBox} sx={{display:'flex', justifyContext:'center',}}>
                        <List className={classes.fisrtList}>
                            {items.map((item, index) => (
                            <ListItem key={index}   className={classes.list} >
                                <ListItemText primary={item} />
                        </ListItem>
                        ))}
                        </List>
                        </Box>
                    </Box>
                    <Typography variant="h2" fontSize={{xs:'30px' ,xl:'60px'}} fontFamily={'BuenosAires-Black'} color="initial"  className={classes.firstTypography} sx={{ display:'flex', justifyContent:'center', paddingBottom:'40px', width:{xs:'100%', xl:'50%'}}}>
                    Clases de matematica NO ESTÁS SOLO!!!! APROBAMOS JUNTOS ESE EXAMEN. Clases virtuales con pizarra digital!
                    </Typography>
                    
                    <Box sx={{width:{xs:'100%', xl:'50%'}, display:'flex', justifyContent:'center', marginLeft:{xs:'0', xl:'auto'}}}>
                        <Card sx={{width:{xs:'100%', xl:'50%'}, display:'flex', justifyContent:'center', alignItems:'center', height:'500px'} }>
                            <CardMedia
                                component="img"
                                alt="Nombre"
                                height="60%"
                                image="https://mumbaimirror.indiatimes.com/thumb/msid-65825554,width-1200,height-900,resizemode-4/.jpg" 
                            />
                            <CardContent sx={{ display:'flex', justifyContent:'center', gap:'10px', alignItems:'center'} }  >
                                <Typography fontSize={'30px'}  fontFamily={'BuenosAires-Black'} variant="h5" align="center">
                                Nombre
                                </Typography>
                                
                                <Typography fontSize={'20px'} fontFamily={'BuenosAires-Black'} variant="body1">Tarifa por hora: $50</Typography>
                            
                               
                             
                                <Button variant="contained"  color="primary" onClick={()=>{handleClick(user) }}  fontFamily={'BuenosAires-Black'}style={{backgroundColor:'salmon', fontFamily:'BuenosAires-black',fontSize:'23px', height:'30%'}}fullWidth>
                                Contacta al profe
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>           




                    <Box sx={{display:'flex', width:'100%', flexDirection:'column', padding:'10px',gap:'10px'}}>
                        <Typography variant="h1" fontFamily={'BuenosAires-Black'}  sx={{width:{xs:'100%', xl:'50%'},fontSize:{xs:'30px', xl:'40px'}}}>Modalidad de la clase</Typography>
                        <List className={classes.secondList} >
                            {items.map((item, index) => (
                            <ListItem key={index}   className={classes.list}>
                                <ListItemText   primary={item} />
                        </ListItem>
                        ))}
                        </List>
                    </Box>
                    <Box sx={{display:'flex',  width:'100%', flexDirection:'column', padding:'10px',gap:'10px'}}>
                        <Typography fontSize={'30px'} fontFamily={'BuenosAires-Black'}  >Sobre mi</Typography>
                        <Typography  fontFamily={'BuenosAires-Thin'}fontWeight={'bold'}  sx={{width:{xs:'100%', xl:'50%'}}}>
                            Cuento con una pizarra digital que hace que las clases sean más dinámicas y llevaderas, 
                            mis alumnos tienen una línea de comunicación abierta las 24 horas para avanzar en sus horas de estudio fuera de clase.
                            Importante. Las clases tienen una duración aprox de 50 minutos.
                            Los espero. Saludos a todos.
                        </Typography>
                    </Box>

                    <Box  sx={{display:'flex',  width:'100%', flexDirection:'column', padding:'10px',gap:'10px', paddingBottom:'50px'}}>
                        <Typography fontSize={'30px'} fontFamily={'BuenosAires-Black'}  >Acerca de la clase</Typography>
                        <List className={classes.secondList}>
                            {items.map((item, index) => (
                            <ListItem key={index}   className={classes.list}>
                                <ListItemText   primary={item} />
                        </ListItem>
                        ))}</List>
                        <Typography  fontFamily={'BuenosAires-Thin'} fontWeight={'bold'} sx={{xs:'100%', xl:'50%'}}>
                            Cuento con una pizarra digital que hace que las clases sean más dinámicas y llevaderas, 
                            mis alumnos tienen una línea de comunicación abierta las 24 horas para avanzar en sus horas de estudio fuera de clase.
                            Importante. Las clases tienen una duración aprox de 50 minutos.
                            Los espero. Saludos a todos.
                        </Typography>
                    </Box>
                    
                    <Box sx={{display:'flex',  width:{xs:'100%', xl:'80%'}, flexDirection:'column', alignItems:{xs:'center', xl:'start'}, padding:'10px',gap:'10px', paddingBottom:'50px' , height:'auto', border:'1px solid grey', borderRadius:"20px"}}>
                     
                            <Typography fontFamily={'BuenosAires-Black'} fontSize={'30px'}  textAlign={'center'} marginLeft={'20px'} > Opiniones</Typography>
                            <Box sx={{display:'flex',  justifyContent:'space-between', alignItems:'center', width:'80%', padding:'20px', marginLeft:{xs:'0', xl:'20px'}, flexWrap:'wrap', gap:'10px', border:'1px solid grey', borderRadius:"20px"} }>
                               
                                <Typography fontFamily={'BuenosAires-Thin'} fontWeight={'bold'}  width={"100%"}>Alumno random</Typography>
                                <Typography fontFamily={'BuenosAires-Thin'}  fontWeight={'bold'} width={"80%"}>¡Genial! Metodología sencilla de enseñanza, mas que buena su disposición. ¡Genial! Metodología sencilla de enseñanza, mas que buena su disposición. ¡Genial! Metodología sencilla de enseñanza, mas que buena su disposición.</Typography>
                                <Typography textAlign={'right'} >icono</Typography>
                            </Box>
                            <Box sx={{display:'flex',  justifyContent:'space-between', alignItems:'center', width:'80%', padding:'20px', marginLeft:{xs:'0', xl:'20px'},  flexWrap:'wrap', gap:'10px', border:'1px solid grey', borderRadius:"20px"} }>
                               
                                <Typography fontFamily={'BuenosAires-Thin'} fontWeight={'bold'}  width={"100%"}>Alumno random</Typography>
                                <Typography fontFamily={'BuenosAires-Thin'}  fontWeight={'bold'} width={"80%"}>¡Genial! Metodología sencilla de enseñanza, mas que buena su disposición. ¡Genial! Metodología sencilla de enseñanza, mas que buena su disposición. ¡Genial! Metodología sencilla de enseñanza, mas que buena su disposición.</Typography>
                                <Typography textAlign={'right'} >icono</Typography>
                            </Box>
                            <Box sx={{display:'flex',  justifyContent:'space-between', alignItems:'center', width:'80%', padding:'20px', marginLeft:{xs:'0', xl:'20px'}, flexWrap:'wrap', gap:'10px', border:'1px solid grey', borderRadius:"20px"} }>
                               
                                <Typography fontFamily={'BuenosAires-Thin'} fontWeight={'bold'}  width={"100%"}>Alumno random</Typography>
                                <Typography fontFamily={'BuenosAires-Thin'}  fontWeight={'bold'} width={"80%"}>¡Genial! Metodología sencilla de enseñanza, mas que buena su disposición. ¡Genial! Metodología sencilla de enseñanza, mas que buena su disposición. ¡Genial! Metodología sencilla de enseñanza, mas que buena su disposición.</Typography>
                                <Typography textAlign={'right'} >icono</Typography>
                            </Box>
                           
                            
                      
                    </Box>
                    

                </Grid>
            </Grid>
      
      
      
    );



}

