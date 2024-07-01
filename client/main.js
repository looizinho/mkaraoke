import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

 const Musicas = new Mongo.Collection('musicas');

import './main.html';

var getMusicas = new ReactiveVar()


Template.listMusics.onRendered(function listMusicsOnRendered() {
  Meteor.defer(async () => {
    await Meteor.call('getMusics', 'anitta', (err, res) => {
      getMusicas.set(res)
    })
  })
})

Template.listMusics.helpers({
  getMusics() {
    // console.log(getMusicas.get());
    return getMusicas.get()
  }
})

Template.listMusics.events({
})  