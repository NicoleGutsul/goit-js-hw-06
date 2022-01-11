{
   const btnMinus = document.querySelector(`[data-action="decrement"]`);
   const btnPlus = document.querySelector(`[data-action="increment"]`);
   let counterEl = document.querySelector("#value");
   let counterValue = 0;
   btnMinus.addEventListener("click", onTargetMinus);
   btnPlus.addEventListener("click", onTargetPlus);

   function onTargetMinus(){
      counterValue -=1;
      counterEl.textContent = counterValue;
   }

   function onTargetPlus(){
      counterValue +=1;
      counterEl.textContent = counterValue;
   }
}

