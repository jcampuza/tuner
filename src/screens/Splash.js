import React, { Component } from 'react';
import './Splash.css';

class Splash extends Component {
  constructor() {
      super();
      this.state = {
          loadingCounter: 4,
          scaleMax: 1.5
      }
  }

  componentDidMount() {
      this.startLoading();
  }

  navigateToHome() {
      console.log(this.props.history);
      this.props.history.push('/home')
  }

  // hsl(300, 80%, 29%) default splash color
  async scaleDownAnimation(progress) {
      const h = 300 - 45 * progress / 1200;
      const hsl = `hsl(${h}, 80%, 29%)`
      Object.assign(this.loadingCount.style, {
          transform: `scale(${Math.max(this.state.scaleMax - (.5 * progress / 1200), 1)})`,
          backgroundColor: hsl
      });
  }

  async startLoading() {
      while (this.state.loadingCounter >= 0) {
        await animationFrameTimer.call(this, 1200, this.scaleDownAnimation, this.decrementCounter);
      }
      this.navigateToHome();
  }

  decrementCounter() {
    const newCount = this.state.loadingCounter - 1;
    this.setState((prevState, props) => ({loadingCounter: newCount}))
  }

  render() {
    return (
        <div className="Splash">
            <h1 className={'title Splash__cta'}>Tune on the Go!</h1>
            <h2 className={'Splash__loading'}>Loading...</h2>
            <h3 ref={(loadingCount) => this.loadingCount = loadingCount} className={"Splash__loading--text"}>{this.state.loadingCounter}</h3>
        </div>
    );
  }
}

const animationFrameTimer = async function(ms, callbackLoop = null, endCallback = null) {
    let start = null;
    return new Promise((resolve, reject) => {
        const animationLoop = (timestamp) => {
            if (!start) start = timestamp;
            let progress = timestamp - start;
            if (callbackLoop && typeof callbackLoop === 'function') callbackLoop.call(this, progress);
            if (progress < ms) {
                this.animationId = window.requestAnimationFrame(animationLoop);
            } else {
                if (endCallback && typeof endCallback === 'function') endCallback.call(this);
                resolve(true);
            }
        }
        this.animationId = window.requestAnimationFrame(animationLoop);
    });
}


export default Splash;
