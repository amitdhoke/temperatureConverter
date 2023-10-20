'use strict'
 

        // JavaScript function to handle form submission
        function handleSubmit(event) {
            event.preventDefault(); // Prevent the default form submission behavior
                
            
           
            const celsius = document.getElementById("Celsius").value;
            const fahrenheit = (celsius * 9/5)+32;
            document.getElementById("fResult").textContent = fahrenheit;
            // console.log('i am here');
        }
        
        const form = document.getElementById("myForm");
    form.addEventListener("submit", handleSubmit);

    
 ////////////////////// CLEAR FORM EVENT //////////////////////////////////   

document.querySelector('.btn-clear').addEventListener('click',function(){
    
   document.querySelector('.input01').value = '';
   document.querySelector('.fResult').textContent = '';
})