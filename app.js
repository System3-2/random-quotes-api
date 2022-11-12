const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d125e38fdmshd3d62d472692b99p12ce84jsn06599c1a1b4b',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
const main = document.getElementById('root');
console.log(main);


  
  function nextQuotes() {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    .then(response => response.json()).then(data => {
  
      fetchQuotes(data)
    })
    
  }


  function fetchQuotes (data) {
    const { content, url, originator } = data;
    const { name } = originator;
    console.log(content);
    console.log(name);

    return main.innerHTML =(
      `
        <p> ${ content }</p>
        <h3> ${ name }</h3>
        <a href="${ url }">Read More..</a>
      `
    )
  }

  