import {isIpValid, alertError, printData} from './helpers/entry-point';

const ipInput = document.querySelector('.inp');
const btn = document.querySelector('.search-bar-btn');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKeydown);

function getData (){
    if (isIpValid(ipInput.value.trim())){
        document.querySelector('.info-loader-block').classList.add('active-loader');

        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_7kjmfMwSj7ROyCqfIMa74S30OyUj8&ipAddress=${ipInput.value.trim()}`)
            .then(response => response.json())
            .then(data => {
                if (data.isp === ""){
                    throw new Error('The entered IP is local and only available within private networks');
                }
                printData(data)
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
        оказалось, что при локальных ip API возвращает resolve в виде неполного объекта с некоторыми пустыми полями 
        (например при 192.168.0.102 - все кроме ip В возвращаемом джейсоне = "" (country мб ZZ)),
        поэтому сделал условие по пустоте isp 
    */
}

function handleKeydown (e){
    if (e.key === 'Enter'){
        getData();
    }
}
