//BUILD A COUNTER APP
function initialize(){
    count = 0;
    button = document.getElementById("increment-btn")
    counter = document.getElementById("count-el")
    divider = document.getElementById("contain")
    entry = document.createElement("p")
    entryStarterText = document.createElement("p")


    entry.innerText = getCookie("previousEntries")
    entryStarterText.innerText = "Previous Entries: "


    divider.appendChild(entryStarterText)
    entryStarterText.appendChild(entry)
}


//stolen from https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


function increment(){
    count++
    counter.innerText = count
}


function goToLast(){
    let lastNum = []
    let previousEntries = getCookie("previousEntries")
    let lastEntry = ""

    for(i = previousEntries.length; i > 0; i--){
        if(previousEntries.substring(i-1,i) == " ") break
        lastNum.push(previousEntries.substring(i-1,i))
    }
    
    for(i = lastNum.length-1; i >= 0; i--){
        lastEntry = lastEntry + lastNum[i];
    }

    if(lastEntry == "") counter.innerText = "you have nothing saved"
    else{
    count = parseInt(lastEntry)
    counter.innerText = count
    }
}


function clearData(){
    let expires = "expires=Thu, 18 Dec 1620 12:00:00 UTC";
    document.cookie = "previousEntries" + "=" + entry.innerText + ";" + expires + ";path=/";
    entry.innerText = " "
}


function save(){
    const d = new Date();
    d.setTime(d.getTime() + (2*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();



    if(entry.innerText == "") entry.innerText = entry.innerText + count.toString()
    else entry.innerText = entry.innerText + " - " + count.toString() 

    document.cookie = "previousEntries" + "=" + entry.innerText + ";" + expires + ";path=/";
}
initialize()
