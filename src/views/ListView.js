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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
  const ref = React.useRef(null);
  const ref1 = React.useRef(React.createRef());
  const [selectedIndex, setSelectedIndex] = React.useState(1);
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
    setSelectedIndex(id);
    props.onPageChange(parseInt(id));
  }
  const handleMenuOpen = (anchor, open, pageNum) => (event) => {
    setSelectedIndex(pageNum);
    toggleDrawer(anchor, open)(event)
  }

  const list = (anchor, ref1) => {
      return (
        <div ref={ref1}
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
                <ListItemIcon><ArrowBackIcon/></ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {props.manifest.map((obj, index) => (
            <ListItem button key={obj.id} onClick={()=>{handleClick(obj.id)}} selected={selectedIndex == obj.id}>
                <ListItemIcon>{index % 2 === 0 ? <CodeIcon /> : <CodeIcon />}</ListItemIcon>
                <ListItemText primary={obj.name} />
                <Chip size="small" label={obj.tag} />
            </ListItem>
            ))}
        </List>
        </div>
  )};
  const anchor = 'left';

  const attachListener = () =>{
    const target = ref1.current;
    if (!target || !target.addEventListener) return
    const disablePinchZoom = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault()
      }
      else if(e.ctrlKey){
          e.preventDefault()
      }
    }
    target.addEventListener("touchmove", disablePinchZoom, { passive: false })
    target.addEventListener("wheel", disablePinchZoom, { passive: false })
  }

  React.useEffect(() => {
    setTimeout(attachListener, 200);
  });

  React.useLayoutEffect(() => {
      console.log("useLayoutEffect called")
    const target = ref.current;
    if (!target) return
    const disablePinchZoom = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault()
      }
      if(!e.touches){
          e.preventDefault()
      }
    }
    target.addEventListener("touchmove", disablePinchZoom, { passive: false })
    target.addEventListener("wheel", disablePinchZoom, { passive: false })
    return () => {
      target.removeEventListener("touchmove", disablePinchZoom)
      target.removeEventListener("wheel", disablePinchZoom)
    }
  }, [])

  return (
    <div ref={ref} className="ListView">
    <React.Fragment key={anchor}>
        <IconButton onClick={handleMenuOpen(anchor,true,props.pageNum)}><MenuIcon/></IconButton>
        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor,ref1)}
        </Drawer>
    </React.Fragment>
    </div>
  );
}
