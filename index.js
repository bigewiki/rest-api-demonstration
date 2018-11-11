const loadPages = () => {
  fetch('http://96.125.168.193/~bigewiki/psychoanalyz/wp-json/wp/v2/pages')
    .then(response => response.json())
    .then(json => {
      document.querySelector("#title").innerHTML=json[0].title.rendered;
      document.querySelector("#content").innerHTML=json[0].content.rendered;
      document.querySelector("#load-pages-btn").style.display = "none";
    });
};//close loadPages function

