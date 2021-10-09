import './button.css';

const ButtonPrimary = (props) => {
  return (
    <a href="/"className={'btn-primary'}>{props.buttonText}</a>
  )
}

export default ButtonPrimary;
