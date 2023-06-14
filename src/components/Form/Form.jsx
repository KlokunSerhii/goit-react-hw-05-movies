import { BsArrowRightCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Label, Input, Submit } from './Form.styled';

function Form({ onSubmit }) {
  const handlerSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements.input.value;
    onSubmit(form);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <Label>
        <Input type="text" name="input" placeholder="Search film" />
        <Submit type="submit">
          <BsArrowRightCircleFill />
        </Submit>
      </Label>
    </form>
  );
}
Form.propTypes = {
  onSubmit: PropTypes.func,
};
export default Form;

//prototype
