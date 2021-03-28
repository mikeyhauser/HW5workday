var containerEl = $("#containerid")
var currentTime = moment().format("H");
// var currentInt = Integer.parseInt("200");  
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

const times = ["9:00AM", "10:00AM","11:00AM", "12:00PM","1:00PM", "2:00PM","3:00PM", "4:00PM","5:00PM"]
renderHoursOfTheDay()


/// in the local storage, make a new variable everytime relative to its time slot




function renderHoursOfTheDay(){ 
   for (let i = 0; i < times.length; i++) {

  var textField =  localStorage.getItem(i+9) 
if (textField === null) {

containerEl.append(`

<div class="row " id="row + ${i+9}">
<div class="col-md-2"> ${times[i]}</div>
<textarea id="${i+9}"class="time-row col-md-9"></textarea>
<button class="col-md-1 btn saveBtn">save</button>


</div>
`)
}else{
    containerEl.append(`
<div class="row " id="row + ${i+9}">
<div class="col-md-2"> ${times[i]}</div>
<textarea id="${i+9}"class="time-row col-md-9"> ${localStorage.getItem(i+9)}</textarea>
<button class="col-md-1 btn saveBtn">save</button>
`)
}

// function functiontoappend(){

// }
// $("#containerid").foreach(fucntiontoappend())



        // console.log(times[i])




    // var rowEl = document.createElement("row");
    //     rowEl.classList.add("row");
    // var colHourEl = document.createElement("colHour");
    //     colHourEl.classList.add("col-3");
    //     colHourEl.textContent = i;
    // var colEntryEl = document.createElement("colEntry");
    //     colEntryEl.classList.add("col-9");
    // var colEntryTextEl = document.createElement("input")
    //     colEntryTextEl.classList.add("form-control");
   
    //     colEntryEl.appendChild(colEntryTextEl);
    //     rowEl.appendChild(colHourEl);
    //     rowEl.appendChild(colEntryEl);
    //     containerEl.appendChild(rowEl)

    

       
                                    }  }

$(".saveBtn").on("click", function(){
    console.log($('.time-row').text())
    var time = $(this).siblings("textarea").attr("id")
    console.log(this)
    var userText = $(this).siblings("textarea").val()

console.log("time" + time)
console.log(userText)
localStorage.setItem(time, userText)
//key , value 
//assing key time, giving value of user text

//Objectlocal storage
//    key9: value
//   key 10: 

//Here , it seems like you could change the red or blue variable to make a new id to store the textcontent in. it would be possible to make a bunch of variables independently, but id like the code to only make these variables on the fly if they are needed when stuff is saved.  you have each save button with a specific number, so you need to create a local storage space for each number and label the text areas with each number.
// localStorage.setItem(`userText-${time}`, JSON.stringify(userText));

//creating variables and element id names from "this" targets











   
        // defines function: creates the players last score from the local memory
//     function renderMessage() {

// var lastPlayer = JSON.parse(localStorage.getItem("playerStats"));
// if (lastPlayer !== null) {

// document.querySelector("#message").textContent = lastPlayer.player + " scored a " + lastPlayer.score
// }
// }






})




function colorTextArea(){

var timeArray = [9,10,11,12,13,14,15,16,17];
// var nineEl = document.getElementById("#9")
// document.getElementById("9").style.color = "red";
console.log(currentTime + "is the variable for currentTime")
    for (let i = 0; i < timeArray.length; i++) {

            // console.log(timeArray[i], currentTime, parseInt(currentTime))
    
         
            // $(this).style.backgroundcolor = "red"
            if (timeArray[i]<  parseInt(currentTime)) {
                document.getElementsByTagName('textarea')[i].classList.add("past")
                // var x = document.getElementsByTagName('textarea')[i].style.backgroundColor = 'grey';
                // var x = document.getElementsByTagName('textarea')[i].style.opacity = '0.5';
              
         // console.log("if statment entered" + timeArray[i] + "is greater than current time")
                 
             
         }
         if (timeArray[i] == parseInt(currentTime)) {
          
                document.getElementsByTagName('textarea')[i].classList.add("present")
         
            // var x = document.getElementsByTagName('textarea')[i].style.opacity = '0.75';
          
     // console.log("if statment entered" + timeArray[i] + "is greater than current time")
            
         
     }

        if (timeArray[i]>  parseInt(currentTime)) {
         
                document.getElementsByTagName('textarea')[i].classList.add("future")
            
        //    var x = document.getElementsByTagName('textarea')[i].style.backgroundColor = 'green';
        //    var x = document.getElementsByTagName('textarea')[i].style.opacity = '0.5';
         
    // console.log("if statment entered" + timeArray[i] + "is greater than current time")
            
        
    }

 
        //     console.log("timearray entry is " + timeArray)
        //  }
        // }

//**compare current time w/ position */
//     console.log("changing colors")
// }, 30000);


}
}
colorTextArea()

