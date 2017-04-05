/**
 * @file
 * Provides options for chart visualization.
 */

(function ($) {

  Drupal.behaviors.jsonEditor = {
    attach: function (context) {
      var field = document.getElementById('edit-field-dash-settings-und-0-value');
      var json = JSON.parse(field.value);
      var container = document.getElementById('field-dash-settings-add-more-wrapper');
      var options = {
        mode: 'tree',
        modes: ['code', 'form', 'text', 'tree', 'view']
      };
      var editor = new JSONEditor(container, options);
      editor.set(json);

      $('#react-dashboard-node-form').submit(function( event ) {
        var json = editor.get();
        field.value = JSON.stringify(json);
      });
    }
  };

})(jQuery);