//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Controlled",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Controlled = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const [value, setValue] = useState("Hodnota");
    const [feedback, setFeedback] = useState();
    const [message, setMessage] = useState();

    console.log({ value, feedback, message });
    //@@viewOn:private
    const _onButtonClick = () => {
      setValue("test");
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div>
        <UU5.Bricks.Button onClick={_onButtonClick}>Nastavit "test" do pole</UU5.Bricks.Button>
        <UU5.Forms.Text
          value={value}
          feedback={feedback}
          message={message}
          onChange={({ value }) => {
            setValue(value);
          }}
          onChangeFeedback={({ feedback, message }) => {
            setFeedback(feedback);
            setMessage(message);
          }}
          contolled={true}
          required={true}
        />
      </div>
    );
    //@@viewOff:render
  },
});

export default Controlled;
