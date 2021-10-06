var current_region = document.querySelectorAll('.current-region');
current_region.forEach(function(key, valye){
  key.onclick = function(){
     var  m = key.parentNode.querySelector('.dropdown-menu');
     if(m.classList.contains('show') === true){
        m.classList.remove('show')
     }else{
         m.classList.add('show');
     }
  }
})


var drop_item = document.querySelectorAll('.dropdown-menu .search-items');
drop_item.forEach(function(key, value){
    key.onclick= function(){
      var text = key.innerText;
      key.parentNode.parentNode.parentNode.parentNode.querySelector('.current-region').innerText = text;
      key.parentNode.parentNode.parentNode.parentNode.querySelector('.dropdown-menu').classList.remove('show');
    }
})
////
