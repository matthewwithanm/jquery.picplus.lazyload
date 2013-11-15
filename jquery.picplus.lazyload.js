/*jslint browser: true, nomen: true, todo: true */
(function ($) {
    'use strict';

    $.picplus.config().plugins.push({
        create: function (picplus) {
            return {
                initialize: function () {
                    var watcher = window.scrollMonitor.create(picplus.$el[0]);
                    watcher.enterViewport(function () {
                        picplus.load();
                    });
                }
            };
        }
    });

}(this.jQuery));
