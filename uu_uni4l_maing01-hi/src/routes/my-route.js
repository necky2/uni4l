//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Controlled from "../bricks/controlled";
import Uncontolled from "../bricks/uncontolled";
import OptimisticPessimistic from "../bricks/optimistic-pessimistic";
import Authorization from "../bricks/authorization";
import SampleText from "../bricks/sample-text";
import withBoxAround from "../core/with-box-around";
import { DayConstants } from "../core/constants";
import Validation from "../bricks/validation";
import ValidationSelect from "../bricks/validation-select";

const SampleTextWithBoxAround = withBoxAround(SampleText, "SampleTextWithBoxAround");
const TextInputWithBoxAround = withBoxAround(UU5.Forms.Text, "TextInputWithBoxAround");
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "MyRoute",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const MyRoute = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
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
    return (
      <UU5.Bricks.Container>
        <h2>Uncontrolled</h2>
        <Uncontolled />
        <h2>Controlled</h2>
        <Controlled />
        <h2>Validation</h2>
        <Validation />
        <ValidationSelect />
        <h2>Optimistic / Pessimistic approach</h2>
        <OptimisticPessimistic />
        <h2>Authorization Error</h2>
        <Authorization error={{ status: 403 }} /> {/* Mock "error" that would be returned from server */}
        <Authorization error={{ status: 400 }} /> {/* Mock "error" that would be returned from server */}
        <h2>HOC</h2>
        <SampleText />
        <SampleTextWithBoxAround />
        <TextInputWithBoxAround />
        <h2>Named Import/Export test</h2>
        First day of week: {DayConstants.FIRST_DAY_OF_WEEK}
        <h2>Environment</h2>
        Environment name: {UU5.Environment.App.environmentName}
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  },
});

export default MyRoute;
