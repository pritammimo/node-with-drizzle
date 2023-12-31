const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  // const errorHandler = (err, req, res, next) => {
  //   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //   res.status(statusCode);
  //   res.json({
  //     message: err.message,
  //     stack: process.env.NODE_ENV === "production" ? null : err.satck,
  //   });
  // };
  const errorHandler=(err,req,res,next)=>{
    let error={...err}
    error.message=err.message;

res.status(error.statusCode||500).json({
    success:false,
    error:error.message || 'Server Error'
});
}
  export {notFound,errorHandler}