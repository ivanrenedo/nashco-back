'use strict';

/**
 * work-space service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-space.work-space');
