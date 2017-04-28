require 'yaml'
require 'pp'

path = File.expand_path("dkan/test/behat.yml")
data = YAML::load_file(path)
data["default"]["suites"]["dkan"]["contexts"].push("Drupal\\DKANExtension\\Context\\DkanDashContext")
data["default"].delete("formatters")
File.open(path, "w") {|f| f.write data.to_yaml }
