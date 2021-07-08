import React from 'react';
import {Card} from '../card/card.component';

import './card-list.css';

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(el => (
            <Card key={el.id} monster={el}/>
        ))}
    </div>
)