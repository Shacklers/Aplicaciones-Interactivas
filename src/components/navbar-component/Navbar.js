import { AppBar, Box, Drawer, IconButton, ListItemIcon, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import NavListDrawler from './NavListDrawler';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import {Link, NavLink} from 'react-router-dom'
import {makeStyles} from '@mui/styles'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {useAuth} from '../../components/Hooks/AuthContext';
import '../../elements/fonts/BuenosAires-SemiBold/BuenosAiresFont.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(()=> ({
    navbar: {
      backgroundColor:'#fff1f1',
      display:'flex',
      flexGrow:'1',
      justifyContent:'space-between',
      height: '80px',
      boxShadow:'none',
      position:'fixed'

    },
     boxNavBar: {
        xs:'flex',
        sm: 'none'
     },

     logo:{
        color:'salmon',
        textDecoration:'none'
      
     },
     NavbarSecondBox:{
        display:'flex',
        justifyContent:'end',
       
        alignItems:'center',
        gap:'10px',
        height: '80%',
        width:'100%', 
     },



     NavbarButton:{
        height:'80%', 
     },

     input: {
       height:'10%',
      },

      textField: {

        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none', 
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',  
          },
        },
      },

      divider: {
        border: '1px solid #ccc',
       
      },
  }));

  const customSxSettings = {
    navBarBoxSX : {
        display: {xs:'flex',sm:'none'}
       
     
    },
    navBarBoxSM: {
        display: {xs:'none',sm:'flex'},
        
        height:'80%',
        width:'100%',
       
        margin: 'none',
        alignItems:'center',
      
        m:0,
        p:0,     
    },

    underBox:{
        display:'flex', 
        height:"90%", 
        alignItems:'center', 
        gap:'2%', 
        backgroundColor:'whitesmoke',
       
        width:{sm:'70%',md:'60%',lg:'50%'}, 
       
        justifyContent:'center',
        transition: ' 0.3s', 
        "&:hover": {
            transition: ' 0.3s', 
            width:'55%'
          },
        
    },

    underBoxTextField:{
        display:'flex',
        
    },


    buttonNav:{
        color:'black',
        fontSize:{sm:'10px',md:'1vw',lg:'1vw',xl:''},
        borderRadius:'50px',
        textAlign:'center',
        fontFamily:'BuenosAires', 
        "&:hover": {
            
            color: 'whitesmoke',
            backgroundColor: 'salmon'
          },
    }
  
  }

  

export default function Navbar({arrayNavLinks}) {
    const [open, setOpen] = useState(false);
    const { isLoggedIn ,login,user, logout} = useAuth();
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchText, setSearchText] = useState('');
    const [locationText, setLocationText] = useState('');
    const handleLogout = () => {
      logout();
    };

  
    const handleSearch = () => {
        if(searchText === ''){
          navigate('/catalog')
            
          
          }
          else{
            navigate(`/catalog/${searchText}`);
          }
        
        }
        
       
 



    return(
        <>  
           
            <AppBar  elevation={0} position='static' >
                <Toolbar className={classes.navbar} >
                    <Box sx={customSxSettings.navBarBoxSX}>
                    <IconButton color='inherit'  size='large' onClick={() => setOpen(true)}> <MenuIcon/> </IconButton>
                    </Box>    
               
                    <Box sx={customSxSettings.navBarBoxSM}  >
                        <Box sx={{display:'flex', width: '100%',height:'80%', alignItems:'center', gap:{sm:'3%'}}}>
                            <Typography className={classes.logo} variant='h4' component={NavLink} to={'/'} fontSize={'2vw'} fontFamily={'BuenosAires'} width={{lg:'36%', xl:'27%'}}>
                                Masterprof
                            </Typography>
                           
                                
                            <Box sx={customSxSettings.underBox} >   
                                <Box sx={customSxSettings.underBoxTextField}>
                                    <TextField className={classes.textField} variant="outlined" placeholder='Buscar...' size='small'onChange={(e) => setSearchText(e.target.value)} />
                                    <div className={classes.divider}></div>
                                    <TextField className={classes.textField} variant="outlined" placeholder='Donde...' size='small' onChange={(e) => setLocationText(e.target.value)}/>
                                </Box>
                               
                                <IconButton  aria-label="" onClick={handleSearch}  style={{backgroundColor:'salmon'}}>
                                    <SearchIcon sx={{color:'whitesmoke'}}></SearchIcon>
                                </IconButton>
                             
                            </Box>
                            

                    </Box>

                        <Box className={classes.NavbarSecondBox}>
                        {   
                            arrayNavLinks.map(item => ( <Button component = {NavLink} className = {classes.NavbarButton} sx = {customSxSettings.buttonNav} key = {item.title} to = {isLoggedIn?`/${user[0].nickname}/Account`:item.path}  >                      
                                {
                                    item.title === '' ? <ListItemIcon sx={{display:'flex', justifyContent:'center'}} >{item.icon}</ListItemIcon> : 
                                    
                                   item.title === 'Conectate' && isLoggedIn ?
                                   <li style={ { listStyleType: 'none', }}>{user[0].nickname}</li>
                                   :  
                                   <li style={ { listStyleType: 'none', }}>{item.title}</li>
                                }
                                </Button>))
                               
                               
                                
                        }
                            {isLoggedIn && ''=== ''? (<Button>user[0].email</Button> ,<Button onClick={handleLogout} to='/'>Cerrar sesion</Button>) : ('') }
                        </Box>
                        
                    </Box>
                </Toolbar>
            
            </AppBar>
                        

        
            <Drawer open={open} anchor="left" onClose= {() => setOpen(false) } sx={{display:{sg:'none'}}}>
                  <NavListDrawler arrayNavLinks={arrayNavLinks} setOpen={setOpen}/>
            </Drawer>

         
          
        </>
    )

}