// Template literals - including HTML inside our JS//

const name = 'John';
const age = 33;
const job = 'Dev'
const city = 'Chictown'

html = '<ul><li>Name:' + name + '</li></ul>';



html = '<ul>' +
            '<li>Age: '+age+'</li>'+
            '<li>Job: '+job+'</li>'+
            '<li>City: '+city+'</li>'+
        '</ul>';

// with template strings using ES6
    // using backticks(``)-by then #1 and "$"
    // much cleaner and east to write

function hello(){
    return 'hello';
}


html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>Job: ${job}</li>
        <li>${4+4}</li>
        <li>${hello()}</li>
        <li>${age>30 ? "Over 30" : "Under 30"}</li>
        
    <ul>
`



// output in HTML
document.body.innerHTML = html;