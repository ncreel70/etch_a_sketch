// let gridSize = document.getElementById('gridSize').value;

document.addEventListener('click',() => {
   
   let container = document.getElementById('container');
   let gridSize = 16;
   let dimension = 960/gridSize;
   
   for (let i = 0; i < (gridSize); i ++){
      let divRow = document.createElement('div');
      divRow.className = 'row';
      divRow.style.height = dimension + 'px';
      
      for (let k = 1; k <= gridSize; k++) {
         let divCell = document.createElement('div');
         divCell.className = 'cell';
         divCell.id = 'cell' + k + i;
         divRow.appendChild(divCell);
         divCell.style.height = '100%';
         divCell.style.width = dimension + 'px';
         divCell.style.float = 'left';
      } 
      
      container.appendChild(divRow);
   }
   document.getElementsByClassName('row').height = dimension;
})