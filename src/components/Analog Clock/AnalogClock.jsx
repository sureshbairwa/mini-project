import React, { Component } from 'react';
import analogimg2 from './analogimg2.png';
import sea2 from './sea2.png';




export default class AnalogClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    const secondangle = {
      transform: `rotate(${time.getSeconds() * 6}deg)`,
    };
    const minuteangle = {
      transform: `rotate(${time.getMinutes() * 6}deg)`,
    };
    const hourangle = {
      transform: `rotate(${(time.getHours() % 12) * 30 + time.getMinutes() * 0.5}deg)`,
    };

    return (
     
        <div className="bg-green-400 h-screen flex items-center justify-center"
        style={{
            backgroundImage: `url(${sea2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          id='analogclock'
        >
      <div
        className='m-auto  relative w-[500px] h-[500px]  rounded-full flex items-center justify-center'
        style={{
            backgroundImage: `url(${analogimg2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
      >
        
        <div className="absolute w-[20px] h-[20px] rounded-full bg-amber-100 border-2 border-white z-20"></div>
       
        <div
          className="absolute bg-[#000036] origin-bottom"
          style={{
            width: '12px',
            height: '100px',
            transform: hourangle.transform,
            transformOrigin: 'bottom center',
            left: '50%',
            top: '50%',
            marginLeft: '-6px', 
            marginTop: '-100px' 
          }}
        >
          <div className="absolute w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px] border-l-transparent border-r-transparent border-b-[#000036] top-[-24px] left-1/2 transform -translate-x-1/2"></div>
        </div>
        
       
        <div
          className="absolute bg-[#444] origin-bottom"
          style={{
            width: '8px',
            height: '140px',
            transform: minuteangle.transform,
            transformOrigin: 'bottom center',
            left: '50%',
            top: '50%',
            marginLeft: '-4px',
            marginTop: '-140px'
          }}
        >
          <div className="absolute w-0 h-0 border-l-[8px] border-r-[8px] border-b-[16px] border-l-transparent border-r-transparent border-b-[#444] top-[-16px] left-1/2 transform -translate-x-1/2"></div>
        </div>
       
        <div
          className="absolute bg-[#003366] origin-bottom"
          style={{
            width: '4px',
            height: '200px',
            transform: secondangle.transform,
            transformOrigin: 'bottom center',
            left: '50%',
            top: '50%',
            marginLeft: '-2px', 
            marginTop: '-200px' 
          }}
        >
          <div className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-l-transparent border-r-transparent border-b-grey-500 top-[-12px] left-1/2 transform -translate-x-1/2"></div>
        </div>

       
        {['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].map((number, index) => {
          const angle = index * 30;
          const style = {
            transform: `rotate(${angle}deg) translate(220px) rotate(-${angle}deg)`,
            position: 'absolute',
            textAlign: 'center',
          };
          return (
            <span key={index} className="font-bold text-[32px]" style={style}>
             
            </span>
          );
        })}
      </div>
      </div>
    );
  }
}
