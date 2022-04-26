function printing() {
    console.log(1);//1ero
    setTimeout(function() { console.log(2); }, 1000); //4to
    setTimeout(function() { console.log(3); }, 0); //2do
    console.log(4);//3ero
    /*
    1
    4
    3
    2
    */
 }
 
 printing();