// JavaScript Document





function DayDiff(SpecifiedDate)
{ var CurrentDate= new Date();
var SD =new Date(SpecifiedDate);
		
        var DayCount=(SD-CurrentDate)/(1000*60*60*24);
        DayCount=Math.round(DayCount); 
		document.write(DayCount);
   		
		
}
function getLocalDay(date) {

  var day = date.getDay()

  if ( day==0 ) { // day 0 becomes day 7
    day = 7 
  }
  
  // day now is between 1(Monday) ... 7(Sunday) 

  return day - 1 // make it 0..6
}
function showDate(SpecifiedDate)
{var SD=SpecifiedDate.split(" ");  
var x=SD[0].replace("-", ",");
var y=x.replace("-", ",");
//alert(y); 
var z=new Date(y);
return(z.toDateString());
   		
		
}


function el_get(){
var url = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=exhibitorslist&format=json'

    $.getJSON(url,
    function (json) {

        var tr;
        for (var i = 0; i < json.length; i++) {

            tr = $('<tr/>');
         //   tr.append("<td>" + json[i].id + "</td>");
		 
		 //add_description(json[i].ID);
		 
		 
		 	var x='<td><a onclick="add_description('+json[i].ID+');" href="#">'+json[i].post_title+'</a></td>';
            tr.append(x);
            tr.append("<td>" + json[i].meta_value + "</td>");
			
            $('#e_l').append(tr);
        }
    });
}

function add_description(x){
			 var url2 = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=exhibitorslistdesc&format=json&exid='+x;
		 
		 $.getJSON(url2,function(json){
		 var y='<div  data-role="page" style="background:white" id="'+ x + '"><div data-role="header" style="background:white;border:0"><h1 > </h1></div>'+
			     '<a href="#page1" >	<img src="images/logo.jpg" style="width:96%" alt="logo"></a>';
			y=y+'<div class="text_content" style="padding-bottom:9%;text-align:center">';

			
		 for (var i = 0; i < json.length; i++) { 
		 		if(json[i].meta_key=='_wp_attached_file'){var img=i;}
		 		if(json[i].meta_key=='estandno'){var stand=i;}
		 		if(json[i].meta_key=='econtactn'){var contact=i;}
		 		if(json[i].meta_key=='ephone'){var phone=i;}
		 		if(json[i].meta_key=='eemail'){var email=i;}
		 		if(json[i].meta_key=='ewebsite'){var web=i;}
		 		}
		 		y=y+'<img src="'+ json[img].guid + '">';
		 		y=y+'<div class="title_bg" style="height:auto"><div class="title">'+ json[0].post_title + '</div></div>';
				y=y+'<p style="text-align:center"><strong>Stand Number</strong>:'+ json[stand].meta_value + '</p>';
				y=y+'<p style="text-align:center"><strong>Contact Name</strong>:'+ json[contact].meta_value + '</p>';
				y=y+'<p style="text-align:center"><strong>Telephone</strong>:'+ json[phone].meta_value + '</p>';
				y=y+'<p style="text-align:center"><strong>Email</strong>:<a  href="mailto:'+json[email].meta_value+'">'+ json[email].meta_value + '</a></p>';
				y=y+'<p style="text-align:center"><strong>Web</strong>:<a  href="#" onclick="window.open(\''+json[web].meta_value+'\', \'_system\');">'+ json[web].meta_value + '</a></p>';
				
			y=y+'</div>';
					y=y+'<div class="footer"><a id="backButton"  href="#page_el"><img src="images/back.png" style="width:5vw;float:left;padding-right:2%"> Back</a> <span id="footerSeperator">|</span><a id="twitterButton" href="#" onclick="window.open(\'https://twitter.com/FP_Show\', \'_system\');"><img src="images/twitter.png" style="width:5vw;float:left;padding-right:0%"> Twitter</a>  <span id="footerSeperator">|</span><a id="registerButton" href="#page_r"> Register</a> <span id="footerSeperator">|</span><a id="SiteButton"  href="#" onclick="window.open(\'http://www.financeprofessionalshow.co.uk\', \'_system\');"> Full Site</a> </div>';  
					y=y+'</div>';
 
			  $('body').append(y);
			  $.mobile.changePage('#'+x);
		 });

	
}
function getExName(x){
			 var url3 = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=select&format=json&table=wp_posts&columns=post_title&condition=id='+x;
		 
		 $.getJSON(url3,function(json1){
		 for (var i = 0; i < json.length; i++) {
			     
		return json[i].post_title;
		//return url2;
		}
								 });

	
}

