import './banner.css';

const Banner = (props) => {
  return (
    <section className="banner">
      {props.children}
    </section>
  )
}

export default Banner;
