
XMLHttpRequest
--------------

=> The XMLHttpRequest object is an older method for making HTTP requests. 
=> While It is less commonly used now. 
=> it is still  supported in all modern browsers


var XMLRequest = new XMLHttpRequest();

//create get request ot dummy api call

XMLRequest.open('GET', 'https://api.githup.com/');

XMLRequest.send();

XMLRequest.onload = () => {
    if ( XMLRequest.status === 200) {
        console.log(" Request Success")
    } else {
        console.log( " Error occured")
    }

    console.log(JSON.parse(XMLRequest.response))
}

// It receives response in string format that needs to be parsed in JSON.format
// (JSON.parse(XMLRequest.response))

//It is a build-in browser object to create HTTP requests & is deprecated with the introduction of fetch in ES6. still, 
//it is used when we work with older browers.