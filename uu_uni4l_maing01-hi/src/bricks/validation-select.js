//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ValidationSelect",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const ValidationSelect = createVisualComponent({
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
      const isOddSelected = opt.value.some((value) => parseInt(value) % 2 === 1);
      const isEvenSelected = opt.value.some((value) => parseInt(value) % 2 === 0);

      if (isOddSelected && isEvenSelected)
        return { value: opt.value, feedback: "error", message: "Odd and even values cannot be combined." };

      return { value: opt.value, feedback: "initial", message: null };
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <UU5.Forms.Select onValidate={_onValidate} multiple={true} controlled={false}>
        <UU5.Forms.Select.Option value="1" />
        <UU5.Forms.Select.Option value="8" />
        <UU5.Forms.Select.Option value="11" />
        <UU5.Forms.Select.Option value="20" />
        <UU5.Forms.Select.Option value="23" />
        <UU5.Forms.Select.Option value="28" />
        <UU5.Forms.Select.Option value="31" />
        <UU5.Forms.Select.Option value="36" />
      </UU5.Forms.Select>
    );
    //@@viewOff:render
  },
});

export default ValidationSelect;
