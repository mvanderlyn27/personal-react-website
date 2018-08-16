import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
}
from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import DraftsIcon from '@material-ui/icons/Drafts';
import {contactMeTitle,contactMeText} from '../../../constants/text';
const styles = {
  card: {
    width: 450,
    height: 450,
    borderRadius: 10,
    margin:"auto",
  //  marginLeft: 15,
  },
  root:{
    padding:0
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title:{
    width:"100%",
    backgroundColor:"#006494",
    borderRadius:10,
    paddingTop:10,
    paddingBottom:10,
    color:"white",
    textAlign:"center",
    },
    avatar:{
      height:20,

    },
};

function contactMeCard(props) {
  const {
    classes
  } = props;
  return ( < div >
    < Card raised={true}  className = {
      classes.card
    }>
    < CardContent >
    < Typography gutterBottom variant = "headline"
    component = "h2" className={classes.title} >{contactMeTitle}< /Typography> < Typography component = "p" >{contactMeText}
    < /Typography> < /CardContent ><Divider/><CardActions><List style={{width:"100%"}}component="nav">
      <a href="mailto:michael@vanderlyn.info">
        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText className={classes.avatar}primary="michael@vanderlyn.info" />
        </ListItem>
        </a>
        <a href="https://www.linkedin.com/in/michael-vanderlyn/">
        <ListItem button>
          <ListItemIcon>
            <img className={classes.avatar} src = {require('../../../media/In-2C-34px-R.png')}/>
          </ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItem>
        </a>
        <a href="https://github.com/FancyPanda">
        <ListItem button>
          <ListItemIcon>
          <img className={classes.avatar} src = {require('../../../media/GitHub-Mark-32px.png')}/>
      </ListItemIcon>
          <ListItemText primary="GitHub" />
        </ListItem>
        </a>
      </List></CardActions>
    < /Card>
      < /div >
  );
}
contactMeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(contactMeCard);
