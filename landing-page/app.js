


///////////////////////////////////////////// define Variables/////////////////////////////////////////////////

const Allsections = (document.querySelectorAll("section"));
const ul =document.getElementById('navbar__list');

//////////////////////////////////////////navigation bar building function///////////////////////////////////////////////////

function NavbarBuild(){
        for (let index = 0; index < Allsections.length; index++) {
                    const li = document.createElement('li');                       //create li
                    const id= Allsections[index].getAttribute('id');               //getting the id of each section
                    const Name=Allsections[index].getAttribute('data-nav');        //getting the data-nav (name) of each section
                let link=  li.innerHTML =  ` <a class='menu__link' href ='#${id}'> ${Name} </a>` ;     
                    ul.appendChild(li);     //adding li element to the ul elemnt to build the navigation bar  
                


                            //**************//smooth scroll//*************************
                        li.addEventListener("click" , (e) =>{
                        e.preventDefault();
                        Allsections[index].scrollIntoView({behavior:"smooth"})
                        }) ;   


        }
        
}

/////////////////////////////////////////Section Active State function////////////////////////////////////////////////////

function ActiveClass(){    
        for (let index = 0; index < Allsections.length; index++) {
                        const position = Allsections[index].getBoundingClientRect();         
                if(position.top>=0 && position.top<=400){                            //if postion of each section between 0 and 400     
                        Allsections[index].classList.add("your-active-class");
                }
                else{
                        Allsections[index].classList.remove("your-active-class");
                }
        }
}    
        
////////////////////////////////////////////////addEventListener////////////////////////////////////////////////////////

document.addEventListener('scroll' , function(){                   
        ActiveClass();
});















////////////////////////////////////////////////buildnav//////////////////////////////////////////////////////////////
  //window.addEventListener("click" , NavbarBuild() );          

NavbarBuild();







///////////////////////////////////////////////////notice/////////////////////////////////////////////////////////////
                                      //(with the helping of w3 schools)
//When clicking an item from the navigation menu, the link should scroll to the appropriate section.
/// i did it at css file by adding html tag with property scroll-behavior: smooth;   (used w3 schools) 





/*-------------------------------------------------------------------------------------------------------
resourses used
----------------
https://github.com/akristic/landing-page
W3 Schools
MDN

*/