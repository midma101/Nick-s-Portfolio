import datetime

import jinja2

from flask import current_app


def format_timestamp(value):
    """filter to turn a postgres timestamp into something more human readable"""

    # TODO: fix this hackiness
    return datetime.datetime.strptime(value[:19], "%Y-%m-%dT%H:%M:%S").strftime("%B %d, %Y")


# not technically a filter; oh well
def include_static_template(name):
    """function to include a template file statically"""
    return jinja2.Markup(current_app.jinja_env.loader.get_source(current_app.jinja_env, name)[0])
