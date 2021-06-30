var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript
    console.log(content);
    
    if (content =="take my selfie"){
        console.log("selfie");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    setTimeout(function(){
      capture();
      save();
  },5000);

    Webcam.attach(camera);

}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 100
  });
  camera= document.getElementById("camera");
  
  function capture(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
        '<img id="pic" src='+data_uri+'/>';
      } );
  }

  
  function save(){
      link= document.getElementById("link");
      img= document.getElementById("pic").src ;
      link.href=img;
      link.click()
  }