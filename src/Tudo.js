import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto',
        marginTop: 50,
        padding: 50,
        backgroundColor: 'rgba(47,156,132,1)',
    },
    head: {
        textTransform: 'uppercase',
        color: 'antiquewhite',
        textShadow: '7px 5px 2px rgba(0,0,0,0.4)',
    },
    input: {
        background: 'antiquewhite',
        padding: 5,
        border: 'none',
        borderBottom: '3px solid rebeccapurple',
        borderRadius: '16px  0px',
    },
    add:{
    background: 'transparent',
    color: 'antiquewhite',
    border: '3px solid rebeccapurple',
    borderRadius: '5px 20px',
    fontWeight: 600,
    },
    list:{
        listStyle:'none',
    },
    butn:{
        backgroundColor:'rgba(47,156,132,1)',
        border: '1px solid rebeccapurple',
        margin: 5,
    }
}
));



function Tudo() {
    const classes = useStyles();
    let [tudoItem, setTudo] = useState([]); // list
    let [tudoAdd, setAdd] = useState(""); // add item

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.center} >
                <h1 className={classes.head}>Tudo App</h1>
                <input type="text" class={classes.input} placeholder="Enter Tudo" value={tudoAdd} onChange={(e) => { setAdd(e.target.value) }} />

                <ul>
                    {tudoItem.map((tudoList, ind) => {
                        return (<li key={ind} className={classes.list}>{tudoList}
                            <button className={classes.butn} onClick={() => { setTudo(tudoItem.slice(0, tudoItem.length - 1)) }}>x</button>
                            <button className={classes.butn} onClick={() => { setAdd(tudoList); setTudo(tudoItem.filter(item => item !== tudoList)) }}>edit</button>
                        </li>)
                    })}
                </ul>
                <button className={classes.add} onClick={() => { setTudo([...tudoItem, tudoAdd]) }}>Add Tudo</button>
            </Paper>
        </div>
    )
}
export default Tudo;
