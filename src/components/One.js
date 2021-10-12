
import React , { useState, useEffect } from 'react'
import './Onecss.css'
export default function One() {
    var ip01 = 20;
    const [num01, setNum01] = useState(1 * ip01);
    var ip02 = 10;
    const [num02, setNum02] = useState(1 * ip02);
    var ip03 = 5;
    const [num03, setNum03] = useState(1 * ip03);
    var ip04 = 15;
    const [num04, setNum04] = useState(1 * ip04);
    var ip05 = 5;
    const [num05, setNum05] = useState(1 * ip05);
const [result,setResult] =useState(0)
useEffect(()=>{
   setResult(num01 + num02 + num03 + num04 + num05)
})
    return (
        <div>
             <h1>Cart Exmaple</h1>
           
            <div className="row header">
        <div className="col-3">
            <h3>Item</h3>
        </div>
        <div className="col-3">
            <h3>Unit Price</h3>
        </div>
        <div className="col-3">
            <h3>Quantity</h3>
        </div>
        <div className="col-3">
            <h3 className="totalprice">Total Price</h3>
        </div>
    </div>

    <div className="row">
        <div className="col-3">meets</div>
        <div className="col-3">20</div>
        <div className="col-3"> 
        <input type="number"  min="1" placeholder="1"
         onChange={(e)=>setNum01(e.target.value * ip01)}/></div>
        
        <div className="col-3">{num01}
        </div>
      
    </div>
    <div className="row">
        <div className="col-3">Chikens</div>
        <div className="col-3">10</div>
        <div className="col-3"><input type="number"  min="1" placeholder="1"
                    onChange={(e)=>setNum02(e.target.value * ip02)} />
                    </div>
                    
        <div className="col-3">{num02}</div>
    </div>
    <div className="row">
        <div className="col-3">vegetables</div>
        <div className="col-3">15</div>
        <div className="col-3"><input type="number"  min="1" placeholder="1"
                    onChange={(e)=>setNum04(e.target.value * ip04)} /></div>
        <div className="col-3">{num04}</div>
    </div>
    <div className="row">
        <div className="col-3">piza</div>
        <div className="col-3">15</div>
        <div className="col-3"><input type="number"  min="1" placeholder="1"
                    onChange={(e)=>setNum05(e.target.value * ip05)} /></div>
        <div className="col-3">{num05}</div>
    </div>
    <div className="row">
        <div className="col-3">Sweets</div>
        <div className="col-3">5</div>
        <div className="col-3"><input type="number"  min="1" placeholder="1"
                    onChange={(e)=>setNum03(e.target.value * ip03)} /></div>
        <div className="col-3">{num03}</div>
    </div>

    <div class="row result">
<h2>Cart Total  &nbsp;&nbsp;&nbsp;{result} </h2>
    </div>
    
        </div>
    )
}
