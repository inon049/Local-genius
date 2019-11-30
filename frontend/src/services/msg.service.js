import httpService from '@/services/http.service'


export default {
    query,
}

async function query(){
    const msgs = await httpService.get('msg')
    return msgs
}