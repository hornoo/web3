 // Write JavaScript here 

var expire = new Date();
expire.setDate(expire.getDate()+ 7);

document.cookie = "UserName=Richard;expires="+ expire.toUTCString() + ";";


var name = "UserName";

var cookieContent = document.cookie;

var cookieStartsAt = cookieContent.indexOf(name);

var cookieEndsAt = cookieContent.indexOf(";",cookieStartsAt);



var cookie = unescape(cookieContent.substring(cookieStartsAt, cookieContent.length));




document.writeln(cookie);