import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import Chip from '@material-ui/core/Chip';

import './ListView.css';

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
});

export default function ListView(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = (id) => {
    props.onPageChange(parseInt(id));
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Problems Browser'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <AppsIcon /> : <AppsIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {props.manifest.map((obj, index) => (
          <ListItem button key={obj.id} onClick={()=>{handleClick(obj.id)}}>
            <ListItemIcon>{index % 2 === 0 ? <CodeIcon /> : <CodeIcon />}</ListItemIcon>
            <ListItemText primary={obj.name} />
            <Chip size="small" label={obj.tag} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const anchor = 'left';
  return (
    <div className="ListView">
    <React.Fragment key={anchor}>
        <IconButton onClick={toggleDrawer(anchor, true)}><MenuIcon/></IconButton>
        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
        </Drawer>
    </React.Fragment>
    </div>
  );
}
