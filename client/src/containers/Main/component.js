import React from 'react';
import styles from './main.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
      {color: 'url(https://unsplash.it/1900/1024/?image=497)',},
      {color: 'url(https://unsplash.it/1900/1024/?image=291)',},
      {color: 'url(https://unsplash.it/1900/1024/?image=786)',},
      {color: 'url(https://unsplash.it/1900/1024/?image=768)',},
      {color: 'url(https://unsplash.it/1900/1024/?image=726)',},
      {color: 'url(https://unsplash.it/1900/1024/?image=821)',}],
      autoplay: true,
      active: 0
    };

    this.state.max = this.state.slides.length;
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.timer, 3000); 
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timer() {
    if (this.state.autoplay === true) {
      if (this.state.active === this.state.max - 1) {
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

  toggleAutoPlay(){
    this.setState({
      autoplay: !this.state.autoplay
    });
  }

  nextOne(){
    if (this.state.active < this.state.max - 1) {
      this.setState({
        active: this.state.active + 1
      });
    }
  }

  prevOne(){
    if (this.state.active > 0) {
      this.setState({
        active: this.state.active - 1
      });
    }
  }

  dots(index, event){
    event.preventDefault();
    this.setState({
      active: index
    });
  }

  isActive(value){
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

    let slides = this.state.slides.map((item, index) => (<div className={styles.slide} key={index} style={{backgroundImage: item.color}}></div>));

    let dots = this.state.slides.map( (item, index) => (
      <li className={this.isActive(index) + ' dots' } key={index} onClick={this.dots.bind(this, index)}>
        <a>&#9679;</a>
      </li>
    ));

    let playStop;

    if(this.state.autoplay){
      playStop =  <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
                  </svg>;
    }
    else {
      playStop =  <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
                  </svg>;
    }

    return (
      <div>
        <div className={styles.slider}>
          <div className={styles.slideWrapper} style={style}>
            {slides}
          </div>
          <button className='arrows prev' onClick={this.prevOne.bind(this)} >
            <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
              <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
              <path d='M0 0h24v24H0z' fill='none'/>
            </svg>
          </button>
          <button className='arrows next' onClick={this.nextOne.bind(this)} > 
            <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
              <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
              <path d='M0 0h24v24H0z' fill='none'/>
            </svg>
          </button>
          <ul className='dots_container'>
            {dots}
          </ul>
          <a className='toggle-play' onClick={this.toggleAutoPlay.bind(this)}> 
            {playStop}
          </a>
        </div>
      </div>
    );
  }
}

export default function Main() {
	return (
    <div className={styles.container}>
			<Slider/>
    </div>
	);
}
