// form of mail
function required()  
{  
var emptName = document.forms["form1"]["name"].value;
var emptEmail = document.forms["form1"]["email"].value;
var emptMessage = document.forms["form1"]["message"].value;  
if (emptName == "")  
{  
alert("Please input a name");  
return false;  
}
else if (emptEmail == "")
{
  alert("Please enter an Email");
  return false;
}  
else if (emptMessage == "")
{
  alert("please enter a message");
  return false;
}
else   
{  
alert('Mail sent!');  
return true;   
}  
} 
//json for gallery
var jsonObj = [{"id":"0", "src":"pic1.JPEG", "name":"pic1", "info":"web", "update":"20/09/2017"}, 
{"id":"1", "src":"pic2.JPEG", "name":"pic2", "info":"web", "update":"20/09/2017"}, 
{"id":"2", "src":"pic3.JPEG", "name":"pic3", "info":"web", "update":"20/09/2017"}, 
{"id":"3", "src":"pic4.JPEG", "name":"pic4", "info":"web", "update":"20/09/2017"}, 
{"id":"4", "src":"pic5.JPEG", "name":"pic5", "info":"web", "update":"20/09/2017"}, 
{"id":"5", "src":"pic6.JPEG", "name":"pic6", "info":"web", "update":"20/09/2017"}, 
{"id":"6", "src":"pic7.JPEG", "name":"pic7", "info":"web", "update":"20/09/2017"}, 
{"id":"7", "src":"pic8.JPEG", "name":"pic8", "info":"web", "update":"20/09/2017"}, 
{"id":"8", "src":"pic9.JPEG", "name":"pic9", "info":"web", "update":"20/09/2017"}, 
{"id":"9", "src":"pic10.JPEG", "name":"pic10", "info":"web", "update":"20/09/2017"}];var gallery1 = document.getElementById('gallerypics1');
galleryLoadImages();
function galleryLoadImages(){
	for(var cell in jsonObj){
			var innerObj = jsonObj[cell];
			var img = document.createElement("img");
			img.src = innerObj.src;
			gallery1.appendChild(img);
		}
}