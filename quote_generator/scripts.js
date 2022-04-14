let apiQuotes = [];
// Get Quotes From API
async function getQuotes(){
    const API_URL = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(API_URL);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    }catch(error){
        // catch error here
    }
}

getQuotes();