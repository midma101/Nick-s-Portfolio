from flask import Flask

app = Flask(__name__)
app.config.from_object('config')

from app import filters

app.jinja_env.filters['format_timestamp'] = filters.format_timestamp
app.jinja_env.globals['include_static_template'] = filters.include_static_template

from app import views



