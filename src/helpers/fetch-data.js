export async function fetchData (ip){
    const response = await fetch(`https://api.ipbase.com/v2/info?apikey=ipb_live_sU8BBSNN2bOf3xTOPndb3I1TZ2TCZ7x9SHgNztHK&ip=${ip}`);
    return response.json();
}