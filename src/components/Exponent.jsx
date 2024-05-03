const Exponent = ({count, exponent})=>{
    return (
<div className="exponent-counter-container">
    <p className="exponent-label">{count**exponent}</p>
    <p className="exponent-result">{count} * {count} = <span className="total">{count**2}</span></p>
    
  </div>
    )
}
export default Exponent