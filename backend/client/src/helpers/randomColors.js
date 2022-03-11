const randomColors = () => {
  const colors = [
    " is-primary",
    " is-info",
    " is-success",
    " is-warning",
    " is-danger",
  ];
  return colors[Math.floor(Math.random() * (4 - 0 + 1) + 0)];
};

export default randomColors;
