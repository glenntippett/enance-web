import './button.css';

const ButtonPrimary = (props) => {
  return (
    <span className={'btn-primary'}>{props.buttonText}</span>
  );
};

export default ButtonPrimary;
