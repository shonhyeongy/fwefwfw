alert("ddd")


//var file_path = app.activeDocument.fullName
var file = new file ("/Users/sonhyeongi/Desktop/hyeongi2/5.jpg");

var ftp = new FtpConnection("ftp://forever2331.dothome.co.kr/") ;
ftp.login("forever2331", "12qw12qw");

ftp.cd("www")
ftp.put(file,"test_file.psd") ;

ftp.close() ;
file.close() ;
