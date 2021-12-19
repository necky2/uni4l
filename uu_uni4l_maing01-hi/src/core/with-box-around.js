//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Cfg from "./config/config";
//@@viewOff:imports

function withBoxAround(Component, displayName) {
  return createComponent({
    //@@viewOn:statics
    displayName,
    //@@viewOff:statics

    //@@viewOn:myHoc
    propTypes: {},
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {},
    //@@viewOff:defaultProps

    //@@viewOn:render
    render(props) {
      return (
        <div className={boxStyle}>
          <Component {...props} />
        </div>
      );
    },
  });
  //@@viewOff:render
}

export default withBoxAround;

const boxStyle = Cfg.Css.css`
  padding: 16px;
  background-color: lightblue;
  margin-bottom: 8px;
`;
