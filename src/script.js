// use of shorthand,const,let,method syntax,template strings
function library(name,edition,author,yearpublished) {
  const Max_Books=10;
  return {
    name,
    edition,
    author,
    yearpublished,
  nameauthor(){
    return `${name}, ${author}`
  }
   
  };
 
}
let librarydetails=library("goodtogreat","6th","caroline","1955");

document.getElementById("book").innerHTML = `${librarydetails.yearpublished}, ${librarydetails.edition}, ${librarydetails.nameauthor()}`;


document.getElementById("load_library").addEventListener("click", start_lib, true)
function start_lib(){
  library()
}
document.getElementById("book2").innerHTML = `${booklist}`;

document.getElementById("load_details").addEventListener("click", start_book, true)
function start_book(){
  bookdetails()
}
// use of rest
function bookdetails() {
  let books=["bible","carribean","Howtoinvest","howtoeat","carribean"];  
  return
   {
    first,
    rest
  };
  }
 let [first,...rest]= books;



