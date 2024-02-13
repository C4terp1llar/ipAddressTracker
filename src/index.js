import 'babel-polyfill' 
/*добавление полифила для экспорта/импорта async-await (вполне возможно, что данный полифил не нужен, тк
видимо в текущей версии сборщика Parcel его нет В code splitting И никаких ошибок при экспорте феча не появляется )*/
import {fetchData, isIpValid, alertError, printData, mapFuncs} from './helpers/entry-point';

mapFuncs.initMap();

const ipInput = document.querySelector('.inp');
const btn = document.querySelector('.search-bar-btn');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKeydown);

function getData (){
    if (isIpValid(ipInput.value.trim())){
        document.querySelector('.info-loader-block').classList.add('active-loader');

        fetchData(ipInput.value.trim())
            .then(data => {
                if (data.data.range_type.type !== 'PUBLIC'){
                    throw new Error('The entered IP is local and only available within private networks');
                }

                printData(data.data);
                mapFuncs.changeMap(data.data.location.latitude, data.data.location.longitude);
            })
            .catch(error => {
                alertError(error.message);
                console.error(error);
            })
            .finally(() => document.querySelector('.info-loader-block').classList.remove('active-loader'));
    }else{
        ipInput.value = '';
        const error = 'The entered IP is incorrect!';
        alertError(error);
    }
    /*
        оказалось, что при локальных ip API возвращает resolve в виде неполного объекта с некоторыми пустыми полями (+ изначальный API не возвращал широту и долготу по ip,
            пожтому заменил его на ipbase)
        (например при 192.168.0.102 - все кроме ip В возвращаемом джейсоне = "" (country мб ZZ)),
        поэтому сделал условие по частным сетям (новое API)
    */
}

function handleKeydown (e){
    if (e.key === 'Enter'){
        getData();
    }
}

