const Container = ({ children }, classes) => {
  return (
    <div className={`max-w-screen-xl mx-auto my-14 px-8 py-24 ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
