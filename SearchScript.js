
//This function is the basis of the search bar
function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('cat');
    li = ul.getElementsByTagName('li');
    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}
