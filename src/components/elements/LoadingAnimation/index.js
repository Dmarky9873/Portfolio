import Loader from 'react-loaders';

const LoadingAnimation = () => {
  let loaderOptions = [
    'pacman',
    'ball-scale-ripple-multiple',
    'ball-beat',
    'line-scale-random',
    'cube-transition',
    'semi-circle-spin',
  ];

//   let i = Math.floor(Math.random() * loaderOptions.length);

  let choice = loaderOptions[2];

  return <Loader type={choice} />;
};

export default LoadingAnimation;
