

import { Alert, Box, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { datatow } from '../datatow';


const Customerservice = () => {


    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
        }}>
                <Alert sx={{
                    width:'50%',
                    mx:'auto',
                   position:'relative',
                   top:'60px',
                   fontSize:'20px'
                }} severity="success">
 لُلُآستثمآرٍ يَرٍجٍيَ آلُتۆآصلُ عٍلُيَ <span>01027329598</span>
</Alert>
 <Stack sx={{
    height:'100vh',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  
    mt:'100px',
 }}>
    
    {datatow.map((item) => {
        return(
            <Card key={item.id} sx={{ maxWidth: 333,m:5 }}>
            <CardMedia
              component="img"
              height="194"
              image={item.imageLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
      {item.description}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{
                justifyContent: "space-between",
              }}
            >
              
    
              <Typography variant="body1" color="initial">
              {item.price}
              </Typography>
            </CardActions>
          </Card> 
        )
    })}
        </Stack>
        </Box>
       
    );

}


export default Customerservice;
