AFRAME.registerComponent("voicecontrol", {
  init: function () {
    console.log("voicecontrol called");
  },
  tick: function (time, timeDelta) {
    // get scene
    var sceneEl = this.el; // Or this.el since we're in a component.
    // get model
    var mandalaEl = sceneEl.querySelector("#interactiveMandala");
    // get current frequency
    var currentFreq = freqAvg();
    var positionChange = currentFreq / 16 + 1;
    //console.log("position change factor " + positionChange);
    mandalaEl.setAttribute("animation", "to", {
      x: positionChange,
      y: 0,
      z: positionChange,
    });
    console.log(mandalaEl.getAttribute("animation", "to"));
  },
});
