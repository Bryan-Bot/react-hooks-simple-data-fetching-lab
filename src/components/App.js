// create your App component here
import React, {useState, useEffect} from 'react'

function App(){

    const [dog, setDog] = useState([])

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setDog(data));
    }, [])
return(
<div>
    <h1>Hello Dog</h1>
    <img src={dog.message} />
    <p>{dog.status}</p>
</div>
)

}
export default App;