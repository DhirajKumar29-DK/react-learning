const App = function(){

  // function inputChnaging(val){
  //   console.log(val)
  // }


  function pageScrolling(val){
    if(val>0){
      console.log("upward Scrolling...", val)
    }else{
      console.log("dowmWard scrolling", val)
    }
  }

 return(
    <div>
      {/* <h1>Hello, Dhiraj</h1> */}

      {/* <button onClick={function(){
        console.log('Hello Guys');
      }}>Click Me </button> */}

      {/* <input
       onChange={function(e){
       inputChnaging(e.target.value)
      }}
       type="text"
       placeholder="Enter Your Name"
      /> */}


      {/* <div onMouseMove={(e) =>{
        console.log(e)
      }} 
      className="box">box</div> */}

      <div onWheel={(e) =>{
        pageScrolling(e.deltaY)
      }}>
        <div className="page1">A</div>
        <div className="page2">B</div>
        <div className="page3">C</div>
      </div>

    </div>
  )
}

export default App;