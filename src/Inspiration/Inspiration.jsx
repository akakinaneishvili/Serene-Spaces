import Inspiration_1 from "./Inspiration img/Rectangle 49.svg"
import Inspiration_2 from "./Inspiration img/Rectangle 50.svg"
import Inspiration_3 from "./Inspiration img/Rectangle 51.svg"
import Inspiration_4 from "./Inspiration img/Rectangle 52.svg"
function Inspiration (){
    return (
<>

<div className="flex justify-between "> 

<div className="flex-col  " >
<img src={Inspiration_1} alt=""  className=" mb-10"/>
<img src={Inspiration_2} alt=""   className="mb-10" />
</div>
  
  <div className="flex-col  ">
  <img src={Inspiration_3} alt="" className=" mb-40" />
  <img src={Inspiration_4} alt="" className="" />
  </div>

</div>
 



</>


    )
}
export default Inspiration;