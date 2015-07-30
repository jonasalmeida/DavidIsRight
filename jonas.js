console.log('jonas.js loaded')

jonas=function(){ // ini
    console.log('david asked a qeustion')
    jonas.oauth()

}

jonas.oauth=function(){
    var oUrl='https://accounts.google.com/o/oauth2/auth'
    //document.location.href=oUrl+'?client_id=219713047770-62lp54st6asguu9r43djdhnbs0nqhse6.apps.googleusercontent.com&response_type=token&scope=email&redirect_uri=http://localhost:8000/DavidIsRight/jonas.html'
    document.location.href=oUrl+'?client_id=219713047770-62lp54st6asguu9r43djdhnbs0nqhse6.apps.googleusercontent.com&response_type=token&scope=email&redirect_uri=https://jonasalmeida.github.io/DavidIsRight/jonas.html'
}

if(location.hash.length==0){
    jonas()
}else{
    eval('preJSON = {"'+location.hash.slice(1).replace(/=/g,'":"').replace(/&/g,'","')+'"}')
    $('<pre>'+JSON.stringify(preJSON,null,3)+'</pre>').appendTo(document.body)
    //$('<pre>'+'{\n"'+location.hash.slice(1).replace(/=/g,'":"').replace(/&/g,'",\n"')+'"\n}'+'</pre>').appendTo(body)
}
//jonas()


/*
https://accounts.google.com/o/oauth2/auth?
 scope=email%20profile&
 state=%2Fprofile&
 redirect_uri=https%3A%2F%2Foauth2-login-demo.appspot.com%2Foauthcallback&
 response_type=token&
 client_id=812741506391.apps.googleusercontent.com

https://accounts.google.com/o/oauth2/auth?client_id=219713047770-62lp54st6asguu9r43djdhnbs0nqhse6.apps.googleusercontent.com&response_type=token&scope=email

 
 */