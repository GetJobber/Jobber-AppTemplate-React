const redirectToJobber = () => {
  if (process.env.NODE_ENV === "test") return;
  window.location.href = "https://getjobber.com/";
};

export default redirectToJobber;
