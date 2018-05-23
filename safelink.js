<html><head><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/><title>javascript</title></head><body><p dir="ltr">var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i&lt;input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1&gt;&gt;2;enc2=((chr1&amp;3)&lt;&lt;4)|(chr2&gt;&gt;4);enc3=((chr2&amp;15)&lt;&lt;2)|(chr3&gt;&gt;6);enc4=chr3&amp;63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}</p>
<p dir="ltr">output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}</p>
<p dir="ltr">return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i&lt;input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1&lt;&lt;2)|(enc2&gt;&gt;4);chr2=((enc2&amp;15)&lt;&lt;4)|(enc3&gt;&gt;2);chr3=((enc3&amp;3)&lt;&lt;6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}</p>
<p dir="ltr">if(enc4!=64){output=output+ String.fromCharCode(chr3);}}</p>
<p dir="ltr">output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n&lt;string.length;n++){var c=string.charCodeAt(n);if(c&lt;128){utftext+=String.fromCharCode(c);}</p>
<p dir="ltr">else if((c&gt;127)&amp;&amp;(c&lt;2048)){utftext+=String.fromCharCode((c&gt;&gt;6)|192);utftext+=String.fromCharCode((c&amp;63)|128);}</p>
<p dir="ltr">else{utftext+=String.fromCharCode((c&gt;&gt;12)|224);utftext+=String.fromCharCode(((c&gt;&gt;6)&amp;63)|128);utftext+=String.fromCharCode((c&amp;63)|128);}}</p>
<p dir="ltr">return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i&lt;utftext.length){c=utftext.charCodeAt(i);if(c&lt;128){string+=String.fromCharCode(c);i++;}</p>
<p dir="ltr">else if((c&gt;191)&amp;&amp;(c&lt;224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&amp;31)&lt;&lt;6)|(c2&amp;63));i+=2;}</p>
<p dir="ltr">else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&amp;15)&lt;&lt;12)|((c2&amp;63)&lt;&lt;6)|(c3&amp;63));i+=3;}}</p>
<p dir="ltr">return string;}}</p>
<p dir="ltr">var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}</p>
<p dir="ltr">function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&amp;&amp;!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")</p>
<p dir="ltr">{protected_links=a_to_vd;}</p>
<p dir="ltr">var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i&lt;a_to_va;i++)</p>
<p dir="ltr">{a_to_vh=false;j=0;while(a_to_vh==false&amp;&amp;j&lt;a_to_vg)</p>
<p dir="ltr">{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))</p>
<p dir="ltr">{a_to_vh=true;}</p>
<p dir="ltr">j++;}</p>
<p dir="ltr">if(a_to_vh==false)</p>
<p dir="ltr">{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href="https://safelinkrmg.blogspot.com/p/generate.html?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}</p>
<p dir="ltr">var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)</p>
<p dir="ltr">{a_to_vj.innerHTML+=a_to_vb;}</p>
<p dir="ltr">if(a_to_vk)</p>
<p dir="ltr">{a_to_vk.innerHTML+=a_to_va;}}</p>
<p dir="ltr">function a_to_fa()</p>
<p dir="ltr">{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}</p>
</body></html>