import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

//-260
class Stripes extends Component {
  state = {
    stripes: [
      {
        background: '#339C82',
        left: 80,
        rotate: 25,
        top: -260,
        delay: 0
      },
      {
        background: '#B2A698',
        left: 215,
        rotate: 25,
        top: -397,
        delay: 200
      },
      {
        background: '#339C82',
        left: 350,
        rotate: 25,
        top: -498,
        delay: 400
      }
    ]
  };

  showStripes = () =>
    this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: '#ffffff',
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0
        }}
        enter={{
          background: [stripe.background],
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top],
          timing: { delay: stripe.delay, duration: 200, ease: easePolyOut },
          events: {
            end() {
              // console.log('animation finished')
            }
          }
        }}
      >
        {({ opacity, left, rotate, top, background }) => {
          return (
            <div
              className="stripe"
              style={{
                background,
                opacity,
                transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`
              }}
            />
          );
        }}
      </Animate>
    ));

  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
