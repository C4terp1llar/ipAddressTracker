export function printData (data){

    const {
        ip,
        isp,
        location: {
            country,
            region,
            timezone
        }
    } = data;

    const ipField = document.getElementById('ip');
    const locationField = document.getElementById('location');
    const timezoneField = document.getElementById('timezone');
    const ispField = document.getElementById('isp');

    ipField.textContent = ip;
    locationField.textContent = `${region}, ${country}`;
    timezoneField.textContent = `UTC ${timezone}`;
    ispField.textContent = isp;
}
