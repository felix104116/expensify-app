import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({id,description,amount,createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>costs {numeral(amount/100).format('$0,0.00')} and was created on {moment(createdAt).format('MMM Do,YYYY')}</p>
    </div>  
);
export default connect()(ExpenseListItem);