function addpage(x){
	alert("testing");
	
}
$('#page_el').bind(el_get());


/*function cp_get(){
var url = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=select&format=json&table=wp_posts&columns=id,post_title,post_content&condition=post_type=%27page%27%20and%20post_name=%27conference-programme%27%20and%20post_status=%27publish%27&limit=1'

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		
		$('#cp_content').append(json[i].post_content);
       
        }
    });
			}
			
		$('#page_cp').bind(cp_get());
*/
	function cu_get(){
var url = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=select&format=json&table=wp_posts&columns=id,post_title,post_content&condition=post_type=%27page%27%20and%20post_name=%27contact-us-app%27%20and%20post_status=%27private%27&limit=1'

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		
		$('#cu_content').append(json[i].post_content);
       
        }
    });
			}
			$('#page_cu').bind(cu_get());

			
	function pr_get(){
var url = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=pressreleases&format=json'

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		//var x='<a href="Fp.html?id='+json[i].id+'#page_pr">'+json[i].post_title+'</a>';
		var x="<br><div onclick='prdescription("+json[i].id+")' style='background:#E9E9E9;padding:20px;margin-bottom:5px;display:block'><h3 style='color: #b3071b;font-size: 3vw;margin-bottom: 7px;'>"+json[i].post_title+"</h3><p style='color: #606060;font-size: 3vw;'>"+showDate(json[i].post_date)+"</p></div>";
		$('#pr_content').append(x);
	
        }
    });
}
			$('#page_pr').bind(pr_get());
function prdescription(x){
			 var url2 = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=select&format=json&table=wp_posts&columns=id,post_title,post_content,post_date&condition=post_type=%27post%27%20and%20post_status=%27publish%27%20and%20id='+x;
		 
		 $.getJSON(url2,function(json){
		 var y='<div  data-role="page" style="background:white;width:100%" id="'+ x + '"><div data-role="header" style="background:white;border:0"><h1 > </h1></div>'+
			     '<a href="#page1" >	<img src="images/logo.jpg" style="width:96%" alt="logo"></a>';
			y=y+'<div class="text_content" style="padding-bottom:9%">';
			y=y+'<h2>'+ json[0].post_title + '</h2>';
			
			y=y+"<p style='color: #606060;font-size: 3vw;'>"+showDate(json[0].post_date)+"</p>";
			result = "<p>" + json[0].post_content+ "</p>";
			result = result.replace(/\r\n\r\n/g, "</p><p>").replace(/\n\n/g, "</p><p>");
			result = result.replace(/\r\n/g, "<br />").replace(/\n/g, "<br />");
			y=y+result ;
			y=y+'</div>';
					y=y+'<div class="footer"><a id="backButton"  href="#page_pr"><img src="images/back.png" style="width:5vw;float:left;padding-right:2%"> Back</a> <span id="footerSeperator">|</span><a id="twitterButton" href="#" onclick="window.open(\'https://twitter.com/FP_Show\', \'_system\');"><img src="images/twitter.png" style="width:5vw;float:left;padding-right:0%"> Twitter</a>  <span id="footerSeperator">|</span><a id="registerButton" href="#page_r"> Register</a> <span id="footerSeperator">|</span><a id="SiteButton"  href="#" onclick="window.open(\'http://www.financeprofessionalshow.co.uk\', \'_system\');"> Full Site</a> </div>';  
					y=y+'</div>';
			  $('body').append(y);
			  $.mobile.changePage('#'+x);
		 });

	
}


	function n_get(){
var url = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=select&format=json&table=wp_posts&columns=id,post_title,post_content&condition=post_type=%27page%27%20and%20post_name=%27News%27%20and%20post_status=%27publish%27&limit=1'

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		//var x='<a href="Fp.html?id='+json[i].id+'#page_pr">'+json[i].post_title+'</a>';
		
		$('#n_content').append(json[i].post_content);
		
       
        }
    });
			}
			
			
			$('#page_n').bind(n_get());

