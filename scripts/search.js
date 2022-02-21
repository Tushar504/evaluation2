function storeSearchterm(term) {

    if(term.key=="Enter"){
        let value=document.getElementById("searchbar").value;
        localStorage.setItem("search_term",value)
        window.location.href="search.html"
      }

}

export default storeSearchterm