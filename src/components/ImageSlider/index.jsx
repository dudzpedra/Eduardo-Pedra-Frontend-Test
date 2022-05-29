import React, { Component } from "react";
import left from "../../assets/images/arrow-left.svg";
import right from "../../assets/images/arrow-right.svg";
import { SliderButton } from "./styles/Button";
import { SliderWrapper } from "./styles/Wrapper";

class ImageSlider extends Component {
  render() {
    return (
      <SliderWrapper>
        <SliderButton onClick={this.props.prev}>
          <img src={left} alt="Previous" />
        </SliderButton>
        <SliderButton onClick={this.props.next}>
          <img src={right} alt="Next" />
        </SliderButton>
      </SliderWrapper>
    );
  }
}

export default ImageSlider;
