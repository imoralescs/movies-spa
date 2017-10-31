import React from 'react';

const SlideOne= () => {
	let background = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1484151709479-3996843263cf?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
		width: '600px',
		height: '600px'
  };

  return <div style={background} className="slide"></div>;
};

const SlideTwo= () => {
	let background = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1486829776724-8495de073f81?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
		width: '600px',
		height: '600px'
  };

  return <div style={background} className="slide"></div>;
};

const SlideThree= () => {
	let background = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1496170804262-975019a5cd34?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
		width: '600px',
		height: '600px'
  };

  return <div style={background} className="slide"></div>;
};

const RightArrow = (props) => {
  return (
		<div onClick={props.nextSlide} className="nextArrow">
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true">Right</i>
    </div>
  );
};

const LeftArrow = (props) => {
  return (
		<div onClick={props.previousSlide} className="backArrow">
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true">Left</i>
    </div>
  );
};

class Slider extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			slideCount: 1,
			intervalId : null
		};

		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
		this.timer = this.timer.bind(this);
  }

	componentDidMount(){
		var intervalId = setInterval(this.timer, 8000);
		// store intervalId in the state so it can be accessed later:
		this.setState({intervalId: intervalId});
	}

	nextSlide() {
      this.setState({ slideCount: this.state.slideCount + 1 });
  }

  previousSlide() {
      this.setState({ slideCount: this.state.slideCount - 1 });
  }

	timer() {
			let self = this;
			if(self.state.slideCount == 3){
				self.setState({ slideCount: 1 });
			}
			else {
				this.setState({ slideCount: this.state.slideCount + 1 });
			}
  }

  render() {
    return (
      <div className="slider">
			{ this.state.slideCount === 1 ? <SlideOne /> : null }
			{ this.state.slideCount === 2 ? <SlideTwo /> : null }
			{ this.state.slideCount === 3 ? <SlideThree /> : null }

        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />
      </div>
    );
  }
}

export default function Main() {
	return (
    <div>
      <h1>Main</h1>
			<Slider/>
    </div>
	);
}
