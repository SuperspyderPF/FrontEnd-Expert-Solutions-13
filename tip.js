import React from 'react';

export default function TipCalculator() {
  const [bill, setBill]=useState(50)
  const [tip,setTip]=useState(18);
  const [people,setPeople]=useState(1)
  const handleBill=(event)=>{
    const value=event.target.value
    setBill(value)
  }
    const handleTip=(event)=>{
    const value=event.target.value
    setTip(value)
  }
    const handlePeople=(event)=>{
    const value=event.target.value
    setPeople(value)
  }
  const totalTip=(bill*(tip/100)).toFixed(2), tipPerPerson=(totalTip/people).toFixed(2)
  

  return (
    <>
      <lable>
        Bill
        <input type='number' value={bill}  min='0'  onChange={handleBill}/>
      </lable>
      <lable>
        Tip Precentage
        <input type='number' value={tip}  min='0' onChange={handleTip}/>
      </lable>
      <lable>
        Number of People
        <input type='number' value={people} min='1' onChange={handlePeople}/>
      </lable>
      <p>Total Tip: {totalTip > 0 ?`$${totalTip}`:'-'}</p>
      <p>Tip Per Person: {tipPerPerson > 0 ?`$${tipPerPerson}`:'-'}</p>
     
    
    </>
  );
}