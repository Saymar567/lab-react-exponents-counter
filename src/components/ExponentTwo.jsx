const ExponentTwo = ({count}) => (
   
   <div className="exponent-counter-container">
    <p className="exponent-label">{count**2}</p>
    <p className="exponent-result">{count} * {count} = <span className="total">{count**2}</span></p>
    
  </div>
);

export default ExponentTwo;