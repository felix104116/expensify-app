import moment from 'moment'

export default  [
    {
        id:'1',
        description:'Rent',
        note:'',
        amount:95000,
        createdAt:moment(0).add(4,'days').valueOf()
    },
    {
        id:'2',
        description:'Gum',
        note:'',
        amount:195,
        createdAt:0
    },
    {
        id:'3',
        description:'Coffee',
        note:'',
        amount:300,
        createdAt:moment(0).subtract(4,'days').valueOf()
    }
];

export const singleExpense = [
    {
        id:'1',
        description:'Lavage',
        note:'',
        amount:30000,
        createdAt:moment(0).add(4,'days').valueOf()
    }
];