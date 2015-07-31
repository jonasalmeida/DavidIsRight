console.log('jonas.js loaded')

jonas=function(){ // ini
    console.log('david asked a qeustion')
    jonas.oauth()

}

jonas.oauth=function(){
    var oUrl='https://accounts.google.com/o/oauth2/auth'
    //document.location.href=oUrl+'?client_id=219713047770-62lp54st6asguu9r43djdhnbs0nqhse6.apps.googleusercontent.com&response_type=token&scope=email&redirect_uri=http://localhost:8000/DavidIsRight/jonas.html'
    document.location.href=oUrl+'?client_id=219713047770-62lp54st6asguu9r43djdhnbs0nqhse6.apps.googleusercontent.com&response_type=token&scope=email&redirect_uri='+location.href
}

if(location.hash.length==0){
    jonas()
}else{
    (function(){ // keeping scope within an annonimous function
        $('<h4 style="color:blue">Extracting parameters from the URL hash:</h4>').appendTo(document.body)
        var preJSON={};
        location.hash.slice(1)
            .split(/&/g)
            .map(function(xi){return xi.split(/=/g)})
            .map(function(xi){preJSON[xi[0]]=xi[1]})
        $('<pre style="color:maroon">'+JSON.stringify(preJSON,null,3)+'</pre>').appendTo(document.body)
        location.hash="" // remove hash to clean url
    })()       
}
