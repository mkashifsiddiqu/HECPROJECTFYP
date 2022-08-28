/* eslint-disable import/no-anonymous-default-export */
export default `
body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.loader {
    position: absolute;
    left: 0;
    top: 0;
     bottom: 0;
     right: 0;
        height: 140px;
        width: 140px;
        margin: auto;
        border: 3px solid transparent;
        border-top-color: #0e9755;
        border-bottom-color: #0e9755;
        border-radius: 50%;
        z-index: 2;
        -webkit-animation: 3s linear infinite spin;
        animation: 3s linear infinite spin;
}
loading1{
    position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  height: 120px;
  width: 120px;
  margin: auto;
  border: 3px solid transparent;
  border-top-color: #3e3c77;
  border-bottom-color: #3e3c77;
  border-radius: 50%;
  z-index: 2;
  -webkit-animation: 2s linear infinite spin;
  animation: 2s linear infinite spin;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading2{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100px;
    width: 100px;
    margin: auto;
    border: 3px solid transparent;
    border-top-color: #0e9755;
    border-bottom-color: #0e9755;
    border-radius: 50%;
    z-index: 2;
    -webkit-animation: 1s linear infinite spin;
    animation: 1s linear infinite spin;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loading3{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 10vh;
    width: 10vh;
    margin: auto;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes spin {
 0% {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
 }
 50% {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
   }
 100% {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
 }
}`;