const redirectToJobberOAuth = () => {
  if (process.env.NODE_ENV === "test") return;
  window.location.href = `${process.env.REACT_APP_JOBBER_API_URL}?client_id=${process.env.REACT_APP_JOBBER_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`;
};

export default redirectToJobberOAuth;
