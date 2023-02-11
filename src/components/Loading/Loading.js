const Loading = ({ center, my }) => {
  return (
    <div
      className={center ? 'loading loading-center' : 'loading'}
      style={{ marginTop: my, marginBottom: my }}
    ></div>
  );
};

export default Loading;
