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
  const classes = useStyles();
  const classList = classes.root+" NavigationView"
  return (
    <div className={classList}>
        <div className="NavigationViewInner">
        <Pagination count={10} color="primary" onChange={props.onPageChange}/>
        </div>
    </div>
  );
}