


 var main = document.getElementsByClassName("main")[0],
     all_div = document.getElementsByTagName("div"),
     div,
     count,
     om,
     oj,
     aa,
     img;


 var audioRight = new Audio('rbehet.wav');
 var audioWrong = new Audio('5seret.wav');


 var rArray = ['awal.jpg' , 'teni.jpg' , 'telet.jpg' , 'rabe3.jpg' , 'awal.jpg' , 'teni.jpg' , 'telet.jpg' , 'rabe3.jpg'];
 
 function lettersFunction(z) {
     for (var i = 0; i <= 7; i = i + 1) {
         div = document.createElement("div");
         main.appendChild(div);
         img = document.createElement("img");
         img.setAttribute("src", z[i]);
         img.setAttribute("id", z[i]);
         div.appendChild(img);
     }

 }
 lettersFunction(rArray);



 var x = [],
     flag = true;
 for (var i = 0; i <= all_div.length - 1; i++) {
     all_div[i].onclick = function () {

         if (!flag) return;
         this.firstChild.style.opacity = "1";
         if (x.length == 0) {
             x[0] = this;
         } else if (x.length == 1) {
             x[1] = this;

         }

         if (x.length == 2) {
             flag = false;
             setTimeout(check, 700);

         }
         if (count === 4) {     
            alert("ho");
           om = document.createElement("button");
           aa = document.createElement("a");
           oj = document.createTextNode("to next level");
           aa.appendChild(oj);
           om.appendChild(aa);  
           main.appendChild(om);
           om.setAttribute("id", "oh");
           aa.setAttribute("href","game-1-1.html")
           
         }

 }
}
count = 0;
 function check() {

     if (x[0].firstChild.id === x[1].firstChild.id) {
         audioRight.play();
         count++;
         
     } else {
         audioWrong.play();        
         x[0].firstChild.style.opacity = "0";
         x[1].firstChild.style.opacity = "0";

     }
     x = [];
     flag = true;
 }