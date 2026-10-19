let rankBtn = document.getElementById("rank-btn");
let rankbtn = rankBtn.querySelectorAll("button");
let submitBtn = document.getElementById("submit-btn");


rankbtn.forEach(btn => {
  btn.addEventListener("click", function(){
    rankbtn.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
  })
  
});
submitBtn.addEventListener("click", function(){
  let activeBtn = document.querySelector(".rank-btn button.active");
  if(activeBtn ){
    //i'll write my code here
    document.querySelector(".component-container").style.display = "none";
    document.querySelector(".thank-you").style.display = "flex";
    let ratedValue = activeBtn.textContent;
    document.querySelector(".thank-you span").textContent = ratedValue;
  }  else{
    alert("Please add your rating")
  }
 
 
});