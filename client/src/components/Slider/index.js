import React, { Component } from 'react';
import styles from './slider.css';
import Slide from './Slide.js';
import Button from './Button.js';
//import Dots from './Dots.js';
import pause from '../../assets/img/svg/slider/pause.svg';
import play from '../../assets/img/svg/slider/play.svg';
import next from '../../assets/img/svg/slider/arrow_next.svg';
import prev from '../../assets/img/svg/slider/arrow_prev.svg';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      autoplay: this.props.autoplay,
      active: 0,
      max: 0
    };
    this.timer = this.timer.bind(this);
    this.toggleAutoPlay = this.toggleAutoPlay.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.dots = this.dots.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.timer, this.props.timing);
  }

  componentWillReceiveProps(newProps){
    if(this.props != newProps) {
      this.setState({
        slides: newProps.nowPlaying,
        max: newProps.nowPlaying.length
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timer() {
    if(this.state.autoplay === true) {
      if(this.state.active === this.state.max - 1) {
        this.setState({
          active: 0
        });
      }
      else {
        this.setState({
          active: this.state.active + 1
        });
      }
      this.setState({
        active: this.state.active
      });
    }
  }

  toggleAutoPlay() {
    this.setState({
      autoplay: !this.state.autoplay
    });
  }

  nextSlide() {
    if(this.state.active < this.state.max - 1) {
      this.setState({
        active: this.state.active + 1
      });
    }
  }

  prevSlide() {
    if(this.state.active > 0) {
      this.setState({
        active: this.state.active - 1
      });
    }
  }

  dots(index, event) {
    event.preventDefault();
    this.setState({
      active: index
    });
  }

  isActive(value) {
    if(this.state.active === value){
      return 'active';
    }
  }

  render() {
    let transition = this.state.active * - 100;
    let style = {
      width: ( this.state.slides.length * 100 ) + 'vw',
      transform: 'translateX(' + transition + 'vw)'
    };

    let slides;
    this.state.slides.length > 0
    ? slides = this.props.nowPlaying.map((item, index) => (
      <Slide
        key={index}
        slideData={item} />
    ))
    : slides = 'loading';

    let dots = '';
    /*
    let dots;
    this.state.slides.length > 0
    ? dots = this.props.nowPlaying.map((item, index) => (
      <Dots
        key={index}
        active={this.isActive(index)}
        selectSlide={this.dots.bind(this, index)}
        />
    ))
    : dots = '';
    */

    let playStop;
    this.state.autoplay
      ? playStop = pause
      : playStop = play;

    return (
      <div className={styles.slider}>
        <div className={styles.sliderWrapper} style={style}>{ slides }</div>
        <ul className='dots_container'>{ dots }</ul>
        <Button classes='arrows prev' display={this.props.actions} action={this.prevSlide} image={prev} />
        <Button classes='arrows next' display={this.props.actions} action={this.nextSlide} image={next} />
        <Button classes='toggle-play' display={this.props.actions} action={this.toggleAutoPlay.bind(this)} image={playStop} />
      </div>
    );
  }
}
