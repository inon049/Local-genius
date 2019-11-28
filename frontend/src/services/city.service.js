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


var gCities = [
    {
        _id: '101',
        name: 'New-York',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
    },
    {
        _id: '102',
        name: 'Moscow',
        imgUrl:'https://bigseventravel.com/wp-content/uploads/2019/03/moscow-1200x675.png'
    },
    {
        _id: '103',
        name: 'Paris',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
    },
    {
        _id: '104',
        name: 'Sydney',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
    },
    {
        _id: '106',
        name: 'Mexico-City',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
    },
    {
        _id: '107',
        name: 'Athens',
        imgUrl: 'https://bigseventravel.com/wp-content/uploads/2019/03/anastasia-sklyar-1171169-unsplash-1024x683.jpg'
    },
    {
        _id: '108',
        name: 'Seoul',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg',
    }]


