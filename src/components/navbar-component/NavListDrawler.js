import { Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox'
import {Box} from '@mui/system'
import {NavLink} from 'react-router-dom'
import {useAuth} from  "../Hooks/AuthContext"
export default function NavListDrawler({arrayNavLinks}, setOpen) {
    const { isLoggedIn ,login,user, logout} = useAuth();
    const handleLogout = () => {
        logout();
      };
    return (
    <Box sx={{width:250, }}>
       <nav>
        <List>
            <NavLink></NavLink>
            {
                arrayNavLinks.map(item => (
                    
                    <ListItem key={item.title}>
                        <ListItemButton   component={NavLink} to = {isLoggedIn?item.title === ''?'/': `/${user[0].nickname}/Account`:item.path} onClick={() => setOpen(false)} sx={{ display:'flex',justifyContent:'start'}}>
                            
                        {
                                    item.title === '' ? <ListItemIcon sx={{display:'flex', justifyContent:'center'}} >{item.icon}</ListItemIcon> : 
                                    
                                   item.title === 'Conectate' && isLoggedIn ?
                                   <li style={ { listStyleType: 'none', }}>{user[0].nickname}</li>
                                   :  
                                   <li style={ { listStyleType: 'none', }}>{item.title}</li>
                                }
                             
                        
                        </ListItemButton>
                    </ListItem>
                    ) )
                    
            }
              {isLoggedIn && ''=== ''? (<Button>user[0].email</Button> ,<Button onClick={handleLogout}>Cerrar sesion</Button>) : ('') }
            </List>
      
       </nav>
      
    </Box>);


}