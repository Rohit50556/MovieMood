import React from 'react';
import "../css/SnackCard.css"
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const SnackCard = ({object,snacks,setSnacks,idx, forceRender}) => {
    const addItem = () => {
        const temp_snack = snacks
        temp_snack[idx].quant += 1
        console.log("clicked")
        setSnacks(temp_snack)
        forceRender()
    }

    const removeItem = () => {
        const temp_snack = snacks
        if(temp_snack[idx].quant > 0)
            temp_snack[idx].quant -= 1
        console.log("clicked")
        setSnacks(temp_snack)
        forceRender()
    }

    return (
        <div className="snack__outerDiv">
            <img className="snack__img" src={object.photo}alt="snack images"/>
            <h1 className="snack__p">{object.name}</h1>
            <h1 className="snack__price">₹{object.price}</h1>
        <div className="countersnack__div" >
            <Badge className="countersnack__div"  color="secondary" badgeContent={snacks[idx].quant}>
            <FastfoodIcon style={{width:"25px" , height:"25px"}}/>
            </Badge>
            <ButtonGroup>
            <Button
                aria-label="reduce"
                onClick={removeItem}
            >
                <RemoveIcon fontSize="small" />
            </Button>
            <Button
                aria-label="increase"
                onClick={addItem}
            >
                <AddIcon fontSize="small" />
            </Button>
            </ButtonGroup>
        </div>
        <hr className="hr__lineSnack"/>
        </div>
    );
};

export default SnackCard;