 import fetch from '@/config/fetch'

 const getHomeInfo = () => {}
 const hotcity = () => fetch({ url: '/api/config/find?keys=carousel&shopId=12&endpoint=2' })


 export default {
   getHomeInfo,
   hotcity,
 }
