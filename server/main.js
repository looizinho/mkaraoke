import { Meteor } from 'meteor/meteor';

const Musicas = new Mongo.Collection('musicas');

Meteor.startup(() => {
  Meteor.defer(async () => {
    await Meteor.call('getMusics', 'anitta', (err, res) => {
      console.log(err, res);
    })
  })
});


Meteor.methods({
  async getMusics(artista) {
    return await Musicas.find({artista: artista}).fetch()
  }
})
