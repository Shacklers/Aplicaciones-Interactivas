
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import { Box, Button, CardContent, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import jsonData from '../elements/data/post.json';





const useStyles = makeStyles({
    button:{
        backgroundColor:'red'
    }
  });
  
  
  
  const subnavbar = [
    {
        button: 'Categoria',
        tipo: ['inglés','programación','álgebra', 'historia','química','física','cálculo','guitarra','piano']
        
    },
    {
        button: 'Tipo de clase',
        tipo: ['individual','grupal']
    },
    {
        button: 'Frecuencia',
        tipo:['única','semanal','mensual']
    },
    {
        button:'Calificacion',
        tipo: ['5 estrellas', '4 estrellas', '3 estrellas', '2 estrellas', '1 estrella']
    },
    
  ]
 
 
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }











function Catalog(){
  const search = (jsonData, text) => {
    return jsonData.filter(row => row.categoria === text);
  }
    const { text } = useParams();
    const navigate = useNavigate();
    const [name, setName ]=  useState('')
    const [open, setOpen] = useState(false);
    const [categories, setCategories]  = useState([]);
    const [item, setItem] = useState('');
    const [category, setCategory] = useState('');
    const [cardData, setCardData] = useState(()=> {
        if(text !== undefined){
          console.log(jsonData);
          return [search(jsonData,text)]
        }
        else{
         console.log(jsonData);
         return [
            jsonData
          ]
        }

    });
   
    const handleOpen = (name) => {
      setOpen(true);
      setName(name);
      const a = subnavbar.find(item => item.button === name).tipo;
      setCategories(a);
      

    };    
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const [checkedItems, setCheckedItems] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
        item5: false,
        item6: false,
        item7: false,
        item8: false,
        item9: false,
        item10: false,
      });
    
      const handleCheckboxChange = (itemName) => {
        setCheckedItems((prevCheckedItems) => ({
          ...prevCheckedItems,
          [itemName]: !prevCheckedItems[itemName],
        }));
      };
    
      const handleApplyClick = () => {
      
        setCardData( [jsonData.filter(row => row[name.toLowerCase()] === item) ] );
       

    
       
      };

      

   

    
      const handleCancelClick = () => {
        setCardData([jsonData]);
      };
      
      const handleExporeButton = (user) => {
        navigate(`/Catalog/Post/${user}`);
      }
  



  
    return(

        


    
        <Grid container spacing={0} height={'auto'} sx={{width:'100%'}} justifyContent={'center'} gap={'40px'}>

       
            <Grid item sx={{height:'10%',display:'flex', justifyContent:'center',alignItems:'center', gap:'10px'}} xs={12} sm={6} md={12}>

                       {
                        subnavbar.map((item,index) => (
                          <>
                            <Button  sx={{border:'1px solid grey', width:'10%', borderRadius:'10px'} }  onClick={() => handleOpen(item.button)} key={index}>{item.button}

                            </Button>
                                  
                                    </>

  
                        ))
                      
                       }
                      
                      


                    
                       {

                       
                      <div>
                    
                      
                      <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>Filtrar</DialogTitle>
                          <DialogContent>
                              <DialogContentText>
                               
                                <Typography variant="h6" >{name}</Typography>
                                  
                               
                                  <Box display="flex" alignItems="center" flexDirection={'column'}>
                                    {
                                      categories.map((category,index) => (
                                      
                                   
                                      <Box display="flex" alignItems={'center'} sx={{width:'100%'}}>
                                      <Checkbox
                                     
                                      checked={Object.values(checkedItems)[index]}
                                      onChange={() => {handleCheckboxChange('item'+(index+1)); setItem(category);}}
                                      />
                                      <Typography >{category}</Typography>
                                      </Box>
                                      ))
                                      }
                                  </Box>
                                   
                                 
                                  <Button variant="contained" color="primary" onClick={()=> {handleApplyClick();setCategory(name)}}>
                                  Aplicar
                              </Button>
                              <Button variant="contained" color="secondary" onClick={handleCancelClick}>
                                  Anular
                              </Button>
                              </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                        
                          <Button onClick={handleClose} color="primary">
                          Cerrar
                          </Button>
                          </DialogActions>
                      </Dialog>
                     
                      </div> 
                     
                  }
                

            </Grid>
           
          
            <Grid container sx={{width:'90%', height:'auto'}}  direction="row" >
                {cardData[0].map((card, index) => (
                <Grid container item xs={12} sm={6} md={4} key={index} justifyContent={'center'} alignItems={'center'} paddingBottom={'20px'} paddingTop={'20px'}>
                <Card sx={{ width: 320 }}>
                <div>
                  <Typography level="title-lg">{card.user} - {card.categoria}</Typography>
                  <Typography level="body-sm">{card.ubicacion} - {card['Tipo de clase']} - {card.frecuencia}</Typography>
                  
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                  >
                    <BookmarkAdd />
                  </IconButton>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img
                    src={card.img}
                    srcSet={card.img}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <CardContent orientation="horizontal">
                  <div>
                  <Typography level="body-sm">Calificacion:  {card.calificacion}</Typography>
                    <Typography level="body-xs">Total price:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                      ${card.precio}
                    </Typography>
                  </div>
                  <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    onClick={()=>{handleExporeButton(card.user)}}
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>

                      
                          </Grid>
        ))}
             {
              
               cardData[0].length === 0?  
               <Box sx={{height:'500px', width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}> {console.log(cardData)}
                  <Typography variant="h2"  textAlign={'center'} color="initial">No se encontraron coincidencias</Typography>
               </Box>
               : ''
             
             } 

        </Grid>
            
      
      </Grid>
    

    );
    
}
  

export default Catalog;


/*

    
        <div>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Abrir Vista Externa
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Vista Externa</DialogTitle>
          <DialogContent>
            <p>Contenido de la vista externa.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>


*/