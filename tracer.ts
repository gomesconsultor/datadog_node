import tracer from "dd-trace";

console.log('entrou aqui');

tracer.init({
  logInjection: true
}); 


export default tracer;

