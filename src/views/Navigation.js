import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import './Navigation.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    },
  },
}));

export default function Navigation(props) {
    const [page, setPage] = React.useState(1);
    const classes = useStyles();
    const classList = classes.root+" NavigationView"

    const handleChange = (event, value) => {
        setPage(value);
        props.onPageChange(value);
    };
    const ref = React.useRef(null)
    // const ref = useRef<HTMLDivElement>(null)
  
    React.useLayoutEffect(() => {
      const target = ref.current
      if (!target) return
      const disablePinchZoom = (e) => {
        if (e.touches ) {
          e.preventDefault()
        }
        if(e.ctrlKey){
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
        <div ref={ref} className={classList}>
            <div className="NavigationViewInner">
            <Pagination page={props.pageNum} count={props.pageCount} color="primary" onChange={handleChange}/>
            </div>
        </div>
    );
}