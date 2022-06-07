var i=1;
setInterval(function(){
    var titles=[" S  "," Sk "," Ski ","  Skid "," Skidd "," Skidde  "," Skidded "," Skidded. "," Skidded.x "," Skidded.xy "," Skidded.xyz "," "]
if(i===titles.length) {
        i=1;
    }
    document.title = titles[i];
    i++;
}, 900);
