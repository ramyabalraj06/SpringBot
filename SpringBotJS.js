
$(function() {
  var INDEX = 0; 
  setTimeout(generate_auto_messages, 4000);
  $("#chat-submit").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input").val(); 
    if(msg.trim() == ''){
      return false;
    }
   // generate_message(msg, 'self');
    msg_pool(msg,'self')
    var buttons = [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ];
//    setTimeout(function() {      
//  //    generate_message(msg, 'user');  
//      msg_pool(msg, 'user');
//    }, 1000)
    
  })
  
  function generate_message(msg, type) {
    INDEX++;
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
   
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    if(type == 'self'){
     $("#chat-input").val(''); 
    }    
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
  }  
  
  function msg_pool(query,type){
	  var q = query.toLowerCase();
	  var checkTemplate=false;
	 // var msg;
	  var reply=["hi","hello","fine","cool","great","well","how are you","what is up"];
	  for(var i=0;i<reply.length;i++){
		  var t=reply[i];
		  if(q.match(t)){
			  generate_message(query, 'user')
			  if(t=="hi"||t=="hello"){
				  var msg=["Hi..How Are You? ","Hi..How Do You Do?","Hello..how are things?"];    
			  }
			  if(t=="cool"||t=="fine"||t=="great"||t=="well"){
				  var msg=["Cool","Glad to hear it","Fantastic"];   
			  }
			  if(t=="how are you"){
				  var msg=["Cool","Awesome!","Fantastic"];   
			  }
			  else{
				 checkTemplate=false;      
			  }
			  checkTemplate=true;
			  console.log(q+"--"+t);
			  var msglength=msg.length;
			  var x = Math.floor((Math.random() * msglength) );
			  console.log("Num:"+x);
			  setTimeout(time, 3500);
			  function time(){
				  generate_message(msg[x], 'self'); 
			  }
			  //random
		  }
	  }
	 if(checkTemplate==false) {
		 generate_message(query, 'user');
			  var msg=["Same",
				  "Go on...",
				  "Try again",
				  "I'm listening...",
				  "yes...",
				  "ok...","Cheer up buddy","What about","Exciting things!!","Nothing much"];
		  var msglength=msg.length;
		  var x = Math.floor((Math.random() * msglength) );
		  console.log("Num:"+x);
		  setTimeout(time, 3500);
		  function time(){
			  generate_message(msg[x], 'self'); 
		  } 
	 }
	  
	 
//	  var hello = /how are you/i;
//	  if(q.match(hi)||q.match(hello)){
//		  var msg=["Im fine","Im doing great..","Im Great.."]; 
//		  var msglength=msg.length;
//		  var x = Math.floor((Math.random() * msglength) + 1);
//		  console.log("Num:"+x);
//		  generate_message(msg[x], type)
//	  }
	  
  }
  
  function generate_auto_messages(){
	  var msg=["You're welcome!"];
	  var type='self';
	  for(var i=0;i<msg.length;i++)
	  INDEX++;
	    var str="";
	    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
	   
	    str += "          <div class=\"cm-msg-text\">";
	    str += msg;
	    str += "          <\/div>";
	    str += "        <\/div>";
	    $(".chat-logs").append(str);
	    $("#cm-msg-"+INDEX).hide().fadeIn(300);
	    if(type == 'self'){
	     $("#chat-input").val(''); 
	    }    
	    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);      
  }
  
  function generate_button_message(msg, buttons){    
    /* Buttons should be object array 
      [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ]
    */
    INDEX++;
    var btn_obj = buttons.map(function(button) {
       return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
    }).join('');
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "          <div class=\"cm-msg-button\">";
    str += "            <ul>";   
    str += btn_obj;
    str += "            <\/ul>";
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);   
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
    $("#chat-input").attr("disabled", true);
  }
  
  $(document).delegate(".chat-btn", "click", function() {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, 'self');
  })
  
  $("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
})