import React from 'react'

function Fruits() {
     const [count, setCount] = useState(0)
  const [fruits,setFruits] = useState([]);
  const [fname,setFname]=useState("");

  const hadleChange = (e) =>{
    const fruitsElement = e.target.value;
      setFname(fruitsElement)   
  }


  const handleClick = ()=>{
      setFruits([...fruits,fname]);
      console.log(fruits);

       setFname="";
      
  }

    useEffect(() => {
  console.log(fruits);
}, [fruits])
  return (
    <div>    <div>
        <form class="w-full max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  onChange={hadleChange} />
    </div>
  </div>
 
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-blue-200 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleClick}>
        Sign Up
      </button>
    </div>
  </div>
</form>
      </div></div>
  )
}

export default Fruits