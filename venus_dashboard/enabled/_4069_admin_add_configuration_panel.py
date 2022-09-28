# The slug of the panel to be added to HORIZON_CONFIG. Required.
PANEL = 'configuration'
# The slug of the dashboard the PANEL associated with. Required.
PANEL_DASHBOARD = 'admin'
# The slug of the panel group the PANEL is associated with.
PANEL_GROUP = 'venus'

# Python panel class of the PANEL to be added.
ADD_PANEL = 'venus_dashboard.configuration.panel.Configuration'

ADD_INSTALLED_APPS = ['venus_dashboard.configuration']

ADD_ANGULAR_MODULES = ['horizon.dashboard.admin.venus']

# ADD_JS_FILES = ['dashboard/admin/venus.module.js']

AUTO_DISCOVER_STATIC_FILES = True
