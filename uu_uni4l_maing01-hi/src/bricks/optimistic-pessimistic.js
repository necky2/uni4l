//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "OptimisticPessimistic",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const OptimisticPessimistic = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOptimistic, setIsOptimistic] = useState();
    const [shouldFail, setShouldFail] = useState();

    //@@viewOn:private
    const _openModal = (isOptimistic, shouldFail) => {
      setIsModalOpen(true);
      setIsOptimistic(isOptimistic);
      setShouldFail(shouldFail);
    };

    const _onSave = async ({ component }) => {
      if (isOptimistic) setIsModalOpen(false);

      setTimeout(() => {
        if (isOptimistic) {
          UU5.Environment.getPage()
            .getAlertBus()
            .addAlert({
              content: shouldFail ? "Saving failed" : "Saved successfully",
              colorSchema: shouldFail ? "danger" : "success",
            });
        } else {
          if (shouldFail) {
            component.saveFail();
          } else {
            component.saveDone();
          }
        }
      }, 3000);
    };

    const _onSaveFail = ({ component }) => {
      component.getAlertBus().setAlert({
        colorSchema: "danger",
        content: "Saving failed",
      });
    };

    const _onSaveDone = () => {
      setIsModalOpen(false);
    };

    const _getHeader = () => {
      if (!isModalOpen) return null;
      return "Header";
    };

    const _getContent = () => {
      if (!isModalOpen) return null;
      return (
        <UU5.Forms.ContextForm
          onCancel={() => setIsModalOpen(false)}
          onSave={_onSave}
          onSaveFail={isOptimistic ? undefined : _onSaveFail}
          onSaveDone={isOptimistic ? undefined : _onSaveDone}
        >
          <UU5.Forms.Text label="Text" required={true} />
        </UU5.Forms.ContextForm>
      );
    };

    const _getFooter = () => {
      if (!isModalOpen) return null;
      return <UU5.Forms.ContextControls />;
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div>
        <UU5.Forms.ContextModal
          header={_getHeader()}
          content={_getContent()}
          footer={_getFooter()}
          shown={isModalOpen}
          controlled={true}
        />
        <UU5.Bricks.Button
          onClick={() => {
            _openModal(true, false);
          }}
        >
          Optimistic - success
        </UU5.Bricks.Button>
        <UU5.Bricks.Button
          onClick={() => {
            _openModal(true, true);
          }}
        >
          Optimistic - fail
        </UU5.Bricks.Button>
        <UU5.Bricks.Button
          onClick={() => {
            _openModal(false, false);
          }}
        >
          Pessimistic - success
        </UU5.Bricks.Button>
        <UU5.Bricks.Button
          onClick={() => {
            _openModal(false, true);
          }}
        >
          Pessimistic - fail
        </UU5.Bricks.Button>
      </div>
    );
    //@@viewOff:render
  },
});

export default OptimisticPessimistic;
