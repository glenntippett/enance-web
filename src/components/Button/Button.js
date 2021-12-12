import './button.css';

export const ButtonPrimary = (props) => {
  return (
    <span className={'btn-primary'}>{props.buttonText}</span>
  );
};
