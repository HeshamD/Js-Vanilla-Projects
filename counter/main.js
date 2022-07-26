let count = 0;

// select value and btn

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // selecting all the btn and it will return an array


btns.forEach(function(btn) {
    
    //which of the button the user clicked on 
    btn.addEventListener('click',function(e){ //e is the eventObject
        const styles = e.currentTarget.classList; // so each time, i click on the button, i will save in my variable which are the classes that this element has

        if(styles.contains('decrease')) //if the styles contains the decrease class
        {
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        if(count>0)
        {
            value.style.color = "green";
        }

        if(count<0)
        {
            value.style.color = "red";
        }
        if(count===0) // is equal to 0
        {
            value.style.color = "black";
        }

        value.textContent = count;

    })
    
});