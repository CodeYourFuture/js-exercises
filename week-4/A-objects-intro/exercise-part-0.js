/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/
let laptop = {
  operatingSystem: "windows 7",
  brand: "Dell",
  processor: 'intel dual core i7',
  processorClockSpeed: '2.5GZ',
  primaryMemory: "8GB",
  secondaryMemorySize: "500GB",
  keys: "",
  hasWebcam: ture,
  keys:['numbers', 'alphabet', 'function keys'],
  onPower:function(){
      console.log('getting started');
  },
  onOff:function(){
      console.log('shut down');
  },
  screen: {
    hasTouchScreen: true,
    size: {
      width: 1200,
      height: 1000
    }
  }
};