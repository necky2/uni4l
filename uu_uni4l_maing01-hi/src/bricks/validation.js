//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Validation",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Validation = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const _onValidate = (opt) => {
      if (opt.value.toLowerCase().includes("x")) {
        return { value: opt.value, feedback: "error", message: "Value cannot contain the letter X" };
      }
      if (opt.value.toLowerCase().includes("y")) {
        return { value: opt.value, feedback: "warning", message: "Value shouldn't contain the letter Y" };
      }
      return { value: opt.value, feedback: "initial", message: null };
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <UU5.Forms.Text onValidate={_onValidate} controlled={false} />;
    //@@viewOff:render
  },
});

export default Validation;
