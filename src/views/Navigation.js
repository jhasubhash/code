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

    return (
        <div className={classList}>
            <div className="NavigationViewInner">
            <Pagination page={props.pageNum} count={props.pageCount} color="primary" onChange={handleChange}/>
            </div>
        </div>
    );
}