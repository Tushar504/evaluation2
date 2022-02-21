async function apiCall(url) {

    try {
        let res=await fetch(url)
      let data=await res.json();
     return data;
     
      
      } 
      catch (error) {
        console.log("Error:",error)
      }
    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here
    if(articles.length >1){
    articles.map(function(ele){
        let div=document.createElement("div");
        div.addEventListener("click",(event)=>{
            localStorage.setItem("article",JSON.stringify(ele))
            window.location.href="news.html"
       
        })
        div.setAttribute("id","news")
   
        let img=document.createElement("img");
        img.src=ele.urlToImage
   
        let h4=document.createElement("h4");
        h4.textContent=ele.title
   
        div.append(img,h4);
        main.append(div)
      })
    }
    else{
        articles.map(function(ele){
            let div=document.createElement("div");
            div.setAttribute("id","news")
       
            let img=document.createElement("img");
            img.src=ele.urlToImage
       
            let h4=document.createElement("h6");
            h4.textContent=ele.title
             let h3=document.createElement("h4");
             h3.textContent=ele.content
            div.append(img,h4,h3);
            main.append(div)
          })
    }
}

export {apiCall,appendArticles};