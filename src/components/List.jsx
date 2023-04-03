import React, {useEffect} from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Card, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";

const List = ({readProduct, product}) => {

    useEffect(() => {
        readProduct()
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px'}}
             className="list--card">

            {
                product.map((item, index) => {
                    return (
                        <Box sx={{
                            border: '2px solid #181818',
                            textAlign: 'center',
                            marginTop: '10px',
                            borderRadius: '6px'
                        }}>
                            <img src={item.image} width="300px" alt=""/>
                            <div>
                                <h1 style={{marginTop: '-10px'}}>{item.title}</h1>
                                <div style={{marginTop: '-30px', display: 'flex', justifyContent: 'space-around'}}>
                                    <p>{item.descr}</p>
                                    <p>{item.price}</p>
                                    <button style={{
                                        padding: "5px 20px",
                                        background: "red",
                                        color: "white",
                                        border: "none",
                                        outline: "none",
                                        borderRadius: "10px",

                                    }}>Delete
                                    </button>
                                </div>
                            </div>

                        </Box>

                    )
                })
            }
        </div>
    );
};

export default List;