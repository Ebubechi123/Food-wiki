import { Children } from "react/cjs/react.production.min";


const Button = (
    {
        children,
        style,
        OnClick
    }
) => {
    return (
        <button onClick={OnClick} style={style}>{children}</button>
      );
}
 
export default Button;