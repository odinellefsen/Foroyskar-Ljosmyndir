const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => { 
  navbar.classList.toggle('change');
})

// countFromZero funktiónin telur frá 0 til talið man koyrir í funktiónina
countFromZero = (num) => {
    counting = [];

    if (num < 0) {
        for(let i = 0; i >= num; i--) {
            counting.push(i);
        }
    }
    else if (num > 0) {
        for(let i = 0; i <= num; i++) {
            counting.push(i);
        }
    }
    else {
        return "You have chosen death";
   }
    return counting;
}
// countToZero telur frá talinum man koyrir í funktiónina til 0
countToZero = (num) => {
    counting = [];

    if(num < 0) {
        for(let i = num; i <= 0; i++) {
            counting.push(i);
        }
    }
    else if(num > 0) {
        for(let i = num; i >= 0; i--) {
            counting.push(i);
        }
    }
    else {
        return "You have chosen death";
    }
    return counting;
}

// Notebook (Death Note)
initiate = () => {
   const name = prompt('Enter Name');

    if(name === 'Óðin Andor Ellefsen' || 'Óðin A. Ellefsen' || 'Óðin Ellefsen' || 'Óðin A Ellefsen') {
       console.log('Death Note initiated');
       DeathNote = () => {
           console.log(prompt('Eliminate Evil, type name') + ' will be eliminated in 40 seconds');
           
           let q = 40;

    startTimer = () => {

        let countdownTimer = setInterval(() => {

            console.log(q);
            q = q - 1;

            if (q <= -1) {
                clearInterval(countdownTimer);
                console.log('Evil has been eliminated');
                let more = prompt('Do you wish to rid the world of more evil now?');
                if (more === 'Yes') {
                    DeathNote();
                }
                else if(more === 'Later') {
                    location.reload();
                }
                else {
                    console.log('Jeez');
                }
            }
        }, 1000);
    }
    startTimer();
     }
       DeathNote();
       } 
    else {
        console.log('My Diary');
        console.log(Date());
        return 'Property of ÓAE';
       }    
       return 'Elimination Initiated';
}