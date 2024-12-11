import { useEffect, useRef, useState } from "react";

const CountUpNumber = ({ start = 0, end }) => {
    const [value, setValue] = useState(null)
    const ref = useRef(start)

    const counter = end / 200;

    const Count = () => {
        if(ref.current < end){
            const result = Math.ceil(ref.current + counter);
        if(result > end) return setValue(end);
            setValue(result);
            ref.current = result;
        }
        setTimeout(Count, 70)
    };

    useEffect(() => {
      let isMounted = true;
      if(isMounted){
        Count();
      }
      return () => (isMounted = false);

    }, [end]);
    
    return(
        
        <span className="counter">{value} +</span>
        
    );
}
export default CountUpNumber;