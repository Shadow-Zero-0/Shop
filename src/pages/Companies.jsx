
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import {  Button, Stack } from "@mui/material";
import { data } from "../data";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useEffect } from "react";




const Profile = () => {
  let navigate = useNavigate();
  const [user] = useAuthState(auth);
useEffect(() => {
  if(!user){
    navigate('/')
  }

}, );
  return (
    <Stack sx={{
      flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '100vh',
    mt:'100px',
 
    }}>
     {data.map((item) => {
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
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
                variant="text"
                color='#000'
                onClick={() => {
                  navigate('/Customerservice')
                }}
              >
                Buy a stock
              </Button>
    
              <Typography variant="body1" color="initial">
              {item.price}
              </Typography>
            </CardActions>
          </Card>
        )
     })}
    </Stack>
  );
};

export default Profile;
