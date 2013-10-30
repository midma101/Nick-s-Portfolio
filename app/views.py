# -*- coding: utf-8 -*-
"""
    app.views
    ~~~~~~~~~~~

    Views for pre-registration

    :author: Adam Zucker
    :copyright: (c) 2013 by Hallspot.
"""

from flask import render_template
from app import app


@app.route('/')
def home():
    return render_template('index.html')