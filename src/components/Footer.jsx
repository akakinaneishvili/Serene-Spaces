

function Footer(){
    return(
        <div className="bg-black w-full h-60 ">


            <div className="w-375 m-auto text-white  flex justify-between pt-25 ">

                <nav>
                    <p className="text-3xl">Serene Spaces</p>

                </nav>

                <nav>
                    <ul>
                        <li>Abuse </li>
                        <li>Blog</li>
                        <li>About Us</li>
                    </ul>


                </nav>

                <nav>
                    <p className="text-2xl">Join Newsletter </p>

                    <nav className="h-22 w-90 flex items-center justify-around">
  
                    <input 
                        type="text" 
                        placeholder="Your Email Address"  
                        className="bg-black text-white w-60 h-11 rounded-2xl border border-white px-4 outline-none placeholder:text-gray-400"
                    />
                    
                  
                    <button className="bg-white text-black w-24 h-11 rounded-2xl font-bold transition-hover hover:bg-gray-200">
                        Submit
                    </button>
                </nav>

                </nav>
             
   
            </div>


        </div>


    )
}
export default Footer;