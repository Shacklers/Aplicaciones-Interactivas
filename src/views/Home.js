import {
  Box,
  Button,
  CardMedia,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../css/index.css';
import "../elements/fonts/BuenosAires-Black/BuenosAiresBlackFont.css";
import "../elements/fonts/BuenosAires-Regular/BuenosAiresRegularFont.css";
import "../elements/fonts/BuenosAires-SemiBold/BuenosAiresFont.css";
import "../elements/fonts/BuenosAires-Thin/BuenosAiresThinFont.css";

const useStyles = makeStyles({
  home: {
    width: "100%",
    height: "1800px",
    display: "flex",
    flexDirection:'column',
    flexWrap:'wrap',
    gap: "100px",
    alignItems: "center",


   
    paddingLeft: "10px",
    paddingTop: "100px",
  
  },
  card: {
    border: "none",
    boxShadow: "none",
  
  },
  searchDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "60px",
    backgroundColor: "white",
    justifyContent: "center",
  },
  input: {
    width: "35%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  },
  divider: {
    border: "1px solid grey",
    height: "50%",
  },
  button: {
    height: "80%",
    transition: " 0.3s",
    "&:hover": {
      transition: " 0.3s",
      transform: "scale(1.1)",
    },
  },
  divCard:{
    display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',gap:'20px'
  },

  otherCard: {
    backgroundColor: "transparent",
  },

  video: {
    width: "auto",
    borderRadius:'35px'
  },
  text: {
    width: "100%", 
    display: "flex",
    
    alignItems: "center",
  },
  typography: {
    width: "80%",
    display:"flex",
    flexDirection:'column',
    gap:'10px'
  },
  paper: {
    border: 'none',
    boxShadow: 'none',
  }
});

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const styles = {
    card: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '90%', 
      },
      [theme.breakpoints.up('md')]: {
        width: '60%', 
      },
      [theme.breakpoints.up('lg')]: {
        width: '40%', 
      },
    },
    media: {
      height: 140,
    },
  };
  
  const handleSearch = () => {
    if(text === ''){
      navigate('/catalog');
    }
    navigate(`/Catalog/${text}`);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };


  return (

    <div style={{flexGrow: 1 }}>
      <Grid container spacing={2}  >
        {/* Primera fila */}
        <Grid container item xs={12} spacing={3}  >
          <Grid item xs={12} sm={12} height={'500px'}   >
           
            <Card
              sx={{ width: { xs: "80%", md: "30%" }, background: "transparent",   paddingLeft: {xs:'0%', lg:'15%'}, height: '100%' }}
              style={{
                border: "none",
                boxShadow: "none",
                marginRight: "auto",
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
         
                
            }}

      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "10px",
            
          }}
        >
          <Typography variant="h2" fontFamily={"BuenosAires"} fontSize={{xs:'40px', md:'50px', lg:'60px',xl:'80px'}}>
            Encontra tu <br />
            profe ideal
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"BuenosAires"}
            sx={{ textAlign: "start" }}
          >
            En linea o presencial, <br />{" "}
            <span style={{ color: "salmon" }}>
              elegi entre 25 millones de profesores
            </span>{" "}
          </Typography>
          <div className={classes.searchDiv} >
            <TextField
              placeholder="Buscar"
              variant="outlined"
              className={classes.input}
              style={{ fontFamily: "BuenosAires" }}
              onChange={handleChange}
              
             
            />
            <div className={classes.divider}></div>
            <TextField
              placeholder="Buscar"
              variant="outlined"
              className={classes.input}
              style={{ fontFamily: "BuenosAires" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{ backgroundColor: "salmon", fontFamily: "BuenosAires" }}
              className={classes.button}
          
            >
              Buscar
            </Button>
          </div>
        </CardContent>
      </Card>
           
          </Grid>
          
        </Grid>

        {/* Segunda fila */}
        <Grid container item xs={12} spacing={2} justifyContent={'center'} >
          <Grid item xs={12} sm={8} l={4} xl={4} justifyContent={'center'} alignItems={'center'} >
          <Card sx={{display:'flex', flexDirection:'column',  gap:'50px', backgroundColor:'transparent', gap:'10px'}}>
            <Box style={{ display: 'flex' , gap:'20px'}} sx={{ flexDirection:{xs:'column', md:'row'}, alignItems:'center'}}>
              {/* Lado izquierdo: Texto */}
              <CardContent sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:{xs:'center', md:'start'}}}>
                <h1 style={{fontFamily:'BuenosAires-Black'}}>1. Buscá</h1> 
                <p style={{fontFamily:'BuenosAires', fontSize:'15px'}}>Buscá con toda libertad entre varios perfiles
                y contactá al profesor que más se acerque a tus necesidades 
                (tarifas, preparación, opiniones, el más cercano o en línea) </p>
              </CardContent>

              {/* Lado derecho: Video */}
              <CardMedia
                  sx={{width:'50%'}}
                    component="video"
                    alt="Video"
                    className={classes.video}
                    src={require("../elements/videos/step-1.mp4")}
                    autoPlay
                    loop
                    muted
                  />
     
            </Box>
            <Box style={{ display: 'flex', gap:'20px' }} sx={{ flexDirection:{xs:'column', md:'row'}, alignItems:'center'}}>
              {/* Lado izquierdo: Texto */}
              <CardMedia
                  sx={{width:'50%'}}
                    component="video"
                    alt="Video"
                    className={classes.video}
                    src={require("../elements/videos/step-2.mp4")}
                    autoPlay
                    loop
                    muted
                  />
              <CardContent sx={{display:'flex', justifyContent:'center', alignItems:'center', alignItems:{xs:'center', md:'start'}}}>
                <Typography variant="body2" color="textSecondary">
                <h1 style={{fontFamily:'BuenosAires-Black'}}>2. Contactalo</h1> 
                <p style={{fontFamily:'BuenosAires', fontSize:'15px'}}>Rápidamente, nuestros profesores te responderán en unas cuantas horas. 
                Y si no encontrás al profe indicado, nos encargamos de ayudarte. </p>
                </Typography>
              </CardContent>

              {/* Lado derecho: Video */}
              
     
            </Box>
            <Box style={{ display: 'flex', gap:'20px' }}  sx={{ flexDirection:{xs:'column', md:'row'}, alignItems:'center'}}>
              {/* Lado izquierdo: Texto */}
              <CardContent sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Typography variant="body2" color="textSecondary">
                  <h1 style={{fontFamily:'BuenosAires-Black',fontSize:'25px'}}>3. Pónganse de acuerdo</h1> 
                  <p style={{fontFamily:'BuenosAires', fontSize:'15px'}}>Intercambien algún mensaje sobre la clase en nuestra mensajería y acuerden la clase juntos. </p>
                </Typography>
              </CardContent>

              {/* Lado derecho: Video */}
              <CardMedia
                  sx={{width:'50%'}}
                    component="video"
                    alt="Video"
                    className={classes.video}
                    src={require("../elements/videos/step-3.mp4")}
                    autoPlay
                    loop
                    muted
                  />
     
            </Box>
        </Card>
           
          </Grid>
          
        </Grid>
      </Grid>
    </div>



    /*
    <Box className={classes.home}>
      <Card
        sx={{ width: { xs: "90%", md: "30%" }, background: "transparent",   paddingLeft: {sm:'0%', lg:'15%'}, }}
        style={{
          border: "none",
          boxShadow: "none",
          marginRight: "auto",
        }}

      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <Typography variant="h2" fontFamily={"BuenosAires"}>
            Encontra tu <br />
            profe ideal
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"BuenosAires"}
            sx={{ textAlign: "start" }}
          >
            En linea o presencial, <br />{" "}
            <span style={{ color: "salmon" }}>
              elegi entre 25 millones de profesores
            </span>{" "}
          </Typography>
          <div className={classes.searchDiv}>
            <TextField
              placeholder="Buscar"
              variant="outlined"
              className={classes.input}
              style={{ fontFamily: "BuenosAires" }}
              onChange={handleChange}
              
             
            />
            <div className={classes.divider}></div>
            <TextField
              placeholder="Buscar"
              variant="outlined"
              className={classes.input}
              style={{ fontFamily: "BuenosAires" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{ backgroundColor: "salmon", fontFamily: "BuenosAires" }}
              className={classes.button}
          
            >
              Buscar
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className={classes.divCard}>
        <h1 className={'card__mainCardTitle'} style={{fontFamily:"BuenosAires-Black", marginRight:'14%', fontSize:'40px'}}>Aprender <br></br> nunca fue así de fácil</h1>
        
        <Card
          className={classes.otherCard}
          style={{ border: "none", boxShadow: "none" , backgroundColor:'transparent', flexDirection:{xs:'row',lg:'row'}}}
          sx={styles.card}
        >
          <CardMedia
            component="video"
            alt="Video"
            className={classes.video}
            src={require("../elements/videos/step-1.mp4")}
            sx={{width:'50%'}}
            autoPlay
            loop
            muted
          />
          <CardContent className={classes.text}  sx={{justifyContent:'end'}}>
            <Typography variant="body2" className={classes.typography}>
              <h1 style={{fontFamily:'BuenosAires-Black'}}>1. Buscá</h1> 
              <p style={{fontFamily:'BuenosAires', fontSize:'15px'}}>Buscá con toda libertad entre varios perfiles
               y contactá al profesor que más se acerque a tus necesidades 
               (tarifas, preparación, opiniones, el más cercano o en línea) </p>
            </Typography>
          </CardContent>
        </Card>

        <Card
          className={classes.otherCard}
          style={{ border: "none", boxShadow: "none", }}
          sx={styles.card}
        >
          <CardContent className={classes.text} sx={{justifyContent:'start'}}>
            <Typography variant="body2" className={classes.typography} sx={{justifyContent:'start'}}>
            <h1 style={{fontFamily:'BuenosAires-Black'}}>2. Contactalo</h1> 
              <p style={{fontFamily:'BuenosAires', fontSize:'15px'}}>Rápidamente, nuestros profesores te responderán en unas cuantas horas. 
              Y si no encontrás al profe indicado, nos encargamos de ayudarte. </p>
            </Typography>
          </CardContent>
          <CardMedia
           sx={{width:'50%'}}
            component="video"
            alt="Video"
            className={classes.video}
            src={require("../elements/videos/step-2.mp4")}
            autoPlay
            loop
            muted
          />
        </Card>

        <Card className={classes.otherCard}    sx={styles.card} style={{ border: "none", boxShadow: "none", backgroundColor:'transparent' }}>
          <CardMedia
           sx={{width:'50%'}}
            component="video"
            alt="Video"
            className={classes.video}
            src={require("../elements/videos/step-3.mp4")}
            autoPlay
            loop
            muted
          />
          <CardContent className={classes.text} sx={{justifyContent:'end'}}>
            <Typography variant="body2" className={classes.typography}>
            
            <h1 style={{fontFamily:'BuenosAires-Black',fontSize:'25px'}}>3. Pónganse de acuerdo</h1> 
              <p style={{fontFamily:'BuenosAires', fontSize:'15px'}}>Intercambien algún mensaje sobre la clase en nuestra mensajería y acuerden la clase juntos. </p>
            
            </Typography>
          </CardContent>
        </Card>
      
      </div>
    </Box>
    */
  );
}
export default Home;