function visitorinformation_get(){
var url = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=select&format=json&table=wp_posts&columns=id,post_title,post_content&condition=post_type=%27page%27%20and%20post_name=%27useful-visitor-info%27%20and%20post_status=%27private%27&limit=1'

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		//var x='<a href="Fp.html?id='+json[i].id+'#page_pr">'+json[i].post_title+'</a>';
		
		$('#visitorinformation_content').append(json[i].post_content);
		
       
        }
    });
			}
			
			
			$('#page_visitorinformation').bind(visitorinformation_get());
			
	function exhibitorsinformation_get(){
var url = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=select&format=json&table=wp_posts&columns=id,post_title,post_content&condition=post_type=%27page%27%20and%20post_name=%27useful-exhibitor-info%27%20and%20post_status=%27private%27&limit=1'

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		//var x='<a href="Fp.html?id='+json[i].id+'#page_pr">'+json[i].post_title+'</a>';
		
		$('#exhibitorsinformation_content').append(json[i].post_content);
		
       
        }
    });
			}
			
			
			$('#page_exhibitorsinformation').bind(exhibitorsinformation_get());
		
	function updates_get(){
var url = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=fpupdates&format=json'

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		//var x='<a href="Fp.html?id='+json[i].id+'#page_pr">'+json[i].post_title+'</a>';
		var x="<br><div onclick='updescription("+json[i].id+")' style='background:#E9E9E9;padding:20px;margin-bottom:5px;display:block'><h3 style='color: #b3071b;font-size: 3vw;margin: 1%;'>"+json[i].post_title+"</h3></div>";
		$('#update_content').append(x);
	
        }
    });
}
			$('#page_update').bind(updates_get());
function updescription(x){
			 var url2 = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=select&format=json&table=wp_posts&columns=id,post_title,post_content,post_date&condition=post_type=%27post%27%20and%20post_status=%27publish%27%20and%20id='+x;
		 
		 $.getJSON(url2,function(json){
		 var y='<divdata-role="page" style="background:white;width:100%" id="'+ x + '"><div data-role="header" style="background:white;border:0"><h1 > </h1></div>'+
			     '<a href="#page1" >	<img src="images/logo.jpg" style="width:96%" alt="logo"></a>';
						y=y+'<div class="text_content" style="padding-bottom:9%">';

			y=y+'<h2>'+ json[0].post_title + '</h2>';
			result = "<p>" + json[0].post_content+ "</p>";
			result = result.replace(/\r\n\r\n/g, "</p><p>").replace(/\n\n/g, "</p><p>");
			result = result.replace(/\r\n/g, "<br />").replace(/\n/g, "<br />");
			y=y+result ;

				y=y+'</div>';
					y=y+'<div class="footer"><a id="backButton"  href="#page_update"><img src="images/back.png" style="width:5vw;float:left;padding-right:2%"> Back</a> <span id="footerSeperator">|</span><a id="twitterButton" href="#" onclick="window.open(\'https://twitter.com/FP_Show\', \'_system\');"><img src="images/twitter.png" style="width:5vw;float:left;padding-right:0%"> Twitter</a>  <span id="footerSeperator">|</span><a id="registerButton" href="#page_r"> Register</a> <span id="footerSeperator">|</span><a id="SiteButton"  href="#" onclick="window.open(\'http://www.financeprofessionalshow.co.uk\', \'_system\');"> Full Site</a> </div>';  
					y=y+'</div>';
  
			  $('body').append(y);
			  $.mobile.changePage('#'+x);
		 });	
}

			
			
			function mp_get(){
var url = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=select&format=json&table=wp_posts&columns=id,post_title,post_content&condition=post_type=%27page%27%20and%20post_name=%27media-partners%27%20and%20post_status=%27publish%27&limit=1'

			
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
		//var x='<a href="Fp.html?id='+json[i].id+'#page_pr">'+json[i].post_title+'</a>';
		
		$('#mp_content').append(json[i].post_content);
		
       
        }
    });
			}
			
			$('#page_mp').bind(mp_get());

			
			
			function addvalue() {
				
				var url = 'http://www.financeprofessionalshow.co.uk/wp-content/ws-db1.php?type=insert&format=json&table=visitor_form&columns=name,email,company,phone,address&values="'+$('#name').val()+'","'+$('#email').val()+'","'+$('#company').val()+'","'+$('#telephone').val()+'","'+$('#address').val()+'"';

			
    $.getJSON(url);
	
	alert("Thanks for registering - see you at the Show on Nov 5th!");
	clearform();
	$.mobile.navigate('#page1');

}


function clearform()
{
    document.getElementById("name").value=""; //don't forget to set the textbox id
    document.getElementById("email").value="";
    document.getElementById("company").value="";
    document.getElementById("telephone").value="";
    document.getElementById("address").value="";
	

}

function goload(x){
	$.mobile.changePage('#loaderpage');
	setTimeout(function(){$.mobile.navigate(''+'#'+x+'', { transition: "slideup", changeHash: false });},3000);
}

