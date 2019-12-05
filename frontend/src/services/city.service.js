'use strict';

export default {
    query,
    getById,
}
async function query() {
    return gCities
}
async function getById(cityId) {
    var city = gCities.find(city => city._id === cityId)
    return city
}
// https://cdn.pixabay.com/photo/2016/08/20/08/52/adobe-1607093_1280.jpg

var gCities = [
    {
        _id: '101',
        name: 'New-York',
        imgUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
        _id: '102',
        name: 'Moscow',
        imgUrl:'https://bigseventravel.com/wp-content/uploads/2019/03/moscow-1200x675.png'
    },
    {
        _id: '106',
        name: 'Mexico-City',
        imgUrl: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        _id: '103',
        name: 'Paris',
        imgUrl: 'https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
    },
    {
        _id: '104',
        name: 'Sydney',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg'
    },
   
    {
        _id: '107',
        name: 'Athens',
        imgUrl: 'https://bigseventravel.com/wp-content/uploads/2019/03/anastasia-sklyar-1171169-unsplash-1024x683.jpg'
    },
    {
        _id: '108',
        name: 'Seoul',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/02/14/08/26/gwanghwamun-636113_1280.jpg',
    },
    {
        _id: '109',
        name: 'Barcelona',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/04/26/10/02/parc-guell-332390_1280.jpg',
    },
    {
        _id: '110',
        name: 'Rome',
        imgUrl: 'https://cdn.pixabay.com/photo/2012/03/01/00/33/trevi-19688_1280.jpg',
    },

]


