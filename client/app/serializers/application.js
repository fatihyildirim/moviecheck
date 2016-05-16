import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeSingleResponse: function(store, primaryModelClass, payload, id, requestType) {
        var typeKey = primaryModelClass.modelName;
        var newPayload = {};
        newPayload[typeKey] = payload;

        return this._normalizeResponse(store, primaryModelClass, newPayload, id, requestType, true);
    },

    normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
        var pluralTypeKey = Ember.Inflector.inflector.pluralize(primaryModelClass.modelName);
        payload[pluralTypeKey] = payload;

        return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, false);
    },

    serializeIntoHash: function(hash, type, record, options) {
        Ember.merge(hash, this.serialize(record, options));
    }
});
