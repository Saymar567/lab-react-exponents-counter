const ExponentThree = ({count}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count**3}</p>
    <p className="exponent-result">{count} * {count} * {count} = <span className="total">{count**3}</span></p>
    
  </div>
);

export default ExponentThree;