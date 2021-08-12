
function ErrorMessage({errorMsg}) {
  return (
    <div className="errormsg-container">
        <p className="errormsg-text"> {errorMsg} :(</p>
    </div>
  );
}

export default ErrorMessage;
