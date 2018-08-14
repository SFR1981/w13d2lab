const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {

    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();


  const newSighting = this.createSighting(evt)
  console.log(newSighting);
  PubSub.publish('SightingView:sighting-submitted', newSighting)
}

SightingFormView.prototype.createSighting = function (form) {
    const newSighting = {
      species: form.target[0].value,
      location: form.target[1].value,
      date: form.target[2].value
    }
    return newSighting;
};

module.exports = SightingFormView;
