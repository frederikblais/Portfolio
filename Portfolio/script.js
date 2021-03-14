// var to store the saved theme
let theme = localStorage.getItem('theme');

// set light by default, then selected theme
if(theme == null){
    setTheme('light')
}
else{
    setTheme(theme)
}

// Grab theme class by DOM.
let themeDot = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDot.length > i; i++){
    themeDot[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode);
    })
}

// Set theme option for selected theme.
function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'dark.css'
    }

    // Set the selected value to Local storage
    localStorage.setItem('theme', mode)
}

