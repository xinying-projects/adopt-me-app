import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    var active = Number(e.target.dataset.index);
    this.setState({
      active,
    });
  };

  render() {
    var { active } = this.state;
    var { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((img, index) => (
            // eslint-disable-next-line
            <img
              key={img}
              src={img}
              alt="animal thumbnail"
              className={index == active ? "active" : ""}
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
