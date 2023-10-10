let newArr = JSON.parse(weekdays); // convert string to an object

console.log(newArr);
newArr.forEach (item => {
    document.getElementById('result').innerHTML += `
    <div class="card" style="width: 20rem;">
  <img src="${item.img}" class="card-img-top" alt="${item.fname}">
  <div class="card-body">
    <h5 class="card-title">Today's Task</h5>
    <p class="card-text">${item.day} ${'-'} ${item.description}</p>
    <p class="card-text">${item.taskName}</p>
    <p><button class="btn btn-primary myNo">Importance <span class = 'like'>${item.importance}</span></button></p>

    <button class="btn btn-primary myBtn">Done</button>
    <button class="btn btn-primary myBtn">Reschedule</button>


  </div>
</div>
    `;
})
    
let btns = document.querySelectorAll(".myBtn");

btns.forEach(btn =>{ 
    btn.addEventListener("mouseup",() => {
        btn.style.backgroundColor = 'green'
    })

})
let btn1 = document.querySelectorAll('.myNo');

btn1.forEach(imp =>{
    imp.addEventListener ("mousedown",() =>{
        imp.style.backgroundColor = 'green';

       
    })

   
})


btn1.forEach ((imp, i) => {
    imp.addEventListener('click', function(){
        incLikes(i);
    })
    
} );

function incLikes (i){
    newArr[i].importance++;
    document.querySelectorAll('.like')[i].innerText = newArr[i].importance
    
}
document.getElementById('btn').addEventListener ('click', function()
    { let newVar = newArr.sort((a, b) => a.importance - b.importance);

        console.log(newVar);


    }
)

// let imp = document.querySelectorAll ('.myNo')

// if (imp <2){ document.querySelectorAll('.myNo'),
// imp
// }






