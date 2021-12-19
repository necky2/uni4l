import UU5 from "uu5g04";
import UuUni4l from "uu_uni4l_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuUni4l.Bricks.SampleText`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuUni4l.Bricks.SampleText />);
    expect(wrapper).toMatchSnapshot();
  });
});
