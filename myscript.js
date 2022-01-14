let main = document.querySelector("#container")
let bar = document.querySelector("#now_playing_bar")
let overlay = document.querySelector("#song_det_screen")
let back_button = document.querySelector("#back_button")
let heart_un =  document.querySelector("#fav")
let heart_ch =  document.querySelector("#fav_checked")

bar.addEventListener("click", ()=>
{
    main.setAttribute("style" , "z-index:0; overflow:hidden;")
    overlay.setAttribute("style" , "z-index:1; opacity:100%; transform: translate(0, -648px);")
}
);

back_button.addEventListener("click", ()=>
{
    main.setAttribute("style" , "z-index:1")
    overlay.setAttribute("style" , "z-index:-1")  
}
);

// heart_un.addEventListener("click", ()=>
// {
//     heart_un.setAttribute("style" , "opacity:0%")
//     heart_ch.setAttribute("style" , "opacity:100%")  
// }
// );

// heart_ch.addEventListener("click", ()=>
// {
//     heart_un.setAttribute("style" , "opacity:100%")
//     heart_ch.setAttribute("style" , "opacity:0%")  
// }
// );