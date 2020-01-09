import React, {
    useState, 
    useEffect, 
    useContext
} from 'react'
// import { Map } from "./styles"

import RoomContext from '../Contexts/roomContext'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: '48vw'
  },
  media: {
    height: 250,
  },
});

export default function MediaCard(props) {
    const classes = useStyles();
    // const [room, setRoom] = useState({})
    // const [title, setTitle] = useState('')

    // useEffect(() => {
    //     // setRoom(localStorage.getItem('room'))
    //     // console.log(room)
    //     return () => {
    //         setTitle(localStorage.getItem('title'))
    //     }
    // })

    const {setRoom, title} = useContext(RoomContext)

    const renderRoom = (rmName) => {
        switch (rmName) {
            case 'Engine Room':
                return "../Images/purple-engine-room.jpg" 
            case 'Defense Center':
                return "../Images/david-klingel-defense-room.jpg" 
            case 'Command Center':
                return "" 
            case 'Captain Quaters':
                return "" 
            case 'Bridge':
                return "" 
            case 'Hallway':
                return "../Images/david-klingel-defense-room.jpg" 
            case 'Bathroom':
                return "" 
            case 'Crew Cabin':
                return "../Images/allen-zayden-crew-quarters.jpg" 
            case 'Mess Hall':
                return "" 
            case 'Weapons':
                return "" 
            case 'Recreation Center':
                return "" 
            case 'Medical Bay':
                return "../Images/qi-en-teo-2017-medical-bay.jpg" 
            default:
            
        }
    }

    // const title = localStorage.getItem('title')

    return (
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={() => renderRoom(title)}
            // image="/static/images/cards/contemplative-reptile.jpg"
            // title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {/* {localStorage.getItem('title')} */}
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {localStorage.getItem('description')}
            </Typography>
            </CardContent>
        </CardActionArea>
        {/* <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions> */}
        </Card>
    );
}