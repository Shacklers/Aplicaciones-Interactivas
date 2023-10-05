import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import Card from "@mui/joy/Card";
import { Box, CardMedia, Grid } from "@mui/material";
import React from "react";

import Button from "@mui/joy/Button";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { useNavigate, useParams } from "react-router-dom";
import "../elements/fonts/BuenosAires-Black/BuenosAiresBlackFont.css";
import "../elements/fonts/BuenosAires-Regular/BuenosAiresRegularFont.css";
import "../elements/fonts/BuenosAires-SemiBold/BuenosAiresFont.css";
import "../elements/fonts/BuenosAires-Thin/BuenosAiresThinFont.css";
const useStyles = makeStyles((theme) => ({
  fisrtList: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
  },
  firstBox: {
    width: "100%",
  },
  list: {
    backgroundColor: "#fff1f1",
    fontFamily: "BuenosAires-Black",
    width: "auto",

    borderRadius: "20px",
    border: "1px solid salmon",
  },
  firstTypography: {
    width: "50%",
    textAlign: "center",
  },
  secondList: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    width: "100%",
  },
}));

export function Post() {
  const classes = useStyles();
  const items = ["Programación", "Bases de Datos", "Diseño"];
  const navigate = useNavigate();
  const { user } = useParams();
  const handleClick = (user) => {
    navigate(`/Post/${user}/Checkout`);
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent={"center"}
      sx={{
        width: "100%",
        height: "auto",
        padding: { xs: "10px", md: "50px" },
      }}
      xs={12}
      md={12}
      xl={12}
    >
      <Grid
        item
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: { md: "wrap" },
          height: "auto",
          flexDirection: { xs: "column", xl: "row" },
          alignItems: { xs: "center" },
        }}
        xs={12}
        md={12}
        xl={12}
      >
        <Box sx={{ width: "100%", height: "100px" }}>
          <Box
            className={classes.firstBox}
            sx={{ display: "flex", justifyContext: "center" }}
          >
            <List className={classes.fisrtList}>
              {items.map((item, index) => (
                <ListItem key={index} className={classes.list}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Typography
          variant="h2"
          fontSize={{ xs: "30px", xl: "60px" }}
          fontFamily={"BuenosAires-Black"}
          color="initial"
          className={classes.firstTypography}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "40px",
            width: { xs: "100%", xl: "50%" },
          }}
        >
          Analista de Sistemas | Programacion C# .Net, C#, Java, MySql, Sql
          Server, Desarrollo de Software
        </Typography>

        <Box
          sx={{
            width: { xs: "100%", xl: "50%" },
            display: "flex",
            justifyContent: "center",
            marginLeft: { xs: "0", xl: "auto" },
          }}
        >
          <Card
            sx={{
              width: { xs: "50%", md: "40%", xl: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
            }}
          >
            <CardMedia
              component="img"
              alt="Nombre"
              height="60%"
              image="https://study-eu.s3.amazonaws.com/uploads/image/path/684/wide_fullhd_study-education-teaching.jpg"
            />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={"30px"}
                fontFamily={"BuenosAires-Black"}
                variant="h5"
                align="center"
              >
                Nombre
              </Typography>

              <Typography
                fontSize={"20px"}
                fontFamily={"BuenosAires-Black"}
                variant="body1"
              >
                Tarifa por hora: $50
              </Typography>

              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleClick(user);
                }}
                fontFamily={"BuenosAires-Black"}
                style={{
                  backgroundColor: "salmon",
                  fontFamily: "BuenosAires-black",
                  fontSize: "23px",
                  height: "30%",
                }}
                fullWidth
              >
                Contacta al profe
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            padding: "10px",
            gap: "10px",
          }}
        >
          <Typography
            variant="h1"
            fontFamily={"BuenosAires-Black"}
            sx={{
              width: { xs: "100%", xl: "50%" },
              fontSize: { xs: "30px", xl: "40px" },
            }}
          >
            Modalidad de la clase
          </Typography>
          <List className={classes.secondList}>
            {items.map((item, index) => (
              <ListItem key={index} className={classes.list}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            padding: "10px",
            gap: "10px",
          }}
        >
          <Typography fontSize={"30px"} fontFamily={"BuenosAires-Black"}>
            Sobre mi
          </Typography>
          <Typography
            fontFamily={"BuenosAires-Thin"}
            fontWeight={"bold"}
            fontSize={"18px"}
            sx={{ width: { xs: "100%", xl: "50%" } }}
          >
            Analista de sistemas, actualmente soy programador en C# .NET Hago
            aplicaciones ya sea en entorno de escritorio o web, he tenido
            desarrollos propios en distintas plataformas, distintas soluciones,
            para mis clientes. Tambien doy clases particulares por mi cuenta a
            distintos alumnos de distintas universidades, por simple
            recomendacion o de boca en boca. Espero que nos conozcamos y pueda
            ayudarte en lo que sea necesario.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            padding: "10px",
            gap: "10px",
            paddingBottom: "50px",
          }}
        >
          <Typography fontSize={"30px"} fontFamily={"BuenosAires-Black"}>
            Acerca de la clase
          </Typography>
          <List className={classes.secondList}>
            {items.map((item, index) => (
              <ListItem key={index} className={classes.list}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Typography
            fontFamily={"BuenosAires-Thin"}
            fontWeight={"bold"}
            fontSize={"18px"}
            sx={{ width: { xs: "100%", xl: "50%" } }}
          >
            ¿Querés aprender a programar en C# .NET? Te puedo ayudar a iniciar
            en este mundo de la programación mas importante. Desde lo inicial
            hasta avanzado junto con una base de datos para guardar información.
            O tenés dudas en este tema? También te puedo ayudar! O también puede
            ser en páginas web con HTML5, CSS, JavaScript junto con la
            tecnologia en Blazor. etc. Mis clases son personalizadas, de forma
            online. Las clases virtuales son a través de meet y teamviewer o
            anydesk (para manejar pc de forma remota, es opcional).
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", xl: "80%" },
            flexDirection: "column",
            alignItems: { xs: "center", xl: "start" },
            padding: "10px",
            gap: "10px",
            paddingBottom: "50px",
            height: "auto",
            border: "1px solid grey",
            borderRadius: "20px",
          }}
        >
          <Typography
            fontFamily={"BuenosAires-Black"}
            fontSize={"30px"}
            textAlign={"center"}
            marginLeft={"20px"}
          >
            {" "}
            Opiniones
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
              padding: "20px",
              marginLeft: { xs: "0", xl: "20px" },
              flexWrap: "wrap",
              gap: "10px",
              border: "1px solid grey",
              borderRadius: "20px",
            }}
          >
            <Typography
              fontFamily={"BuenosAires-Thin"}
              fontWeight={"bold"}
              width={"100%"}
            >
              Alumno random
            </Typography>
            <Typography
              fontFamily={"BuenosAires-Thin"}
              fontWeight={"bold"}
              width={"80%"}
            >
              ¡Genial! Metodología sencilla de enseñanza, mas que buena su
              disposición. ¡Genial! Metodología sencilla de enseñanza, mas que
              buena su disposición. ¡Genial! Metodología sencilla de enseñanza,
              mas que buena su disposición.
            </Typography>
            <Typography textAlign={"right"}>icono</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
              padding: "20px",
              marginLeft: { xs: "0", xl: "20px" },
              flexWrap: "wrap",
              gap: "10px",
              border: "1px solid grey",
              borderRadius: "20px",
            }}
          >
            <Typography
              fontFamily={"BuenosAires-Thin"}
              fontWeight={"bold"}
              width={"100%"}
            >
              Alumno random
            </Typography>
            <Typography
              fontFamily={"BuenosAires-Thin"}
              fontWeight={"bold"}
              width={"80%"}
            >
              ¡Genial! Metodología sencilla de enseñanza, mas que buena su
              disposición. ¡Genial! Metodología sencilla de enseñanza, mas que
              buena su disposición. ¡Genial! Metodología sencilla de enseñanza,
              mas que buena su disposición.
            </Typography>
            <Typography textAlign={"right"}>icono</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
              padding: "20px",
              marginLeft: { xs: "0", xl: "20px" },
              flexWrap: "wrap",
              gap: "10px",
              border: "1px solid grey",
              borderRadius: "20px",
            }}
          >
            <Typography
              fontFamily={"BuenosAires-Thin"}
              fontWeight={"bold"}
              width={"100%"}
            >
              Alumno random
            </Typography>
            <Typography
              fontFamily={"BuenosAires-Thin"}
              fontWeight={"bold"}
              width={"80%"}
            >
              ¡Genial! Metodología sencilla de enseñanza, mas que buena su
              disposición. ¡Genial! Metodología sencilla de enseñanza, mas que
              buena su disposición. ¡Genial! Metodología sencilla de enseñanza,
              mas que buena su disposición.
            </Typography>
            <Typography textAlign={"right"}>icono</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
