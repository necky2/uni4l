//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Authorization",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

const STATUS_MESSAGE_MAP = {
  403: "Not authorized",
  default: "Unexpected error",
};

export const Authorization = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    error: UU5.PropTypes.object.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <UU5.Common.Error content={STATUS_MESSAGE_MAP[props.error.status] ?? STATUS_MESSAGE_MAP.default} />;
    //@@viewOff:render
  },
});

export default Authorization;
