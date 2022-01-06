//higher order component to add same functionality to each page

const MotionHoc = (Component) => {
  return function HOC() {
    return (
        <Component />
    );
  };
};

export default MotionHoc;
