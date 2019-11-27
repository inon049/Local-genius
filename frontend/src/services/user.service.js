'use strict';

import httpService from '@/services/http.service'

async function query(){
    const users = await httpService.get('user')
    return users
}

export default {
    query,

}