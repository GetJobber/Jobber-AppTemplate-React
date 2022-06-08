const redirectToJobberOAuth = () => {
  window.location.href =
    "https://api.getjobber.com/api/oauth/authorize?client_id=f384a0cc-d6e4-4dd1-bcc0-d5b120398ad9&redirect_uri=http://localhost:3000/auth";
};

export default redirectToJobberOAuth;
