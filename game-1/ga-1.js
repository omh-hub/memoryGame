


 var main = document.getElementsByClassName("main1")[0],
     all_div = document.getElementsByTagName("div"),
     div,
     count,
     om,
     img;


 var audioRight = new Audio('rbehet.wav');
 var audioWrong = new Audio('5seret.wav');


var arr = ['5ames.jpg' ,'sedes.jpg' , 'sebe3.jpg' , 'temen.jpg' , 'tese3.jpg' , '3asher.jpg' ,'5ames.jpg' , 'sedes.jpg' , 'sebe3.jpg' , 'temen.jpg' , 'tese3.jpg' , '3asher.jpg']

 function lettersFunction(z) {
     for (var i = 0; i <= 11; i = i + 1) {
         div = document.createElement("div");
         main.appendChild(div);
         img = document.createElement("img");
         img.setAttribute("src", z[i]);
         img.setAttribute("id", z[i]);
         div.appendChild(img);
     }

 }
 lettersFunction(arr);



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
         if (count === 6) {
            alert("ho")
           main.innerHTML = "youuuu winnnnnn"
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