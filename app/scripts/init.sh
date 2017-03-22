git clone react dashboard
if tag git checkout tag
cp -r repository/examples/src /app
cp -r repository/examples/settings.js


workflowi 0:
drush dl react_dashboard
react_dashboard -> init.sh
cp -r react_dashboard client_dashboard
update info file etc
do dashboard development

workflow 1:
react-dash (npm repo) increment minor version 
push
git hook triggers: 
    jenkins script to copy react-dash/examples app to the react_dashboard boilerplate/app
    run circle ci tests / sanity check

