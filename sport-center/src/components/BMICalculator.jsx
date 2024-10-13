import bmipic from "../images/bmi-index.jpg"
import '../App.css'
import { useState } from "react";


function BMICalculator() {

    const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

   
  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const calculatedBmi = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(2));
    } else {
      alert("Lütfen geçerli bir ağırlık ve yükseklik girin.");
    }
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    setWeight(value);
    calculateBMI(value, height);
  };

  const handleHeightChange = (e) => {
    const value = e.target.value;
    setHeight(value);
    calculateBMI(weight, value);
  };

    return ( <>
     <section className="calculator-bmi">
        <div className="calculator">
            <div className="bmi-index">
                <h2>BMI Calculator</h2>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of 
                    classical Latin literature from 45 BC, making it over 2000 years ald.
                </p>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of 
                    classical Latin literature from 45 BC, making it over 2000 years ald.
                </p>
                <div className="input-info">
                <div>
                    <input    value={height}
            onChange={(e) => setHeight(e.target.value)} type="number"  id="height" placeholder="Your Height" />
                    <span>cm</span>
                </div>
                <div>
                <input  onBlur={calculateBMI} value={weight}
            onChange={(e) => setWeight(e.target.value)} type="number"  id="weight" placeholder="Your Weight" />
                <span>kg</span>
                </div>
                </div>
            </div>
            <div className="action">
                <div className="result"><h4>YOUR BMI :</h4>{bmi && <h4>{bmi}</h4>}<span style={{paddingLeft:"1.2rem"}} id="result"></span></div>
                <br/><br/>
                <div className="img-bmi">
                    <div className="after"></div>
                    <img className="bmi-index-img" src={bmipic} alt="" />
                </div>
            </div>
        </div>
        
    </section>
    </> );
}
export default BMICalculator;