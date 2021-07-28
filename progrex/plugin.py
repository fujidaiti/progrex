from tensorboard.plugins import base_plugin
import os
import werkzeug
from werkzeug import wrappers

# https://github.com/tensorflow/tensorboard/blob/master/ADDING_A_PLUGIN.md


class ProgrexPlugin(base_plugin.TBPlugin):
    plugin_name = 'progrex'
    entry_point = 'index.js'

    def __init__(self, context):
        super().__init__(context)

    def get_plugin_apps(self):
        return {
            "/index.js": self._serve_js,
        }

    def is_active(self):
        return True

    def frontend_metadata(self):
        return base_plugin.FrontendMetadata(
            es_module_path='/%s' % self.entry_point,
            tab_name='Progress')

    @wrappers.Request.application
    def _serve_js(self, request):
        del request  # unused
        filepath = os.path.join(
            os.path.dirname(__file__),
            "static",
            self.entry_point)
        with open(filepath) as infile:
            contents = infile.read()
        return werkzeug.Response(
            contents, content_type="application/javascript"
        )
