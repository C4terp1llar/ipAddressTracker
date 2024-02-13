export function printData (data){

    const {
        connection: {
            isp,
        },
        ip,
        location: {
            country: {
                alpha2,
            },
            region: {
                name
            },
        },
        timezone: {
            code,
            current_time,
        },
    } = data;

    const ipField = document.getElementById('ip');
    const locationField = document.getElementById('location');
    const timezoneField = document.getElementById('timezone');
    const ispField = document.getElementById('isp');

    ipField.textContent = ip;
    locationField.textContent = `${name}, ${alpha2}`;
    timezoneField.textContent = `${code}, UTC ${current_time.split(/([+-]\d{2}:\d{2})/)[1]}`;
    ispField.textContent = isp;
}
