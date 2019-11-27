'use strict';

export default{
    query
}

var gCities = [
    {
        id: 101,
        name: 'New-York',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
    },
    {
        id: 102,
        name: 'Moscow',
        imgUrl:'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
    },
    {
        id: 103,
        name: 'Paris',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
    },
    {
        id: 104,
        name: 'Sydney',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
    },
    {
        id: 106,
        name: 'Mexico-City',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
    },
    {
        id: 107,
        name: 'Athens',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
    },
    {
        id: 108,
        name: 'Seoul',
        imgUrl: 'https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg'
        _id: "101",
        name: 'New-York'
    },
    {
        _id: "102",
        name: 'Moscow'
    },
    {
        _id: "103",
        name: 'Paris'
    },
    {
        _id: "104",
        name: 'Sydney'
    },
    {
        _id: "106",
        name: 'Mexico-City'
    },
    {
        _id: "107",
        name: 'Athens'
    },
    {
        _id: "108",
        name: 'Seoul'
    },
]


async function query() {
    return gCities
}
async function getById(cityId) {
    var city = gCities.find(city => city._id === cityId)
    return city
}

export default {
    query,
    getById,
}
