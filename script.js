 
      window.addEventListener('load',function(){
        let form=document.querySelector('form');
        form.addEventListener('submit',function(event){
         let testName=document.querySelector("input[name='testName']");
         let testDate=document.querySelector("input[name='testDate']");
         let windRating=document.querySelector("input[name='windRating']")
         let boosterCount=document.querySelector("input[name='boosterCount']");
         let productionServers=document.querySelector("input[name='productionServers']");
         if (testName.value==='' || testDate.value==='' ||  boosterCount.value==='' || productionServers.value==='' || windRating.value==='') {
          alert ('All fields are required!');
          //event.preventDefault();
         }
        });

      });

      
    