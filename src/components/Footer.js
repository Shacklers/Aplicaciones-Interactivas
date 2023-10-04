import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid'
import { Box, Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import '../elements/fonts/BuenosAires-Regular/BuenosAiresRegularFont.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css'; 
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
 

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    display:'flex',
    flexDirection:'column',
    justifyContent:{xs:'end',sm:'center'},
    alignItems:'center',
  
    padding: theme.spacing(2),
    height: 'auto',
        bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  listItem: {
    padding: '0',
  },
}));

const Footer = () => {
 
    const firstList = ['Acerca de nosotros','Quienes somos?','Nuestros valores','Menciones legales', 'Politica de Privacidad', 'Superprof en el mundo', 'Materias', 'Clases virtuales','Provincias', 'Masterprof recluta']
    const secondList=['Segui la aventura','El blog de Masterprof']
    const thirdList=['Asistencia','Necesitas ayuda?','Contacto']
    const fourthList=['Seguinos',[faFacebook,faTwitter,faYoutube]]

    const sxSettingList = {
        firstBox:{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%',flexDirection:'column', height: {xs:'100%',sm:'90%'}},
        itemBox: { color:'white', display:'flex', justifyContent:'center',fontFamily:'BuenosAires-Regular' }
    }


  const classes = useStyles();

  return (
    <footer className={classes.footer}>
       <Box sx={{sxSettingList}}>
        <Box sx={{ display:'flex', justifyContent:'center',flexDirection:{xs:'column',sm:'row'}}}>
            <List>
                 {firstList.map((item, index) => (
                    index === 0 ? // El primer elemento del array es el titulo, por lo que no debe llevar una referencia de ruta
                    <ListItem   key={index} sx={{color:'white', display:'flex', justifyContent:'center', fontFamily:'BuenosAires'}}>
                        {item}
                    </ListItem>
                    :
                    <ListItem component={NavLink} to={'#'} sx={sxSettingList.itemBox}   key={index}>
                     {item}
                    </ListItem>
            ))}
            </List>
      
            <List>
                {secondList.map((item, index) => (
                 index === 0 ? 
                 <ListItem   key={index}  sx={sxSettingList.itemBox}>
                     {item}
                 </ListItem>
                 :
                 <ListItem component={NavLink} to={'#'}  sx={sxSettingList.itemBox}   key={index}>
                  {item}
                 </ListItem>
            ))}
            </List>
            <List>
                {thirdList.map((item, index) => (
                index === 0 ? 
                <ListItem   key={index} sx={sxSettingList.itemBox}>
                    {item}
                </ListItem>
                :
                <ListItem component={NavLink} to={'#'}  sx={sxSettingList.itemBox}  key={index}>
                 {item}
                </ListItem>
            ))}
            </List>
            <List>
                {fourthList.map((item, index) => (
                index === 0 ? 
                <ListItem   key={index}  sx={sxSettingList.itemBox}>
                    {item}
                </ListItem>
                :
                <ListItem component={NavLink} to={'#'}  sx={sxSettingList.itemBox}  key={index}>
                    <Box sx={{display:'flex',gap:'5px'}}>
                        {item.map((icon,index)=>(
                         
                           <FontAwesomeIcon icon={icon} size='xl'  style={{color: "#a2aab9",}} />
                        ))

                        }
                    </Box>
                </ListItem>
            ))}
            </List>
        </Box>
        <Divider  sx={{backgroundColor:'white', width:'100%', display:'flex'}}/>
        <Box sx={{display:'flex', alignItems:'center',height:'50px', justifyContent:'center'}}>
            <Typography variant="body2" color="secondary">
                © {new Date().getFullYear()} Your Website
            </Typography>           
        </Box>
                    
       </Box>
       
       
       
    </footer>
  );
};

export default Footer;