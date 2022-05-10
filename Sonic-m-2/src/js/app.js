var switchery = document.getElementById("flexSwitchCheckDefault");
switchery.addEventListener("change",function(e){
    var isDark = false;
    if(switchery.checked){
        isDark = true;
    } else {
        isDark = false;
    }


    if(isDark){
        document.documentElement.style.setProperty("--bg-color","rgb(111, 0, 0)");
        document.documentElement.style.setProperty("--text-color","#fff");
    } else {
        document.documentElement.style.setProperty("--bg-color","#fff");
        document.documentElement.style.setProperty("--text-color","#000");
    }
});